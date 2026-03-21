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

// src/nds-icons/src/whaleTail/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.052 4.126a.63.63 0 0 1 .56-.178l3.105.564A6.63 6.63 0 0 1 9.923 7.18l.077.107.077-.107a6.63 6.63 0 0 1 4.206-2.668l3.105-.564a.625.625 0 0 1 .724.742l-.625 2.998a5.64 5.64 0 0 1-4.028 4.288c-.566.155-.959.67-.959 1.257v3.33c0 .345-.28.625-.625.625h-3.75a.625.625 0 0 1-.625-.625v-3.33c0-.587-.392-1.101-.959-1.257a5.64 5.64 0 0 1-4.028-4.288L1.888 4.69a.63.63 0 0 1 .164-.564m1.25 1.217.435 2.09a4.39 4.39 0 0 0 3.135 3.338 2.55 2.55 0 0 1 1.878 2.462v2.704h2.5v-2.704c0-1.15.769-2.158 1.878-2.462a4.39 4.39 0 0 0 3.136-3.337l.435-2.09-2.193.398a5.38 5.38 0 0 0-3.412 2.164l-.585.82a.625.625 0 0 1-1.018 0l-.585-.82a5.38 5.38 0 0 0-3.412-2.164z"
  }, undefined, false, undefined, this)
};
var whaleTailIcon = createIcon("whaleTail", iconDefinition);
export {
  whaleTailIcon,
  iconDefinition
};
