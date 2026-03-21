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

// src/nds-icons/src/handbag/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m4.697 6.01.368-2.208A2.65 2.65 0 0 1 7.68 1.587h.642a2.65 2.65 0 0 1 2.614 2.215l.368 2.208q.39.045.777.101c.297.043.568.163.793.34l-.427.65c-2.194 2.827-6.717 2.822-8.903-.015L3.067 6.5c.235-.203.529-.342.853-.389q.389-.055.777-.101M6.15 3.983 5.83 5.9a28.6 28.6 0 0 1 4.34 0l-.32-1.918a1.55 1.55 0 0 0-1.529-1.296H7.68a1.55 1.55 0 0 0-1.53 1.297"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m13.271 7.665.194-.295q.024.097.036.198l.46 3.88a1.95 1.95 0 0 1-1.937 2.18H3.976a1.95 1.95 0 0 1-1.937-2.18l.46-3.88q.01-.075.025-.15l.23.283c1.142 1.48 2.813 2.306 4.546 2.481v1.059c0 .193.157.35.35.35h.7a.35.35 0 0 0 .35-.35v-1.059c1.735-.175 3.408-1.004 4.55-2.486z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var handbagFillSmallIcon = createIcon("handbagFillSmall", iconDefinition);
export {
  iconDefinition,
  handbagFillSmallIcon
};
