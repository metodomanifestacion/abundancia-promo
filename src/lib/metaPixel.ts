declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

type MetaCommand = "track" | "trackCustom" | "init";

export const trackMetaEvent = (
  command: MetaCommand,
  eventName: string,
  parameters?: Record<string, string | number | boolean>,
) => {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  if (parameters) {
    window.fbq(command, eventName, parameters);
    return;
  }

  window.fbq(command, eventName);
};

export const trackPurchaseOnce = (storageKey: string, value: number, currency: string) => {
  if (typeof window === "undefined") {
    return;
  }

  const alreadyTracked = window.sessionStorage.getItem(storageKey);

  if (alreadyTracked) {
    return;
  }

  trackMetaEvent("track", "Purchase", { value, currency });
  window.sessionStorage.setItem(storageKey, "true");
};

export {};