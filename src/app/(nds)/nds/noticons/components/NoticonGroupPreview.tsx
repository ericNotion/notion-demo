import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/utils/cn";
import {
  Icon,
  IconColor,
  IconSize,
  IconWeight,
  LoadedIconFunction,
} from "@nds-icons";
import { AnimatePresence, motion } from "framer-motion";

export type NoticonVariant = {
  label: string;
  icon: LoadedIconFunction;
  variant: string;
};

export type NoticonGroupPreviewProps = {
  name: string;
  variants: NoticonVariant[];
  globalProps: {
    color: IconColor;
    weight: IconWeight;
  };
  getIconCode: (args: {
    variant: string;
    size: IconSize | number;
    color: IconColor;
    weight: IconWeight;
  }) => string;
};

export function NoticonGroupPreview({
  name,
  variants,
  globalProps,
  getIconCode,
}: NoticonGroupPreviewProps) {
  const [copy, isCopied] = useCopyToClipboard();

  function onCopy(variant: string) {
    copy(
      getIconCode({
        variant,
        size: variant === "default" || variant === "fill" ? "default" : "sm",
        color: globalProps.color,
        weight: globalProps.weight,
      }),
    );
  }

  return (
    <section className="w-full max-w-2xl overflow-hidden">
      <div className="flex flex-col">
        <h2 className="text-secondary flex flex-1 px-4 py-3 font-mono text-xs font-medium">
          {name}
          <AnimatePresence>
            {isCopied && (
              <motion.span
                className="text-blue-secondary ml-auto text-xs"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                Copied
              </motion.span>
            )}
          </AnimatePresence>
        </h2>
        <div className="flex gap-1 self-center justify-self-center p-3 pt-1">
          {variants.map(({ label, icon, variant }) => {
            return (
              <NoticonPreviewButton
                key={variant}
                label={label}
                icon={icon}
                variant={variant}
                size={
                  variant === "default" || variant === "fill" ? "default" : "sm"
                }
                color={globalProps.color}
                weight={globalProps.weight}
                onCopy={onCopy}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type NoticonPreviewButtonProps = {
  label: string;
  icon: LoadedIconFunction;
  variant: string;
  size: IconSize;
  color: IconColor;
  weight: IconWeight;
  onCopy: (variant: string) => void;
};

function NoticonPreviewButton({
  label,
  icon,
  variant,
  size,
  color,
  weight,
  onCopy,
}: NoticonPreviewButtonProps) {
  return (
    <button
      className={cn(
        "group flex h-8 w-12 flex-col items-center justify-center rounded-lg text-center transition-all duration-100",
      )}
      onClick={() => onCopy(variant)}
      type="button"
    >
      <Icon icon={icon} size={size} color={color} weight={weight} />

      <span
        className={cn(
          "text-secondary pointer-events-none font-mono text-[9px] whitespace-nowrap uppercase opacity-0 group-hover:opacity-100",
        )}
      >
        {label}
      </span>
    </button>
  );
}
