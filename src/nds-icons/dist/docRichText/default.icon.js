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

// src/nds-icons/src/docRichText/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.134 5.001c-.236-.667-1.18-.667-1.415 0L6.28 9.084a.5.5 0 1 0 .943.332l.276-.784h1.857l.276.784a.5.5 0 0 0 .944-.332zm-.708 1.001.576 1.63h-1.15zM10.75 5a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1zm.313 3a.5.5 0 0 1 .5-.5h1.687a.5.5 0 0 1 0 1h-1.687a.5.5 0 0 1-.5-.5M6.75 10.708a.5.5 0 0 0-.5.5v3.715a.5.5 0 0 0 .845.362l1.101-1.05a.25.25 0 0 1 .347.003l.675.657a.5.5 0 0 0 .734-.038l1.189-1.435a.25.25 0 0 1 .375-.01l1.368 1.467a.5.5 0 0 0 .866-.341v-3.33a.5.5 0 0 0-.5-.5zm2.554 2.435a.696.696 0 1 1 0-1.393.696.696 0 0 1 0 1.393"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125v-11a2.125 2.125 0 0 0-2.125-2.125zM5.375 4.5c0-.483.392-.875.875-.875h7.5c.483 0 .875.392.875.875v11a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var docRichTextIcon = createIcon("docRichText", iconDefinition);
export {
  iconDefinition,
  docRichTextIcon
};
