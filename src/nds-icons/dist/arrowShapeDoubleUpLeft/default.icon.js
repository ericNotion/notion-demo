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

// src/nds-icons/src/arrowShapeDoubleUpLeft/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_10821_27928)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M19.177 13.073c-.505-3.215-2.522-6.458-5.887-6.458h-.185V3.48a.626.626 0 0 0-1.044-.464l-3.136 2.83V3.49a.626.626 0 0 0-1.044-.464l-7.3 6.59a.625.625 0 0 0 .006.933l7.3 6.43a.624.624 0 0 0 1.038-.47v-2.302l3.141 2.772a.624.624 0 0 0 1.038-.47v-3.136h.136c.124-.006 3.16-.207 4.968 2.947a.623.623 0 0 0 .994.122.62.62 0 0 0 .183-.442c0-1.071-.07-2.057-.208-2.927M7.675 15.126l-5.736-5.052 5.736-5.178v2.08L4.76 9.605a.626.626 0 0 0 .005.933l2.909 2.566zm5.515-3h-.71a.626.626 0 0 0-.626.624v2.375l-5.736-5.06 5.736-5.179V7.24c0 .345.28.625.626.625h.81c2.627 0 4.23 2.713 4.652 5.403q.06.379.102.79c-2.153-2.135-4.768-1.943-4.854-1.933"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_10821_27928",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var arrowShapeDoubleUpLeftIcon = createIcon("arrowShapeDoubleUpLeft", iconDefinition);
export {
  iconDefinition,
  arrowShapeDoubleUpLeftIcon
};
