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

// src/nds-icons/src/lineCurve/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M8.455 16.066c-.367.422-.855.747-1.473.747-.838 0-1.426-.584-1.83-1.227-.414-.658-.743-1.54-1.028-2.484-.28-.925-.53-1.957-.777-2.968l-.02-.084c-.255-1.046-.505-2.066-.782-2.962a.625.625 0 1 1 1.194-.37c.29.94.55 1.998.802 3.036l.017.067c.249 1.024.493 2.028.763 2.92.277.92.568 1.67.889 2.18.329.523.59.642.772.642.136 0 .308-.063.53-.318q.344-.394.683-1.226c.45-1.109.817-2.605 1.198-4.167l.008-.035c.371-1.52.757-3.103 1.246-4.306.246-.606.537-1.163.898-1.577.367-.422.855-.747 1.473-.747.837 0 1.422.586 1.824 1.228.412.657.74 1.54 1.024 2.482.276.913.526 1.93.77 2.929l.03.123c.256 1.046.508 2.066.788 2.961a.625.625 0 1 1-1.193.373c-.294-.94-.555-1.998-.81-3.037l-.026-.109c-.247-1.01-.489-1.998-.755-2.878-.278-.92-.568-1.67-.887-2.18-.33-.526-.587-.641-.765-.641-.136 0-.309.062-.53.317q-.345.394-.683 1.226c-.45 1.109-.817 2.605-1.198 4.167l-.008.035c-.371 1.52-.757 3.103-1.246 4.306-.247.606-.537 1.163-.898 1.577"
  }, undefined, false, undefined, this)
};
var lineCurveIcon = createIcon("lineCurve", iconDefinition);
export {
  lineCurveIcon,
  iconDefinition
};
