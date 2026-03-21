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

// src/nds-icons/src/musicNoteTv/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.127 10.387c.277-.207.613-.307.926-.34q.172-.019.346-.008V7.066c0-.303.244-.575.546-.607l1.803-.193a.5.5 0 0 1 .388.12c.102.092.16.226.16.372v.882a.624.624 0 0 1-.543.607l-1.26.143v2.532q0 .03-.003.06.003.041.003.085c0 .417-.216.76-.514.983a1.9 1.9 0 0 1-.926.34c-.313.033-.65.004-.926-.145a.96.96 0 0 1-.514-.875c0-.417.216-.76.514-.983"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M17.037 12.6a2.125 2.125 0 0 1-2.125 2.125H5.087A2.125 2.125 0 0 1 2.962 12.6V6.15c0-1.174.952-2.125 2.125-2.125h9.825c1.174 0 2.125.951 2.125 2.125zm-2.125.875a.875.875 0 0 0 .875-.875V6.15a.875.875 0 0 0-.875-.875H5.087a.875.875 0 0 0-.875.875v6.45c0 .483.392.875.875.875zm.138 2.875a.55.55 0 0 1-.55.55h-9a.55.55 0 1 1 0-1.1h9a.55.55 0 0 1 .55.55"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var musicNoteTvIcon = createIcon("musicNoteTv", iconDefinition);
export {
  musicNoteTvIcon,
  iconDefinition
};
