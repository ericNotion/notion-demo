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

// src/nds-icons/src/hourglass/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.346 2.125c-.782 0-1.416.634-1.416 1.417 0 1.122.412 2.206 1.158 3.045L6.343 8 5.088 9.413a4.58 4.58 0 0 0-1.158 3.045c0 .783.634 1.417 1.416 1.417h5.308c.782 0 1.416-.634 1.416-1.417a4.58 4.58 0 0 0-1.158-3.045L9.657 8l1.255-1.413a4.58 4.58 0 0 0 1.158-3.045c0-.783-.634-1.417-1.416-1.417zM5.18 3.542c0-.092.074-.167.166-.167h5.308c.092 0 .166.075.166.167 0 .816-.3 1.604-.842 2.215L8.353 7.585a.625.625 0 0 0 0 .83l1.625 1.828c.408.46.679 1.019.788 1.616l-1.854-1.623a1.385 1.385 0 0 0-1.824 0L5.234 11.86c.11-.597.38-1.157.788-1.616l1.625-1.828a.625.625 0 0 0 0-.83L6.022 5.757a3.33 3.33 0 0 1-.842-2.215"
  }, undefined, false, undefined, this)
};
var hourglassSmallIcon = createIcon("hourglassSmall", iconDefinition);
export {
  iconDefinition,
  hourglassSmallIcon
};
