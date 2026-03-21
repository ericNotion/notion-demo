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

// src/nds-icons/src/personCircle/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 4.036c-.787 0-1.432.327-1.868.87-.424.528-.619 1.219-.619 1.927s.195 1.4.619 1.927c.436.543 1.081.87 1.868.87s1.433-.327 1.869-.87c.423-.528.618-1.219.618-1.927s-.195-1.4-.618-1.927c-.436-.543-1.082-.87-1.869-.87m-.893 1.652c.195-.243.48-.402.893-.402s.698.159.894.402c.207.258.343.653.343 1.145s-.136.887-.343 1.145c-.196.243-.48.402-.894.402-.413 0-.698-.159-.893-.402-.208-.258-.344-.653-.344-1.145s.136-.887.344-1.145"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 8.12 3.638c-.666-1.062-1.878-1.76-3.245-1.76s-2.58.698-3.245 1.76A4.86 4.86 0 0 1 3.125 8M8 12.875c-.796 0-1.548-.19-2.212-.53.429-.717 1.25-1.216 2.212-1.216s1.783.5 2.212 1.217A4.86 4.86 0 0 1 8 12.875"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var personCircleSmallIcon = createIcon("personCircleSmall", iconDefinition);
export {
  personCircleSmallIcon,
  iconDefinition
};
