// Brand mark - "VK" logo with opacity effects
export function BrandMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {`
            .vk-mark-base {
              font-family: var(--font-vt323), monospace;
              font-size: 170px;
              fill: rgba(150, 150, 150, 1);
            }
            .vk-mark-highlight {
              font-family: var(--font-vt323), monospace;
              font-size: 170px;
              fill: rgba(190, 190, 190, 0.4);
            }
          `}
        </style>
      </defs>
      <text x="150" y="144" textAnchor="middle">
        <tspan className="vk-mark-base">V</tspan>
        <tspan className="vk-mark-highlight">K</tspan>
      </text>
    </svg>
  );
}

export function getMarkSVG() {
  // "VK" brand mark - design with opacity effects
  return `<svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=VT323&amp;display=swap');
      .vk-mark-base { font-family: 'VT323', monospace; font-size: 170px; fill: rgba(150, 150, 150, 1); }
       .vk-mark-highlight { font-family: 'VT323', monospace; font-size: 170px; fill: rgba(190, 190, 190, 0.4); }
    </style>
     <text x="150" y="144" text-anchor="middle">
       <tspan class="vk-mark-base">V</tspan>
       <tspan class="vk-mark-highlight">K</tspan>
     </text>
  </svg>`;
}
