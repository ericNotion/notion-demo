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

// src/nds-icons/src/questionDiamond/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.834 13.113a.675.675 0 1 1 0 1.35.675.675 0 0 1 0-1.35m.142-6.874c1.408 0 2.792.934 2.792 2.361 0 .84-.509 1.527-1.176 1.933l-.77.524.002.001a.9.9 0 0 0-.406.723.625.625 0 0 1-1.25 0c0-.706.368-1.352.945-1.751l.003-.002.799-.546.027-.018c.394-.24.576-.566.576-.864 0-.493-.552-1.111-1.542-1.111-.84 0-1.401.477-1.513.925A.625.625 0 0 1 7.25 8.11c.287-1.15 1.478-1.872 2.726-1.872"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.498 2.221c.83-.83 2.175-.83 3.005 0l6.275 6.277c.83.83.83 2.175 0 3.005l-6.275 6.275c-.83.83-2.175.83-3.005 0L2.22 11.503a2.125 2.125 0 0 1 0-3.005zm2.12.885a.875.875 0 0 0-1.237 0L3.106 9.381a.875.875 0 0 0 0 1.238l6.275 6.275a.875.875 0 0 0 1.238 0l6.275-6.275a.875.875 0 0 0 0-1.238z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var questionDiamondIcon = createIcon("questionDiamond", iconDefinition);
export {
  questionDiamondIcon,
  iconDefinition
};
