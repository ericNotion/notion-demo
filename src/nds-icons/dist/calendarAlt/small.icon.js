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

// src/nds-icons/src/calendarAlt/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "2.37 2.37 11.25 11.25",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.7 9.7a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m-2.3-2a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2m2.3 0a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        fillRule: "evenodd",
        d: "M11.8 2.375c1.008 0 1.825.817 1.825 1.825v7.6a1.825 1.825 0 0 1-1.825 1.825H4.2A1.825 1.825 0 0 1 2.375 11.8V4.2c0-1.008.817-1.825 1.825-1.825zM3.625 6.149v5.65c0 .318.258.576.575.576h7.6a.575.575 0 0 0 .575-.575V6.15zM4.2 3.625a.575.575 0 0 0-.575.575v.85h8.75V4.2a.575.575 0 0 0-.575-.575z",
        clipRule: "evenodd"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var calendarAltSmallIcon = createIcon("calendarAltSmall", iconDefinition);
export {
  iconDefinition,
  calendarAltSmallIcon
};
