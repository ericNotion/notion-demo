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

// src/nds-icons/src/present/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.575 3.628c0-1.474 1.35-2.58 2.795-2.291l.056.01a2.73 2.73 0 0 1 1.585.956c.399-.484.96-.835 1.61-.964 1.44-.289 2.804.81 2.804 2.29 0 .392-.097.761-.268 1.086h.403c.765 0 1.385.62 1.385 1.385v1.52c0 .432-.198.817-.507 1.071H8.55V4.845h-1.1v3.846H2.562a1.38 1.38 0 0 1-.507-1.07V6.1c0-.766.62-1.386 1.385-1.386h.403a2.3 2.3 0 0 1-.268-1.087m6.523 1.087a1.087 1.087 0 0 0 1.077-1.087c0-.68-.632-1.2-1.31-1.064a1.54 1.54 0 0 0-1.24 1.505v.646zM6.125 2.562a1.087 1.087 0 1 0-.213 2.153h1.463V4.03c0-.708-.5-1.318-1.194-1.456zM2.744 9.791v2.77c0 .764.62 1.384 1.385 1.384H7.45V9.791zm5.806 0v4.154h3.321c.765 0 1.385-.62 1.385-1.385V9.791z"
  }, undefined, false, undefined, this)
};
var presentFillSmallIcon = createIcon("presentFillSmall", iconDefinition);
export {
  presentFillSmallIcon,
  iconDefinition
};
