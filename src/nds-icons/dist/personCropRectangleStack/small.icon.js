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

// src/nds-icons/src/personCropRectangleStack/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.9 1.925a.575.575 0 0 0 0 1.15h4.2a.575.575 0 1 0 0-1.15zm-1.4 1.75a.575.575 0 0 0 0 1.15h7a.575.575 0 1 0 0-1.15zM8 7.05a1.66 1.66 0 0 0-1.327.62c-.3.374-.432.856-.432 1.337s.132.963.432 1.338c.312.387.774.62 1.327.62a1.66 1.66 0 0 0 1.328-.62c.3-.375.432-.857.432-1.338s-.132-.963-.432-1.337A1.66 1.66 0 0 0 8 7.05m-.43 1.34c.09-.113.22-.19.43-.19s.34.077.43.19c.102.126.18.335.18.617s-.078.492-.18.618c-.09.112-.22.19-.43.19s-.34-.078-.43-.19c-.101-.126-.18-.336-.18-.618s.079-.491.18-.617"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.263 5.375c-1.036 0-1.875.84-1.875 1.875v4.85c0 1.036.84 1.875 1.875 1.875h7.475c1.035 0 1.875-.84 1.875-1.875V7.25c0-1.035-.84-1.875-1.875-1.875zM3.638 7.25c0-.345.28-.625.625-.625h7.475c.345 0 .625.28.625.625v4.85c0 .345-.28.625-.625.625h-1.162c-.331-1.008-1.44-1.642-2.576-1.642s-2.244.634-2.576 1.642H4.263a.625.625 0 0 1-.625-.625zM8 12.233c.567 0 .999.212 1.256.492H6.745c.257-.28.688-.492 1.255-.492"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var personCropRectangleStackSmallIcon = createIcon("personCropRectangleStackSmall", iconDefinition);
export {
  personCropRectangleStackSmallIcon,
  iconDefinition
};
