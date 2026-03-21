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

// src/nds-icons/src/paintBrush/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.624 1.622a1.374 1.374 0 0 0-2.091.173L5.57 4.543a.575.575 0 0 0-.781.03l-.856.855c-.85.85-.85 2.227 0 3.076l.383.383.004.005-.007.005-1 .715-.003.001c-.282.201-.629.448-.912.744-.297.31-.564.715-.624 1.24a2.248 2.248 0 0 0 2.492 2.49c.524-.06.928-.326 1.238-.623.297-.284.543-.63.744-.912l.014-.02.708-.99.387.387c.85.85 2.227.85 3.076 0l.857-.856a.575.575 0 0 0 .018-.794l2.747-1.962c.692-.494.774-1.49.173-2.091zm-1.155.841a.225.225 0 0 1 .342-.028l2.616 2.615a3.36 3.36 0 0 1-.891 1.592l-.056.055c-.146.146.005.39.2.324l.552-.184c.46-.153.87-.43 1.183-.798l1 1a.225.225 0 0 1-.028.342l-2.795 1.997-4.12-4.12zM5.119 5.87l.077-.077 4.874 4.874-.45.45c-.4.4-1.05.4-1.45 0l-.867-.868a.575.575 0 0 0-.875.073l-1.103 1.544c-.216.304-.405.567-.615.768-.203.194-.385.29-.574.312a1.1 1.1 0 0 1-.904-.316 1.1 1.1 0 0 1-.315-.903c.021-.189.118-.37.312-.574.201-.21.463-.399.768-.616L5.54 9.433a.575.575 0 0 0 .073-.874l-.868-.868a1.025 1.025 0 0 1 0-1.45z"
  }, undefined, false, undefined, this)
};
var paintBrushSmallIcon = createIcon("paintBrushSmall", iconDefinition);
export {
  paintBrushSmallIcon,
  iconDefinition
};
