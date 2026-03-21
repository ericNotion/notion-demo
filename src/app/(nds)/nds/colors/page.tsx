"use client";

interface ColorItem {
  name: string;
  inverse?: boolean;
}

interface ColorSwatchProps {
  name: string;
  type: "text" | "background" | "border";
  inverse?: boolean;
}

function ColorSwatch({ name, type, inverse }: ColorSwatchProps) {
  const getSwatchContent = () => {
    switch (type) {
      case "text":
        return (
          <div
            className={`grid size-8 place-items-center ${inverse ? "bg-strong rounded-md" : ""}`}
          >
            <span className={`${name} font-bold`}>Aa</span>
          </div>
        );
      case "background":
        return <div className={`${name} size-8 rounded-md`} />;
      case "border":
        return <div className={`${name} size-8 rounded-md border`} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {getSwatchContent()}
      <span className="font-mono text-xs">.{name}</span>
    </div>
  );
}

interface ColorGroup {
  title: string;
  colors: ColorItem[];
}

interface ColorSectionProps {
  title: string;
  colorGroups: ColorGroup[];
  type: "text" | "background" | "border";
}

function ColorSection({ title, colorGroups, type }: ColorSectionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {colorGroups.map((group) => (
          <div key={group.title} className="space-y-2">
            <h3 className="text-secondary text-sm font-medium">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.colors.map((color) => (
                <ColorSwatch
                  key={color.name}
                  name={color.name}
                  type={type}
                  inverse={color.inverse}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const textColorGroups: ColorGroup[] = [
  {
    title: "Neutral",
    colors: [
      { name: "text-primary" },
      { name: "text-secondary" },
      { name: "text-tertiary" },
      { name: "text-disabled" },
      { name: "text-accent-primary" },
      { name: "text-inverse-primary", inverse: true },
      { name: "text-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Gray",
    colors: [
      { name: "text-gray-primary" },
      { name: "text-gray-secondary" },
      { name: "text-gray-tertiary" },
      { name: "text-gray-disabled" },
      { name: "text-gray-accent-primary" },
      { name: "text-gray-inverse-primary", inverse: true },
      { name: "text-gray-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Red",
    colors: [
      { name: "text-red-primary" },
      { name: "text-red-secondary" },
      { name: "text-red-tertiary" },
      { name: "text-red-disabled" },
      { name: "text-red-accent-primary" },
      { name: "text-red-inverse-primary", inverse: true },
      { name: "text-red-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Orange",
    colors: [
      { name: "text-orange-primary" },
      { name: "text-orange-secondary" },
      { name: "text-orange-tertiary" },
      { name: "text-orange-disabled" },
      { name: "text-orange-accent-primary" },
      { name: "text-orange-inverse-primary", inverse: true },
      { name: "text-orange-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Yellow",
    colors: [
      { name: "text-yellow-primary" },
      { name: "text-yellow-secondary" },
      { name: "text-yellow-tertiary" },
      { name: "text-yellow-disabled" },
      { name: "text-yellow-accent-primary" },
      { name: "text-yellow-inverse-primary", inverse: true },
      { name: "text-yellow-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Green",
    colors: [
      { name: "text-green-primary" },
      { name: "text-green-secondary" },
      { name: "text-green-tertiary" },
      { name: "text-green-disabled" },
      { name: "text-green-accent-primary" },
      { name: "text-green-inverse-primary", inverse: true },
      { name: "text-green-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Teal",
    colors: [
      { name: "text-teal-primary" },
      { name: "text-teal-secondary" },
      { name: "text-teal-tertiary" },
      { name: "text-teal-disabled" },
      { name: "text-teal-accent-primary" },
      { name: "text-teal-inverse-primary", inverse: true },
      { name: "text-teal-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Blue",
    colors: [
      { name: "text-blue-primary" },
      { name: "text-blue-secondary" },
      { name: "text-blue-tertiary" },
      { name: "text-blue-disabled" },
      { name: "text-blue-accent-primary" },
      { name: "text-blue-inverse-primary", inverse: true },
      { name: "text-blue-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Purple",
    colors: [
      { name: "text-purple-primary" },
      { name: "text-purple-secondary" },
      { name: "text-purple-tertiary" },
      { name: "text-purple-disabled" },
      { name: "text-purple-accent-primary" },
      { name: "text-purple-inverse-primary", inverse: true },
      { name: "text-purple-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Pink",
    colors: [
      { name: "text-pink-primary" },
      { name: "text-pink-secondary" },
      { name: "text-pink-tertiary" },
      { name: "text-pink-disabled" },
      { name: "text-pink-accent-primary" },
      { name: "text-pink-inverse-primary", inverse: true },
      { name: "text-pink-inverse-secondary", inverse: true },
    ],
  },
  {
    title: "Brown",
    colors: [
      { name: "text-brown-primary" },
      { name: "text-brown-secondary" },
      { name: "text-brown-tertiary" },
      { name: "text-brown-disabled" },
      { name: "text-brown-accent-primary" },
      { name: "text-brown-inverse-primary", inverse: true },
      { name: "text-brown-inverse-secondary", inverse: true },
    ],
  },
];

const backgroundColorGroups: ColorGroup[] = [
  {
    title: "Neutral",
    colors: [
      { name: "bg-primary" },
      { name: "bg-secondary" },
      { name: "bg-tertiary" },
      { name: "bg-elevated" },
      { name: "bg-accent-primary" },
      { name: "bg-accent-secondary" },
    ],
  },
  {
    title: "Gray",
    colors: [
      { name: "bg-gray-primary" },
      { name: "bg-gray-secondary" },
      { name: "bg-gray-tertiary" },
      { name: "bg-gray-elevated" },
      { name: "bg-gray-accent-primary" },
      { name: "bg-gray-accent-secondary" },
    ],
  },
  {
    title: "Red",
    colors: [
      { name: "bg-red-primary" },
      { name: "bg-red-secondary" },
      { name: "bg-red-tertiary" },
      { name: "bg-red-elevated" },
      { name: "bg-red-accent-primary" },
      { name: "bg-red-accent-secondary" },
    ],
  },
  {
    title: "Orange",
    colors: [
      { name: "bg-orange-primary" },
      { name: "bg-orange-secondary" },
      { name: "bg-orange-tertiary" },
      { name: "bg-orange-elevated" },
      { name: "bg-orange-accent-primary" },
      { name: "bg-orange-accent-secondary" },
    ],
  },
  {
    title: "Yellow",
    colors: [
      { name: "bg-yellow-primary" },
      { name: "bg-yellow-secondary" },
      { name: "bg-yellow-tertiary" },
      { name: "bg-yellow-elevated" },
      { name: "bg-yellow-accent-primary" },
      { name: "bg-yellow-accent-secondary" },
    ],
  },
  {
    title: "Green",
    colors: [
      { name: "bg-green-primary" },
      { name: "bg-green-secondary" },
      { name: "bg-green-tertiary" },
      { name: "bg-green-elevated" },
      { name: "bg-green-accent-primary" },
      { name: "bg-green-accent-secondary" },
    ],
  },
  {
    title: "Teal",
    colors: [
      { name: "bg-teal-primary" },
      { name: "bg-teal-secondary" },
      { name: "bg-teal-tertiary" },
      { name: "bg-teal-elevated" },
      { name: "bg-teal-accent-primary" },
      { name: "bg-teal-accent-secondary" },
    ],
  },
  {
    title: "Blue",
    colors: [
      { name: "bg-blue-primary" },
      { name: "bg-blue-secondary" },
      { name: "bg-blue-tertiary" },
      { name: "bg-blue-elevated" },
      { name: "bg-blue-accent-primary" },
      { name: "bg-blue-accent-secondary" },
    ],
  },
  {
    title: "Purple",
    colors: [
      { name: "bg-purple-primary" },
      { name: "bg-purple-secondary" },
      { name: "bg-purple-tertiary" },
      { name: "bg-purple-elevated" },
      { name: "bg-purple-accent-primary" },
      { name: "bg-purple-accent-secondary" },
    ],
  },
  {
    title: "Pink",
    colors: [
      { name: "bg-pink-primary" },
      { name: "bg-pink-secondary" },
      { name: "bg-pink-tertiary" },
      { name: "bg-pink-elevated" },
      { name: "bg-pink-accent-primary" },
      { name: "bg-pink-accent-secondary" },
    ],
  },
  {
    title: "Brown",
    colors: [
      { name: "bg-brown-primary" },
      { name: "bg-brown-secondary" },
      { name: "bg-brown-tertiary" },
      { name: "bg-brown-elevated" },
      { name: "bg-brown-accent-primary" },
      { name: "bg-brown-accent-secondary" },
    ],
  },
];

const borderColorGroups: ColorGroup[] = [
  {
    title: "Neutral",
    colors: [
      { name: "border-primary" },
      { name: "border-secondary" },
      { name: "border-inverse-primary" },
      { name: "border-accent-primary" },
      { name: "border-strong" },
    ],
  },
  {
    title: "Gray",
    colors: [
      { name: "border-gray-primary" },
      { name: "border-gray-secondary" },
      { name: "border-gray-inverse-primary" },
      { name: "border-gray-accent-primary" },
      { name: "border-gray-strong" },
    ],
  },
  {
    title: "Red",
    colors: [
      { name: "border-red-primary" },
      { name: "border-red-secondary" },
      { name: "border-red-inverse-primary" },
      { name: "border-red-accent-primary" },
      { name: "border-red-strong" },
    ],
  },
  {
    title: "Orange",
    colors: [
      { name: "border-orange-primary" },
      { name: "border-orange-secondary" },
      { name: "border-orange-inverse-primary" },
      { name: "border-orange-accent-primary" },
      { name: "border-orange-strong" },
    ],
  },
  {
    title: "Yellow",
    colors: [
      { name: "border-yellow-primary" },
      { name: "border-yellow-secondary" },
      { name: "border-yellow-inverse-primary" },
      { name: "border-yellow-accent-primary" },
      { name: "border-yellow-strong" },
    ],
  },
  {
    title: "Green",
    colors: [
      { name: "border-green-primary" },
      { name: "border-green-secondary" },
      { name: "border-green-inverse-primary" },
      { name: "border-green-accent-primary" },
      { name: "border-green-strong" },
    ],
  },
  {
    title: "Teal",
    colors: [
      { name: "border-teal-primary" },
      { name: "border-teal-secondary" },
      { name: "border-teal-inverse-primary" },
      { name: "border-teal-accent-primary" },
      { name: "border-teal-strong" },
    ],
  },
  {
    title: "Blue",
    colors: [
      { name: "border-blue-primary" },
      { name: "border-blue-secondary" },
      { name: "border-blue-inverse-primary" },
      { name: "border-blue-accent-primary" },
      { name: "border-blue-strong" },
    ],
  },
  {
    title: "Purple",
    colors: [
      { name: "border-purple-primary" },
      { name: "border-purple-secondary" },
      { name: "border-purple-inverse-primary" },
      { name: "border-purple-accent-primary" },
      { name: "border-purple-strong" },
    ],
  },
  {
    title: "Pink",
    colors: [
      { name: "border-pink-primary" },
      { name: "border-pink-secondary" },
      { name: "border-pink-inverse-primary" },
      { name: "border-pink-accent-primary" },
      { name: "border-pink-strong" },
    ],
  },
  {
    title: "Brown",
    colors: [
      { name: "border-brown-primary" },
      { name: "border-brown-secondary" },
      { name: "border-brown-inverse-primary" },
      { name: "border-brown-accent-primary" },
      { name: "border-brown-strong" },
    ],
  },
];

export default function Page() {
  return (
    <main className="flex flex-col gap-8 p-6">
      <ColorSection title="Text" colorGroups={textColorGroups} type="text" />
      <ColorSection
        title="Background"
        colorGroups={backgroundColorGroups}
        type="background"
      />
      <ColorSection
        title="Border"
        colorGroups={borderColorGroups}
        type="border"
      />
    </main>
  );
}
