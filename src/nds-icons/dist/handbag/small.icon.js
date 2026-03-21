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

// src/nds-icons/src/handbag/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.679 1.512A2.725 2.725 0 0 0 4.99 3.79l-.359 2.153q-.361.043-.723.095A1.746 1.746 0 0 0 2.425 7.56l-.46 3.88a2.025 2.025 0 0 0 2.01 2.263h8.05a2.025 2.025 0 0 0 2.01-2.263l-.46-3.88a1.746 1.746 0 0 0-1.484-1.523q-.361-.052-.723-.095l-.36-2.153a2.725 2.725 0 0 0-2.687-2.277zM6.224 3.995a1.475 1.475 0 0 1 1.455-1.233h.642c.721 0 1.336.522 1.455 1.233l.304 1.824a29 29 0 0 0-4.16 0zm-2.136 3.28a27.4 27.4 0 0 1 7.824 0q.121.017.217.086c-2.15 2.375-6.108 2.375-8.258 0a.5.5 0 0 1 .217-.087m-.882 4.312.347-2.928a6.7 6.7 0 0 0 3.672 1.59v.992c0 .235.19.425.425.425h.7c.235 0 .425-.19.425-.425v-.991a6.7 6.7 0 0 0 3.672-1.591l.347 2.928a.775.775 0 0 1-.77.866H3.976a.775.775 0 0 1-.77-.866"
  }, undefined, false, undefined, this)
};
var handbagSmallIcon = createIcon("handbagSmall", iconDefinition);
export {
  iconDefinition,
  handbagSmallIcon
};
