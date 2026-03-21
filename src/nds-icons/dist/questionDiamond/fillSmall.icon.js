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

// src/nds-icons/src/questionDiamond/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.71 1.69a1.825 1.825 0 0 1 2.58 0l5.021 5.02a1.826 1.826 0 0 1 0 2.58l-5.02 5.021a1.826 1.826 0 0 1-2.581 0l-5.02-5.02a1.825 1.825 0 0 1 0-2.581zm1.157 8.665a.675.675 0 1 0 .001 1.351.675.675 0 0 0-.001-1.35m.114-5.489c-1.04 0-2.055.602-2.303 1.592a.626.626 0 0 0 1.213.303c.073-.287.459-.645 1.09-.645.75 0 1.108.463 1.109.764 0 .184-.113.41-.4.585l-.015.008-.013.01-.64.436-.003.002a1.84 1.84 0 0 0-.81 1.504.626.626 0 0 0 1.25 0 .59.59 0 0 1 .271-.476v-.001l.636-.434h-.001c.547-.344.975-.92.975-1.634 0-1.235-1.191-2.014-2.359-2.014"
  }, undefined, false, undefined, this)
};
var questionDiamondFillSmallIcon = createIcon("questionDiamondFillSmall", iconDefinition);
export {
  questionDiamondFillSmallIcon,
  iconDefinition
};
