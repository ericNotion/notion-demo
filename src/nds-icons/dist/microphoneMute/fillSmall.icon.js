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

// src/nds-icons/src/microphoneMute/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "m4.145 2.657-.227-.265a.55.55 0 1 0-.836.716L5.7 6.162v.788a2.3 2.3 0 0 0 2.627 2.277l.874 1.019c-.38.116-.783.179-1.201.179a4.08 4.08 0 0 1-3.366-1.768.55.55 0 0 0-.905.625 5.19 5.19 0 0 0 3.721 2.214v1.379h-2.6a.55.55 0 0 0 0 1.1h6.3a.55.55 0 1 0 0-1.1h-2.6v-1.379a5.2 5.2 0 0 0 1.416-.357l2.116 2.469a.55.55 0 0 0 .843-.707L4.152 2.666zm7.642 7.226q.264-.283.484-.6a.55.55 0 1 0-.905-.626 4 4 0 0 1-.3.384zm-1.695-1.977a2.3 2.3 0 0 0 .208-.956v-2.8a2.3 2.3 0 0 0-4.34-1.064z"
  }, undefined, false, undefined, this)
};
var microphoneMuteFillSmallIcon = createIcon("microphoneMuteFillSmall", iconDefinition);
export {
  microphoneMuteFillSmallIcon,
  iconDefinition
};
