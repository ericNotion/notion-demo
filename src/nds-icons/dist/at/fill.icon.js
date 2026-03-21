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

// src/nds-icons/src/at/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.913 3.932a7.875 7.875 0 1 0-2.119 13.39.875.875 0 1 0-.645-1.627 6.125 6.125 0 1 1 3.53-3.681c-.116.332-.497.611-1.043.611a1.03 1.03 0 0 1-1.03-1.03V7.079a.875.875 0 0 0-1.713-.255 3.97 3.97 0 0 0-2.17-.62c-1.027 0-2.002.359-2.722 1.072-.725.718-1.132 1.734-1.132 2.929s.405 2.22 1.122 2.953c.715.73 1.69 1.116 2.732 1.116 1.005 0 1.954-.36 2.667-1.04a2.78 2.78 0 0 0 2.246 1.141c1.087 0 2.274-.575 2.695-1.786a7.875 7.875 0 0 0-2.418-8.657M7.62 10.205c0-.788.26-1.335.613-1.685.357-.354.872-.566 1.49-.566.62 0 1.144.213 1.509.57.36.351.622.898.622 1.681 0 .784-.264 1.354-.632 1.725-.37.373-.893.594-1.498.594-.604 0-1.118-.22-1.482-.59-.36-.37-.622-.94-.622-1.729"
  }, undefined, false, undefined, this)
};
var atFillIcon = createIcon("atFill", iconDefinition);
export {
  iconDefinition,
  atFillIcon
};
