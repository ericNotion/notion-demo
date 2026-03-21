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

// src/nds-icons/src/textH3/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.302 3.285a.575.575 0 0 0-.575.575v8.28a.575.575 0 0 0 1.15 0V8.395h4.97v3.745a.575.575 0 0 0 1.15 0V3.86a.575.575 0 0 0-1.15 0v3.385h-4.97V3.86a.575.575 0 0 0-.575-.575m9.642 3.136c-.859 0-1.695.42-2.043 1.148a.575.575 0 1 0 1.038.496c.111-.233.473-.494 1.005-.494.334 0 .616.104.802.246s.252.297.252.425-.066.283-.252.424a1.33 1.33 0 0 1-.802.247q-.045 0-.09.007h-.279a.575.575 0 0 0 0 1.15h.369c.37 0 .685.114.894.271s.285.331.285.476c0 .146-.077.32-.285.476a1.5 1.5 0 0 1-.894.272c-.589 0-.992-.275-1.126-.533a.575.575 0 1 0-1.02.531c.381.732 1.246 1.152 2.146 1.152.597 0 1.16-.182 1.586-.503s.743-.809.743-1.395c0-.561-.29-1.032-.69-1.353.332-.304.565-.727.565-1.222 0-.562-.3-1.03-.703-1.338a2.48 2.48 0 0 0-1.5-.483"
  }, undefined, false, undefined, this)
};
var textH3SmallIcon = createIcon("textH3Small", iconDefinition);
export {
  textH3SmallIcon,
  iconDefinition
};
