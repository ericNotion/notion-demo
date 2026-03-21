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

// src/nds-icons/src/archiveBoxCheck/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.5 3.4a.9.9 0 0 1 .9-.9h9.2a.9.9 0 0 1 .9.9v1.2a.9.9 0 0 1-.9.9H3.4a.9.9 0 0 1-.9-.9z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        fillRule: "evenodd",
        d: "M3.3 6.5h9.4v2.16q-.078.097-.143.207l-1.451 2.419-.167-.195A1.875 1.875 0 0 0 8.065 13.5H4.2a.9.9 0 0 1-.9-.9zM6.4 8a.5.5 0 0 0 0 1h3.2a.5.5 0 1 0 0-1z",
        clipRule: "evenodd"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.701 10.153a.625.625 0 1 0-1.072-.643l-2.344 3.906-1.295-1.511a.625.625 0 0 0-.95.813l1.86 2.17a.625.625 0 0 0 1.011-.085z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var archiveBoxCheckFillSmallIcon = createIcon("archiveBoxCheckFillSmall", iconDefinition);
export {
  iconDefinition,
  archiveBoxCheckFillSmallIcon
};
