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

// src/nds-icons/src/pencilScribble/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m18.015 5.105-.6.6-1.134-1.132.609-.608a.8.8 0 0 1 1.125 0 .8.8 0 0 1 0 1.126zm-8.296 8.296 6.96-6.96-1.133-1.134-6.967 6.955a1.1 1.1 0 0 0-.24.402l-.296.952c-.053.2.134.388.322.321l.952-.294a.9.9 0 0 0 .402-.242M7.533 5.324c-.344 0-.683.08-.99.234l-.648.324A.625.625 0 1 0 6.455 7l.646-.324a1 1 0 0 1 .432-.102h.089a.876.876 0 0 1 .37 1.67L3.048 10.55a3.326 3.326 0 0 0 1.407 6.34h.077c.903 0 1.77-.358 2.408-.997l.168-.168a.625.625 0 0 0-.884-.884l-.168.168a2.15 2.15 0 0 1-1.524.631h-.077a2.076 2.076 0 0 1-.878-3.957L8.52 9.376a2.126 2.126 0 0 0-.9-4.052z"
  }, undefined, false, undefined, this)
};
var pencilScribbleIcon = createIcon("pencilScribble", iconDefinition);
export {
  pencilScribbleIcon,
  iconDefinition
};
