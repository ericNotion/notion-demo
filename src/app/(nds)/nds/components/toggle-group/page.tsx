"use client";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Icon } from "@nds-icons";
import { alignCenterIcon } from "@nds-icons/alignCenter/default.icon";
import { alignLeftIcon } from "@nds-icons/alignLeft/default.icon";
import { alignRightIcon } from "@nds-icons/alignRight/default.icon";
import { textBoldIcon } from "@nds-icons/textBold/default.icon";
import { textItalicIcon } from "@nds-icons/textItalic/default.icon";
import { textUnderlineIcon } from "@nds-icons/textUnderline/default.icon";
import { Example } from "../components/Example";

export default function ToggleGroupPage() {
  return (
    <div className="flex flex-col">
      {/* Single Selection */}
      <Example
        code={`<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon icon={alignLeftIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <Icon icon={alignCenterIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <Icon icon={alignRightIcon} size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <Icon icon={alignLeftIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <Icon icon={alignCenterIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <Icon icon={alignRightIcon} size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      {/* Multiple Selection */}
      <Example
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Icon icon={textBoldIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Icon icon={textItalicIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Icon icon={textUnderlineIcon} size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
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
      </Example>

      {/* Outline Variant */}
      <Example
        code={`<ToggleGroup type="single" variant="outline" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon icon={alignLeftIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <Icon icon={alignCenterIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <Icon icon={alignRightIcon} size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" variant="outline" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <Icon icon={alignLeftIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <Icon icon={alignCenterIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <Icon icon={alignRightIcon} size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      {/* Sizes */}
      <Example
        code={`<ToggleGroup type="single" size="sm">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="default">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>

<ToggleGroup type="single" size="lg">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
  <ToggleGroupItem value="c">C</ToggleGroupItem>
</ToggleGroup>`}
      >
        <div className="flex flex-col items-start gap-4">
          <ToggleGroup type="single" size="sm">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" size="default">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>

          <ToggleGroup type="single" size="lg">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </Example>

      {/* Disabled */}
      <Example
        code={`<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon icon={alignLeftIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <Icon icon={alignCenterIcon} size={16} />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <Icon icon={alignRightIcon} size={16} />
  </ToggleGroupItem>
</ToggleGroup>`}
      >
        <ToggleGroup type="single" disabled>
          <ToggleGroupItem value="left" aria-label="Align left">
            <Icon icon={alignLeftIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <Icon icon={alignCenterIcon} size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <Icon icon={alignRightIcon} size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
    </div>
  );
}
