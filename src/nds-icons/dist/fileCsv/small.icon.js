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

// src/nds-icons/src/fileCsv/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.125 2.125a1.75 1.75 0 0 0-1.75 1.75v8.25c0 .966.784 1.75 1.75 1.75h5.75c.756 0 1.4-.479 1.644-1.15a.075.075 0 0 0-.07-.1H5.125a.5.5 0 0 1-.5-.5v-.134a1 1 0 0 1-.006-.091V7.7a1 1 0 0 1 .006-.091V3.875a.5.5 0 0 1 .5-.5h2.604v1.831c0 .929.713 1.691 1.622 1.769h3.199a.075.075 0 0 0 .075-.075v-.309c0-.464-.184-.91-.513-1.237L9.396 2.638a1.75 1.75 0 0 0-1.237-.513zm3.754 3.081V3.888l1.943 1.943H9.504a.625.625 0 0 1-.625-.625"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M10.606 7.76c-.38 0-.753.089-1.049.286-.304.203-.533.533-.533.955 0 .358.134.688.43.939.267.227.632.359 1.047.439l.008.001c.343.066.51.152.582.214a.2.2 0 0 1 .051.063.2.2 0 0 1 .015.09.1.1 0 0 1-.01.036.2.2 0 0 1-.066.063c-.086.057-.246.113-.476.113-.441 0-.606-.184-.642-.237a.515.515 0 1 0-.849.583c.23.335.714.684 1.491.684.38 0 .753-.09 1.048-.287.305-.203.534-.533.534-.955 0-.358-.134-.688-.43-.938-.267-.228-.632-.36-1.047-.44h-.008c-.344-.066-.51-.153-.582-.215a.2.2 0 0 1-.051-.062.2.2 0 0 1-.015-.09q-.001-.017.01-.037a.2.2 0 0 1 .066-.063c.086-.057.246-.113.475-.113.442 0 .607.185.643.237a.515.515 0 1 0 .849-.583c-.23-.335-.714-.684-1.492-.684m-2.213.271c-.54-.305-1.304-.37-1.95-.106-.693.284-1.218.935-1.218 1.95s.525 1.667 1.219 1.95c.645.264 1.41.2 1.95-.105a.515.515 0 1 0-.507-.897c-.265.149-.7.193-1.054.049a.87.87 0 0 1-.403-.321c-.105-.156-.175-.373-.175-.676 0-.302.07-.52.175-.676a.87.87 0 0 1 .403-.32c.355-.145.79-.1 1.054.048a.515.515 0 1 0 .506-.896m5.031.202a.515.515 0 0 0-.968.352l1.066 2.933a.515.515 0 0 0 .968 0l1.067-2.933a.515.515 0 0 0-.968-.352l-.583 1.602z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fileCsvSmallIcon = createIcon("fileCsvSmall", iconDefinition);
export {
  iconDefinition,
  fileCsvSmallIcon
};
