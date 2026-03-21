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

// src/nds-icons/src/people/small.icon.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3("path", {
    d: "M9.336 2.869c.48-.6 1.192-.96 2.064-.96s1.584.36 2.065.96c.468.583.687 1.352.687 2.144 0 .793-.219 1.561-.687 2.145-.48.599-1.193.96-2.065.96s-1.584-.361-2.064-.96c-.469-.584-.687-1.352-.687-2.145s.218-1.56.687-2.144m.98.786c-.252.313-.411.783-.411 1.358s.16 1.046.41 1.359c.24.298.589.49 1.085.49s.846-.192 1.085-.49c.251-.313.41-.783.41-1.359 0-.575-.159-1.045-.41-1.358-.239-.298-.589-.49-1.085-.49s-.846.192-1.085.49M4.6 2.572c-.803 0-1.462.334-1.907.888-.433.539-.632 1.245-.632 1.97s.2 1.43.632 1.97c.445.553 1.104.887 1.907.887.804 0 1.463-.334 1.907-.888.433-.539.632-1.245.632-1.97S6.94 4 6.507 3.46c-.444-.553-1.103-.887-1.907-.887M3.317 5.43c0-.507.14-.916.356-1.184.203-.253.5-.418.927-.418s.725.165.928.418c.215.268.355.677.355 1.184s-.14.915-.355 1.183c-.203.253-.5.418-.928.418s-.724-.165-.927-.418c-.216-.268-.356-.676-.356-1.183m-.887 7.206h3.344c.076.466.268.896.539 1.256H2.43c-.577 0-1.132-.243-1.49-.656a1.51 1.51 0 0 1-.23-1.675c.68-1.42 2.175-2.389 3.89-2.389.797 0 1.547.21 2.19.576a5.6 5.6 0 0 0-.685 1.056 3.16 3.16 0 0 0-1.505-.376c-1.24 0-2.29.699-2.758 1.676a.26.26 0 0 0-.03.161c.007.04.028.092.076.148a.73.73 0 0 0 .542.223M11.4 8.84c-1.917 0-3.58 1.117-4.279 2.735a1.54 1.54 0 0 0 .268 1.665c.36.41.913.652 1.49.652h5.04c.579 0 1.131-.242 1.492-.652a1.54 1.54 0 0 0 .268-1.665c-.7-1.618-2.362-2.736-4.279-2.736m-3.126 3.233c.496-1.147 1.698-1.978 3.126-1.978s2.63.831 3.126 1.978c.055.128.034.233-.058.338a.74.74 0 0 1-.548.225H8.88a.74.74 0 0 1-.548-.225c-.092-.105-.113-.21-.058-.338"
  }, undefined, false, undefined, this)
};
var peopleSmallIcon = createIcon("peopleSmall", iconDefinition);
export {
  peopleSmallIcon,
  iconDefinition
};
