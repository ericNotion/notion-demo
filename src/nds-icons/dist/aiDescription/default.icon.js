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

// src/nds-icons/src/aiDescription/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10430_11060)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M18.471 4.733a3.59 3.59 0 0 0-4.921 1.235l-5.285 8.825a.625.625 0 0 0 .436.938l4.591.744a.625.625 0 0 0 .2-1.234l-3.681-.597 4.811-8.034a2.338 2.338 0 0 1 4.024.02.625.625 0 0 0 1.08-.63 3.6 3.6 0 0 0-1.255-1.267"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M15.57 9.98a1.06 1.06 0 1 0 .339-2.094 1.06 1.06 0 0 0-.34 2.094m-7.6-5.86a3.59 3.59 0 0 1 5.104.326.625.625 0 0 1-.944.819 2.34 2.34 0 0 0-3.326-.213.625.625 0 0 1-.834-.932M9.98 9.074a1.06 1.06 0 1 0 .339-2.094 1.06 1.06 0 0 0-.34 2.094m-1.673 3.218.748-1.25H.9a.625.625 0 0 0 0 1.25zm-1.309 3.333a1.88 1.88 0 0 1 .08-1.25H.9a.625.625 0 1 0 0 1.25zm.864-7.917c-.061.44.006.87.174 1.25H.9a.625.625 0 0 1 0-1.25zM6.825 5.625a1.87 1.87 0 0 1-.302-1.25H.9a.625.625 0 0 0 0 1.25z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10430_11060",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiDescriptionIcon = createIcon("aiDescription", iconDefinition);
export {
  iconDefinition,
  aiDescriptionIcon
};
