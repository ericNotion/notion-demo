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

// src/nds-icons/src/medal/small.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M8.268 9.194a.287.287 0 0 0-.543 0l-.293.905h-.956c-.282 0-.395.357-.172.518l.776.56-.293.904c-.086.258.21.483.434.321l.776-.56.775.56c.225.162.52-.063.434-.321l-.293-.904.776-.56c.226-.163.097-.518-.172-.518h-.956z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.685 2.343a.57.57 0 0 0-.406-.168H4.713a.57.57 0 0 0-.407.17l-1.83 1.838a.575.575 0 0 0-.104.67L4.68 9.3a3.665 3.665 0 1 0 6.633 0l2.315-4.446a.575.575 0 0 0-.103-.672zM6.471 4.878l-.81-1.553h4.67l-.808 1.553zm2.985 2.62 1.97-3.787.986.986-1.847 3.55a3.7 3.7 0 0 0-1.109-.749m-4.028.748-1.841-3.55.98-.984 1.972 3.785a3.7 3.7 0 0 0-1.11.749m2.257-1.037-.615-1.18h1.855l-.615 1.18a4 4 0 0 0-.625 0M5.481 10.86a2.515 2.515 0 1 1 5.03 0 2.515 2.515 0 0 1-5.03 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var medalSmallIcon = createIcon("medalSmall", iconDefinition);
export {
  medalSmallIcon,
  iconDefinition
};
