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

// src/nds-icons/src/textH3Toggle/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9672_13873)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M4.956 3.695a.625.625 0 0 0-.625.625v7.36a.625.625 0 1 0 1.25 0V8.465h4.19v3.215a.625.625 0 1 0 1.25 0V4.32a.625.625 0 1 0-1.25 0v2.895h-4.19V4.32a.625.625 0 0 0-.625-.625m8.621 2.68c-.803 0-1.59.393-1.92 1.082a.575.575 0 1 0 1.037.497c.093-.195.407-.429.883-.429.298 0 .547.093.71.217.161.124.213.254.213.354s-.052.23-.213.353a1.18 1.18 0 0 1-.71.218l-.087.006h-.252a.575.575 0 1 0 0 1.15h.34c.331 0 .61.102.793.24s.244.285.244.401-.06.263-.244.4a1.32 1.32 0 0 1-.794.241c-.528 0-.88-.247-.994-.465a.575.575 0 0 0-1.02.531c.36.692 1.174 1.084 2.014 1.084.558 0 1.086-.17 1.486-.472.401-.302.702-.762.702-1.319 0-.514-.256-.946-.61-1.247.292-.284.495-.67.495-1.121 0-.534-.285-.977-.665-1.267s-.88-.454-1.408-.454m-10.79 1.16-1.52-.913a.543.543 0 0 0-.823.466v1.824c0 .422.46.683.822.466l1.52-.913a.543.543 0 0 0 0-.93"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9672_13873",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textH3ToggleSmallIcon = createIcon("textH3ToggleSmall", iconDefinition);
export {
  textH3ToggleSmallIcon,
  iconDefinition
};
