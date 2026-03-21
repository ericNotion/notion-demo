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

// src/nds-icons/src/eyeSlash/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.148 2.661-.23-.269a.55.55 0 1 0-.836.716L4.1 4.294C2.727 5.017 1.61 6.113.914 7.44a1.21 1.21 0 0 0 0 1.128c1.282 2.443 3.987 4.1 7.086 4.1a8.4 8.4 0 0 0 2.854-.493l1.228 1.433a.55.55 0 0 0 .84-.71L4.152 2.666zm1.227 5.34c0-.598.2-1.15.537-1.591l.963 1.123q-.092.218-.094.469a1.22 1.22 0 0 0 1.511 1.184l.963 1.123a2.626 2.626 0 0 1-3.88-2.307m7.475 3.122a7.4 7.4 0 0 0 2.236-2.556 1.21 1.21 0 0 0 0-1.128C13.804 4.997 11.099 3.34 8 3.34a8.5 8.5 0 0 0-1.68.166l1.605 1.87H8a2.626 2.626 0 0 1 2.582 3.101z"
  }, undefined, false, undefined, this)
};
var eyeSlashFillSmallIcon = createIcon("eyeSlashFillSmall", iconDefinition);
export {
  iconDefinition,
  eyeSlashFillSmallIcon
};
