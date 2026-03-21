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

// src/nds-icons/src/integration/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m.697 0a.55.55 0 0 1 .55-.55h.098a.55.55 0 0 1 0 1.1h-.097a.55.55 0 0 1-.55-.55m2.053 0a.55.55 0 0 1 .55-.55h.098a.55.55 0 0 1 0 1.1h-.098a.55.55 0 0 1-.55-.55m2.952 3.026a.55.55 0 0 1 .2.753l-.049.084a.55.55 0 0 1-.952-.551l.05-.085a.55.55 0 0 1 .75-.2M6.606 8.82a.55.55 0 0 1 .752.201l.049.085a.55.55 0 0 1-.952.55l-.049-.083a.55.55 0 0 1 .2-.752m5.734 1.772a.55.55 0 0 1 .2.752l-.05.084a.55.55 0 1 1-.951-.551l.049-.085a.55.55 0 0 1 .751-.2m-4.706 0a.55.55 0 0 1 .751.2l.05.085a.55.55 0 0 1-.953.551l-.048-.084a.55.55 0 0 1 .2-.752m10.243-4.799a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-5.106 8.862a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0"
  }, undefined, false, undefined, this)
};
var integrationFillIcon = createIcon("integrationFill", iconDefinition);
export {
  integrationFillIcon,
  iconDefinition
};
