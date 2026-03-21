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

// src/nds-icons/src/volumeOff/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.975 2.343a.625.625 0 0 0-.95.814L4.59 4.98l-.09.085H2.17a.625.625 0 0 0-.624.625v4.8c0 .345.28.625.625.625h2.328l2.782 2.6a.9.9 0 0 0 1.515-.658v-3.17l3.23 3.769a.625.625 0 0 0 .958-.804L4.209 2.617l-.006-.007zM5.17 6.148l.232-.217 2.142 2.498v3.823L5.17 10.034a.63.63 0 0 0-.426-.168h-1.95v-3.55h1.95c.158 0 .31-.06.426-.168m3.625-3.024a.9.9 0 0 0-1.515-.657l-1.03.962a.075.075 0 0 0-.005.103l.716.836a.075.075 0 0 0 .108.006l.476-.444v1.091q0 .027.018.049l1.1 1.283a.075.075 0 0 0 .132-.049zm4.287.609a.625.625 0 1 0-1.024.716 6.35 6.35 0 0 1 .518 6.4.08.08 0 0 0 .01.082l.771.899a.075.075 0 0 0 .122-.012 7.6 7.6 0 0 0-.397-8.085M11.05 5.29a.625.625 0 1 0-.961.801c.63.756.849 1.736.656 2.647a.08.08 0 0 0 .017.064l.842.983a.075.075 0 0 0 .127-.02 4.38 4.38 0 0 0-.682-4.474"
  }, undefined, false, undefined, this)
};
var volumeOffSmallIcon = createIcon("volumeOffSmall", iconDefinition);
export {
  volumeOffSmallIcon,
  iconDefinition
};
