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

// src/nds-icons/src/globe/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M3.416 6.15c1.05.536 2.37.94 3.848 1.165a23 23 0 0 0-.141 2.135H2.395a7.6 7.6 0 0 1 1.021-3.3m.63-.914A7.62 7.62 0 0 1 8.848 2.46a3 3 0 0 0-.2.247c-.33.45-.603 1.069-.823 1.782-.16.517-.296 1.1-.406 1.735-1.313-.2-2.466-.548-3.373-.99m7.106-2.773q.108.119.2.247c.33.45.603 1.069.823 1.782.16.517.296 1.1.406 1.735 1.313-.2 2.466-.548 3.373-.99a7.62 7.62 0 0 0-4.802-2.774m5.432 3.689c-1.05.536-2.37.94-3.848 1.164a23 23 0 0 1 .141 2.136h4.728a7.6 7.6 0 0 0-1.021-3.3m1.022 4.4h-4.729c-.016.743-.064 1.46-.141 2.135 1.478.225 2.799.629 3.848 1.164a7.6 7.6 0 0 0 1.021-3.299m-1.651 4.214c-.907-.441-2.06-.789-3.373-.99a14 14 0 0 1-.405 1.736c-.22.713-.494 1.331-.823 1.782a3 3 0 0 1-.201.247 7.62 7.62 0 0 0 4.802-2.775m-7.106 2.775a3 3 0 0 1-.2-.247c-.33-.45-.603-1.069-.823-1.782a14 14 0 0 1-.406-1.736c-1.313.201-2.466.549-3.373.99a7.62 7.62 0 0 0 4.802 2.775m-5.432-3.69c1.05-.535 2.37-.939 3.848-1.164a23 23 0 0 1-.141-2.135H2.395a7.6 7.6 0 0 0 1.021 3.299m5.46-9.034c-.14.453-.263.97-.363 1.54a17.7 17.7 0 0 0 2.974 0 13 13 0 0 0-.363-1.54c-.202-.655-.43-1.145-.66-1.46-.238-.325-.401-.367-.464-.367s-.226.042-.464.368c-.229.314-.458.804-.66 1.459m0 10.37a13 13 0 0 1-.363-1.54 17.7 17.7 0 0 1 2.974 0c-.1.569-.223 1.087-.363 1.54-.202.655-.43 1.145-.66 1.46-.238.325-.401.367-.464.367s-.226-.042-.464-.368c-.229-.314-.458-.804-.66-1.459M10 12.483q.842 0 1.643.072c.072-.63.118-1.302.134-2.005H8.223c.016.703.062 1.375.134 2.005A19 19 0 0 1 10 12.483m1.777-3.033a22 22 0 0 0-.134-2.005 19 19 0 0 1-3.286 0 22 22 0 0 0-.134 2.005z"
  }, undefined, false, undefined, this)
};
var globeFillIcon = createIcon("globeFill", iconDefinition);
export {
  iconDefinition,
  globeFillIcon
};
