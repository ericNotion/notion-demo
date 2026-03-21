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

// src/nds-icons/src/collection/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M13.625 4.186q0 .086-.01.168h.01v7.46c0 .502-.287.896-.615 1.173-.33.28-.773.503-1.264.678-.989.354-2.313.56-3.746.56s-2.757-.207-3.746-.56c-.491-.175-.933-.399-1.264-.678-.328-.277-.615-.67-.615-1.173v-7.46h.01a1 1 0 0 1-.01-.168c0-.502.287-.896.615-1.173.33-.28.773-.503 1.264-.679.989-.353 2.313-.56 3.746-.56s2.757.207 3.746.56c.491.176.933.4 1.264.679.328.277.615.67.615 1.173m-8.95-.674c-.414.147-.704.308-.879.456-.16.135-.17.21-.171.218 0 .007.011.082.171.217.175.148.465.31.879.457.82.293 1.997.486 3.325.486s2.504-.193 3.325-.486c.414-.148.704-.31.879-.457.168-.142.171-.217.171-.217s-.003-.076-.171-.218c-.175-.148-.465-.309-.879-.456-.82-.294-1.997-.487-3.325-.487s-2.504.193-3.325.487m7.07 2.525c-.988.353-2.312.56-3.745.56s-2.757-.207-3.746-.56a5 5 0 0 1-.629-.268V8c0 .008.01.083.171.218.175.148.465.31.879.457.82.293 1.997.487 3.325.487s2.504-.194 3.325-.487c.414-.148.704-.309.879-.457.16-.135.17-.21.171-.217V5.77q-.295.148-.63.267m-8.12 5.777c0 .007.01.082.171.218.175.148.465.309.879.456.82.294 1.997.487 3.325.487s2.504-.193 3.325-.487c.414-.147.704-.308.879-.456.16-.136.17-.21.171-.218v-2.23q-.295.149-.63.267c-.988.353-2.312.56-3.745.56s-2.757-.207-3.746-.56a5 5 0 0 1-.629-.267z"
  }, undefined, false, undefined, this)
};
var collectionSmallIcon = createIcon("collectionSmall", iconDefinition);
export {
  iconDefinition,
  collectionSmallIcon
};
