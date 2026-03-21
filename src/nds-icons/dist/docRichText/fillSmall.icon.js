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

// src/nds-icons/src/docRichText/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.491 10.225a.509.509 0 1 0 0-1.018.509.509 0 0 0 0 1.018M6.74 5.313l.321.912h-.643z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.25 2.2A1.8 1.8 0 0 0 3.45 4v8a1.8 1.8 0 0 0 1.8 1.8h5.5a1.8 1.8 0 0 0 1.8-1.8V4a1.8 1.8 0 0 0-1.8-1.8zm.376 6.273h4.748a.5.5 0 0 1 .5.5v2.432a.5.5 0 0 1-.866.341l-.915-.98a.157.157 0 0 0-.235.006l-.79.952a.5.5 0 0 1-.734.04l-.417-.408a.157.157 0 0 0-.218-.001l-.728.694a.5.5 0 0 1-.845-.362V8.973a.5.5 0 0 1 .5-.5M9.04 6.12h1.164a.375.375 0 0 1 0 .75H9.04a.375.375 0 1 1 0-.75M8.145 4.8c0-.208.168-.375.375-.375h1.684a.375.375 0 0 1 0 .75H8.52a.375.375 0 0 1-.375-.375M7.3 4.647l.907 2.57a.375.375 0 0 1-.707.25l-.174-.492H6.153l-.173.492a.375.375 0 1 1-.708-.25l.908-2.57a.594.594 0 0 1 1.12 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var docRichTextFillSmallIcon = createIcon("docRichTextFillSmall", iconDefinition);
export {
  iconDefinition,
  docRichTextFillSmallIcon
};
