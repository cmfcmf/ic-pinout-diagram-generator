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
