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

// src/nds-icons/src/handThumbsDown/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.44 7.52c0-.39-.14-.77-.41-1.06.08-.19.12-.39.12-.59 0-.54-.27-1.04-.71-1.33.02-.11.03-.21.03-.32 0-.88-.71-1.59-1.59-1.59H8.45c-.67 0-1.32.15-1.93.46l-.95.33H2.91c-.75 0-1.35.61-1.35 1.35v4.18c0 .75.61 1.35 1.35 1.35h1.91l1.67 1.78c.16.21.33.53.48.84l.1.2c.14.28.29.57.43.8l.27.56s.02.03.03.05c.3.5.84.78 1.4.78.19 0 .39-.03.58-.1.8-.32 1.22-1.17.99-2l-.4-1.41c-.09-.32-.23-.59-.34-.82l-.02-.04-.09-.18h2.81c.88 0 1.59-.71 1.59-1.59 0-.26-.07-.51-.19-.74.19-.26.28-.57.28-.9zM8.73 9.89c-.18.24-.23.55-.14.83.1.32.23.58.33.79v.02c.12.22.21.4.27.6l.41 1.42c.06.2-.04.41-.23.48-.17.06-.37 0-.46-.14l-.27-.56s-.02-.04-.03-.05c-.12-.19-.23-.43-.38-.71-.04-.08-.08-.15-.12-.23-.19-.38-.4-.77-.63-1.06-.01-.01-.02-.03-.04-.04L5.68 9.36V4.65c.07 0 .14-.01.2-.03l1.13-.39c.06-.02.11-.05.15-.07.41-.19.84-.29 1.3-.29h3.43c.19 0 .34.15.34.34 0 .09-.04.18-.11.25a.63.63 0 0 0 .46 1.06.329.329 0 0 1 .19.6.63.63 0 0 0-.22.59c.04.22.2.41.41.48.14.05.23.17.23.32 0 .13-.07.23-.18.29-.2.1-.34.3-.35.52s.1.44.29.56c.1.06.16.16.16.27 0 .19-.15.34-.34.34H9.52c-.3 0-.58.14-.76.39zM4.52 4.66v4.38h-1.6a.1.1 0 0 1-.1-.1V4.76c0-.06.05-.1.1-.1z"
  }, undefined, false, undefined, this)
};
var handThumbsDownSmallIcon = createIcon("handThumbsDownSmall", iconDefinition);
export {
  iconDefinition,
  handThumbsDownSmallIcon
};
