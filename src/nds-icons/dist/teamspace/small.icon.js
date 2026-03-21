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

// src/nds-icons/src/teamspace/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.066 4.914a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m2.162 0a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076M5.066 6.458a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077M5.066 8.002a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m2.162 0a.538.538 0 1 0 0 1.077.538.538 0 0 0 0-1.077m4.169.618a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076m0 1.544a.538.538 0 1 0 0 1.076.538.538 0 0 0 0-1.076"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.063 2.977a1.934 1.934 0 0 0-1.935 1.935V12.4c0 .343.279.622.622.622h10.5a.62.62 0 0 0 .622-.622V8.772a1.934 1.934 0 0 0-1.934-1.934h-1.772V4.912a1.934 1.934 0 0 0-1.934-1.935zm-.691 1.935c0-.382.31-.691.69-.691h4.17c.381 0 .69.31.69.69v6.868H7.895v-1.54a.513.513 0 0 0-.512-.513H4.912a.513.513 0 0 0-.513.513v1.54H3.372zm6.794 6.867V8.08h1.772c.381 0 .69.31.69.691v3.007zm-4.742 0V10.75H6.87v1.028z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var teamspaceSmallIcon = createIcon("teamspaceSmall", iconDefinition);
export {
  teamspaceSmallIcon,
  iconDefinition
};
