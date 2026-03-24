import type { Block, DatabaseBlock } from "../atoms";

export interface SlashCommandEntry {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  keywords: string[];
  shortcut?: string;
  section: "basic" | "inline";
}

export interface BlockDefinition {
  type: Block["type"];
  slashCommand?: SlashCommandEntry;
  markdownShortcut?: string;
  Component: React.ComponentType<BlockComponentProps>;
}

export interface BlockComponentProps {
  block: Block;
  blockIndex: number;

  isGripSelected: boolean;
  isDragging: boolean;

  wrapperRef: (el: HTMLDivElement | null) => void;
  blockRef: (el: HTMLElement | null) => void;
  listItemRef: (itemId: string, el: HTMLElement | null) => void;

  updateBlock: (updates: Record<string, unknown>) => void;
  insertAfter: (block: Block) => void;
  remove: () => void;
  transform: (type: Block["type"]) => void;
  focusPrev: () => void;
  focusNext: () => void;
  markSaved: () => void;
  mergeIntoPrev: (currentText: string) => void;

  openSlashMenu: (filterText: string) => void;
  closeSlashMenu: () => void;
  slashMenuOpen: boolean;
  slashMenuFilterText: string;
  slashMenuSelectedIndex: number;
  setSlashMenuIndex: (index: number) => void;
  executeSlashCommand: (blockType: Block["type"]) => void;

  selectGrip: () => void;
  startDrag: (e: React.PointerEvent) => void;

  renderCalloutIcon?: (
    icon: string,
    onIconChange: (icon: string) => void,
  ) => React.ReactNode;
  renderDatabaseBlock?: (
    block: DatabaseBlock,
    onTitleChange: (title: string) => void,
  ) => React.ReactNode;
  paragraphPlaceholder: string;
  onBackspaceAtStart?: () => void;
}
