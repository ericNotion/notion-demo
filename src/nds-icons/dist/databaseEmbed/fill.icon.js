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

// src/nds-icons/src/databaseEmbed/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.375 7.25a.875.875 0 0 0 1.75 0v-1.5a2.875 2.875 0 0 0-2.875-2.875h-1.5a.875.875 0 0 0 0 1.75h1.5c.621 0 1.125.504 1.125 1.125zm-10.75 5.5a.875.875 0 0 0-1.75 0v1.5a2.875 2.875 0 0 0 2.875 2.875h1.5a.875.875 0 0 0 0-1.75h-1.5a1.125 1.125 0 0 1-1.125-1.125zm7.25 3.5c0-.483.392-.875.875-.875h1.5c.621 0 1.125-.504 1.125-1.125v-1.5a.875.875 0 0 1 1.75 0v1.5a2.875 2.875 0 0 1-2.875 2.875h-1.5a.875.875 0 0 1-.875-.875m-7.25-9a.875.875 0 1 1-1.75 0v-1.5A2.875 2.875 0 0 1 5.75 2.875h1.5a.875.875 0 1 1 0 1.75h-1.5c-.621 0-1.125.504-1.125 1.125z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.25 7c0-.966.784-1.75 1.75-1.75h4c.966 0 1.75.784 1.75 1.75v6A1.75 1.75 0 0 1 12 14.75H8A1.75 1.75 0 0 1 6.25 13zM8 6.75a.25.25 0 0 0-.25.25v1.117h1.7V6.75zm2.55 0v1.367h1.7V7a.25.25 0 0 0-.25-.25zm0 2.467v1.566h1.7V9.217zm-1.1 0h-1.7v1.566h1.7zm0 2.666h-1.7V13c0 .138.112.25.25.25h1.45zm1.1 1.367H12a.25.25 0 0 0 .25-.25v-1.117h-1.7z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var databaseEmbedFillIcon = createIcon("databaseEmbedFill", iconDefinition);
export {
  iconDefinition,
  databaseEmbedFillIcon
};
