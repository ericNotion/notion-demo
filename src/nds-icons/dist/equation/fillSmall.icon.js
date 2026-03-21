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

// src/nds-icons/src/equation/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M15.55 3.4a.75.75 0 0 1-.673.746l-.077.004H7.42l-3.73 8.745a.752.752 0 0 1-1.342.076l-1.8-3.176a.75.75 0 1 1 1.305-.74l1.051 1.857 3.331-7.806.051-.1a.75.75 0 0 1 .639-.356H14.8l.077.004a.75.75 0 0 1 .673.746"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.934 5.406a.75.75 0 0 1 .178.99l-.044.063-2.195 2.84 2.195 2.843a.75.75 0 0 1-1.186.917l-1.957-2.533-1.957 2.533a.75.75 0 0 1-1.187-.917L9.978 9.3 7.78 6.459l-.044-.063a.75.75 0 0 1 1.182-.913l.05.058 1.956 2.531 1.956-2.531.05-.058a.75.75 0 0 1 1.003-.077"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var equationFillSmallIcon = createIcon("equationFillSmall", iconDefinition);
export {
  iconDefinition,
  equationFillSmallIcon
};
