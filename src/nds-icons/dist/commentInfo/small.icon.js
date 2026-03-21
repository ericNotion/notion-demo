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

// src/nds-icons/src/commentInfo/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.269 6.788a.5.5 0 0 0 0 1h.23v1.437h-.23a.5.5 0 0 0 0 1H8.73a.5.5 0 0 0 0-1H8.5V7.288a.5.5 0 0 0-.5-.5zM8.7 5.55a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12 2.975c1.036 0 1.875.84 1.875 1.875v5.5c0 1.036-.84 1.875-1.875 1.875H8.324l-2.84 2.307a.625.625 0 0 1-1.018-.485v-1.822H4a1.875 1.875 0 0 1-1.875-1.875v-5.5c0-1.035.84-1.875 1.875-1.875zm.625 1.875A.625.625 0 0 0 12 4.225H4a.625.625 0 0 0-.625.625v5.5c0 .345.28.625.625.625h1.09c.346 0 .626.28.626.625v1.134l1.992-1.619c.112-.09.25-.14.394-.14H12c.345 0 .625-.28.625-.625z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var commentInfoSmallIcon = createIcon("commentInfoSmall", iconDefinition);
export {
  iconDefinition,
  commentInfoSmallIcon
};
