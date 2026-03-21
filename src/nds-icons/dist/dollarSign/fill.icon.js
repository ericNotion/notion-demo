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

// src/nds-icons/src/dollarSign/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 18.947a.875.875 0 0 1-.875-.875v-.944c-.989-.11-1.891-.407-2.611-.888-.944-.63-1.59-1.598-1.59-2.803a.875.875 0 1 1 1.75 0c0 .512.256.977.812 1.348.407.272.965.481 1.64.58v-4.659c-1.228-.298-2.208-.725-2.917-1.327-.885-.751-1.284-1.718-1.284-2.815 0-1.206.645-2.173 1.589-2.804.72-.481 1.622-.779 2.611-.888v-.944a.875.875 0 0 1 1.75 0v.944c.989.11 1.891.407 2.61.888.945.63 1.59 1.598 1.59 2.804a.875.875 0 1 1-1.75 0c0-.513-.255-.977-.811-1.349-.408-.272-.965-.48-1.639-.579v4.658c1.227.298 2.206.726 2.916 1.328.885.75 1.284 1.718 1.284 2.815 0 1.205-.645 2.172-1.589 2.803-.72.481-1.622.779-2.61.888v.944a.875.875 0 0 1-.876.875m-.875-14.31c-.674.097-1.232.306-1.64.578-.555.372-.81.836-.81 1.349 0 .621.201 1.086.666 1.48.372.316.942.61 1.784.852zm1.75 10.727c.674-.098 1.232-.307 1.639-.579.556-.371.81-.836.81-1.348 0-.622-.2-1.087-.665-1.481-.372-.316-.942-.61-1.784-.852z"
  }, undefined, false, undefined, this)
};
var dollarSignFillIcon = createIcon("dollarSignFill", iconDefinition);
export {
  iconDefinition,
  dollarSignFillIcon
};
