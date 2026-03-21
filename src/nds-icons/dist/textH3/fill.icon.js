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

// src/nds-icons/src/textH3/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.877 3.95c.484 0 .875.392.875.875V8.9h5.9V4.825a.875.875 0 0 1 1.75 0v10.35a.875.875 0 0 1-1.75 0V10.65h-5.9v4.525a.875.875 0 0 1-1.75 0V4.825c0-.483.392-.875.875-.875M14.93 9.62c-.621 0-1.009.305-1.116.53a.875.875 0 1 1-1.578-.756c.467-.977 1.576-1.524 2.694-1.524.737 0 1.436.227 1.97.635.536.41.941 1.037.941 1.797 0 .606-.257 1.127-.631 1.52.46.42.787 1.006.787 1.7 0 .792-.428 1.444-.99 1.868s-1.3.66-2.077.66c-1.168 0-2.311-.545-2.82-1.523a.875.875 0 0 1 1.551-.81c.134.258.575.583 1.269.583.433 0 .792-.133 1.023-.308.231-.174.294-.349.294-.47s-.063-.296-.294-.47c-.231-.175-.59-.308-1.023-.308h-.461a.875.875 0 1 1 0-1.75h.337a1 1 0 0 1 .124-.01c.387 0 .705-.12.908-.275.202-.155.253-.306.253-.406s-.05-.253-.253-.407c-.203-.155-.521-.276-.908-.276"
  }, undefined, false, undefined, this)
};
var textH3FillIcon = createIcon("textH3Fill", iconDefinition);
export {
  textH3FillIcon,
  iconDefinition
};
