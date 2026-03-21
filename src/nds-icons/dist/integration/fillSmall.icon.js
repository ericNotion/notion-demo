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

// src/nds-icons/src/integration/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M6.182 4.729a2.154 2.154 0 1 1-4.307 0 2.154 2.154 0 0 1 4.307 0m.471 0a.5.5 0 0 1 .5-.5h.076a.5.5 0 0 1 0 1h-.076a.5.5 0 0 1-.5-.5m1.597 0a.5.5 0 0 1 .5-.5h.075a.5.5 0 0 1 0 1H8.75a.5.5 0 0 1-.5-.5M5.324 7.02a.5.5 0 0 1 .683.182l.038.066a.5.5 0 1 1-.865.501l-.038-.065a.5.5 0 0 1 .182-.684m5.33 0a.5.5 0 0 1 .182.684l-.038.065a.5.5 0 0 1-.865-.5l.038-.067a.5.5 0 0 1 .683-.182M6.123 8.399a.5.5 0 0 1 .683.182l.038.066a.5.5 0 1 1-.866.5l-.038-.065a.5.5 0 0 1 .183-.683m3.733 0a.5.5 0 0 1 .182.683L10 9.148a.5.5 0 1 1-.866-.501l.038-.066a.5.5 0 0 1 .684-.182m4.27-3.67a2.154 2.154 0 1 1-4.308 0 2.154 2.154 0 0 1 4.308 0m-3.972 6.892a2.154 2.154 0 1 1-4.308 0 2.154 2.154 0 0 1 4.308 0"
  }, undefined, false, undefined, this)
};
var integrationFillSmallIcon = createIcon("integrationFillSmall", iconDefinition);
export {
  integrationFillSmallIcon,
  iconDefinition
};
