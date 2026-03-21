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

// src/nds-icons/src/textBelowPhoto/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.655 7.066a1.338 1.338 0 1 0 0-2.675 1.338 1.338 0 0 0 0 2.675"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.088 2.45A1.89 1.89 0 0 0 3.2 4.338v6.689c0 1.042.845 1.887 1.888 1.887h9.81a1.89 1.89 0 0 0 1.888-1.887v-6.69a1.89 1.89 0 0 0-1.888-1.887zM4.3 4.338c0-.435.353-.788.788-.788h9.81c.435 0 .788.353.788.788V8.11l-2.573-2.573a.55.55 0 0 0-.777 0L8.642 9.231 6.87 7.461a.55.55 0 0 0-.778 0L4.3 9.252zm0 6.47 2.182-2.18 1.77 1.77a.55.55 0 0 0 .778 0l3.695-3.694 2.96 2.961v1.362a.79.79 0 0 1-.787.787h-9.81a.79.79 0 0 1-.788-.787zm-1.1 3.874a.55.55 0 0 1 .55-.55h10.5a.55.55 0 0 1 0 1.1H3.75a.55.55 0 0 1-.55-.55M3.2 17a.55.55 0 0 1 .55-.55h7.1a.55.55 0 0 1 0 1.1h-7.1A.55.55 0 0 1 3.2 17"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textBelowPhotoIcon = createIcon("textBelowPhoto", iconDefinition);
export {
  textBelowPhotoIcon,
  iconDefinition
};
