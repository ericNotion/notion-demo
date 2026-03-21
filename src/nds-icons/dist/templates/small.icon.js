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

// src/nds-icons/src/templates/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9410_11368)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "m14.98 12.41-1.86-3.22c.55-.25.91-.8.91-1.4V2.83c0-.84-.69-1.53-1.53-1.53H7.32c-.84 0-1.53.69-1.53 1.53v1.2C5.61 4.01 5.43 4 5.24 4 2.8 3.99.82 5.98.82 8.42s1.99 4.43 4.43 4.43q.36 0 .72-.06a1.53 1.53 0 0 0 1.49 1.91h6.2c.55 0 1.04-.28 1.32-.76s.28-1.05 0-1.53M7.32 9.33h.58L7 10.9c-.5.36-1.11.55-1.75.55-1.67 0-3.03-1.36-3.03-3.03A3.034 3.034 0 0 1 5.8 5.44V7.8c0 .84.68 1.52 1.52 1.52zm5.31-1.53c0 .07-.06.13-.13.13h-.11l-.51-.89c-.27-.46-.74-.74-1.27-.76a1.53 1.53 0 0 0-1.31.65c-.03.04-.06.07-.08.11l-.51.88H7.32c-.07 0-.12-.05-.12-.12V2.83c0-.07.06-.13.13-.13h5.18c.07 0 .13.06.13.13V7.8zm-5.3 5.31 3.05-5.28s.04-.06.06-.08c.03-.04.07-.07.12-.07s.09.02.12.07l3.09 5.36s.02.09 0 .13-.07.06-.11.06h-6.2s-.09-.02-.11-.06a.15.15 0 0 1 0-.13z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9410_11368",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var templatesSmallIcon = createIcon("templatesSmall", iconDefinition);
export {
  templatesSmallIcon,
  iconDefinition
};
