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

// src/nds-icons/src/figure2/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.818 3.691a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M1.944 4.9a.625.625 0 1 0-.138 1.242q1.251.14 2.506.222v.49a27.4 27.4 0 0 1-.441 4.782l-.229 1.26a.625.625 0 0 0 1.23.223l.229-1.26q.178-.98.288-1.97h.458q.11.99.288 1.97l.23 1.26a.625.625 0 0 0 1.23-.224l-.23-1.259a27.4 27.4 0 0 1-.441-4.897v-.264q1.076.021 2.152 0v.58a25 25 0 0 1-.405 4.38l-.265 1.46a.625.625 0 0 0 1.23.224l.265-1.46a26 26 0 0 0 .26-1.77h.45q.11.99.288 1.97l.23 1.26a.625.625 0 0 0 1.229-.224l-.229-1.259a27.4 27.4 0 0 1-.441-4.897v-.375a56 56 0 0 0 2.506-.222.625.625 0 1 0-.138-1.242 55 55 0 0 1-12.112 0"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.582 3.691a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var figure2FillSmallIcon = createIcon("figure2FillSmall", iconDefinition);
export {
  iconDefinition,
  figure2FillSmallIcon
};
