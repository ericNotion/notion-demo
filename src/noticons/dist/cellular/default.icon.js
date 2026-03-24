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

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/cellular/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M12.5 10C12.5 11.05 11.8531 11.9469 10.9375 12.3156V17.5H9.0625V12.3156C8.14687 11.9437 7.5 11.0469 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10ZM5.1375 5.1375L3.8125 3.8125C2.10312 5.52187 1.25 7.75937 1.25 10C1.25 12.2406 2.10312 14.4781 3.8125 16.1875L5.1375 14.8625C3.79375 13.5188 3.125 11.7594 3.125 10C3.125 8.24062 3.79688 6.48125 5.1375 5.1375ZM6.02188 6.02188C4.925 7.11875 4.375 8.55937 4.375 10C4.375 11.4406 4.925 12.8781 6.02188 13.9781L7.34688 12.6531C6.61562 11.9219 6.25 10.9625 6.25 10C6.25 9.0375 6.61562 8.08125 7.34688 7.34688L6.02188 6.02188ZM13.9781 6.02188L12.6531 7.34688C13.3844 8.07812 13.75 9.0375 13.75 10C13.75 10.9625 13.3844 11.9188 12.6531 12.6531L13.9781 13.9781C15.075 12.8812 15.625 11.4406 15.625 10C15.625 8.55937 15.075 7.12188 13.9781 6.02188ZM16.1875 3.8125L14.8625 5.1375C16.2063 6.48125 16.875 8.24062 16.875 10C16.875 11.7594 16.2031 13.5188 14.8625 14.8625L16.1875 16.1875C17.8969 14.4781 18.75 12.2406 18.75 10C18.75 7.75937 17.8969 5.52187 16.1875 3.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cellularIcon = createIcon("cellular", iconDefinition);
export {
  iconDefinition,
  cellularIcon
};
