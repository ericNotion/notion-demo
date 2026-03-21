import { allowFileSystemOperations } from "@/utils/env";
import useSWR from "swr";

type GitStatusResponse = {
  prototypes: Record<string, boolean>;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGitStatus() {
  const shouldFetch = allowFileSystemOperations();

  const { data, error, isLoading } = useSWR<GitStatusResponse>(
    shouldFetch ? "/api/git-status" : null,
    fetcher,
    {
      refreshInterval: 5000, // Refresh every 5 seconds
      revalidateOnFocus: true,
    },
  );

  return {
    gitStatus: data?.prototypes || {},
    isLoading,
    error,
  };
}
