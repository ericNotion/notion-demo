"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/form-controls";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Example } from "../components/Example";

export default function SheetPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Sheet (Right) */}
      <Example
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" className="col-span-3" />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="username" className="text-right">Username</Label>
        <Input id="username" value="@peduarte" className="col-span-3" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Example>

      {/* Sheet from Left */}
      <Example
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Left</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>Browse the menu options.</SheetDescription>
    </SheetHeader>
    <nav className="grid gap-2 py-4">
      <a href="#" className="block py-2 hover:underline">Home</a>
      <a href="#" className="block py-2 hover:underline">About</a>
      <a href="#" className="block py-2 hover:underline">Services</a>
      <a href="#" className="block py-2 hover:underline">Contact</a>
    </nav>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>Browse the menu options.</SheetDescription>
            </SheetHeader>
            <nav className="grid gap-2 py-4">
              <a href="#" className="block py-2 hover:underline">
                Home
              </a>
              <a href="#" className="block py-2 hover:underline">
                About
              </a>
              <a href="#" className="block py-2 hover:underline">
                Services
              </a>
              <a href="#" className="block py-2 hover:underline">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </Example>

      {/* Sheet from Top */}
      <Example
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Top</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Announcement</SheetTitle>
      <SheetDescription>
        Check out our latest updates and features.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Top</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Announcement</SheetTitle>
              <SheetDescription>
                Check out our latest updates and features.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Example>

      {/* Sheet from Bottom */}
      <Example
        code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Bottom</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Actions</SheetTitle>
      <SheetDescription>
        Choose an action to perform.
      </SheetDescription>
    </SheetHeader>
    <div className="flex gap-2 py-4">
      <Button variant="outline" className="flex-1">Share</Button>
      <Button variant="outline" className="flex-1">Copy Link</Button>
      <Button variant="outline" className="flex-1">Download</Button>
    </div>
  </SheetContent>
</Sheet>`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Actions</SheetTitle>
              <SheetDescription>Choose an action to perform.</SheetDescription>
            </SheetHeader>
            <div className="flex gap-2 py-4">
              <Button variant="outline" className="flex-1">
                Share
              </Button>
              <Button variant="outline" className="flex-1">
                Copy Link
              </Button>
              <Button variant="outline" className="flex-1">
                Download
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </Example>
    </div>
  );
}
