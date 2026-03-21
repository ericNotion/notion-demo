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

// src/nds-icons/src/gear/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M12.16 4.796a.47.47 0 0 1 .003.56l-.445.631a.54.54 0 0 0-.05.516l.004.007a.54.54 0 0 0 .402.337l.744.128c.206.036.37.196.395.403q.036.303.037.608V8q0 .345-.043.676a.47.47 0 0 1-.395.398l-.761.132a.54.54 0 0 0-.398.33l-.003.008a.55.55 0 0 0 .047.524l.434.614c.121.171.124.4-.005.565q-.188.24-.404.455l-.01.01a5 5 0 0 1-.508.447.47.47 0 0 1-.561.003l-.63-.444a.54.54 0 0 0-.516-.05l-.007.004a.54.54 0 0 0-.337.402l-.128.744a.47.47 0 0 1-.403.395 5 5 0 0 1-.608.037H8q-.344 0-.676-.043a.47.47 0 0 1-.398-.395l-.132-.761a.54.54 0 0 0-.331-.398l-.007-.003a.55.55 0 0 0-.524.047l-.614.434a.47.47 0 0 1-.565-.005 5 5 0 0 1-.455-.404l-.01-.01a5 5 0 0 1-.448-.508.47.47 0 0 1-.002-.561l.444-.63a.54.54 0 0 0 .05-.516l-.003-.007a.54.54 0 0 0-.403-.337l-.744-.128a.47.47 0 0 1-.395-.403 5 5 0 0 1-.037-.608V8q0-.345.043-.676a.47.47 0 0 1 .395-.398l.761-.132a.54.54 0 0 0 .398-.331l.003-.007a.55.55 0 0 0-.047-.524l-.434-.614a.47.47 0 0 1 .005-.565q.188-.24.404-.455l.01-.01a5 5 0 0 1 .508-.448.47.47 0 0 1 .561-.002l.63.444a.54.54 0 0 0 .516.05l.007-.004a.54.54 0 0 0 .337-.402l.128-.744a.47.47 0 0 1 .403-.395q.303-.036.608-.037H8q.345 0 .676.043a.47.47 0 0 1 .398.395l.132.76c.031.182.16.33.331.4l.007.002c.172.072.371.06.524-.047l.614-.434a.47.47 0 0 1 .565.005q.24.189.455.404l.01.01q.243.244.448.508M9.524 8a1.524 1.524 0 1 0-3.048 0 1.524 1.524 0 0 0 3.048 0"
  }, undefined, false, undefined, this)
};
var gearFillSmallIcon = createIcon("gearFillSmall", iconDefinition);
export {
  iconDefinition,
  gearFillSmallIcon
};
