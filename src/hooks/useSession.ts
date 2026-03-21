type Session = {
  user?: {
    email?: string;
    name?: string;
    playgroundUsername?: string;
    notionUserId?: string;
    githubUsername?: string;
  };
} | null;

export function useSession() {
  return {
    data: null as Session,
    status: "unauthenticated" as const,
    session: null as Session,
    isAuthenticated: false,
    isLoading: false,
  };
}
