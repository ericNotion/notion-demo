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

// src/nds-icons/src/aiBlock/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.2 2.25A1.95 1.95 0 0 0 2.25 4.2v7.6a1.95 1.95 0 0 0 1.95 1.95H6v-1.5H4.2a.45.45 0 0 1-.45-.45V4.2a.45.45 0 0 1 .45-.45h7.6a.45.45 0 0 1 .45.45V6h1.5V4.2a1.95 1.95 0 0 0-1.95-1.95zm7.733 8.54a.661.661 0 1 0 .212-1.306.661.661 0 0 0-.212 1.306"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.206 9.678A.661.661 0 1 1 7.9 9.466a.661.661 0 0 1 1.306.212m1.309-1.485a2.423 2.423 0 0 1 4.17.022.575.575 0 0 1-.993.58 1.273 1.273 0 0 0-2.19-.01l-2.86 4.774 2.026.329a.575.575 0 0 1-.184 1.135l-2.864-.464a.575.575 0 0 1-.401-.863zM9.93 6.726a2.42 2.42 0 0 0-2.86.272.575.575 0 1 0 .767.857 1.274 1.274 0 0 1 1.81.116.575.575 0 0 0 .87-.753 2.4 2.4 0 0 0-.587-.492"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiBlockFillSmallIcon = createIcon("aiBlockFillSmall", iconDefinition);
export {
  iconDefinition,
  aiBlockFillSmallIcon
};
