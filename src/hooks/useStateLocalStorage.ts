import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export function useStateLocalStorage<T>(
  key: string,
  initialValue: T,
): [value: T, setValue: Dispatch<SetStateAction<T>>, isLoaded: boolean] {
  const [value, doSetValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);
  const initialValueRef = useRef(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue != null) {
      try {
        doSetValue(JSON.parse(storedValue));
      } catch (err) {
        console.warn(
          `useStateLocalStorage: Failed to parse value for key "${key}"; resetting to initial value`,
          err,
        );
        localStorage.setItem(key, JSON.stringify(initialValueRef.current));
        doSetValue(initialValueRef.current);
      }
    } else {
      localStorage.setItem(key, JSON.stringify(initialValueRef.current));
    }

    setIsLoaded(true);
  }, [key, doSetValue]);

  const setValue = (value: SetStateAction<T>) => {
    if (isCallable(value)) {
      doSetValue((oldValue) => {
        const newValue = value(oldValue);
        localStorage.setItem(key, JSON.stringify(newValue));
        return newValue;
      });
    } else {
      localStorage.setItem(key, JSON.stringify(value));
      doSetValue(value);
    }
  };

  return [value, setValue, isLoaded];
}

function isCallable<T>(value: SetStateAction<T>): value is (prevState: T) => T {
  return typeof value === "function";
}
