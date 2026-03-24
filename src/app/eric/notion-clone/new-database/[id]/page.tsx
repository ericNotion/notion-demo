"use client";

import {
  DatabaseToolbar,
  ReusableDatabase,
  type Column as DatabaseColumn,
  type DatabaseViewTab,
} from "@/components/playground-kit/ReusableDatabase";
import { Icon } from "@nds-icons";
import { pageIcon } from "@nds-icons/page/default.icon";
import { viewTableIcon } from "@nds-icons/viewTable/default.icon";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { EditableTitle } from "../../components/EditableTitle";
import { EmojiPicker } from "../../components/EmojiPicker";
import { PagePeekModal } from "../../components/PagePeekModal";

const emojiAtoms = new Map<
  string,
  ReturnType<typeof atomWithStorage<string | null>>
>();
function getEmojiAtom(key: string) {
  if (!emojiAtoms.has(key)) {
    emojiAtoms.set(key, atomWithStorage<string | null>(key, null));
  }
  return emojiAtoms.get(key)!;
}

type Row = {
  id: string;
  slug: string;
  name: string;
};

const views: DatabaseViewTab[] = [
  { id: "table", label: "Table", icon: viewTableIcon },
];

const columns: DatabaseColumn<Row>[] = [
  {
    id: "name",
    label: (
      <div className="text-secondary flex items-center gap-1.5">
        <Icon icon={pageIcon} color="secondary" size={14} />
        <span>Name</span>
      </div>
    ),
    labelText: "Name",
    width: "w-[50%]",
    render: (row) => (
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-[15px]">📄</span>
        <span className="text-primary truncate font-medium">
          {row.name || "Untitled"}
        </span>
      </div>
    ),
  },
];

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const [rows, setRows] = useState<Row[]>([]);
  const [peekRow, setPeekRow] = useState<Row | null>(null);
  const [hoveringTitle, setHoveringTitle] = useState(false);
  const emojiAtom = useMemo(
    () => getEmojiAtom(`eric-nc-new-database-${id}-emoji`),
    [id],
  );
  const [emoji, setEmoji] = useAtom(emojiAtom);

  const addRow = () => {
    const rowId = String(Date.now());
    const slug = `page-${rowId}`;
    const newRow: Row = { id: rowId, slug, name: "" };
    setRows((prev) => [...prev, newRow]);
    setPeekRow(newRow);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-5xl px-8 pt-10 pb-40">
        <div
          onMouseEnter={() => setHoveringTitle(true)}
          onMouseLeave={() => setHoveringTitle(false)}
        >
          {emoji ? (
            <div className="mb-4">
              <EmojiPicker value={emoji} onChange={setEmoji} />
            </div>
          ) : (
            <div
              className={`mb-2 flex items-center gap-3 transition-opacity ${hoveringTitle ? "opacity-100" : "opacity-0"}`}
            >
              <EmojiPicker
                value={null}
                onChange={setEmoji}
                trigger={
                  <button
                    type="button"
                    className="text-tertiary hover:bg-secondary flex items-center gap-1.5 rounded-md px-2 py-1 text-sm transition-colors"
                  >
                    <span className="text-xs">😀</span>
                    <span>Add icon</span>
                  </button>
                }
              />
            </div>
          )}
          <EditableTitle
            storageKey={`eric-nc-new-database-${id}-title`}
            defaultTitle=""
            placeholder="Untitled"
          />
        </div>

        <div className="mt-8">
          <DatabaseToolbar views={views} activeView="table" onNew={addRow} />

          <ReusableDatabase
            title="New database"
            columns={columns}
            data={rows}
            showHeader={false}
            onNew={addRow}
            onRowClick={setPeekRow}
          />
        </div>
      </div>

      {peekRow && (
        <PagePeekModal
          open={!!peekRow}
          onOpenChange={(open) => !open && setPeekRow(null)}
          title={peekRow.name || "Untitled"}
          icon="📄"
          properties={[]}
          bodyStorageKey={`eric-nc-db-${id}-${peekRow.slug}`}
        />
      )}
    </>
  );
}
