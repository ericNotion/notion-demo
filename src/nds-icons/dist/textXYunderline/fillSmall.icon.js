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

// src/nds-icons/src/textXYunderline/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.584 3.384a.75.75 0 1 0-1.248.832l2.201 3.301v2.503a.75.75 0 0 0 1.5 0V7.444l2.152-3.228a.75.75 0 0 0-1.248-.832l-1.678 2.517zm-6.039.023a.75.75 0 1 0-1.22.874l1.9 2.65-1.9 2.652a.75.75 0 0 0 1.22.874L5.147 8.22l1.603 2.237a.75.75 0 0 0 1.22-.874l-1.9-2.651L7.969 4.28a.75.75 0 0 0-1.22-.874L5.147 5.644zM1.8 11.45a.75.75 0 1 0 0 1.5h.004a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.346 11.45a.75.75 0 1 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.896 11.45a.75.75 0 1 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.446 11.45a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.996 11.45a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.546 11.45a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.096 11.45a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.646 11.45a.75.75 0 0 0 0 1.5h.008a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.196 11.45a.75.75 0 1 0 0 1.5h.004a.75.75 0 0 0 0-1.5z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textXYunderlineFillSmallIcon = createIcon("textXYunderlineFillSmall", iconDefinition);
export {
  textXYunderlineFillSmallIcon,
  iconDefinition
};
