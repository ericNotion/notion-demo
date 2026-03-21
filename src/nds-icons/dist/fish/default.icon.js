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

// src/nds-icons/src/fish/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10823_12082)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M13.897 10a.884.884 0 1 1 1.768 0 .884.884 0 0 1-1.768 0"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "m19.065 9.728.014.035c.055.137.06.297.013.438l-.072.16c-.974 2.07-2.725 3.626-4.798 4.428a6.86 6.86 0 0 1-5.666 2.983h-2.07a.55.55 0 0 1-.44-.881l1.64-2.18a8.8 8.8 0 0 1-3.05-2.121l-.104-.111-2.688 1.772a.624.624 0 0 1-.969-.521V6.195a.625.625 0 0 1 .97-.521l2.729 1.8.061-.066a8.8 8.8 0 0 1 3.05-2.121l-1.64-2.179a.55.55 0 0 1 .44-.88h2.071a6.86 6.86 0 0 1 5.662 2.979c2.075.802 3.827 2.358 4.804 4.43zm-10.509-6.4h-.968l1.195 1.588a8.7 8.7 0 0 1 2.292-.318c.403 0 .8.032 1.193.086a5.76 5.76 0 0 0-3.712-1.356m-.968 13.344h.968a5.76 5.76 0 0 0 3.716-1.36 9 9 0 0 1-1.197.087c-.78 0-1.548-.116-2.29-.317zm-2.035-4.93a7.56 7.56 0 0 0 5.522 2.407A7.57 7.57 0 0 0 17.807 10a7.57 7.57 0 0 0-6.732-4.151 7.56 7.56 0 0 0-5.523 2.41l-.116.125q-.123.132-.221.277a.626.626 0 0 1-.86.168l-2.23-1.472v5.212l2.197-1.448a.62.62 0 0 1 .867.179q.108.166.247.315z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10823_12082",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fishIcon = createIcon("fish", iconDefinition);
export {
  iconDefinition,
  fishIcon
};
