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

// src/nds-icons/src/dollarSign/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.25 14.458a.75.75 0 0 0 1.5 0v-.711c.78-.092 1.494-.33 2.067-.713.766-.512 1.293-1.3 1.293-2.285 0-.891-.325-1.679-1.045-2.29-.568-.482-1.347-.824-2.315-1.063V3.767c.507.08.926.241 1.233.447.434.29.627.647.627 1.037a.75.75 0 0 0 1.5 0c0-.985-.527-1.773-1.293-2.285-.573-.382-1.287-.62-2.067-.713v-.71a.75.75 0 1 0-1.5 0v.71c-.78.092-1.494.33-2.067.713-.766.512-1.293 1.3-1.293 2.285 0 .891.325 1.679 1.045 2.29.568.482 1.347.824 2.315 1.063v3.629c-.507-.08-.926-.241-1.233-.447-.434-.29-.627-.647-.627-1.037a.75.75 0 0 0-1.5 0c0 .984.527 1.773 1.293 2.285.573.382 1.287.62 2.067.713zm0-7.408c-.634-.189-1.064-.414-1.345-.653-.36-.305-.515-.663-.515-1.146 0-.39.193-.748.627-1.037.307-.206.726-.366 1.233-.447zm1.5 1.9c.634.189 1.063.414 1.345.653.36.305.515.663.515 1.146 0 .39-.193.747-.627 1.037-.307.206-.726.366-1.233.447z"
  }, undefined, false, undefined, this)
};
var dollarSignFillSmallIcon = createIcon("dollarSignFillSmall", iconDefinition);
export {
  iconDefinition,
  dollarSignFillSmallIcon
};
