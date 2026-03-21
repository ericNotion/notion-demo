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

// src/nds-icons/src/figure2/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.35 4.51a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.2 9.086v-1.31a74 74 0 0 1-3.383-.298.75.75 0 1 1 .166-1.49 72.6 72.6 0 0 0 16.034 0 .75.75 0 0 1 .166 1.49 74 74 0 0 1-3.383.298v1.34c.002 1.673.153 3.342.452 4.988l.436 2.395a.75.75 0 0 1-1.476.268l-.435-2.395a30 30 0 0 1-.287-1.939h-.68a30 30 0 0 1-.287 1.94l-.435 2.394a.75.75 0 1 1-1.476-.268l.435-2.395c.302-1.656.453-3.335.453-5.018v-1.17q-1.5.03-3 0v1.2a28 28 0 0 0 .452 4.988l.436 2.395a.75.75 0 0 1-1.476.268l-.435-2.395a30 30 0 0 1-.287-1.939h-.68q-.111.975-.287 1.94l-.435 2.394a.75.75 0 0 1-1.476-.268l.435-2.395A28 28 0 0 0 5.2 9.086"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.15 6.01a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var figure2FillIcon = createIcon("figure2Fill", iconDefinition);
export {
  iconDefinition,
  figure2FillIcon
};
