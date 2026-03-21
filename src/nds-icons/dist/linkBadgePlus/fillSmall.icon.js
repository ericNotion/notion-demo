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

// src/nds-icons/src/linkBadgePlus/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.312 2.712a3.27 3.27 0 0 1 4.625 0l.294.294a3.27 3.27 0 0 1 0 4.625l-.268.268a3.94 3.94 0 0 0-1.918-.203L12.17 6.57a1.77 1.77 0 0 0 0-2.503l-.294-.294a1.77 1.77 0 0 0-2.504 0L7.89 5.255a.75.75 0 0 1-1.06-1.06zm-.616 8.332L6.571 12.17a1.77 1.77 0 0 1-2.504 0l-.294-.294a1.77 1.77 0 0 1 0-2.504L5.255 7.89a.75.75 0 0 0-1.06-1.06L2.711 8.31a3.27 3.27 0 0 0 0 4.626l.294.294a3.27 3.27 0 0 0 4.625 0l.268-.268a3.94 3.94 0 0 1-.203-1.919m4.507-2.383a3.001 3.001 0 1 1-1.205 5.88 3.001 3.001 0 0 1 1.205-5.88m1.065 2.44H12.1V9.933a.5.5 0 0 0-1 0V11.1H9.934a.5.5 0 1 0 0 1H11.1v1.167a.5.5 0 0 0 1 0V12.1h1.167a.5.5 0 0 0 0-1"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.56 6.443a.75.75 0 1 0-1.06-1.06L5.14 9.74A.75.75 0 1 0 6.2 10.8z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var linkBadgePlusFillSmallIcon = createIcon("linkBadgePlusFillSmall", iconDefinition);
export {
  linkBadgePlusFillSmallIcon,
  iconDefinition
};
