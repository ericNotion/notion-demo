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

// src/nds-icons/src/paintBrush/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.486 14.341a.669.669 0 1 0-.946.946.669.669 0 0 0 .946-.946"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.964 2.093a1.625 1.625 0 0 0-2.471.205L6.976 5.821l-.04-.04a.625.625 0 0 0-.884 0l-1.07 1.07a2.625 2.625 0 0 0 0 3.713l.563.563-1.35.964c-.355.253-.782.557-1.13.92-.363.38-.683.867-.754 1.495-.09.793.17 1.621.78 2.231s1.437.87 2.23.78c.628-.072 1.115-.392 1.495-.755.364-.348.668-.775.92-1.13l.015-.021.95-1.329.562.563a2.625 2.625 0 0 0 3.712 0l1.07-1.07a.625.625 0 0 0 0-.884l-.054-.054 3.524-2.517a1.625 1.625 0 0 0 .204-2.471zm-1.454.932a.375.375 0 0 1 .57-.048l3.001 3.001a4.3 4.3 0 0 1-1.216 2.443l-.069.068c-.112.113.004.3.155.25l.69-.23a3.2 3.2 0 0 0 1.525-1.079l.16-.206 1.51 1.509a.375.375 0 0 1-.048.57l-3.558 2.541-5.262-5.261zM6.494 7.107l6.226 6.226-.629.628a1.375 1.375 0 0 1-1.944 0l-1.085-1.084a.625.625 0 0 0-.95.078l-1.379 1.93c-.27.38-.51.715-.781.974-.263.25-.509.385-.772.415a1.47 1.47 0 0 1-1.206-.42c-.33-.33-.47-.776-.42-1.207.029-.263.164-.51.415-.771.258-.27.594-.512.972-.782l1.931-1.379a.625.625 0 0 0 .079-.95L5.866 9.68a1.375 1.375 0 0 1 0-1.944z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paintBrushIcon = createIcon("paintBrush", iconDefinition);
export {
  paintBrushIcon,
  iconDefinition
};
