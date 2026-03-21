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

// src/nds-icons/src/chat/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9026_9829)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M2.8 2.325A1.825 1.825 0 0 0 .975 4.15v5.2c0 1.008.817 1.825 1.825 1.825h.025v1.511a.625.625 0 0 0 1.006.495l2.384-1.833v.006c0 .793.643 1.435 1.435 1.435h2.567l2.013 1.548a.625.625 0 0 0 1.006-.495v-1.053h.354c.793 0 1.435-.643 1.435-1.435v-4.05c0-.793-.642-1.435-1.435-1.435h-.965V4.15A1.825 1.825 0 0 0 10.8 2.325zM2.225 4.15c0-.317.258-.575.575-.575h8c.318 0 .575.258.575.575v1.72H7.65c-.792 0-1.435.642-1.435 1.435v2.621a.63.63 0 0 0-.37.13l-1.77 1.362v-.867a.625.625 0 0 0-.625-.625H2.8a.575.575 0 0 1-.575-.575zm5.24 3.154c0-.102.083-.185.185-.185h5.94c.102 0 .185.083.185.185v4.05a.185.185 0 0 1-.185.185h-.979a.625.625 0 0 0-.625.625v.409l-1.175-.904a.62.62 0 0 0-.381-.13H7.65a.185.185 0 0 1-.185-.185z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9026_9829",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var chatSmallIcon = createIcon("chatSmall", iconDefinition);
export {
  iconDefinition,
  chatSmallIcon
};
