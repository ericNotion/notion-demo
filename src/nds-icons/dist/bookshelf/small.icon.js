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

// src/nds-icons/src/bookshelf/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  fittedViewBox: "1.47 2.08 13.09 11.65",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M1.476 3.504c0-.678.55-1.228 1.228-1.229h1.893c.22 0 .425.059.603.16.179-.101.384-.16.604-.16h1.892c.372 0 .704.166.929.427q.108-.054.23-.087l1.828-.49a1.23 1.23 0 0 1 1.504.87l2.327 8.685a1.23 1.23 0 0 1-.868 1.506l-1.829.489a1.23 1.23 0 0 1-1.505-.87L8.926 7.627v4.87c0 .679-.55 1.23-1.229 1.23H5.804a1.2 1.2 0 0 1-.604-.16 1.2 1.2 0 0 1-.603.16H2.704a1.23 1.23 0 0 1-1.228-1.23zm10.039 8.958 1.787-.479-2.317-8.645-1.787.478zm-3.84.014v-8.95h-1.85v8.95zm-3.1 0v-8.95h-1.85v8.95z"
  }, undefined, false, undefined, this)
};
var bookshelfSmallIcon = createIcon("bookshelfSmall", iconDefinition, "small");
export {
  iconDefinition,
  bookshelfSmallIcon
};
