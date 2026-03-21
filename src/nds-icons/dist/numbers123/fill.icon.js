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

// src/nds-icons/src/numbers123/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.793 6.88c-.775 0-1.387.44-1.606.966a.738.738 0 0 1-1.361-.568c.47-1.125 1.653-1.874 2.967-1.874 1.667 0 3.18 1.22 3.18 2.9a2.74 2.74 0 0 1-.797 1.916l-3.103 2.9h3.351a.738.738 0 0 1 0 1.476h-5.22a.737.737 0 0 1-.504-1.277l4.45-4.159c.229-.248.349-.545.349-.857 0-.7-.68-1.424-1.706-1.424m7.577.001c-.836 0-1.43.41-1.622.812a.737.737 0 1 1-1.33-.636c.496-1.038 1.698-1.652 2.951-1.652.821 0 1.593.254 2.175.699S19.55 7.216 19.55 8.01c0 .755-.382 1.396-.92 1.84l.043.031c.616.465 1.065 1.161 1.065 1.992s-.45 1.528-1.065 1.993c-.616.463-1.433.729-2.304.729-1.317 0-2.563-.615-3.108-1.66a.737.737 0 1 1 1.308-.682c.228.438.882.867 1.8.867.58 0 1.079-.179 1.416-.433.337-.253.478-.548.478-.814s-.142-.56-.478-.814c-.337-.254-.836-.432-1.416-.432h-.554a.738.738 0 0 1 0-1.475h.43a1 1 0 0 1 .124-.01c.526 0 .976-.164 1.28-.396.301-.23.426-.498.426-.736 0-.239-.125-.505-.427-.736-.303-.232-.753-.396-1.279-.396M3.844 6.22l.005.078v7.56a.738.738 0 0 1-1.475 0V7.401l-1.015.564A.737.737 0 1 1 .64 6.677l2.11-1.175a.737.737 0 0 1 1.093.717"
  }, undefined, false, undefined, this)
};
var numbers123FillIcon = createIcon("numbers123Fill", iconDefinition);
export {
  numbers123FillIcon,
  iconDefinition
};
