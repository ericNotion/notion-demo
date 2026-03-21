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

// src/nds-icons/src/soccerBall/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.05 2.427a8.15 8.15 0 0 0-3.306 2.388l.92 2.833 1.708.554L9.45 5.966V4.171zM2.956 5.948c-.542.94-.901 2-1.03 3.129l1.656-1.203zm-1.068 4.516a8.1 8.1 0 0 0 1.229 3.855h3.036l1.055-1.452L6.032 9.25l-1.707-.555zm2.058 4.956a8.15 8.15 0 0 0 2.737 2l-.65-2zm4.041 2.454a8 8 0 0 0 2.013.251c.695 0 1.369-.087 2.012-.251l.945-2.908-1.055-1.452H8.097l-1.055 1.452zm5.33-.454a8.15 8.15 0 0 0 2.737-2h-2.087zm3.566-3.1a8.1 8.1 0 0 0 1.229-3.856l-2.437-1.77-1.707.554-1.176 3.62 1.055 1.451zm1.19-5.243a8.1 8.1 0 0 0-1.029-3.129l-.626 1.926zm-1.817-4.262a8.15 8.15 0 0 0-3.306-2.388l-2.4 1.744v1.795l3.078 2.236 1.707-.554zm-4.639-2.779a8.2 8.2 0 0 0-3.234 0L10 3.211zm-3.4 10.378L7.115 9.022 10 6.926l2.885 2.096-1.102 3.392z"
  }, undefined, false, undefined, this)
};
var soccerBallFillIcon = createIcon("soccerBallFill", iconDefinition);
export {
  soccerBallFillIcon,
  iconDefinition
};
