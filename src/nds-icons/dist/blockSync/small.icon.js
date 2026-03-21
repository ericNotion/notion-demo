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

// src/nds-icons/src/blockSync/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9686_13260)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M12 4.23H2c-.35 0-.63-.28-.63-.62s.29-.62.63-.62h10c.34 0 .62.28.62.62s-.28.62-.62.62M5.61 6.17c.34 0 .62.29.62.63s-.28.62-.62.62h-3.6c-.35 0-.63-.27-.63-.62s.29-.63.63-.63zm2 5.09.91-.91a.54.54 0 0 0 .17-.41.6.6 0 0 0-.15-.39l-.03-.03a.5.5 0 0 0-.17-.11.6.6 0 0 0-.23-.05h-.08v-.01c.25-.56.7-1.02 1.25-1.28a2.576 2.576 0 0 1 3.24.9c.19.29.58.37.87.17.29-.19.36-.58.17-.87a3.83 3.83 0 0 0-2.16-1.56c-.89-.25-1.83-.17-2.66.23-.83.39-1.49 1.07-1.86 1.91-.07.17-.14.34-.19.52h-.43a.6.6 0 0 0-.4.16c-.007 0-.013.009-.02.018l-.01.012a.6.6 0 0 0-.11.17.6.6 0 0 0-.04.22c0 .07.01.15.04.22s.07.13.13.19l.91.91c.11.11.26.17.41.17s.29-.06.41-.17zm7.31-.81c.06.06.1.13.13.2v-.03c.03.07.04.14.04.21 0 .08-.02.16-.05.23q-.03.09-.09.15l-.06.06c-.04.03-.08.06-.13.08-.08.04-.17.06-.25.06h-.43c-.05.18-.11.35-.19.52-.37.84-1.03 1.52-1.86 1.91-.51.25-1.07.37-1.63.37a3.83 3.83 0 0 1-3.18-1.7.63.63 0 0 1 .18-.87.63.63 0 0 1 .87.18 2.58 2.58 0 0 0 3.24.9c.55-.26 1-.72 1.25-1.28v-.01h-.07a.57.57 0 0 1-.38-.13l-.06-.06a.6.6 0 0 1-.09-.15.7.7 0 0 1-.05-.23c0-.07.01-.14.04-.21.03-.08.07-.14.13-.2l.91-.91a.58.58 0 0 1 .81 0z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9686_13260",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var blockSyncSmallIcon = createIcon("blockSyncSmall", iconDefinition);
export {
  iconDefinition,
  blockSyncSmallIcon
};
