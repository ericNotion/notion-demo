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

// src/nds-icons/src/arrowShapeDoubleUpLeft/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10821_27930)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M15.46 10.405c-.49-3.111-2.407-5.202-4.772-5.202l-.013-2.339A.626.626 0 0 0 9.63 2.4L7.379 4.433v-1.56a.626.626 0 0 0-1.044-.465L.581 7.603a.625.625 0 0 0 .006.933l5.754 5.069a.624.624 0 0 0 1.038-.47v-1.522l2.258 1.992a.624.624 0 0 0 1.038-.47v-2.341c.228-.01 2.44-.071 3.775 2.258a.622.622 0 0 0 .994.12.63.63 0 0 0 .181-.439c0-.854-.056-1.638-.165-2.328m-9.33 1.347L1.938 8.06l4.19-3.783V5.56L3.876 7.595a.626.626 0 0 0 .005.933L6.13 10.51zm4.48-2.205h-.56a.626.626 0 0 0-.625.625v1.579L5.233 8.054 9.425 4.27v1.558c0 .345.28.625.625.625h.638c1.993 0 3.212 2.083 3.538 4.148l.038.261c-1.685-1.463-3.593-1.32-3.655-1.315"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10821_27930",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var arrowShapeDoubleUpLeftSmallIcon = createIcon("arrowShapeDoubleUpLeftSmall", iconDefinition);
export {
  iconDefinition,
  arrowShapeDoubleUpLeftSmallIcon
};
