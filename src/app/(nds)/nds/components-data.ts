type ComponentData = {
  name: string;
  slug: string;
  snippet: string;
};

export const componentsData: ComponentData[] = [
  {
    name: "Accordion",
    slug: "accordion",
    snippet:
      '<Accordion type="single" collapsible><AccordionItem value="item-1"><AccordionTrigger>Title</AccordionTrigger><AccordionContent>Content</AccordionContent></AccordionItem></Accordion>',
  },
  {
    name: "Alert",
    slug: "alert",
    snippet:
      "<Alert><AlertTitle>Heads up!</AlertTitle><AlertDescription>Description</AlertDescription></Alert>",
  },
  {
    name: "AlertDialog",
    slug: "alert-dialog",
    snippet:
      "<AlertDialog><AlertDialogTrigger asChild><Button>Open</Button></AlertDialogTrigger><AlertDialogContent>...</AlertDialogContent></AlertDialog>",
  },
  {
    name: "AspectRatio",
    slug: "aspect-ratio",
    snippet:
      '<AspectRatio ratio={16 / 9}><img src="..." className="object-cover" /></AspectRatio>',
  },
  {
    name: "Avatar",
    slug: "avatar",
    snippet: '<AvatarWithFallback src="/img/brian.jpg" fallback="JD" />',
  },
  {
    name: "Badge",
    slug: "badge",
    snippet: "<Badge>Badge</Badge>",
  },
  {
    name: "Breadcrumb",
    slug: "breadcrumb",
    snippet:
      '<Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>',
  },
  {
    name: "Button",
    slug: "button",
    snippet: "<Button>Button</Button>",
  },
  {
    name: "Card",
    slug: "card",
    snippet:
      "<Card><CardHeader><CardTitle>Title</CardTitle></CardHeader><CardContent>Content</CardContent></Card>",
  },
  {
    name: "Checkbox",
    slug: "checkbox",
    snippet: '<Checkbox label="Check me" />',
  },
  {
    name: "Collapsible",
    slug: "collapsible",
    snippet: "<Collapsible expanded={true}>Content</Collapsible>",
  },
  {
    name: "ContextMenu",
    slug: "context-menu",
    snippet:
      "<ContextMenu><ContextMenuTrigger>Right click</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Item</ContextMenuItem></ContextMenuContent></ContextMenu>",
  },
  {
    name: "Dialog",
    slug: "dialog",
    snippet:
      "<Dialog><DialogTrigger asChild><Button>Open</Button></DialogTrigger><DialogContent>...</DialogContent></Dialog>",
  },
  {
    name: "DropdownMenu",
    slug: "dropdown-menu",
    snippet:
      "<DropdownMenu><DropdownMenuTrigger asChild><Button>Open</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Item</DropdownMenuItem></DropdownMenuContent></DropdownMenu>",
  },
  {
    name: "FormControls",
    slug: "form-controls",
    snippet: '<Input placeholder="Type" />',
  },
  {
    name: "HoverCard",
    slug: "hover-card",
    snippet:
      "<HoverCard trigger={<Button>Hover</Button>}><HoverCardContent>...</HoverCardContent></HoverCard>",
  },
  {
    name: "IconButton",
    slug: "icon-button",
    snippet: '<IconButton><Icon icon={homeFillIcon} size="sm" /></IconButton>',
  },
  {
    name: "Input",
    slug: "input",
    snippet: '<Input placeholder="Enter text" />',
  },
  {
    name: "InputOTP",
    slug: "input-otp",
    snippet:
      "<InputOTP maxLength={6}><InputOTPGroup><InputOTPSlot index={0} /><InputOTPSlot index={1} /></InputOTPGroup></InputOTP>",
  },
  {
    name: "Label",
    slug: "label",
    snippet: '<Label htmlFor="email">Email</Label>',
  },
  {
    name: "LoadingDots",
    slug: "loading-dots",
    snippet: "<LoadingDots />",
  },
  {
    name: "LoadingSpinner",
    slug: "loading-spinner",
    snippet: "<LoadingSpinner />",
  },
  {
    name: "LoadingSquiggle",
    slug: "loading-squiggle",
    snippet: "<LoadingSquiggle />",
  },
  {
    name: "Menubar",
    slug: "menubar",
    snippet:
      "<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem></MenubarContent></MenubarMenu></Menubar>",
  },
  {
    name: "NavigationMenu",
    slug: "navigation-menu",
    snippet:
      "<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Item</NavigationMenuTrigger></NavigationMenuItem></NavigationMenuList></NavigationMenu>",
  },
  {
    name: "Pagination",
    slug: "pagination",
    snippet:
      '<Pagination><PaginationContent><PaginationItem><PaginationPrevious href="#" /></PaginationItem><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationItem><PaginationNext href="#" /></PaginationItem></PaginationContent></Pagination>',
  },
  {
    name: "Popover",
    slug: "popover",
    snippet:
      "<Popover><PopoverTrigger asChild><Button>Open</Button></PopoverTrigger><PopoverContent>Content</PopoverContent></Popover>",
  },
  {
    name: "Progress",
    slug: "progress",
    snippet: "<Progress value={33} />",
  },
  {
    name: "RadioGroup",
    slug: "radio-group",
    snippet:
      '<RadioGroup defaultValue="option-one"><div className="flex items-center space-x-2"><RadioGroupItem value="option-one" id="option-one" /><Label htmlFor="option-one">Option</Label></div></RadioGroup>',
  },
  {
    name: "ScrollArea",
    slug: "scroll-area",
    snippet:
      '<ScrollArea className="h-72 w-48 rounded-md border"><div className="p-4">Content</div></ScrollArea>',
  },
  {
    name: "Select",
    slug: "select",
    snippet:
      '<Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="1">Option</SelectItem></SelectContent></Select>',
  },
  {
    name: "Separator",
    slug: "separator",
    snippet: "<Separator />",
  },
  {
    name: "Sheet",
    slug: "sheet",
    snippet:
      "<Sheet><SheetTrigger asChild><Button>Open</Button></SheetTrigger><SheetContent>...</SheetContent></Sheet>",
  },
  {
    name: "Skeleton",
    slug: "skeleton",
    snippet: '<Skeleton className="h-4 w-[250px]" />',
  },
  {
    name: "Slider",
    slug: "slider",
    snippet: "<Slider defaultValue={[50]} max={100} step={1} />",
  },
  {
    name: "Sonner",
    slug: "sonner",
    snippet: 'toast("Event created")',
  },
  {
    name: "Switch",
    slug: "switch",
    snippet: "<Switch />",
  },
  {
    name: "Table",
    slug: "table",
    snippet:
      "<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Value</TableCell></TableRow></TableBody></Table>",
  },
  {
    name: "Tabs",
    slug: "tabs",
    snippet:
      '<Tabs defaultValue="account"><TabsList><TabsTrigger value="account">Account</TabsTrigger></TabsList><TabsContent value="account">Content</TabsContent></Tabs>',
  },
  {
    name: "Textarea",
    slug: "textarea",
    snippet: '<Textarea placeholder="Type here" />',
  },
  {
    name: "Toggle",
    slug: "toggle",
    snippet:
      '<Toggle aria-label="Toggle"><Icon icon={textBoldIcon} size={16} /></Toggle>',
  },
  {
    name: "ToggleGroup",
    slug: "toggle-group",
    snippet:
      '<ToggleGroup type="single"><ToggleGroupItem value="a">A</ToggleGroupItem><ToggleGroupItem value="b">B</ToggleGroupItem></ToggleGroup>',
  },
  {
    name: "Tooltip",
    slug: "tooltip",
    snippet: '<Tooltip content="Info"><Button>Hover</Button></Tooltip>',
  },
];
