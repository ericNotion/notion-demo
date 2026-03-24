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
// src/noticons/src/gears/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: /* @__PURE__ */ jsxDEV3("path", {
      d: "M17.4656 5.76249L18.6094 4.91561L18.1312 3.75936L16.7218 3.96874C16.5187 3.70624 16.2875 3.47499 16.0312 3.27811L16.2406 1.87186L15.0844 1.39374L14.2375 2.53749C13.9156 2.49374 13.5875 2.49374 13.2593 2.53749L12.4125 1.39374L11.2562 1.87186L11.4656 3.28124C11.2031 3.48124 10.9719 3.71561 10.775 3.97186L9.36873 3.76249L8.8906 4.91874L10.0344 5.76561C9.9906 6.08749 9.9906 6.41561 10.0344 6.74374L8.8906 7.59061L9.36873 8.74686L10.7781 8.53749C10.9781 8.79999 11.2125 9.03124 11.4687 9.22811L11.2593 10.6344L12.4156 11.1125L13.2625 9.96874C13.5843 10.0125 13.9125 10.0125 14.2406 9.96874L15.0875 11.1125L16.2437 10.6344L16.0344 9.22499C16.2969 9.02499 16.5281 8.79061 16.725 8.53436L18.1312 8.74374L18.6094 7.58749L17.4656 6.74061C17.5093 6.41874 17.5093 6.09061 17.4656 5.76249ZM13.75 8.12499C12.7156 8.12499 11.875 7.28436 11.875 6.24999C11.875 5.21561 12.7156 4.37499 13.75 4.37499C14.7844 4.37499 15.625 5.21561 15.625 6.24999C15.625 7.28436 14.7844 8.12499 13.75 8.12499ZM9.49373 11.8781L10.225 10.6562L9.3406 9.77186L8.11873 10.5031C7.83748 10.3406 7.53435 10.2156 7.2156 10.1312L6.86873 8.74999H5.61873L5.27185 10.1312C4.9531 10.2156 4.64998 10.3437 4.36873 10.5031L3.14685 9.77186L2.26248 10.6562L2.99373 11.8781C2.83123 12.1594 2.70623 12.4625 2.62185 12.7812L1.2406 13.1281V14.3781L2.62185 14.725C2.70623 15.0437 2.83435 15.3469 2.99373 15.6281L2.26248 16.85L3.14685 17.7344L4.36873 17.0031C4.64998 17.1656 4.9531 17.2906 5.27185 17.375L5.61873 18.7562H6.86873L7.2156 17.375C7.53435 17.2906 7.83748 17.1625 8.11873 17.0031L9.3406 17.7344L10.225 16.85L9.49373 15.6281C9.65623 15.3469 9.78123 15.0437 9.8656 14.725L11.2469 14.3781V13.1281L9.8656 12.7812C9.78123 12.4625 9.6531 12.1594 9.49373 11.8781ZM6.24998 15.625C5.2156 15.625 4.37498 14.7844 4.37498 13.75C4.37498 12.7156 5.2156 11.875 6.24998 11.875C7.28435 11.875 8.12498 12.7156 8.12498 13.75C8.12498 14.7844 7.28435 15.625 6.24998 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gearsIcon = createIcon("gears", iconDefinition);
export {
  iconDefinition,
  gearsIcon
};
