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

// src/nds-icons/src/thermometer/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 6.46a.44.44 0 0 1 .44.44v2.931a1.32 1.32 0 1 1-.88 0v-2.93A.44.44 0 0 1 8 6.46"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 1.925a2.32 2.32 0 0 1 2.32 2.32v4.629a3.2 3.2 0 0 1 .88 2.201 3.2 3.2 0 0 1-6.4 0c0-.853.336-1.626.88-2.2v-4.63A2.32 2.32 0 0 1 8 1.925m0 1.1c-.673 0-1.22.547-1.22 1.22v5.068l-.302.319a2.1 2.1 0 0 0-.568 1.236l-.01.207a2.1 2.1 0 0 0 4.189.215l.012-.215a2.1 2.1 0 0 0-.58-1.444l-.301-.319V4.246a1.22 1.22 0 0 0-1.095-1.214zm4.716 4.445a.44.44 0 0 1 0 .861l-.089.01h-.952a.441.441 0 0 1 0-.881h.952zm0-1.6a.44.44 0 0 1 0 .86l-.089.01h-.952a.44.44 0 0 1 0-.88h.952zm0-1.6a.44.44 0 0 1 0 .86l-.089.01h-.952a.441.441 0 0 1 0-.88h.952z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var thermometerSmallIcon = createIcon("thermometerSmall", iconDefinition);
export {
  thermometerSmallIcon,
  iconDefinition
};
