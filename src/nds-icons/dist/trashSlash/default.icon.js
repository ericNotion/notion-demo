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

// src/nds-icons/src/trashSlash/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m4.897 3.085-.122-.142a.625.625 0 0 0-.95.814l1.4 1.632H3.523a.625.625 0 1 0 0 1.25h.897l.393 8.646A2.425 2.425 0 0 0 7.236 17.6h5.528c.834 0 1.574-.423 2.01-1.07l.452.527a.625.625 0 0 0 1.04-.67L4.99 3.228a.6.6 0 0 1-.093-.144m.775 3.554h.624L7.738 8.32a.6.6 0 0 0-.032.184v5.979a.55.55 0 0 0 1.1 0V9.567l2.388 2.786v2.131a.55.55 0 0 0 1.1 0v-.848l1.598 1.866a1.175 1.175 0 0 1-1.128.848H7.236a1.175 1.175 0 0 1-1.174-1.122zm9.604 6.672.303-6.67h.898a.625.625 0 1 0 0-1.25h-2.863V3.924c0-.842-.683-1.525-1.525-1.525H7.91c-.567 0-1.062.31-1.325.77l1.05 1.226v-.471c0-.152.124-.275.276-.275h4.178c.152 0 .275.123.275.275v1.464H8.487L9.56 6.64h4.769l-.24 5.284z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.294 9.83V8.505a.55.55 0 0 0-1.1 0v.042z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var trashSlashIcon = createIcon("trashSlash", iconDefinition);
export {
  trashSlashIcon,
  iconDefinition
};
