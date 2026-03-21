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

// src/nds-icons/src/numbers123/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.034 4.288c-1.063 0-2.024.607-2.406 1.52a.625.625 0 1 0 1.154.482c.17-.406.646-.752 1.252-.752.806 0 1.33.566 1.33 1.104a.97.97 0 0 1-.268.661l-3.56 3.327a.625.625 0 0 0 .427 1.082H9.14a.625.625 0 0 0 0-1.25H6.547l2.418-2.26.027-.028a2.22 2.22 0 0 0 .622-1.532c0-1.367-1.231-2.354-2.58-2.354m6.061 0c-1.012 0-1.989.496-2.393 1.341a.625.625 0 0 0 1.128.54c.147-.308.608-.63 1.265-.63.414 0 .766.128 1.002.308.235.18.328.384.328.562 0 .177-.093.381-.328.56s-.588.31-1.002.31a1 1 0 0 0-.102.008h-.34a.625.625 0 1 0 0 1.25h.442c.458 0 .849.14 1.112.34.262.197.368.423.368.622 0 .2-.106.426-.368.624-.263.198-.654.338-1.112.338-.724 0-1.234-.338-1.409-.674a.625.625 0 1 0-1.108.578c.443.85 1.454 1.347 2.517 1.347.704 0 1.365-.215 1.864-.59.5-.377.866-.944.866-1.623 0-.677-.366-1.244-.865-1.62.419-.36.715-.87.715-1.47 0-.65-.346-1.194-.819-1.555-.472-.36-1.097-.566-1.76-.566m-10.061.325a.625.625 0 0 0-.85-.242l-1.689.94a.625.625 0 1 0 .608 1.092l.76-.423v5.107a.625.625 0 0 0 1.25 0V5.038l-.003-.062a.6.6 0 0 0-.076-.363"
  }, undefined, false, undefined, this)
};
var numbers123SmallIcon = createIcon("numbers123Small", iconDefinition);
export {
  numbers123SmallIcon,
  iconDefinition
};
