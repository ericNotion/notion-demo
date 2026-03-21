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

// src/nds-icons/src/scroll/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m7.916 10.107 3.934-.021V3.975c0-.868-.707-1.575-1.575-1.575H3.128c-.056 0-.07.077-.021.09A1.57 1.57 0 0 1 4.15 3.976v8.05c0 .868.707 1.575 1.575 1.575h.133c.37-.133.742-.511.742-1.057V11.5c0-.721.546-1.316 1.267-1.386h.049zM6.425 4.234h3.15c.238 0 .434.196.434.434a.436.436 0 0 1-.434.434h-3.15a.43.43 0 0 1-.434-.434c0-.238.196-.434.434-.434m0 2.54a.43.43 0 0 1-.434-.433c0-.238.196-.434.434-.434h3.15c.238 0 .434.196.434.434a.436.436 0 0 1-.434.434zM2.575 3.45a.53.53 0 0 0-.525.525v1.75c0 .098.077.175.175.175h.7a.173.173 0 0 0 .175-.175v-1.75a.53.53 0 0 0-.525-.525"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m7.965 11.157 5.635-.021c.189 0 .35.154.35.35v.714c0 .77-.63 1.4-1.4 1.4H7.139c-.028 0-.035-.042-.007-.05a.79.79 0 0 0 .518-.741v-1.31c0-.181.14-.328.315-.342"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var scrollFillSmallIcon = createIcon("scrollFillSmall", iconDefinition);
export {
  scrollFillSmallIcon,
  iconDefinition
};
