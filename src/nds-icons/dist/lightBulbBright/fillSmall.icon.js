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

// src/nds-icons/src/lightBulbBright/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.042 5.36c0-2.166 1.779-3.908 3.957-3.91h.004c2.178.001 3.958 1.743 3.958 3.91 0 .763-.184 1.49-.55 2.11q-.154.26-.3.496c-.18.289-.348.56-.498.856-.222.436-.355.837-.354 1.24a.55.55 0 0 1-.55.55H8.5V8.919a1.5 1.5 0 0 1 .214-.772l.806-1.343a.5.5 0 1 0-.858-.515L8 7.392l-.662-1.104a.5.5 0 0 0-.858.515l.806 1.343c.14.233.214.5.214.772v1.695H6.294a.55.55 0 0 1-.55-.551c0-.403-.132-.804-.354-1.24-.15-.295-.318-.567-.498-.856-.097-.158-.198-.32-.301-.495a4.15 4.15 0 0 1-.55-2.112M6.65 14a.55.55 0 0 1 .55-.55h1.6a.55.55 0 1 1 0 1.1H7.2a.55.55 0 0 1-.55-.55m-.25-2.35a.55.55 0 0 0 0 1.1h3.2a.55.55 0 1 0 0-1.1z"
  }, undefined, false, undefined, this)
};
var lightBulbBrightFillSmallIcon = createIcon("lightBulbBrightFillSmall", iconDefinition);
export {
  lightBulbBrightFillSmallIcon,
  iconDefinition
};
