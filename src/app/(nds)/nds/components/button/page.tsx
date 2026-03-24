"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { magnifyingGlassSmallIcon } from "@nds-icons/magnifyingGlass/small.icon";
import { Example } from "../components/Example";

export default function ButtonPage() {
  return (
    <div className="flex flex-col">
      {/* Variants */}
      <Example
        code={`<Button variant="primary">Primary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="tint">Tint</Button>\n<Button variant="plain">Plain</Button>`}
      >
        <div className="flex gap-2">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="tint">Tint</Button>
          <Button variant="plain">Plain</Button>
        </div>
      </Example>

      <Example
        code={`<Button variant="primary" color="blue">Primary</Button>\n<Button variant="outline" color="blue">Outline</Button>\n<Button variant="tint" color="blue">Tint</Button>\n<Button variant="plain" color="blue">Plain</Button>`}
      >
        <div className="flex gap-2">
          <Button variant="primary" color="blue">
            Primary
          </Button>
          <Button variant="outline" color="blue">
            Outline
          </Button>
          <Button variant="tint" color="blue">
            Tint
          </Button>
          <Button variant="plain" color="blue">
            Plain
          </Button>
        </div>
      </Example>

      <Example
        code={`<Button variant="primary" color="black">Primary</Button>\n<Button variant="outline" color="black">Outline</Button>\n<Button variant="tint" color="black">Tint</Button>\n<Button variant="plain" color="black">Plain</Button>`}
      >
        <div className="flex gap-2">
          <Button variant="primary" color="black">
            Primary
          </Button>
          <Button variant="outline" color="black">
            Outline
          </Button>
          <Button variant="tint" color="black">
            Tint
          </Button>
          <Button variant="plain" color="black">
            Plain
          </Button>
        </div>
      </Example>

      <Example
        code={`<Button variant="primary" color="red">Primary</Button>\n<Button variant="outline" color="red">Outline</Button>\n<Button variant="tint" color="red">Tint</Button>\n<Button variant="plain" color="red">Plain</Button>`}
      >
        <div className="flex gap-2">
          <Button variant="primary" color="red">
            Primary
          </Button>
          <Button variant="outline" color="red">
            Outline
          </Button>
          <Button variant="tint" color="red">
            Tint
          </Button>
          <Button variant="plain" color="red">
            Plain
          </Button>
        </div>
      </Example>

      <Example
        code={`<Button variant="primary" color="orange">Primary</Button>\n<Button variant="outline" color="orange">Outline</Button>\n<Button variant="tint" color="orange">Tint</Button>\n<Button variant="plain" color="orange">Plain</Button>`}
      >
        <div className="flex gap-2">
          <Button variant="primary" color="orange">
            Primary
          </Button>
          <Button variant="outline" color="orange">
            Outline
          </Button>
          <Button variant="tint" color="orange">
            Tint
          </Button>
          <Button variant="plain" color="orange">
            Plain
          </Button>
        </div>
      </Example>

      {/* Sizes */}
      <Example
        code={`<Button size="xs">Small</Button>\n<Button size="sm">Medium</Button>\n<Button size="md">Large</Button>\n<Button size="lg">X-Large</Button>`}
      >
        <div className="flex items-center gap-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Example>

      {/* Pill */}
      <Example
        code={`<Button shape="pill" size="xs">Pill</Button>\n<Button shape="pill" size="sm">Pill</Button>\n<Button shape="pill" size="md">Pill</Button>\n<Button shape="pill" size="lg">Pill</Button>`}
      >
        <div className="flex items-center gap-2">
          <Button shape="pill" size="xs">
            Pill
          </Button>
          <Button shape="pill" size="sm">
            Pill
          </Button>
          <Button shape="pill" size="md">
            Pill
          </Button>
          <Button shape="pill" size="lg">
            Pill
          </Button>
        </div>
      </Example>

      {/* Icon */}
      <Example
        code={`<Button\n  icon={<Icon icon={magnifyingGlassSmallIcon} size="sm" color="primary" />}\n  size="xs"\n  variant="plain"\n  tooltip="Search"\n/>\n<Button\n  icon={<Icon icon={magnifyingGlassSmallIcon} size="sm" color="primary" />}\n  size="sm"\n  variant="plain"\n  tooltip="Search"\n/>\n<Button\n  icon={<Icon icon={magnifyingGlassIcon} color="primary" />}\n  size="md"\n  variant="plain"\n  tooltip="Search"\n/>\n<Button\n  icon={<Icon icon={magnifyingGlassIcon} color="primary" />}\n  size="lg"\n  variant="plain"\n  tooltip="Search"\n/>`}
      >
        <div className="flex items-center gap-2">
          <Button
            icon={
              <Icon icon={magnifyingGlassSmallIcon} size="sm" color="primary" />
            }
            size="xs"
            variant="plain"
            tooltip="Search"
          />
          <Button
            icon={
              <Icon icon={magnifyingGlassSmallIcon} size="sm" color="primary" />
            }
            size="sm"
            variant="plain"
            tooltip="Search"
          />
          <Button
            icon={<Icon icon={magnifyingGlassIcon} color="primary" />}
            size="md"
            variant="plain"
            tooltip="Search"
          />
          <Button
            icon={<Icon icon={magnifyingGlassIcon} color="primary" />}
            size="lg"
            variant="plain"
            tooltip="Search"
          />
        </div>
      </Example>

      {/* Full Width */}
      <Example code={`<Button fullWidth>Full width</Button>`}>
        <Button fullWidth>Full width</Button>
      </Example>
    </div>
  );
}
