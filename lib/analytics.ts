export type UmamiEventProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (name: string, properties?: UmamiEventProperties) => void;
    };
  }
}

export function trackUmami(
  name: string,
  properties: UmamiEventProperties = {}
) {
  if (typeof window === "undefined") return;
  window.umami?.track(name, properties);
}
