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

// src/nds-icons/src/docTextMagnifyingGlass/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.25 2.125c-1.036 0-1.875.84-1.875 1.875v8c0 1.036.84 1.875 1.875 1.875h3.348l-.076-.116a3.9 3.9 0 0 1-.497-1.08l-.015-.054H5.25A.625.625 0 0 1 4.625 12V4c0-.345.28-.625.625-.625h5.5c.345 0 .625.28.625.625v3.697l.082-.007a4 4 0 0 1 1.079.054l.089.017V4c0-1.036-.84-1.875-1.875-1.875z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.75 4.175a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm0 2a.575.575 0 1 0 0 1.15h4.5a.575.575 0 1 0 0-1.15zm6.05 2.4a3.025 3.025 0 1 0 1.62 5.58l.91 1.056a.625.625 0 0 0 .94-.823l-.954-1.108A3.025 3.025 0 0 0 11.8 8.575M10.025 11.6a1.775 1.775 0 1 1 3.55 0 1.775 1.775 0 0 1-3.55 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var docTextMagnifyingGlassSmallIcon = createIcon("docTextMagnifyingGlassSmall", iconDefinition);
export {
  iconDefinition,
  docTextMagnifyingGlassSmallIcon
};
