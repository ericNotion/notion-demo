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

// src/nds-icons/src/rectangleOnRectangleTilt/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10858_21647)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M1.035 5.266a1.7 1.7 0 0 1 1.46-1.91l7.93-1.057a1.7 1.7 0 0 1 1.91 1.46l.21 1.581h.883a1.7 1.7 0 0 1 1.7 1.7v5.2a1.7 1.7 0 0 1-1.7 1.7h-8a1.7 1.7 0 0 1-1.7-1.7v-.372l-.096.013a1.7 1.7 0 0 1-1.91-1.46zm2.693 5.593V7.04a1.7 1.7 0 0 1 1.7-1.7h6.109l-.193-1.448a.7.7 0 0 0-.787-.601l-7.93 1.057a.7.7 0 0 0-.6.786l.686 5.154a.7.7 0 0 0 .787.602zm1-3.819v5.2a.7.7 0 0 0 .7.7h8a.7.7 0 0 0 .7-.7v-5.2a.7.7 0 0 0-.7-.7h-8a.7.7 0 0 0-.7.7"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10858_21647",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var rectangleOnRectangleTiltSmallIcon = createIcon("rectangleOnRectangleTiltSmall", iconDefinition);
export {
  rectangleOnRectangleTiltSmallIcon,
  iconDefinition
};
