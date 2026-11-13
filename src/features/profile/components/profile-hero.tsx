"use client";

import { FileTextIcon, MailIcon } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";

import { getIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { USER } from "@/features/profile/data/user";
import { cn } from "@/lib/utils";
import { FlipSentences } from "@/registry/flip-sentences";

import { VerifiedIcon } from "./verified-icon";

/** Your resume PDF in /public. Replace the file to update it. */
const RESUME_PDF_URL = "/Vishruthi_KV_Resume.pdf";

function TechPill({
  name,
  iconKey,
  className,
  url,
}: {
  name: string;
  iconKey: string;
  className?: string;
  url: string;
}) {
  const icon = getIcon(iconKey, 14);
  // Clone the icon to strip its alt text — it's decorative since {name} is already visible.
  // Without this, copied text includes the image alt + the label, e.g. "n8nn8n".
  const decorativeIcon =
    icon && React.isValidElement(icon)
      ? React.cloneElement(icon as React.ReactElement<{ alt: string }>, {
          alt: "",
        })
      : icon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-0.5 align-middle text-sm font-medium text-foreground transition-colors hover:bg-muted",
        className
      )}
    >
      {decorativeIcon}
      {name}
    </a>
  );
}

export function ProfileHero() {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section className="flex flex-col gap-3 py-2 sm:flex-row sm:gap-8">
      {/* Profile Picture & Status - 3D Holographic */}
      <div className="shrink-0">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
            perspective: 800,
          }}
          className="relative flex justify-center p-1 sm:p-2"
        >
          <motion.div
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            className="relative size-32 sm:size-36 md:size-44"
          >
            <div className="relative size-full overflow-hidden rounded-full border-4 border-border shadow-xl">
              <Image
                src={USER.avatar}
                alt={USER.displayName}
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 176px"
                className="object-cover object-[center_15%]"
                priority
              />

              {/* Holographic overlay - subtle */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-info/10 via-transparent to-info/10"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Status indicator */}
            <motion.div
              style={{
                transform: "translateZ(75px)",
              }}
              className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4"
            >
              <motion.div
                className="relative size-6 sm:size-7"
                animate={{
                  scale: isHovered ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-background bg-green-500 shadow-sm" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-400"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Subtle ambient glow */}
            <motion.div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-foreground/5 blur-xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.2 : 0.05,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center gap-5 p-1 sm:p-2">
        <div>
          <h1 className="flex items-center text-4xl font-bold md:text-5xl">
            {USER.displayName}
            &nbsp;
            <SimpleTooltip content="Verified">
              <VerifiedIcon className="size-[0.5em] text-info select-none" />
            </SimpleTooltip>
          </h1>

          <div className="mt-3">
            <FlipSentences sentences={USER.flipSentences} />
          </div>
        </div>

        <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          <p>
            I build full-stack web applications with{" "}
            <TechPill
              name="Java"
              iconKey="java"
              className="border-[#E76F00]/20 bg-[#E76F00]/10 text-[#E76F00]"
              url="https://www.java.com"
            />
            ,{" "}
            <TechPill
              name="Spring Boot"
              iconKey="springboot"
              className="border-[#6DB33F]/20 bg-[#6DB33F]/10 text-[#6DB33F]"
              url="https://spring.io/projects/spring-boot"
            />
            , and{" "}
            <TechPill
              name="React"
              iconKey="react"
              className="text-foreground"
              url="https://react.dev"
            />
            . Oracle Certified Java SE 21 Developer and ECE undergrad at
            Saveetha Engineering College. Full Stack Intern at ESG Sentinel
            building scalable backends with{" "}
            <TechPill
              name="Node.js"
              iconKey="nodejs"
              className="border-[#339933]/20 bg-[#339933]/10 text-[#339933]"
              url="https://nodejs.org"
            />
            ,{" "}
            <TechPill
              name="PostgreSQL"
              iconKey="postgresql"
              className="border-[#336791]/20 bg-[#336791]/10 text-[#336791]"
              url="https://www.postgresql.org"
            />
            , and{" "}
            <TechPill
              name="TypeScript"
              iconKey="ts"
              className="border-[#3178C6]/20 bg-[#3178C6]/10 text-[#3178C6]"
              url="https://www.typescriptlang.org"
            />
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-7">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={RESUME_PDF_URL} target="_blank" rel="noopener noreferrer">
              <FileTextIcon className="mr-2 size-4" />
              Resume / CV
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="rounded-full px-8"
          >
            <a href={`mailto:${atob(USER.email)}`}>
              <MailIcon className="mr-2 size-4" />
              Get in touch
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3">
          {SOCIAL_LINKS.map((link, index) => {
            const IconComponent =
              typeof link.icon === "function" ? link.icon : null;

            return (
              <SimpleTooltip key={index} content={link.title}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {IconComponent && <IconComponent className="size-5" />}
                  <span className="sr-only">{link.title}</span>
                </a>
              </SimpleTooltip>
            );
          })}
        </div>
      </div>
    </section>
  );
}
