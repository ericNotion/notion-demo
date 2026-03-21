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

// src/nds-icons/src/mediaRewind/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.24 14.444c.67.67 1.004 1.004 1.287 1.046a.87.87 0 0 0 .829-.343c.17-.23.17-.703.17-1.65V6.503c0-.947 0-1.42-.17-1.65a.87.87 0 0 0-.829-.343c-.283.042-.617.377-1.286 1.046L5.743 9.053c-.31.31-.464.465-.53.64a.87.87 0 0 0 0 .614c.066.175.22.33.53.64z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.14 5.722c0-.378 0-.566-.066-.714a.75.75 0 0 0-.375-.375c-.147-.066-.336-.066-.714-.066h-.732c-.378 0-.567 0-.714.066a.75.75 0 0 0-.375.375c-.066.148-.066.336-.066.714v8.556c0 .378 0 .566.066.714a.75.75 0 0 0 .375.375c.147.066.336.066.714.066h.732c.378 0 .567 0 .714-.066a.75.75 0 0 0 .375-.375c.066-.148.066-.336.066-.714zm11.764 9.768c-.283-.042-.617-.377-1.286-1.046l-3.498-3.497c-.31-.31-.464-.465-.53-.64a.87.87 0 0 1 0-.614c.066-.175.22-.33.53-.64l3.498-3.497c.669-.67 1.003-1.004 1.286-1.046a.87.87 0 0 1 .829.343c.17.23.17.703.17 1.65v6.994c0 .947 0 1.42-.17 1.65a.87.87 0 0 1-.829.343"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var mediaRewindFillIcon = createIcon("mediaRewindFill", iconDefinition);
export {
  mediaRewindFillIcon,
  iconDefinition
};
