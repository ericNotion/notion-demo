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

// src/nds-icons/src/handThumbsUp/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M12.207 1.322a1.91 1.91 0 0 0-2.33.838l-.348.715c-.177.292-.36.658-.535 1.005l-.13.257c-.225.442-.431.822-.627 1.08L6.073 7.521h-2.41a1.6 1.6 0 0 0-1.6 1.6v5.139a1.6 1.6 0 0 0 1.6 1.6H6.97l1.227.42.021.01c.73.366 1.528.554 2.347.554h4.309a1.844 1.844 0 0 0 1.78-2.32c.554-.318.922-.918.922-1.6 0-.284-.067-.547-.18-.78.333-.327.54-.782.54-1.297a1.8 1.8 0 0 0-.388-1.124c.17-.27.271-.592.271-.943a1.844 1.844 0 0 0-1.843-1.844h-3.783c.069-.167.15-.33.242-.516a6 6 0 0 0 .416-1.004l.001-.002.507-1.774a1.913 1.913 0 0 0-1.144-2.315zM10.64 3.449l.345-.71a.66.66 0 0 1 .781-.248c.32.128.488.471.393.804l-.507 1.773v.001c-.08.276-.195.512-.336.797l-.014.028c-.134.27-.292.59-.408.97a1.03 1.03 0 0 0 .988 1.323h4.095c.327 0 .593.267.593.594a.56.56 0 0 1-.27.47.625.625 0 0 0 .066 1.086.56.56 0 0 1 .322.511.58.58 0 0 1-.4.55.625.625 0 0 0-.191 1.074c.149.122.23.285.23.453a.586.586 0 0 1-.584.594.625.625 0 0 0-.452 1.057.594.594 0 0 1-.416 1.02h-4.31c-.593 0-1.17-.13-1.703-.381a.6.6 0 0 0-.161-.083l-1.424-.488a.6.6 0 0 0-.202-.033h-.181V8.475L9.169 6.05l.037-.043c.286-.367.547-.86.772-1.303l.147-.29a13 13 0 0 1 .515-.965M5.794 8.772v5.839H3.663a.35.35 0 0 1-.35-.35V9.122a.35.35 0 0 1 .35-.35z"
  }, undefined, false, undefined, this)
};
var handThumbsUpIcon = createIcon("handThumbsUp", iconDefinition);
export {
  iconDefinition,
  handThumbsUpIcon
};
