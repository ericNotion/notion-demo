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

// src/nds-icons/src/starSlash/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8 1.95c-.27 0-.51.174-.594.431l-.578 1.777a.08.08 0 0 0 .015.072l.838.978a.075.075 0 0 0 .129-.025L8 4.597l.51 1.57q.005.013.014.025l.791.923a.08.08 0 0 0 .057.026h2.13l-1.268.92a.075.075 0 0 0-.013.11l.718.838c.026.03.07.035.101.012l2.752-2a.625.625 0 0 0-.367-1.13h-3.69l-1.14-3.51A.625.625 0 0 0 8 1.95m-4.025.393a.625.625 0 0 0-.95.814L5.37 5.89H2.575a.625.625 0 0 0-.367 1.13l2.985 2.17-1.14 3.509a.625.625 0 0 0 .962.699L8 11.229l2.986 2.17a.625.625 0 0 0 .784-.04l.912 1.063a.625.625 0 0 0 .949-.813l-.414-.483-.008-.008-9-10.5-.006-.008zm2.32 6.103L4.5 7.141h1.94l3.206 3.74-1.279-.93a.625.625 0 0 0-.734 0l-1.797 1.306.686-2.112a.625.625 0 0 0-.227-.699"
  }, undefined, false, undefined, this)
};
var starSlashSmallIcon = createIcon("starSlashSmall", iconDefinition);
export {
  starSlashSmallIcon,
  iconDefinition
};
