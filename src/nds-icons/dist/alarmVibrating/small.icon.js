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

// src/nds-icons/src/alarmVibrating/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_8917_9825)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M5.582 2.3a.57.57 0 0 0-.803-.07l-1.181.991a.57.57 0 1 0 .732.874l1.182-.991a.57.57 0 0 0 .07-.803m5.639-.071a.57.57 0 1 0-.733.874l1.182.99a.57.57 0 0 0 .733-.873zM8 4.777a.57.57 0 0 0-.57.57v2.079H5.772a.57.57 0 0 0 0 1.14H8a.57.57 0 0 0 .57-.57V5.347a.57.57 0 0 0-.57-.57"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M8 3.088a4.908 4.908 0 0 0 0 9.815 4.908 4.908 0 0 0 0-9.815M4.232 7.996a3.769 3.769 0 0 1 7.536 0 3.769 3.769 0 0 1-7.536 0M1.737 3.958a.57.57 0 0 0-.772.23A8 8 0 0 0 0 7.996c0 1.372.333 2.63.932 3.75a.57.57 0 0 0 1.005-.538 6.7 6.7 0 0 1-.797-3.212c0-1.18.3-2.292.827-3.266a.57.57 0 0 0-.23-.772m13.298.23a.57.57 0 1 0-1.002.542 6.84 6.84 0 0 1 .827 3.266 6.7 6.7 0 0 1-.797 3.212.57.57 0 0 0 1.005.537A7.9 7.9 0 0 0 16 7.995a8 8 0 0 0-.965-3.807"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M3.102 4.696a.57.57 0 0 0-.773.229 6.44 6.44 0 0 0-.034 6.09.57.57 0 0 0 1.006-.536 5.3 5.3 0 0 1 .03-5.01.57.57 0 0 0-.23-.773m10.57.229a.57.57 0 0 0-1.002.543 5.3 5.3 0 0 1 .03 5.01.57.57 0 1 0 1.006.538 6.44 6.44 0 0 0-.034-6.091"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_8917_9825",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var alarmVibratingSmallIcon = createIcon("alarmVibratingSmall", iconDefinition);
export {
  iconDefinition,
  alarmVibratingSmallIcon
};
