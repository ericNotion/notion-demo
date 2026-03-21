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

// src/nds-icons/src/collection/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10 2.375c-1.778 0-3.415.256-4.63.69-.604.216-1.138.488-1.532.82-.391.331-.713.784-.713 1.347q0 .157.032.304h-.032v9.232c0 .563.322 1.016.713 1.346.394.333.928.605 1.532.82 1.215.435 2.852.691 4.63.691s3.415-.256 4.63-.69c.604-.216 1.138-.488 1.532-.82.391-.331.713-.784.713-1.347V5.536h-.032q.031-.147.032-.304c0-.563-.322-1.016-.713-1.346-.394-.333-.928-.605-1.532-.82-1.215-.435-2.852-.691-4.63-.691M4.375 5.232c0-.053.028-.188.27-.391.238-.201.62-.41 1.146-.599 1.047-.374 2.535-.617 4.209-.617s3.162.243 4.21.617c.526.188.907.398 1.146.599.24.203.269.338.269.391s-.028.188-.27.391c-.238.202-.62.41-1.146.599-1.047.374-2.535.617-4.209.617s-3.162-.243-4.21-.617c-.526-.188-.907-.397-1.146-.599-.24-.203-.269-.338-.269-.39m11.25 1.718V10c0 .053-.028.188-.27.391-.238.201-.62.41-1.146.599-1.047.374-2.535.617-4.209.617s-3.162-.243-4.21-.617c-.526-.188-.907-.398-1.146-.599-.24-.203-.269-.338-.269-.391V6.95c.297.17.633.32.995.45 1.215.433 2.852.69 4.63.69s3.415-.257 4.63-.69c.362-.13.698-.28.995-.45m-11.25 7.818v-3.05c.297.17.633.32.995.449 1.215.434 2.852.69 4.63.69s3.415-.256 4.63-.69c.362-.13.698-.279.995-.45v3.05c0 .054-.028.189-.27.392-.238.201-.62.41-1.146.599-1.047.374-2.535.617-4.209.617s-3.162-.243-4.21-.617c-.526-.188-.907-.398-1.146-.599-.24-.203-.269-.338-.269-.391"
  }, undefined, false, undefined, this)
};
var collectionIcon = createIcon("collection", iconDefinition);
export {
  iconDefinition,
  collectionIcon
};
