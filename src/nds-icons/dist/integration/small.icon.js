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

// src/nds-icons/src/integration/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.182 4.729a2.154 2.154 0 1 1-4.307 0 2.154 2.154 0 0 1 4.307 0m-1.1 0a1.054 1.054 0 1 0-2.107 0 1.054 1.054 0 0 0 2.107 0m2.071-.5a.5.5 0 0 0 0 1h.076a.5.5 0 1 0 0-1zm1.097.5a.5.5 0 0 1 .5-.5h.076a.5.5 0 0 1 0 1H8.75a.5.5 0 0 1-.5-.5M6.007 7.202a.5.5 0 1 0-.865.502l.038.065a.5.5 0 1 0 .865-.5zm4.647-.182a.5.5 0 0 1 .182.684l-.038.065a.5.5 0 0 1-.865-.5l.038-.067a.5.5 0 0 1 .683-.182M6.806 8.58a.5.5 0 0 0-.865.502l.038.066a.5.5 0 1 0 .865-.501zm3.05-.181a.5.5 0 0 1 .182.683L10 9.148a.5.5 0 1 1-.866-.501l.038-.066a.5.5 0 0 1 .684-.182m2.116-1.516a2.154 2.154 0 1 0 0-4.308 2.154 2.154 0 0 0 0 4.308m0-1.1a1.054 1.054 0 1 1 0-2.108 1.054 1.054 0 0 1 0 2.108M8 13.775a2.154 2.154 0 1 0 0-4.308 2.154 2.154 0 0 0 0 4.308m0-3.208a1.054 1.054 0 1 1 0 2.108 1.054 1.054 0 0 1 0-2.108"
  }, undefined, false, undefined, this)
};
var integrationSmallIcon = createIcon("integrationSmall", iconDefinition);
export {
  integrationSmallIcon,
  iconDefinition
};
