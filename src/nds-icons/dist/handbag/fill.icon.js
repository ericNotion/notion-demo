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

// src/nds-icons/src/handbag/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m5.824 7.516.484-2.9a3.325 3.325 0 0 1 3.28-2.779h.825a3.325 3.325 0 0 1 3.28 2.779l.483 2.9q.53.06 1.058.137c.402.058.766.23 1.058.483l-.5.761c-2.857 3.687-8.748 3.681-11.596-.016l-.01-.011-.546-.672a2.06 2.06 0 0 1 1.126-.545q.528-.077 1.058-.137M7.541 4.82l-.429 2.57a37 37 0 0 1 5.776 0l-.428-2.57a2.075 2.075 0 0 0-2.047-1.734h-.826c-1.014 0-1.88.734-2.046 1.734"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m16.7 9.519.234-.358q.039.144.057.294l.591 4.989a2.425 2.425 0 0 1-2.408 2.71H4.826a2.425 2.425 0 0 1-2.408-2.71l.591-4.989q.015-.12.042-.238l.278.341c1.45 1.878 3.57 2.93 5.771 3.154v1.455c0 .248.202.45.45.45h.9a.45.45 0 0 0 .45-.45v-1.455c2.203-.225 4.326-1.278 5.776-3.16z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var handbagFillIcon = createIcon("handbagFill", iconDefinition);
export {
  iconDefinition,
  handbagFillIcon
};
