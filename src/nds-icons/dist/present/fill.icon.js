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

// src/nds-icons/src/present/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.932 1.824A2.765 2.765 0 0 0 5.077 6.05H4.3c-.87 0-1.575.705-1.575 1.575v1.9c0 .61.347 1.14.856 1.402h5.794v-4.87h1.25v4.87h5.794c.508-.262.856-.791.856-1.402v-1.9c0-.87-.705-1.575-1.575-1.575h-.776c.285-.435.451-.956.451-1.515 0-1.75-1.613-3.05-3.319-2.709a3.34 3.34 0 0 0-2.043 1.309 3.26 3.26 0 0 0-2.011-1.297zm1.443 3.214V6.05H7.39a1.515 1.515 0 1 1 .297-3l.07.014a2.01 2.01 0 0 1 1.618 1.974m4.75-.503c0 .832-.67 1.507-1.5 1.515h-2v-.963c0-.985.705-1.84 1.676-2.035a1.523 1.523 0 0 1 1.824 1.483m2.289 7.642h-5.789v5.098h4.214c.87 0 1.575-.705 1.575-1.575zm-7.039 0h-5.79V15.7c0 .87.706 1.575 1.576 1.575h4.214z"
  }, undefined, false, undefined, this)
};
var presentFillIcon = createIcon("presentFill", iconDefinition);
export {
  presentFillIcon,
  iconDefinition
};
