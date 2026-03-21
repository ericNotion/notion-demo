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

// src/nds-icons/src/microphoneMute/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 2.175a2.88 2.88 0 0 0-2.685 1.846l1.06 1.237V5.05a1.625 1.625 0 0 1 3.25 0v3.6q0 .183-.039.355l.914 1.066a2.86 2.86 0 0 0 .375-1.42V5.05A2.875 2.875 0 0 0 10 2.175m-5.225.768.121.143q.036.075.093.143l11.278 13.158a.625.625 0 0 1-1.041.67l-2.674-3.12c-.602.254-1.25.42-1.927.484v1.929h3.425a.625.625 0 0 1 0 1.25h-8.1a.625.625 0 1 1 0-1.25h3.425v-1.93a6.58 6.58 0 0 1-4.8-2.818.625.625 0 1 1 1.03-.71A5.33 5.33 0 0 0 10 13.2a5.3 5.3 0 0 0 1.687-.272l-1.233-1.439q-.223.036-.454.036A2.875 2.875 0 0 1 7.125 8.65V7.606l-3.3-3.85a.625.625 0 0 1 .95-.813m9.852 9.609q.442-.437.797-.95a.625.625 0 1 0-1.029-.71q-.262.38-.584.708z"
  }, undefined, false, undefined, this)
};
var microphoneMuteIcon = createIcon("microphoneMute", iconDefinition);
export {
  microphoneMuteIcon,
  iconDefinition
};
