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

// src/nds-icons/src/pencilScribble/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m18.14 5.156-.726.726-1.31-1.31.697-.695a.926.926 0 0 1 1.303 0 .926.926 0 0 1 .036 1.264zm-11.71.179c.343-.172.72-.26 1.103-.26h.089a2.376 2.376 0 0 1 1.005 4.528L3.682 11.91a1.826 1.826 0 0 0 .773 3.481h.077c.505 0 .99-.2 1.347-.558l.168-.168a.875.875 0 0 1 1.238 1.237l-.169.169a3.65 3.65 0 0 1-2.584 1.07h-.077a3.576 3.576 0 0 1-1.513-6.817l4.944-2.307a.626.626 0 0 0-.264-1.193h-.09a.7.7 0 0 0-.319.076l-.647.323a.875.875 0 0 1-.782-1.565z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m16.856 6.44-7.05 7.05a1 1 0 0 1-.455.272l-.947.294c-.295.103-.557-.19-.482-.473l.002-.004.296-.958c.058-.158.147-.323.27-.447l7.056-7.044z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilScribbleFillIcon = createIcon("pencilScribbleFill", iconDefinition);
export {
  pencilScribbleFillIcon,
  iconDefinition
};
