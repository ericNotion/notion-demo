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

// src/nds-icons/src/circleDotted/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.485 2.142a8 8 0 0 1 1.03 0 .875.875 0 1 1-.113 1.746 6 6 0 0 0-.804 0 .875.875 0 0 1-.113-1.746m2.827 1.191a.875.875 0 0 1 1.172-.397q.465.23.892.516a.875.875 0 0 1-.973 1.454 6 6 0 0 0-.694-.401.875.875 0 0 1-.397-1.172m-4.624 0a.875.875 0 0 1-.397 1.172q-.36.179-.694.401a.875.875 0 1 1-.973-1.454 8 8 0 0 1 .892-.516.875.875 0 0 1 1.172.397m7.646 2.051a.875.875 0 0 1 1.214.24q.286.427.516.892a.875.875 0 1 1-1.569.775 6 6 0 0 0-.401-.694.875.875 0 0 1 .24-1.213m-10.668 0a.874.874 0 0 1 .24 1.213 6 6 0 0 0-.401.694.875.875 0 1 1-1.569-.775 8 8 0 0 1 .516-.892.875.875 0 0 1 1.214-.24m12.263 3.285a.875.875 0 0 1 .93.816 8 8 0 0 1 0 1.03.875.875 0 1 1-1.747-.113 6 6 0 0 0 0-.804.875.875 0 0 1 .817-.93m-13.858.001a.875.875 0 0 1 .817.93 6 6 0 0 0 0 .803.875.875 0 1 1-1.746.113 8 8 0 0 1 0-1.03.875.875 0 0 1 .93-.816m.261 3.643a.875.875 0 0 1 1.172.397q.179.36.401.694a.875.875 0 0 1-1.454.973 8 8 0 0 1-.516-.892.875.875 0 0 1 .397-1.172m13.334 0a.875.875 0 0 1 .397 1.172q-.23.465-.516.892a.875.875 0 0 1-1.454-.973 6 6 0 0 0 .401-.694.875.875 0 0 1 1.172-.397M5.384 15.334a.875.875 0 0 1 1.213-.24q.333.222.694.401a.875.875 0 0 1-.775 1.569 8 8 0 0 1-.892-.516.875.875 0 0 1-.24-1.214m9.232 0a.875.875 0 0 1-.24 1.214q-.427.286-.892.516a.875.875 0 1 1-.775-1.569 6 6 0 0 0 .694-.401.875.875 0 0 1 1.213.24m-5.947 1.595a.875.875 0 0 1 .93-.817 6 6 0 0 0 .803 0 .875.875 0 1 1 .113 1.746 8 8 0 0 1-1.03 0 .875.875 0 0 1-.816-.93"
  }, undefined, false, undefined, this)
};
var circleDottedFillIcon = createIcon("circleDottedFill", iconDefinition);
export {
  iconDefinition,
  circleDottedFillIcon
};
