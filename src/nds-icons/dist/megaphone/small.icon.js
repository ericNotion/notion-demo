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

// src/nds-icons/src/megaphone/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M12.324 1.944c-.361 0-.715.1-1.023.289l-2.167 1.33c-.96.589-2.063.9-3.189.9H3.381A1.885 1.885 0 0 0 1.496 6.35v1.706c0 1.033.83 1.872 1.86 1.885l.926 3.074a1.465 1.465 0 0 0 1.403 1.042h.799c.809 0 1.465-.656 1.465-1.465V10.28c.412.143.81.331 1.185.562l2.167 1.33a1.955 1.955 0 0 0 2.978-1.667V3.9c0-1.08-.875-1.955-1.955-1.955M6.699 9.987v2.604a.215.215 0 0 1-.215.215h-.799a.215.215 0 0 1-.206-.153L4.662 9.94h1.283q.38 0 .754.047m5.57-6.791.055-.002c.39 0 .705.315.705.705v6.605a.706.706 0 0 1-.76.704zm-1 .523v6.965l-1.481-.909a7.4 7.4 0 0 0-1.933-.832V5.46a7.4 7.4 0 0 0 1.933-.833zM5.944 8.69H3.381a.635.635 0 0 1-.635-.634V6.349c0-.351.284-.635.635-.635h2.564q.459 0 .91-.057v3.09a7 7 0 0 0-.91-.057"
  }, undefined, false, undefined, this)
};
var megaphoneSmallIcon = createIcon("megaphoneSmall", iconDefinition);
export {
  megaphoneSmallIcon,
  iconDefinition
};
