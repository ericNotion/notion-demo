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

// src/nds-icons/src/dollarSign/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 .917a.625.625 0 0 0-.625.625v.823c-.807.08-1.542.317-2.122.705-.739.494-1.238 1.246-1.238 2.18 0 .858.31 1.61 1 2.196.567.48 1.359.822 2.36 1.06v3.87c-.587-.073-1.074-.25-1.428-.486-.461-.308-.682-.701-.682-1.14a.625.625 0 1 0-1.25 0c0 .934.5 1.686 1.238 2.18.58.388 1.315.625 2.122.705v.822a.625.625 0 1 0 1.25 0v-.822c.807-.08 1.542-.318 2.122-.705.739-.494 1.238-1.246 1.238-2.18 0-.858-.31-1.61-1-2.196-.568-.48-1.359-.822-2.36-1.06V3.623c.587.074 1.074.25 1.428.487.461.308.682.701.682 1.14a.625.625 0 1 0 1.25 0c0-.934-.5-1.686-1.238-2.18-.58-.388-1.315-.625-2.122-.705v-.823A.625.625 0 0 0 8 .917M5.947 4.11c.354-.237.84-.413 1.428-.487v3.593c-.733-.201-1.229-.45-1.55-.724-.39-.33-.56-.724-.56-1.241 0-.44.22-.833.682-1.141m2.678 8.267V8.784c.733.201 1.229.45 1.55.723.39.331.56.725.56 1.242 0 .44-.221.833-.682 1.141-.354.237-.84.413-1.428.487"
  }, undefined, false, undefined, this)
};
var dollarSignSmallIcon = createIcon("dollarSignSmall", iconDefinition);
export {
  iconDefinition,
  dollarSignSmallIcon
};
