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

// src/nds-icons/src/aiBlock/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.2 2.375A1.825 1.825 0 0 0 2.375 4.2v7.6c0 1.008.817 1.825 1.825 1.825H6a.075.075 0 0 0 .075-.075v-1.1A.075.075 0 0 0 6 12.375H4.2a.575.575 0 0 1-.575-.575V4.2c0-.318.257-.575.575-.575h7.6c.318 0 .575.257.575.575V6c0 .041.034.075.075.075h1.1A.075.075 0 0 0 13.625 6V4.2A1.825 1.825 0 0 0 11.8 2.375z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M9.956 6.683a2.47 2.47 0 0 0-2.92.277.625.625 0 1 0 .834.932 1.224 1.224 0 0 1 1.74.111.625.625 0 0 0 .945-.818 2.5 2.5 0 0 0-.6-.502"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.864 7.316a2.473 2.473 0 0 0-3.392.851L7.176 13.67a.625.625 0 0 0 .436.938l2.864.464a.625.625 0 0 0 .2-1.233l-1.954-.317 2.822-4.713a1.223 1.223 0 0 1 2.105.01.625.625 0 0 0 1.08-.63 2.46 2.46 0 0 0-.865-.873M8.671 8.845a.736.736 0 1 0-.236 1.454.736.736 0 0 0 .236-1.454"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.157 9.41a.736.736 0 1 0-.236 1.454.736.736 0 0 0 .236-1.454"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var aiBlockSmallIcon = createIcon("aiBlockSmall", iconDefinition);
export {
  iconDefinition,
  aiBlockSmallIcon
};
