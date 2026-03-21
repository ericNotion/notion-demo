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

// src/nds-icons/src/trash/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.688 6.3a.575.575 0 0 0-.575.575v4.5a.575.575 0 1 0 1.15 0v-4.5a.575.575 0 0 0-.575-.575m2.625 0a.575.575 0 0 0-.575.575v4.5a.575.575 0 1 0 1.15 0v-4.5a.575.575 0 0 0-.575-.575"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.625 2.125a1.5 1.5 0 0 0-1.5 1.5v.75h-2a.625.625 0 0 0 0 1.25h.528l.29 6.4c.048 1.035.9 1.85 1.936 1.85h4.242a1.94 1.94 0 0 0 1.935-1.85l.291-6.4h.528a.625.625 0 1 0 0-1.25h-2v-.75a1.5 1.5 0 0 0-1.5-1.5zm-.25 1.5a.25.25 0 0 1 .25-.25h2.75a.25.25 0 0 1 .25.25v.75h-3.25zm-1.183 8.344-.288-6.344h6.192l-.288 6.344a.687.687 0 0 1-.687.656H5.879a.687.687 0 0 1-.687-.656"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var trashSmallIcon = createIcon("trashSmall", iconDefinition);
export {
  trashSmallIcon,
  iconDefinition
};
