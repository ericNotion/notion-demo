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

// src/nds-icons/src/musicNoteTv/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.8 5.03a.53.53 0 0 0-.41-.127l-1.442.155a.64.64 0 0 0-.563.626v2.234q-.075.002-.15.01a1.64 1.64 0 0 0-.81.3 1.12 1.12 0 0 0-.469.9c0 .386.202.664.478.813.252.135.55.159.817.131a1.64 1.64 0 0 0 .81-.3 1.12 1.12 0 0 0 .466-.966l.002-.05v-1.9l.883-.099a.64.64 0 0 0 .56-.626v-.706a.53.53 0 0 0-.171-.394"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.262 3.225c-1.035 0-1.875.84-1.875 1.875v4.85c0 1.036.84 1.875 1.875 1.875h7.475c1.036 0 1.875-.84 1.875-1.875V5.1c0-1.036-.84-1.875-1.875-1.875zM3.637 5.1c0-.345.28-.625.625-.625h7.475c.345 0 .625.28.625.625v4.85c0 .345-.28.625-.625.625H4.262a.625.625 0 0 1-.625-.625zm.863 7.275a.575.575 0 1 0 0 1.15h7a.575.575 0 1 0 0-1.15z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var musicNoteTvSmallIcon = createIcon("musicNoteTvSmall", iconDefinition);
export {
  musicNoteTvSmallIcon,
  iconDefinition
};
