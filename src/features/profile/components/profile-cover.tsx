import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <div
      className={cn(
        "relative aspect-6/1 select-none sm:aspect-8/1 lg:aspect-10/1",
        "flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-primary/5 via-background to-muted/20",
        "screen-line-after after:-bottom-px"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
    </div>
  );
}
