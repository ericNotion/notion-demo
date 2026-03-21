"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useState } from "react";
import { Example } from "../components/Example";

export default function MenubarPage() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [person, setPerson] = useState("andy");

  return (
    <div className="flex flex-col">
      {/* Basic Menubar */}
      <Example
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Cut</MenubarItem>
      <MenubarItem>Copy</MenubarItem>
      <MenubarItem>Paste</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Reload</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Toggle Fullscreen</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Reload</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Toggle Fullscreen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Example>

      {/* With Submenus */}
      <Example
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New File</MenubarItem>
      <MenubarSub>
        <MenubarSubTrigger>New</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>File</MenubarItem>
          <MenubarItem>Folder</MenubarItem>
          <MenubarItem>From Template</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New File</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>New</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>File</MenubarItem>
                  <MenubarItem>Folder</MenubarItem>
                  <MenubarItem>From Template</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Exit</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Example>

      {/* With Checkboxes and Radio Items */}
      <Example
        code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem
        checked={showBookmarks}
        onCheckedChange={setShowBookmarks}
      >
        Always Show Bookmarks Bar
      </MenubarCheckboxItem>
      <MenubarCheckboxItem
        checked={showFullUrls}
        onCheckedChange={setShowFullUrls}
      >
        Always Show Full URLs
      </MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarRadioGroup value={person} onValueChange={setPerson}>
        <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
        <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
        <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
      </MenubarRadioGroup>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem
                checked={showBookmarks}
                onCheckedChange={setShowBookmarks}
              >
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={showFullUrls}
                onCheckedChange={setShowFullUrls}
              >
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarRadioGroup value={person} onValueChange={setPerson}>
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Example>
    </div>
  );
}
