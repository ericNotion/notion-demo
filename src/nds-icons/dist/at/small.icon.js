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

// src/nds-icons/src/at/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.904 3.28a6.125 6.125 0 1 0-1.648 10.415.625.625 0 1 0-.46-1.163 4.875 4.875 0 1 1 2.808-2.93c-.102.294-.43.523-.878.523a.87.87 0 0 1-.872-.872V5.705a.625.625 0 0 0-1.242-.098 3.04 3.04 0 0 0-1.746-.527c-.792 0-1.542.277-2.095.825-.557.55-.871 1.332-.871 2.256s.313 1.714.864 2.276 1.3.858 2.102.858c.8 0 1.55-.294 2.104-.85a2.12 2.12 0 0 0 1.756.93c.835 0 1.738-.441 2.058-1.361a6.125 6.125 0 0 0-1.88-6.734M6.65 6.793c.294-.29.715-.463 1.216-.463.5 0 .929.173 1.228.466.296.289.508.735.508 1.365 0 .631-.213 1.095-.515 1.4-.303.306-.73.484-1.221.484-.49 0-.91-.178-1.209-.482-.296-.303-.507-.767-.507-1.402 0-.633.21-1.08.5-1.368"
  }, undefined, false, undefined, this)
};
var atSmallIcon = createIcon("atSmall", iconDefinition);
export {
  iconDefinition,
  atSmallIcon
};
