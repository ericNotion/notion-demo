"use client";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { useState } from "react";
import { Example } from "../components/Example";

export default function ContextMenuPage() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <div className="flex flex-col">
      {/* Basic Context Menu */}
      <Example
        code={`<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>
      Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem disabled>
      Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Save Page As...</ContextMenuItem>
    <ContextMenuItem>Print...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              Back <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Save Page As...</ContextMenuItem>
            <ContextMenuItem>Print...</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      {/* With Submenus */}
      <Example
        code={`<ContextMenu>
  <ContextMenuTrigger className="...">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuItem>New Tab</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
      <ContextMenuSubContent className="w-48">
        <ContextMenuItem>Save Page As...</ContextMenuItem>
        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
        <ContextMenuItem>Name Window...</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Developer Tools</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>New Tab</ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuContent>
        </ContextMenu>
      </Example>

      {/* With Checkboxes and Radio Items */}
      <Example
        code={`<ContextMenu>
  <ContextMenuTrigger className="...">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent className="w-64">
    <ContextMenuLabel>Appearance</ContextMenuLabel>
    <ContextMenuSeparator />
    <ContextMenuCheckboxItem
      checked={showBookmarks}
      onCheckedChange={setShowBookmarks}
    >
      Show Bookmarks Bar
    </ContextMenuCheckboxItem>
    <ContextMenuCheckboxItem
      checked={showFullUrls}
      onCheckedChange={setShowFullUrls}
    >
      Show Full URLs
    </ContextMenuCheckboxItem>
    <ContextMenuSeparator />
    <ContextMenuLabel>People</ContextMenuLabel>
    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
      <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
      <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    </ContextMenuRadioGroup>
  </ContextMenuContent>
</ContextMenu>`}
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuLabel>Appearance</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={showBookmarks}
              onCheckedChange={setShowBookmarks}
            >
              Show Bookmarks Bar
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem
              checked={showFullUrls}
              onCheckedChange={setShowFullUrls}
            >
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
    </div>
  );
}
