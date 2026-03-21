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

// src/nds-icons/src/blockSync/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9686_13264)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M2 2.975a.625.625 0 1 0 0 1.25h10a.625.625 0 1 0 0-1.25zm0 3.2a.625.625 0 1 0 0 1.25h3.6a.625.625 0 1 0 0-1.25zm7.298 1.896a2.575 2.575 0 0 1 3.242.9.625.625 0 1 0 1.04-.693 3.825 3.825 0 0 0-6.886 1.165h-.41a.498.498 0 0 0-.465.683q.037.094.112.17l.914.915a.5.5 0 0 0 .708 0l.914-.915a.498.498 0 0 0-.354-.853h-.106l.037-.088c.25-.564.696-1.02 1.254-1.284m.412 4.81a2.575 2.575 0 0 0 3.08-1.524h-.105a.499.499 0 0 1-.354-.853l.914-.915a.5.5 0 0 1 .708 0l.914.915a.5.5 0 0 1 .146.35v.003a.5.5 0 0 1-.5.5h-.41a3.826 3.826 0 0 1-6.886 1.165.625.625 0 0 1 1.04-.694 2.57 2.57 0 0 0 1.453 1.053"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9686_13264",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h16v16H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var blockSyncFillSmallIcon = createIcon("blockSyncFillSmall", iconDefinition);
export {
  iconDefinition,
  blockSyncFillSmallIcon
};
