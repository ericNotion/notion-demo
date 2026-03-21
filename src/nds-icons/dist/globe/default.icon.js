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

// src/nds-icons/src/globe/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m3.123-4.514c.55.252 1.21.463 1.953.612q.135-.585.308-1.086a6.6 6.6 0 0 1 .512-1.15 6.4 6.4 0 0 0-2.773 1.624m-.814.994a6.34 6.34 0 0 0-1.029 2.895h3.396c.022-.715.081-1.403.173-2.048-.962-.191-1.827-.48-2.54-.847m-1.029 4.145a6.34 6.34 0 0 0 1.03 2.895c.712-.367 1.577-.656 2.54-.848a19 19 0 0 1-.174-2.047zm4.647 0c.021.657.076 1.283.158 1.862a15 15 0 0 1 3.08 0c.082-.58.137-1.205.158-1.862zm4.647 0a19 19 0 0 1-.173 2.048c.845.169 1.615.412 2.274.717a.6.6 0 0 1 .23.182 6.34 6.34 0 0 0 1.065-2.947zm3.396-1.25a6.34 6.34 0 0 0-1.03-2.895c-.712.367-1.577.656-2.54.847.093.645.152 1.333.174 2.048zm-4.647 0a17 17 0 0 0-.158-1.862 15 15 0 0 1-3.08 0c-.082.58-.137 1.205-.158 1.862zm-6.2 5.139a6.4 6.4 0 0 0 2.773 1.624 6.6 6.6 0 0 1-.512-1.15 11 11 0 0 1-.308-1.086 9 9 0 0 0-1.953.612m9.004 0a9 9 0 0 0-1.953-.611q-.135.584-.308 1.085a6.6 6.6 0 0 1-.512 1.15 6.4 6.4 0 0 0 2.773-1.624m-3.443.067q.136-.395.249-.86a13.7 13.7 0 0 0-2.615-.001q.111.466.248.861c.198.575.42.995.635 1.259.22.269.366.302.424.302s.205-.033.424-.302c.215-.264.437-.684.635-1.259m3.443-9.095a6.4 6.4 0 0 0-2.773-1.624c.196.337.366.726.512 1.15q.173.501.308 1.086a9 9 0 0 0 1.953-.612M10 6.342q.676-.001 1.308-.062a9 9 0 0 0-.249-.861c-.198-.575-.42-.995-.635-1.259-.22-.269-.366-.302-.424-.302s-.204.033-.424.302c-.215.264-.437.684-.635 1.259q-.136.395-.248.861.631.061 1.307.062"
  }, undefined, false, undefined, this)
};
var globeIcon = createIcon("globe", iconDefinition);
export {
  iconDefinition,
  globeIcon
};
