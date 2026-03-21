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

// src/nds-icons/src/figure2ArmsOpen/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M4.937 5.19a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m-.229 4.698h.458q.11.99.288 1.97l.23 1.259a.625.625 0 1 0 1.229-.224l-.229-1.258a27.4 27.4 0 0 1-.438-4.478l1.27 1.482a.626.626 0 0 0 .966 0l1.27-1.483c-.022 1.502-.169 3-.438 4.479l-.229 1.258a.625.625 0 1 0 1.23.224l.229-1.259q.178-.98.288-1.97h.458q.11.99.288 1.97l.23 1.259a.625.625 0 1 0 1.229-.224l-.229-1.258a27.4 27.4 0 0 1-.438-4.478l1.278 1.492a.625.625 0 1 0 .95-.814l-1.518-1.77a2.38 2.38 0 0 0-1.804-.83h-.431c-.693 0-1.352.303-1.803.83L7.999 7.282 6.956 6.065a2.38 2.38 0 0 0-1.803-.83H4.72c-.693 0-1.352.303-1.803.83L1.4 7.835a.625.625 0 1 0 .95.814l1.278-1.492c-.022 1.502-.17 3-.438 4.478l-.229 1.258a.625.625 0 1 0 1.23.224l.229-1.259q.179-.98.288-1.97"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M12.26 3.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var figure2ArmsOpenFillSmallIcon = createIcon("figure2ArmsOpenFillSmall", iconDefinition);
export {
  iconDefinition,
  figure2ArmsOpenFillSmallIcon
};
