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

// src/nds-icons/src/handTap/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.645 2.85a3.23 3.23 0 1 0-5.596 3.232l.19.328a.575.575 0 1 0 .996-.575l-.19-.328a2.08 2.08 0 0 1 3.604-2.081l.19.328a.575.575 0 0 0 .996-.575z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.272 3.762a1.5 1.5 0 1 0-2.598 1.5l1.247 2.16a1.438 1.438 0 0 0-1.093 2.504l3.145 2.818a4.682 4.682 0 0 0 7.179-5.827l-1.063-1.84a1.5 1.5 0 0 0-2.374-.295 1.5 1.5 0 0 0-1.922.232 1.5 1.5 0 0 0-1.722.134zm-1.424.534a.25.25 0 0 1 .341.091l1.977 3.424a.625.625 0 0 0 1.082-.625l-.437-.758a.25.25 0 1 1 .432-.25l.437.758a.625.625 0 1 0 1.083-.625l-.088-.151a.25.25 0 1 1 .433-.25l.437.758a.625.625 0 0 0 1.082-.625l-.052-.091a.25.25 0 0 1 .432-.25l1.062 1.84a3.432 3.432 0 0 1-5.262 4.271L4.662 8.995a.188.188 0 0 1 .238-.292l1.442 1.08a.625.625 0 0 0 .916-.814L4.757 4.637a.25.25 0 0 1 .091-.34"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var handTapSmallIcon = createIcon("handTapSmall", iconDefinition);
export {
  iconDefinition,
  handTapSmallIcon
};
