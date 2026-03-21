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

// src/nds-icons/src/filePdf/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_11536_15930)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M8.103 1.775c.484 0 .948.192 1.29.535l2.897 2.897.121.134c.266.324.414.733.414 1.156v1.278h-1.25V6.75H9.601A1.75 1.75 0 0 1 7.85 5V3.025H5a.576.576 0 0 0-.575.576v8.8l.012.116a.576.576 0 0 0 .563.459h6l.049-.005h1.684A1.83 1.83 0 0 1 11 14.226H5a1.826 1.826 0 0 1-1.815-1.64l-.01-.186V3.6c0-1.007.817-1.824 1.825-1.825zM8.95 5c0 .359.292.65.65.65h1.366L8.95 3.634z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M7.007 8.56c.84 0 1.299.566 1.299 1.244 0 .672-.46 1.226-1.3 1.226H6.1v.83a.487.487 0 0 1-.483.487.487.487 0 0 1-.481-.488V9.07c0-.33.18-.51.51-.51zM6.1 10.214h.778c.257 0 .447-.162.447-.414 0-.258-.19-.426-.447-.426H6.1zm9.084-1.654a.41.41 0 0 1 .402.41.41.41 0 0 1-.402.403h-1.417v.621h1.377a.41.41 0 0 1 0 .817h-1.377v1.048a.487.487 0 0 1-.482.488.487.487 0 0 1-.482-.488V9.07c0-.33.18-.51.51-.51zm-4.881 0c1.176 0 2.021.707 2.021 1.866s-.846 1.87-2.016 1.87H9.244c-.33 0-.51-.18-.51-.51V9.07c0-.33.18-.51.51-.51zm-.606 2.896h.606c.655 0 1.036-.476 1.036-1.03 0-.577-.348-1.026-1.031-1.026h-.61z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_11536_15930",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var filePdfSmallIcon = createIcon("filePdfSmall", iconDefinition);
export {
  iconDefinition,
  filePdfSmallIcon
};
