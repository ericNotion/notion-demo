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

// src/nds-icons/src/handWave/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.893 2.188a1.574 1.574 0 0 0-2.557.207A1.574 1.574 0 0 0 3.22 4.177q-.241.092-.45.266a1.575 1.575 0 0 0-.234 2.165 1.574 1.574 0 0 0-.462 2.402l2.855 3.393a5.098 5.098 0 0 0 8.695-5.019l-1.391-3.843a1.602 1.602 0 0 0-3.062.164zm-1.413.766a.324.324 0 0 1 .457.04L9.88 6.491a.625.625 0 0 0 1.071-.599l-.56-1.696a.352.352 0 0 1 .665-.23l1.39 3.843a3.849 3.849 0 0 1-6.563 3.788L3.03 8.205a.324.324 0 1 1 .497-.417l1.285 1.527a.625.625 0 1 0 .956-.805L3.534 5.856a.324.324 0 1 1 .497-.417l1.759 2.09a.625.625 0 1 0 .956-.805L4.513 4.07a.324.324 0 0 1 .497-.417l2.233 2.653a.625.625 0 1 0 .956-.805L6.44 3.411a.324.324 0 0 1 .04-.457"
  }, undefined, false, undefined, this)
};
var handWaveSmallIcon = createIcon("handWaveSmall", iconDefinition);
export {
  iconDefinition,
  handWaveSmallIcon
};
