export const STORAGE_KEYS = {
  cart: "foodhive.cart",
  city: "foodhive.city",
} as const;

export function loadPersisted<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function savePersisted(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Private mode and quota errors should not break the app */
  }
}
