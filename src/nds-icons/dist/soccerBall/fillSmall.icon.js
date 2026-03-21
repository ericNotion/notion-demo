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

// src/nds-icons/src/soccerBall/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.401 1.904c-.912.39-1.72.978-2.367 1.71l.785 2.417 1.26.409 2.37-1.723V3.393zM2.239 4.727a6.6 6.6 0 0 0-.818 2.486l1.315-.956zM1.4 8.587c.088 1 .398 1.936.88 2.758h2.586l.778-1.07-.906-2.789-1.259-.409zm1.688 3.859a6.65 6.65 0 0 0 2.175 1.59l-.516-1.59zm3.472 2.022a6.65 6.65 0 0 0 2.88 0l.804-2.476-.778-1.07H6.534l-.778 1.07zm4.177-.433a6.6 6.6 0 0 0 2.175-1.59h-1.659zm2.983-2.689a6.6 6.6 0 0 0 .88-2.759l-2.08-1.51-1.258.41-.906 2.788.778 1.07zm.859-4.133a6.6 6.6 0 0 0-.818-2.486l-.497 1.53zm-1.613-3.598a6.64 6.64 0 0 0-2.367-1.71l-2.05 1.488v1.324l2.373 1.723 1.259-.41zM9.285 1.5a6.7 6.7 0 0 0-2.57 0L8 2.432zM6.653 9.821 5.821 7.26 8 5.677l2.179 1.583-.833 2.561z"
  }, undefined, false, undefined, this)
};
var soccerBallFillSmallIcon = createIcon("soccerBallFillSmall", iconDefinition);
export {
  soccerBallFillSmallIcon,
  iconDefinition
};
