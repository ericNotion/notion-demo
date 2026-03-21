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

// src/nds-icons/src/aiDescription/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10430_11057)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M14.816 3.607a3.096 3.096 0 0 0-4.246 1.065l-4.194 7.003a.744.744 0 0 0 .519 1.117l3.644.59a.744.744 0 1 0 .238-1.468l-2.561-.415 3.63-6.062a1.608 1.608 0 0 1 2.767.013.744.744 0 1 0 1.285-.75 3.1 3.1 0 0 0-1.082-1.093"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M12.372 8.066a.926.926 0 1 0 .297-1.827.926.926 0 0 0-.297 1.827M6.189 3.148a3.097 3.097 0 0 1 4.403.281.744.744 0 0 1-1.124.975 1.61 1.61 0 0 0-2.287-.146.744.744 0 1 1-.992-1.11m1.747 4.199a.926.926 0 1 0 .296-1.828.926.926 0 0 0-.296 1.828M.744 8.578H6.93l-.891 1.488H.744a.744.744 0 1 1 0-1.488m0-2.646H6.13a2 2 0 0 0 .195 1.488H.744a.744.744 0 1 1 0-1.488m4.608 5.291H.744a.744.744 0 1 0 0 1.488h4.529a1.86 1.86 0 0 1 .079-1.488m-.187-6.448a1.86 1.86 0 0 1-.293-1.488H.744a.744.744 0 0 0 0 1.488z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10430_11057",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiDescriptionFillSmallIcon = createIcon("aiDescriptionFillSmall", iconDefinition);
export {
  iconDefinition,
  aiDescriptionFillSmallIcon
};
