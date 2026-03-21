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

// src/nds-icons/src/blockLimit/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m9.77 11.93.03.08h.01c.12.34.29.66.51.95l.05.07-.08.04-1.99 1.1c-.09.05-.2.08-.3.08s-.21-.03-.3-.08l-4.92-2.72a.62.62 0 0 1-.32-.55V5.08c0-.23.12-.44.32-.55L7.7 1.82c.18-.1.41-.1.6 0l4.92 2.72c.2.11.32.32.32.55V7.2h-.08c-.36-.03-.73 0-1.08.08l-.09.02V6.14L8.62 8.17v4.39zm-2.4.64V8.18L3.7 6.15v4.39zM8 7.09l3.63-2-3.63-2-3.63 2z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.25 7.95c.36-.11.76-.15 1.13-.11 1.48.14 2.6 1.37 2.6 2.86 0 1.59-1.3 2.88-2.88 2.88a2.86 2.86 0 0 1-2.75-2.05c-.08-.27-.12-.55-.12-.83 0-1.27.81-2.38 2.02-2.75m1.27 4.27c0-.23-.19-.42-.42-.42s-.42.19-.42.42.19.42.42.42.42-.19.42-.42m-.84-1.47c0 .23.19.42.42.42s.42-.19.42-.42V9.13c0-.23-.19-.42-.42-.42s-.42.19-.42.42z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var blockLimitSmallIcon = createIcon("blockLimitSmall", iconDefinition);
export {
  iconDefinition,
  blockLimitSmallIcon
};
