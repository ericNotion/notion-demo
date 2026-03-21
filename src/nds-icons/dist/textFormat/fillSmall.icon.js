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

// src/nds-icons/src/textFormat/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    fillRule: "evenodd",
    d: "m6.86 10.13.84 2.27a.75.75 0 0 0 1.406-.52l-2.99-8.09a1.04 1.04 0 0 0-1.952 0l-2.99 8.09a.75.75 0 1 0 1.407.52l.84-2.27zm-.554-1.5L5.14 5.476 3.974 8.63zm7.816-1.905a.75.75 0 0 1 .75.75v4.665a.75.75 0 0 1-1.44.296 2.9 2.9 0 0 1-1.578.454 2.83 2.83 0 0 1-2.062-.86c-.54-.564-.839-1.347-.839-2.247 0-.902.3-1.677.847-2.23.544-.55 1.28-.828 2.054-.828.567 0 1.115.149 1.584.443a.75.75 0 0 1 .684-.443m-3.669 3.058c0-.562.181-.94.414-1.176.234-.237.573-.382.987-.382s.76.146 1.001.386c.237.236.42.614.42 1.172 0 1.071-.668 1.607-1.42 1.607-.402 0-.74-.148-.98-.399-.24-.25-.422-.645-.422-1.208",
    clipRule: "evenodd"
  }, undefined, false, undefined, this)
};
var textFormatFillSmallIcon = createIcon("textFormatFillSmall", iconDefinition);
export {
  textFormatFillSmallIcon,
  iconDefinition
};
