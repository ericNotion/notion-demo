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

// src/nds-icons/src/textH3/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.302 3.11a.75.75 0 0 1 .75.75v3.21h4.62V3.86a.75.75 0 1 1 1.5 0v8.28a.75.75 0 0 1-1.5 0V8.57h-4.62v3.57a.75.75 0 0 1-1.5 0V3.86a.75.75 0 0 1 .75-.75m9.642 4.636c-.483 0-.772.237-.847.395a.75.75 0 1 1-1.354-.647c.384-.803 1.293-1.248 2.201-1.248.6 0 1.17.185 1.607.519s.772.85.772 1.477c0 .48-.196.895-.485 1.214.357.34.61.809.61 1.361 0 .653-.353 1.188-.813 1.535-.46.346-1.06.538-1.691.538-.948 0-1.882-.443-2.3-1.246a.75.75 0 1 1 1.33-.693c.096.185.428.439.97.439.336 0 .613-.104.789-.236.175-.132.215-.259.215-.337 0-.077-.04-.204-.215-.336a1.33 1.33 0 0 0-.789-.236h-.369a.75.75 0 0 1 0-1.5h.267a1 1 0 0 1 .102-.007c.3 0 .543-.094.696-.21.152-.117.183-.225.183-.286 0-.062-.03-.17-.183-.285a1.16 1.16 0 0 0-.696-.211"
  }, undefined, false, undefined, this)
};
var textH3FillSmallIcon = createIcon("textH3FillSmall", iconDefinition);
export {
  textH3FillSmallIcon,
  iconDefinition
};
