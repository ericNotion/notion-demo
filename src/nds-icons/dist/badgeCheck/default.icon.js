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

// src/nds-icons/src/badgeCheck/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.806 8.074a.625.625 0 1 0-1.072-.643l-2.512 4.185-1.407-1.642a.625.625 0 1 0-.95.814l1.973 2.3a.625.625 0 0 0 1.01-.085z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.405 1.724a.625.625 0 0 0-.81 0L7.36 3.628l-2.926.233a.625.625 0 0 0-.573.574L3.628 7.36 1.724 9.595a.624.624 0 0 0 0 .81l1.904 2.234.233 2.926a.625.625 0 0 0 .574.573l2.926.234 2.234 1.904a.624.624 0 0 0 .81 0l2.234-1.904 2.926-.234a.625.625 0 0 0 .573-.573l.234-2.926 1.904-2.234a.624.624 0 0 0 0-.81L16.372 7.36l-.234-2.926a.625.625 0 0 0-.573-.573l-2.926-.234zM8.017 4.711 10 3.02l1.983 1.69c.1.085.224.136.355.147l2.597.207.207 2.597c.01.13.062.255.147.355L16.98 10l-1.69 1.983a.63.63 0 0 0-.147.355l-.207 2.597-2.597.207a.63.63 0 0 0-.355.147L10 16.98l-1.983-1.69a.63.63 0 0 0-.355-.147l-2.597-.207-.207-2.597a.63.63 0 0 0-.147-.355L3.02 10l1.69-1.983a.63.63 0 0 0 .147-.355l.207-2.597 2.597-.207a.63.63 0 0 0 .355-.147"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var badgeCheckIcon = createIcon("badgeCheck", iconDefinition);
export {
  iconDefinition,
  badgeCheckIcon
};
