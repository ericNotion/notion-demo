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

// src/nds-icons/src/personCropCircleDashed/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.92 3.23s.08 0 .12-.01c.62-.12 1.28-.12 1.9 0 .34.07.67-.15.73-.49A.61.61 0 0 0 9.18 2c-.78-.15-1.61-.15-2.39 0-.34.07-.56.4-.49.73a.646.646 0 0 0 .62.51zm3.79.72q.81.54 1.35 1.35c.09.14.23.23.4.27q.03 0 .06.005.03.004.06.005c.12 0 .24-.04.35-.11.29-.19.36-.58.17-.87a6.2 6.2 0 0 0-1.69-1.69.65.65 0 0 0-.47-.09.62.62 0 0 0-.4.27c-.09.14-.13.31-.09.47.03.16.13.31.27.4zM3.43 5.57c-.13 0-.25-.04-.35-.11h.02a.65.65 0 0 1-.27-.4c-.04-.16 0-.33.09-.47.45-.67 1.02-1.24 1.69-1.69.29-.19.68-.12.87.17a.63.63 0 0 1-.18.87c-.54.36-.99.82-1.35 1.35a.62.62 0 0 1-.4.27c-.04.01-.08.01-.12.01m10.58 1.24a.65.65 0 0 0-.26-.4.6.6 0 0 0-.47-.09c-.34.07-.56.4-.49.73a5 5 0 0 1 0 1.9c-.07.34.15.67.49.73q.03 0 .06.005.03.004.06.005c.29 0 .56-.21.61-.5a5.9 5.9 0 0 0 0-2.38M3.13 8c0 .32.03.64.09.95l-.01-.01c.07.33-.15.66-.49.73-.04.01-.08.01-.12.01a.62.62 0 0 1-.61-.5 5.9 5.9 0 0 1 0-2.38c.04-.17.13-.31.27-.4a.63.63 0 0 1 .87.18c.09.14.12.31.09.47-.06.31-.09.63-.09.95m8.92 2.71c-.23.34-.5.66-.81.93-.68-1.09-1.92-1.76-3.25-1.76s-2.56.67-3.24 1.76c-.09-.08-.17-.16-.27-.26-.2-.21-.38-.43-.54-.67a.63.63 0 0 0-.87-.18.63.63 0 0 0-.18.87 6.3 6.3 0 0 0 1.7 1.7c.67.45 1.41.75 2.2.91.39.08.79.12 1.19.12 1.67 0 3.24-.66 4.41-1.88.25-.26.48-.55.68-.85.19-.29.12-.67-.17-.87a.635.635 0 0 0-.87.17zm-3.1 2.07a4 4 0 0 1-.775.085 4.8 4.8 0 0 1-2.395-.525c.45-.75 1.29-1.22 2.21-1.22s1.76.46 2.21 1.22c-.4.2-.82.35-1.26.44zM8 9.63c-.76 0-1.42-.31-1.87-.87-.4-.5-.62-1.18-.62-1.93s.22-1.43.62-1.93c.45-.56 1.11-.87 1.87-.87s1.42.31 1.87.87c.4.5.62 1.18.62 1.93s-.22 1.43-.62 1.93c-.45.56-1.11.87-1.87.87m0-4.34c-.38 0-.68.13-.89.4-.22.28-.34.68-.34 1.15s.12.87.34 1.15c.21.26.52.4.89.4s.68-.13.89-.4c.22-.28.34-.68.34-1.15s-.12-.87-.34-1.15c-.21-.26-.51-.4-.89-.4"
  }, undefined, false, undefined, this)
};
var personCropCircleDashedSmallIcon = createIcon("personCropCircleDashedSmall", iconDefinition);
export {
  personCropCircleDashedSmallIcon,
  iconDefinition
};
