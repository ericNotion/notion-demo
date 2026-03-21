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

// src/nds-icons/src/bookshelf/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2 4.38C2 3.618 2.618 3 3.38 3h2.365c.279 0 .538.083.755.226.217-.143.476-.226.755-.226H9.62c.463 0 .87.23 1.121.58q.168-.106.367-.16l2.285-.612a1.38 1.38 0 0 1 1.69.975l2.91 10.858a1.38 1.38 0 0 1-.976 1.69l-2.286.611a1.38 1.38 0 0 1-1.689-.975L11 8.346v7.274A1.38 1.38 0 0 1 9.62 17H7.255c-.279 0-.538-.082-.755-.225a1.37 1.37 0 0 1-.755.225H3.38A1.38 1.38 0 0 1 2 15.62zm9.34.406 2.909 10.858a.13.13 0 0 0 .16.091l2.284-.612a.13.13 0 0 0 .092-.16L13.876 4.107a.13.13 0 0 0-.16-.091l-2.284.612a.13.13 0 0 0-.092.16M7.125 15.62c0 .072.058.13.13.13H9.62a.13.13 0 0 0 .13-.13V4.38a.13.13 0 0 0-.13-.13H7.255a.13.13 0 0 0-.13.13zm-3.875 0c0 .072.058.13.13.13h2.365a.13.13 0 0 0 .13-.13V4.38a.13.13 0 0 0-.13-.13H3.38a.13.13 0 0 0-.13.13z"
  }, undefined, false, undefined, this)
};
var bookshelfIcon = createIcon("bookshelf", iconDefinition);
export {
  iconDefinition,
  bookshelfIcon
};
