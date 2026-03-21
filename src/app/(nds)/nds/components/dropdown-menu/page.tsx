"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Example } from "../components/Example";

export default function DropdownMenuPage() {
  const code = `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
  <DropdownMenuGroup>
    <DropdownMenuItem>Item</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`;
  return (
    <div className="flex flex-col">
      <Example code={code}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem>Item</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>
    </div>
  );
}
