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

// src/nds-icons/src/trashSlash/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.975 2.343a.625.625 0 0 0-.95.814L4.07 4.375h-.945a.625.625 0 0 0 0 1.25h.528l.29 6.4c.048 1.035.9 1.85 1.936 1.85h4.242c.598 0 1.135-.272 1.491-.7l.413.482a.625.625 0 0 0 .958-.804L4.209 2.617l-.006-.007zm1.217 9.626-.288-6.344h.237l.981 1.145a1 1 0 0 0-.01.105v4.5a.575.575 0 0 0 1.15 0V8.1l1.476 1.721v1.554a.575.575 0 0 0 1.15 0v-.212l.875 1.02a.69.69 0 0 1-.642.442H5.879a.687.687 0 0 1-.687-.656m1.433-9.844c-.43 0-.82.182-1.093.473a.075.075 0 0 0-.002.1l.735.858a.075.075 0 0 0 .127-.021.25.25 0 0 1 .233-.16h2.75a.25.25 0 0 1 .25.25v.75H7.13a.075.075 0 0 0-.057.124l.943 1.1a.08.08 0 0 0 .057.026h3.023l-.153 3.358q0 .029.018.052l1.046 1.22a.075.075 0 0 0 .132-.046l.208-4.584h.528a.625.625 0 1 0 0-1.25h-2v-.75a1.5 1.5 0 0 0-1.5-1.5z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.313 6.3a.57.57 0 0 0-.439.203.075.075 0 0 0 0 .097l.882 1.029a.075.075 0 0 0 .132-.05v-.704a.575.575 0 0 0-.575-.575"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var trashSlashSmallIcon = createIcon("trashSlashSmall", iconDefinition);
export {
  trashSlashSmallIcon,
  iconDefinition
};
