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

// src/nds-icons/src/teamspace/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.2 4.85A1.8 1.8 0 0 1 4 3.05h4.294a1.8 1.8 0 0 1 1.784 1.559v8.342H7.882v-2.712a.5.5 0 0 0-.5-.5h-2.47a.5.5 0 0 0-.5.5v2.712H2.75a.55.55 0 0 1-.55-.55zm3.33.602a.463.463 0 1 0-.927 0 .463.463 0 0 0 .926 0M5.065 7.46a.463.463 0 1 0 0-.927.463.463 0 0 0 0 .927m.463 1.08a.463.463 0 1 0-.926 0 .463.463 0 0 0 .926 0m1.699-2.625a.463.463 0 1 0 0-.926.463.463 0 0 0 0 .926m.463 1.081a.463.463 0 1 0-.926 0 .463.463 0 0 0 .926 0m-.463 2.008a.463.463 0 1 0 0-.927.463.463 0 0 0 0 .927m3.851 3.946h2.172a.55.55 0 0 0 .55-.55V8.71a1.8 1.8 0 0 0-1.8-1.8h-.922zm1.602-3.792a.463.463 0 1 1-.926 0 .463.463 0 0 1 .926 0m-.463 2.007a.463.463 0 1 1 0-.926.463.463 0 0 1 0 .926"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M6.882 10.739v2.212h-1.47v-2.212z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var teamspaceFillSmallIcon = createIcon("teamspaceFillSmall", iconDefinition);
export {
  teamspaceFillSmallIcon,
  iconDefinition
};
