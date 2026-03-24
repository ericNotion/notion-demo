import type {
  ChatGroup,
  InboxNotification,
  MeetingGroup,
} from "@/components/notion-kit/SlipperySidebar";

export const privatePages = [
  { emoji: "📋", label: "Q1 Planning", href: "#" },
  { emoji: "🎨", label: "Design System Updates", href: "#" },
  { emoji: "🚀", label: "Launch Checklist", href: "#" },
];

export const sharedPages = [
  { emoji: "📝", label: "Meeting Notes", href: "#" },
  { emoji: "💡", label: "Product Ideas", href: "#" },
  { emoji: "📊", label: "Analytics Dashboard", href: "#" },
];

export const favoritePages = [
  { emoji: "⭐", label: "Quick Links", href: "#" },
  { emoji: "📌", label: "Pinned Docs", href: "#" },
];

export const upcomingEvents = [
  {
    id: "1",
    title: "Jam on homepage",
    timeRange: "10 – 11 AM",
    color: "#5e9fe8",
  },
  {
    id: "2",
    title: "Kickoff",
    timeRange: "12 – 1 PM",
    color: "#d49a6a",
  },
  {
    id: "3",
    title: "Happy Hour",
    timeRange: "4 – 5 PM",
    color: "#9a6dd7",
  },
];

export const recents = [
  { id: "1", emoji: "📋", label: "Q1 Planning" },
  { id: "2", emoji: "🎨", label: "Design System Updates" },
  { id: "3", emoji: "🚀", label: "Launch Checklist" },
  { id: "4", emoji: "📝", label: "Meeting Notes" },
  { id: "5", emoji: "💡", label: "Product Ideas" },
];

export const agents = [
  {
    id: "1",
    name: "Research Assistant",
    avatar: "/images/customAgentAvatars/square-blue-sm.png",
  },
  {
    id: "2",
    name: "Writing Coach",
    avatar: "/images/customAgentAvatars/bulb-purple-sm.png",
  },
  {
    id: "3",
    name: "Code Review",
    avatar: "/images/customAgentAvatars/chat-orange-sm.png",
  },
];

export const chatGroups: ChatGroup[] = [
  {
    label: "Today",
    chats: [
      {
        id: "c1",
        title: "Your Thursday brief",
        time: "1h",
        isDailyBrief: true,
      },
      { id: "c2", title: "Team sync at 3pm", time: "2h" },
      { id: "c3", title: "Discuss Q3 roadmap", time: "2h" },
    ],
  },
  {
    label: "Yesterday",
    chats: [
      { id: "c4", title: "Brainstorm new features", time: "1d" },
      { id: "c5", title: "Marketing campaign...", time: "1d" },
      { id: "c6", title: "Design review session", time: "1d" },
      { id: "c7", title: "Client presentation prep", time: "1d" },
      { id: "c8", title: "Budget planning meeting", time: "1d" },
    ],
  },
  {
    label: "Past week",
    chats: [
      { id: "c9", title: "Customer support training", time: "2d" },
      { id: "c10", title: "Employee onboarding...", time: "2d" },
      { id: "c11", title: "Vendor contract review", time: "4d" },
      { id: "c12", title: "Project X status update", time: "Feb 19" },
      { id: "c13", title: "Sales team strategy", time: "Feb 19" },
      { id: "c14", title: "Product launch checklist", time: "Feb 19" },
      { id: "c15", title: "HR policy updates", time: "Feb 19" },
      { id: "c16", title: "IT infrastructure upgrade", time: "Feb 19" },
      { id: "c17", title: "Legal compliance review", time: "Feb 19" },
    ],
  },
];

export const meetingGroups: MeetingGroup[] = [
  {
    label: "Upcoming events",
    isUpcoming: true,
    events: [
      {
        id: "m1",
        title: "Jam on homepage",
        timeRange: "10 – 11 AM",
        color: "#5e9fe8",
      },
      {
        id: "m2",
        title: "Kickoff",
        timeRange: "12 – 1 PM",
        color: "#d49a6a",
      },
      {
        id: "m3",
        title: "Happy Hour",
        timeRange: "4 – 5 PM",
        color: "#9a6dd7",
      },
    ],
  },
  {
    label: "Today",
    events: [
      { id: "m4", title: "Spotlight Session", timeRange: "8 – 9 AM" },
      { id: "m5", title: "Launchpad Gathering", timeRange: "9 – 10 AM" },
      { id: "m6", title: "Sunset Soiree", timeRange: "4 – 5 PM" },
    ],
  },
  {
    label: "Yesterday",
    events: [
      { id: "m7", title: "Feature Focus", timeRange: "11 AM – 12 PM" },
      { id: "m8", title: "Kickoff Meetup", timeRange: "12 – 1 PM" },
      { id: "m9", title: "Twilight Bash", timeRange: "3 – 3:30 PM" },
      { id: "m10", title: "Catch-up w/ Ian", timeRange: "4 – 4:30 PM" },
    ],
  },
];

export const inboxNotifications: InboxNotification[] = [
  {
    id: "n1",
    user: "Sophie",
    avatarColor: "#b0a8a0",
    action: "mentioned you in",
    pageEmoji: "📃",
    pageTitle: "@Today",
    preview: "Let's write in here for our 1:1 today",
    time: "1h",
  },
  {
    id: "n2",
    user: "Sophie",
    avatarColor: "#b0a8a0",
    action: "mentioned you in",
    pageEmoji: "📈",
    pageTitle: "Weekly sync",
    preview: "Why are we not including last quarter's numbers here?",
    time: "3h",
  },
  {
    id: "n3",
    user: "Vough",
    avatarColor: "#d4a843",
    action: "commented in",
    pageEmoji: "📈",
    pageTitle: "Design Lightening",
    preview: "@James where did my slide go!",
    previewMention: "James",
    time: "3h",
  },
];
