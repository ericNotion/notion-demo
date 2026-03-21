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

// src/nds-icons/src/textXYunderline/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.929 4.265a.875.875 0 0 0-1.457.97l2.762 4.143v3.147a.875.875 0 0 0 1.75 0v-3.24l2.7-4.05a.875.875 0 1 0-1.456-.97l-2.15 3.224zm-7.549.03a.875.875 0 1 0-1.422 1.02l2.4 3.35-2.4 3.35a.875.875 0 0 0 1.422 1.02l2.054-2.868 2.054 2.867a.875.875 0 1 0 1.423-1.019l-2.4-3.35 2.4-3.35a.875.875 0 1 0-1.423-1.02L6.434 7.162zm-2.13 10.08a.875.875 0 1 0 0 1.75h.005a.875.875 0 0 0 0-1.75zm1.933 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 0 0 0-1.75zm1.937 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 0 0 0-1.75zm1.938 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 0 0 0-1.75zm1.937 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 1 0 0-1.75zm1.938 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 1 0 0-1.75zm1.937 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 1 0 0-1.75zm1.938 0a.875.875 0 1 0 0 1.75h.01a.875.875 0 1 0 0-1.75zm1.937 0a.875.875 0 1 0 0 1.75h.005a.875.875 0 0 0 0-1.75z"
  }, undefined, false, undefined, this)
};
var textXYunderlineFillIcon = createIcon("textXYunderlineFill", iconDefinition);
export {
  textXYunderlineFillIcon,
  iconDefinition
};
