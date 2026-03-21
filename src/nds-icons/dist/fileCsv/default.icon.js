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

// src/nds-icons/src/fileCsv/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9682_23935)",
        children: [
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M4.125 4.5c0-1.174.951-2.125 2.125-2.125h3.879c.563 0 1.104.224 1.502.622l3.622 3.622c.398.398.622.939.622 1.502V9.37h-1.25V8.3H12a2.05 2.05 0 0 1-2.05-2.05V3.625h-3.7a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h7.5a1 1 0 0 0 .094-.005h1.845a2.13 2.13 0 0 1-1.939 1.255h-7.5A2.125 2.125 0 0 1 4.125 15.5zm6.925-.316V6.25c0 .525.425.95.95.95h2.066z"
          }, undefined, false, undefined, this),
          /* @__PURE__ */ jsxDEV3("path", {
            d: "M14.363 12.86c-.317-.27-.755-.43-1.267-.528l-.01-.002c-.436-.084-.661-.196-.77-.289-.083-.07-.116-.139-.116-.262 0-.055.02-.124.136-.202.127-.084.346-.157.647-.157.583 0 .817.246.88.337a.55.55 0 1 0 .907-.623c-.27-.393-.846-.814-1.787-.814-.46 0-.908.109-1.258.343-.36.24-.625.626-.625 1.116 0 .422.157.807.504 1.101.317.27.755.43 1.267.528l.009.002c.436.084.662.196.771.288.082.07.116.14.116.263 0 .055-.02.124-.137.202-.126.084-.346.157-.647.157-.583 0-.817-.246-.88-.337a.55.55 0 0 0-.906.623c.27.393.845.814 1.786.814.461 0 .908-.109 1.258-.343.36-.24.626-.625.626-1.116 0-.422-.158-.807-.504-1.101m-4.193-2.214c-.649-.367-1.575-.445-2.355-.127-.832.34-1.465 1.12-1.465 2.351s.633 2.01 1.465 2.35c.78.32 1.706.24 2.355-.126a.55.55 0 0 0-.54-.958c-.356.2-.93.258-1.399.067-.417-.17-.781-.547-.781-1.333s.364-1.162.781-1.332c.47-.192 1.043-.135 1.398.066a.55.55 0 0 0 .541-.958m6.247.203a.55.55 0 1 0-1.034.376l1.333 3.666a.55.55 0 0 0 1.034 0l1.333-3.666a.55.55 0 0 0-1.034-.376l-.816 2.245z"
          }, undefined, false, undefined, this)
        ]
      }, undefined, true, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9682_23935",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fileCsvIcon = createIcon("fileCsv", iconDefinition);
export {
  iconDefinition,
  fileCsvIcon
};
