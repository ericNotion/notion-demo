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

// src/nds-icons/src/figureRun/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.401 2.14a1.222 1.222 0 1 0-.255 2.432A1.222 1.222 0 0 0 9.4 2.14M8.135 4.773a3 3 0 0 0-.413-.011l-2.35.112a.575.575 0 0 0-.535.458l-.39 1.882a.575.575 0 0 0 1.126.233l.3-1.445 1.01-.049-.48 1.73a1.275 1.275 0 0 0 .455 1.352l2.216 1.696-1.458 1.058a.575.575 0 0 0 .676.93l2.005-1.456a.645.645 0 0 0 .013-1.034L8.706 9.001l.629-2.018.436 1.282a.575.575 0 0 0 .689.372l1.581-.41a.575.575 0 1 0-.289-1.114l-1.064.276-.27-.792a2.71 2.71 0 0 0-2.283-1.824"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m6.278 9.072-.094-.117-.607 2.41-1.781 1.604a.575.575 0 1 0 .77.854l2.041-1.839.556-2.209-.532-.373a1.7 1.7 0 0 1-.353-.33"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var figureRunSmallIcon = createIcon("figureRunSmall", iconDefinition);
export {
  iconDefinition,
  figureRunSmallIcon
};
