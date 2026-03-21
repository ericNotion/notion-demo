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

// src/nds-icons/src/badgeCheck/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.137 5.666a.625.625 0 0 0-.857.214l-1.92 3.2-1.013-1.182a.625.625 0 0 0-.95.814l1.578 1.84a.625.625 0 0 0 1.01-.085l2.367-3.944a.625.625 0 0 0-.215-.857"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.405 1.284a.625.625 0 0 0-.81 0L5.838 2.781l-2.3.184a.625.625 0 0 0-.573.573l-.184 2.3-1.497 1.757a.624.624 0 0 0 0 .81l1.497 1.757.184 2.3a.625.625 0 0 0 .573.573l2.3.184 1.757 1.497a.624.624 0 0 0 .81 0l1.757-1.497 2.3-.184a.625.625 0 0 0 .573-.573l.184-2.3 1.497-1.757a.624.624 0 0 0 0-.81l-1.497-1.757-.184-2.3a.625.625 0 0 0-.573-.573l-2.3-.184zm-1.91 2.58L8 2.58l1.505 1.283c.1.085.225.137.356.147l1.97.157.158 1.971c.01.131.062.256.147.356L13.42 8l-1.283 1.505a.63.63 0 0 0-.147.356l-.157 1.97-1.971.158a.63.63 0 0 0-.356.147L8 13.42l-1.505-1.283a.63.63 0 0 0-.356-.147l-1.97-.157L4.01 9.86a.63.63 0 0 0-.147-.356L2.58 8l1.283-1.505a.63.63 0 0 0 .147-.356l.157-1.97L6.14 4.01a.63.63 0 0 0 .356-.147"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var badgeCheckSmallIcon = createIcon("badgeCheckSmall", iconDefinition);
export {
  iconDefinition,
  badgeCheckSmallIcon
};
