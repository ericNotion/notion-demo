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

// src/nds-icons/src/gear/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 10.15c-1.19 0-2.15-.96-2.15-2.15S6.81 5.85 8 5.85s2.15.96 2.15 2.15-.96 2.15-2.15 2.15M8.9 8c0-.5-.4-.9-.9-.9s-.9.4-.9.9.4.9.9.9.9-.4.9-.9"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.27 6.42c.26.04.46.24.51.5l.03.02c.06.34.1.7.1 1.06 0 .39-.04.77-.11 1.15-.05.26-.26.46-.51.5l-.98.17.57.8c.15.21.15.5 0 .71-.2.29-.43.57-.68.82-.28.28-.58.53-.89.74-.21.15-.5.15-.71 0l-.82-.58-.17.97c-.04.26-.24.46-.5.51-.35.06-.71.1-1.06.1-.39 0-.77-.04-1.15-.11a.63.63 0 0 1-.5-.51l-.17-.98-.8.57c-.21.15-.5.15-.71 0-.29-.2-.57-.43-.82-.68-.28-.28-.53-.57-.74-.89a.62.62 0 0 1 0-.71l.57-.82-.97-.17a.62.62 0 0 1-.51-.5c-.07-.35-.1-.7-.1-1.06 0-.4.04-.78.11-1.15.05-.26.26-.46.51-.5l.98-.17-.57-.8a.62.62 0 0 1 0-.71c.2-.29.43-.57.68-.82.28-.28.57-.53.89-.74.22-.15.5-.15.71 0l.81.57.17-.97c.04-.26.24-.46.5-.51.35-.07.71-.1 1.06-.1.39 0 .77.04 1.14.11.26.05.46.26.5.51l.17.98.8-.57c.21-.14.49-.15.71 0 .29.2.57.43.82.68.29.28.53.58.74.89.15.21.15.5 0 .71l-.58.81zM8 3.38v.02c-.13 0-.27.01-.41.02l-.16.94c-.04.23-.21.42-.43.49-.16.05-.32.11-.48.19-.21.1-.45.08-.64-.05l-.79-.56c-.12.1-.24.21-.35.32s-.2.21-.29.32l.55.77c.13.19.15.44.04.65-.08.14-.14.29-.2.47-.08.22-.26.38-.49.42l-.95.16c-.02.16-.02.32-.02.48 0 .15.01.29.02.43l.94.16c.23.04.42.21.49.43.05.15.11.31.19.47.1.21.08.45-.05.64l-.56.79c.1.12.21.24.32.35l.105.097q.104.101.215.193l.77-.55c.19-.13.44-.15.65-.04.14.08.29.14.47.2.22.08.38.26.42.49l.16.95c.3.03.62.03.9 0l.16-.94c.04-.23.21-.42.43-.49.15-.05.31-.11.47-.19.21-.1.45-.08.64.05l.79.55c.12-.1.24-.21.35-.32l.097-.105q.101-.105.193-.215L11 10.2a.63.63 0 0 1-.04-.65c.08-.14.14-.29.2-.47.08-.22.26-.38.49-.42l.95-.16c.02-.16.02-.32.02-.48s-.01-.3-.02-.43l-.94-.16a.63.63 0 0 1-.49-.43 3 3 0 0 0-.19-.48c-.1-.21-.08-.45.05-.64l.56-.79c-.1-.12-.21-.24-.32-.35s-.21-.2-.32-.29l-.77.55c-.19.13-.44.15-.65.04-.14-.08-.29-.14-.47-.2a.64.64 0 0 1-.42-.49l-.16-.95A4 4 0 0 0 8 3.38"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var gearSmallIcon = createIcon("gearSmall", iconDefinition);
export {
  iconDefinition,
  gearSmallIcon
};
