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

// src/nds-icons/src/envelopeBadge/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.805 2.312a2.075 2.075 0 1 0 0 4.15 2.075 2.075 0 0 0 0-4.15"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875V7.324a.075.075 0 0 0-.1-.071 3 3 0 0 1-1.072.157.075.075 0 0 0-.078.075v3.003l-2.49-2.49.99-.988a.075.075 0 0 0-.012-.115 3 3 0 0 1-.77-.75.075.075 0 0 0-.113-.008L8 8.367 4.26 4.624h5.45a.075.075 0 0 0 .075-.079 3.1 3.1 0 0 1 .136-1.073.075.075 0 0 0-.071-.098zm-.625 7.113v-4.98l2.49 2.49zm.88.887 2.493-2.493.81.81c.244.244.64.244.884 0l.81-.81 2.492 2.493z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var envelopeBadgeSmallIcon = createIcon("envelopeBadgeSmall", iconDefinition);
export {
  iconDefinition,
  envelopeBadgeSmallIcon
};
