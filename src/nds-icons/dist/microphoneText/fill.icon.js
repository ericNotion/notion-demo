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

// src/nds-icons/src/microphoneText/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M16.153 5.05a2.875 2.875 0 0 0-5.75 0v3.6a2.875 2.875 0 1 0 5.75 0z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.013 10.732a.625.625 0 0 1 .87.16 5.33 5.33 0 0 0 4.395 2.308 5.33 5.33 0 0 0 4.395-2.309.625.625 0 1 1 1.029.71 6.58 6.58 0 0 1-4.8 2.82v1.929h3.426a.625.625 0 0 1 0 1.25h-8.1a.625.625 0 1 1 0-1.25h3.425v-1.93a6.58 6.58 0 0 1-4.8-2.818.625.625 0 0 1 .16-.87m1.206-6.607H2.25a.625.625 0 1 0 0 1.25h6.969zm-6.969 7h4.24c.119.401.283.83.505 1.25H2.25a.625.625 0 1 1 0-1.25"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.25 14.625h6.269c-.5.272-.923.67-1.067 1.25H2.25a.625.625 0 1 1 0-1.25m0-7h6.969v1.25H2.25a.625.625 0 1 1 0-1.25"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var microphoneTextFillIcon = createIcon("microphoneTextFill", iconDefinition);
export {
  microphoneTextFillIcon,
  iconDefinition
};
