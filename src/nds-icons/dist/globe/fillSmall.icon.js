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

// src/nds-icons/src/globe/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.768 4.96A6 6 0 0 0 1.97 7.5h3.703c.013-.54.047-1.064.101-1.56-1.17-.192-2.204-.532-3.006-.98M1.97 8.5c.076.92.357 1.783.798 2.54.801-.448 1.836-.789 3.006-.98a19 19 0 0 1-.101-1.56zm1.375 3.365a6.04 6.04 0 0 0 3.636 2.1 2 2 0 0 1-.1-.13c-.264-.367-.482-.865-.656-1.436a11 11 0 0 1-.313-1.349c-1.018.17-1.898.457-2.567.814m5.675 2.1a6.04 6.04 0 0 0 3.635-2.1c-.67-.357-1.55-.644-2.567-.814-.085.493-.19.946-.313 1.35-.174.57-.392 1.068-.656 1.435a2 2 0 0 1-.1.13m4.213-2.925c.44-.757.722-1.62.798-2.54h-3.703c-.013.54-.047 1.063-.101 1.56 1.17.192 2.204.532 3.005.98m.799-3.54a6 6 0 0 0-.799-2.54c-.8.448-1.836.788-3.005.98.053.496.088 1.02.101 1.56zm-1.375-3.365a6.04 6.04 0 0 0-3.636-2.1q.054.064.1.13c.264.366.482.865.656 1.435.122.404.228.857.313 1.349 1.018-.17 1.898-.456 2.567-.814m-5.675-2.1a2 2 0 0 0-.1.13c-.263.366-.48.865-.655 1.435-.123.404-.228.857-.313 1.35-1.018-.17-1.898-.457-2.567-.815a6.04 6.04 0 0 1 3.636-2.1m-.075 3.037c.077-.435.17-.832.276-1.18.158-.518.336-.9.51-1.143.183-.254.294-.265.308-.265s.125.011.308.265c.174.242.352.625.51 1.143.106.348.2.745.276 1.18a13 13 0 0 1-2.188 0m2.328.992c.048.453.08.935.093 1.436H6.673c.013-.501.045-.983.093-1.436a14 14 0 0 0 2.468 0M6.766 9.936q-.073-.683-.093-1.436h2.654a18 18 0 0 1-.093 1.436 14.3 14.3 0 0 0-2.468 0m.139.992c.077.435.17.832.277 1.18.158.518.336.9.51 1.143.183.253.294.264.308.264s.125-.01.308-.264c.174-.243.352-.625.51-1.143.106-.348.2-.745.276-1.18a13 13 0 0 0-2.189 0"
  }, undefined, false, undefined, this)
};
var globeFillSmallIcon = createIcon("globeFillSmall", iconDefinition);
export {
  iconDefinition,
  globeFillSmallIcon
};
