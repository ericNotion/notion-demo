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

// src/nds-icons/src/pencilScribble/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.465 3.12a.716.716 0 0 0-1.007 0l-.54.538 1.013 1.013.556-.556v-.012a.716.716 0 0 0-.022-.984M6.026 4.134c-.294 0-.585.069-.848.2l-.518.26a.625.625 0 0 0 .56 1.118l.517-.26a.65.65 0 0 1 .289-.068h.071a.576.576 0 0 1 .244 1.098L2.385 8.327a2.786 2.786 0 0 0 1.179 5.31h.062c.755 0 1.48-.3 2.014-.833l.135-.135a.625.625 0 0 0-.884-.884l-.135.135c-.3.3-.706.468-1.13.468h-.062a1.536 1.536 0 0 1-.65-2.928l3.955-1.846a1.826 1.826 0 0 0-.772-3.48z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.45 5.152 12.435 4.14 6.81 9.757a1 1 0 0 0-.21.349l-.237.764-.001.003c-.056.21.139.423.353.348l.759-.235a.8.8 0 0 0 .354-.212z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilScribbleSmallIcon = createIcon("pencilScribbleSmall", iconDefinition);
export {
  pencilScribbleSmallIcon,
  iconDefinition
};
