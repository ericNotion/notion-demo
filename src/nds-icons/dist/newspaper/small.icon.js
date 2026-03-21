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

// src/nds-icons/src/newspaper/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.104 4.428h-4.2a.575.575 0 1 0 0 1.15h4.2a.575.575 0 0 0 0-1.15m0 1.996h-4.2a.575.575 0 1 0 0 1.15h4.2a.575.575 0 0 0 0-1.15m-4.2 1.998a.575.575 0 0 0-.575.575v2c0 .318.257.575.575.575h4.2a.575.575 0 0 0 .575-.575v-2a.575.575 0 0 0-.575-.575zm.575 2v-.85h3.05v.85z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.704 2.425c-.76 0-1.375.616-1.375 1.375v3.631H2.504a.575.575 0 0 0-.575.575v3.737c0 .988.768 1.832 1.775 1.832h8.2c.98 0 1.775-.795 1.775-1.775v-8c0-.76-.616-1.375-1.375-1.375zM5.479 3.8c0-.124.1-.225.225-.225h6.6c.124 0 .225.1.225.225v8c0 .345-.28.625-.625.625h-6.52q.093-.26.095-.557zm-2.4 7.943V8.581h1.25v3.171c-.004.395-.301.67-.62.673h-.007c-.321 0-.623-.28-.623-.682"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var newspaperSmallIcon = createIcon("newspaperSmall", iconDefinition);
export {
  newspaperSmallIcon,
  iconDefinition
};
