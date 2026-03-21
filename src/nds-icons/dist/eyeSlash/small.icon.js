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

// src/nds-icons/src/eyeSlash/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.975 2.343a.625.625 0 0 0-.95.814l.956 1.115C2.635 5.002 1.538 6.09.848 7.405a1.29 1.29 0 0 0 0 1.198c1.295 2.468 4.027 4.14 7.152 4.14.995 0 1.95-.17 2.83-.48l1.195 1.394a.625.625 0 0 0 .958-.804L4.209 2.617l-.006-.007zm-2.02 5.643c.608-1.16 1.613-2.124 2.862-2.74l1 1.167a2.7 2.7 0 0 0 3.42 3.99l.71.828A7.3 7.3 0 0 1 8 11.492c-2.684 0-4.976-1.434-6.045-3.47a.04.04 0 0 1 0-.036m5.899.804a.8.8 0 0 1-.654-.763zM8 3.265q-.872.002-1.694.167a.075.075 0 0 0-.042.123l.84.98q.027.031.066.026.408-.046.83-.046c2.684 0 4.977 1.434 6.045 3.47a.04.04 0 0 1 0 .037 6.3 6.3 0 0 1-1.956 2.202.075.075 0 0 0-.014.11l.719.839c.025.03.07.035.1.012a7.5 7.5 0 0 0 2.258-2.582 1.29 1.29 0 0 0 0-1.198C13.857 4.936 11.125 3.265 8 3.265"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m8 5.3-.077.002a.075.075 0 0 0-.055.124l2.657 3.1a.075.075 0 0 0 .13-.035q.045-.238.045-.49a2.7 2.7 0 0 0-2.7-2.7"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var eyeSlashSmallIcon = createIcon("eyeSlashSmall", iconDefinition);
export {
  iconDefinition,
  eyeSlashSmallIcon
};
