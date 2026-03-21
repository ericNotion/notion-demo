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

// src/nds-icons/src/workflowPage/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 2.25C0 1.00736 1.00736 0 2.25 0H13.75C14.9926 0 16 1.00736 16 2.25V8V13.75C16 14.9926 14.9926 16 13.75 16H8H2.25C1.00736 16 0 14.9926 0 13.75V2.25ZM2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25V13.75C1.5 14.1642 1.83579 14.5 2.25 14.5H8H13.75C14.1642 14.5 14.5 14.1642 14.5 13.75V8V2.25C14.5 1.83579 14.1642 1.5 13.75 1.5H2.25ZM10.2462 5C9.41986 5 8.75 5.66986 8.75 6.49618V7H9.75H10.5V8.5H9.75H8.75V9.50439C8.75 11.1588 7.40882 12.5 5.75439 12.5H5.00439V11H5.75439C6.58039 11 7.25 10.3304 7.25 9.50439V8.5H6.25H5.5V7H6.25H7.25V6.49618C7.25 4.84144 8.59144 3.5 10.2462 3.5H10.9962V5H10.2462Z",
    fill: "currentColor"
  }, undefined, false, undefined, this)
};
var workflowPageSmallIcon = createIcon("workflowPageSmall", iconDefinition);
export {
  workflowPageSmallIcon,
  iconDefinition
};
