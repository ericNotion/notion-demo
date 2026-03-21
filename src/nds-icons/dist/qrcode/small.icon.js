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

// src/nds-icons/src/qrcode/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.61 4.32a.274.274 0 0 0-.274.275v.798c0 .151.123.274.275.274h.797a.274.274 0 0 0 .275-.274v-.798a.274.274 0 0 0-.275-.274z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.813 2.425c-.758 0-1.372.615-1.372 1.373V6.19c0 .758.614 1.373 1.372 1.373h2.393c.758 0 1.372-.615 1.372-1.373V3.798c0-.758-.614-1.373-1.372-1.373zm-.222 1.373c0-.123.1-.223.222-.223h2.393c.123 0 .222.1.222.223V6.19c0 .123-.1.223-.222.223H3.813a.223.223 0 0 1-.222-.223zm7.002.522a.274.274 0 0 0-.275.275v.798c0 .151.123.274.275.274h.797a.274.274 0 0 0 .275-.274v-.798a.274.274 0 0 0-.275-.274z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.795 2.425c-.758 0-1.373.615-1.373 1.373V6.19c0 .758.615 1.373 1.373 1.373h2.393c.758 0 1.372-.615 1.372-1.373V3.798c0-.758-.614-1.373-1.372-1.373zm-.223 1.373c0-.123.1-.223.223-.223h2.393c.122 0 .222.1.222.223V6.19c0 .123-.1.223-.222.223H9.795a.223.223 0 0 1-.223-.223zM4.61 10.303a.274.274 0 0 0-.274.274v.797c0 .152.123.275.275.275h.797a.274.274 0 0 0 .275-.274v-.798a.274.274 0 0 0-.275-.274z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.813 8.407c-.758 0-1.372.614-1.372 1.372v2.393c0 .758.614 1.373 1.372 1.373h2.393c.758 0 1.372-.615 1.372-1.373V9.779c0-.758-.614-1.372-1.372-1.372zm-.222 1.372c0-.123.1-.222.222-.222h2.393c.123 0 .222.1.222.222v2.393c0 .123-.1.223-.222.223H3.813a.223.223 0 0 1-.222-.223zm5.271-1.207a.274.274 0 0 0-.275.274v.878c0 .151.123.274.275.274h.877a.274.274 0 0 0 .274-.274v-.878a.274.274 0 0 0-.274-.274zm3.39 0a.274.274 0 0 0-.275.274v.878c0 .151.123.274.275.274h.877a.274.274 0 0 0 .274-.274v-.878a.274.274 0 0 0-.274-.274zm-1.699 1.691a.274.274 0 0 0-.275.274v.877c0 .152.123.275.275.275h.877a.274.274 0 0 0 .274-.275v-.877a.274.274 0 0 0-.274-.274zm-1.691 1.698a.274.274 0 0 0-.275.275v.877c0 .152.123.274.275.274h.877a.274.274 0 0 0 .274-.274v-.877a.274.274 0 0 0-.274-.275zm3.39 0a.274.274 0 0 0-.275.275v.877c0 .152.123.274.275.274h.877a.274.274 0 0 0 .274-.274v-.877a.274.274 0 0 0-.274-.275z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var qrcodeSmallIcon = createIcon("qrcodeSmall", iconDefinition);
export {
  qrcodeSmallIcon,
  iconDefinition
};
