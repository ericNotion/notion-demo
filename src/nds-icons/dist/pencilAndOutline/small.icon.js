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

// src/nds-icons/src/pencilAndOutline/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M13.612 1.787a.733.733 0 0 0-1.032 0l-.5.5a.075.075 0 0 0 0 .105l.932.932c.029.03.076.03.106 0l.494-.494a.1.1 0 0 0 .018-.03.734.734 0 0 0-.018-1.013m-2.03 1.103a.075.075 0 0 0-.106 0L5.748 8.608a1 1 0 0 0-.216.358l-.243.786-.001.003c-.057.214.142.431.36.355l.78-.242a.8.8 0 0 0 .363-.217l5.723-5.723a.075.075 0 0 0 0-.106z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.382 3.225a5.407 5.407 0 0 0-5.407 5.407v.206c0 1.028.304 2.033.874 2.888a7.53 7.53 0 0 0 4.438 3.128l.411.102a.625.625 0 0 0 .303-1.212l-.41-.103a6.28 6.28 0 0 1-3.702-2.608 3.96 3.96 0 0 1-.664-2.195v-.206a4.157 4.157 0 0 1 4.157-4.157h.28q.457 0 .886.089a.08.08 0 0 0 .068-.02l.897-.896a.075.075 0 0 0-.029-.124 5.7 5.7 0 0 0-1.822-.299z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.232 5.533a.075.075 0 0 0-.113-.008l-.789.788a.075.075 0 0 0-.008.096c.49.716.778 1.582.778 2.514a2.574 2.574 0 0 1-2.229 2.552l-.064.008a4.05 4.05 0 0 1-3.01-.806.08.08 0 0 0-.068-.012l-.06.018-.756.235h-.001c-.155.052-.301.07-.438.063a.075.075 0 0 0-.058.127 5.3 5.3 0 0 0 4.556 1.615l.065-.01a3.824 3.824 0 0 0 3.313-3.79 5.68 5.68 0 0 0-1.118-3.39"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilAndOutlineSmallIcon = createIcon("pencilAndOutlineSmall", iconDefinition);
export {
  pencilAndOutlineSmallIcon,
  iconDefinition
};
