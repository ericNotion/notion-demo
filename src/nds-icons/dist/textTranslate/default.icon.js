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

// src/nds-icons/src/textTranslate/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M14.776 5.217a.625.625 0 1 0-1.25 0v.967H9.524a.625.625 0 1 0 0 1.25h6.688c-.32.87-.963 2.091-2.06 3.375a12.8 12.8 0 0 1-1.48-2.122.625.625 0 1 0-1.095.603c.415.754.978 1.589 1.717 2.438a16.3 16.3 0 0 1-3.341 2.512.625.625 0 0 0 .62 1.085 17.6 17.6 0 0 0 3.58-2.688 17.6 17.6 0 0 0 3.577 2.688.625.625 0 1 0 .622-1.085 16.3 16.3 0 0 1-3.342-2.512c1.42-1.632 2.196-3.216 2.52-4.294h1.251a.625.625 0 1 0 0-1.25h-4.005zm-8.014 7.16.958 2.62a.625.625 0 0 0 1.174-.43L5.645 5.683a.94.94 0 0 0-1.765 0L.632 14.568a.625.625 0 1 0 1.174.43l.958-2.621zm-.457-1.25H3.221l1.542-4.219z"
  }, undefined, false, undefined, this)
};
var textTranslateIcon = createIcon("textTranslate", iconDefinition);
export {
  textTranslateIcon,
  iconDefinition
};
