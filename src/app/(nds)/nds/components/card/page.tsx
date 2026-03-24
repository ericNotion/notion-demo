"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/form-controls";
import { Label } from "@/components/ui/label";
import { Example } from "../components/Example";

export default function CardPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Card */}
      <Example
        code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Example>

      {/* Card with Form */}
      <Example
        code={`<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Name of your project" />
        </div>
      </div>
    </form>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </Example>

      {/* Simple Card */}
      <Example
        code={`<Card>
  <CardContent>
    <p>A simple card with just content.</p>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-sm">
          <CardContent>
            <p>A simple card with just content.</p>
          </CardContent>
        </Card>
      </Example>

      {/* Notification Card */}
      <Example
        code={`<Card>
  <CardHeader className="pb-3">
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent className="grid gap-1">
    <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent">
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">Everything set up!</p>
        <p className="text-sm text-muted-foreground">
          Your account has been created.
        </p>
      </div>
    </div>
  </CardContent>
</Card>`}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="pb-3">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="hover:bg-accent -mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
              <div className="space-y-1">
                <p className="text-sm leading-none font-medium">
                  Everything set up!
                </p>
                <p className="text-muted-foreground text-sm">
                  Your account has been created.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Example>
    </div>
  );
}
