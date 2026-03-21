import { Icon } from "@nds-icons";
import { arrowChevronSingleDownSmallIcon } from "@nds-icons/arrowChevronSingleDown/small.icon";
import * as React from "react";

import { cn } from "@/utils/cn";

function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <div
      className="group/native-select relative w-fit has-[select:disabled]:opacity-50"
      data-slot="native-select-wrapper"
    >
      <select
        data-slot="native-select"
        className={cn(
          "border-primary placeholder:text-secondary selection:bg-blue-accent-primary dark:bg-tertiary-translucent/30 dark:hover:bg-tertiary-translucent/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none selection:text-white disabled:pointer-events-none disabled:cursor-not-allowed",
          "focus-visible:border-blue-accent-primary focus-visible:ring-blue-accent-primary/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-red-primary/20 dark:aria-invalid:ring-red-primary/40 aria-invalid:border-red-primary",
          className,
        )}
        {...props}
      />
      <span className="text-secondary pointer-events-none absolute top-1/2 right-3.5 -translate-y-1/2 opacity-50 select-none">
        <Icon
          icon={arrowChevronSingleDownSmallIcon}
          size={16}
          aria-hidden="true"
          data-slot="native-select-icon"
        />
      </span>
    </div>
  );
}

function NativeSelectOption({ ...props }: React.ComponentProps<"option">) {
  return <option data-slot="native-select-option" {...props} />;
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn(className)}
      {...props}
    />
  );
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
