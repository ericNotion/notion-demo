"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/form-controls";
import { Icon, IconColor, IconSize, IconWeight } from "@nds-icons";
import { appFillIcon } from "@nds-icons/app/fill.icon";
import { arrowChevronDoubleUpAndDownSmallIcon } from "@nds-icons/arrowChevronDoubleUpAndDown/small.icon";
import { arrowStraightLeftSmallIcon } from "@nds-icons/arrowStraightLeft/small.icon";
// Dynamic imports - these will be loaded when needed
import { isProduction } from "@/utils/env";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconGroupPreview, IconVariant } from "./components/IconGroupPreview";

type IconGroup = {
  name: string;
  group: string;
  tags: string[];
  variants: IconVariant[];
};

// Load icon groups only when needed
async function loadIconGroups(): Promise<IconGroup[]> {
  // Dynamically import both manifest and import map only when needed
  const [{ iconManifest }, { iconImportMap }] = await Promise.all([
    import("@nds-icons/icon-manifest"),
    import("@nds-icons/icon-import-map"),
  ]);

  return iconManifest
    .map((group) => {
      const variants: IconVariant[] = group.variants
        .map((variant: string) => {
          const icon =
            iconImportMap[group.dir]?.[
              variant as keyof (typeof iconImportMap)[typeof group.dir]
            ];
          if (!icon) return null;
          return {
            label:
              variant === "default"
                ? "Default"
                : variant === "small"
                  ? "Small"
                  : variant === "fill"
                    ? "Fill"
                    : variant === "fillSmall"
                      ? "Fill Small"
                      : variant,
            icon,
            variant,
          };
        })
        .filter(Boolean) as IconVariant[];
      return {
        name: group.name,
        group: group.dir,
        tags: Array.isArray(group.tags) ? [...group.tags] : [],
        variants,
      };
    })
    .filter((g) => g.variants.length > 0);
}

const ICON_COLORS: IconColor[] = [
  "primary",
  "secondary",
  "tertiary",
  "disabled",
  "inversePrimary",
  "inverseSecondary",
  "bluePrimary",
  "blueSecondary",
  "blueTertiary",
  "blueDisabled",
  "blueInversePrimary",
  "blueInverseSecondary",
  "brownPrimary",
  "brownSecondary",
  "brownTertiary",
  "brownDisabled",
  "brownInversePrimary",
  "brownInverseSecondary",
  "grayPrimary",
  "graySecondary",
  "grayTertiary",
  "grayDisabled",
  "grayInversePrimary",
  "grayInverseSecondary",
  "greenPrimary",
  "greenSecondary",
  "greenTertiary",
  "greenDisabled",
  "greenInversePrimary",
  "greenInverseSecondary",
  "lightGrayPrimary",
  "lightGraySecondary",
  "orangePrimary",
  "orangeSecondary",
  "orangeTertiary",
  "orangeDisabled",
  "orangeInversePrimary",
  "orangeInverseSecondary",
  "pinkPrimary",
  "pinkSecondary",
  "pinkTertiary",
  "pinkDisabled",
  "pinkInversePrimary",
  "pinkInverseSecondary",
  "purplePrimary",
  "purpleSecondary",
  "purpleTertiary",
  "purpleDisabled",
  "purpleInversePrimary",
  "purpleInverseSecondary",
  "redPrimary",
  "redSecondary",
  "redTertiary",
  "redDisabled",
  "redInversePrimary",
  "redInverseSecondary",
  "tealPrimary",
  "tealSecondary",
  "tealTertiary",
  "tealDisabled",
  "tealInversePrimary",
  "tealInverseSecondary",
  "yellowPrimary",
  "yellowSecondary",
  "yellowTertiary",
  "yellowDisabled",
  "yellowInversePrimary",
  "yellowInverseSecondary",
];

