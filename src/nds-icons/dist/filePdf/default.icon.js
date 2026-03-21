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

// src/nds-icons/src/filePdf/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_11536_15928)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M10.129 2.375c.563 0 1.103.224 1.502.622l3.622 3.622.14.155c.31.379.482.854.482 1.347v1.754h-1.25V8.3H12a2.05 2.05 0 0 1-2.05-2.05V3.625h-3.7a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h7.5q.045 0 .09-.005h1.848a2.12 2.12 0 0 1-1.938 1.255h-7.5A2.125 2.125 0 0 1 4.125 15.5v-11c0-1.174.951-2.125 2.125-2.125zm.92 3.875c0 .525.426.95.951.95h2.066L11.05 4.184z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M8.758 10.701c1.05 0 1.624.707 1.624 1.554 0 .84-.574 1.533-1.624 1.533H7.624v1.036a.61.61 0 0 1-.603.609.61.61 0 0 1-.601-.609v-3.486c0-.413.224-.637.637-.637zm-1.134 2.065h.973c.322 0 .56-.203.56-.518 0-.322-.238-.532-.56-.532h-.973zm11.355-2.065a.51.51 0 0 1 .503.51.51.51 0 0 1-.503.505h-1.771v.777h1.722a.512.512 0 0 1 0 1.022h-1.722v1.31a.61.61 0 0 1-.602.608.61.61 0 0 1-.602-.609v-3.486c0-.413.224-.637.637-.637zm-6.101 0c1.47 0 2.527.882 2.527 2.331 0 1.45-1.057 2.338-2.52 2.338h-1.33c-.413 0-.637-.224-.637-.637v-3.395c0-.413.224-.637.637-.637zm-.756 3.62h.756c.819 0 1.295-.596 1.295-1.289 0-.72-.434-1.281-1.288-1.281h-.763z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_11536_15928",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var filePdfIcon = createIcon("filePdf", iconDefinition);
export {
  iconDefinition,
  filePdfIcon
};
