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

// src/nds-icons/src/zipFile/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.063 1.765a.981.981 0 0 1 1.874 0l.003.01H11c1.008 0 1.825.817 1.825 1.825v8.8A1.825 1.825 0 0 1 11 14.225H5A1.825 1.825 0 0 1 3.175 12.4V3.6c0-1.008.817-1.825 1.825-1.825h2.06zm-.391 1.26H5a.575.575 0 0 0-.575.575v8.8c0 .317.257.575.575.575h2.5V11.7H6.45a.5.5 0 0 1 0-1H7.5v-.6H6.45a.5.5 0 0 1 0-1H7.5v-.6H6.45a.5.5 0 0 1 0-1H7.5v-.768a1.844 1.844 0 0 1-1.259-2.32zM8.5 9.9h1.05a.5.5 0 0 1 0 1H8.5v.6h1.05a.5.5 0 0 1 0 1H8.5v.475H11a.575.575 0 0 0 .575-.575V3.6A.575.575 0 0 0 11 3.025H9.328l.431 1.386A1.844 1.844 0 0 1 8.5 6.732V8.3h1.05a.5.5 0 0 1 0 1H8.5zm.263-4.945a.763.763 0 1 0-1.526 0 .763.763 0 0 0 1.526 0"
  }, undefined, false, undefined, this)
};
var zipFileSmallIcon = createIcon("zipFileSmall", iconDefinition);
export {
  zipFileSmallIcon,
  iconDefinition
};
