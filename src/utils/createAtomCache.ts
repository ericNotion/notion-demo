import { atomWithStorage } from "jotai/utils";

export function createAtomCache<T>() {
  const cache = new Map<string, ReturnType<typeof atomWithStorage<T>>>();
  return (key: string, defaultValue: T) => {
    if (!cache.has(key)) {
      cache.set(key, atomWithStorage(key, defaultValue));
    }
    return cache.get(key)!;
  };
}
