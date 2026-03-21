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

// src/nds-icons/src/arrowShapeUpRight/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.962 2.213c.226-.1.49-.058.673.107l5.84 5.272a.625.625 0 0 1-.005.933l-5.84 5.152a.625.625 0 0 1-1.039-.47v-2.384h-.01l-.114-.003c-.102 0-.251 0-.438.011-.374.02-.887.075-1.444.212-1.127.276-2.347.862-3.043 2.076a.625.625 0 0 1-.994.12.62.62 0 0 1-.18-.44q.001-1.322.167-2.36c.229-1.456 1.115-2.767 2.218-3.705 1.1-.936 2.492-1.567 3.815-1.567h.023V2.784c0-.247.146-.47.371-.571M2.713 11.04c.818-.65 1.76-1.011 2.574-1.211a9.2 9.2 0 0 1 2.19-.259q.095 0 .148.003l.039.002h.552c.345 0 .625.28.625.625v1.623l4.276-3.772-4.276-3.86v1.601c0 .345-.28.625-.625.625h-.648c-.949 0-2.064.469-3.005 1.269-.937.797-1.622 1.858-1.794 2.947q-.031.197-.056.407"
  }, undefined, false, undefined, this)
};
var arrowShapeUpRightSmallIcon = createIcon("arrowShapeUpRightSmall", iconDefinition);
export {
  iconDefinition,
  arrowShapeUpRightSmallIcon
};
