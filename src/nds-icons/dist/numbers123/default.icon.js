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

// src/nds-icons/src/numbers123/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.793 6.767c-.816 0-1.472.465-1.71 1.036a.625.625 0 1 1-1.154-.482C6.38 6.242 7.52 5.517 8.794 5.517c1.618 0 3.068 1.181 3.068 2.786a2.62 2.62 0 0 1-.762 1.835l-3.312 3.095h3.637a.625.625 0 1 1 0 1.25h-5.22a.625.625 0 0 1-.427-1.081l4.453-4.163a1.37 1.37 0 0 0 .381-.936c0-.775-.742-1.536-1.818-1.536m7.576 0c-.868 0-1.508.425-1.724.877a.625.625 0 0 1-1.127-.54c.473-.99 1.629-1.587 2.85-1.587.799 0 1.546.247 2.107.675.56.429.962 1.066.962 1.819s-.401 1.39-.962 1.819l-.036.026q.085.056.165.116c.595.448 1.02 1.114 1.02 1.902s-.425 1.454-1.02 1.903c-.595.448-1.388.706-2.236.706-1.287 0-2.488-.6-3.008-1.6a.625.625 0 1 1 1.108-.577c.252.484.952.927 1.9.927.602 0 1.125-.185 1.484-.455.358-.27.522-.595.522-.904 0-.308-.164-.634-.522-.904-.359-.27-.882-.455-1.484-.455h-.554a.625.625 0 0 1 0-1.25h.44a1 1 0 0 1 .114-.01c.549 0 1.023-.17 1.348-.419.323-.247.47-.544.47-.825s-.147-.579-.47-.826c-.325-.247-.8-.418-1.348-.418M3.731 6.22l.005.078v7.56a.625.625 0 0 1-1.25 0V7.21l-1.182.658a.625.625 0 0 1-.608-1.092L2.806 5.6a.625.625 0 0 1 .925.62"
  }, undefined, false, undefined, this)
};
var numbers123Icon = createIcon("numbers123", iconDefinition);
export {
  numbers123Icon,
  iconDefinition
};
