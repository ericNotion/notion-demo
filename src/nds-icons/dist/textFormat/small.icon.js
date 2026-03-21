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

// src/nds-icons/src/textFormat/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    fillRule: "evenodd",
    d: "m6.947 10.005.87 2.352a.625.625 0 0 0 1.172-.433l-2.99-8.09a.916.916 0 0 0-1.718 0l-2.99 8.09a.625.625 0 0 0 1.173.433l.869-2.352zm-.462-1.25L5.14 5.115l-1.345 3.64zm7.637-1.905c.345 0 .625.28.625.625v4.665a.625.625 0 0 1-1.243.094 2.75 2.75 0 0 1-1.65.531 2.7 2.7 0 0 1-1.972-.822c-.514-.537-.804-1.288-.804-2.16 0-.874.29-1.616.81-2.142.519-.524 1.222-.79 1.967-.79.6 0 1.177.173 1.652.515a.625.625 0 0 1 .615-.516m-3.794 2.933c0-.59.191-1.002.45-1.264.26-.263.632-.419 1.076-.419s.824.157 1.09.422c.262.263.456.674.456 1.26 0 1.137-.72 1.733-1.546 1.733a1.45 1.45 0 0 1-1.07-.437c-.264-.276-.456-.704-.456-1.295",
    clipRule: "evenodd"
  }, undefined, false, undefined, this)
};
var textFormatSmallIcon = createIcon("textFormatSmall", iconDefinition);
export {
  textFormatSmallIcon,
  iconDefinition
};
