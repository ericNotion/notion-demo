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

// src/nds-icons/src/handThumbsDown/default.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M12.207 18.678a1.91 1.91 0 0 1-2.33-.838l-.348-.715c-.177-.293-.36-.658-.535-1.005l-.13-.257c-.225-.442-.431-.822-.627-1.08l-2.164-2.306h-2.41a1.6 1.6 0 0 1-1.6-1.6V5.74a1.6 1.6 0 0 1 1.6-1.6H6.97l1.227-.42.021-.011a5.2 5.2 0 0 1 2.347-.553h4.309a1.844 1.844 0 0 1 1.78 2.32c.554.318.922.918.922 1.6 0 .284-.067.547-.18.78.333.327.54.782.54 1.297 0 .429-.145.817-.388 1.124.17.27.271.592.271.943a1.844 1.844 0 0 1-1.843 1.844h-3.783c.069.167.15.33.242.516v.001c.14.28.302.608.416 1.004l.001.002.507 1.774a1.913 1.913 0 0 1-1.144 2.315zm-1.567-2.126.345.71a.66.66 0 0 0 .781.247.66.66 0 0 0 .393-.804l-.507-1.773v-.001c-.08-.276-.195-.512-.336-.797l-.014-.028a6 6 0 0 1-.408-.97 1.03 1.03 0 0 1 .988-1.323h4.095a.594.594 0 0 0 .593-.594.56.56 0 0 0-.27-.47.625.625 0 0 1 .066-1.086.56.56 0 0 0 .322-.511.58.58 0 0 0-.4-.55.625.625 0 0 1-.191-1.074.59.59 0 0 0 .23-.453.586.586 0 0 0-.584-.594.625.625 0 0 1-.452-1.057.594.594 0 0 0-.416-1.02h-4.31c-.593 0-1.17.13-1.703.381a.6.6 0 0 1-.161.083l-1.424.488a.6.6 0 0 1-.202.033h-.181v6.136l2.275 2.425.037.043c.286.367.547.86.772 1.303l.147.29a13 13 0 0 0 .515.966m-4.846-5.324v-5.84H3.663a.35.35 0 0 0-.35.35v5.139c0 .193.156.35.35.35z"
  }, undefined, false, undefined, this)
};
var handThumbsDownIcon = createIcon("handThumbsDown", iconDefinition);
export {
  iconDefinition,
  handThumbsDownIcon
};
