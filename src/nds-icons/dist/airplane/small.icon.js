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

// src/nds-icons/src/airplane/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.664 2.319a.625.625 0 0 0-.542.935l1.712 2.993h-.598l-1.522-1.06a1.3 1.3 0 0 0-.778-.244h-.52a.625.625 0 0 0-.597.81L2.514 8l-.695 2.247a.625.625 0 0 0 .597.81h.52a1.4 1.4 0 0 0 .773-.24l1.527-1.064h.598l-1.712 2.992a.625.625 0 0 0 .542.936h2.248c.182 0 .356-.08.474-.218l3.181-3.71h2.329c.961 0 1.745-.784 1.745-1.745v-.016c0-.972-.787-1.745-1.745-1.745h-2.329l-3.18-3.71a.63.63 0 0 0-.475-.218zm2.79 4.242L5.742 3.57h.883l3.18 3.71a.63.63 0 0 0 .475.218h2.616c.274 0 .495.219.495.495v.016c0 .27-.224.495-.495.495H10.28a.63.63 0 0 0-.474.218l-3.181 3.71h-.883l1.712-2.993a.625.625 0 0 0-.542-.935H5.04a.63.63 0 0 0-.357.112l-1.34.933.422-1.364a.63.63 0 0 0 0-.369l-.422-1.363 1.34.933c.105.073.23.112.357.112h1.872a.625.625 0 0 0 .542-.936"
  }, undefined, false, undefined, this)
};
var airplaneSmallIcon = createIcon("airplaneSmall", iconDefinition);
export {
  iconDefinition,
  airplaneSmallIcon
};
