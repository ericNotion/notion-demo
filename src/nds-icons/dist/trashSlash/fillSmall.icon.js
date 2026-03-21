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

// src/nds-icons/src/trashSlash/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.145 2.657-.227-.265a.55.55 0 1 0-.836.716l1.15 1.342H3.126a.55.55 0 0 0 0 1.1h.6l.294 6.472A1.863 1.863 0 0 0 5.88 13.8h4.242a1.86 1.86 0 0 0 1.489-.743l.472.551a.55.55 0 0 0 .843-.707L9.813 9.27v2.105a.5.5 0 0 1-1 0V8.103l-4.66-5.437zm2.543 3.718a.5.5 0 0 1 .5.5v4.5a.5.5 0 0 1-1 0v-4.5a.5.5 0 0 1 .5-.5M9.813 7.58v-.705a.5.5 0 0 0-.881-.323L7.13 4.45H9.7v-.825a.325.325 0 0 0-.325-.325h-2.75a.325.325 0 0 0-.303.207l-.735-.858c.26-.276.629-.449 1.038-.449h2.75c.787 0 1.425.638 1.425 1.425v.825h2.075a.55.55 0 1 1 0 1.1h-.6l-.211 4.656z"
  }, undefined, false, undefined, this)
};
var trashSlashFillSmallIcon = createIcon("trashSlashFillSmall", iconDefinition);
export {
  trashSlashFillSmallIcon,
  iconDefinition
};
