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

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/ringedPlanet/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        "clip-path": "url(#clip0_1501_15982)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M7.66563 15.7969C8.38751 16.0875 9.17188 16.25 10 16.25C13.1594 16.25 15.7656 13.9 16.1844 10.8563C14.9469 11.7781 13.55 12.7 12.0563 13.5656C10.55 14.4375 9.06563 15.1875 7.66876 15.7969H7.66563ZM19.8969 4.26562C19.3688 3.34687 16.9188 3.7 13.7156 4.98125C12.6781 4.20937 11.3938 3.75 10 3.75C6.54688 3.75 3.75001 6.54688 3.75001 10C3.75001 10.2469 3.76876 10.4906 3.79688 10.7312C1.09688 12.8687 -0.424993 14.8187 0.103132 15.7344C0.890632 17.1062 5.96251 15.65 11.4281 12.4844C16.8938 9.31875 20.6844 5.6375 19.8969 4.26875V4.26562ZM3.19688 13.9406C2.96251 13.5344 3.31251 12.8375 4.08438 12C4.35626 12.7969 4.78126 13.5188 5.32813 14.1344C4.21563 14.3875 3.43126 14.3469 3.19688 13.9406ZM15.9156 8C15.6469 7.20313 15.225 6.47813 14.6813 5.8625C15.7906 5.60938 16.5719 5.65312 16.8063 6.05937C17.0406 6.46562 16.6906 7.1625 15.9156 8.00313V8Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_1501_15982",
          children: /* @__PURE__ */ jsxDEV3("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var ringedPlanetIcon = createIcon("ringedPlanet", iconDefinition);
export {
  ringedPlanetIcon,
  iconDefinition
};
