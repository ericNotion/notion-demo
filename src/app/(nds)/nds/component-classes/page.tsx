"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/form-controls";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/sonner";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icon } from "@nds-icons";
import { exclamationMarkTriangleIcon } from "@nds-icons/exclamationMarkTriangle/default.icon";
import { infoCircleIcon } from "@nds-icons/infoCircle/default.icon";
import { textBoldIcon } from "@nds-icons/textBold/default.icon";
import { textItalicIcon } from "@nds-icons/textItalic/default.icon";
import { textUnderlineIcon } from "@nds-icons/textUnderline/default.icon";
import React from "react";
import { toast } from "sonner";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-primary border-b py-8">
      <h2 className="text-primary mb-4 text-lg font-semibold">{title}</h2>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  );
}

export default function ComponentClassesPage() {
  const [progress, setProgress] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-5xl p-8">
      <h1 className="text-primary mb-2 text-2xl font-bold">
        ShadCN UI Component Classes Audit
      </h1>
      <p className="text-secondary mb-8">
        This page renders one variant of every ShadCN UI component for visual
        inspection of theming in both light and dark modes.
      </p>

      <Toaster />

      {/* Accordion */}
      <Section title="Accordion">
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match your design system.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* Alert */}
      <Section title="Alert">
        <Alert>
          <Icon icon={infoCircleIcon} size={16} />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            This is a default alert with an icon.
          </AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <Icon icon={exclamationMarkTriangleIcon} size={16} />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>Something went wrong!</AlertDescription>
        </Alert>
      </Section>

      {/* AlertDialog */}
      <Section title="AlertDialog">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Open Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Section>

      {/* AspectRatio */}
      <Section title="AspectRatio">
        <div className="w-[200px]">
          <AspectRatio
            ratio={16 / 9}
            className="bg-tertiary-translucent rounded-md"
          >
            <div className="text-secondary flex h-full items-center justify-center">
              16:9
            </div>
          </AspectRatio>
        </div>
      </Section>

      {/* Avatar */}
      <Section title="Avatar">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </Section>

      {/* Badge */}
      <Section title="Badge">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </Section>

      {/* Breadcrumb */}
      <Section title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Section>

      {/* Button */}
      <Section title="Button">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="tint">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </Section>

      {/* Calendar */}
      <Section title="Calendar">
        <Calendar mode="single" className="rounded-md border" />
      </Section>

      {/* Card */}
      <Section title="Card">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card content with some text.</p>
          </CardContent>
          <CardFooter>
            <Button>Action</Button>
          </CardFooter>
        </Card>
      </Section>

      {/* Carousel */}
      <Section title="Carousel">
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-secondary-translucent flex aspect-square items-center justify-center rounded-md p-6">
                <span className="text-2xl font-semibold">1</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-secondary-translucent flex aspect-square items-center justify-center rounded-md p-6">
                <span className="text-2xl font-semibold">2</span>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-secondary-translucent flex aspect-square items-center justify-center rounded-md p-6">
                <span className="text-2xl font-semibold">3</span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Section>

      {/* Checkbox */}
      <Section title="Checkbox">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled">Disabled checkbox</Label>
        </div>
      </Section>

      {/* Collapsible */}
      <Section title="Collapsible">
        <Collapsible className="w-[350px] space-y-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-between">
              Toggle Collapsible
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="bg-secondary-translucent rounded-md px-4 py-2 text-sm">
              Collapsible content here.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Section>

      {/* Command */}
      <Section title="Command">
        <Command className="w-[300px] rounded-lg border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Section>

      {/* ContextMenu */}
      <Section title="ContextMenu">
        <ContextMenu>
          <ContextMenuTrigger className="text-secondary flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              Back <ContextMenuShortcut>Cmd+[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Forward <ContextMenuShortcut>Cmd+]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuLabel>Options</ContextMenuLabel>
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuRadioItem value="pedro">Pedro</ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">Colm</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Section>

      {/* Dialog */}
      <Section title="Dialog">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog description. It provides additional context.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">Dialog content goes here.</div>
          </DialogContent>
        </Dialog>
      </Section>

      {/* DropdownMenu */}
      <Section title="DropdownMenu">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      {/* HoverCard */}
      <Section title="HoverCard">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@nextjs</h4>
              <p className="text-sm">
                The React Framework – created and maintained by @vercel.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Section>

      {/* Input */}
      <Section title="Input">
        <Input placeholder="Default input" className="w-[250px]" />
      </Section>

      {/* InputOTP */}
      <Section title="InputOTP">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Section>

      {/* Label */}
      <Section title="Label">
        <div className="flex items-center gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="email@example.com"
            className="w-[200px]"
          />
        </div>
      </Section>

      {/* Menubar */}
      <Section title="Menubar">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>Cmd+T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email Link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarRadioGroup value="andy">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Section>

      {/* NavigationMenu */}
      <Section title="NavigationMenu">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <span className="hover:bg-secondary-translucent block cursor-pointer space-y-1 rounded-md p-3">
                        <div className="text-sm font-medium">Introduction</div>
                        <p className="text-secondary text-sm">
                          Re-usable components built using Radix UI.
                        </p>
                      </span>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="#"
              >
                Documentation
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Section>

      {/* Pagination */}
      <Section title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Section>

      {/* Popover */}
      <Section title="Popover">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium">Dimensions</h4>
                <p className="text-secondary text-sm">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </Section>

      {/* Progress */}
      <Section title="Progress">
        <Progress value={progress} className="w-[300px]" />
      </Section>

      {/* RadioGroup */}
      <Section title="RadioGroup">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Option Two</Label>
          </div>
        </RadioGroup>
      </Section>

      {/* Resizable */}
      <Section title="Resizable">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[100px] max-w-md rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel 1</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Panel 2</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Section>

      {/* ScrollArea */}
      <Section title="ScrollArea">
        <ScrollArea className="h-[200px] w-[200px] rounded-md border p-4">
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="text-sm">
                Item {i + 1}
              </div>
            ))}
          </div>
        </ScrollArea>
      </Section>

      {/* Select */}
      <Section title="Select">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      </Section>

      {/* Separator */}
      <Section title="Separator">
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </Section>

      {/* Sheet */}
      <Section title="Sheet">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a sheet component for slide-out panels.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">Sheet content goes here.</div>
          </SheetContent>
        </Sheet>
      </Section>

      {/* Skeleton */}
      <Section title="Skeleton">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Section>

      {/* Slider */}
      <Section title="Slider">
        <Slider defaultValue={[50]} max={100} step={1} className="w-[300px]" />
      </Section>

      {/* Sonner (Toast) */}
      <Section title="Sonner (Toast)">
        <Button
          variant="outline"
          onClick={() =>
            toast("Event has been created", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
            })
          }
        >
          Show Toast
        </Button>
      </Section>

      {/* Switch */}
      <Section title="Switch">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </Section>

      {/* Table */}
      <Section title="Table">
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>$150.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      {/* Tabs */}
      <Section title="Tabs">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Make changes to your account.</CardDescription>
              </CardHeader>
              <CardContent>Account settings content.</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>Change your password here.</CardDescription>
              </CardHeader>
              <CardContent>Password settings content.</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Section>

      {/* Textarea */}
      <Section title="Textarea">
        <Textarea placeholder="Type your message here." className="w-[300px]" />
      </Section>

      {/* Toggle */}
      <Section title="Toggle">
        <Toggle aria-label="Toggle bold">
          <Icon icon={textBoldIcon} size={16} />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic">
          <Icon icon={textItalicIcon} size={16} />
        </Toggle>
      </Section>

      {/* ToggleGroup */}
      <Section title="ToggleGroup">
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Icon icon={textBoldIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Icon icon={textItalicIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Icon icon={textUnderlineIcon} size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Section>

      {/* Tooltip */}
      <Section title="Tooltip">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Section>
    </div>
  );
}
