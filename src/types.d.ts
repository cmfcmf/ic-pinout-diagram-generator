declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: "development" | "production";
  }
}

declare module "bundle-text:*" {
  const content: string;
  export = content;
}

declare module "onecolor/one-color-all" {
  const fn: (color: string) => {
    red: () => number;
    green: () => number;
    blue: () => number;
  };

  export = fn;
}

declare module "react-lag-radar" {
  const component: React.ComponentType<{
    frames?: number;
    speed?: number;
    size?: number;
    inset?: number;
  }>;

  export = component;
}
