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

// src/nds-icons/src/peopleStack/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M5.4 2.5a.5.5 0 0 1 .5-.5h4.2a.5.5 0 0 1 0 1H5.9a.5.5 0 0 1-.5-.5m-.9 1.25a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm-.237 1.7a1.8 1.8 0 0 0-1.8 1.8v4.85c0 .927.7 1.69 1.6 1.79.061-.99.926-1.775 1.983-1.775.975 0 1.786.667 1.954 1.547.168-.88.979-1.547 1.954-1.547 1.057 0 1.922.785 1.982 1.774a1.8 1.8 0 0 0 1.602-1.789V7.25a1.8 1.8 0 0 0-1.8-1.8zm3.103 3.714c0 .85-.47 1.54-1.32 1.54s-1.319-.69-1.319-1.54.47-1.539 1.32-1.539 1.319.69 1.319 1.54m3.907 0c0 .85-.47 1.54-1.32 1.54s-1.318-.69-1.318-1.54.469-1.539 1.319-1.539 1.32.69 1.32 1.54"
  }, undefined, false, undefined, this)
};
var peopleStackFillSmallIcon = createIcon("peopleStackFillSmall", iconDefinition);
export {
  peopleStackFillSmallIcon,
  iconDefinition
};
