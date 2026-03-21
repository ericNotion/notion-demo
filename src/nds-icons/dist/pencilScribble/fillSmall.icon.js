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

// src/nds-icons/src/pencilScribble/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m13.931 4.706.581-.581v-.012a.74.74 0 0 0-.029-1.012.74.74 0 0 0-1.042 0l-.558.557zm-6.085 6.086 5.639-5.64-1.048-1.048-5.644 5.635c-.1.1-.17.232-.217.358l-.237.766-.001.004c-.06.226.15.46.385.378l.758-.235a.8.8 0 0 0 .365-.218"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.026 4.21c-.283 0-.562.065-.815.192l-.517.259a.55.55 0 1 0 .492.983l.517-.258q.152-.076.323-.077h.071a.65.65 0 0 1 .275 1.24L2.417 8.395a2.71 2.71 0 0 0 1.146 5.168h.063c.735 0 1.44-.292 1.96-.812l.136-.135a.55.55 0 1 0-.778-.778l-.135.135c-.314.314-.74.49-1.183.49h-.063a1.61 1.61 0 0 1-.68-3.07l3.955-1.847a1.75 1.75 0 0 0-.74-3.337z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilScribbleFillSmallIcon = createIcon("pencilScribbleFillSmall", iconDefinition);
export {
  pencilScribbleFillSmallIcon,
  iconDefinition
};
