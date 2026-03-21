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

// src/nds-icons/src/textH3Toggle/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("g", {
        clipPath: "url(#clip0_9672_13871)",
        children: /* @__PURE__ */ jsxDEV3("path", {
          d: "M6.508 4.823c.318 0 .577.258.577.577v3.823h5.645V5.4a.577.577 0 0 1 1.154 0v9.2a.577.577 0 1 1-1.154 0v-4.223H7.086V14.6a.577.577 0 1 1-1.154 0V5.4c0-.319.258-.577.577-.577m10.775 4.415c-.644 0-1.105.316-1.256.631a.55.55 0 1 1-.992-.474c.377-.79 1.292-1.257 2.248-1.257.626 0 1.214.193 1.657.532s.765.846.765 1.45c0 .58-.297 1.072-.715 1.41l.05.036c.468.353.81.883.81 1.514 0 .63-.342 1.16-.81 1.514-.47.354-1.093.556-1.757.556-1.005 0-1.953-.47-2.368-1.264a.55.55 0 1 1 .976-.508c.178.341.685.672 1.392.672.448 0 .833-.138 1.094-.334.26-.197.372-.427.372-.636s-.111-.44-.372-.636c-.26-.196-.646-.334-1.094-.334h-.424a.55.55 0 0 1 0-1.1h.33a1 1 0 0 1 .094-.008c.406 0 .754-.127.989-.306.234-.18.333-.388.333-.576s-.099-.397-.333-.576c-.235-.18-.583-.306-.99-.306M.962 11.14c0 .455.495.735.885.502l1.9-1.14a.585.585 0 0 0 0-1.003l-1.9-1.14a.585.585 0 0 0-.885.5z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("defs", {
        children: /* @__PURE__ */ jsxDEV3("clipPath", {
          id: "clip0_9672_13871",
          children: /* @__PURE__ */ jsxDEV3("path", {
            d: "M0 0h20v20H0z"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var textH3ToggleIcon = createIcon("textH3Toggle", iconDefinition);
export {
  textH3ToggleIcon,
  iconDefinition
};
