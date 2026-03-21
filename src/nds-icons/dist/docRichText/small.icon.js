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

// src/nds-icons/src/docRichText/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.37 4.622c-.21-.595-1.051-.595-1.261 0l-.907 2.57a.45.45 0 0 0 .848.3l.156-.442h1.067l.156.442a.45.45 0 1 0 .849-.3zm-.63.917.215.61h-.43zm1.78-1.19a.45.45 0 1 0 0 .9h1.684a.45.45 0 0 0 0-.9zm.52 1.695a.45.45 0 0 0 0 .9h1.165a.45.45 0 0 0 0-.9zM5.626 8.398a.575.575 0 0 0-.575.575v2.714a.575.575 0 0 0 .972.416l.728-.694a.08.08 0 0 1 .114 0l.417.408a.575.575 0 0 0 .844-.045l.79-.952a.082.082 0 0 1 .123-.004l.914.981a.575.575 0 0 0 .996-.392V8.973a.575.575 0 0 0-.575-.575zm1.432 1.318a.434.434 0 1 1 .867 0 .434.434 0 0 1-.867 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.25 2.125c-1.036 0-1.875.84-1.875 1.875v8c0 1.036.84 1.875 1.875 1.875h5.5c1.036 0 1.875-.84 1.875-1.875V4c0-1.036-.84-1.875-1.875-1.875zM4.625 4c0-.345.28-.625.625-.625h5.5c.345 0 .625.28.625.625v8c0 .345-.28.625-.625.625h-5.5A.625.625 0 0 1 4.625 12z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var docRichTextSmallIcon = createIcon("docRichTextSmall", iconDefinition);
export {
  iconDefinition,
  docRichTextSmallIcon
};
