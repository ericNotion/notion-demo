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

// src/nds-icons/src/gear/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M15.76 5.73c.12.16.12.39 0 .56l.01-.01-.74 1.05c-.11.16-.12.35-.05.52l.09.21c.07.18.22.31.4.34l1.25.22c.21.03.37.19.4.4.05.32.07.64.07.96V10c0 .36-.03.71-.08 1.05-.03.21-.2.36-.4.4l-1.27.22a.52.52 0 0 0-.4.33l-.09.21a.51.51 0 0 0 .04.52l.73 1.03c.12.17.13.4 0 .57-.19.26-.4.5-.63.74h-.01c-.25.25-.51.48-.79.69a.48.48 0 0 1-.56 0l-1.05-.74a.54.54 0 0 0-.52-.05l-.21.09a.53.53 0 0 0-.34.4l-.22 1.25c-.03.21-.19.37-.4.4-.32.05-.64.07-.96.07h-.02c-.36 0-.71-.03-1.05-.08a.49.49 0 0 1-.4-.4l-.22-1.27a.52.52 0 0 0-.33-.4l-.21-.09a.51.51 0 0 0-.52.04l-1.03.73a.48.48 0 0 1-.57 0c-.25-.19-.49-.4-.72-.64h-.01c-.25-.25-.48-.51-.69-.79a.48.48 0 0 1 0-.56L5 12.67c.11-.15.12-.34.05-.51l-.09-.21a.53.53 0 0 0-.4-.34l-1.25-.22a.47.47 0 0 1-.4-.4c-.05-.32-.07-.64-.07-.96v-.02c0-.36.03-.71.08-1.05.03-.21.2-.36.4-.4l1.27-.22a.52.52 0 0 0 .4-.33l.09-.21a.51.51 0 0 0-.04-.52l-.73-1.03a.48.48 0 0 1 0-.57c.19-.26.4-.5.63-.74h.01c.25-.26.51-.48.79-.69a.48.48 0 0 1 .56 0l1.05.74c.15.11.34.12.51.05l.21-.09a.53.53 0 0 0 .34-.4l.22-1.25c.03-.21.19-.37.4-.4.32-.05.64-.07.96-.07h.02c.36 0 .71.03 1.05.08.21.03.36.2.4.4l.22 1.27c.03.19.16.33.33.4l.21.09c.17.08.37.07.52-.04l1.03-.73c.17-.12.4-.13.57 0 .25.19.49.4.72.64h.01c.25.25.48.51.69.79M12.08 10c0-1.15-.93-2.08-2.08-2.08S7.92 8.85 7.92 10s.93 2.08 2.08 2.08 2.08-.93 2.08-2.08"
  }, undefined, false, undefined, this)
};
var gearFillIcon = createIcon("gearFill", iconDefinition);
export {
  iconDefinition,
  gearFillIcon
};
