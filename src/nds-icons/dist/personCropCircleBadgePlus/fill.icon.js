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

// src/nds-icons/src/personCropCircleBadgePlus/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.375 10a7.625 7.625 0 1 1 5.992 7.45c.151-.456.233-.944.233-1.45a4.58 4.58 0 0 0-.966-2.82A4.8 4.8 0 0 1 10 12.561c1.754 0 3.298.934 4.087 2.332A6.375 6.375 0 1 0 3.78 11.406q-.643.032-1.23.227A7.7 7.7 0 0 1 2.375 10"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4 12.5a3.5 3.5 0 0 0-1.137.189A3.502 3.502 0 0 0 4 19.5a3.5 3.5 0 1 0 0-7m-2.594 3.531c0-.345.28-.625.625-.625h1.375v-1.375a.625.625 0 0 1 1.25 0v1.375h1.375a.625.625 0 0 1 0 1.25H4.656v1.375a.625.625 0 1 1-1.25 0v-1.375H2.031a.625.625 0 0 1-.625-.625M10 5.125c-.95 0-1.723.393-2.245 1.044-.51.635-.75 1.474-.75 2.346s.24 1.71.75 2.346c.522.65 1.295 1.044 2.245 1.044s1.723-.394 2.245-1.044c.51-.635.75-1.474.75-2.346s-.24-1.711-.75-2.346c-.522-.65-1.294-1.044-2.245-1.044"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var personCropCircleBadgePlusFillIcon = createIcon("personCropCircleBadgePlusFill", iconDefinition);
export {
  personCropCircleBadgePlusFillIcon,
  iconDefinition
};
