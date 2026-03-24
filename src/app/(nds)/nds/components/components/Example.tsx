"use client";

import { Button } from "@/components/ui/button";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Icon } from "@nds-icons";
import { checkmarkSmallIcon } from "@nds-icons/checkmark/small.icon";
import { duplicateSmallIcon } from "@nds-icons/duplicate/small.icon";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export function Example({
  children,
  code,
  language = "tsx",
}: {
  children: React.ReactNode;
  code: string;
  language?: string;
}) {
  const { resolvedTheme } = useTheme();
  const [copy, isCopied] = useCopyToClipboard();

  // Create custom themes with transparent backgrounds
  const customOneDark = {
    ...oneDark,
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: "transparent",
      backgroundColor: "transparent",
    },
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: "transparent",
      backgroundColor: "transparent",
    },
  };

  const customOneLight = {
    ...oneLight,
    'code[class*="language-"]': {
      ...oneLight['code[class*="language-"]'],
      background: "transparent",
      backgroundColor: "transparent",
    },
    'pre[class*="language-"]': {
      ...oneLight['pre[class*="language-"]'],
      background: "transparent",
      backgroundColor: "transparent",
    },
  };

  return (
    <div className="border-primary mx-auto mb-6 w-full max-w-3xl overflow-hidden rounded-lg border">
      <div className="bg-primary flex items-center justify-center p-6">
        {children}
      </div>
      <div className="bg-secondary relative border-t">
        <Button
          size="sm"
          onClick={() => copy(code)}
          variant="plain"
          icon={
            <Icon
              icon={isCopied ? checkmarkSmallIcon : duplicateSmallIcon}
              size="sm"
              color="secondary"
            />
          }
          tooltip="Copy"
          className="absolute top-1 right-1 z-10"
        />
        <SyntaxHighlighter
          language={language}
          style={resolvedTheme === "dark" ? customOneDark : customOneLight}
          customStyle={{
            fontSize: "13px",
            fontFamily: "monospace",
            background: "transparent",
            padding: "1rem",
            margin: 0,
          }}
          codeTagProps={{
            style: {
              background: "transparent",
              backgroundColor: "transparent",
            },
          }}
          showLineNumbers={false}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
