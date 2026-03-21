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

// src/nds-icons/src/scroll/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m9.892 12.709 5.058-.027V4.825A2.03 2.03 0 0 0 12.925 2.8H3.736c-.072 0-.09.1-.027.117A2.02 2.02 0 0 1 5.05 4.825v10.35c0 1.116.91 2.025 2.025 2.025h.171c.477-.171.954-.657.954-1.359V14.5a1.79 1.79 0 0 1 1.63-1.782h.062zm-1.917-7.55h4.05a.56.56 0 0 1 .558.557.56.56 0 0 1-.558.558h-4.05a.555.555 0 0 1-.558-.558.56.56 0 0 1 .558-.558m0 3.266a.555.555 0 0 1-.558-.558.56.56 0 0 1 .558-.558h4.05a.56.56 0 0 1 .558.558.56.56 0 0 1-.558.558zM3.025 4.15a.68.68 0 0 0-.675.675v2.25c0 .126.1.225.225.225h.9a.223.223 0 0 0 .225-.225v-2.25a.68.68 0 0 0-.675-.675"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m9.955 14.059 7.245-.027c.243 0 .45.198.45.45v.918c0 .99-.81 1.8-1.8 1.8H8.893c-.036 0-.045-.054-.009-.063.387-.144.666-.513.666-.954V14.5c0-.234.18-.423.405-.441"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var scrollFillIcon = createIcon("scrollFill", iconDefinition);
export {
  scrollFillIcon,
  iconDefinition
};
