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

// src/nds-icons/src/fish/fill.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10823_12086)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "m19.065 9.728-.043-.09a8.76 8.76 0 0 0-4.81-4.439 6.86 6.86 0 0 0-5.656-2.971h-2.07a.55.55 0 0 0-.44.88l1.638 2.177a8.8 8.8 0 0 0-3.048 2.122l-.062.067-2.73-1.8a.625.625 0 0 0-.969.521v7.535a.625.625 0 0 0 .97.521l2.687-1.773.104.112a8.8 8.8 0 0 0 3.05 2.123l-1.64 2.178a.55.55 0 0 0 .44.88h2.07a6.86 6.86 0 0 0 5.66-2.975 8.76 8.76 0 0 0 4.806-4.436l.043-.09a.63.63 0 0 0 0-.542m-11.477-6.4h.968c1.383 0 2.684.494 3.71 1.355a9 9 0 0 0-1.19-.085c-.784 0-1.552.115-2.294.316zm.968 13.344h-.968l1.195-1.589c.742.201 1.51.316 2.293.316a9 9 0 0 0 1.194-.085 5.77 5.77 0 0 1-3.714 1.358m6.225-5.788a.884.884 0 1 1 0-1.768.884.884 0 0 1 0 1.768"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10823_12086",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fishFillIcon = createIcon("fishFill", iconDefinition);
export {
  iconDefinition,
  fishFillIcon
};
