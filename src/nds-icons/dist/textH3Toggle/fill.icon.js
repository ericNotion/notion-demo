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

// src/nds-icons/src/textH3Toggle/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9672_13875)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M6.508 4.525c.483 0 .875.392.875.875v3.525h5.05V5.4a.875.875 0 1 1 1.75 0v9.2a.875.875 0 1 1-1.75 0v-3.925h-5.05V14.6a.875.875 0 1 1-1.75 0V5.4c0-.483.392-.875.875-.875m10.776 4.913c-.587 0-.966.288-1.075.518a.75.75 0 1 1-1.354-.648c.419-.874 1.416-1.37 2.429-1.37.666 0 1.297.206 1.778.573.482.368.844.93.844 1.609 0 .561-.247 1.042-.605 1.4.436.38.749.92.749 1.56 0 .708-.383 1.292-.89 1.674-.506.382-1.172.596-1.876.596-1.06 0-2.088-.494-2.545-1.371a.75.75 0 1 1 1.33-.693c.135.258.562.564 1.215.564.408 0 .75-.126.974-.294s.292-.344.292-.476-.07-.308-.292-.476c-.224-.168-.566-.294-.974-.294h-.424a.75.75 0 1 1 0-1.5h.314a1 1 0 0 1 .11-.008c.366 0 .67-.114.868-.265.196-.15.254-.304.254-.417s-.058-.267-.254-.417a1.44 1.44 0 0 0-.868-.265M.789 11.14c0 .59.642.953 1.147.65l1.9-1.14a.758.758 0 0 0 0-1.3l-1.9-1.14a.758.758 0 0 0-1.147.65z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9672_13875",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textH3ToggleFillIcon = createIcon("textH3ToggleFill", iconDefinition);
export {
  textH3ToggleFillIcon,
  iconDefinition
};
