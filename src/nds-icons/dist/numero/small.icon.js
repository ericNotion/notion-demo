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

// src/nds-icons/src/numero/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.097 3.235a.89.89 0 0 0-.887.888v8.017a.625.625 0 1 0 1.25 0V5.288l4.889 7.105a.858.858 0 0 0 1.566-.486V3.86a.625.625 0 0 0-1.25 0v6.787L2.828 3.619a.89.89 0 0 0-.73-.384m10.198 0c-1.335 0-2.495.954-2.495 2.43 0 1.472 1.158 2.434 2.495 2.434s2.495-.962 2.495-2.435c0-1.475-1.16-2.429-2.495-2.429m-1.245 2.43c0-.356.13-.649.349-.854s.53-.326.896-.326c.367 0 .677.12.896.326.218.205.349.498.349.853 0 .356-.132.65-.35.857-.219.206-.53.328-.895.328s-.676-.122-.895-.328a1.15 1.15 0 0 1-.35-.857m3.112 3.144h-3.737a.625.625 0 1 0 0 1.25h3.737a.625.625 0 0 0 0-1.25"
  }, undefined, false, undefined, this)
};
var numeroSmallIcon = createIcon("numeroSmall", iconDefinition);
export {
  numeroSmallIcon,
  iconDefinition
};
