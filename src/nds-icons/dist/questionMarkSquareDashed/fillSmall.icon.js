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

// src/nds-icons/src/questionMarkSquareDashed/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.32 3.772a.8.8 0 0 1 .18-.022h.538a.75.75 0 1 0 0-1.5H4.5q-.278 0-.538.065a.75.75 0 1 0 .358 1.457M7.462 2.25a.75.75 0 0 0 0 1.5h1.076a.75.75 0 1 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5h.538q.095 0 .18.022a.75.75 0 0 0 .358-1.457 2.3 2.3 0 0 0-.538-.065z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.772 4.32a.75.75 0 1 0-1.457-.358 2.3 2.3 0 0 0-.065.538v.538a.75.75 0 0 0 1.5 0V4.5q0-.095.022-.18m9.913-.358a.75.75 0 0 0-1.457.358.8.8 0 0 1 .022.18v.538a.75.75 0 0 0 1.5 0V4.5q0-.278-.065-.538m-9.935 3.5a.75.75 0 0 0-1.5 0v1.076a.75.75 0 0 0 1.5 0zm10 0a.75.75 0 0 0-1.5 0v1.076a.75.75 0 0 0 1.5 0zm-10 3.5a.75.75 0 0 0-1.5 0v.538q0 .277.065.538a.75.75 0 0 0 1.457-.358.8.8 0 0 1-.022-.18zm10 0a.75.75 0 0 0-1.5 0v.538a.8.8 0 0 1-.022.18.75.75 0 0 0 1.457.358q.065-.26.065-.538z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.32 12.228a.75.75 0 1 0-.358 1.457q.26.065.538.065h.538a.75.75 0 0 0 0-1.5H4.5a.8.8 0 0 1-.18-.022m7.718 1.457a.75.75 0 0 0-.358-1.457.8.8 0 0 1-.18.022h-.539a.75.75 0 0 0 0 1.5h.539q.277 0 .538-.065M7.462 12.25a.75.75 0 0 0 0 1.5h1.076a.75.75 0 0 0 0-1.5zm.519-6.469c-.613 0-.955.346-1.013.58a.75.75 0 0 1-1.456-.364c.27-1.077 1.366-1.716 2.469-1.716 1.235 0 2.529.827 2.529 2.176 0 .784-.47 1.411-1.061 1.777l-.64.437a.5.5 0 0 0-.23.397.75.75 0 1 1-1.5 0c0-.663.347-1.264.88-1.632l.003-.003.672-.458.017-.01c.271-.166.359-.366.359-.508 0-.228-.296-.676-1.029-.676m-.118 6.092a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var questionMarkSquareDashedFillSmallIcon = createIcon("questionMarkSquareDashedFillSmall", iconDefinition);
export {
  questionMarkSquareDashedFillSmallIcon,
  iconDefinition
};
