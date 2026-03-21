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

// src/nds-icons/src/megaphone/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M15.405 2.586c-.423 0-.837.117-1.197.338l-2.709 1.663a7.8 7.8 0 0 1-4.068 1.149H4.226a2.2 2.2 0 0 0-2.2 2.2v2.133a2.2 2.2 0 0 0 2.2 2.2h.085l1.191 3.953a1.675 1.675 0 0 0 1.604 1.192h.998c.925 0 1.675-.75 1.675-1.675v-3.107c.6.19 1.178.453 1.72.785l2.709 1.663a2.288 2.288 0 0 0 3.485-1.95V4.874a2.29 2.29 0 0 0-2.288-2.288m-6.876 9.76v3.393c0 .235-.19.425-.425.425h-.998a.425.425 0 0 1-.407-.302l-1.082-3.594H7.43q.555 0 1.098.078m6.73-8.5a1.04 1.04 0 0 1 1.184 1.028v8.256a1.038 1.038 0 0 1-1.183 1.028zm-1.1.574v9.164l-2.006-1.232a9 9 0 0 0-2.41-1.032V6.684a9 9 0 0 0 2.41-1.032zM7.43 11.019H4.226a.95.95 0 0 1-.95-.95V7.936a.95.95 0 0 1 .95-.95H7.43q.611 0 1.213-.082V11.1a9 9 0 0 0-1.213-.082"
  }, undefined, false, undefined, this)
};
var megaphoneIcon = createIcon("megaphone", iconDefinition);
export {
  megaphoneIcon,
  iconDefinition
};
