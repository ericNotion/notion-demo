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

// src/nds-icons/src/peopleStack/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.9 1.925a.575.575 0 0 0 0 1.15h4.2a.575.575 0 1 0 0-1.15zm-1.4 1.75a.575.575 0 0 0 0 1.15h7a.575.575 0 1 0 0-1.15zM6.047 7.05a1.66 1.66 0 0 0-1.327.62c-.3.374-.433.856-.433 1.337s.132.963.433 1.338c.31.387.773.62 1.327.62a1.66 1.66 0 0 0 1.327-.62c.3-.375.432-.857.432-1.338s-.132-.963-.432-1.337a1.66 1.66 0 0 0-1.327-.62m-.43 1.34c.09-.113.22-.19.43-.19s.34.077.43.19c.101.126.18.335.18.617s-.079.492-.18.618c-.09.112-.22.19-.43.19s-.34-.078-.43-.19c-.102-.126-.18-.336-.18-.618s.078-.491.18-.617m4.337-1.34a1.66 1.66 0 0 0-1.327.62c-.3.374-.433.856-.433 1.337s.133.963.433 1.338c.311.387.773.62 1.327.62s1.016-.233 1.327-.62c.3-.375.433-.857.433-1.338s-.133-.963-.433-1.337a1.66 1.66 0 0 0-1.327-.62m-.43 1.34c.09-.113.22-.19.43-.19s.34.077.43.19c.101.126.18.335.18.617s-.079.492-.18.618c-.09.112-.22.19-.43.19s-.34-.078-.43-.19c-.101-.126-.18-.336-.18-.618s.079-.491.18-.617"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.263 5.375c-1.036 0-1.875.84-1.875 1.875v4.85c0 1.036.84 1.875 1.875 1.875h7.475c1.035 0 1.875-.84 1.875-1.875V7.25c0-1.035-.84-1.875-1.875-1.875zM3.638 7.25c0-.345.28-.625.625-.625h7.475c.345 0 .625.28.625.625v4.85c0 .18-.076.343-.199.457-.338-.873-1.216-1.475-2.21-1.475-.8 0-1.525.39-1.954.996a2.4 2.4 0 0 0-1.953-.995c-.995 0-1.873.6-2.211 1.474a.62.62 0 0 1-.198-.457zm2.409 4.983c.428 0 .788.2 1 .492H5.046a1.23 1.23 0 0 1 1-.492m3.907 0c.428 0 .787.2 1 .492h-2a1.23 1.23 0 0 1 1-.492"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var peopleStackSmallIcon = createIcon("peopleStackSmall", iconDefinition);
export {
  peopleStackSmallIcon,
  iconDefinition
};
