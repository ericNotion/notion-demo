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

// src/nds-icons/src/commentPencil/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.978 1.434a.67.67 0 0 0-.946 0l-6.2 6.19a.9.9 0 0 0-.198.328l-.22.713-.001.003c-.054.2.131.402.336.33l.707-.218a.75.75 0 0 0 .332-.2l6.19-6.19a.1.1 0 0 0 .018-.028.673.673 0 0 0-.018-.928"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.063 2.869a1.89 1.89 0 0 0-1.888 1.887v5.25c0 1.043.845 1.888 1.888 1.888h3.569l2.551 2.073a.575.575 0 0 0 .938-.447v-1.626h.816a1.887 1.887 0 0 0 1.888-1.888v-5.25c0-.255-.05-.499-.143-.721a.075.075 0 0 0-.122-.024l-.863.863a.08.08 0 0 0-.022.053v5.08c0 .407-.33.737-.738.737h-1.391a.575.575 0 0 0-.575.575v.993l-1.772-1.44a.57.57 0 0 0-.363-.128H4.063a.74.74 0 0 1-.738-.738v-5.25c0-.407.33-.737.738-.737h5.146q.032 0 .053-.022l1.002-1a.075.075 0 0 0-.053-.128z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var commentPencilSmallIcon = createIcon("commentPencilSmall", iconDefinition);
export {
  iconDefinition,
  commentPencilSmallIcon
};
