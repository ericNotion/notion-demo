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

// src/nds-icons/src/lockDoc/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        fillRule: "evenodd",
        d: "M10 9a1.6 1.6 0 0 0-1.6 1.6v.817a1 1 0 0 0-.6.917V14a1 1 0 0 0 1 1h2.4a1 1 0 0 0 1-1v-1.666a1 1 0 0 0-.6-.917V10.6A1.6 1.6 0 0 0 10 9m.6 2.334V10.6a.6.6 0 0 0-1.2 0v.734zm-.05 1.796a.55.55 0 1 1-1.1 0 .55.55 0 0 1 1.1 0",
        clipRule: "evenodd"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.125 4.5c0-1.174.951-2.125 2.125-2.125h3.879c.563 0 1.104.224 1.502.622l3.622 3.622c.398.398.622.939.622 1.502V15.5a2.125 2.125 0 0 1-2.125 2.125h-7.5A2.125 2.125 0 0 1 4.125 15.5zm2.125-.875a.875.875 0 0 0-.875.875v11c0 .483.392.875.875.875h7.5a.875.875 0 0 0 .875-.875V8.3H12a2.05 2.05 0 0 1-2.05-2.05V3.625zm4.8.559V6.25c0 .525.425.95.95.95h2.066z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var lockDocIcon = createIcon("lockDoc", iconDefinition);
export {
  lockDocIcon,
  iconDefinition
};
