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

// src/nds-icons/src/qrcode/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.75 5.5h-1a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1A.25.25 0 0 0 7 6.75v-1a.25.25 0 0 0-.25-.25"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.2 4.25c0-.58.47-1.05 1.05-1.05h4c.58 0 1.05.47 1.05 1.05v4c0 .58-.47 1.05-1.05 1.05h-4c-.58 0-1.05-.47-1.05-1.05zm1.1.05v3.9h3.9V4.3zm9.95 1.2h-1a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.75 3.2c-.58 0-1.05.47-1.05 1.05v4c0 .58.47 1.05 1.05 1.05h4c.58 0 1.05-.47 1.05-1.05v-4c0-.58-.47-1.05-1.05-1.05zm.05 5V4.3h3.9v3.9zM6.75 13h-1a.25.25 0 0 0-.25.25v1c0 .138.112.25.25.25h1a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.25 10.7c-.58 0-1.05.47-1.05 1.05v4c0 .58.47 1.05 1.05 1.05h4c.58 0 1.05-.47 1.05-1.05v-4c0-.58-.47-1.05-1.05-1.05zm.05 5v-3.9h3.9v3.9zm6.78-4.87h1.1a.25.25 0 0 1 .25.25v1.1a.25.25 0 0 1-.25.25h-1.1a.25.25 0 0 1-.25-.25v-1.1a.25.25 0 0 1 .25-.25m5.35 0h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m-5.35 4.25h1.1a.25.25 0 0 1 .25.25v1.1a.25.25 0 0 1-.25.25h-1.1a.25.25 0 0 1-.25-.25v-1.1a.25.25 0 0 1 .25-.25m5.35 0h-1.1a.25.25 0 0 0-.25.25v1.1c0 .138.112.25.25.25h1.1a.25.25 0 0 0 .25-.25v-1.1a.25.25 0 0 0-.25-.25m-3.23-2.13h1.1a.25.25 0 0 1 .25.25v1.1a.25.25 0 0 1-.25.25h-1.1a.25.25 0 0 1-.25-.25v-1.1a.25.25 0 0 1 .25-.25"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var qrcodeIcon = createIcon("qrcode", iconDefinition);
export {
  qrcodeIcon,
  iconDefinition
};
