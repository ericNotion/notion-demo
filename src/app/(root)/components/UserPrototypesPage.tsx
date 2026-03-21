import {
  IndexHeader,
  PrototypeItem,
  PrototypeSection,
  Username,
} from "@/app/(root)/components/IndexPage";
import { getAllUserPrototypes } from "@/app/(root)/lib/fs-utils";
import path from "path";

export default async function UserPrototypesPage({
  username,
}: {
  username: string;
}) {
  const appDir = path.join(process.cwd(), "src/app");
  const allUsers = await getAllUserPrototypes(appDir);
  const user = allUsers.find((u) => u.username === username);
  const prototypes = user?.prototypes || [];
  // foo
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4 py-16">
      <IndexHeader heading="Playground" />
      <ul className="flex flex-1 flex-col gap-8">
        <PrototypeSection>
          <Username username={username} />
          {prototypes.length > 0 ? (
            prototypes.map((proto) => (
              <PrototypeItem
                key={proto.slug}
                prototype={proto}
                username={username}
                isCurrentUsers={true}
              />
            ))
          ) : (
            <li className="text-sm text-neutral-500">No prototypes found</li>
          )}
        </PrototypeSection>
      </ul>
    </div>
  );
}
