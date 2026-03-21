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

// src/nds-icons/src/textBelowPhoto/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.924 3.438a1.145 1.145 0 1 0 0 2.29 1.145 1.145 0 0 0 0-2.29"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.07 1.825c-.908 0-1.645.737-1.645 1.645v5.351c0 .909.737 1.645 1.645 1.645h7.849c.908 0 1.645-.736 1.645-1.645v-5.35c0-.91-.737-1.646-1.646-1.646zM3.575 3.47c0-.273.222-.495.495-.495h7.849c.273 0 .495.222.495.495v2.692l-1.828-1.828a.575.575 0 0 0-.813 0l-2.86 2.86-1.321-1.321a.575.575 0 0 0-.813 0L3.575 7.076zM7.32 8.414l2.86-2.86 2.234 2.234v1.033a.495.495 0 0 1-.495.495H4.07a.495.495 0 0 1-.495-.495v-.118l1.61-1.61 1.322 1.32a.575.575 0 0 0 .813 0M3 11.17a.575.575 0 0 0 0 1.15h8.4a.575.575 0 1 0 0-1.15zm0 1.855a.575.575 0 1 0 0 1.15h5.68a.575.575 0 1 0 0-1.15z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textBelowPhotoSmallIcon = createIcon("textBelowPhotoSmall", iconDefinition);
export {
  textBelowPhotoSmallIcon,
  iconDefinition
};
