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

// src/nds-icons/src/eyeglasses/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M17.863 10.331c0 2.171-1.657 3.931-3.7 3.931s-3.7-1.76-3.7-3.93q.001-.483.104-.932a1.37 1.37 0 0 0-1.134 0q.104.449.105.931c0 2.171-1.657 3.931-3.7 3.931s-3.7-1.76-3.7-3.93q0-.271.033-.532h-.496a.625.625 0 1 1 0-1.25h.863c.612-1.276 1.86-2.15 3.3-2.15 1.319 0 2.477.734 3.132 1.838a2.62 2.62 0 0 1 2.06 0c.655-1.104 1.813-1.838 3.133-1.838 1.44 0 2.687.874 3.299 2.15h.863a.625.625 0 1 1 0 1.25h-.496q.033.261.034.531m-1.75 0c0-1.306-.972-2.181-1.95-2.181-.979 0-1.95.875-1.95 2.181s.971 2.181 1.95 2.181c.978 0 1.95-.875 1.95-2.18m-8.325 0c0-1.306-.972-2.181-1.95-2.181-.979 0-1.95.875-1.95 2.181s.971 2.181 1.95 2.181c.978 0 1.95-.875 1.95-2.18"
  }, undefined, false, undefined, this)
};
var eyeglassesFillIcon = createIcon("eyeglassesFill", iconDefinition);
export {
  iconDefinition,
  eyeglassesFillIcon
};
