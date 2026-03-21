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

// src/nds-icons/src/handThumbsDown/fill.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m6.953 12.502 1.76 1.876c.293.375.576.938.846 1.475.179.356.352.7.519.972l.36.741c.322.527.976.741 1.551.527.624-.244.955-.917.77-1.56l-.507-1.775a5.3 5.3 0 0 0-.384-.917c-.138-.278-.276-.556-.376-.887a.404.404 0 0 1 .39-.517h4.095a1.22 1.22 0 0 0 1.218-1.218c0-.42-.224-.78-.555-.995.4-.195.672-.594.672-1.072a1.2 1.2 0 0 0-.819-1.141 1.21 1.21 0 0 0 .459-.936 1.21 1.21 0 0 0-1.21-1.219 1.22 1.22 0 0 0-.868-2.077h-4.308c-.722 0-1.424.166-2.068.488v.01l-1.423.487h-.122zM5.734 4.764v7.088H3.663a.975.975 0 0 1-.975-.975V5.74c0-.538.436-.975.974-.975z"
  }, undefined, false, undefined, this)
};
var handThumbsDownFillIcon = createIcon("handThumbsDownFill", iconDefinition);
export {
  iconDefinition,
  handThumbsDownFillIcon
};
