// src/nds-icons/SvgIcon.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function SvgIcon({
  children,
  viewBox,
  style,
  className,
  label
}) {
  return /* @__PURE__ */ jsxDEV("svg", {
    ...label !== undefined ? { "aria-label": label } : { "aria-hidden": true },
    role: "graphics-symbol",
    viewBox,
    style: {
      width: "100%",
      height: "100%",
      display: "block",
      fill: "inherit",
      flexShrink: 0,
      ...style
    },
    className,
    children
  }, undefined, false, undefined, this);
}

// src/nds-icons/iconUtils.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var iconGroupVariantNames = [
  "fillSmall",
  "small",
  "fill",
  "default"
];
var logoVariantNames = ["default", "darkMode"];
var deprecatedIconGroupVariantNames = [
  "micro",
  "mini",
  "small",
  "default",
  "large",
  "extraLarge",
  "max"
];
var iconVariantNames = [
  ...iconGroupVariantNames,
  ...deprecatedIconGroupVariantNames,
  ...logoVariantNames
];
var ICON_SIZE = {
  xxs: 12,
  xs: 14,
  sm: 16,
  default: 20,
  lg: 22,
  xl: 32
};
var ICON_SIZE_FOR_VARIANT = {
  default: ICON_SIZE.default,
  small: ICON_SIZE.sm,
  fill: ICON_SIZE.default,
  fillSmall: ICON_SIZE.sm,
  darkMode: ICON_SIZE.default,
  micro: 14,
  mini: 14,
  large: 24,
  max: 28,
  extraLarge: 36
};
function createIcon(name, iconDefinition) {
  const { viewBox, svg } = iconDefinition;
  const finalViewBox = viewBox ?? `0 0 ${ICON_SIZE.default} ${ICON_SIZE.default}`;
  const iconFunction = (style, className) => {
    const finalClassName = className ? `${name} ${className}` : name;
    return /* @__PURE__ */ jsxDEV2(SvgIcon, {
      viewBox: finalViewBox,
      className: finalClassName,
      style,
      children: svg
    }, undefined, false, undefined, this);
  };
  return Object.assign(iconFunction, {
    __iconDefinition: { ...iconDefinition, viewBox: finalViewBox }
  });
}

// src/nds-icons/src/medal/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m10.65 12.795-.397-1.23c-.082-.245-.433-.245-.515 0l-.398 1.23h-1.3c-.27 0-.375.34-.164.492l1.054.76-.398 1.23c-.082.246.199.457.41.305l1.053-.762 1.054.761c.21.153.492-.058.41-.304l-.398-1.23 1.053-.76c.211-.153.094-.492-.164-.492z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.774 2.7h8.442a.55.55 0 0 1 .389.161l2.363 2.364c.17.17.21.43.1.642l-3.02 5.801a4.522 4.522 0 1 1-8.105 0l-3.01-5.801a.55.55 0 0 1 .098-.642l2.354-2.363a.55.55 0 0 1 .39-.162M7.92 6.176h4.154L13.31 3.8H6.681zm.574 1.1.994 1.907a4.6 4.6 0 0 1 1.02.001l.994-1.908zm4.85 3.362 2.562-4.92-1.548-1.549-2.748 5.283a4.5 4.5 0 0 1 1.735 1.186M5.634 4.17l-1.54 1.547 2.554 4.92A4.5 4.5 0 0 1 8.385 9.45zm.94 9.508a3.422 3.422 0 1 0 6.844 0 3.422 3.422 0 0 0-6.845 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var medalIcon = createIcon("medal", iconDefinition);
export {
  medalIcon,
  iconDefinition
};
