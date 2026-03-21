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

// src/nds-icons/src/phone/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.472 2.52a1.197 1.197 0 0 0-1.68-.141l-.696.583a3.23 3.23 0 0 0-1.128 2.894 9.376 9.376 0 0 0 8.336 8.114l.128.013a3.28 3.28 0 0 0 2.867-1.177l.447-.542a1.16 1.16 0 0 0-.143-1.618l-2.37-2.014a1.345 1.345 0 0 0-1.822.074l-.888.888-1.996-1.996.888-.888c.496-.496.527-1.29.073-1.823zM3.9 3.92l.656-.55 1.981 2.327a.095.095 0 0 1-.005.13l-1.33 1.33a.625.625 0 0 0 0 .883l2.88 2.88a.625.625 0 0 0 .884 0l1.33-1.33a.095.095 0 0 1 .129-.005l2.3 1.954-.39.473a2.03 2.03 0 0 1-1.774.728l-.128-.014a8.13 8.13 0 0 1-7.225-7.032c-.087-.67.174-1.34.692-1.774"
  }, undefined, false, undefined, this)
};
var phoneSmallIcon = createIcon("phoneSmall", iconDefinition);
export {
  phoneSmallIcon,
  iconDefinition
};
