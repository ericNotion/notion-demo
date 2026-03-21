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

// src/nds-icons/src/handTap/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.465 6.889a2.865 2.865 0 0 1 4.962-2.865l.244.422a.55.55 0 1 0 .952-.55l-.244-.422a3.965 3.965 0 1 0-6.867 3.965l.244.422a.55.55 0 1 0 .953-.55z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.557 5.959a1.75 1.75 0 0 1 1.96.142 1.748 1.748 0 0 1 2.871.23l1.367 2.366a5.84 5.84 0 0 1-8.956 7.27l-4.044-3.624a1.672 1.672 0 0 1 1.64-2.831L4.593 6.39a1.75 1.75 0 1 1 3.03-1.749l1.14 1.975a1.75 1.75 0 0 1 2.29-.22c.134-.172.303-.322.504-.437M6.54 5.266a.5.5 0 0 0-.865.5l3.216 5.57a.625.625 0 0 1-.915.813L6.12 10.76a.42.42 0 0 0-.532.651l4.044 3.624a4.591 4.591 0 0 0 7.04-5.714l-1.367-2.367a.498.498 0 1 0-.864.5l.067.118a.625.625 0 1 1-1.082.625l-.563-.974a.5.5 0 0 0-.865.5l.113.194a.625.625 0 1 1-1.083.625l-.562-.974a.5.5 0 0 0-.865.5l.562.974a.625.625 0 1 1-1.082.625z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var handTapIcon = createIcon("handTap", iconDefinition);
export {
  iconDefinition,
  handTapIcon
};
