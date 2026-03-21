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

// src/nds-icons/src/questionMarkSquareDashed/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.682 4.406q.154-.03.318-.031h.5a.625.625 0 1 0 0-1.25H6q-.287 0-.56.055a.625.625 0 1 0 .242 1.226M9.5 3.125a.625.625 0 1 0 0 1.25h1a.625.625 0 1 0 0-1.25zm4 0a.625.625 0 1 0 0 1.25h.5q.165 0 .318.03a.625.625 0 0 0 .242-1.225 3 3 0 0 0-.56-.055zM4.406 5.682A.625.625 0 1 0 3.18 5.44q-.055.272-.055.56v.5a.625.625 0 1 0 1.25 0V6q0-.165.03-.318M16.82 5.44a.625.625 0 0 0-1.226.242q.03.154.031.318v.5a.625.625 0 1 0 1.25 0V6a3 3 0 0 0-.055-.56M4.375 9.5a.625.625 0 1 0-1.25 0v1a.625.625 0 1 0 1.25 0zm12.5 0a.625.625 0 1 0-1.25 0v1a.625.625 0 1 0 1.25 0zm0 4a.625.625 0 1 0-1.25 0v.5q0 .165-.03.318a.625.625 0 0 0 1.225.242 3 3 0 0 0 .055-.56zm-12.5 0a.625.625 0 1 0-1.25 0v.5q0 .287.055.56a.625.625 0 0 0 1.226-.242A1.6 1.6 0 0 1 4.375 14zm1.307 2.094a.625.625 0 1 0-.242 1.226q.272.055.56.055h.5a.625.625 0 1 0 0-1.25H6q-.165 0-.318-.03m8.878 1.225a.625.625 0 0 0-.242-1.226q-.154.03-.318.031h-.5a.625.625 0 1 0 0 1.25h.5q.287 0 .56-.055M9.5 15.625a.625.625 0 1 0 0 1.25h1a.625.625 0 1 0 0-1.25zm.478-8.471c-.804 0-1.333.456-1.438.874a.625.625 0 0 1-1.213-.303c.28-1.121 1.44-1.82 2.65-1.82 1.365 0 2.714.905 2.714 2.298 0 .812-.49 1.477-1.13 1.872l-.755.516a.84.84 0 0 0-.381.677.625.625 0 1 1-1.25 0c0-.688.36-1.318.921-1.706l.003-.002.784-.535.014-.008c.374-.228.544-.537.544-.814 0-.459-.517-1.049-1.463-1.049m-.138 7.134a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6"
  }, undefined, false, undefined, this)
};
var questionMarkSquareDashedIcon = createIcon("questionMarkSquareDashed", iconDefinition);
export {
  questionMarkSquareDashedIcon,
  iconDefinition
};
