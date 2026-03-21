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

// src/nds-icons/src/checkmarkShield/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.172 5.564a.625.625 0 0 0-.858.214L7.36 9.035 6.325 7.827a.625.625 0 1 0-.95.813l1.6 1.867a.625.625 0 0 0 1.01-.085l2.4-4a.625.625 0 0 0-.213-.858"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.28 2.191a.63.63 0 0 0-.56 0l-.962.481a7.25 7.25 0 0 1-3.242.765h-.11a.625.625 0 0 0-.625.626v4.333a5 5 0 0 0 3.03 4.596l1.943.832a.63.63 0 0 0 .492 0l1.942-.832a5 5 0 0 0 3.03-4.596V4.062a.625.625 0 0 0-.624-.625h-.11a7.25 7.25 0 0 1-3.242-.765zm-.963 1.6L8 3.448l.683.341a8.5 8.5 0 0 0 3.286.882v3.724a3.75 3.75 0 0 1-2.273 3.447L8 12.57l-1.696-.727a3.75 3.75 0 0 1-2.273-3.447V4.672a8.5 8.5 0 0 0 3.286-.882"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var checkmarkShieldSmallIcon = createIcon("checkmarkShieldSmall", iconDefinition);
export {
  iconDefinition,
  checkmarkShieldSmallIcon
};
