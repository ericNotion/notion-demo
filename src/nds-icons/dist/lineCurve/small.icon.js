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

// src/nds-icons/src/lineCurve/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M10.415 2.425c-.543 0-.965.286-1.273.64-.303.347-.541.807-.74 1.297-.395.97-.705 2.244-1 3.455l-.01.035c-.305 1.253-.596 2.44-.952 3.316q-.269.656-.524.946c-.163.187-.27.211-.33.211-.082 0-.257-.049-.512-.455-.248-.393-.476-.98-.698-1.713-.214-.71-.409-1.51-.609-2.33l-.012-.053c-.202-.83-.41-1.68-.644-2.436a.625.625 0 0 0-1.194.37c.22.712.42 1.524.623 2.362l.017.068c.196.808.398 1.637.623 2.38.228.757.495 1.476.835 2.017.331.526.834 1.04 1.57 1.04.543 0 .965-.286 1.273-.64.302-.347.541-.807.74-1.296.395-.971.705-2.245 1-3.456l.01-.035c.305-1.253.596-2.44.952-3.316q.269-.655.524-.946c.163-.187.27-.211.33-.211.077 0 .251.047.506.454.247.394.475.981.696 1.714.212.7.405 1.488.603 2.297l.021.087c.203.83.413 1.68.65 2.437a.625.625 0 0 0 1.192-.373c-.222-.712-.423-1.524-.628-2.361l-.024-.1a47 47 0 0 0-.617-2.348c-.229-.757-.495-1.476-.833-2.016-.329-.525-.83-1.041-1.565-1.041"
  }, undefined, false, undefined, this)
};
var lineCurveSmallIcon = createIcon("lineCurveSmall", iconDefinition);
export {
  lineCurveSmallIcon,
  iconDefinition
};
