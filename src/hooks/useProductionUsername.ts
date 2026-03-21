"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "playground-username";

type UsernameState = {
  username: string | null;
  isValid: boolean;
  isLoading: boolean;
  isChecking: boolean;
};

/**
 * Hook to manage username in production environment
 * Stores username in localStorage and validates against API
 */
export function useProductionUsername() {
  const [state, setState] = useState<UsernameState>({
    username: null,
    isValid: false,
    isLoading: true,
    isChecking: false,
  });

  // Load username from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem(STORAGE_KEY);
    if (storedUsername) {
      // Validate the stored username
      validateUsername(storedUsername);
    } else {
      setState({
        username: null,
        isValid: false,
        isLoading: false,
        isChecking: false,
      });
    }
  }, []);

  async function validateUsername(username: string) {
    setState((prev) => ({ ...prev, isChecking: true }));

    try {
      const response = await fetch(
        `/api/validate-username?username=${encodeURIComponent(username)}`,
      );
      const data = await response.json();

      setState({
        username,
        isValid: data.valid,
        isLoading: false,
        isChecking: false,
      });
    } catch (error) {
      console.error("Failed to validate username:", error);
      setState({
        username,
        isValid: false,
        isLoading: false,
        isChecking: false,
      });
    }
  }

  function setUsername(username: string) {
    localStorage.setItem(STORAGE_KEY, username);
    validateUsername(username);
  }

  function clearUsername() {
    localStorage.removeItem(STORAGE_KEY);
    setState({
      username: null,
      isValid: false,
      isLoading: false,
      isChecking: false,
    });
  }

  return {
    username: state.username,
    isValid: state.isValid,
    isLoading: state.isLoading,
    isChecking: state.isChecking,
    setUsername,
    clearUsername,
  };
}
