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

// src/nds-icons/src/fileCsv/fillSmall.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 16 16",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M3.375 3.875c0-.966.784-1.75 1.75-1.75h3.034c.464 0 .91.184 1.237.513l2.716 2.716c.329.328.513.773.513 1.237V6.9H9.062a1.75 1.75 0 0 1-1.308-1.694V3.375H5.125a.5.5 0 0 0-.5.5v8.25a.5.5 0 0 0 .5.5h.235q.045.005.09.005h7.101a1.75 1.75 0 0 1-1.676 1.245h-5.75a1.75 1.75 0 0 1-1.75-1.75zm5.479-.012v1.343c0 .36.29.65.65.65h1.343z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M11.748 9.82c-.265-.225-.627-.356-1.04-.435l-.009-.002c-.345-.066-.513-.153-.59-.217-.05-.044-.07-.082-.07-.165 0-.02.003-.058.082-.111.09-.06.252-.116.484-.116.447 0 .616.187.655.244a.5.5 0 0 0 .824-.567c-.227-.33-.706-.677-1.479-.677-.377 0-.747.09-1.04.284-.3.202-.526.527-.526.943 0 .354.132.68.424.927.265.225.627.356 1.04.436l.009.001c.344.066.513.153.589.218.051.043.071.082.071.164 0 .02-.003.058-.083.111-.088.06-.252.116-.484.116-.446 0-.615-.187-.654-.244a.5.5 0 1 0-.824.567c.227.33.706.677 1.478.677.378 0 .748-.089 1.04-.284.301-.201.527-.527.527-.943 0-.354-.133-.68-.424-.927M8.385 8.043c-.536-.303-1.296-.367-1.937-.105-.688.281-1.21.927-1.21 1.936 0 1.01.522 1.655 1.21 1.936.641.262 1.401.198 1.937-.104a.5.5 0 0 0-.492-.871c-.268.151-.708.196-1.066.05-.311-.127-.588-.407-.588-1.01 0-.605.277-.884.588-1.011.358-.147.798-.102 1.066.05a.5.5 0 0 0 .492-.871m5.023.194a.5.5 0 0 0-.94.341l1.067 2.934a.5.5 0 0 0 .94 0l1.067-2.934a.5.5 0 1 0-.94-.341l-.597 1.64z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fileCsvFillSmallIcon = createIcon("fileCsvFillSmall", iconDefinition);
export {
  iconDefinition,
  fileCsvFillSmallIcon
};
