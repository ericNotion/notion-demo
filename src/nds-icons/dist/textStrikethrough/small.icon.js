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

// src/nds-icons/src/textStrikethrough/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.505 10.553c0-.732-.226-1.391-.74-1.928h2.275a.625.625 0 1 0 0-1.25H8.065c-.94-.201-1.516-.483-1.853-.792-.319-.293-.467-.65-.467-1.136 0-.413.192-.766.565-1.036.385-.278.968-.466 1.69-.466s1.306.188 1.691.466c.373.27.564.623.564 1.036a.625.625 0 1 0 1.25 0c0-.863-.426-1.574-1.081-2.048-.644-.466-1.5-.704-2.424-.704s-1.78.238-2.423.704c-.656.474-1.082 1.185-1.082 2.048 0 .732.226 1.391.74 1.928H2.96a.625.625 0 0 0 0 1.25h4.975c.94.201 1.517.483 1.853.792.319.293.467.65.467 1.136 0 .413-.191.766-.564 1.036-.386.278-.969.466-1.691.466s-1.306-.187-1.69-.466c-.374-.27-.565-.623-.565-1.036a.625.625 0 0 0-1.25 0c0 .863.426 1.574 1.081 2.048.644.466 1.5.704 2.424.704s1.78-.238 2.424-.704c.655-.474 1.08-1.185 1.08-2.048"
  }, undefined, false, undefined, this)
};
var textStrikethroughSmallIcon = createIcon("textStrikethroughSmall", iconDefinition);
export {
  textStrikethroughSmallIcon,
  iconDefinition
};
