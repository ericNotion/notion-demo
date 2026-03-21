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

// src/nds-icons/src/emojiFacePlus/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8 1.875a6.125 6.125 0 1 0 .918 12.182l.091-.014-.032-.087a4 4 0 0 1-.233-1.056l-.006-.08-.08.01q-.323.045-.658.045a4.875 4.875 0 1 1 4.83-4.216l-.01.079.08.006q.555.044 1.056.233l.087.032.014-.092q.068-.449.068-.917A6.125 6.125 0 0 0 8 1.875"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M5.892 6.025c-.444 0-.779.413-.779.891s.335.891.78.891c.443 0 .778-.413.778-.891s-.335-.891-.779-.891m4.216 0c-.444 0-.779.413-.779.891s.335.891.779.891.779-.413.779-.891-.335-.891-.779-.891M6.499 9.323a.575.575 0 0 0-.954.642A2.96 2.96 0 0 0 9.008 11.1l.03-.011.013-.03a3.9 3.9 0 0 1 1.374-1.658l.066-.045-.048-.063a.576.576 0 0 0-.933.03 1.82 1.82 0 0 1-1.506.802A1.81 1.81 0 0 1 6.5 9.323m6.1.202a3.075 3.075 0 1 0 0 6.15 3.075 3.075 0 0 0 0-6.15m-.425 1.409a.425.425 0 1 1 .85 0v1.241h1.242a.425.425 0 1 1 0 .85h-1.242v1.242a.425.425 0 0 1-.85 0v-1.242h-1.242a.425.425 0 0 1 0-.85h1.242z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var emojiFacePlusSmallIcon = createIcon("emojiFacePlusSmall", iconDefinition);
export {
  iconDefinition,
  emojiFacePlusSmallIcon
};