function escapeQuotes(str: string) {
  return str.replace(/"/g, "&quot;");
}

function getIconCode({
  group,
  variant,
  size,
  color,
  weight,
}: {
  group: string;
  variant: string;
  size: IconSize | number;
  color: IconColor;
  weight: IconWeight;
}) {
  // e.g. trashIcon, trashSmallIcon, trashFillIcon, trashFillSmallIcon
  const iconProp =
    variant === "default"
      ? `${group}Icon`
      : variant === "small"
        ? `${group}SmallIcon`
        : variant === "fill"
          ? `${group}FillIcon`
          : variant === "fillSmall"
            ? `${group}FillSmallIcon`
            : `${group}Icon`;
  const sizeProp =
    size !== "default"
      ? typeof size === "string"
        ? ` size=\"${escapeQuotes(size)}\"`
        : ` size={${size}}`
      : "";
  const weightProp =
    weight !== "regular" ? ` weight=\"${escapeQuotes(weight)}\"` : "";
  return `<Icon icon={${iconProp}}${sizeProp} color=\"${escapeQuotes(color)}\"${weightProp} />`;
}

// Production fallback component
function ProductionNotFound() {
  return (
    <div className="bg-main flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          404 - Not Found
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Icons page is not available in production.
        </p>
        <Link
          href="/"
          className="mt-4 inline-block text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

// Development icons page component
function IconsPageContent() {
  const [color, setColor] = useState<IconColor>("primary");
  const [weight, setWeight] = useState<IconWeight>("regular");
  const [search, setSearch] = useState("");
  const [iconGroups, setIconGroups] = useState<IconGroup[]>([]);
  const [loading, setLoading] = useState(true);

  // Load icon groups on component mount
  useEffect(() => {
    loadIconGroups()
      .then((groups) => {
        setIconGroups(groups);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load icon groups:", error);
        setLoading(false);
      });
  }, []);

  // Search logic
  const filteredGroups = iconGroups.filter(
    (group) =>
      search.trim() === "" ||
      group.name.toLowerCase().includes(search.toLowerCase()) ||
      group.tags.some((tag: string) =>
        tag.toLowerCase().includes(search.toLowerCase()),
      ),
  );

  return (
    <>
      <div className="bg-primary border-primary sticky top-0 z-10 flex w-full flex-col gap-4 border-b p-4">
        <Link href="/" className="flex items-center gap-2 self-start">
          <Icon size="sm" icon={arrowStraightLeftSmallIcon} color="primary" />
          <span className="text-sm font-semibold">Playground</span>
        </Link>
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Input
            className="h-8"
            placeholder="Search icons..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex w-full flex-1 items-center gap-4 md:flex-row">
            <ColorDropdown
              color={color}
              setColor={setColor}
              iconColors={ICON_COLORS}
            />
            <label className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={weight === "bold"}
                onChange={(e) =>
                  setWeight(e.target.checked ? "bold" : "regular")
                }
                className="focus:border-blue-500 focus:bg-blue-500 focus:outline-0"
              />
              <span className="select-none">Bold</span>
            </label>
          </div>
        </div>
      </div>
      <main className="relative flex flex-col items-center">
        {loading ? (
          <div className="text-quaternary mt-12 text-center text-sm">
            Loading icons...
          </div>
        ) : (
          <div className="border-primary -mt-px grid w-full border-t md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div
                  key={group.group}
                  className="border-primary border-r border-b md:not-lg:[&:nth-child(2n)]:border-r-0 lg:not-xl:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(4n)]:border-r-0"
                >
                  <IconGroupPreview
                    name={group.name}
                    variants={group.variants}
                    globalProps={{ color, weight }}
                    getIconCode={({ variant, color, weight }) =>
                      getIconCode({
                        group: group.group,
                        variant,
                        size:
                          variant === "default" || variant === "fill"
                            ? "default"
                            : "sm",
                        color,
                        weight,
                      })
                    }
                  />
                </div>
              ))
            ) : (
              <div className="text-quaternary col-span-4 mt-12 text-center text-sm">
                No icons found for &quot;{search}&quot;
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}

// Main page export that conditionally renders based on environment
export default function Page() {
  // Return 404 in production to prevent bundling entire icon library
  if (isProduction()) {
    return <ProductionNotFound />;
  }

  return <IconsPageContent />;
}

function ColorDropdown({
  color,
  setColor,
  iconColors,
}: {
  color: IconColor;
  setColor: (c: IconColor) => void;
  iconColors: IconColor[];
}) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className="bg-secondary border-primary flex h-8 w-full items-center gap-2 rounded-md border px-2 text-sm font-medium focus:outline-2 focus:-outline-offset-1 focus:outline-[var(--background-color-blue-strong)] md:max-w-[240px]"
          aria-label="Select icon color"
          type="button"
        >
          <Icon icon={appFillIcon} color={color} size="sm" />
          <span className="flex-1 text-left">{color}</span>
          <Icon
            icon={arrowChevronDoubleUpAndDownSmallIcon}
            size="sm"
            color="tertiary"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuRadioGroup
          value={color}
          onValueChange={(value) => setColor(value as IconColor)}
        >
          {iconColors.map((c) => (
            <DropdownMenuRadioItem
              key={c}
              value={c}
              className="flex items-center gap-2"
            >
              <Icon icon={appFillIcon} color={c} size="sm" />
              <span className="truncate">{c}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
