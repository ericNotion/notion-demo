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

// src/nds-icons/src/paperMicrophone/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  fittedViewBox: "2.91 1.23 15.18 17.53",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M16.958 13.771a.625.625 0 0 1 1.028.71 4.8 4.8 0 0 1-3.326 2.033v.997h2.21a.625.625 0 0 1 0 1.25H11.2a.625.625 0 1 1 0-1.25h2.21v-.997a4.8 4.8 0 0 1-3.326-2.032.626.626 0 0 1 1.029-.711 3.55 3.55 0 0 0 2.922 1.535 3.55 3.55 0 0 0 2.923-1.535"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.535 1.239c1.174 0 2.125.951 2.125 2.125v3.032a4 4 0 0 0-.447-.053l-.178-.005q-.32 0-.625.058V3.364a.875.875 0 0 0-.875-.875h-7.5a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h4.054c.331.47.728.891 1.178 1.25H5.035a2.125 2.125 0 0 1-2.125-2.125v-11c0-1.174.951-2.125 2.125-2.125z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.035 7.588a2.2 2.2 0 0 1 2.2 2.2v2.52a2.2 2.2 0 0 1-4.4 0v-2.52a2.2 2.2 0 0 1 2.2-2.2m0 1.25a.95.95 0 0 0-.95.95v2.52a.95.95 0 0 0 1.9 0v-2.52a.95.95 0 0 0-.95-.95M9 6.902a.55.55 0 0 1 0 1.1H6.285a.55.55 0 0 1 0-1.1zm2.285-2.5a.55.55 0 1 1 0 1.1h-5a.55.55 0 0 1 0-1.1z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var paperMicrophoneIcon = createIcon("paperMicrophone", iconDefinition);
export {
  paperMicrophoneIcon,
  iconDefinition
};
