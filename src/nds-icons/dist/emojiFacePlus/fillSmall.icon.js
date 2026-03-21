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

// src/nds-icons/src/emojiFacePlus/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1.95 8a6.05 6.05 0 1 1 12.033.906 3.9 3.9 0 0 0-1.383-.249c-.822 0-1.585.252-2.217.682a.498.498 0 0 0-.811.026 1.9 1.9 0 0 1-1.568.835 1.88 1.88 0 0 1-1.568-.835.5.5 0 0 0-.83.558 2.884 2.884 0 0 0 3.376 1.106 3.9 3.9 0 0 0-.325 1.571c0 .486.088.952.25 1.383A6.05 6.05 0 0 1 1.95 8m3.942-.268c.392 0 .704-.368.704-.816S6.284 6.1 5.892 6.1s-.704.368-.704.816.312.816.704.816m4.92-.816c0-.448-.312-.816-.704-.816s-.704.368-.704.816.312.816.704.816.704-.368.704-.816"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.6 15.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6m1.667-3.5H13.1v-1.167a.5.5 0 0 0-1 0V12.1h-1.166a.5.5 0 1 0 0 1H12.1v1.166a.5.5 0 1 0 1 0V13.1h1.167a.5.5 0 1 0 0-1"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var emojiFacePlusFillSmallIcon = createIcon("emojiFacePlusFillSmall", iconDefinition);
export {
  iconDefinition,
  emojiFacePlusFillSmallIcon
};
