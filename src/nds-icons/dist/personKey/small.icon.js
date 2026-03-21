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

// src/nds-icons/src/personKey/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.338s.239 1.704.747 2.337c.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.748-1.47.748-2.337 0-.869-.24-1.705-.748-2.338-.52-.648-1.29-1.04-2.237-1.04M6.266 5.153c0-.652.18-1.192.472-1.556.28-.348.69-.572 1.262-.572s.983.224 1.263.572c.291.364.472.904.472 1.556 0 .651-.18 1.191-.472 1.555-.28.348-.69.572-1.263.572s-.983-.224-1.262-.572c-.292-.364-.472-.904-.472-1.555M8 9.178c-2.197 0-4.166 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.676c.356.414.91.658 1.487.658h6.053v-1.25H4.68a.72.72 0 0 1-.537-.22.3.3 0 0 1-.07-.14.25.25 0 0 1 .033-.154c.583-1.14 2.062-2.033 3.894-2.033a5.3 5.3 0 0 1 1.559.23 3.5 3.5 0 0 1 .06-1.28A6.6 6.6 0 0 0 8 9.178m7.125.997c0 .854-.492 1.593-1.208 1.949v1.072l-.725.846.725.845-.967.846-.967-.846v-2.763a2.175 2.175 0 1 1 3.142-1.949m-2.733-.483a.558.558 0 1 0 1.116 0 .558.558 0 0 0-1.116 0"
  }, undefined, false, undefined, this)
};
var personKeySmallIcon = createIcon("personKeySmall", iconDefinition);
export {
  personKeySmallIcon,
  iconDefinition
};
