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

// src/nds-icons/src/peopleStack/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.3 1.995a.55.55 0 1 0 0 1.1h5.4a.55.55 0 0 0 0-1.1zm-2.35 2.8a.55.55 0 0 1 .55-.55h9a.55.55 0 0 1 0 1.1h-9a.55.55 0 0 1-.55-.55m1.022 4.594c.36-.45.896-.72 1.545-.72.65 0 1.185.27 1.546.72.35.437.51 1.006.51 1.587 0 .58-.16 1.15-.51 1.586-.361.45-.896.72-1.546.72s-1.185-.27-1.545-.72c-.35-.437-.51-1.006-.51-1.586s.16-1.15.51-1.587m.857.689c-.16.199-.268.508-.268.898s.109.698.268.897c.15.187.368.31.688.31s.539-.123.688-.31c.16-.199.268-.508.268-.897 0-.39-.108-.7-.268-.898-.15-.187-.367-.31-.688-.31s-.538.123-.688.31m4.108-.689c.361-.45.896-.72 1.546-.72s1.185.27 1.546.72c.35.437.51 1.006.51 1.587 0 .58-.16 1.15-.51 1.586-.361.45-.896.72-1.546.72s-1.185-.27-1.546-.72c-.35-.437-.51-1.006-.51-1.586s.16-1.15.51-1.587m.858.689c-.16.199-.268.508-.268.898s.108.698.268.897c.15.187.367.31.688.31s.538-.123.688-.31c.16-.199.268-.508.268-.897 0-.39-.108-.7-.268-.898-.15-.187-.367-.31-.688-.31s-.538.123-.688.31"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M2.963 8.545c0-1.174.951-2.125 2.125-2.125h9.825c1.174 0 2.125.951 2.125 2.125v6.45a2.125 2.125 0 0 1-2.125 2.125H5.088a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v6.45c0 .378.24.7.576.823.316-1.179 1.436-2.024 2.728-2.024 1.06 0 2.003.568 2.483 1.423.48-.855 1.424-1.423 2.483-1.423 1.292 0 2.412.845 2.728 2.024a.88.88 0 0 0 .577-.823v-6.45a.875.875 0 0 0-.875-.875zm8.974 8.2c-.257-.564-.853-.976-1.58-.976-.725 0-1.321.412-1.579.976zm-4.966 0c-.257-.564-.853-.976-1.579-.976s-1.322.412-1.58.976z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var peopleStackIcon = createIcon("peopleStack", iconDefinition);
export {
  peopleStackIcon,
  iconDefinition
};
