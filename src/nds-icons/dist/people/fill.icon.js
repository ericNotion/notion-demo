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

// src/nds-icons/src/people/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.25 2.795c-1.042 0-1.886.43-2.456 1.14-.558.696-.823 1.618-.823 2.582s.265 1.885.823 2.58c.57.71 1.414 1.141 2.456 1.141s1.886-.43 2.456-1.14c.558-.696.823-1.618.823-2.581 0-.964-.265-1.886-.823-2.581-.57-.71-1.414-1.141-2.456-1.141M3.491 4.675c.525-.654 1.303-1.05 2.26-1.05s1.733.396 2.258 1.05c.513.64.755 1.484.755 2.362S8.522 8.76 8.01 9.399c-.525.654-1.302 1.05-2.259 1.05s-1.734-.396-2.259-1.05c-.513-.64-.755-1.484-.755-2.362s.242-1.723.755-2.362M1.03 14.52c.824-1.719 2.637-2.895 4.72-2.895 1.13 0 2.18.346 3.035.936a6.6 6.6 0 0 0-.884 1.476c-.509 1.177-.215 2.356.461 3.168H3.038c-.68 0-1.327-.286-1.742-.764-.432-.498-.606-1.209-.265-1.92M14.25 11.21c-2.334 0-4.354 1.36-5.202 3.323-.309.715-.125 1.419.309 1.912.418.476 1.064.76 1.743.76h6.3c.68 0 1.325-.284 1.744-.76.433-.493.617-1.197.308-1.912-.848-1.963-2.868-3.324-5.202-3.324"
  }, undefined, false, undefined, this)
};
var peopleFillIcon = createIcon("peopleFill", iconDefinition);
export {
  peopleFillIcon,
  iconDefinition
};
