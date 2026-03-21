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

// src/nds-icons/src/textXYunderline/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.72 4.403a.625.625 0 1 0-1.04.694l2.804 4.205v3.223a.625.625 0 0 0 1.25 0V9.21l2.742-4.113a.625.625 0 0 0-1.04-.694L14.078 7.94zm-7.543.037a.625.625 0 1 0-1.016.729l2.504 3.496-2.504 3.496a.625.625 0 1 0 1.016.728l2.257-3.151 2.257 3.15a.625.625 0 1 0 1.016-.727L7.203 8.665l2.504-3.496a.625.625 0 1 0-1.016-.728L6.434 7.59zM2.25 14.625a.625.625 0 1 0 0 1.25h.005a.625.625 0 0 0 0-1.25zm1.933 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.937 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.938 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.937 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.938 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.937 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.938 0a.625.625 0 1 0 0 1.25h.01a.625.625 0 0 0 0-1.25zm1.937 0a.625.625 0 1 0 0 1.25h.005a.625.625 0 0 0 0-1.25z"
  }, undefined, false, undefined, this)
};
var textXYunderlineIcon = createIcon("textXYunderline", iconDefinition);
export {
  textXYunderlineIcon,
  iconDefinition
};
