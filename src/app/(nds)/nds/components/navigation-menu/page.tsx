"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/utils/cn";
import React from "react";
import { Example } from "../components/Example";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function NavigationMenuPage() {
  return (
    <div className="flex flex-col">
      {/* Basic Navigation Menu */}
      <Example
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-none select-none focus:shadow-md" href="/">
                <div className="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                <p className="text-muted-foreground text-sm leading-tight">
                  Beautifully designed components.
                </p>
              </a>
            </NavigationMenuLink>
          </li>
          <ListItem href="/docs" title="Introduction">
            Re-usable components built using Radix UI and Tailwind.
          </ListItem>
          <ListItem href="/docs/installation" title="Installation">
            How to install dependencies and structure your app.
          </ListItem>
          <ListItem href="/docs/primitives/typography" title="Typography">
            Styles for headings, paragraphs, lists...etc
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          <ListItem title="Alert Dialog" href="/docs/alert-dialog">
            A modal dialog that interrupts the user.
          </ListItem>
          <ListItem title="Hover Card" href="/docs/hover-card">
            For sighted users to preview content.
          </ListItem>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
        Documentation
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <span className="from-muted/50 to-muted flex h-full w-full cursor-pointer flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-none select-none focus:shadow-md">
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components.
                        </p>
                      </span>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <ListItem title="Alert Dialog" href="/docs/alert-dialog">
                    A modal dialog that interrupts the user.
                  </ListItem>
                  <ListItem title="Hover Card" href="/docs/hover-card">
                    For sighted users to preview content.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/docs"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Example>

      {/* Simple Links */}
      <Example
        code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
        Home
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
        About
      </NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
        Contact
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/about"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/contact"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Example>
    </div>
  );
}
