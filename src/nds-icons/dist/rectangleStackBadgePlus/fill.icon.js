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

// src/nds-icons/src/rectangleStackBadgePlus/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.75 2.55A.55.55 0 0 1 7.3 2h5.4a.55.55 0 0 1 0 1.1H7.3a.55.55 0 0 1-.55-.55M5.5 4.25a.55.55 0 1 0 0 1.1h9a.55.55 0 0 0 0-1.1zm-.412 2.175A2.125 2.125 0 0 0 2.963 8.55v2.967q.5-.116 1.037-.117a4.6 4.6 0 0 1 4.461 5.725h6.452A2.125 2.125 0 0 0 17.038 15V8.55a2.125 2.125 0 0 0-2.125-2.125z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.34 12.562a3.5 3.5 0 1 1 1.32 6.876 3.5 3.5 0 0 1-1.32-6.876m-1.934 3.47c0 .344.28.624.625.624h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375h1.375a.625.625 0 1 0 0-1.25H4.656v-1.375a.625.625 0 0 0-1.25 0v1.375H2.031a.625.625 0 0 0-.625.625"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var rectangleStackBadgePlusFillIcon = createIcon("rectangleStackBadgePlusFill", iconDefinition);
export {
  rectangleStackBadgePlusFillIcon,
  iconDefinition
};
