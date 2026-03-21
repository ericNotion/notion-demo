"use client";

import { BlockEditor, TitleEditor } from "@/components/notion-kit/editor";
import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
import {
  ChatContent,
  InboxContent,
  MeetingsContent,
  SlipperySidebar,
  SlipperySidebarLayout,
} from "@/components/notion-kit/SlipperySidebar";
import { calendarAltIcon } from "@nds-icons/calendarAlt/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { blocksAtom, documentTitleAtom, lastSavedAtom } from "../atoms";
import { chatGroups, inboxNotifications, meetingGroups } from "../data";
import { HomeContent } from "./HomeContent";

export default function SlipperySlope() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SlipperySidebarLayout
        sidebar={
          <SlipperySidebar header={<PrimarySidebarHeader />}>
            <SlipperySidebar.Tab id="home" label="Home" icon={homeIcon}>
              <HomeContent />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab id="chats" label="Chat" icon={chatBubbleIcon}>
              <ChatContent groups={chatGroups} />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab
              id="meetings"
              label="Meetings"
              icon={calendarAltIcon}
            >
              <MeetingsContent groups={meetingGroups} />
            </SlipperySidebar.Tab>
            <SlipperySidebar.Tab
              id="inbox"
              label="Inbox"
              icon={inboxIcon}
              count={3}
            >
              <InboxContent notifications={inboxNotifications} />
            </SlipperySidebar.Tab>
          </SlipperySidebar>
        }
        minWidth={240}
      >
        <div className="bg-primary flex min-w-0 flex-1 flex-col">
          <PageTopBar title={documentTitleAtom} />
          <div className="mx-auto flex h-full w-full max-w-3xl flex-col overflow-y-auto px-8">
            <div className="pt-[40px] pb-[4px]">
              <div className="h-[28px]" />
            </div>
            <TitleEditor
              className="content-page-title mx-auto w-full max-w-[710px] px-[2px] pt-[3px] text-3xl font-bold outline-none"
              titleAtom={documentTitleAtom}
              lastSavedAtom={lastSavedAtom}
            />
            <div className="mt-4 flex-1">
              <BlockEditor
                className="mx-auto w-full max-w-[710px]"
                blocksAtom={blocksAtom}
                lastSavedAtom={lastSavedAtom}
              />
            </div>
          </div>
        </div>
      </SlipperySidebarLayout>
    </div>
  );
}
