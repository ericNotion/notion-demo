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

// src/nds-icons/src/lockSlash/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.6c-.955 0-1.815.412-2.41 1.069a.075.075 0 0 0 0 .099l.724.845a.075.075 0 0 0 .116-.002A2 2 0 0 1 10 4.851V5.8H8.352a.075.075 0 0 0-.057.124l.942 1.1a.08.08 0 0 0 .057.026H10.8c.428 0 .775.347.775.775v1.898q0 .027.018.05l1.1 1.282a.075.075 0 0 0 .132-.048V7.825c0-.964-.673-1.77-1.575-1.975v-1A3.25 3.25 0 0 0 8 1.6m-4.025.743a.625.625 0 1 0-.95.814L4.75 5.169v.681a2.026 2.026 0 0 0-1.575 1.975v4.2c0 1.118.907 2.025 2.025 2.025h5.6c.456 0 .877-.15 1.215-.405l.752.877a.625.625 0 1 0 .949-.814l-.14-.163-.001-.001-.007-.008L4.21 2.618l-.006-.008zm.45 5.482c0-.428.347-.775.775-.775h1.162l1.045 1.219a1.124 1.124 0 0 0 .068 1.951v.93a.525.525 0 1 0 1.05 0v-.93q.19-.1.33-.263l2.342 2.734a.77.77 0 0 1-.397.109H5.2a.775.775 0 0 1-.775-.775z"
  }, undefined, false, undefined, this)
};
var lockSlashSmallIcon = createIcon("lockSlashSmall", iconDefinition);
export {
  lockSlashSmallIcon,
  iconDefinition
};
