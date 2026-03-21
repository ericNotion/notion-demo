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

// src/nds-icons/src/phone/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.84 3.093a1.34 1.34 0 0 1 1.881.158l2.52 2.96a1.524 1.524 0 0 1-.083 2.066l-1.22 1.22 2.715 2.717 1.221-1.221a1.525 1.525 0 0 1 2.066-.084l2.962 2.517a1.29 1.29 0 0 1 .16 1.805l-.559.678a3.94 3.94 0 0 1-3.447 1.414l-.16-.016A11.564 11.564 0 0 1 2.614 7.299 3.88 3.88 0 0 1 3.97 3.822zm.93.969a.09.09 0 0 0-.128-.011l-.869.729a2.63 2.63 0 0 0-.919 2.358 10.314 10.314 0 0 0 9.17 8.925l.16.017a2.7 2.7 0 0 0 2.355-.966l.558-.678a.04.04 0 0 0-.005-.057l-2.961-2.517a.275.275 0 0 0-.373.015l-1.663 1.663a.625.625 0 0 1-.884 0l-3.6-3.6a.625.625 0 0 1 0-.884l1.663-1.663a.275.275 0 0 0 .015-.373z"
  }, undefined, false, undefined, this)
};
var phoneIcon = createIcon("phone", iconDefinition);
export {
  phoneIcon,
  iconDefinition
};
