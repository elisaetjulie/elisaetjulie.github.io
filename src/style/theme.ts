const breakpoints = {
  xs: 360,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1920,
} as const;

const down = (bp: Breakpoint | number) => {
  if (typeof bp === "number") return `@media (max-width: ${bp}px)`;
  return `@media (max-width: ${breakpoints[bp] - 1}px)`;
};

const up = (bp: Breakpoint | number) => {
  if (typeof bp === "number") return `@media (min-width: ${bp}px)`;
  return `@media (min-width: ${breakpoints[bp]}px)`;
};

export type Breakpoint = keyof typeof breakpoints;

export const theme = {
  colors: {
    primary: "#3F50A2",
  },
  fontSizes: {
    normal: "1em",
    large: "1.5em",
    title: "2em",
  },
  spacings: {
    4: "4px",
    8: "8px",
    16: "16px",
    32: "32px",
    64: "64px",
  },
  breakpoints: {
    xs: `${breakpoints.xs}px`,
    sm: `${breakpoints.sm}px`,
    md: `${breakpoints.md}px`,
    lg: `${breakpoints.lg}px`,
    xl: `${breakpoints.xl}px`,
    up,
    down,
  },
} as const;
