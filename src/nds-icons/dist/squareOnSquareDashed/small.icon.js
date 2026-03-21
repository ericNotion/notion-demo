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

// src/nds-icons/src/squareOnSquareDashed/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.09 1.375c-.947 0-1.715.768-1.715 1.715v.672a.625.625 0 1 0 1.25 0V3.09c0-.257.208-.465.465-.465h.672a.625.625 0 1 0 0-1.25zm2.488 0a.625.625 0 1 0 0 1.25h1.344a.625.625 0 0 0 0-1.25zm3.16 0a.625.625 0 1 0 0 1.25h.672c.257 0 .465.208.465.465v.672a.625.625 0 1 0 1.25 0V3.09c0-.947-.768-1.715-1.715-1.715zm-1.988 3.5c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875zM6.125 6.75c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625zM2 4.953a.625.625 0 0 0-.625.625v1.344a.625.625 0 1 0 1.25 0V5.578A.625.625 0 0 0 2 4.953m0 3.16a.625.625 0 0 0-.625.625v.672c0 .947.768 1.715 1.715 1.715h.672a.625.625 0 1 0 0-1.25H3.09a.465.465 0 0 1-.465-.465v-.672A.625.625 0 0 0 2 8.113"
  }, undefined, false, undefined, this)
};
var squareOnSquareDashedSmallIcon = createIcon("squareOnSquareDashedSmall", iconDefinition);
export {
  squareOnSquareDashedSmallIcon,
  iconDefinition
};
