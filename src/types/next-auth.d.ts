import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      playgroundUsername?: string;
      notionUserId?: string;
      githubUsername?: string;
    };
  }

  interface User {
    playgroundUsername?: string;
    notionUserId?: string;
    githubUsername?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    playgroundUsername?: string;
    notionUserId?: string;
    githubUsername?: string;
  }
}
