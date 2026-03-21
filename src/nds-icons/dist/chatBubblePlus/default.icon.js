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

// src/nds-icons/src/chatBubblePlus/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  fittedViewBox: "1.81 2.89 16.38 15.08",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M16.938 9.853c0-2.97-2.539-5.54-6.545-5.697L10 4.148c-4.232 0-6.938 2.638-6.938 5.705 0 1.438.583 2.752 1.617 3.759a.63.63 0 0 1 .18.547 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.008c4.006-.158 6.545-2.727 6.545-5.698m1.25 0c0 3.803-3.234 6.766-7.747 6.947l-.44.01c-.88 0-1.712-.107-2.485-.3-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.818 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.734-1.756-4.41 0-3.926 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10 6.375c.346 0 .626.28.626.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.346.28-.625.626-.625"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var chatBubblePlusIcon = createIcon("chatBubblePlus", iconDefinition);
export {
  iconDefinition,
  chatBubblePlusIcon
};
