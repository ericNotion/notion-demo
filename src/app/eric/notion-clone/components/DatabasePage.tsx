"use client";

import {
  DatabaseToolbar,
  ReusableDatabase,
  type Column as DatabaseColumn,
  type DatabaseViewTab,
} from "@/components/playground-kit/ReusableDatabase";
import { createAtomCache } from "@/utils/createAtomCache";
import { useAtom } from "jotai";
import { useMemo, useState } from "react";
import { BoardView, type BoardColumn } from "./BoardView";
import { EditableTitle } from "./EditableTitle";
import { EmojiPicker } from "./EmojiPicker";
import { PagePeekModal, type PageProperty } from "./PagePeekModal";

export type { BoardColumn } from "./BoardView";
export type { PageProperty } from "./PagePeekModal";

const getEmojiAtom = createAtomCache<string>();

export interface DatabasePageConfig<T extends { id: string; slug: string }> {
  defaultEmoji: string;
  emojiStorageKey: string;
  titleStorageKey: string;
  defaultTitle: string;
  description: string;

  initialRows: T[];
  createRow: () => T;

  tableColumns: DatabaseColumn<T>[];
  tableTitle: string;
  boardColumns: BoardColumn[];
  groupByField: keyof T;
  views: DatabaseViewTab[];

  getProperties: (row: T) => PageProperty[];
  getTitle: (row: T) => string;
  titleField: keyof T;
  renderBoardCard: (row: T) => React.ReactNode;
  detailHrefPrefix: string;
  bodyStorageKeyPrefix: string;
  peekIcon: string;
}

export function DatabasePage<T extends { id: string; slug: string }>({
  config,
}: {
  config: DatabasePageConfig<T>;
}) {
  const [view, setView] = useState("table");
  const [peekRow, setPeekRow] = useState<T | null>(null);
  const emojiAtom = useMemo(
    () => getEmojiAtom(config.emojiStorageKey, config.defaultEmoji),
    [config.emojiStorageKey, config.defaultEmoji],
  );
  const [emoji, setEmoji] = useAtom(emojiAtom);
  const [allRows, setAllRows] = useState(config.initialRows);

  const addRow = () => {
    const newRow = config.createRow();
    setAllRows((prev) => [...prev, newRow]);
    setPeekRow(newRow);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <EmojiPicker value={emoji} onChange={setEmoji} />
        <EditableTitle
          storageKey={config.titleStorageKey}
          defaultTitle={config.defaultTitle}
        />
        <p className="text-secondary mt-2 text-[15px]">{config.description}</p>

        <div className="mt-8">
          <DatabaseToolbar
            views={config.views}
            activeView={view}
            onViewChange={setView}
            onNew={addRow}
          />

          {view === "table" ? (
            <ReusableDatabase
              title={config.tableTitle}
              columns={config.tableColumns}
              data={allRows}
              showHeader={false}
              onNew={addRow}
              onRowClick={setPeekRow}
            />
          ) : (
            <BoardView
              columns={config.boardColumns}
              items={allRows}
              groupBy={config.groupByField}
              getItemId={(r) => r.id}
              onCardClick={setPeekRow}
              renderCard={config.renderBoardCard}
            />
          )}
        </div>
      </div>

      {peekRow && (
        <PagePeekModal
          open={!!peekRow}
          onOpenChange={(open) => !open && setPeekRow(null)}
          title={config.getTitle(peekRow)}
          icon={config.peekIcon}
          properties={config.getProperties(peekRow)}
          href={`${config.detailHrefPrefix}/${peekRow.slug}`}
          bodyStorageKey={`${config.bodyStorageKeyPrefix}-${peekRow.slug}`}
          onTitleChange={(newTitle) => {
            const updated = { ...peekRow, [config.titleField]: newTitle };
            setPeekRow(updated);
            setAllRows((prev) =>
              prev.map((r) => (r.id === peekRow.id ? updated : r)),
            );
          }}
        />
      )}
    </>
  );
}
