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

// src/nds-icons/src/checkmarkShield/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.876 7.978a.625.625 0 1 0-1.072-.643L9.25 11.59 7.815 9.916a.625.625 0 0 0-.95.814l2 2.333a.625.625 0 0 0 1.01-.085z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.28 2.241a.63.63 0 0 0-.56 0l-1.89.945a7.5 7.5 0 0 1-3.342.789H3.7a.625.625 0 0 0-.625.625v6.933a5.13 5.13 0 0 0 3.106 4.71l3.573 1.532a.63.63 0 0 0 .492 0l3.573-1.532a5.13 5.13 0 0 0 3.106-4.71V4.6a.625.625 0 0 0-.625-.625h-.788c-1.16 0-2.305-.27-3.343-.79zM8.39 4.304 10 3.499l1.61.805a8.7 8.7 0 0 0 3.902.921h.163v6.308c0 1.55-.924 2.95-2.349 3.562L10 16.52l-3.326-1.425a3.88 3.88 0 0 1-2.349-3.562V5.225h.163c1.354 0 2.69-.315 3.902-.921"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var checkmarkShieldIcon = createIcon("checkmarkShield", iconDefinition);
export {
  iconDefinition,
  checkmarkShieldIcon
};
