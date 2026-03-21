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

// src/nds-icons/src/arrowShapeUpLeft/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.984 2.909a.63.63 0 0 0-.673.107l-7.3 6.59a.625.625 0 0 0 .006.933l7.3 6.44a.625.625 0 0 0 1.038-.469v-3.135h.085l.037-.001h.008l.034-.002.146-.003a10 10 0 0 1 2.391.283c1.43.35 3.002 1.099 3.902 2.669a.625.625 0 0 0 .994.12.62.62 0 0 0 .183-.441c0-1.097-.072-2.07-.208-2.928-.279-1.773-1.362-3.38-2.72-4.535-1.354-1.153-3.06-1.922-4.667-1.922h-.185V3.48a.63.63 0 0 0-.371-.571m6.821 11.262c-1.062-.954-2.345-1.462-3.451-1.733a11.4 11.4 0 0 0-2.7-.319l-.23.006H9.73a.625.625 0 0 0-.625.625v2.375l-5.736-5.06 5.736-5.179V7.24c0 .345.28.625.625.625h.81c1.233 0 2.662.606 3.858 1.623 1.192 1.015 2.074 2.373 2.295 3.78q.068.425.112.903"
  }, undefined, false, undefined, this)
};
var arrowShapeUpLeftIcon = createIcon("arrowShapeUpLeft", iconDefinition);
export {
  iconDefinition,
  arrowShapeUpLeftIcon
};
