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

// src/nds-icons/src/at/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M11.984 3.184a6.25 6.25 0 1 0-1.682 10.627.75.75 0 1 0-.553-1.395 4.75 4.75 0 1 1 2.737-2.854c-.08.23-.35.438-.76.438a.747.747 0 0 1-.747-.747V5.705a.75.75 0 0 0-1.44-.294 3.2 3.2 0 0 0-1.673-.456c-.822 0-1.604.287-2.183.86-.583.578-.908 1.392-.908 2.346 0 .953.324 1.776.9 2.364.574.586 1.357.895 2.19.895.782 0 1.522-.27 2.088-.786a2.24 2.24 0 0 0 1.773.866c.874 0 1.834-.463 2.177-1.445a6.25 6.25 0 0 0-1.92-6.87M6.275 8.161c0-.604.2-1.018.463-1.28.268-.264.656-.426 1.128-.426s.867.162 1.14.43c.27.263.471.676.471 1.276 0 .602-.202 1.033-.478 1.311a1.57 1.57 0 0 1-1.133.448c-.46 0-.847-.166-1.12-.445-.27-.276-.471-.708-.471-1.314"
  }, undefined, false, undefined, this)
};
var atFillSmallIcon = createIcon("atFillSmall", iconDefinition);
export {
  iconDefinition,
  atFillSmallIcon
};
