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

// src/nds-icons/src/questionMarkSquareDashed/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M4.5 2.375q-.262 0-.508.061A.625.625 0 1 0 4.29 3.65a1 1 0 0 1 .21-.025h.538a.625.625 0 1 0 0-1.25zm2.962 0a.625.625 0 1 0 0 1.25h1.076a.625.625 0 1 0 0-1.25zm3.5 0a.625.625 0 0 0 0 1.25h.538q.11 0 .21.025a.625.625 0 0 0 .298-1.214 2 2 0 0 0-.508-.061zm-7.77 1.159a.625.625 0 0 0-.756.458q-.06.246-.061.508v.538a.625.625 0 1 0 1.25 0V4.5q0-.11.025-.21a.625.625 0 0 0-.458-.756m10.372.458a.625.625 0 0 0-1.214.298 1 1 0 0 1 .025.21v.538a.625.625 0 1 0 1.25 0V4.5q0-.262-.061-.508m-5.584.464c-1.044 0-2.053.604-2.298 1.584a.575.575 0 1 0 1.116.279c.083-.334.513-.713 1.183-.713.79 0 1.204.49 1.204.85 0 .219-.134.47-.443.658l-.011.006-.67.458-.003.002a1.82 1.82 0 0 0-.803 1.488.575.575 0 1 0 1.15 0c0-.193.102-.4.306-.541l.642-.44c.554-.342.982-.92.982-1.63 0-1.22-1.179-2-2.354-2M3 6.837a.625.625 0 0 0-.625.625v1.076a.625.625 0 1 0 1.25 0V7.462A.625.625 0 0 0 3 6.837m10 0a.625.625 0 0 0-.625.625v1.076a.625.625 0 1 0 1.25 0V7.462A.625.625 0 0 0 13 6.837m-5.137 3.304a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M3 10.337a.625.625 0 0 0-.625.624v.539q0 .262.061.508a.625.625 0 0 0 1.214-.298 1 1 0 0 1-.025-.21v-.539A.625.625 0 0 0 3 10.337m10 0a.625.625 0 0 0-.625.624v.539a1 1 0 0 1-.025.21.625.625 0 1 0 1.214.298q.06-.246.061-.508v-.539a.625.625 0 0 0-.625-.625M4.29 12.35a.625.625 0 1 0-.298 1.214q.246.06.508.061h.538a.625.625 0 1 0 0-1.25H4.5a1 1 0 0 1-.21-.025m8.176.458a.625.625 0 0 0-.756-.458 1 1 0 0 1-.21.025h-.539a.625.625 0 0 0 0 1.25h.539q.262 0 .508-.061a.625.625 0 0 0 .458-.756m-5.004-.433a.625.625 0 1 0 0 1.25h1.076a.625.625 0 1 0 0-1.25z"
  }, undefined, false, undefined, this)
};
var questionMarkSquareDashedSmallIcon = createIcon("questionMarkSquareDashedSmall", iconDefinition);
export {
  questionMarkSquareDashedSmallIcon,
  iconDefinition
};
