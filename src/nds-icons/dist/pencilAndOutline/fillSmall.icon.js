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

// src/nds-icons/src/pencilAndOutline/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "m13.067 3.55.68-.679v-.016a.845.845 0 0 0-.054-1.13.844.844 0 0 0-1.188 0l-.632.631zm-1.276 1.277.926-.926-1.194-1.195-5.889 5.88a1.1 1.1 0 0 0-.242.398l-.247.796-.001.007a.415.415 0 0 0 .184.454.37.37 0 0 0 .314.031l.68-.21.101-.032a.9.9 0 0 0 .41-.245l3.897-3.898z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.662 3.1c.58 0 1.139.085 1.666.243L8.052 4.617a4 4 0 0 0-.39-.017h-.28A4.03 4.03 0 0 0 3.35 8.632v.206c0 .756.224 1.496.643 2.125a6.15 6.15 0 0 0 3.628 2.557l.41.102a.75.75 0 0 1-.363 1.456l-.41-.103a7.65 7.65 0 0 1-4.513-3.18 5.33 5.33 0 0 1-.895-2.957v-.206A5.53 5.53 0 0 1 7.382 3.1z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.49 5.683 11.403 6.77c.364.635.573 1.37.573 2.153a2.45 2.45 0 0 1-2.12 2.427l-.065.009a3.93 3.93 0 0 1-2.525-.517 2 2 0 0 1-.529.242l-.756.234q-.232.075-.455.076a5.43 5.43 0 0 0 4.463 1.452l.065-.01a3.95 3.95 0 0 0 3.422-3.913 5.8 5.8 0 0 0-.984-3.241"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var pencilAndOutlineFillSmallIcon = createIcon("pencilAndOutlineFillSmall", iconDefinition);
export {
  pencilAndOutlineFillSmallIcon,
  iconDefinition
};
