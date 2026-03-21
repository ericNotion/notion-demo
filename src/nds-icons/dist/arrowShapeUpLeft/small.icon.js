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

// src/nds-icons/src/arrowShapeUpLeft/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.038 2.213a.63.63 0 0 0-.673.107l-5.84 5.272a.625.625 0 0 0 .006.933l5.84 5.152a.625.625 0 0 0 1.038-.47v-2.384h.01l.114-.003a8 8 0 0 1 1.882.223c1.127.276 2.347.862 3.043 2.076a.625.625 0 0 0 .994.12.62.62 0 0 0 .181-.44q-.001-1.322-.168-2.36c-.229-1.456-1.115-2.767-2.218-3.705-1.1-.936-2.492-1.567-3.815-1.567H8.41V2.784a.63.63 0 0 0-.371-.571m5.25 8.827c-.82-.65-1.76-1.011-2.575-1.211a9.2 9.2 0 0 0-2.19-.259q-.095 0-.148.003l-.038.002h-.553a.625.625 0 0 0-.625.625v1.623L2.883 8.051l4.276-3.86v1.601c0 .345.28.625.625.625h.648c.949 0 2.064.469 3.005 1.269.937.797 1.623 1.858 1.794 2.947q.031.196.056.407"
  }, undefined, false, undefined, this)
};
var arrowShapeUpLeftSmallIcon = createIcon("arrowShapeUpLeftSmall", iconDefinition);
export {
  iconDefinition,
  arrowShapeUpLeftSmallIcon
};
