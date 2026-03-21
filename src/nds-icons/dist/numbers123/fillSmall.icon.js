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

// src/nds-icons/src/numbers123/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M7.034 5.663c-.56 0-.988.32-1.137.675a.75.75 0 1 1-1.384-.578c.403-.964 1.412-1.597 2.521-1.597 1.403 0 2.705 1.03 2.705 2.48a2.35 2.35 0 0 1-.689 1.65l-2.186 2.043H9.14a.75.75 0 0 1 0 1.5H4.963a.75.75 0 0 1-.512-1.297l3.556-3.324a.84.84 0 0 0 .232-.573c0-.454-.452-.979-1.205-.979m6.061 0c-.622 0-1.031.306-1.153.56a.75.75 0 1 1-1.353-.648c.43-.899 1.458-1.412 2.506-1.412.689 0 1.341.213 1.837.592.497.38.868.957.868 1.654 0 .588-.266 1.092-.648 1.464.463.392.798.956.798 1.626 0 .727-.393 1.328-.916 1.722s-1.211.616-1.94.616c-1.096 0-2.157-.512-2.627-1.415a.75.75 0 0 1 1.33-.693c.148.284.607.608 1.298.608.433 0 .797-.134 1.037-.314s.318-.373.318-.524c0-.15-.08-.343-.318-.523-.24-.18-.604-.314-1.037-.314h-.443a.75.75 0 0 1 0-1.5h.33a1 1 0 0 1 .113-.008c.389 0 .714-.122.926-.284s.279-.331.279-.461-.067-.3-.279-.462-.537-.284-.926-.284m-9.859-.689.003.064v6.049a.75.75 0 0 1-1.5 0V6.192l-.574.32a.75.75 0 0 1-.73-1.31l1.688-.94a.75.75 0 0 1 1.113.712"
  }, undefined, false, undefined, this)
};
var numbers123FillSmallIcon = createIcon("numbers123FillSmall", iconDefinition);
export {
  numbers123FillSmallIcon,
  iconDefinition
};
