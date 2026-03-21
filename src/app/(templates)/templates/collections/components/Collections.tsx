"use client";

import { TopBar } from "@/app/(templates)/templates/notion-ui/components/TopBar";
import { PrimarySidebar } from "@/components/playground-kit/PrimarySidebar";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { aiFaceIcon } from "@nds-icons/aiFace/default.icon";
import { checkmarkCircleFillIcon } from "@nds-icons/checkmarkCircle/fill.icon";
import { commentIcon } from "@nds-icons/comment/default.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { useState } from "react";
import { BoardView } from "./BoardView";
import { CollectionsBlock } from "./CollectionsBlock";
import { CollectionsViewHeader } from "./CollectionsViewHeader";

type PropertyType = "Title" | "Text" | "Person" | "Status" | "Select";

interface Property {
  id: string;
  name: string;
  type: PropertyType;
  width?: number;
}

const exampleProperties: Property[] = [
  { id: "title", name: "Title", type: "Title", width: 250 },
  { id: "status", name: "Status", type: "Status" },
  { id: "assignee", name: "Assignee", type: "Person", width: 200 },
  { id: "priority", name: "Priority", type: "Select" },
  { id: "description", name: "Description", type: "Text", width: 400 },
];

const exampleRows = [
  {
    id: "1",
    title: "Implement Collections Block",
    status: "In Progress",
    assignee: "John Doe",
    priority: "High",
    description: "Create a flexible data grid component",
  },
  {
    id: "2",
    title: "Add sorting functionality",
    status: "Not Started",
    assignee: "Jane Smith",
    priority: "Medium",
    description: "Implement column sorting",
  },
  {
    id: "3",
    title: "Design system integration",
    status: "Completed",
    assignee: "Mike Johnson",
    priority: "Low",
    description: "Update colors and spacing",
  },
  {
    id: "4",
    title: "Write documentation",
    status: "In Progress",
    assignee: "Emily Carter",
    priority: "Medium",
    description: "Draft user and developer docs",
  },
  {
    id: "5",
    title: "Refactor API layer",
    status: "Not Started",
    assignee: "Alex Kim",
    priority: "High",
    description: "Improve API structure and error handling",
  },
  {
    id: "6",
    title: "Set up CI/CD pipeline",
    status: "Not Started",
    assignee: "Priya Singh",
    priority: "Low",
    description: "Automate build and deployment process",
  },
];

export default function Collections() {
  const [activeView, setActiveView] = useState("Table");
  const [rows, setRows] = useState(exampleRows);

  const handleRowUpdate = (
    rowId: string,
    updates: Partial<(typeof rows)[0]>,
  ) => {
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === rowId ? { ...row, ...updates } : row)),
    );
  };

  const renderView = () => {
    switch (activeView) {
      case "Board":
        return (
          <BoardView
            properties={exampleProperties}
            rows={rows}
            onRowUpdate={handleRowUpdate}
          />
        );
      case "Table":
        return <CollectionsBlock properties={exampleProperties} rows={rows} />;
      case "Form":
        return (
          <div className="text-text-color-tertiary px-24 py-8 text-center">
            Form view coming soon...
          </div>
        );
      default:
        return <CollectionsBlock properties={exampleProperties} rows={rows} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <PrimarySidebar />

      <div className="border-secondary bg-elevated dark:bg-primary flex flex-1 flex-col overflow-hidden border-l">
        <TopBar>
          <div className="flex items-center gap-1.5">
            <Icon icon={checkmarkCircleFillIcon} color="redPrimary" />
            <span className="text-sm font-medium">Collections</span>
          </div>

          <div className="ml-auto flex items-center gap-0.5">
            <Button variant="ghost">Share</Button>
            <IconButton>
              <Icon icon={commentIcon} />
            </IconButton>
            <IconButton>
              <Icon icon={starIcon} />
            </IconButton>
            <IconButton>
              <Icon icon={ellipsisIcon} />
            </IconButton>
            <IconButton>
              <Icon icon={aiFaceIcon} />
            </IconButton>
          </div>
        </TopBar>
        <div className="flex-1 overflow-auto">
          <div className="ml-1.5 flex items-center gap-2 px-2 px-24 py-1 pt-10">
            <Icon icon={checkmarkCircleFillIcon} color="redPrimary" size="xl" />
            <span className="text-3xl font-bold">Collections</span>
          </div>
          <div className="px-24">
            <CollectionsViewHeader
              views={["Table", "Board", "Form"]}
              activeView={activeView}
              onViewChange={setActiveView}
            />
            <div className="bg-primary border-primary rounded-lg border shadow-sm overflow-hidden">
              {renderView()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
