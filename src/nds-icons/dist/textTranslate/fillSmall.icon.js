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

// src/nds-icons/src/textTranslate/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.07 4.174a.75.75 0 0 0-1.5 0v.523H7.62a.75.75 0 1 0 0 1.5h4.98a9.2 9.2 0 0 1-1.277 2.06 10 10 0 0 1-.966-1.428.75.75 0 1 0-1.314.723c.311.565.722 1.183 1.25 1.814a13 13 0 0 1-2.454 1.81.75.75 0 1 0 .746 1.3 14.4 14.4 0 0 0 2.738-2.02 14.4 14.4 0 0 0 2.738 2.02.75.75 0 1 0 .746-1.3 13 13 0 0 1-2.455-1.81c.99-1.181 1.573-2.324 1.856-3.169h.818a.75.75 0 0 0 0-1.5H12.07z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m5.235 10.151.706 1.933a.75.75 0 1 0 1.41-.515l-2.6-7.11a1.002 1.002 0 0 0-1.881 0l-2.6 7.11a.75.75 0 0 0 1.41.515l.706-1.933zm-.548-1.5H2.934l.876-2.396z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textTranslateFillSmallIcon = createIcon("textTranslateFillSmall", iconDefinition);
export {
  textTranslateFillSmallIcon,
  iconDefinition
};
