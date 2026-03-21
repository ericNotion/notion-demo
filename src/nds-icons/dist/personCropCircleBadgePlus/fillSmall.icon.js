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

// src/nds-icons/src/personCropCircleBadgePlus/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1.95 8a6.05 6.05 0 1 1 5.144 5.983c.16-.43.249-.897.249-1.383 0-.888-.294-1.707-.789-2.366A3.8 3.8 0 0 1 8 9.954c1.373 0 2.586.717 3.227 1.8a4.95 4.95 0 1 0-8.132-3.085q-.567.045-1.078.237A6 6 0 0 1 1.95 8"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.4 12.6a3.001 3.001 0 1 1-6-.002 3.001 3.001 0 0 1 6 .002m-5.167 0a.5.5 0 0 0 .5.5H2.9v1.166a.5.5 0 1 0 1 0V13.1h1.166a.5.5 0 1 0 0-1H3.9v-1.167a.5.5 0 0 0-1 0V12.1H1.733a.5.5 0 0 0-.5.5M8 4.11c-.764 0-1.388.318-1.81.843-.41.511-.602 1.185-.602 1.88s.192 1.369.602 1.88c.422.525 1.046.842 1.81.842.765 0 1.389-.317 1.81-.842.41-.511.602-1.185.602-1.88s-.191-1.369-.602-1.88C9.389 4.428 8.765 4.11 8 4.11"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var personCropCircleBadgePlusFillSmallIcon = createIcon("personCropCircleBadgePlusFillSmall", iconDefinition);
export {
  personCropCircleBadgePlusFillSmallIcon,
  iconDefinition
};
