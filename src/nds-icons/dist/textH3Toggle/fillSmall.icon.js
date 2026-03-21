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

// src/nds-icons/src/textH3Toggle/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9672_13877)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M5.706 4.32a.75.75 0 1 0-1.5 0v7.36a.75.75 0 1 0 1.5 0V8.59h3.94v3.09a.75.75 0 1 0 1.5 0V4.32a.75.75 0 0 0-1.5 0v2.77h-3.94zm7.034 3.655c.082-.172.375-.4.837-.4.288 0 .526.09.68.207.152.117.193.233.193.314s-.041.197-.194.314a1.13 1.13 0 0 1-.679.207 1 1 0 0 0-.09.006h-.25a.625.625 0 1 0 0 1.25h.34c.322 0 .59.1.764.23.174.131.224.265.224.361s-.05.23-.224.36a1.28 1.28 0 0 1-.764.231c-.515 0-.847-.241-.95-.438a.625.625 0 0 0-1.108.577c.37.712 1.204 1.111 2.058 1.111.568 0 1.106-.173 1.516-.482s.722-.783.722-1.359c0-.511-.245-.942-.588-1.25.28-.287.473-.671.473-1.118 0-.553-.295-1.01-.685-1.307-.39-.298-.9-.464-1.438-.464-.817 0-1.625.4-1.965 1.11a.625.625 0 0 0 1.127.54M1.265 9.411a.65.65 0 0 1-.984-.558V6.897a.65.65 0 0 1 .984-.558l1.631.978a.65.65 0 0 1 0 1.116z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9672_13877",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textH3ToggleFillSmallIcon = createIcon("textH3ToggleFillSmall", iconDefinition);
export {
  textH3ToggleFillSmallIcon,
  iconDefinition
};
