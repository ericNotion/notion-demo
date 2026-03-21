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

// src/nds-icons/src/waveformSlash/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.525 3.15a.875.875 0 0 0-1.75 0v.997l1.75 2.042zm.95 4.147 1.75 2.042V7.25a.875.875 0 0 0-1.75 0zm2.7 3.15 1.75 2.042V5.95a.875.875 0 1 0-1.75 0zm3.248 5.71a.875.875 0 0 1-1.387 1.062l-3.205-3.738a.875.875 0 0 1-1.356-.73v-.852l-.95-1.109v6.06a.875.875 0 1 1-1.75 0V8.748l-.95-1.108v6.91a.875.875 0 0 1-1.75 0V5.599l-1.44-1.68a.875.875 0 1 1 1.33-1.138l.568.663.05.066zM3.25 7.775c.483 0 .875.392.875.875v2.7a.875.875 0 0 1-1.75 0v-2.7c0-.483.392-.875.875-.875m13.5 0c.483 0 .875.392.875.875v2.7a.875.875 0 0 1-1.75 0v-2.7c0-.483.392-.875.875-.875"
  }, undefined, false, undefined, this)
};
var waveformSlashFillIcon = createIcon("waveformSlashFill", iconDefinition);
export {
  waveformSlashFillIcon,
  iconDefinition
};
