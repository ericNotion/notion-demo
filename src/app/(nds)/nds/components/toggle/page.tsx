"use client";
import { Toggle } from "@/components/ui/toggle";
import { Icon } from "@nds-icons";
import { textBoldIcon } from "@nds-icons/textBold/default.icon";
import { textItalicIcon } from "@nds-icons/textItalic/default.icon";
import { textUnderlineIcon } from "@nds-icons/textUnderline/default.icon";
import { Example } from "../components/Example";

export default function TogglePage() {
  return (
    <div className="flex flex-col">
      {/* Basic Usage */}
      <Example
        code={`<Toggle aria-label="Toggle bold">
  <Icon icon={textBoldIcon} size={16} />
</Toggle>`}
      >
        <Toggle aria-label="Toggle bold">
          <Icon icon={textBoldIcon} size={16} />
        </Toggle>
      </Example>

      {/* With Text */}
      <Example
        code={`<Toggle aria-label="Toggle italic">
  <Icon icon={textItalicIcon} size={16} />
  Italic
</Toggle>`}
      >
        <Toggle aria-label="Toggle italic">
          <Icon icon={textItalicIcon} size={16} />
          Italic
        </Toggle>
      </Example>

      {/* Variants */}
      <Example
        code={`<Toggle variant="default" aria-label="Toggle">
  Default
</Toggle>

<Toggle variant="outline" aria-label="Toggle">
  Outline
</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle variant="default" aria-label="Toggle">
            Default
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle">
            Outline
          </Toggle>
        </div>
      </Example>

      {/* Sizes */}
      <Example
        code={`<Toggle size="sm" aria-label="Toggle">
  <Icon icon={textBoldIcon} size={14} />
</Toggle>

<Toggle size="default" aria-label="Toggle">
  <Icon icon={textBoldIcon} size={16} />
</Toggle>

<Toggle size="lg" aria-label="Toggle">
  <Icon icon={textBoldIcon} size={18} />
</Toggle>`}
      >
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Toggle">
            <Icon icon={textBoldIcon} size={14} />
          </Toggle>
          <Toggle size="default" aria-label="Toggle">
            <Icon icon={textBoldIcon} size={16} />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle">
            <Icon icon={textBoldIcon} size={18} />
          </Toggle>
        </div>
      </Example>

      {/* Disabled */}
      <Example
        code={`<Toggle disabled aria-label="Toggle">
  <Icon icon={textUnderlineIcon} size={16} />
</Toggle>`}
      >
        <Toggle disabled aria-label="Toggle">
          <Icon icon={textUnderlineIcon} size={16} />
        </Toggle>
      </Example>

      {/* Default Pressed */}
      <Example
        code={`<Toggle defaultPressed aria-label="Toggle">
  <Icon icon={textBoldIcon} size={16} />
  Bold
</Toggle>`}
      >
        <Toggle defaultPressed aria-label="Toggle">
          <Icon icon={textBoldIcon} size={16} />
          Bold
        </Toggle>
      </Example>
    </div>
  );
}
