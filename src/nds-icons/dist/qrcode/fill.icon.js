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

// src/nds-icons/src/qrcode/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.25 3.2c-.58 0-1.05.47-1.05 1.05v4c0 .58.47 1.05 1.05 1.05h4c.58 0 1.05-.47 1.05-1.05v-4c0-.58-.47-1.05-1.05-1.05zm1.5 2.3h1a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-1a.25.25 0 0 1 .25-.25m6-2.3c-.58 0-1.05.47-1.05 1.05v4c0 .58.47 1.05 1.05 1.05h4c.58 0 1.05-.47 1.05-1.05v-4c0-.58-.47-1.05-1.05-1.05zm2.5 2.3a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-1a.25.25 0 0 1-.25-.25v-1a.25.25 0 0 1 .25-.25zM3.2 11.75c0-.58.47-1.05 1.05-1.05h4c.58 0 1.05.47 1.05 1.05v4c0 .58-.47 1.05-1.05 1.05h-4c-.58 0-1.05-.47-1.05-1.05zM5.75 13a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25zm6.43-2.17h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m4.25 0h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m-4.25 4.25h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m4.25 0h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m-2.13-2.13h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25"
  }, undefined, false, undefined, this)
};
var qrcodeFillIcon = createIcon("qrcodeFill", iconDefinition);
export {
  qrcodeFillIcon,
  iconDefinition
};
