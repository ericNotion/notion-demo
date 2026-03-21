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

// src/nds-icons/Icon.tsx
"use client";
// src/noticons/src/_123/default.icon.tsx
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV3(Fragment, {
    children: [
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M7.02124 8.28125C7.02124 7.45282 7.69281 6.78125 8.52124 6.78125C9.34967 6.78125 10.0212 7.45282 10.0212 8.28125V8.3679C10.0212 8.7626 9.87412 9.14314 9.60862 9.43519L5.55249 13.8969V15.0938H11.8962V13.2188H8.70301L10.996 10.6965C11.5753 10.0593 11.8962 9.22904 11.8962 8.3679V8.28125C11.8962 6.41729 10.3852 4.90625 8.52124 4.90625C6.65728 4.90625 5.14624 6.41729 5.14624 8.28125V8.4375H7.02124V8.28125Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M14.6418 8.15898C14.6418 7.3984 15.2598 6.78125 16.0056 6.78125H16.2288C16.8587 6.78125 17.3694 7.29192 17.3694 7.92188C17.3694 8.55182 16.8587 9.0625 16.2288 9.0625H15.4896V10.9375H16.2288C16.8587 10.9375 17.3694 11.4482 17.3694 12.0781C17.3694 12.7081 16.8587 13.2188 16.2288 13.2188H16.0056C15.2598 13.2188 14.6418 12.6016 14.6418 11.841H12.7668C12.7668 13.6224 14.2095 15.0938 16.0056 15.0938H16.2288C17.8943 15.0938 19.2444 13.7436 19.2444 12.0781C19.2444 11.2726 18.9286 10.5409 18.4141 10C18.9286 9.45909 19.2444 8.72736 19.2444 7.92188C19.2444 6.25639 17.8943 4.90625 16.2288 4.90625H16.0056C14.2095 4.90625 12.7668 6.37763 12.7668 8.15898H14.6418Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV3("path", {
        d: "M0.755615 6.51562L2.23999 5.03125H4.11499L4.11499 15.0938H2.23999L2.23999 7.61445H0.755615V6.51562Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var _123Icon = createIcon("_123", iconDefinition);

// src/noticons/src/accessibility/default.icon.tsx
import { jsxDEV as jsxDEV4, Fragment as Fragment2 } from "react/jsx-dev-runtime";
var iconDefinition2 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV4(Fragment2, {
    children: /* @__PURE__ */ jsxDEV4("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.0625C10.7719 4.0625 11.25 4.54063 11.25 5.3125C11.25 6.08437 10.7719 6.5625 10 6.5625C9.22813 6.5625 8.75 6.08437 8.75 5.3125C8.75 4.54063 9.22813 4.0625 10 4.0625ZM14.375 8.75H11.1719V10.7031L12.8125 15.625H11.3312L10 11.6344L8.66875 15.625H7.1875L8.82812 10.7031V8.75H5.625V7.5H14.375V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var accessibilityIcon = createIcon("accessibility", iconDefinition2);

// src/noticons/src/activity/default.icon.tsx
import { jsxDEV as jsxDEV5, Fragment as Fragment3 } from "react/jsx-dev-runtime";
var iconDefinition3 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV5(Fragment3, {
    children: /* @__PURE__ */ jsxDEV5("path", {
      d: "M13.125 12.1344L17.5 7.75938V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V12.7594L4.375 10.8844L6.875 13.3844L10.625 9.63438L13.125 12.1344ZM15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V10.9906L4.375 9.11562L6.875 11.6156L10.625 7.86562L13.125 10.3656L17.5 5.99062V5.625C17.5 4.08125 16.5437 3.125 15 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var activityIcon = createIcon("activity", iconDefinition3);

// src/noticons/src/add/default.icon.tsx
import { jsxDEV as jsxDEV6, Fragment as Fragment4 } from "react/jsx-dev-runtime";
var iconDefinition4 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV6(Fragment4, {
    children: /* @__PURE__ */ jsxDEV6("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.0625 10.9375H10.9375V14.0625H9.0625V10.9375H5.9375V9.0625H9.0625V5.9375H10.9375V9.0625H14.0625V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var addIcon = createIcon("add", iconDefinition4);

// src/noticons/src/airplane/default.icon.tsx
import { jsxDEV as jsxDEV7, Fragment as Fragment5 } from "react/jsx-dev-runtime";
var iconDefinition5 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV7(Fragment5, {
    children: /* @__PURE__ */ jsxDEV7("path", {
      d: "M11.875 10.9375V14.375L14.375 15.625V17.5L10 16.4062L5.625 17.5V15.625L8.125 14.375V10.9375L1.875 12.5V10L8.125 6.875V4.375C8.125 2.25625 8.84375 1.25 10 1.25C11.1562 1.25 11.875 2.25625 11.875 4.375V6.875L18.125 10V12.5L11.875 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var airplaneIcon = createIcon("airplane", iconDefinition5);

// src/noticons/src/alarm/default.icon.tsx
import { jsxDEV as jsxDEV8, Fragment as Fragment6 } from "react/jsx-dev-runtime";
var iconDefinition6 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV8(Fragment6, {
    children: /* @__PURE__ */ jsxDEV8("path", {
      d: "M16.875 10.625C16.875 9.4875 16.5969 8.41563 16.1094 7.47188L17.1344 6.44688C17.6219 5.95938 17.6219 5.16875 17.1344 4.67813L15.3656 2.90938C14.8781 2.42188 14.0875 2.42188 13.5969 2.90938L12.3437 4.1625C11.6125 3.89688 10.8219 3.75 9.99687 3.75C9.17187 3.75 8.40625 3.89063 7.68125 4.15L6.44062 2.90938C5.89375 2.3625 5.21875 2.3625 4.67187 2.90938L2.90312 4.67813C2.35625 5.225 2.35625 5.9 2.90312 6.44688L3.9 7.44375C3.40312 8.39688 3.11875 9.47813 3.11875 10.6281C3.11875 12.0281 3.5375 13.3281 4.25625 14.4156L2.49375 16.1781L3.81875 17.5031L5.49687 15.825C6.70312 16.8688 8.275 17.5031 9.99375 17.5031C11.7125 17.5031 13.2844 16.8688 14.4906 15.825L16.1687 17.5031L17.4937 16.1781L15.7312 14.4156C16.45 13.3281 16.8687 12.0281 16.8687 10.6281L16.875 10.625ZM10.9375 11.875H6.25V10H9.0625V6.25H10.9375V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var alarmIcon = createIcon("alarm", iconDefinition6);

// src/noticons/src/alert/default.icon.tsx
import { jsxDEV as jsxDEV9, Fragment as Fragment7 } from "react/jsx-dev-runtime";
var iconDefinition7 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV9(Fragment7, {
    children: /* @__PURE__ */ jsxDEV9("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM11.25 14.0625H8.75V12.1875H11.25V14.0625ZM11.25 8.4375L10.625 10.9375H9.375L8.75 8.4375V4.6875H11.25V8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var alertIcon = createIcon("alert", iconDefinition7);

// src/noticons/src/alien/default.icon.tsx
import { jsxDEV as jsxDEV10, Fragment as Fragment8 } from "react/jsx-dev-runtime";
var iconDefinition8 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV10(Fragment8, {
    children: /* @__PURE__ */ jsxDEV10("path", {
      d: "M10 1.875C6.20312 1.875 3.125 4.95312 3.125 8.75C3.125 13.2781 7.17188 18.125 10 18.125C12.8281 18.125 16.875 13.2781 16.875 8.75C16.875 4.95312 13.7969 1.875 10 1.875ZM5.3125 8.75V7.5H6.25C7.79375 7.5 8.75 8.45625 8.75 10V11.25H7.8125C6.26875 11.25 5.3125 10.2937 5.3125 8.75ZM10 15C8.34062 15 7.1875 13.6969 7.1875 13.6969L8.07188 12.8125C8.33437 13.0719 8.94063 13.75 10 13.75C11.0594 13.75 11.6594 13.075 11.9281 12.8125L12.8125 13.6969C12.8125 13.6969 11.6594 15 10 15ZM14.6875 8.75C14.6875 10.2937 13.7312 11.25 12.1875 11.25H11.25V10C11.25 8.45625 12.2063 7.5 13.75 7.5H14.6875V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var alienIcon = createIcon("alien", iconDefinition8);

// src/noticons/src/alienPixel/default.icon.tsx
import { jsxDEV as jsxDEV11, Fragment as Fragment9 } from "react/jsx-dev-runtime";
var iconDefinition9 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV11(Fragment9, {
    children: /* @__PURE__ */ jsxDEV11("path", {
      d: "M17.8125 10.625V8.75H15.9375V6.875H14.0625V5.625H15.9375V3.125H13.4375V5H11.5625V6.875H8.4375V5H6.5625V3.125H4.0625V5.625H5.9375V6.875H4.0625V8.75H2.1875V10.625H0.3125V15H2.8125V11.25H4.0625V15H5.9375V16.875H8.4375V14.375H6.5625V13.125H13.4375V14.375H11.5625V16.875H14.0625V15H15.9375V11.25H17.1875V15H19.6875V10.625H17.8125ZM8.125 10.9375H6.25V9.0625H8.125V10.9375ZM13.75 10.9375H11.875V9.0625H13.75V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var alienPixelIcon = createIcon("alienPixel", iconDefinition9);

// src/noticons/src/ambulance/default.icon.tsx
import { jsxDEV as jsxDEV12, Fragment as Fragment10 } from "react/jsx-dev-runtime";
var iconDefinition10 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV12(Fragment10, {
    children: /* @__PURE__ */ jsxDEV12("path", {
      d: "M15.625 6.25H11.875V4.375H1.875V14.375H3.75V15C3.75 16.0344 4.59063 16.875 5.625 16.875C6.65938 16.875 7.5 16.0344 7.5 15V14.375H12.5V15C12.5 16.0344 13.3406 16.875 14.375 16.875C15.4094 16.875 16.25 16.0344 16.25 15V14.375H18.125V11.25L15.625 6.25ZM3.125 6.875V5.625H5V6.875H3.125ZM9.35313 10.7094L8.72813 11.7906L7.5 11.0812V12.5H6.25V11.0812L5.02187 11.7906L4.39687 10.7094L5.625 10L4.39687 9.29062L5.02187 8.20938L6.25 8.91875V7.5H7.5V8.91875L8.72813 8.20938L9.35313 9.29062L8.125 10L9.35313 10.7094ZM10.625 6.875H8.75V5.625H10.625V6.875ZM11.875 10.625V8.125H14.4656L15.7156 10.625H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ambulanceIcon = createIcon("ambulance", iconDefinition10);

// src/noticons/src/anchor/default.icon.tsx
import { jsxDEV as jsxDEV13, Fragment as Fragment11 } from "react/jsx-dev-runtime";
var iconDefinition11 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV13(Fragment11, {
    children: /* @__PURE__ */ jsxDEV13("path", {
      d: "M14.375 12.1875V12.5344C14.375 13.9062 13.875 14.7156 12.6469 15.3281L10.9375 16.1844V10.3125H14.375V8.4375H10.9375V6.70937C12.0281 6.32187 12.8125 5.28125 12.8125 4.0625C12.8125 2.5125 11.55 1.25 10 1.25C8.45 1.25 7.1875 2.5125 7.1875 4.0625C7.1875 5.28438 7.97188 6.325 9.0625 6.70937V8.4375H5.625V10.3125H9.0625V16.1844L7.35313 15.3281C6.125 14.7156 5.625 13.9062 5.625 12.5344V12.1875H3.75V12.5344C3.75 14.6125 4.65313 16.075 6.5125 17.0062L10 18.75L13.4875 17.0062C15.3469 16.075 16.25 14.6125 16.25 12.5344V12.1875H14.375ZM10 3.125C10.5156 3.125 10.9375 3.54688 10.9375 4.0625C10.9375 4.57812 10.5156 5 10 5C9.48438 5 9.0625 4.57812 9.0625 4.0625C9.0625 3.54688 9.48438 3.125 10 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var anchorIcon = createIcon("anchor", iconDefinition11);

// src/noticons/src/apple/default.icon.tsx
import { jsxDEV as jsxDEV14, Fragment as Fragment12 } from "react/jsx-dev-runtime";
var iconDefinition12 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV14(Fragment12, {
    children: /* @__PURE__ */ jsxDEV14("path", {
      d: "M16.875 9.375C16.875 13.125 14.3469 16.875 12.5 16.875C11.3656 16.875 11.125 16.25 10 16.25C8.875 16.25 8.63438 16.875 7.5 16.875C5.65313 16.875 3.125 13.125 3.125 9.375C3.125 5.625 5.02813 4.375 6.875 4.375C7.8875 4.375 8.65937 4.96563 9.26562 5.3375C9.50625 2.88437 10.625 1.25 10.625 1.25L12.5 2.1875C12.5 2.1875 11.4031 3.34688 10.8469 5.26562C11.4375 4.89688 12.175 4.375 13.125 4.375C14.9719 4.375 16.875 5.625 16.875 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var appleIcon = createIcon("apple", iconDefinition12);

// src/noticons/src/apron/default.icon.tsx
import { jsxDEV as jsxDEV15, Fragment as Fragment13 } from "react/jsx-dev-runtime";
var iconDefinition13 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV15(Fragment13, {
    children: /* @__PURE__ */ jsxDEV15("path", {
      d: "M13.75 6.25V1.875H11.875V6.875H8.125V1.875H6.25V6.25C6.25 7.79375 5.29375 8.75 3.75 8.75V18.125H16.25V8.75C14.7063 8.75 13.75 7.79375 13.75 6.25ZM13.125 14.6875L10 16.25L6.875 14.6875V11.25H13.125V14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var apronIcon = createIcon("apron", iconDefinition13);

// src/noticons/src/aquarius/default.icon.tsx
import { jsxDEV as jsxDEV16, Fragment as Fragment14 } from "react/jsx-dev-runtime";
var iconDefinition14 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV16(Fragment14, {
    children: /* @__PURE__ */ jsxDEV16("path", {
      d: "M2.575 8.875L1.25 7.55L5.05 3.75L7.525 6.225L10 3.75L12.475 6.225L14.95 3.75L18.75 7.55L17.425 8.875L14.95 6.4L12.475 8.875L10 6.4L7.525 8.875L5.05 6.4L2.575 8.875ZM12.475 13.5969L10 11.1219L7.525 13.5969L5.05 11.1219L1.25 14.9219L2.575 16.2469L5.05 13.7719L7.525 16.2469L10 13.7719L12.475 16.2469L14.95 13.7719L17.425 16.2469L18.75 14.9219L14.95 11.1219L12.475 13.5969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var aquariusIcon = createIcon("aquarius", iconDefinition14);

// src/noticons/src/archBridge/default.icon.tsx
import { jsxDEV as jsxDEV17, Fragment as Fragment15 } from "react/jsx-dev-runtime";
var iconDefinition15 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV17(Fragment15, {
    children: /* @__PURE__ */ jsxDEV17("path", {
      d: "M1.25 5V16.25H3.3875C4.20312 13.3656 6.85625 11.25 10 11.25C13.1438 11.25 15.7969 13.3656 16.6125 16.25H18.75V5H1.25ZM3.125 12.7188V6.875H6.25V10.2281C5.03437 10.8094 3.9625 11.6594 3.125 12.7188ZM8.125 9.58125V6.875H11.875V9.58125C11.2688 9.44688 10.6406 9.375 10 9.375C9.35938 9.375 8.73125 9.44688 8.125 9.58125ZM16.875 12.7188C16.0375 11.6594 14.9656 10.8063 13.75 10.2281V6.875H16.875V12.7188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var archBridgeIcon = createIcon("archBridge", iconDefinition15);

// src/noticons/src/archery/default.icon.tsx
import { jsxDEV as jsxDEV18, Fragment as Fragment16 } from "react/jsx-dev-runtime";
var iconDefinition16 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV18(Fragment16, {
    children: /* @__PURE__ */ jsxDEV18("path", {
      d: "M16.875 6.25L18.125 1.875L13.75 3.125V5.36562L12.7844 6.33125C11.5125 5.21875 9.95311 4.46563 8.41874 4.38125C7.49061 4.33125 6.58436 4.51562 5.73436 4.90625C5.59374 4.97187 5.48749 4.99687 5.33124 4.99687C4.74374 4.99687 4.37811 4.63125 4.37811 4.04375V3.74687H2.50311V4.84375C2.50311 5.58437 2.71249 6.0875 3.23436 6.6125L7.86874 11.2469L6.61874 12.4969H4.37811L1.87811 14.9969V16.2469H3.75311V18.1219H5.00311L7.50311 15.6219V13.3813L8.75311 12.1313L13.3875 16.7656C13.9125 17.2906 14.4156 17.4969 15.1562 17.4969H16.2531V15.6219H15.9562C15.3687 15.6219 15.0031 15.2562 15.0031 14.6687C15.0031 14.5125 15.0312 14.4062 15.0969 14.2656C15.4875 13.4125 15.6719 12.5094 15.6219 11.5781C15.5406 10.0437 14.7875 8.48438 13.6719 7.2125L14.6375 6.24687H16.8781L16.875 6.25ZM5.57499 7.19063C6.42186 6.53125 7.35936 6.20625 8.31874 6.25625C9.37186 6.3125 10.4906 6.86875 11.4406 7.675L8.74999 10.3656L5.57499 7.19063ZM13.7469 11.6813C13.7969 12.6406 13.4719 13.5781 12.8125 14.425L9.63749 11.25L12.3281 8.55937C13.1344 9.50937 13.6906 10.6313 13.7469 11.6813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var archeryIcon = createIcon("archery", iconDefinition16);

// src/noticons/src/archive/default.icon.tsx
import { jsxDEV as jsxDEV19, Fragment as Fragment17 } from "react/jsx-dev-runtime";
var iconDefinition17 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV19(Fragment17, {
    children: /* @__PURE__ */ jsxDEV19("path", {
      d: "M3.75 16.875H16.25V6.875H3.75V16.875ZM8.4375 8.75H11.5625C12.1406 8.75 12.5 9.10938 12.5 9.6875C12.5 10.2656 12.1406 10.625 11.5625 10.625H8.4375C7.85938 10.625 7.5 10.2656 7.5 9.6875C7.5 9.10938 7.85938 8.75 8.4375 8.75ZM17.5 3.125V5.625H2.5V3.125H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var archiveIcon = createIcon("archive", iconDefinition17);

// src/noticons/src/aries/default.icon.tsx
import { jsxDEV as jsxDEV20, Fragment as Fragment18 } from "react/jsx-dev-runtime";
var iconDefinition18 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV20(Fragment18, {
    children: /* @__PURE__ */ jsxDEV20("path", {
      d: "M17.5 6.71875C17.5 9.04375 15.6062 10.9375 13.2812 10.9375H12.8125V9.0625H13.2812C14.575 9.0625 15.625 8.0125 15.625 6.71875C15.625 5.425 14.575 4.375 13.2812 4.375C11.9875 4.375 10.9375 5.425 10.9375 6.71875V17.5H9.0625V6.71875C9.0625 5.425 8.0125 4.375 6.71875 4.375C5.425 4.375 4.375 5.425 4.375 6.71875C4.375 8.0125 5.425 9.0625 6.71875 9.0625H7.1875V10.9375H6.71875C4.39375 10.9375 2.5 9.04375 2.5 6.71875C2.5 4.39375 4.39375 2.5 6.71875 2.5C8.04375 2.5 9.225 3.11562 10 4.07187C10.775 3.1125 11.9563 2.5 13.2812 2.5C15.6062 2.5 17.5 4.39375 17.5 6.71875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ariesIcon = createIcon("aries", iconDefinition18);

// src/noticons/src/arrivals/default.icon.tsx
import { jsxDEV as jsxDEV21, Fragment as Fragment19 } from "react/jsx-dev-runtime";
var iconDefinition19 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV21(Fragment19, {
    children: /* @__PURE__ */ jsxDEV21("path", {
      d: "M16.4219 12.4656L6.64062 10.0188C6.21875 9.9125 5.95 9.775 5.61875 9.49063L2.74687 7.02813C2.46562 6.7875 2.34375 6.54375 2.3125 6.175L2.125 3.73438L2.27812 3.12813L2.9875 3.30625C3.34688 3.39688 3.56563 3.55938 3.75625 3.875L5.30937 6.4625L8.34062 7.22188L6.52188 4.19063L6.675 3.58438L8.0625 3.93125C8.59688 4.06563 8.93437 4.26563 9.30625 4.675L12.5875 8.28438L14.35 8.725C15.2281 8.94375 15.7781 9.29375 16.35 9.99688L17.2687 11.1281C17.8344 11.8219 17.2813 12.6781 16.4188 12.4625L16.4219 12.4656ZM7.5 15.625V17.5H17.5V15.625H7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrivalsIcon = createIcon("arrivals", iconDefinition19);

// src/noticons/src/arrowCircleDown/default.icon.tsx
import { jsxDEV as jsxDEV22, Fragment as Fragment20 } from "react/jsx-dev-runtime";
var iconDefinition20 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV22(Fragment20, {
    children: [
      /* @__PURE__ */ jsxDEV22("path", {
        d: "M10.349 13.0625H9.5812L6.99864 8.52557C7.06844 8.38597 7.12079 8.29873 7.17314 8.21148C7.22549 8.12423 7.27783 8.03698 7.34763 7.89738L12.6523 7.89738C12.7221 8.03698 12.7745 8.12423 12.8268 8.21148C12.8792 8.29873 12.9315 8.38597 13.0013 8.52557L10.349 13.0625Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV22("path", {
        d: "M2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10ZM15.625 10C15.625 6.89453 13.1055 4.375 10 4.375C6.89453 4.375 4.375 6.89453 4.375 10C4.375 13.1055 6.89453 15.625 10 15.625C13.1055 15.625 15.625 13.1055 15.625 10Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var arrowCircleDownIcon = createIcon("arrowCircleDown", iconDefinition20);

// src/noticons/src/arrowDown/default.icon.tsx
import { jsxDEV as jsxDEV23, Fragment as Fragment21 } from "react/jsx-dev-runtime";
var iconDefinition21 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV23(Fragment21, {
    children: /* @__PURE__ */ jsxDEV23("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.7L5 10.7L6.325 9.375L9.0625 12.1125V5H10.9375V12.1125L13.675 9.375L15 10.7L10 15.7Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowDownIcon = createIcon("arrowDown", iconDefinition21);

// src/noticons/src/arrowDownBasic/default.icon.tsx
import { jsxDEV as jsxDEV24, Fragment as Fragment22 } from "react/jsx-dev-runtime";
var iconDefinition22 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV24(Fragment22, {
    children: /* @__PURE__ */ jsxDEV24("path", {
      d: "M17.5 10.075L10 17.575L2.5 10.075L3.825 8.75L9.0625 13.9875V2.5H10.9375V13.9875L16.175 8.75L17.5 10.075Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowDownBasicIcon = createIcon("arrowDownBasic", iconDefinition22);

// src/noticons/src/arrowDownLine/default.icon.tsx
import { jsxDEV as jsxDEV25, Fragment as Fragment23 } from "react/jsx-dev-runtime";
var iconDefinition23 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV25(Fragment23, {
    children: /* @__PURE__ */ jsxDEV25("path", {
      d: "M10 14.45L5 9.45L6.325 8.125L9.0625 10.8625V1.875H10.9375V10.8625L13.675 8.125L15 9.45L10 14.45ZM3.125 15.625V17.5H16.875V15.625H3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowDownLineIcon = createIcon("arrowDownLine", iconDefinition23);

// src/noticons/src/arrowLeft/default.icon.tsx
import { jsxDEV as jsxDEV26, Fragment as Fragment24 } from "react/jsx-dev-runtime";
var iconDefinition24 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV26(Fragment24, {
    children: /* @__PURE__ */ jsxDEV26("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM15 10.9375H7.8875L10.625 13.675L9.3 15L4.3 10L9.3 5L10.625 6.325L7.8875 9.0625H15V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowLeftIcon = createIcon("arrowLeft", iconDefinition24);

// src/noticons/src/arrowLeftBasic/default.icon.tsx
import { jsxDEV as jsxDEV27, Fragment as Fragment25 } from "react/jsx-dev-runtime";
var iconDefinition25 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV27(Fragment25, {
    children: /* @__PURE__ */ jsxDEV27("path", {
      d: "M17.5375 10.9375H6.05L11.2875 16.175L9.9625 17.5L2.4625 10L9.9625 2.5L11.2875 3.825L6.05 9.0625H17.5375V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowLeftBasicIcon = createIcon("arrowLeftBasic", iconDefinition25);

// src/noticons/src/arrowLeftLine/default.icon.tsx
import { jsxDEV as jsxDEV28, Fragment as Fragment26 } from "react/jsx-dev-runtime";
var iconDefinition26 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV28(Fragment26, {
    children: /* @__PURE__ */ jsxDEV28("path", {
      d: "M18.125 10.9375H9.1375L11.875 13.675L10.55 15L5.55 10L10.55 5L11.875 6.325L9.1375 9.0625H18.125V10.9375ZM2.5 16.875H4.375V3.125H2.5V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowLeftLineIcon = createIcon("arrowLeftLine", iconDefinition26);

// src/noticons/src/arrowNortheast/default.icon.tsx
import { jsxDEV as jsxDEV29, Fragment as Fragment27 } from "react/jsx-dev-runtime";
var iconDefinition27 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV29(Fragment27, {
    children: /* @__PURE__ */ jsxDEV29("path", {
      d: "M15.3125 4.6875V15.3125H13.4375V7.8875L5.3875 15.9375L4.0625 14.6125L12.1125 6.5625H4.6875V4.6875H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowNortheastIcon = createIcon("arrowNortheast", iconDefinition27);

// src/noticons/src/arrowNorthwest/default.icon.tsx
import { jsxDEV as jsxDEV30, Fragment as Fragment28 } from "react/jsx-dev-runtime";
var iconDefinition28 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV30(Fragment28, {
    children: /* @__PURE__ */ jsxDEV30("path", {
      d: "M14.6125 15.9375L6.5625 7.8875V15.3125H4.6875V4.6875H15.3125V6.5625H7.8875L15.9375 14.6125L14.6125 15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowNorthwestIcon = createIcon("arrowNorthwest", iconDefinition28);

// src/noticons/src/arrowRight/default.icon.tsx
import { jsxDEV as jsxDEV31, Fragment as Fragment29 } from "react/jsx-dev-runtime";
var iconDefinition29 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV31(Fragment29, {
    children: /* @__PURE__ */ jsxDEV31("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10.7 15L9.375 13.675L12.1125 10.9375H5V9.0625H12.1125L9.375 6.325L10.7 5L15.7 10L10.7 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowRightIcon = createIcon("arrowRight", iconDefinition29);

// src/noticons/src/arrowRightBasic/default.icon.tsx
import { jsxDEV as jsxDEV32, Fragment as Fragment30 } from "react/jsx-dev-runtime";
var iconDefinition30 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV32(Fragment30, {
    children: /* @__PURE__ */ jsxDEV32("path", {
      d: "M17.575 10L10.075 17.5L8.75 16.175L13.9875 10.9375H2.5V9.0625H13.9875L8.75 3.825L10.075 2.5L17.575 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowRightBasicIcon = createIcon("arrowRightBasic", iconDefinition30);

// src/noticons/src/arrowRightLine/default.icon.tsx
import { jsxDEV as jsxDEV33, Fragment as Fragment31 } from "react/jsx-dev-runtime";
var iconDefinition31 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV33(Fragment31, {
    children: /* @__PURE__ */ jsxDEV33("path", {
      d: "M9.45 5L14.45 10L9.45 15L8.125 13.675L10.8625 10.9375H1.875V9.0625H10.8625L8.125 6.325L9.45 5ZM15.625 3.125V16.875H17.5V3.125H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowRightLineIcon = createIcon("arrowRightLine", iconDefinition31);

// src/noticons/src/arrowSoutheast/default.icon.tsx
import { jsxDEV as jsxDEV34, Fragment as Fragment32 } from "react/jsx-dev-runtime";
var iconDefinition32 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV34(Fragment32, {
    children: /* @__PURE__ */ jsxDEV34("path", {
      d: "M15.3125 4.6875V15.3125H4.6875V13.4375H12.1125L4.0625 5.3875L5.3875 4.0625L13.4375 12.1125V4.6875H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowSoutheastIcon = createIcon("arrowSoutheast", iconDefinition32);

// src/noticons/src/arrowSouthwest/default.icon.tsx
import { jsxDEV as jsxDEV35, Fragment as Fragment33 } from "react/jsx-dev-runtime";
var iconDefinition33 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV35(Fragment33, {
    children: /* @__PURE__ */ jsxDEV35("path", {
      d: "M7.8875 13.4375H15.3125V15.3125H4.6875V4.6875H6.5625V12.1125L14.6125 4.0625L15.9375 5.3875L7.8875 13.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowSouthwestIcon = createIcon("arrowSouthwest", iconDefinition33);

// src/noticons/src/arrowTurnLeft/default.icon.tsx
import { jsxDEV as jsxDEV36, Fragment as Fragment34 } from "react/jsx-dev-runtime";
var iconDefinition34 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV36(Fragment34, {
    children: /* @__PURE__ */ jsxDEV36("path", {
      d: "M16.875 12.8125V17.5H15V12.8125C15 10.5 13.5625 9.0625 11.25 9.0625H6.01249L9.37499 12.425L8.04999 13.75L2.42499 8.125L8.04999 2.5L9.37499 3.825L6.01249 7.1875H11.25C14.7219 7.1875 16.875 9.34063 16.875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowTurnLeftIcon = createIcon("arrowTurnLeft", iconDefinition34);

// src/noticons/src/arrowTurnRight/default.icon.tsx
import { jsxDEV as jsxDEV37, Fragment as Fragment35 } from "react/jsx-dev-runtime";
var iconDefinition35 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV37(Fragment35, {
    children: /* @__PURE__ */ jsxDEV37("path", {
      d: "M17.575 8.125L11.95 13.75L10.625 12.425L13.9875 9.0625H8.75C6.4375 9.0625 5 10.5 5 12.8125V17.5H3.125V12.8125C3.125 9.34063 5.27813 7.1875 8.75 7.1875H13.9875L10.625 3.825L11.95 2.5L17.575 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowTurnRightIcon = createIcon("arrowTurnRight", iconDefinition35);

// src/noticons/src/arrowUp/default.icon.tsx
import { jsxDEV as jsxDEV38, Fragment as Fragment36 } from "react/jsx-dev-runtime";
var iconDefinition36 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV38(Fragment36, {
    children: /* @__PURE__ */ jsxDEV38("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.675 10.625L10.9375 7.8875V15H9.0625V7.8875L6.325 10.625L5 9.3L10 4.3L15 9.3L13.675 10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowUpIcon = createIcon("arrowUp", iconDefinition36);

// src/noticons/src/arrowUpBasic/default.icon.tsx
import { jsxDEV as jsxDEV39, Fragment as Fragment37 } from "react/jsx-dev-runtime";
var iconDefinition37 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV39(Fragment37, {
    children: /* @__PURE__ */ jsxDEV39("path", {
      d: "M16.175 11.25L10.9375 6.0125V17.5H9.0625V6.0125L3.825 11.25L2.5 9.925L10 2.425L17.5 9.925L16.175 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowUpBasicIcon = createIcon("arrowUpBasic", iconDefinition37);

// src/noticons/src/arrowUpLine/default.icon.tsx
import { jsxDEV as jsxDEV40, Fragment as Fragment38 } from "react/jsx-dev-runtime";
var iconDefinition38 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV40(Fragment38, {
    children: /* @__PURE__ */ jsxDEV40("path", {
      d: "M10 5.55L15 10.55L13.675 11.875L10.9375 9.1375V18.125H9.0625V9.1375L6.325 11.875L5 10.55L10 5.55ZM3.125 2.5V4.375H16.875V2.5H3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowUpLineIcon = createIcon("arrowUpLine", iconDefinition38);

// src/noticons/src/arrowsHorizontal/default.icon.tsx
import { jsxDEV as jsxDEV41, Fragment as Fragment39 } from "react/jsx-dev-runtime";
var iconDefinition39 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV41(Fragment39, {
    children: /* @__PURE__ */ jsxDEV41("path", {
      d: "M19.45 10L13.825 15.625L12.5 14.3L15.8625 10.9375H4.13749L7.49999 14.3L6.17499 15.625L0.549988 10L6.17499 4.375L7.49999 5.7L4.13749 9.0625H15.8594L12.4969 5.7L13.8219 4.375L19.4469 10H19.45Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowsHorizontalIcon = createIcon("arrowsHorizontal", iconDefinition39);

// src/noticons/src/arrowsSwapHorizontally/default.icon.tsx
import { jsxDEV as jsxDEV42, Fragment as Fragment40 } from "react/jsx-dev-runtime";
var iconDefinition40 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV42(Fragment40, {
    children: /* @__PURE__ */ jsxDEV42("path", {
      d: "M18.3563 5.625L14.2938 9.6875L12.9688 8.3625L14.7688 6.5625H13.75C12.0688 6.5625 10.9375 7.69375 10.9375 9.375V10.625C10.9375 13.3406 8.96563 15.3125 6.25 15.3125H5.23125L7.03125 17.1125L5.70625 18.4375L1.64375 14.375L5.70625 10.3125L7.03125 11.6375L5.23125 13.4375H6.25C7.93125 13.4375 9.0625 12.3062 9.0625 10.625V9.375C9.0625 6.65938 11.0344 4.6875 13.75 4.6875H14.7688L12.9688 2.8875L14.2938 1.5625L18.3563 5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowsSwapHorizontallyIcon = createIcon("arrowsSwapHorizontally", iconDefinition40);

// src/noticons/src/arrowsSwapVertically/default.icon.tsx
import { jsxDEV as jsxDEV43, Fragment as Fragment41 } from "react/jsx-dev-runtime";
var iconDefinition41 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV43(Fragment41, {
    children: /* @__PURE__ */ jsxDEV43("path", {
      d: "M18.4375 14.2938L14.375 18.3563L10.3125 14.2938L11.6375 12.9688L13.4375 14.7688V13.75C13.4375 12.0688 12.3062 10.9375 10.625 10.9375H9.375C6.65938 10.9375 4.6875 8.96567 4.6875 6.25005V5.2313L2.8875 7.0313L1.5625 5.7063L5.625 1.6438L9.6875 5.7063L8.3625 7.0313L6.5625 5.2313V6.25005C6.5625 7.9313 7.69375 9.06255 9.375 9.06255H10.625C13.3406 9.06255 15.3125 11.0344 15.3125 13.75V14.7688L17.1125 12.9688L18.4375 14.2938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowsSwapVerticallyIcon = createIcon("arrowsSwapVertically", iconDefinition41);

// src/noticons/src/arrowsVertical/default.icon.tsx
import { jsxDEV as jsxDEV44, Fragment as Fragment42 } from "react/jsx-dev-runtime";
var iconDefinition42 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV44(Fragment42, {
    children: /* @__PURE__ */ jsxDEV44("path", {
      d: "M14.3 12.5L15.625 13.825L10 19.45L4.375 13.825L5.7 12.5L9.0625 15.8625V4.1375L5.7 7.5L4.375 6.175L10 0.550003L15.625 6.175L14.3 7.5L10.9375 4.1375V15.8594L14.3 12.4969V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var arrowsVerticalIcon = createIcon("arrowsVertical", iconDefinition42);

// src/noticons/src/art/default.icon.tsx
import { jsxDEV as jsxDEV45, Fragment as Fragment43 } from "react/jsx-dev-runtime";
var iconDefinition43 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV45(Fragment43, {
    children: /* @__PURE__ */ jsxDEV45("path", {
      d: "M17.5 7.65625C17.9094 7.55312 18.125 7.27813 18.125 6.85625V3.125H14.3938C13.9719 3.125 13.6969 3.34063 13.5938 3.75C13.4906 4.15937 13.2156 4.375 12.7937 4.375C12.3719 4.375 12.0969 4.15937 11.9938 3.75L11.525 1.875H8.47812L8.00937 3.75C7.90625 4.15937 7.63125 4.375 7.20937 4.375C6.7875 4.375 6.5125 4.15937 6.40938 3.75C6.30625 3.34063 6.03125 3.125 5.60938 3.125H1.875V6.85625C1.875 7.27813 2.09063 7.55312 2.5 7.65625C2.90937 7.75938 3.125 8.03437 3.125 8.45625V11.5437C3.125 11.9656 2.90937 12.2406 2.5 12.3438C2.09063 12.4469 1.875 12.7219 1.875 13.1438V16.875H5.60625C6.02813 16.875 6.30312 16.6594 6.40625 16.25C6.50938 15.8406 6.78437 15.625 7.20625 15.625H12.7937C13.2156 15.625 13.4906 15.8406 13.5938 16.25C13.6969 16.6594 13.9719 16.875 14.3938 16.875H18.125V13.1438C18.125 12.7219 17.9094 12.4469 17.5 12.3438C17.0906 12.2406 16.875 11.9656 16.875 11.5437V8.45625C16.875 8.03437 17.0906 7.75938 17.5 7.65625ZM15 13.75H5V6.25H15V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var artIcon = createIcon("art", iconDefinition43);

// src/noticons/src/asterisk/default.icon.tsx
import { jsxDEV as jsxDEV46, Fragment as Fragment44 } from "react/jsx-dev-runtime";
var iconDefinition44 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV46(Fragment44, {
    children: /* @__PURE__ */ jsxDEV46("path", {
      d: "M11.875 10L16.9625 12.9375L16.025 14.5625L10.9375 11.625V17.5H9.06251V11.625L3.97501 14.5625L3.03751 12.9375L8.12501 10L3.03751 7.0625L3.97501 5.4375L9.06251 8.375V2.5H10.9375V8.375L16.025 5.4375L16.9625 7.0625L11.875 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var asteriskIcon = createIcon("asterisk", iconDefinition44);

// src/noticons/src/atm/default.icon.tsx
import { jsxDEV as jsxDEV47, Fragment as Fragment45 } from "react/jsx-dev-runtime";
var iconDefinition45 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV47(Fragment45, {
    children: /* @__PURE__ */ jsxDEV47("path", {
      d: "M15 8.125H16.875V15H3.125V8.125H5V10.625C6.54375 10.625 7.5 11.5813 7.5 13.125H12.5C12.5 11.5813 13.4563 10.625 15 10.625V8.125ZM12.1875 9.375V8.125H7.8125V9.375C7.8125 10.9187 8.65 11.875 10 11.875C11.35 11.875 12.1875 10.9187 12.1875 9.375ZM0 5V12.5H1.875V6.875H18.125V12.5H20V5H0Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var atmIcon = createIcon("atm", iconDefinition45);

// src/noticons/src/attachment/default.icon.tsx
import { jsxDEV as jsxDEV48, Fragment as Fragment46 } from "react/jsx-dev-runtime";
var iconDefinition46 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV48(Fragment46, {
    children: /* @__PURE__ */ jsxDEV48("path", {
      d: "M13.75 2.49999C12.7906 2.49999 11.8312 2.86562 11.0969 3.59687L5.58436 9.10937L6.24686 9.77187L4.12186 11.8969C3.48124 12.5375 3.15936 13.3781 3.15936 14.2156C3.15936 16.0281 4.62811 17.4969 6.44061 17.4969C7.28124 17.4969 8.11874 17.175 8.75936 16.5344L16.3969 8.89687C17.1281 8.16562 17.4937 7.20624 17.4937 6.24374C17.4937 4.17187 15.8156 2.49374 13.7437 2.49374L13.75 2.49999ZM7.43749 15.2125C7.16249 15.4875 6.80311 15.625 6.44374 15.625C5.66561 15.625 5.03749 14.9969 5.03749 14.2187C5.03749 13.8594 5.17499 13.5 5.44999 13.225L10.275 8.39999C10.4594 8.21562 10.6969 8.12499 10.9375 8.12499C11.4562 8.12499 11.875 8.54374 11.875 9.06249C11.875 9.30312 11.7844 9.54374 11.6 9.72499L8.89999 12.425L9.56249 13.0875L7.43749 15.2125ZM15.075 7.57499L13.7406 8.90937C13.6625 7.47812 12.5187 6.33437 11.0875 6.25624L12.4219 4.92187C12.7875 4.55624 13.2687 4.37187 13.7469 4.37187C14.7812 4.37187 15.6219 5.21249 15.6219 6.24687C15.6219 6.72812 15.4375 7.20624 15.0719 7.57187L15.075 7.57499Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var attachmentIcon = createIcon("attachment", iconDefinition46);

// src/noticons/src/avocado/default.icon.tsx
import { jsxDEV as jsxDEV49, Fragment as Fragment47 } from "react/jsx-dev-runtime";
var iconDefinition47 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV49(Fragment47, {
    children: /* @__PURE__ */ jsxDEV49("path", {
      d: "M14.6875 1.875C13.6875 1.875 12.7281 2.27187 12.0188 2.98125L10.4781 4.52188C9.77189 5.22813 8.81251 5.62813 7.80939 5.62813C4.53126 5.62813 1.87189 8.2875 1.87189 11.5656C1.87189 14.8437 4.53126 17.5031 7.80939 17.5031C10.0594 17.5031 12.1156 16.2312 13.1219 14.2188L17.1469 6.17188C17.3781 5.7125 17.4969 5.20625 17.4969 4.69063C17.4969 3.1375 16.2375 1.87813 14.6844 1.87813L14.6875 1.875ZM10.625 11.5625C10.625 13.1156 9.36564 14.375 7.81251 14.375C6.25939 14.375 5.00001 13.1156 5.00001 11.5625C5.00001 10.0094 6.25939 8.75 7.81251 8.75H10.625V11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var avocadoIcon = createIcon("avocado", iconDefinition47);

// src/noticons/src/baby/default.icon.tsx
import { jsxDEV as jsxDEV50, Fragment as Fragment48 } from "react/jsx-dev-runtime";
var iconDefinition48 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV50(Fragment48, {
    children: /* @__PURE__ */ jsxDEV50("path", {
      d: "M7.8125 4.6875C7.8125 3.47813 8.79063 2.5 10 2.5C11.2094 2.5 12.1875 3.47813 12.1875 4.6875C12.1875 5.89687 11.2094 6.875 10 6.875C8.79063 6.875 7.8125 5.89687 7.8125 4.6875ZM12.0781 8.44063C11.3906 7.98125 10.825 7.8125 10 7.8125C9.175 7.8125 8.60938 7.98438 7.92188 8.44063L5 10.3875L5.86563 11.6875L7.5 10.6V11.875H12.5V10.6L14.1344 11.6875L15 10.3875L12.0781 8.44063ZM7.425 12.8125L6.38125 13.8562C6.06563 14.1719 5.94063 14.475 5.94063 14.9219C5.94063 15.3687 6.06563 15.6719 6.38125 15.9875L7.89062 17.4969L8.99688 16.3906L8.05938 15.4531L9.06563 14.4469L7.42813 12.8094L7.425 12.8125ZM12.575 12.8125L10.9375 14.45L11.9438 15.4562L11.0063 16.3937L12.1125 17.5L13.6219 15.9906C13.9375 15.675 14.0625 15.3719 14.0625 14.925C14.0625 14.4781 13.9375 14.175 13.6219 13.8594L12.5781 12.8156L12.575 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var babyIcon = createIcon("baby", iconDefinition48);

// src/noticons/src/babyBottle/default.icon.tsx
import { jsxDEV as jsxDEV51, Fragment as Fragment49 } from "react/jsx-dev-runtime";
var iconDefinition49 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV51(Fragment49, {
    children: /* @__PURE__ */ jsxDEV51("path", {
      d: "M17.5 3.46875C17.5 2.99063 17.0094 2.5 16.5312 2.5C16.3031 2.5 16.0719 2.60312 15.8687 2.80625L15.0187 3.65625C14.4719 3.30312 13.8969 3.12813 13.3187 3.12813C12.6625 3.12813 12.0062 3.35625 11.3937 3.81562L10.7031 3.125L9.37811 4.45L10.2562 5.32812L9.33436 6.25H8.54061C7.79999 6.25 7.29686 6.45938 6.77186 6.98125L3.32186 10.4313C2.77499 10.9781 2.50311 11.5875 2.50311 12.2C2.50311 12.8125 2.77499 13.4219 3.32186 13.9688L6.03749 16.6844C6.58436 17.2312 7.19374 17.5031 7.80624 17.5031C8.41874 17.5031 9.02811 17.2312 9.57499 16.6844L13.025 13.2344C13.55 12.7094 13.7562 12.2062 13.7562 11.4656V10.6719L14.6781 9.75L15.5562 10.6281L16.8812 9.30313L16.1906 8.6125C16.65 8 16.8781 7.34375 16.8781 6.6875C16.8781 6.1125 16.7031 5.53437 16.35 4.9875L17.2 4.1375C17.4031 3.93437 17.5062 3.70312 17.5062 3.475L17.5 3.46875ZM12.3937 9.375H7.02811L8.09374 8.30937C8.22499 8.17812 8.34999 8.125 8.53436 8.125H9.84686C10.0312 8.125 10.1594 8.07188 10.2875 7.94063L11.575 6.65313L13.3437 8.42188L12.3906 9.375H12.3937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var babyBottleIcon = createIcon("babyBottle", iconDefinition49);

// src/noticons/src/backpack/default.icon.tsx
import { jsxDEV as jsxDEV52, Fragment as Fragment50 } from "react/jsx-dev-runtime";
var iconDefinition50 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV52(Fragment50, {
    children: /* @__PURE__ */ jsxDEV52("path", {
      d: "M13.75 4.76875V3.75C13.75 2.20625 12.7937 1.25 11.25 1.25H8.75C7.20625 1.25 6.25 2.20625 6.25 3.75V4.76875C5.0625 5.34375 4.375 6.525 4.375 8.125V17.5H15.625V8.125C15.625 6.525 14.9375 5.34688 13.75 4.76875ZM8.125 3.75C8.125 3.24063 8.24062 3.125 8.75 3.125H11.25C11.7594 3.125 11.875 3.24063 11.875 3.75V4.375H8.125V3.75ZM13.75 13.125H6.25V11.875H13.75V13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var backpackIcon = createIcon("backpack", iconDefinition50);

// src/noticons/src/backward/default.icon.tsx
import { jsxDEV as jsxDEV53, Fragment as Fragment51 } from "react/jsx-dev-runtime";
var iconDefinition51 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV53(Fragment51, {
    children: /* @__PURE__ */ jsxDEV53("path", {
      d: "M17.5 12.5H10.55V16.875H9.375L2.5 10L9.375 3.125H10.55V7.5H17.5V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var backwardIcon = createIcon("backward", iconDefinition51);

// src/noticons/src/badge/default.icon.tsx
import { jsxDEV as jsxDEV54, Fragment as Fragment52 } from "react/jsx-dev-runtime";
var iconDefinition52 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV54(Fragment52, {
    children: /* @__PURE__ */ jsxDEV54("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM8.125 4.375H11.875C12.2594 4.375 12.5 4.61562 12.5 5C12.5 5.38438 12.2594 5.625 11.875 5.625H8.125C7.74062 5.625 7.5 5.38438 7.5 5C7.5 4.61562 7.74062 4.375 8.125 4.375ZM11.5625 10.3125C11.5625 11.2781 10.9625 11.875 10 11.875C9.0375 11.875 8.4375 11.2781 8.4375 10.3125C8.4375 9.34688 9.03438 8.75 10 8.75C10.9656 8.75 11.5625 9.34688 11.5625 10.3125ZM7.1875 15.625C7.1875 13.8906 8.26562 12.8125 10 12.8125C11.7344 12.8125 12.8125 13.8906 12.8125 15.625H7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var badgeIcon = createIcon("badge", iconDefinition52);

// src/noticons/src/bag/default.icon.tsx
import { jsxDEV as jsxDEV55, Fragment as Fragment53 } from "react/jsx-dev-runtime";
var iconDefinition53 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV55(Fragment53, {
    children: /* @__PURE__ */ jsxDEV55("path", {
      d: "M15 2.5V10C15 11.0656 14.0844 11.8531 12.5 12.2375V14.375H10.9375V15C10.9375 16.4719 9.90938 17.5 8.4375 17.5H6.25V15.625H8.4375C8.88125 15.625 9.0625 15.4438 9.0625 15V14.375H7.5V12.2375C5.91562 11.8531 5 11.0688 5 10V8.75H7.5V7.5H5V5.625H7.5V4.375H5V2.5H15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bagIcon = createIcon("bag", iconDefinition53);

// src/noticons/src/baggageClaim/default.icon.tsx
import { jsxDEV as jsxDEV56, Fragment as Fragment54 } from "react/jsx-dev-runtime";
var iconDefinition54 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV56(Fragment54, {
    children: /* @__PURE__ */ jsxDEV56("path", {
      d: "M5 5V14.375C3.45625 14.375 2.5 13.4187 2.5 11.875V7.5C2.5 5.95625 3.45625 5 5 5ZM13.75 14.375H6.25V3.75C6.25 2.20625 7.20625 1.25 8.75 1.25H11.25C12.7937 1.25 13.75 2.20625 13.75 3.75V14.375ZM11.875 3.75C11.875 3.24063 11.7594 3.125 11.25 3.125H8.75C8.24062 3.125 8.125 3.24063 8.125 3.75V5H11.875V3.75ZM3.75 15.625C3.23125 15.625 2.8125 16.0437 2.8125 16.5625C2.8125 17.0813 3.23125 17.5 3.75 17.5C4.26875 17.5 4.6875 17.0813 4.6875 16.5625C4.6875 16.0437 4.26875 15.625 3.75 15.625ZM6.875 15.625C6.35625 15.625 5.9375 16.0437 5.9375 16.5625C5.9375 17.0813 6.35625 17.5 6.875 17.5C7.39375 17.5 7.8125 17.0813 7.8125 16.5625C7.8125 16.0437 7.39375 15.625 6.875 15.625ZM15 5V14.375C16.5437 14.375 17.5 13.4187 17.5 11.875V7.5C17.5 5.95625 16.5437 5 15 5ZM16.25 15.625C15.7312 15.625 15.3125 16.0437 15.3125 16.5625C15.3125 17.0813 15.7312 17.5 16.25 17.5C16.7688 17.5 17.1875 17.0813 17.1875 16.5625C17.1875 16.0437 16.7688 15.625 16.25 15.625ZM13.125 15.625C12.6062 15.625 12.1875 16.0437 12.1875 16.5625C12.1875 17.0813 12.6062 17.5 13.125 17.5C13.6438 17.5 14.0625 17.0813 14.0625 16.5625C14.0625 16.0437 13.6438 15.625 13.125 15.625ZM10 15.625C9.48125 15.625 9.0625 16.0437 9.0625 16.5625C9.0625 17.0813 9.48125 17.5 10 17.5C10.5188 17.5 10.9375 17.0813 10.9375 16.5625C10.9375 16.0437 10.5188 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var baggageClaimIcon = createIcon("baggageClaim", iconDefinition54);

// src/noticons/src/balloon/default.icon.tsx
import { jsxDEV as jsxDEV57, Fragment as Fragment55 } from "react/jsx-dev-runtime";
var iconDefinition55 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV57(Fragment55, {
    children: /* @__PURE__ */ jsxDEV57("path", {
      d: "M10.625 16.5625V16.25H11.875V15.5906C11.875 15.2031 11.7844 14.8188 11.6125 14.4719L11.2156 13.6781L13.9375 10.9563C15.0187 9.875 15.6281 8.40625 15.6281 6.875C15.6281 3.76875 13.1094 1.25 10.0031 1.25C6.89687 1.25 4.375 3.76875 4.375 6.875C4.375 8.40625 4.98437 9.875 6.06562 10.9563L8.7875 13.6781L8.39062 14.4719C8.21563 14.8188 8.12813 15.2031 8.12813 15.5906V16.25H9.37813V16.5625C9.37813 17.9094 10.2187 18.75 11.5656 18.75H15.0031V17.5H11.5656C10.9875 17.5 10.6281 17.1406 10.6281 16.5625H10.625ZM7.5 6.875H6.25C6.25 4.80312 7.92812 3.125 10 3.125V4.375C8.61875 4.375 7.5 5.49375 7.5 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var balloonIcon = createIcon("balloon", iconDefinition55);

// src/noticons/src/banana/default.icon.tsx
import { jsxDEV as jsxDEV58, Fragment as Fragment56 } from "react/jsx-dev-runtime";
var iconDefinition56 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV58(Fragment56, {
    children: /* @__PURE__ */ jsxDEV58("path", {
      d: "M5.63438 8.74687C5.00625 8.0375 4.775 7.50313 4.775 7.50313L5.625 6.5625C7.58125 7.60625 9.22813 7.95312 10.4781 7.81563C10.3406 7.95625 10.1969 8.08125 10.0344 8.18125C9.33125 8.61875 8.31875 8.85 7.10313 8.85C6.6375 8.85 6.14688 8.81563 5.63125 8.75L5.63438 8.74687ZM4.79688 12.4188C8.10313 12.1219 9.68438 11.0469 10.3656 10.3656C10.7938 9.9375 11.075 9.37188 11.2969 8.7625C11.1156 8.94063 10.9188 9.1 10.6969 9.24062C9.29375 10.1156 6.975 10.4187 3.825 9.6875L3.125 11.0563C3.125 11.0563 3.64688 11.7125 4.79688 12.4188ZM17.3938 7.41875C16.9031 4.3125 14.8938 1.875 14.8938 1.875L13.0188 2.8125C13.0188 2.8125 14.3094 3.71562 14.9656 5.025C12.5813 5.35625 13.3531 9.15 11.2531 11.25C9.78438 12.7188 7.03438 13.75 2.97188 13.75L2.50313 15.625C2.50313 15.625 4.84063 17.5 9.37813 17.5C13.5938 17.5 17.5031 13.75 17.5031 8.75C17.5031 8.32812 17.4719 7.86875 17.3969 7.41875H17.3938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bananaIcon = createIcon("banana", iconDefinition56);

// src/noticons/src/barcode/default.icon.tsx
import { jsxDEV as jsxDEV59, Fragment as Fragment57 } from "react/jsx-dev-runtime";
var iconDefinition57 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV59(Fragment57, {
    children: /* @__PURE__ */ jsxDEV59("path", {
      d: "M4.375 4.375H6.875V15.625H4.375V4.375ZM8.125 15.625H9.375V4.375H8.125V15.625ZM1.875 15.625H3.125V4.375H1.875V15.625ZM10.625 15.625H13.125V4.375H10.625V15.625ZM16.875 4.375V15.625H18.125V4.375H16.875ZM14.375 15.625H15.625V4.375H14.375V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var barcodeIcon = createIcon("barcode", iconDefinition57);

// src/noticons/src/barricade/default.icon.tsx
import { jsxDEV as jsxDEV60, Fragment as Fragment58 } from "react/jsx-dev-runtime";
var iconDefinition58 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV60(Fragment58, {
    children: /* @__PURE__ */ jsxDEV60("path", {
      d: "M15.625 4.375V2.5H13.75V4.375H6.25V2.5H4.375V4.375H2.5V11.875H4.375V17.5H6.25V11.875H13.75V17.5H15.625V11.875H17.5V4.375H15.625ZM5.625 10H4.375V6.25H6.875L5.625 10ZM10.625 10H8.125L9.375 6.25H11.875L10.625 10ZM15.625 10H13.125L14.375 6.25H15.625V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var barricadeIcon = createIcon("barricade", iconDefinition58);

// src/noticons/src/baseball/default.icon.tsx
import { jsxDEV as jsxDEV61, Fragment as Fragment59 } from "react/jsx-dev-runtime";
var iconDefinition59 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV61(Fragment59, {
    children: /* @__PURE__ */ jsxDEV61("path", {
      d: "M12.5 10C12.5 12.225 13.4 14.2438 14.8563 15.7156C13.5469 16.8281 11.8531 17.5 10 17.5C8.14687 17.5 6.45312 16.8281 5.14375 15.7156C6.6 14.2469 7.5 12.2281 7.5 10C7.5 7.77187 6.6 5.75625 5.14375 4.28437C6.45312 3.17188 8.14687 2.5 10 2.5C11.8531 2.5 13.5469 3.17188 14.8563 4.28437C13.4 5.75312 12.5 7.77187 12.5 10ZM4.2625 5.17187C3.1625 6.47812 2.5 8.15938 2.5 10C2.5 11.8406 3.1625 13.525 4.2625 14.8281C5.49063 13.5844 6.25 11.8813 6.25 10C6.25 8.11875 5.49063 6.4125 4.2625 5.17187ZM15.7375 5.17187C14.5094 6.41562 13.75 8.11875 13.75 10C13.75 11.8813 14.5094 13.5875 15.7375 14.8281C16.8375 13.5219 17.5 11.8406 17.5 10C17.5 8.15938 16.8375 6.475 15.7375 5.17187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var baseballIcon = createIcon("baseball", iconDefinition59);

// src/noticons/src/baseballCap/default.icon.tsx
import { jsxDEV as jsxDEV62, Fragment as Fragment60 } from "react/jsx-dev-runtime";
var iconDefinition60 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV62(Fragment60, {
    children: /* @__PURE__ */ jsxDEV62("path", {
      d: "M19.375 11.625L18.7125 12.6219C17.5406 14.3812 15.8062 14.8406 13.9156 13.8969L9.87813 11.8781H1.875V10.0031H4.375V8.75311H1.96875C2.4375 5.63749 4.70312 3.75311 8.125 3.75311C11.5469 3.75311 13.9594 5.63749 14.3219 9.10311L19.375 11.6281V11.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var baseballCapIcon = createIcon("baseballCap", iconDefinition60);

// src/noticons/src/basketball/default.icon.tsx
import { jsxDEV as jsxDEV63, Fragment as Fragment61 } from "react/jsx-dev-runtime";
var iconDefinition61 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV63(Fragment61, {
    children: /* @__PURE__ */ jsxDEV63("path", {
      d: "M5.59687 10.625C5.46562 12.0844 4.875 13.4094 3.975 14.4625C3.16562 13.3719 2.64688 12.0563 2.53125 10.625H5.6H5.59687ZM17.475 9.37501C17.3562 7.94376 16.8375 6.62814 16.0312 5.53751C15.1312 6.59064 14.5406 7.91876 14.4094 9.37501H17.4781H17.475ZM15.1969 4.59064C13.9906 3.43126 12.3969 2.67189 10.6281 2.52814V9.37501H13.1531C13.2937 7.54689 14.0406 5.88439 15.1937 4.59064H15.1969ZM3.975 5.53439C3.16562 6.62501 2.64688 7.94064 2.53125 9.37189H5.6C5.46875 7.91251 4.87812 6.58751 3.97812 5.53439H3.975ZM10.6281 10.6219V17.4688C12.3969 17.3219 13.9906 16.5656 15.1969 15.4063C14.0406 14.1156 13.2937 12.4531 13.1562 10.6219H10.6313H10.6281ZM16.0312 14.4594C16.8406 13.3688 17.3594 12.0531 17.475 10.6219H14.4062C14.5375 12.0813 15.1281 13.4063 16.0281 14.4594H16.0312ZM4.80938 15.4031C6.01562 16.5625 7.60938 17.3219 9.37813 17.4656V10.6188H6.85313C6.7125 12.4469 5.96562 14.1094 4.8125 15.4031H4.80938ZM6.85 9.36876H9.375V2.52814C7.60625 2.67501 6.0125 3.43126 4.80625 4.59064C5.9625 5.88126 6.70937 7.54376 6.84687 9.37501L6.85 9.36876Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var basketballIcon = createIcon("basketball", iconDefinition61);

// src/noticons/src/bathtub/default.icon.tsx
import { jsxDEV as jsxDEV64, Fragment as Fragment62 } from "react/jsx-dev-runtime";
var iconDefinition62 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV64(Fragment62, {
    children: /* @__PURE__ */ jsxDEV64("path", {
      d: "M18.75 10H17.5V13.125C17.5 14.6687 16.5437 15.625 15 15.625V17.5H13.125V15.625H8.125V17.5H6.25V15.5062C5.2375 15.2594 4.5 14.625 3.9625 13.5531L2.1875 10H1.25V8.125H15.625V5.3125C15.625 4.67188 15.3281 4.375 14.6875 4.375C14.0469 4.375 13.75 4.67188 13.75 5.3125V6.25H11.875V5.3125C11.875 3.63125 13.0063 2.5 14.6875 2.5C16.3687 2.5 17.5 3.63125 17.5 5.3125V8.125H18.75V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bathtubIcon = createIcon("bathtub", iconDefinition62);

// src/noticons/src/bathtubShower/default.icon.tsx
import { jsxDEV as jsxDEV65, Fragment as Fragment63 } from "react/jsx-dev-runtime";
var iconDefinition63 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV65(Fragment63, {
    children: /* @__PURE__ */ jsxDEV65("path", {
      d: "M18.75 11.875H17.5V15C17.5 16.5437 16.5437 17.5 15 17.5V19.375H13.125V17.5H8.125V19.375H6.25V17.3813C5.2375 17.1344 4.5 16.5 3.9625 15.4281L2.1875 11.875H1.25V10H15.625V3.33125C15.625 2.75625 15.3687 2.5 14.7937 2.5C14.5188 2.5 14.4031 2.54687 14.2062 2.74375L13.125 3.825V5.73125C13.125 6.10313 13.0219 6.35313 12.7594 6.61562L11.875 7.5L8.125 3.75L9.00938 2.86562C9.27188 2.60312 9.52188 2.5 9.89375 2.5H11.8L12.8813 1.41875C13.4281 0.871875 14.0188 0.625 14.7937 0.625C16.4125 0.625 17.5 1.7125 17.5 3.33125V10H18.75V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bathtubShowerIcon = createIcon("bathtubShower", iconDefinition63);

// src/noticons/src/battery/default.icon.tsx
import { jsxDEV as jsxDEV66, Fragment as Fragment64 } from "react/jsx-dev-runtime";
var iconDefinition64 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV66(Fragment64, {
    children: /* @__PURE__ */ jsxDEV66("path", {
      d: "M16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM18.75 8.125H18.125V11.875H18.75C19.5219 11.875 20 11.3969 20 10.625V9.375C20 8.60313 19.5219 8.125 18.75 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var batteryIcon = createIcon("battery", iconDefinition64);

// src/noticons/src/batteryCharged/default.icon.tsx
import { jsxDEV as jsxDEV67, Fragment as Fragment65 } from "react/jsx-dev-runtime";
var iconDefinition65 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV67(Fragment65, {
    children: /* @__PURE__ */ jsxDEV67("path", {
      d: "M16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V10.625H5.67188C5.90625 12.1813 7.04063 13.125 8.75 13.125H10.625V11.875H13.125V10.625H10.625V9.375H13.125V8.125H10.625V6.875H8.75C7.04063 6.875 5.90625 7.81875 5.67188 9.375H1.25V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM18.75 8.125H18.125V11.875H18.75C19.5219 11.875 20 11.3969 20 10.625V9.375C20 8.60313 19.5219 8.125 18.75 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var batteryChargedIcon = createIcon("batteryCharged", iconDefinition65);

// src/noticons/src/batteryCharging/default.icon.tsx
import { jsxDEV as jsxDEV68, Fragment as Fragment66 } from "react/jsx-dev-runtime";
var iconDefinition66 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV68(Fragment66, {
    children: /* @__PURE__ */ jsxDEV68("path", {
      d: "M20 9.375V10.625C20 11.3969 19.5219 11.875 18.75 11.875H18.125V8.125H18.75C19.5219 8.125 20 8.60313 20 9.375ZM16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM12.1875 9.375H9.6875V6.25H8.4375L5.9375 10V10.625H8.4375V13.75H9.6875L12.1875 10V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var batteryChargingIcon = createIcon("batteryCharging", iconDefinition66);

// src/noticons/src/bed/default.icon.tsx
import { jsxDEV as jsxDEV69, Fragment as Fragment67 } from "react/jsx-dev-runtime";
var iconDefinition67 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV69(Fragment67, {
    children: /* @__PURE__ */ jsxDEV69("path", {
      d: "M18.125 11.875V16.25H16.25V13.75H3.75V16.25H1.875V4.375H3.75V6.875H6.875C8.41875 6.875 9.375 7.83125 9.375 9.375H15.625C17.1687 9.375 18.125 10.3313 18.125 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bedIcon = createIcon("bed", iconDefinition67);

// src/noticons/src/bee/default.icon.tsx
import { jsxDEV as jsxDEV70, Fragment as Fragment68 } from "react/jsx-dev-runtime";
var iconDefinition68 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV70(Fragment68, {
    children: /* @__PURE__ */ jsxDEV70("path", {
      d: "M17.5 6.25C17 6.25 16.5281 6.44375 16.175 6.8L13.75 9.225V8.75313C13.75 7.59688 13.0313 6.87813 11.875 6.87813V6.25313C11.875 5.75312 11.7344 5.34063 11.4875 5.025L12.2125 4.3C12.6188 3.89375 12.9656 3.75 13.5375 3.75H13.7531V2.5H13.5375C12.6313 2.5 11.9688 2.775 11.3281 3.41563L10.3406 4.40313C10.2313 4.3875 10.1219 4.375 10.0031 4.375C9.88438 4.375 9.77188 4.3875 9.66563 4.40313L8.67813 3.41563C8.03751 2.775 7.37501 2.5 6.46876 2.5H6.25313V3.75H6.46876C7.04063 3.75 7.39063 3.89375 7.79376 4.3L8.51876 5.025C8.27188 5.3375 8.13126 5.75 8.13126 6.25313V6.87813C6.97501 6.87813 6.25626 7.59688 6.25626 8.75313V9.225L3.83126 6.8C3.47813 6.44688 3.00626 6.25 2.50626 6.25C1.46876 6.25 0.631256 7.0875 0.631256 8.125C0.631256 8.625 0.825006 9.09687 1.18126 9.45L2.50626 10.775V11.875C2.50626 12.6469 2.98438 13.125 3.75626 13.125H6.25626V13.5969C6.25626 14.1531 6.41251 14.5312 6.80626 14.9219L10.0063 18.1219L13.2063 14.9219C13.6 14.5281 13.7563 14.1531 13.7563 13.5969V13.125H16.2563C17.0281 13.125 17.5063 12.6469 17.5063 11.875V10.775L18.8313 9.45C19.1844 9.09687 19.3813 8.625 19.3813 8.125C19.3813 7.0875 18.5438 6.25 17.5063 6.25H17.5ZM11.875 13.3406C11.875 13.525 11.8219 13.6531 11.6906 13.7812L10 15.4719L8.30938 13.7812C8.17813 13.65 8.12501 13.525 8.12501 13.3406V13.125H11.875V13.3406ZM11.875 11.25H8.12501V9.375H11.875V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beeIcon = createIcon("bee", iconDefinition68);

// src/noticons/src/beer/default.icon.tsx
import { jsxDEV as jsxDEV71, Fragment as Fragment69 } from "react/jsx-dev-runtime";
var iconDefinition69 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV71(Fragment69, {
    children: /* @__PURE__ */ jsxDEV71("path", {
      d: "M12.1875 13.75C12.1875 11.875 15 11.25 15 6.875C15 4.375 13.75 2.5 13.75 2.5H6.25C6.25 2.5 5 4.375 5 6.875C5 11.25 7.8125 11.875 7.8125 13.75C7.8125 15 5.9375 15.625 5.9375 15.625V17.5H14.0625V15.625C14.0625 15.625 12.1875 15 12.1875 13.75ZM7.39687 4.375H12.6062C12.8563 4.98125 13.1281 5.87188 13.1281 6.875H6.87813C6.87813 5.87188 7.14688 4.98438 7.4 4.375H7.39687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beerIcon = createIcon("beer", iconDefinition69);

// src/noticons/src/beerBottle/default.icon.tsx
import { jsxDEV as jsxDEV72, Fragment as Fragment70 } from "react/jsx-dev-runtime";
var iconDefinition70 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV72(Fragment70, {
    children: /* @__PURE__ */ jsxDEV72("path", {
      d: "M7.31563 6.025L6.95312 3.125H7.5V1.25H3.75V3.125H4.29688L3.93438 6.025C3.025 6.525 2.5 7.47813 2.5 8.75V16.25C2.5 17.0219 2.97812 17.5 3.75 17.5H7.5C8.27187 17.5 8.75 17.0219 8.75 16.25V8.75C8.75 7.475 8.225 6.525 7.31563 6.025ZM6.875 13.75H4.375V9.375H6.875V13.75ZM15.9375 13.75C15.9375 11.875 18.125 11.25 18.125 6.875C18.125 4.375 16.875 2.5 16.875 2.5H11.25C11.25 2.5 10 4.375 10 6.875C10 11.25 12.1875 11.875 12.1875 13.75C12.1875 15 10.9375 15.625 10.9375 15.625V17.5H17.1875V15.625C17.1875 15.625 15.9375 15 15.9375 13.75ZM12.3969 4.375H15.7312C15.9812 4.98125 16.2531 5.87187 16.2531 6.875H11.8781C11.8781 5.87187 12.1469 4.98438 12.4 4.375H12.3969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beerBottleIcon = createIcon("beerBottle", iconDefinition70);

// src/noticons/src/bell/default.icon.tsx
import { jsxDEV as jsxDEV73, Fragment as Fragment71 } from "react/jsx-dev-runtime";
var iconDefinition71 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV73(Fragment71, {
    children: /* @__PURE__ */ jsxDEV73("path", {
      d: "M16.875 13.75H3.125L4.95313 6.44063C5.6 3.85313 7.33437 2.5 10 2.5C12.6656 2.5 14.4 3.85313 15.0469 6.44063L16.875 13.75ZM10 17.5C11.4594 17.5 12.5 16.4594 12.5 15H7.5C7.5 16.4594 8.54063 17.5 10 17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bellIcon = createIcon("bell", iconDefinition71);

// src/noticons/src/bellNotification/default.icon.tsx
import { jsxDEV as jsxDEV74, Fragment as Fragment72 } from "react/jsx-dev-runtime";
var iconDefinition72 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV74(Fragment72, {
    children: /* @__PURE__ */ jsxDEV74("path", {
      d: "M7.5 15H12.5C12.5 16.4594 11.4594 17.5 10 17.5C8.54063 17.5 7.5 16.4594 7.5 15ZM15 9.375C12.5844 9.375 10.625 7.41563 10.625 5C10.625 4.125 10.8844 3.3125 11.3281 2.62812C10.9156 2.54375 10.475 2.5 10 2.5C7.33125 2.5 5.6 3.85313 4.95313 6.44063L3.125 13.75H16.875L15.7625 9.30313C15.5156 9.34688 15.2594 9.375 15 9.375ZM15 1.875C13.275 1.875 11.875 3.275 11.875 5C11.875 6.725 13.275 8.125 15 8.125C16.725 8.125 18.125 6.725 18.125 5C18.125 3.275 16.725 1.875 15 1.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bellNotificationIcon = createIcon("bellNotification", iconDefinition72);

// src/noticons/src/bellOff/default.icon.tsx
import { jsxDEV as jsxDEV75, Fragment as Fragment73 } from "react/jsx-dev-runtime";
var iconDefinition73 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV75(Fragment73, {
    children: /* @__PURE__ */ jsxDEV75("path", {
      d: "M16.4031 13.75L6.4125 3.7625C7.29375 2.92812 8.5 2.5 10 2.5C12.6687 2.5 14.4 3.85313 15.0469 6.44063L16.875 13.75H16.4031ZM10 17.5C11.4594 17.5 12.5 16.4594 12.5 15H7.5C7.5 16.4594 8.54063 17.5 10 17.5ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM4.71875 7.37187L3.125 13.75H11.0969L4.71875 7.37187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bellOffIcon = createIcon("bellOff", iconDefinition73);

// src/noticons/src/belt/default.icon.tsx
import { jsxDEV as jsxDEV76, Fragment as Fragment74 } from "react/jsx-dev-runtime";
var iconDefinition74 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV76(Fragment74, {
    children: /* @__PURE__ */ jsxDEV76("path", {
      d: "M0.625 13.125H6.25V6.875H0.625V13.125ZM3.4375 9.0625C3.95625 9.0625 4.375 9.48125 4.375 10C4.375 10.5188 3.95625 10.9375 3.4375 10.9375C2.91875 10.9375 2.5 10.5188 2.5 10C2.5 9.48125 2.91875 9.0625 3.4375 9.0625ZM10.625 14.375H16.25V16.25H10.625C8.69687 16.25 7.5 15.0531 7.5 13.125V6.875C7.5 4.94687 8.69687 3.75 10.625 3.75H16.25V5.625H10.625C9.85312 5.625 9.375 6.10313 9.375 6.875V13.125C9.375 13.8969 9.85312 14.375 10.625 14.375ZM18.4375 6.875H10.625V9.375H12.5V10.625H10.625V13.125H18.4375L20 10L18.4375 6.875ZM15.3125 10.9375C14.7937 10.9375 14.375 10.5188 14.375 10C14.375 9.48125 14.7937 9.0625 15.3125 9.0625C15.8313 9.0625 16.25 9.48125 16.25 10C16.25 10.5188 15.8313 10.9375 15.3125 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var beltIcon = createIcon("belt", iconDefinition74);

// src/noticons/src/bicycle/default.icon.tsx
import { jsxDEV as jsxDEV77, Fragment as Fragment75 } from "react/jsx-dev-runtime";
var iconDefinition75 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV77(Fragment75, {
    children: [
      /* @__PURE__ */ jsxDEV77("g", {
        "clip-path": "url(#clip0_1501_15204)",
        children: /* @__PURE__ */ jsxDEV77("path", {
          d: "M16.5625 9.375C16.3562 9.375 16.1562 9.39687 15.9625 9.43125L13.7156 3.4375H9.99999V4.6875H12.8469L13.7844 7.1875H8.24374L7.77499 5.9375H4.05937V7.1875H6.90624L7.09062 7.68125L5.18437 9.85938C4.67187 9.55312 4.07187 9.375 3.43124 9.375C1.53124 9.375 -0.0062561 10.9125 -0.0062561 12.8125C-0.0062561 14.7125 1.53124 16.25 3.43124 16.25C5.11562 16.25 6.51562 15.0375 6.80937 13.4375H9.96562L14.2812 8.525L14.7844 9.86875C13.7875 10.4719 13.1187 11.5625 13.1187 12.8125C13.1187 14.7125 14.6562 16.25 16.5562 16.25C18.4562 16.25 19.9937 14.7125 19.9937 12.8125C19.9937 10.9125 18.4562 9.375 16.5562 9.375H16.5625ZM8.78437 12.1875H6.81562C6.71249 11.625 6.47187 11.1125 6.13124 10.6813L7.59374 9.00938L8.78437 12.1875ZM9.90624 11.6156L8.71562 8.4375H12.7L9.90624 11.6156Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV77("defs", {
        children: /* @__PURE__ */ jsxDEV77("clipPath", {
          id: "clip0_1501_15204",
          children: /* @__PURE__ */ jsxDEV77("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var bicycleIcon = createIcon("bicycle", iconDefinition75);

// src/noticons/src/bikini/default.icon.tsx
import { jsxDEV as jsxDEV78, Fragment as Fragment76 } from "react/jsx-dev-runtime";
var iconDefinition76 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV78(Fragment76, {
    children: /* @__PURE__ */ jsxDEV78("path", {
      d: "M5 13.4375H15V15.625C12.8719 16.1031 11.4156 17.5594 10.9375 19.6875H9.0625C8.58437 17.5594 7.12812 16.1031 5 15.625V13.4375ZM15.3781 5.2875L14.9438 4.41875C14.6187 3.76563 14.3625 3.08125 14.1875 2.37188L13.75 0.625H12.1875V1.25L13.0312 4.625L10 7.65625L6.96875 4.625L7.8125 1.25V0.625H6.25L5.8125 2.37188C5.63438 3.08125 5.38125 3.76563 5.05625 4.41875L4.62187 5.2875C4.25313 6.02187 4.0625 6.83437 4.0625 7.65625C4.0625 9.29688 5.39062 10.625 7.03125 10.625C8.02813 10.625 8.90937 10.1313 9.45 9.375H10.5531C11.0906 10.1313 11.9719 10.625 12.9719 10.625C14.6125 10.625 15.9406 9.29688 15.9406 7.65625C15.9406 6.83437 15.75 6.025 15.3813 5.2875H15.3781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bikiniIcon = createIcon("bikini", iconDefinition76);

// src/noticons/src/binoculars/default.icon.tsx
import { jsxDEV as jsxDEV79, Fragment as Fragment77 } from "react/jsx-dev-runtime";
var iconDefinition77 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV79(Fragment77, {
    children: /* @__PURE__ */ jsxDEV79("path", {
      d: "M17.9719 11.8938L16.3281 5.31875C16.0063 4.03125 14.8469 3.125 13.5188 3.125C11.9188 3.125 10.6219 4.42188 10.6219 6.02188V8.925C10.4375 8.81875 10.225 8.75313 9.99688 8.75313C9.76875 8.75313 9.55625 8.81875 9.37188 8.925V6.02188C9.37188 4.42188 8.075 3.125 6.475 3.125C5.14688 3.125 3.9875 4.02813 3.66563 5.31875L2.02188 11.8938C1.92188 12.2969 1.86875 12.7094 1.86875 13.125C1.86875 15.1969 3.54688 16.875 5.61875 16.875C7.475 16.875 9.01563 15.5219 9.3125 13.75H10.675C10.9719 15.5219 12.5125 16.875 14.3688 16.875C16.4406 16.875 18.1188 15.1969 18.1188 13.125C18.1188 12.7094 18.0688 12.2969 17.9656 11.8938H17.9719ZM5.625 15C4.59063 15 3.75 14.1594 3.75 13.125C3.75 12.0906 4.59063 11.25 5.625 11.25C6.65938 11.25 7.5 12.0906 7.5 13.125C7.5 14.1594 6.65938 15 5.625 15ZM14.375 15C13.3406 15 12.5 14.1594 12.5 13.125C12.5 12.0906 13.3406 11.25 14.375 11.25C15.4094 11.25 16.25 12.0906 16.25 13.125C16.25 14.1594 15.4094 15 14.375 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var binocularsIcon = createIcon("binoculars", iconDefinition77);

// src/noticons/src/bloodPressure/default.icon.tsx
import { jsxDEV as jsxDEV80, Fragment as Fragment78 } from "react/jsx-dev-runtime";
var iconDefinition78 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV80(Fragment78, {
    children: /* @__PURE__ */ jsxDEV80("path", {
      d: "M9.04688 14.375C9.75 14.375 10.3062 14.1437 10.8031 13.6469L13.0969 11.3531C13.6562 11.6813 14.3031 11.875 15 11.875C17.0719 11.875 18.75 10.1969 18.75 8.125C18.75 6.05312 17.0719 4.375 15 4.375C12.9281 4.375 11.25 6.05312 11.25 8.125C11.25 8.81875 11.4437 9.46875 11.7719 10.0281L9.47813 12.3219C9.32812 12.4719 9.25625 12.5 9.04688 12.5C8.60938 12.5 8.4375 12.3281 8.4375 11.8906V10H10V2.5H1.875V10H3.4375V11.875C3.4375 15.2906 5.64687 17.5 9.0625 17.5H11.4375C11.7875 18.2875 12.6062 18.75 13.75 18.75C15.2937 18.75 16.25 17.9125 16.25 16.5625C16.25 15.2125 15.2937 14.375 13.75 14.375C12.6062 14.375 11.7844 14.8375 11.4375 15.625H9.0625C6.67812 15.625 5.3125 14.2594 5.3125 11.875V10H6.5625V11.8906C6.5625 13.3531 7.58438 14.375 9.04688 14.375ZM13.6969 5.9375L15.3125 7.55312L14.4281 8.4375L12.8125 6.82188L13.6969 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bloodPressureIcon = createIcon("bloodPressure", iconDefinition78);

// src/noticons/src/bluetooth/default.icon.tsx
import { jsxDEV as jsxDEV81, Fragment as Fragment79 } from "react/jsx-dev-runtime";
var iconDefinition79 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV81(Fragment79, {
    children: /* @__PURE__ */ jsxDEV81("path", {
      d: "M12.0094 7.1875L10.3125 8.64062V5.73438L12.0094 7.1875ZM10.3125 14.2656L12.0094 12.8125L10.3125 11.3594V14.2656ZM16.25 10C16.25 15.0125 13.8562 18.125 10 18.125C6.14375 18.125 3.75 15.0125 3.75 10C3.75 4.9875 6.14375 1.875 10 1.875C13.8562 1.875 16.25 4.9875 16.25 10ZM10.6469 10L13.9281 7.1875L9.0625 3.01562V8.64062L6.8125 6.7125L6 7.6625L8.72813 10L6 12.3375L6.8125 13.2875L9.0625 11.3594V16.9844L13.9281 12.8125L10.6469 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bluetoothIcon = createIcon("bluetooth", iconDefinition79);

// src/noticons/src/boardingPass/default.icon.tsx
import { jsxDEV as jsxDEV82, Fragment as Fragment80 } from "react/jsx-dev-runtime";
var iconDefinition80 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV82(Fragment80, {
    children: /* @__PURE__ */ jsxDEV82("path", {
      d: "M15.625 4.375H13.75V6.25H12.5V4.375H4.375C2.83125 4.375 1.875 5.33125 1.875 6.875V13.125C1.875 14.6687 2.83125 15.625 4.375 15.625H12.5V13.75H13.75V15.625H15.625C17.1687 15.625 18.125 14.6687 18.125 13.125V6.875C18.125 5.33125 17.1687 4.375 15.625 4.375ZM11.5625 11.5625L8.4375 10.7812V12.5L9.6875 13.125V14.0625L7.5 13.5156L5.3125 14.0625V13.125L6.5625 12.5V10.7812L3.4375 11.5625V10.3125L6.5625 8.75V7.5C6.5625 6.44062 6.92188 5.9375 7.5 5.9375C8.07812 5.9375 8.4375 6.44062 8.4375 7.5V8.75L11.5625 10.3125V11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boardingPassIcon = createIcon("boardingPass", iconDefinition80);

// src/noticons/src/boat/default.icon.tsx
import { jsxDEV as jsxDEV83, Fragment as Fragment81 } from "react/jsx-dev-runtime";
var iconDefinition81 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV83(Fragment81, {
    children: /* @__PURE__ */ jsxDEV83("path", {
      d: "M5.42187 14.6406C5.82187 14.8687 6.05625 15 6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.74062 14.2656 8.64687 13.75 10 13.75C11.3531 13.75 12.2656 14.2656 12.9219 14.6406C13.3219 14.8687 13.5562 15 13.75 15C13.9437 15 14.225 14.8406 14.5781 14.6406C14.9281 14.4406 15.35 14.2062 15.8687 14.025L16.875 9.99999V9.27186L15.7062 9.07811L14.375 3.75311H12.5V1.87811H7.5V3.75311H5.625L4.29375 9.07811L3.125 9.27186V9.99999L4.13125 14.025C4.65 14.2062 5.07187 14.4437 5.42187 14.6437V14.6406ZM7.09062 5.62499H12.9125L13.6906 8.74061L10 8.12499L6.30937 8.74061L7.0875 5.62499H7.09062ZM17.5031 15V16.875C16.3219 16.875 15.5937 18.125 13.7531 18.125C11.9125 18.125 11.2094 16.875 10.0031 16.875C8.79687 16.875 8.09375 18.125 6.25312 18.125C4.4125 18.125 3.70937 16.875 2.50312 16.875V15C4.36875 15 5.04687 16.25 6.25312 16.25C7.45937 16.25 8.1625 15 10.0031 15C11.8437 15 12.5469 16.25 13.7531 16.25C14.9594 16.25 15.6625 15 17.5031 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boatIcon = createIcon("boat", iconDefinition81);

// src/noticons/src/bomb/default.icon.tsx
import { jsxDEV as jsxDEV84, Fragment as Fragment82 } from "react/jsx-dev-runtime";
var iconDefinition82 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV84(Fragment82, {
    children: /* @__PURE__ */ jsxDEV84("path", {
      d: "M19.375 4.6875V5.3125L17.625 5.75L17.1875 7.5H16.5625L16.125 5.75C15.7531 5.65625 15.4906 5.625 15.1094 5.625H14.7844C14.2438 5.625 13.8719 5.775 13.4906 6.14375L14.3719 7.025L13.0375 8.35938C13.4906 9.225 13.7469 10.2031 13.7469 11.2469C13.7469 14.7 10.95 17.4969 7.49687 17.4969C4.04375 17.4969 1.25 14.7031 1.25 11.25C1.25 7.79688 4.04688 5 7.5 5C8.54375 5 9.525 5.25938 10.3875 5.70938L11.7219 4.375L12.6062 5.25938C13.25 4.62812 13.8719 4.375 14.7844 4.375H15.1094C15.4906 4.375 15.7531 4.34375 16.125 4.25L16.5625 2.5H17.1875L17.625 4.25L19.375 4.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bombIcon = createIcon("bomb", iconDefinition82);

// src/noticons/src/bone/default.icon.tsx
import { jsxDEV as jsxDEV85, Fragment as Fragment83 } from "react/jsx-dev-runtime";
var iconDefinition83 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV85(Fragment83, {
    children: /* @__PURE__ */ jsxDEV85("path", {
      d: "M17.5 6.25C17.5 7.02187 17.0219 7.5 16.25 7.5H15.3031C14.5625 7.5 14.0594 7.70937 13.5344 8.23125L8.23125 13.5344C7.70625 14.0594 7.5 14.5625 7.5 15.3031V16.25C7.5 17.0219 7.02187 17.5 6.25 17.5C5.47813 17.5 5 17.0219 5 16.25V15H3.75C2.97812 15 2.5 14.5219 2.5 13.75C2.5 12.9781 2.97812 12.5 3.75 12.5H4.69687C5.4375 12.5 5.94063 12.2906 6.46563 11.7688L11.7688 6.46563C12.2937 5.94063 12.5 5.4375 12.5 4.69687V3.75C12.5 2.97812 12.9781 2.5 13.75 2.5C14.5219 2.5 15 2.97812 15 3.75V5H16.25C17.0219 5 17.5 5.47813 17.5 6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boneIcon = createIcon("bone", iconDefinition83);

// src/noticons/src/book/default.icon.tsx
import { jsxDEV as jsxDEV86, Fragment as Fragment84 } from "react/jsx-dev-runtime";
var iconDefinition84 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV86(Fragment84, {
    children: /* @__PURE__ */ jsxDEV86("path", {
      d: "M9.375 6.25V16.875H7.8125L7.22188 15.6906C6.98438 15.2188 6.63438 15 6.10313 15H1.875V3.75H6.875C8.41875 3.75 9.375 4.70625 9.375 6.25ZM13.125 3.75C11.5813 3.75 10.625 4.70625 10.625 6.25V16.875H12.1875L12.7781 15.6906C13.0156 15.2188 13.3656 15 13.8969 15H18.125V3.75H13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bookIcon = createIcon("book", iconDefinition84);

// src/noticons/src/bookClosed/default.icon.tsx
import { jsxDEV as jsxDEV87, Fragment as Fragment85 } from "react/jsx-dev-runtime";
var iconDefinition85 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV87(Fragment85, {
    children: /* @__PURE__ */ jsxDEV87("path", {
      d: "M16.875 5.625V17.5H7.28437C6.54375 17.5 6.04062 17.2906 5.51562 16.7688L3.85625 15.1094C3.33125 14.5844 3.125 14.0812 3.125 13.3406V2.5H13.75V14.375H5.775L7.025 15.625H15V5.625H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bookClosedIcon = createIcon("bookClosed", iconDefinition85);

// src/noticons/src/bookmark/default.icon.tsx
import { jsxDEV as jsxDEV88, Fragment as Fragment86 } from "react/jsx-dev-runtime";
var iconDefinition86 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV88(Fragment86, {
    children: /* @__PURE__ */ jsxDEV88("path", {
      d: "M15 5V17.5H13.75L10 13.75L6.25 17.5H5V5C5 3.45625 5.95625 2.5 7.5 2.5H12.5C14.0437 2.5 15 3.45625 15 5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bookmarkIcon = createIcon("bookmark", iconDefinition86);

// src/noticons/src/bookmarkOutline/default.icon.tsx
import { jsxDEV as jsxDEV89, Fragment as Fragment87 } from "react/jsx-dev-runtime";
var iconDefinition87 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV89(Fragment87, {
    children: /* @__PURE__ */ jsxDEV89("path", {
      d: "M12.8125 2.5H7.1875C5.64375 2.5 4.6875 3.45625 4.6875 5V17.5H6.5625L10 14.0625L13.4375 17.5H15.3125V5C15.3125 3.45625 14.3562 2.5 12.8125 2.5ZM13.4375 14.8469L10 11.4094L6.5625 14.8469V5C6.5625 4.61562 6.80312 4.375 7.1875 4.375H12.8125C13.1969 4.375 13.4375 4.61562 13.4375 5V14.8469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bookmarkOutlineIcon = createIcon("bookmarkOutline", iconDefinition87);

// src/noticons/src/boombox/default.icon.tsx
import { jsxDEV as jsxDEV90, Fragment as Fragment88 } from "react/jsx-dev-runtime";
var iconDefinition88 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV90(Fragment88, {
    children: /* @__PURE__ */ jsxDEV90("path", {
      d: "M15 6.25V5C15 3.45625 14.0437 2.5 12.5 2.5H7.5C5.95625 2.5 5 3.45625 5 5V6.25H1.25V16.25H18.75V6.25H15ZM6.875 5C6.875 4.49063 6.99062 4.375 7.5 4.375H12.5C13.0094 4.375 13.125 4.49063 13.125 5V6.25H6.875V5ZM5 13.4375C3.79063 13.4375 2.8125 12.4594 2.8125 11.25C2.8125 10.0406 3.79063 9.0625 5 9.0625C6.20937 9.0625 7.1875 10.0406 7.1875 11.25C7.1875 12.4594 6.20937 13.4375 5 13.4375ZM11.25 12.5H8.75V10H11.25V12.5ZM15 13.4375C13.7906 13.4375 12.8125 12.4594 12.8125 11.25C12.8125 10.0406 13.7906 9.0625 15 9.0625C16.2094 9.0625 17.1875 10.0406 17.1875 11.25C17.1875 12.4594 16.2094 13.4375 15 13.4375ZM5.9375 11.25C5.9375 11.7688 5.51875 12.1875 5 12.1875C4.48125 12.1875 4.0625 11.7688 4.0625 11.25C4.0625 10.7312 4.48125 10.3125 5 10.3125C5.51875 10.3125 5.9375 10.7312 5.9375 11.25ZM15.9375 11.25C15.9375 11.7688 15.5188 12.1875 15 12.1875C14.4812 12.1875 14.0625 11.7688 14.0625 11.25C14.0625 10.7312 14.4812 10.3125 15 10.3125C15.5188 10.3125 15.9375 10.7312 15.9375 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var boomboxIcon = createIcon("boombox", iconDefinition88);

// src/noticons/src/boot/default.icon.tsx
import { jsxDEV as jsxDEV91, Fragment as Fragment89 } from "react/jsx-dev-runtime";
var iconDefinition89 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV91(Fragment89, {
    children: /* @__PURE__ */ jsxDEV91("path", {
      d: "M17.5 15C17.5 15 16.25 16.875 12.5 16.875H9.6875L7.8125 15H6.875V16.875H3.75L2.725 12.7719C2.55938 12.1062 2.5 11.6375 2.5 10.9531C2.5 10.2687 2.55625 9.79999 2.725 9.13436L3.125 7.53124V3.12811H9.375V8.12811L14.375 12.5031L17.5 13.2844V15.0031V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bootIcon = createIcon("boot", iconDefinition89);

// src/noticons/src/bounce/default.icon.tsx
import { jsxDEV as jsxDEV92, Fragment as Fragment90 } from "react/jsx-dev-runtime";
var iconDefinition90 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV92(Fragment90, {
    children: /* @__PURE__ */ jsxDEV92("path", {
      d: "M20 9.375L13.75 15.625H12.5V12.5H11.25C9.32187 12.5 8.125 13.6969 8.125 15.625H6.25C6.25 13.6969 5.05312 12.5 3.125 12.5H0.625V6.25H2.5C4.85938 6.25 6.52812 7.37188 7.1875 9.27813C7.84688 7.37188 9.51562 6.25 11.875 6.25H12.5V3.125H13.75L20 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bounceIcon = createIcon("bounce", iconDefinition90);

// src/noticons/src/bowl/default.icon.tsx
import { jsxDEV as jsxDEV93, Fragment as Fragment91 } from "react/jsx-dev-runtime";
var iconDefinition91 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV93(Fragment91, {
    children: /* @__PURE__ */ jsxDEV93("path", {
      d: "M14.0406 13.25L13.75 15H6.25L5.95937 13.25C3.37188 12.0531 1.875 9.59062 1.875 6.25H18.125C18.125 9.59062 16.6281 12.0531 14.0406 13.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bowlIcon = createIcon("bowl", iconDefinition91);

// src/noticons/src/bowlFood/default.icon.tsx
import { jsxDEV as jsxDEV94, Fragment as Fragment92 } from "react/jsx-dev-runtime";
var iconDefinition92 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV94(Fragment92, {
    children: /* @__PURE__ */ jsxDEV94("path", {
      d: "M14.0406 15.125L13.75 16.875H6.25L5.95937 15.125C3.37188 13.9281 1.875 11.4656 1.875 8.125H18.125C18.125 11.4656 16.6281 13.9281 14.0406 15.125ZM12.5 6.875H16.25C16.25 4.94688 15.0531 3.75 13.125 3.75C12.5656 3.75 12.0687 3.85312 11.6437 4.04375C10.8937 3.05625 9.68125 2.5 8.125 2.5C5.425 2.5 3.75 4.175 3.75 6.875H12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bowlFoodIcon = createIcon("bowlFood", iconDefinition92);

// src/noticons/src/bowling/default.icon.tsx
import { jsxDEV as jsxDEV95, Fragment as Fragment93 } from "react/jsx-dev-runtime";
var iconDefinition93 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV95(Fragment93, {
    children: /* @__PURE__ */ jsxDEV95("path", {
      d: "M13.7156 5.3125C13.5844 4.1875 13.125 3.72813 13.125 2.65625C13.125 1.58437 13.7094 0.625 14.6875 0.625C15.6656 0.625 16.25 1.54375 16.25 2.65625C16.25 3.76875 15.7937 4.1875 15.6594 5.3125H13.7125H13.7156ZM15.7031 6.5625H13.6719C13.5281 7.18125 13.2 7.81875 12.8625 8.50312C13.425 9.5 13.75 10.65 13.75 11.875C13.75 13.3687 13.2688 14.7531 12.4563 15.8813C12.7812 16.9312 13.125 17.5 13.125 17.5H16.25C16.25 17.5 17.5 15.4438 17.5 11.875C17.5 9.6875 16.0562 8.07188 15.7031 6.5625ZM12.5 11.875C12.5 14.9812 9.98125 17.5 6.875 17.5C3.76875 17.5 1.25 14.9812 1.25 11.875C1.25 8.76875 3.76875 6.25 6.875 6.25C9.98125 6.25 12.5 8.76875 12.5 11.875ZM5.3125 10C5.83125 10 6.25 9.58125 6.25 9.0625C6.25 8.54375 5.83125 8.125 5.3125 8.125C4.79375 8.125 4.375 8.54375 4.375 9.0625C4.375 9.58125 4.79375 10 5.3125 10ZM7.8125 12.1875C7.8125 11.6687 7.39375 11.25 6.875 11.25C6.35625 11.25 5.9375 11.6687 5.9375 12.1875C5.9375 12.7063 6.35625 13.125 6.875 13.125C7.39375 13.125 7.8125 12.7063 7.8125 12.1875ZM9.375 9.0625C9.375 8.54375 8.95625 8.125 8.4375 8.125C7.91875 8.125 7.5 8.54375 7.5 9.0625C7.5 9.58125 7.91875 10 8.4375 10C8.95625 10 9.375 9.58125 9.375 9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bowlingIcon = createIcon("bowling", iconDefinition93);

// src/noticons/src/bra/default.icon.tsx
import { jsxDEV as jsxDEV96, Fragment as Fragment94 } from "react/jsx-dev-runtime";
var iconDefinition94 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV96(Fragment94, {
    children: /* @__PURE__ */ jsxDEV96("path", {
      d: "M18.125 12.3438C18.125 14.5 16.375 16.25 14.2188 16.25C12.8062 16.25 11.5719 15.4969 10.8875 14.375H9.1125C8.425 15.4969 7.19375 16.25 5.78125 16.25C3.625 16.25 1.875 14.5 1.875 12.3438C1.875 11.5219 2.06563 10.7125 2.43437 9.975L3.4375 7.96875V2.5H5.3125V7.96875L9.21875 11.875H10.7812L14.6875 7.96875V2.5H16.5625V7.96875L17.5656 9.975C17.9344 10.7094 18.125 11.5219 18.125 12.3438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var braIcon = createIcon("bra", iconDefinition94);

// src/noticons/src/brain/default.icon.tsx
import { jsxDEV as jsxDEV97, Fragment as Fragment95 } from "react/jsx-dev-runtime";
var iconDefinition95 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV97(Fragment95, {
    children: /* @__PURE__ */ jsxDEV97("path", {
      d: "M16.25 9.22814C16.25 9.40314 16.1312 9.55626 15.9156 9.60939L15.1375 9.80314L14.825 11.6813C14.7375 12.1969 14.4 12.4969 13.9344 12.4969C13.8406 12.4969 13.7406 12.4844 13.6375 12.4594L11.8781 12.0188V13.1219L13.475 16.3125C13.6594 16.6813 13.7531 17.0844 13.7531 17.4969H10.6281V8.74689L13.2719 7.42501C13.2781 7.34689 13.2844 7.26564 13.2844 7.18439C13.2844 5.54376 11.9562 4.21564 10.3156 4.21564C8.675 4.21564 7.34687 5.54376 7.34687 7.18439C7.34687 8.49689 8.2 9.60626 9.37812 10V17.4969H5.00312C5.00312 15.7906 6.25312 14.3719 8.12812 13.4344V11.3281C6.64062 10.5406 5.62812 8.98126 5.62812 7.18439C5.62812 4.59689 7.72812 2.49689 10.3156 2.49689C12.9031 2.49689 15.0031 4.59689 15.0031 7.18439C15.0031 7.25626 14.9969 7.32814 14.9937 7.40001L16.1531 8.94689C16.2219 9.03751 16.2531 9.13439 16.2531 9.22501L16.25 9.22814Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var brainIcon = createIcon("brain", iconDefinition95);

// src/noticons/src/branch/default.icon.tsx
import { jsxDEV as jsxDEV98, Fragment as Fragment96 } from "react/jsx-dev-runtime";
var iconDefinition96 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV98(Fragment96, {
    children: /* @__PURE__ */ jsxDEV98("path", {
      d: "M17.7375 7.18749L15.875 5.32499V7.96874C15.875 9.69686 15.2594 10.9312 13.875 11.9687L12.125 13.2812C11.2125 13.9656 10.875 14.6406 10.875 15.7812V17.5H9V15.7812C9 14.6406 8.6625 13.9656 7.75 13.2812L6 11.9687C4.61563 10.9312 4 9.69686 4 7.96874V5.44999L2.2625 7.18749L0.9375 5.86249L5 1.79999L9.0625 5.86249L7.7375 7.18749L5.875 5.32499V7.96874C5.875 9.10936 6.2125 9.78436 7.125 10.4687L8.875 11.7812C9.3 12.1 9.65312 12.4375 9.9375 12.8031C10.2219 12.4375 10.575 12.1 11 11.7812L12.75 10.4687C13.6625 9.78436 14 9.10936 14 7.96874V5.44999L12.2625 7.18749L10.9375 5.86249L15 1.79999L19.0625 5.86249L17.7375 7.18749Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var branchIcon = createIcon("branch", iconDefinition96);

// src/noticons/src/branchCreate/default.icon.tsx
import { jsxDEV as jsxDEV99, Fragment as Fragment97 } from "react/jsx-dev-runtime";
var iconDefinition97 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV99(Fragment97, {
    children: /* @__PURE__ */ jsxDEV99("path", {
      d: "M14.375 11.25C13.8531 11.25 13.3625 11.3781 12.9313 11.6062L8.39375 7.06875C8.61875 6.6375 8.75 6.14687 8.75 5.625C8.75 3.9 7.35 2.5 5.625 2.5C3.9 2.5 2.5 3.9 2.5 5.625C2.5 7.025 3.41875 8.20938 4.6875 8.60625V11.3937C3.41875 11.7906 2.5 12.975 2.5 14.375C2.5 16.1 3.9 17.5 5.625 17.5C7.35 17.5 8.75 16.1 8.75 14.375C8.75 12.975 7.83125 11.7906 6.5625 11.3937V8.60625C6.7375 8.55 6.90625 8.47813 7.06875 8.39375L11.6062 12.9313C11.3812 13.3625 11.25 13.8531 11.25 14.375C11.25 16.1 12.65 17.5 14.375 17.5C16.1 17.5 17.5 16.1 17.5 14.375C17.5 12.65 16.1 11.25 14.375 11.25ZM5.625 4.375C6.31562 4.375 6.875 4.93438 6.875 5.625C6.875 6.31562 6.31562 6.875 5.625 6.875C4.93438 6.875 4.375 6.31562 4.375 5.625C4.375 4.93438 4.93438 4.375 5.625 4.375ZM5.625 15.625C4.93438 15.625 4.375 15.0656 4.375 14.375C4.375 13.6844 4.93438 13.125 5.625 13.125C6.31562 13.125 6.875 13.6844 6.875 14.375C6.875 15.0656 6.31562 15.625 5.625 15.625ZM14.375 15.625C13.6844 15.625 13.125 15.0656 13.125 14.375C13.125 13.6844 13.6844 13.125 14.375 13.125C15.0656 13.125 15.625 13.6844 15.625 14.375C15.625 15.0656 15.0656 15.625 14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var branchCreateIcon = createIcon("branchCreate", iconDefinition97);

// src/noticons/src/branchFork/default.icon.tsx
import { jsxDEV as jsxDEV100, Fragment as Fragment98 } from "react/jsx-dev-runtime";
var iconDefinition98 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV100(Fragment98, {
    children: /* @__PURE__ */ jsxDEV100("path", {
      d: "M14.8531 11.2906C14.175 9.89375 12.7844 9.0625 10.9375 9.0625H9.0625C8.21562 9.0625 7.57187 8.81562 7.15 8.35C8.10312 7.81562 8.75 6.79688 8.75 5.625C8.75 3.9 7.35 2.5 5.625 2.5C3.9 2.5 2.5 3.9 2.5 5.625C2.5 7.025 3.41875 8.20938 4.6875 8.60625V11.3937C3.41875 11.7906 2.5 12.975 2.5 14.375C2.5 16.1 3.9 17.5 5.625 17.5C7.35 17.5 8.75 16.1 8.75 14.375C8.75 12.975 7.83125 11.7906 6.5625 11.3937V10.2844C7.24375 10.7063 8.09062 10.9375 9.0625 10.9375H10.9375C11.7844 10.9375 12.4281 11.1844 12.85 11.65C11.8969 12.1844 11.25 13.2031 11.25 14.375C11.25 16.1 12.65 17.5 14.375 17.5C16.1 17.5 17.5 16.1 17.5 14.375C17.5 12.8125 16.35 11.5219 14.8531 11.2906ZM6.875 14.375C6.875 15.0656 6.31562 15.625 5.625 15.625C4.93438 15.625 4.375 15.0656 4.375 14.375C4.375 13.6844 4.93438 13.125 5.625 13.125C6.31562 13.125 6.875 13.6844 6.875 14.375ZM5.625 6.875C4.93438 6.875 4.375 6.31562 4.375 5.625C4.375 4.93438 4.93438 4.375 5.625 4.375C6.31562 4.375 6.875 4.93438 6.875 5.625C6.875 6.31562 6.31562 6.875 5.625 6.875ZM14.375 15.625C13.6844 15.625 13.125 15.0656 13.125 14.375C13.125 13.6844 13.6844 13.125 14.375 13.125C15.0656 13.125 15.625 13.6844 15.625 14.375C15.625 15.0656 15.0656 15.625 14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var branchForkIcon = createIcon("branchFork", iconDefinition98);

// src/noticons/src/branchMerge/default.icon.tsx
import { jsxDEV as jsxDEV101, Fragment as Fragment99 } from "react/jsx-dev-runtime";
var iconDefinition99 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV101(Fragment99, {
    children: /* @__PURE__ */ jsxDEV101("path", {
      d: "M14.375 2.5C12.65 2.5 11.25 3.9 11.25 5.625C11.25 6.79688 11.8969 7.81562 12.85 8.35C12.425 8.81562 11.7812 9.0625 10.9375 9.0625H9.0625C8.09062 9.0625 7.24375 9.29375 6.5625 9.71562V8.60625C7.83125 8.20938 8.75 7.025 8.75 5.625C8.75 3.9 7.35 2.5 5.625 2.5C3.9 2.5 2.5 3.9 2.5 5.625C2.5 7.025 3.41875 8.20938 4.6875 8.60625V11.3937C3.41875 11.7906 2.5 12.975 2.5 14.375C2.5 16.1 3.9 17.5 5.625 17.5C7.35 17.5 8.75 16.1 8.75 14.375C8.75 13.2031 8.10312 12.1844 7.15 11.65C7.575 11.1844 8.21875 10.9375 9.0625 10.9375H10.9375C12.7844 10.9375 14.175 10.1063 14.8531 8.70938C16.35 8.47813 17.5 7.1875 17.5 5.625C17.5 3.9 16.1 2.5 14.375 2.5ZM4.375 5.625C4.375 4.93438 4.93438 4.375 5.625 4.375C6.31562 4.375 6.875 4.93438 6.875 5.625C6.875 6.31562 6.31562 6.875 5.625 6.875C4.93438 6.875 4.375 6.31562 4.375 5.625ZM5.625 15.625C4.93438 15.625 4.375 15.0656 4.375 14.375C4.375 13.6844 4.93438 13.125 5.625 13.125C6.31562 13.125 6.875 13.6844 6.875 14.375C6.875 15.0656 6.31562 15.625 5.625 15.625ZM14.375 6.875C13.6844 6.875 13.125 6.31562 13.125 5.625C13.125 4.93438 13.6844 4.375 14.375 4.375C15.0656 4.375 15.625 4.93438 15.625 5.625C15.625 6.31562 15.0656 6.875 14.375 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var branchMergeIcon = createIcon("branchMerge", iconDefinition99);

// src/noticons/src/bread/default.icon.tsx
import { jsxDEV as jsxDEV102, Fragment as Fragment100 } from "react/jsx-dev-runtime";
var iconDefinition100 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV102(Fragment100, {
    children: /* @__PURE__ */ jsxDEV102("path", {
      d: "M16.875 10V16.25C16.875 17.0219 16.3969 17.5 15.625 17.5H4.375C3.60312 17.5 3.125 17.0219 3.125 16.25V10C3.125 8.50313 4.375 7.96875 4.375 7.96875C4.375 7.96875 3.125 7.43437 3.125 5.9375C3.125 4.44062 4.59063 2.5 10 2.5C15.4094 2.5 16.875 4.44062 16.875 5.9375C16.875 7.43437 15.625 7.96875 15.625 7.96875C15.625 7.96875 16.875 8.50313 16.875 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var breadIcon = createIcon("bread", iconDefinition100);

// src/noticons/src/briefcase/default.icon.tsx
import { jsxDEV as jsxDEV103, Fragment as Fragment101 } from "react/jsx-dev-runtime";
var iconDefinition101 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV103(Fragment101, {
    children: /* @__PURE__ */ jsxDEV103("path", {
      d: "M15 6.25H13.75V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V6.25H5C3.4625 6.25 2.5 7.2125 2.5 8.75V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75C17.5 7.2125 16.5375 6.25 15 6.25ZM8.125 5C8.125 4.49063 8.24062 4.375 8.75 4.375H11.25C11.7594 4.375 11.875 4.49063 11.875 5V6.25H8.125V5ZM15.625 11.25H4.375V10H15.625V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var briefcaseIcon = createIcon("briefcase", iconDefinition101);

// src/noticons/src/brightnessHigh/default.icon.tsx
import { jsxDEV as jsxDEV104, Fragment as Fragment102 } from "react/jsx-dev-runtime";
var iconDefinition102 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV104(Fragment102, {
    children: /* @__PURE__ */ jsxDEV104("path", {
      d: "M4.91875 6.24375L3.15 4.475L4.475 3.15L6.24375 4.91875L4.91875 6.24375ZM3.75 9.0625H1.25V10.9375H3.75V9.0625ZM16.85 4.475L15.525 3.15L13.7563 4.91875L15.0812 6.24375L16.85 4.475ZM3.15 15.525L4.475 16.85L6.24375 15.0812L4.91875 13.7563L3.15 15.525ZM10.9375 1.25H9.0625V3.75H10.9375V1.25ZM9.0625 18.75H10.9375V16.25H9.0625V18.75ZM13.7563 15.0812L15.525 16.85L16.85 15.525L15.0812 13.7563L13.7563 15.0812ZM16.25 9.0625V10.9375H18.75V9.0625H16.25ZM15 10C15 12.7625 12.7625 15 10 15C7.2375 15 5 12.7625 5 10C5 7.2375 7.2375 5 10 5C12.7625 5 15 7.2375 15 10ZM13.125 10C13.125 8.275 11.725 6.875 10 6.875C8.275 6.875 6.875 8.275 6.875 10C6.875 11.725 8.275 13.125 10 13.125C11.725 13.125 13.125 11.725 13.125 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var brightnessHighIcon = createIcon("brightnessHigh", iconDefinition102);

// src/noticons/src/broccoli/default.icon.tsx
import { jsxDEV as jsxDEV105, Fragment as Fragment103 } from "react/jsx-dev-runtime";
var iconDefinition103 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV105(Fragment103, {
    children: /* @__PURE__ */ jsxDEV105("path", {
      d: "M15.7125 10.275C16.4125 9.35938 16.875 8.35938 16.875 7.50625C16.875 5.525 14.475 3.125 12.4938 3.125C11.5875 3.125 10.5219 3.64375 9.56251 4.4125C8.93751 3.37812 7.75001 2.5 6.71251 2.5C4.99376 2.5 2.49689 4.99375 2.49689 6.71562C2.49689 8.04688 3.94064 9.625 5.30939 9.94062V11.3688C5.30939 12.4813 4.99689 13.2344 4.21251 14.0219L3.12189 15.1125L4.89064 16.8813L5.98126 15.7906C6.76564 15.0062 7.52189 14.6938 8.63439 14.6938H9.77814C10.1656 16.0844 11.7625 17.5063 13.1094 17.5063C14.9 17.5063 17.5 14.9062 17.5 13.1156C17.5 12.1063 16.7 10.9563 15.7125 10.2813V10.275ZM7.18751 12.8125V10.0563C7.70314 11.2094 8.78751 12.2969 9.94376 12.8125H7.18751Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var broccoliIcon = createIcon("broccoli", iconDefinition103);

// src/noticons/src/broom/default.icon.tsx
import { jsxDEV as jsxDEV106, Fragment as Fragment104 } from "react/jsx-dev-runtime";
var iconDefinition104 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV106(Fragment104, {
    children: /* @__PURE__ */ jsxDEV106("path", {
      d: "M14.7906 11.875L15.625 16.875H7.5L7.91563 14.375H6.66563L6.25 16.875H4.375L5.20938 11.875H14.7937H14.7906ZM10.9375 8.75V1.25H9.0625V8.75H4.375V10.625H15.625V8.75H10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var broomIcon = createIcon("broom", iconDefinition104);

// src/noticons/src/broomAndDustpan/default.icon.tsx
import { jsxDEV as jsxDEV107, Fragment as Fragment105 } from "react/jsx-dev-runtime";
var iconDefinition105 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV107(Fragment105, {
    children: /* @__PURE__ */ jsxDEV107("path", {
      d: "M18.75 14.7844V16.875H11.25V15.625L15 13.75V1.25H16.875V11.875L18.0187 13.0188C18.5438 13.5437 18.75 14.0469 18.75 14.7875V14.7844ZM1.875 13.125L1.25 16.875H2.5L2.8125 15H4.0625L3.75 16.875H10L9.375 13.125H1.875ZM6.5625 1.25H4.6875V10H1.25V11.875H10V10H6.5625V1.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var broomAndDustpanIcon = createIcon("broomAndDustpan", iconDefinition105);

// src/noticons/src/browserStop/default.icon.tsx
import { jsxDEV as jsxDEV108, Fragment as Fragment106 } from "react/jsx-dev-runtime";
var iconDefinition106 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV108(Fragment106, {
    children: /* @__PURE__ */ jsxDEV108("path", {
      d: "M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM13.75 12.425L12.425 13.75L10 11.325L7.575 13.75L6.25 12.425L8.675 10L6.25 7.575L7.575 6.25L10 8.675L12.425 6.25L13.75 7.575L11.325 10L13.75 12.425Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var browserStopIcon = createIcon("browserStop", iconDefinition106);

// src/noticons/src/bug/default.icon.tsx
import { jsxDEV as jsxDEV109, Fragment as Fragment107 } from "react/jsx-dev-runtime";
var iconDefinition107 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV109(Fragment107, {
    children: [
      /* @__PURE__ */ jsxDEV109("path", {
        d: "M10 2.5C8.26562 2.5 7.1875 3.69687 7.1875 5.625H12.8125C12.8125 3.69687 11.7344 2.5 10 2.5Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV109("path", {
        d: "M15 11.25H18.75V10H15V8.12187C15.8562 8.10312 16.4937 7.82812 17.1125 7.20937L18.4375 5.88437L17.5531 5L16.2281 6.325C15.8219 6.73125 15.475 6.875 14.9031 6.875H10.625V16.875C12.5469 16.875 13.9469 15.9 14.5938 14.2281L15.075 14.7094C15.4813 15.1156 15.625 15.4625 15.625 16.0344V16.875H16.875V16.0344C16.875 15.1281 16.6 14.4656 15.9594 13.825L14.9406 12.8062C14.9781 12.5094 15 12.2 15 11.875V11.25Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV109("path", {
        d: "M3.77187 6.325L2.44687 5L1.5625 5.88437L2.8875 7.20937C3.50625 7.82812 4.14375 8.1 5 8.12187V10H1.25V11.25H5V11.875C5 12.2 5.02188 12.5094 5.05938 12.8062L4.04063 13.825C3.4 14.4656 3.125 15.1281 3.125 16.0344V16.875H4.375V16.0344C4.375 15.4625 4.51875 15.1125 4.925 14.7094L5.40625 14.2281C6.05625 15.9 7.45312 16.875 9.375 16.875V6.875H5.09687C4.525 6.875 4.175 6.73125 3.77187 6.325Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var bugIcon = createIcon("bug", iconDefinition107);

// src/noticons/src/bugle/default.icon.tsx
import { jsxDEV as jsxDEV110, Fragment as Fragment108 } from "react/jsx-dev-runtime";
var iconDefinition108 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV110(Fragment108, {
    children: /* @__PURE__ */ jsxDEV110("path", {
      d: "M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H0V8.75H2.6625C2.16875 9.45937 1.875 10.3187 1.875 11.25C1.875 13.6656 3.83437 15.625 6.25 15.625H10C12.4156 15.625 14.375 13.6656 14.375 11.25C14.375 10.3187 14.0813 9.45937 13.5875 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM12.5 11.25C12.5 12.6313 11.3813 13.75 10 13.75H6.25C4.86875 13.75 3.75 12.6313 3.75 11.25C3.75 9.86875 4.86875 8.75 6.25 8.75H10C11.3813 8.75 12.5 9.86875 12.5 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bugleIcon = createIcon("bugle", iconDefinition108);

// src/noticons/src/bullseye/default.icon.tsx
import { jsxDEV as jsxDEV111, Fragment as Fragment109 } from "react/jsx-dev-runtime";
var iconDefinition109 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV111(Fragment109, {
    children: /* @__PURE__ */ jsxDEV111("path", {
      d: "M18.125 3.75H16.25V1.875H15L13.5063 3.36875C12.4594 2.81562 11.2688 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 8.73438 17.1844 7.54063 16.6313 6.49375L18.125 5V3.75ZM12.5 10C12.5 11.3813 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C10.4625 7.5 10.8969 7.62813 11.2688 7.84688L10.3219 8.79375C10.2187 8.76562 10.1125 8.74687 10.0031 8.74687C9.3125 8.74687 8.75313 9.30625 8.75313 9.99687C8.75313 10.6875 9.3125 11.2469 10.0031 11.2469C10.6937 11.2469 11.2531 10.6875 11.2531 9.99687C11.2531 9.88437 11.2344 9.78125 11.2063 9.67812L12.1531 8.73125C12.3719 9.10313 12.5 9.53438 12.5 10ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C10.9 4.375 11.7469 4.59063 12.5 4.96563V6.4125C11.7906 5.91875 10.9312 5.625 10 5.625C7.58437 5.625 5.625 7.58437 5.625 10C5.625 12.4156 7.58437 14.375 10 14.375C12.4156 14.375 14.375 12.4156 14.375 10C14.375 9.06875 14.0813 8.20937 13.5875 7.5H15.0344C15.4094 8.25313 15.625 9.1 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bullseyeIcon = createIcon("bullseye", iconDefinition109);

// src/noticons/src/bunkBed/default.icon.tsx
import { jsxDEV as jsxDEV112, Fragment as Fragment110 } from "react/jsx-dev-runtime";
var iconDefinition110 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV112(Fragment110, {
    children: /* @__PURE__ */ jsxDEV112("path", {
      d: "M16.25 3.75V5.625H9.375C9.375 4.08125 8.41875 3.125 6.875 3.125H3.75V1.25H1.875V18.75H3.75V16.25H11.875V18.75H13.75V16.25H16.25V18.75H18.125V3.75H16.25ZM16.25 10H13.75V7.5H16.25V10ZM9.375 14.375C9.375 12.8313 8.41875 11.875 6.875 11.875H3.75V7.5H11.875V14.375H9.375ZM13.75 14.375V11.875H16.25V14.375H13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var bunkBedIcon = createIcon("bunkBed", iconDefinition110);

// src/noticons/src/burger/default.icon.tsx
import { jsxDEV as jsxDEV113, Fragment as Fragment111 } from "react/jsx-dev-runtime";
var iconDefinition111 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV113(Fragment111, {
    children: /* @__PURE__ */ jsxDEV113("path", {
      d: "M3.75 13.75H16.25V15.625C16.25 16.3969 15.7719 16.875 15 16.875H5C4.22812 16.875 3.75 16.3969 3.75 15.625V13.75ZM10 1.875C6.14375 1.875 3.75 4.26875 3.75 8.125H16.25C16.25 4.26875 13.8562 1.875 10 1.875ZM16.25 9.375H14.7844C14.0438 9.375 13.5406 9.58437 13.0156 10.1062L11.8719 11.25L10.7281 10.1062C10.2031 9.58125 9.7 9.375 8.95937 9.375H3.75C2.97812 9.375 2.5 9.85313 2.5 10.625V11.25C2.5 12.0219 2.97812 12.5 3.75 12.5H16.25C17.0219 12.5 17.5 12.0219 17.5 11.25V10.625C17.5 9.85313 17.0219 9.375 16.25 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var burgerIcon = createIcon("burger", iconDefinition111);

// src/noticons/src/burst/default.icon.tsx
import { jsxDEV as jsxDEV114, Fragment as Fragment112 } from "react/jsx-dev-runtime";
var iconDefinition112 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV114(Fragment112, {
    children: [
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M10.9375 5.98214V2.8125H9.06247V5.98214H10.9375Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M13.5039 7.82198L15.7452 5.58071L14.4194 4.25488L12.1781 6.49616L13.5039 7.82198Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M17.1874 10.9375H14.0178V9.0625H17.1874V10.9375Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M12.1781 13.504L14.4194 15.7453L15.7452 14.4194L13.504 12.1782L12.1781 13.504Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M9.06241 17.1875V14.0179H10.9374V17.1875H9.06241Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M6.49599 12.178L4.25471 14.4193L5.58054 15.7451L7.82181 13.5038L6.49599 12.178Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M2.8125 9.0625L5.98214 9.0625L5.98214 10.9375H2.8125V9.0625Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV114("path", {
        d: "M7.82177 6.49602L5.58049 4.25474L4.25467 5.58057L6.49594 7.82184L7.82177 6.49602Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var burstIcon = createIcon("burst", iconDefinition112);

// src/noticons/src/bus/default.icon.tsx
import { jsxDEV as jsxDEV115, Fragment as Fragment113 } from "react/jsx-dev-runtime";
var iconDefinition113 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV115(Fragment113, {
    children: /* @__PURE__ */ jsxDEV115("path", {
      d: "M17.5 6.25H16.25V3.85C16.25 3.85 14.2281 1.875 10 1.875C5.77188 1.875 3.75 3.85 3.75 3.85V6.25H2.5V10H3.75V15.625H5V17.5H7.5V15.625H12.5V17.5H15V15.625H16.25V10H17.5V6.25ZM5.625 4.79688C6.35313 4.36875 7.79063 3.75 10 3.75C12.2094 3.75 13.6406 4.36875 14.375 4.8V10H5.625V4.79688ZM6.875 13.75C6.35625 13.75 5.9375 13.3313 5.9375 12.8125C5.9375 12.2937 6.35625 11.875 6.875 11.875C7.39375 11.875 7.8125 12.2937 7.8125 12.8125C7.8125 13.3313 7.39375 13.75 6.875 13.75ZM12.1875 12.8125C12.1875 12.2937 12.6062 11.875 13.125 11.875C13.6438 11.875 14.0625 12.2937 14.0625 12.8125C14.0625 13.3313 13.6438 13.75 13.125 13.75C12.6062 13.75 12.1875 13.3313 12.1875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var busIcon = createIcon("bus", iconDefinition113);

// src/noticons/src/busDoubleDecker/default.icon.tsx
import { jsxDEV as jsxDEV116, Fragment as Fragment114 } from "react/jsx-dev-runtime";
var iconDefinition114 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV116(Fragment114, {
    children: /* @__PURE__ */ jsxDEV116("path", {
      d: "M17.5 8.125H16.25V3.85C16.25 3.85 14.2281 1.875 10 1.875C5.77188 1.875 3.75 3.85 3.75 3.85V8.125H2.5V10.625H3.75V15.625H5V17.5H7.5V15.625H12.5V17.5H15V15.625H16.25V10.625H17.5V8.125ZM10 3.75C12.2031 3.75 13.6406 4.36875 14.375 4.8V6.25H5.625V4.79688C6.35313 4.36875 7.79063 3.75 10 3.75ZM5.625 8.125H14.375V10.625H5.625V8.125ZM6.875 14.0625C6.35625 14.0625 5.9375 13.6438 5.9375 13.125C5.9375 12.6062 6.35625 12.1875 6.875 12.1875C7.39375 12.1875 7.8125 12.6062 7.8125 13.125C7.8125 13.6438 7.39375 14.0625 6.875 14.0625ZM12.1875 13.125C12.1875 12.6062 12.6062 12.1875 13.125 12.1875C13.6438 12.1875 14.0625 12.6062 14.0625 13.125C14.0625 13.6438 13.6438 14.0625 13.125 14.0625C12.6062 14.0625 12.1875 13.6438 12.1875 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var busDoubleDeckerIcon = createIcon("busDoubleDecker", iconDefinition114);

// src/noticons/src/busMetro/default.icon.tsx
import { jsxDEV as jsxDEV117, Fragment as Fragment115 } from "react/jsx-dev-runtime";
var iconDefinition115 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV117(Fragment115, {
    children: /* @__PURE__ */ jsxDEV117("path", {
      d: "M17.5 6.25H16.25V5C16.25 3.4625 15.2875 2.5 13.75 2.5H6.25C4.7125 2.5 3.75 3.4625 3.75 5V6.25H2.5V10H3.75V15.625H5V17.5H7.5V15.625H12.5V17.5H15V15.625H16.25V10H17.5V6.25ZM8.125 3.75H11.875V5H8.125V3.75ZM6.875 13.75C6.35625 13.75 5.9375 13.3313 5.9375 12.8125C5.9375 12.2937 6.35625 11.875 6.875 11.875C7.39375 11.875 7.8125 12.2937 7.8125 12.8125C7.8125 13.3313 7.39375 13.75 6.875 13.75ZM9.0625 10H5.9375V6.25H9.0625V10ZM10.9375 6.25H14.0625V10H10.9375V6.25ZM12.1875 12.8125C12.1875 12.2937 12.6062 11.875 13.125 11.875C13.6438 11.875 14.0625 12.2937 14.0625 12.8125C14.0625 13.3313 13.6438 13.75 13.125 13.75C12.6062 13.75 12.1875 13.3313 12.1875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var busMetroIcon = createIcon("busMetro", iconDefinition115);

// src/noticons/src/butterfly/default.icon.tsx
import { jsxDEV as jsxDEV118, Fragment as Fragment116 } from "react/jsx-dev-runtime";
var iconDefinition116 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV118(Fragment116, {
    children: /* @__PURE__ */ jsxDEV118("path", {
      d: "M18.75 3.75V5.625C18.2969 6.07812 18.0906 6.49062 18 7.125L17.6531 9.55312C17.5562 10.2406 17.1094 10.625 16.4156 10.625H13.125V11.25H13.8406C15.275 11.25 16.2312 11.8406 16.875 13.125L15.3125 16.25C13.9719 16.25 13.0594 15.8719 12.1125 14.925L10.9375 13.75V15.625H9.0625V13.75L7.8875 14.925C6.9375 15.875 6.02812 16.25 4.6875 16.25L3.125 13.125C3.76562 11.8406 4.72187 11.25 6.15937 11.25H6.875V10.625H3.58438C2.89063 10.625 2.44375 10.2406 2.34688 9.55312L2 7.125C1.90938 6.49062 1.70312 6.07812 1.25 5.625V3.75H3.4375C6.30937 3.75 8.1625 5.40938 8.40625 8.125H9.0625V6.5625C9.0625 5.98438 9.42188 5.625 10 5.625C10.5781 5.625 10.9375 5.98438 10.9375 6.5625V8.125H11.5938C11.8375 5.40938 13.6938 3.75 16.5625 3.75H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var butterflyIcon = createIcon("butterfly", iconDefinition116);

// src/noticons/src/button/default.icon.tsx
import { jsxDEV as jsxDEV119, Fragment as Fragment117 } from "react/jsx-dev-runtime";
var iconDefinition117 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV119(Fragment117, {
    children: /* @__PURE__ */ jsxDEV119("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.8125 10.9375H7.1875C5.97813 10.9375 5 9.95937 5 8.75C5 7.54063 5.97813 6.5625 7.1875 6.5625H12.8125C14.0219 6.5625 15 7.54063 15 8.75C15 9.95937 14.0219 10.9375 12.8125 10.9375ZM7.1875 7.8125H11.875V9.6875H7.1875C6.67188 9.6875 6.25 9.26562 6.25 8.75C6.25 8.23438 6.67188 7.8125 7.1875 7.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var buttonIcon = createIcon("button", iconDefinition117);

// src/noticons/src/cactus/default.icon.tsx
import { jsxDEV as jsxDEV120, Fragment as Fragment118 } from "react/jsx-dev-runtime";
var iconDefinition118 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV120(Fragment118, {
    children: /* @__PURE__ */ jsxDEV120("path", {
      d: "M15.625 8.125C14.6625 8.125 14.0625 8.725 14.0625 9.6875V12.5H12.5V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V9.375H5.9375V6.5625C5.9375 5.6 5.3375 5 4.375 5C3.4125 5 2.8125 5.6 2.8125 6.5625V9.6875C2.8125 11.4187 3.89375 12.5 5.625 12.5H7.5V17.5H12.5V15.625H14.375C16.1062 15.625 17.1875 14.5437 17.1875 12.8125V9.6875C17.1875 8.725 16.5875 8.125 15.625 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cactusIcon = createIcon("cactus", iconDefinition118);

// src/noticons/src/cafe/default.icon.tsx
import { jsxDEV as jsxDEV121, Fragment as Fragment119 } from "react/jsx-dev-runtime";
var iconDefinition119 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV121(Fragment119, {
    children: /* @__PURE__ */ jsxDEV121("path", {
      d: "M16.25 3.125H5V10C5 11.5437 5.95625 12.5 7.5 12.5H12.5C14.0437 12.5 15 11.5437 15 10H16.25C17.7938 10 18.75 9.04375 18.75 7.5V5.625C18.75 4.08125 17.7938 3.125 16.25 3.125ZM16.875 7.5C16.875 8.00938 16.7594 8.125 16.25 8.125H15V5H16.25C16.7594 5 16.875 5.11563 16.875 5.625V7.5ZM1.25 13.75H18.75V15.625H16.4062L16.0938 17.5H3.90625L3.59375 15.625H1.25V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cafeIcon = createIcon("cafe", iconDefinition119);

// src/noticons/src/cake/default.icon.tsx
import { jsxDEV as jsxDEV122, Fragment as Fragment120 } from "react/jsx-dev-runtime";
var iconDefinition120 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV122(Fragment120, {
    children: /* @__PURE__ */ jsxDEV122("path", {
      d: "M3.75 13.125H16.25V16.875H3.75V13.125ZM13.75 7.5H10.9375V5H9.0625V7.5H6.25C4.70625 7.5 3.75 8.45625 3.75 10V11.875H16.25V10C16.25 8.45625 15.2937 7.5 13.75 7.5ZM10 4.0625C10.6906 4.0625 11.25 3.50312 11.25 2.8125C11.25 2.12188 10.9187 1.75625 10 0.625C9.08125 1.75625 8.75 2.12188 8.75 2.8125C8.75 3.50312 9.30937 4.0625 10 4.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cakeIcon = createIcon("cake", iconDefinition120);

// src/noticons/src/calculator/default.icon.tsx
import { jsxDEV as jsxDEV123, Fragment as Fragment121 } from "react/jsx-dev-runtime";
var iconDefinition121 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV123(Fragment121, {
    children: /* @__PURE__ */ jsxDEV123("path", {
      d: "M15.3125 1.875H4.6875C3.91562 1.875 3.4375 2.35312 3.4375 3.125V16.875C3.4375 17.6469 3.91562 18.125 4.6875 18.125H15.3125C16.0844 18.125 16.5625 17.6469 16.5625 16.875V3.125C16.5625 2.35312 16.0844 1.875 15.3125 1.875ZM7.1875 15.9375H5.3125V14.375H7.1875V15.9375ZM7.1875 12.5H5.3125V10.9375H7.1875V12.5ZM7.1875 9.0625H5.3125V7.5H7.1875V9.0625ZM14.6875 15.9375H9.0625V14.375H14.6875V15.9375ZM10.9375 10.9375V12.5H9.0625V10.9375H10.9375ZM9.0625 9.0625V7.5H10.9375V9.0625H9.0625ZM14.6875 12.5H12.8125V10.9375H14.6875V12.5ZM14.6875 9.0625H12.8125V7.5H14.6875V9.0625ZM14.6875 5.625H5.3125V3.75H14.6875V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calculatorIcon = createIcon("calculator", iconDefinition121);

// src/noticons/src/calendar/default.icon.tsx
import { jsxDEV as jsxDEV124, Fragment as Fragment122 } from "react/jsx-dev-runtime";
var iconDefinition122 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV124(Fragment122, {
    children: /* @__PURE__ */ jsxDEV124("path", {
      d: "M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM15.625 14.6875H4.375V8.75H15.625V14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calendarIcon = createIcon("calendar", iconDefinition122);

// src/noticons/src/calendarDay/default.icon.tsx
import { jsxDEV as jsxDEV125, Fragment as Fragment123 } from "react/jsx-dev-runtime";
var iconDefinition123 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV125(Fragment123, {
    children: /* @__PURE__ */ jsxDEV125("path", {
      d: "M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM15.625 12.5H11.25V8.75H15.625V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calendarDayIcon = createIcon("calendarDay", iconDefinition123);

// src/noticons/src/calendarMonth/default.icon.tsx
import { jsxDEV as jsxDEV126, Fragment as Fragment124 } from "react/jsx-dev-runtime";
var iconDefinition124 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV126(Fragment124, {
    children: /* @__PURE__ */ jsxDEV126("path", {
      d: "M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM6.875 14.6875H4.375V12.5H6.875V14.6875ZM6.875 10.9375H4.375V8.75H6.875V10.9375ZM11.25 14.6875H8.75V12.5H11.25V14.6875ZM11.25 10.9375H8.75V8.75H11.25V10.9375ZM15.625 14.6875H13.125V12.5H15.625V14.6875ZM15.625 10.9375H13.125V8.75H15.625V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calendarMonthIcon = createIcon("calendarMonth", iconDefinition124);

// src/noticons/src/calendarWeek/default.icon.tsx
import { jsxDEV as jsxDEV127, Fragment as Fragment125 } from "react/jsx-dev-runtime";
var iconDefinition125 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV127(Fragment125, {
    children: /* @__PURE__ */ jsxDEV127("path", {
      d: "M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM6.875 14.6875H4.375V8.75H6.875V14.6875ZM11.25 14.6875H8.75V8.75H11.25V14.6875ZM15.625 14.6875H13.125V8.75H15.625V14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var calendarWeekIcon = createIcon("calendarWeek", iconDefinition125);

// src/noticons/src/camera/default.icon.tsx
import { jsxDEV as jsxDEV128, Fragment as Fragment126 } from "react/jsx-dev-runtime";
var iconDefinition126 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV128(Fragment126, {
    children: /* @__PURE__ */ jsxDEV128("path", {
      d: "M12.8125 10.3125C12.8125 11.8656 11.5531 13.125 10 13.125C8.44688 13.125 7.1875 11.8656 7.1875 10.3125C7.1875 8.75938 8.44688 7.5 10 7.5C11.5531 7.5 12.8125 8.75938 12.8125 10.3125ZM17.5 5V16.25H2.5V5H5.9375L7.1875 2.5H12.8125L14.0625 5H17.5ZM14.0625 10.3125C14.0625 8.06875 12.2437 6.25 10 6.25C7.75625 6.25 5.9375 8.06875 5.9375 10.3125C5.9375 12.5562 7.75625 14.375 10 14.375C12.2437 14.375 14.0625 12.5562 14.0625 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cameraIcon = createIcon("camera", iconDefinition126);

// src/noticons/src/cameraOff/default.icon.tsx
import { jsxDEV as jsxDEV129, Fragment as Fragment127 } from "react/jsx-dev-runtime";
var iconDefinition127 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV129(Fragment127, {
    children: /* @__PURE__ */ jsxDEV129("path", {
      d: "M8.77812 6.125L6.50938 3.85625L7.1875 2.5H12.8125L14.0625 5H17.5V14.8469L13.875 11.2219C13.9969 10.8344 14.0625 10.425 14.0625 10C14.0625 7.75625 12.2437 5.9375 10 5.9375C9.575 5.9375 9.1625 6.00313 8.77812 6.125ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM10 14.0625C7.75625 14.0625 5.9375 12.2437 5.9375 10C5.9375 9.575 6.00313 9.1625 6.125 8.77812L2.5 5.15312V16.25H13.5969L11.2219 13.875C10.8344 13.9969 10.425 14.0625 10 14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cameraOffIcon = createIcon("cameraOff", iconDefinition127);

// src/noticons/src/cameraRoll/default.icon.tsx
import { jsxDEV as jsxDEV130, Fragment as Fragment128 } from "react/jsx-dev-runtime";
var iconDefinition128 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV130(Fragment128, {
    children: /* @__PURE__ */ jsxDEV130("path", {
      d: "M2.5 7.5H13.75V16.25H2.5V7.5ZM6.875 3.125V6.25H15V11.875H18.125V3.125H6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cameraRollIcon = createIcon("cameraRoll", iconDefinition128);

// src/noticons/src/cameraRollPortrait/default.icon.tsx
import { jsxDEV as jsxDEV131, Fragment as Fragment129 } from "react/jsx-dev-runtime";
var iconDefinition129 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV131(Fragment129, {
    children: /* @__PURE__ */ jsxDEV131("path", {
      d: "M3.75 6.25H12.5V17.5H3.75V6.25ZM8.125 1.875V5H13.75V13.125H16.875V1.875H8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cameraRollPortraitIcon = createIcon("cameraRollPortrait", iconDefinition129);

// src/noticons/src/campingTent/default.icon.tsx
import { jsxDEV as jsxDEV132, Fragment as Fragment130 } from "react/jsx-dev-runtime";
var iconDefinition130 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV132(Fragment130, {
    children: /* @__PURE__ */ jsxDEV132("path", {
      d: "M16.875 15L10.9375 3.125H9.0625L3.125 15H1.25V16.875H18.75V15H16.875ZM7.1875 15L10 9.375L12.8125 15H7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var campingTentIcon = createIcon("campingTent", iconDefinition130);

// src/noticons/src/campingTrailer/default.icon.tsx
import { jsxDEV as jsxDEV133, Fragment as Fragment131 } from "react/jsx-dev-runtime";
var iconDefinition131 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV133(Fragment131, {
    children: /* @__PURE__ */ jsxDEV133("path", {
      d: "M16.875 12.5V5.625H6.875C3.79063 5.625 1.875 7.54063 1.875 10.625V14.375H6.25V15C6.25 16.0344 7.09062 16.875 8.125 16.875C9.15938 16.875 10 16.0344 10 15V14.375H19.375V12.5H16.875ZM15 10.625H10.625V7.5H15V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var campingTrailerIcon = createIcon("campingTrailer", iconDefinition131);

// src/noticons/src/cancer/default.icon.tsx
import { jsxDEV as jsxDEV134, Fragment as Fragment132 } from "react/jsx-dev-runtime";
var iconDefinition132 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV134(Fragment132, {
    children: /* @__PURE__ */ jsxDEV134("path", {
      d: "M14.375 10.3125C12.6531 10.3125 11.25 11.7156 11.25 13.4375C11.25 14.2188 11.5406 14.9312 12.0156 15.4781C11.4219 15.5687 10.75 15.625 10 15.625C6.025 15.625 3.35 14.0625 3.35 14.0625L2.5 15.7406C2.5 15.7406 5.55313 17.5 10 17.5C13.1656 17.5 17.5 16.6187 17.5 13.4375C17.5 11.7156 16.0969 10.3125 14.375 10.3125ZM14.375 14.6875C13.6844 14.6875 13.125 14.1281 13.125 13.4375C13.125 12.7469 13.6844 12.1875 14.375 12.1875C15.0656 12.1875 15.625 12.7469 15.625 13.4375C15.625 14.1281 15.0656 14.6875 14.375 14.6875ZM5.625 9.6875C7.34688 9.6875 8.75 8.28438 8.75 6.5625C8.75 5.78125 8.45937 5.06875 7.98438 4.52188C8.57812 4.43125 9.25 4.375 10 4.375C13.975 4.375 16.65 5.9375 16.65 5.9375L17.5 4.25938C17.5 4.25938 14.4469 2.5 10 2.5C6.83437 2.5 2.5 3.38125 2.5 6.5625C2.5 8.28438 3.90312 9.6875 5.625 9.6875ZM5.625 5.3125C6.31562 5.3125 6.875 5.87188 6.875 6.5625C6.875 7.25313 6.31562 7.8125 5.625 7.8125C4.93438 7.8125 4.375 7.25313 4.375 6.5625C4.375 5.87188 4.93438 5.3125 5.625 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cancerIcon = createIcon("cancer", iconDefinition132);

// src/noticons/src/candy/default.icon.tsx
import { jsxDEV as jsxDEV135, Fragment as Fragment133 } from "react/jsx-dev-runtime";
var iconDefinition133 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV135(Fragment133, {
    children: /* @__PURE__ */ jsxDEV135("path", {
      d: "M19.375 7.1875V5.78125C17.3844 5.78125 16.0219 6.71875 15.1344 7.7125C14.2563 5.74688 12.2906 4.375 10 4.375C7.70937 4.375 5.74062 5.74688 4.86562 7.7125C3.97812 6.72188 2.61562 5.78125 0.625 5.78125V7.1875C1.20312 7.1875 1.5625 7.54688 1.5625 8.125C1.5625 8.70312 1.20312 9.0625 0.625 9.0625V10.9375C1.20312 10.9375 1.5625 11.2969 1.5625 11.875C1.5625 12.4531 1.20312 12.8125 0.625 12.8125V14.2188C2.61562 14.2188 3.97812 13.2812 4.86562 12.2875C5.74375 14.2531 7.70937 15.625 10 15.625C12.2906 15.625 14.2594 14.2531 15.1344 12.2875C16.0219 13.2781 17.3844 14.2188 19.375 14.2188V12.8125C18.7969 12.8125 18.4375 12.4531 18.4375 11.875C18.4375 11.2969 18.7969 10.9375 19.375 10.9375V9.0625C18.7969 9.0625 18.4375 8.70312 18.4375 8.125C18.4375 7.54688 18.7969 7.1875 19.375 7.1875ZM11.875 12.5C11.875 11.4219 11.3125 10.7656 10.3219 10.65C10.1562 10.8813 9.39062 11.9438 7.95937 11.9438C7.40625 11.9438 6.83125 11.7781 6.27187 11.4563L6.89687 10.375C7.2625 10.5875 7.625 10.6938 7.9625 10.6938C8.79688 10.6938 9.25938 9.9875 9.27812 9.95938C9.07188 9.50313 8.96875 9.05 8.96875 8.61562C8.96875 7.59062 9.53125 6.6625 10.6031 6.04375L11.2281 7.125C10.5656 7.50625 10.225 8.03125 10.225 8.62813C10.225 8.87188 10.2812 9.12812 10.3969 9.39375C12.0688 9.55312 13.125 10.7375 13.125 12.4969H11.875V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var candyIcon = createIcon("candy", iconDefinition133);

// src/noticons/src/capricorn/default.icon.tsx
import { jsxDEV as jsxDEV136, Fragment as Fragment134 } from "react/jsx-dev-runtime";
var iconDefinition134 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV136(Fragment134, {
    children: /* @__PURE__ */ jsxDEV136("path", {
      d: "M12.8125 9.375C12.025 9.375 11.2719 9.6 10.625 10.0156V5.625C10.625 3.7 9.7375 2.5 7.8125 2.5C6.75625 2.5 6.01563 2.8625 5.55938 3.50625C5.01875 2.8625 4.18125 2.5 3.125 2.5V4.375C3.89375 4.375 4.375 4.85625 4.375 5.625V11.25H6.25V5.625C6.25 4.85625 6.73125 4.375 7.5 4.375C8.26875 4.375 8.75 4.85625 8.75 5.625V11.7562L6.14687 14.3594C5.73438 14.7719 5.18438 15 4.6 15H3.125V16.875H4.6C5.68438 16.875 6.70625 16.4531 7.47188 15.6844L8.84375 14.3125C9.24375 16.1344 10.8719 17.5 12.8125 17.5C15.0531 17.5 16.875 15.6781 16.875 13.4375C16.875 11.1969 15.0531 9.375 12.8125 9.375ZM12.8125 15.625C11.6062 15.625 10.625 14.6438 10.625 13.4375V12.5312L11.2656 11.8906C11.6781 11.4781 12.2281 11.25 12.8125 11.25C14.0188 11.25 15 12.2312 15 13.4375C15 14.6438 14.0188 15.625 12.8125 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var capricornIcon = createIcon("capricorn", iconDefinition134);

// src/noticons/src/car/default.icon.tsx
import { jsxDEV as jsxDEV137, Fragment as Fragment135 } from "react/jsx-dev-runtime";
var iconDefinition135 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV137(Fragment135, {
    children: /* @__PURE__ */ jsxDEV137("path", {
      d: "M16.4062 8.125L15.3125 3.75H4.6875L3.59375 8.125H1.875V10H3.125V15H4.375V16.875H6.875V15H13.125V16.875H15.625V15H16.875V10H18.125V8.125H16.4062ZM6.15 5.625H13.8469L14.6281 8.75H5.36875L6.15 5.625ZM6.25 12.8125C5.73125 12.8125 5.3125 12.3938 5.3125 11.875C5.3125 11.3562 5.73125 10.9375 6.25 10.9375C6.76875 10.9375 7.1875 11.3562 7.1875 11.875C7.1875 12.3938 6.76875 12.8125 6.25 12.8125ZM12.8125 11.875C12.8125 11.3562 13.2312 10.9375 13.75 10.9375C14.2688 10.9375 14.6875 11.3562 14.6875 11.875C14.6875 12.3938 14.2688 12.8125 13.75 12.8125C13.2312 12.8125 12.8125 12.3938 12.8125 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var carIcon = createIcon("car", iconDefinition135);

// src/noticons/src/card/default.icon.tsx
import { jsxDEV as jsxDEV138, Fragment as Fragment136 } from "react/jsx-dev-runtime";
var iconDefinition136 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV138(Fragment136, {
    children: /* @__PURE__ */ jsxDEV138("path", {
      d: "M15 4.375H5C3.45625 4.375 2.5 5.33125 2.5 6.875V13.125C2.5 14.6687 3.45625 15.625 5 15.625H15C16.5437 15.625 17.5 14.6687 17.5 13.125V6.875C17.5 5.33125 16.5437 4.375 15 4.375ZM7.1875 6.25C8.15312 6.25 8.75 6.84687 8.75 7.8125C8.75 8.77812 8.15312 9.375 7.1875 9.375C6.22187 9.375 5.625 8.77812 5.625 7.8125C5.625 6.84687 6.22187 6.25 7.1875 6.25ZM4.375 13.125C4.375 11.3906 5.45312 10.3125 7.1875 10.3125C8.92188 10.3125 10 11.3906 10 13.125H4.375ZM15.625 11.875H11.875V10.625H15.625V11.875ZM15.625 9.375H10.625V8.125H15.625V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardIcon = createIcon("card", iconDefinition136);

// src/noticons/src/cardClub/default.icon.tsx
import { jsxDEV as jsxDEV139, Fragment as Fragment137 } from "react/jsx-dev-runtime";
var iconDefinition137 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV139(Fragment137, {
    children: /* @__PURE__ */ jsxDEV139("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM11.875 12.1875C11.3156 12.1875 10.8125 11.9406 10.4688 11.55V11.7281C10.4688 12.2031 10.7375 12.6344 11.1594 12.8469L11.7188 13.125V13.5938H8.28125V13.125L8.84063 12.8469C9.26563 12.6344 9.53125 12.2031 9.53125 11.7281V11.55C9.1875 11.9406 8.68437 12.1875 8.125 12.1875C7.09063 12.1875 6.25 11.3469 6.25 10.3125C6.25 9.27812 7.09063 8.4375 8.125 8.4375C8.18438 8.4375 8.24375 8.44063 8.3 8.44688C8.1875 8.20625 8.125 7.94063 8.125 7.65625C8.125 6.62187 8.96562 5.78125 10 5.78125C11.0344 5.78125 11.875 6.62187 11.875 7.65625C11.875 7.9375 11.8094 8.20625 11.7 8.44688C11.7594 8.44063 11.8156 8.4375 11.875 8.4375C12.9094 8.4375 13.75 9.27812 13.75 10.3125C13.75 11.3469 12.9094 12.1875 11.875 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardClubIcon = createIcon("cardClub", iconDefinition137);

// src/noticons/src/cardDiamond/default.icon.tsx
import { jsxDEV as jsxDEV140, Fragment as Fragment138 } from "react/jsx-dev-runtime";
var iconDefinition138 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV140(Fragment138, {
    children: /* @__PURE__ */ jsxDEV140("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM13.75 10.3125L13.0969 10.7156C12.1937 11.2719 11.4469 12.05 10.925 12.975L10.3125 14.0656H9.6875L9.075 12.975C8.55313 12.05 7.80625 11.2719 6.90313 10.7156L6.25 10.3125V9.6875L6.90313 9.28437C7.80625 8.72812 8.55313 7.95 9.075 7.025L9.6875 5.93437H10.3125L10.925 7.025C11.4469 7.95 12.1937 8.72812 13.0969 9.28437L13.75 9.6875V10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardDiamondIcon = createIcon("cardDiamond", iconDefinition138);

// src/noticons/src/cardHeart/default.icon.tsx
import { jsxDEV as jsxDEV141, Fragment as Fragment139 } from "react/jsx-dev-runtime";
var iconDefinition139 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV141(Fragment139, {
    children: /* @__PURE__ */ jsxDEV141("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM10.3125 13.75H9.6875C8.59375 12.6562 6.25 10.3875 6.25 8.475C6.25 7.09688 7.10625 6.25 8.1625 6.25C9.03125 6.25 9.76562 6.83125 10 7.625C10.2312 6.83125 10.9656 6.25 11.8375 6.25C12.8938 6.25 13.75 7.1 13.75 8.475C13.75 10.3875 11.4062 12.6562 10.3125 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardHeartIcon = createIcon("cardHeart", iconDefinition139);

// src/noticons/src/cardSpade/default.icon.tsx
import { jsxDEV as jsxDEV142, Fragment as Fragment140 } from "react/jsx-dev-runtime";
var iconDefinition140 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV142(Fragment140, {
    children: /* @__PURE__ */ jsxDEV142("path", {
      d: "M13.125 2.5H6.875C5.33125 2.5 4.375 3.45625 4.375 5V15C4.375 16.5437 5.33125 17.5 6.875 17.5H13.125C14.6687 17.5 15.625 16.5437 15.625 15V5C15.625 3.45625 14.6687 2.5 13.125 2.5ZM11.875 12.1875C11.3156 12.1875 10.8125 11.9406 10.4688 11.55V11.7281C10.4688 12.2031 10.7375 12.6344 11.1594 12.8469L11.7188 13.125V13.5938H8.28125V13.125L8.84063 12.8469C9.26563 12.6344 9.53125 12.2031 9.53125 11.7281V11.55C9.1875 11.9406 8.68437 12.1875 8.125 12.1875C7.09063 12.1875 6.25 11.3469 6.25 10.3125C6.25 8.4 8.59375 6.875 9.6875 5.78125H10.3125C11.4062 6.875 13.75 8.4 13.75 10.3125C13.75 11.3469 12.9094 12.1875 11.875 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardSpadeIcon = createIcon("cardSpade", iconDefinition140);

// src/noticons/src/cards/default.icon.tsx
import { jsxDEV as jsxDEV143, Fragment as Fragment141 } from "react/jsx-dev-runtime";
var iconDefinition141 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV143(Fragment141, {
    children: /* @__PURE__ */ jsxDEV143("path", {
      d: "M10 3.74999C8.15937 3.74999 6.875 5.03437 6.875 6.87499V14.6844L6.34687 14.8156C5.225 15.0969 4.35312 14.575 4.07187 13.45L1.95 4.96249C1.66875 3.84062 2.19062 2.96874 3.31562 2.68749L8.77187 1.32187C9.89375 1.04062 10.7656 1.56249 11.0469 2.68749L11.3125 3.74999H10.0031H10ZM15.625 4.99999H10C8.84375 4.99999 8.125 5.71874 8.125 6.87499V15.625C8.125 16.7812 8.84375 17.5 10 17.5H15.625C16.7812 17.5 17.5 16.7812 17.5 15.625V6.87499C17.5 5.71874 16.7812 4.99999 15.625 4.99999Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cardsIcon = createIcon("cards", iconDefinition141);

// src/noticons/src/carrot/default.icon.tsx
import { jsxDEV as jsxDEV144, Fragment as Fragment142 } from "react/jsx-dev-runtime";
var iconDefinition142 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV144(Fragment142, {
    children: /* @__PURE__ */ jsxDEV144("path", {
      d: "M10.3938 2.53437C10.8344 2.09375 11.3438 1.875 11.8719 1.875C12.6063 1.875 13.3875 2.34688 13.925 2.9875C14.3625 2.475 14.9969 2.11562 15.6219 2.11562C16.7375 2.11562 17.8844 3.2625 17.8844 4.37813C17.8844 5.00313 17.525 5.6375 17.0125 6.075C17.6563 6.6125 18.125 7.39375 18.125 8.12813C18.125 8.65625 17.9063 9.16563 17.4656 9.60625L15.9188 8.05938C15.5094 7.65 15.05 7.44688 14.5938 7.44688C14.1375 7.44688 13.6781 7.65 13.2688 8.05938L12.5406 8.7875L13.0438 9.29062C13.55 9.79688 13.7531 10.2844 13.7531 11.0031C13.7531 12.0281 13.3313 12.7125 12.4156 13.1687L3.75313 17.5L2.50313 16.25L6.83438 7.5875C7.29375 6.67188 7.975 6.25 9 6.25C9.71875 6.25 10.2063 6.45312 10.7125 6.95938L11.2156 7.4625L11.9438 6.73438C12.3531 6.325 12.5563 5.86562 12.5563 5.40937C12.5563 4.95312 12.3531 4.49375 11.9438 4.08437L10.3969 2.5375L10.3938 2.53437Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var carrotIcon = createIcon("carrot", iconDefinition142);

// src/noticons/src/cash/default.icon.tsx
import { jsxDEV as jsxDEV145, Fragment as Fragment143 } from "react/jsx-dev-runtime";
var iconDefinition143 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV145(Fragment143, {
    children: /* @__PURE__ */ jsxDEV145("path", {
      d: "M1.875 4.375V15.625H18.125V4.375H1.875ZM16.25 11.25C14.7063 11.25 13.75 12.2063 13.75 13.75H6.25C6.25 12.2063 5.29375 11.25 3.75 11.25V8.75C5.29375 8.75 6.25 7.79375 6.25 6.25H13.75C13.75 7.79375 14.7063 8.75 16.25 8.75V11.25ZM12.1875 10C12.1875 11.5437 11.35 12.5 10 12.5C8.65 12.5 7.8125 11.5437 7.8125 10C7.8125 8.45625 8.65 7.5 10 7.5C11.35 7.5 12.1875 8.45625 12.1875 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cashIcon = createIcon("cash", iconDefinition143);

// src/noticons/src/cashRegister/default.icon.tsx
import { jsxDEV as jsxDEV146, Fragment as Fragment144 } from "react/jsx-dev-runtime";
var iconDefinition144 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV146(Fragment144, {
    children: /* @__PURE__ */ jsxDEV146("path", {
      d: "M2.5 15H17.5V17.5H2.5V15ZM17.5 10V13.75H2.5V10L5 7.5V3.75H8.75V1.875H13.75V3.75H15V7.5L17.5 10ZM13.125 5.625H9.375V7.5H13.125V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cashRegisterIcon = createIcon("cashRegister", iconDefinition144);

// src/noticons/src/cassette/default.icon.tsx
import { jsxDEV as jsxDEV147, Fragment as Fragment145 } from "react/jsx-dev-runtime";
var iconDefinition145 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV147(Fragment145, {
    children: /* @__PURE__ */ jsxDEV147("path", {
      d: "M6.875 10C6.875 10.6906 6.31563 11.25 5.625 11.25C4.93438 11.25 4.375 10.6906 4.375 10C4.375 9.30937 4.93438 8.75 5.625 8.75C6.31563 8.75 6.875 9.30937 6.875 10ZM8.125 11.25H11.875V8.75H8.125V11.25ZM18.75 4.375V15.625H1.25V4.375H18.75ZM16.875 10C16.875 8.79063 15.8969 7.8125 14.6875 7.8125H5.3125C4.10313 7.8125 3.125 8.79063 3.125 10C3.125 11.2094 4.10313 12.1875 5.3125 12.1875H14.6875C15.8969 12.1875 16.875 11.2094 16.875 10ZM14.375 8.75C13.6844 8.75 13.125 9.30937 13.125 10C13.125 10.6906 13.6844 11.25 14.375 11.25C15.0656 11.25 15.625 10.6906 15.625 10C15.625 9.30937 15.0656 8.75 14.375 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cassetteIcon = createIcon("cassette", iconDefinition145);

// src/noticons/src/castle/default.icon.tsx
import { jsxDEV as jsxDEV148, Fragment as Fragment146 } from "react/jsx-dev-runtime";
var iconDefinition146 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV148(Fragment146, {
    children: /* @__PURE__ */ jsxDEV148("path", {
      d: "M17.5 6.875V11.25L16.25 12.5V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H3.75V12.5L2.5 11.25V6.875H3.75V8.125H5V6.875H6.25V8.75H7.5V6.25L9.375 4.375V0.625H13.125V1.875L10.625 3.125V4.375L12.5 6.25V8.75H13.75V6.875H15V8.125H16.25V6.875H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var castleIcon = createIcon("castle", iconDefinition146);

// src/noticons/src/castleJapanese/default.icon.tsx
import { jsxDEV as jsxDEV149, Fragment as Fragment147 } from "react/jsx-dev-runtime";
var iconDefinition147 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV149(Fragment147, {
    children: /* @__PURE__ */ jsxDEV149("path", {
      d: "M15.625 11.25C16.875 11.25 17.9469 10.9937 18.75 10.3125L18.2812 9.375C18.2812 9.375 17.7938 9.6875 17.1875 9.6875C16.2219 9.6875 15.625 8.85 15.625 7.5H13.9062V6.24687C15.0875 6.225 16.1062 5.96563 16.875 5.3125L16.4062 4.375C16.4062 4.375 15.9187 4.6875 15.3125 4.6875C14.3469 4.6875 13.75 3.85 13.75 2.5H6.25C6.25 3.85 5.65312 4.6875 4.6875 4.6875C4.08125 4.6875 3.59375 4.375 3.59375 4.375L3.125 5.3125C3.89375 5.96563 4.9125 6.225 6.09375 6.24687V7.5H4.375C4.375 8.85 3.77813 9.6875 2.8125 9.6875C2.20625 9.6875 1.71875 9.375 1.71875 9.375L1.25 10.3125C2.05312 10.9937 3.125 11.25 4.375 11.25V13.125L3.125 16.875H16.875L15.625 13.125V11.25ZM6.25 13.125V11.25H9.0625V13.125H6.25ZM10.9375 13.125V11.25H13.75V13.125H10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var castleJapaneseIcon = createIcon("castleJapanese", iconDefinition147);

// src/noticons/src/cat/default.icon.tsx
import { jsxDEV as jsxDEV150, Fragment as Fragment148 } from "react/jsx-dev-runtime";
var iconDefinition148 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV150(Fragment148, {
    children: /* @__PURE__ */ jsxDEV150("path", {
      d: "M15.625 5V3.125H14.5313L12.1875 7.5H4.54376L4.01251 6.4375C3.84064 6.09063 3.74689 5.70312 3.74689 5.31875C3.74689 3.9375 4.87189 2.8125 6.25314 2.8125H7.65314V1.25H6.25314C4.00939 1.25 2.18439 3.075 2.18439 5.31875C2.18439 5.94688 2.33439 6.575 2.61251 7.1375L3.12189 8.15312V9.17813C3.12189 9.86875 3.34689 10.3125 3.82501 10.8125C4.19689 11.2 4.37189 11.6938 4.37189 12.3344V12.5L3.12189 14.375L3.28126 14.85C3.62501 15.8781 4.02501 16.525 4.79064 17.2938L4.99689 17.5H6.87189V16.5625C6.87189 15.9844 6.51251 15.625 5.93439 15.625H5.38751L4.99689 14.8438L8.12189 12.5H11.2469V15L11.3375 15.45C11.5 16.2625 11.7781 16.7812 12.3625 17.3656L12.4969 17.5H14.3719V16.5625C14.3719 15.9844 14.0125 15.625 13.4344 15.625H13.1219V12.5L14.9594 10.6625C15.4344 10.1875 15.6219 9.73125 15.6219 9.0625C15.6219 8.48438 15.9813 8.125 16.5594 8.125H17.4969L18.1219 6.875L15.6219 5H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var catIcon = createIcon("cat", iconDefinition148);

// src/noticons/src/categories/default.icon.tsx
import { jsxDEV as jsxDEV151, Fragment as Fragment149 } from "react/jsx-dev-runtime";
var iconDefinition149 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV151(Fragment149, {
    children: /* @__PURE__ */ jsxDEV151("path", {
      d: "M14.375 4.375H5.625V2.5H14.375V4.375ZM3.125 8.75V17.5H16.875V8.75H3.125ZM15.625 5.625H4.375V7.5H15.625V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var categoriesIcon = createIcon("categories", iconDefinition149);

// src/noticons/src/cd/default.icon.tsx
import { jsxDEV as jsxDEV152, Fragment as Fragment150 } from "react/jsx-dev-runtime";
var iconDefinition150 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV152(Fragment150, {
    children: /* @__PURE__ */ jsxDEV152("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 14.0625C7.75625 14.0625 5.9375 12.2437 5.9375 10C5.9375 7.75625 7.75625 5.9375 10 5.9375C12.2437 5.9375 14.0625 7.75625 14.0625 10C14.0625 12.2437 12.2437 14.0625 10 14.0625ZM10 7.1875C8.44688 7.1875 7.1875 8.44688 7.1875 10C7.1875 11.5531 8.44688 12.8125 10 12.8125C11.5531 12.8125 12.8125 11.5531 12.8125 10C12.8125 8.44688 11.5531 7.1875 10 7.1875ZM10 10.9375C9.48125 10.9375 9.0625 10.5188 9.0625 10C9.0625 9.48125 9.48125 9.0625 10 9.0625C10.5188 9.0625 10.9375 9.48125 10.9375 10C10.9375 10.5188 10.5188 10.9375 10 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cdIcon = createIcon("cd", iconDefinition150);

// src/noticons/src/cellular/default.icon.tsx
import { jsxDEV as jsxDEV153, Fragment as Fragment151 } from "react/jsx-dev-runtime";
var iconDefinition151 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV153(Fragment151, {
    children: /* @__PURE__ */ jsxDEV153("path", {
      d: "M12.5 10C12.5 11.05 11.8531 11.9469 10.9375 12.3156V17.5H9.0625V12.3156C8.14687 11.9437 7.5 11.0469 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10ZM5.1375 5.1375L3.8125 3.8125C2.10312 5.52187 1.25 7.75937 1.25 10C1.25 12.2406 2.10312 14.4781 3.8125 16.1875L5.1375 14.8625C3.79375 13.5188 3.125 11.7594 3.125 10C3.125 8.24062 3.79688 6.48125 5.1375 5.1375ZM6.02188 6.02188C4.925 7.11875 4.375 8.55937 4.375 10C4.375 11.4406 4.925 12.8781 6.02188 13.9781L7.34688 12.6531C6.61562 11.9219 6.25 10.9625 6.25 10C6.25 9.0375 6.61562 8.08125 7.34688 7.34688L6.02188 6.02188ZM13.9781 6.02188L12.6531 7.34688C13.3844 8.07812 13.75 9.0375 13.75 10C13.75 10.9625 13.3844 11.9188 12.6531 12.6531L13.9781 13.9781C15.075 12.8812 15.625 11.4406 15.625 10C15.625 8.55937 15.075 7.12188 13.9781 6.02188ZM16.1875 3.8125L14.8625 5.1375C16.2063 6.48125 16.875 8.24062 16.875 10C16.875 11.7594 16.2031 13.5188 14.8625 14.8625L16.1875 16.1875C17.8969 14.4781 18.75 12.2406 18.75 10C18.75 7.75937 17.8969 5.52187 16.1875 3.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cellularIcon = createIcon("cellular", iconDefinition151);

// src/noticons/src/chair/default.icon.tsx
import { jsxDEV as jsxDEV154, Fragment as Fragment152 } from "react/jsx-dev-runtime";
var iconDefinition152 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV154(Fragment152, {
    children: /* @__PURE__ */ jsxDEV154("path", {
      d: "M18.125 7.5C18.125 8.27187 17.6469 8.75 16.875 8.75V14.375H15V16.25H13.125V14.375H6.875V16.25H5V14.375H3.125V8.75C2.35312 8.75 1.875 8.27187 1.875 7.5C1.875 6.72813 2.35312 6.25 3.125 6.25H5V10.625H15V6.25H16.875C17.6469 6.25 18.125 6.72813 18.125 7.5ZM13.75 4.32187C13.75 3.84375 13.575 3.52187 13.1687 3.26562C12.6125 2.91562 11.7344 2.5 10 2.5C8.26562 2.5 7.38438 2.9125 6.83125 3.26562C6.425 3.52187 6.25 3.84375 6.25 4.32187V9.375H13.75V4.32187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chairIcon = createIcon("chair", iconDefinition152);

// src/noticons/src/champagne/default.icon.tsx
import { jsxDEV as jsxDEV155, Fragment as Fragment153 } from "react/jsx-dev-runtime";
var iconDefinition153 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV155(Fragment153, {
    children: /* @__PURE__ */ jsxDEV155("path", {
      d: "M14.375 8.75C14.375 8.42812 14.3344 8.10938 14.2562 7.79688L12.9313 2.5H7.06563L5.74063 7.79688C5.6625 8.10938 5.62187 8.42812 5.62187 8.75C5.62187 11.1469 6.72812 12.7344 9.05937 13.0594V15.625H6.55937V17.5H13.4344V15.625H10.9344V13.0594C13.2656 12.7344 14.3719 11.1469 14.3719 8.75H14.375ZM11.4688 4.375L11.7812 5.625H8.21563L8.52813 4.375H11.4688Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var champagneIcon = createIcon("champagne", iconDefinition153);

// src/noticons/src/champagneBottle/default.icon.tsx
import { jsxDEV as jsxDEV156, Fragment as Fragment154 } from "react/jsx-dev-runtime";
var iconDefinition154 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV156(Fragment154, {
    children: /* @__PURE__ */ jsxDEV156("path", {
      d: "M6.875 5.625V3.125H7.5V1.25H3.75V3.125H4.375V5.625L3.34062 6.65937C2.29375 7.70625 1.875 8.7125 1.875 10.1937V16.2469C1.875 17.0188 2.35312 17.4969 3.125 17.4969H8.125C8.89687 17.4969 9.375 17.0188 9.375 16.2469V10.1937C9.375 8.7125 8.95937 7.70625 7.90937 6.65937L6.875 5.625ZM7.5 15.625H3.75V10.1969C3.75 9.69375 3.80938 9.30937 3.95937 8.95937L5.625 10.625L7.29063 8.95937C7.44063 9.30937 7.5 9.69375 7.5 10.1969V15.625ZM18.125 8.75C18.125 8.42812 18.0844 8.10938 18.0063 7.79688L16.6813 2.5H12.0656L10.7406 7.79688C10.6625 8.10938 10.6219 8.42812 10.6219 8.75C10.6219 10.7625 11.525 12.1062 13.4344 12.425V15.625H10.9344V17.5H17.8094V15.625H15.3094V12.425C17.2188 12.1062 18.1219 10.7625 18.1219 8.75H18.125ZM15.2188 4.375L15.5312 5.625H13.2156L13.5281 4.375H15.2188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var champagneBottleIcon = createIcon("champagneBottle", iconDefinition154);

// src/noticons/src/chart/default.icon.tsx
import { jsxDEV as jsxDEV157, Fragment as Fragment155 } from "react/jsx-dev-runtime";
var iconDefinition155 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV157(Fragment155, {
    children: /* @__PURE__ */ jsxDEV157("path", {
      d: "M18.75 15V16.875H1.25V15H3.125V10H6.875V15H8.125V3.125H11.875V15H13.125V7.5H16.875V15H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartIcon = createIcon("chart", iconDefinition155);

// src/noticons/src/chartAlternate/default.icon.tsx
import { jsxDEV as jsxDEV158, Fragment as Fragment156 } from "react/jsx-dev-runtime";
var iconDefinition156 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV158(Fragment156, {
    children: /* @__PURE__ */ jsxDEV158("path", {
      d: "M5 11.875V13.125H12.5V16.875H5V18.75H3.125V1.25H5V3.125H10V6.875H5V8.125H16.875V11.875H5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartAlternateIcon = createIcon("chartAlternate", iconDefinition156);

// src/noticons/src/chartArea/default.icon.tsx
import { jsxDEV as jsxDEV159, Fragment as Fragment157 } from "react/jsx-dev-runtime";
var iconDefinition157 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV159(Fragment157, {
    children: /* @__PURE__ */ jsxDEV159("path", {
      d: "M4.375 15H17.5V16.875H2.5V3.125H4.375V15ZM16.25 5L11.4031 9.84688L8.43125 6.875L5.62813 9.67812V13.75H17.5031V5H16.2531H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartAreaIcon = createIcon("chartArea", iconDefinition157);

// src/noticons/src/chartDonut/default.icon.tsx
import { jsxDEV as jsxDEV160, Fragment as Fragment158 } from "react/jsx-dev-runtime";
var iconDefinition158 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV160(Fragment158, {
    children: /* @__PURE__ */ jsxDEV160("path", {
      d: "M12.1719 13.0531L14.8437 15.725C13.5375 16.8313 11.8469 17.5 10.0031 17.5C5.86249 17.5 2.50311 14.1406 2.50311 10C2.50311 5.85939 5.52499 2.84689 9.37499 2.52814V6.30626C7.60311 6.60314 6.24999 8.14376 6.24999 10C6.24999 12.0719 7.92811 13.75 9.99999 13.75C10.8094 13.75 11.5562 13.4906 12.1719 13.0531ZM13.6937 9.37501H17.4719C17.1719 5.73126 14.2687 2.82814 10.625 2.52814V6.30626C12.1937 6.56876 13.4312 7.80626 13.6937 9.37501ZM13.0531 12.1719L15.725 14.8438C16.7062 13.6875 17.3406 12.2281 17.4719 10.6281H13.6937C13.5969 11.1969 13.375 11.7219 13.0531 12.175V12.1719Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartDonutIcon = createIcon("chartDonut", iconDefinition158);

// src/noticons/src/chartLine/default.icon.tsx
import { jsxDEV as jsxDEV161, Fragment as Fragment159 } from "react/jsx-dev-runtime";
var iconDefinition159 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV161(Fragment159, {
    children: /* @__PURE__ */ jsxDEV161("path", {
      d: "M15.625 10.625V8.2L11.325 12.5L8.35312 9.52812L4.375 13.5063V15.0031H17.5V16.8781H2.5V3.125H4.375V10.8531L8.35312 6.875L11.325 9.84688L14.2969 6.875H11.8719V5H17.4969V10.625H15.6219H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartLineIcon = createIcon("chartLine", iconDefinition159);

// src/noticons/src/chartMixed/default.icon.tsx
import { jsxDEV as jsxDEV162, Fragment as Fragment160 } from "react/jsx-dev-runtime";
var iconDefinition160 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV162(Fragment160, {
    children: /* @__PURE__ */ jsxDEV162("path", {
      d: "M18.75 15V16.875H1.25V15H3.125V10.625H6.875V15H8.125V12.5H11.875V15H13.125V8.125H16.875V15H18.75ZM5 8.75C5.575 8.75 6.09062 8.49063 6.43437 8.08125L8.125 8.71562C8.125 8.71562 8.125 8.7375 8.125 8.75C8.125 9.78438 8.96562 10.625 10 10.625C11.0344 10.625 11.875 9.78438 11.875 8.75C11.875 8.50625 11.8281 8.27188 11.7406 8.05625L14.0813 6.00937C14.3531 6.1625 14.6656 6.25 15 6.25C16.0344 6.25 16.875 5.40937 16.875 4.375C16.875 3.34063 16.0344 2.5 15 2.5C13.9656 2.5 13.125 3.34063 13.125 4.375C13.125 4.61875 13.1719 4.85312 13.2594 5.06875L10.9187 7.11563C10.6469 6.9625 10.3344 6.875 10 6.875C9.425 6.875 8.90938 7.13437 8.56563 7.54375L6.875 6.90938C6.875 6.90938 6.875 6.8875 6.875 6.875C6.875 5.84063 6.03438 5 5 5C3.96563 5 3.125 5.84063 3.125 6.875C3.125 7.90938 3.96563 8.75 5 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartMixedIcon = createIcon("chartMixed", iconDefinition160);

// src/noticons/src/chartPie/default.icon.tsx
import { jsxDEV as jsxDEV163, Fragment as Fragment161 } from "react/jsx-dev-runtime";
var iconDefinition161 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV163(Fragment161, {
    children: /* @__PURE__ */ jsxDEV163("path", {
      d: "M17.4719 9.37501H10.625V2.52814C14.2688 2.82814 17.1719 5.73126 17.4719 9.37501ZM9.375 2.52814C5.525 2.84689 2.5 6.06876 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C11.8469 17.5 13.5344 16.8313 14.8406 15.725L9.375 10.2594V2.52814ZM15.725 14.8406C16.7063 13.6844 17.3406 12.225 17.4719 10.625H11.5094L15.725 14.8406Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chartPieIcon = createIcon("chartPie", iconDefinition161);

// src/noticons/src/chat/default.icon.tsx
import { jsxDEV as jsxDEV164, Fragment as Fragment162 } from "react/jsx-dev-runtime";
var iconDefinition162 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV164(Fragment162, {
    children: /* @__PURE__ */ jsxDEV164("path", {
      d: "M17.5 9.375C17.5 13.6156 14.6281 16.25 10 16.25C9.15 16.25 8.3625 16.1594 7.64062 15.9875C6.38438 16.9344 4.82187 17.5 3.125 17.5L2.5 16.5625L4.59375 14.4688C3.25 13.2781 2.5 11.5375 2.5 9.375C2.5 5.13438 5.37187 2.5 10 2.5C14.6281 2.5 17.5 5.13438 17.5 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chatIcon = createIcon("chat", iconDefinition162);

// src/noticons/src/chatUser/default.icon.tsx
import { jsxDEV as jsxDEV165, Fragment as Fragment163 } from "react/jsx-dev-runtime";
var iconDefinition163 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV165(Fragment163, {
    children: /* @__PURE__ */ jsxDEV165("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM10 5C11.5437 5 12.5 5.95625 12.5 7.5C12.5 9.04375 11.5437 10 10 10C8.45625 10 7.5 9.04375 7.5 7.5C7.5 5.95625 8.45625 5 10 5ZM10 14.375C8.25 14.375 6.86562 13.9344 5.90937 13.1156C6.75938 11.925 8.17188 11.25 10 11.25C11.8281 11.25 13.2406 11.925 14.0906 13.1156C13.1344 13.9344 11.75 14.375 10 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chatUserIcon = createIcon("chatUser", iconDefinition163);

// src/noticons/src/check/default.icon.tsx
import { jsxDEV as jsxDEV166, Fragment as Fragment164 } from "react/jsx-dev-runtime";
var iconDefinition164 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV166(Fragment164, {
    children: /* @__PURE__ */ jsxDEV166("path", {
      d: "M1.25 5V15H18.75V5H1.25ZM3.125 6.875H8.125V8.125H3.125V6.875ZM10.625 10.625H3.125V9.375H10.625V10.625ZM16.875 13.125H11.875V11.875H16.875V13.125ZM16.875 8.75H13.75V6.875H16.875V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var checkIcon = createIcon("check", iconDefinition164);

// src/noticons/src/checklist/default.icon.tsx
import { jsxDEV as jsxDEV167, Fragment as Fragment165 } from "react/jsx-dev-runtime";
var iconDefinition165 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV167(Fragment165, {
    children: /* @__PURE__ */ jsxDEV167("path", {
      d: "M6.8 1.875L8.125 3.2L3.9875 7.3375L1.25 4.60312L2.575 3.27812L3.9875 4.69063L6.8 1.87813V1.875ZM3.9875 9.6875L2.575 8.275L1.25 9.6L3.9875 12.3375L8.125 8.2L6.8 6.875L3.9875 9.6875ZM3.9875 14.6875L2.575 13.275L1.25 14.6L3.9875 17.3375L8.125 13.2L6.8 11.875L3.9875 14.6875ZM8.75 4.0625V5.9375H17.5V4.0625H8.75ZM8.75 10.9375H17.5V9.0625H8.75V10.9375ZM8.75 15.9375H17.5V14.0625H8.75V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var checklistIcon = createIcon("checklist", iconDefinition165);

// src/noticons/src/checkmark/default.icon.tsx
import { jsxDEV as jsxDEV168, Fragment as Fragment166 } from "react/jsx-dev-runtime";
var iconDefinition166 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV168(Fragment166, {
    children: /* @__PURE__ */ jsxDEV168("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM9.0625 13.825L5.625 10.3875L6.95 9.0625L9.0625 11.175L13.3625 6.875L14.6875 8.2L9.0625 13.825Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var checkmarkIcon = createIcon("checkmark", iconDefinition166);

// src/noticons/src/checkmarkLine/default.icon.tsx
import { jsxDEV as jsxDEV169, Fragment as Fragment167 } from "react/jsx-dev-runtime";
var iconDefinition167 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV169(Fragment167, {
    children: /* @__PURE__ */ jsxDEV169("path", {
      d: "M17.5 5.7L8.125 15.075L2.5 9.45L3.825 8.125L8.125 12.425L16.175 4.375L17.5 5.7Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var checkmarkLineIcon = createIcon("checkmarkLine", iconDefinition167);

// src/noticons/src/checkmarkSquare/default.icon.tsx
import { jsxDEV as jsxDEV170, Fragment as Fragment168 } from "react/jsx-dev-runtime";
var iconDefinition168 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV170(Fragment168, {
    children: /* @__PURE__ */ jsxDEV170("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM9.0625 13.825L5.625 10.3875L6.95 9.0625L9.0625 11.175L13.3625 6.875L14.6875 8.2L9.0625 13.825Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var checkmarkSquareIcon = createIcon("checkmarkSquare", iconDefinition168);

// src/noticons/src/chemistry/default.icon.tsx
import { jsxDEV as jsxDEV171, Fragment as Fragment169 } from "react/jsx-dev-runtime";
var iconDefinition169 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV171(Fragment169, {
    children: /* @__PURE__ */ jsxDEV171("path", {
      d: "M16.3125 13L12.8125 8.33437V4.375H14.375V2.5H5.625V4.375H7.1875V8.33437L3.6875 13C3.325 13.4844 3.125 14.0813 3.125 14.6875C3.125 16.2375 4.3875 17.5 5.9375 17.5H14.0625C15.6125 17.5 16.875 16.2375 16.875 14.6875C16.875 14.0813 16.675 13.4844 16.3125 13ZM9.0625 8.95937V4.375H10.9375V8.95937L13.125 11.875H6.875L9.0625 8.95937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chemistryIcon = createIcon("chemistry", iconDefinition169);

// src/noticons/src/cherries/default.icon.tsx
import { jsxDEV as jsxDEV172, Fragment as Fragment170 } from "react/jsx-dev-runtime";
var iconDefinition170 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV172(Fragment170, {
    children: /* @__PURE__ */ jsxDEV172("path", {
      d: "M18.125 13.75C18.125 15.8219 16.4469 17.5 14.375 17.5C12.3031 17.5 10.625 15.8219 10.625 13.75C10.625 12.4281 11.3125 11.2656 12.3469 10.6C12.2531 10.0125 12.1875 9.29375 12.1875 8.4375C12.1875 7.50313 12.2656 6.7375 12.3719 6.12188C10.0281 6.86562 8.13125 8.39063 7.17188 10.3375C8.47188 10.9281 9.375 12.2312 9.375 13.75C9.375 15.8219 7.69688 17.5 5.625 17.5C3.55312 17.5 1.875 15.8219 1.875 13.75C1.875 11.8031 3.3625 10.2 5.2625 10.0188C6.15625 7.875 7.91875 6.10625 10.1656 5H9.375C7.83125 5 6.875 4.04375 6.875 2.5H10.9375C12.1 2.5 12.9281 3.04375 13.2687 3.97187C14.0312 3.82812 14.8188 3.75 15.625 3.75V5.625C15.2063 5.625 14.7906 5.65 14.3844 5.69687C14.2375 6.23125 14.0625 7.1375 14.0625 8.4375C14.0625 9.05 14.1031 9.57187 14.1594 10.0094C14.2313 10.0062 14.3031 10 14.375 10C16.4469 10 18.125 11.6781 18.125 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cherriesIcon = createIcon("cherries", iconDefinition170);

// src/noticons/src/chessBishop/default.icon.tsx
import { jsxDEV as jsxDEV173, Fragment as Fragment171 } from "react/jsx-dev-runtime";
var iconDefinition171 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV173(Fragment171, {
    children: /* @__PURE__ */ jsxDEV173("path", {
      d: "M16.25 15.625V17.5H3.75V15.625H6.76562L5.69375 13.4781C5.44375 12.9812 5.31563 12.4312 5.31563 11.875C5.31563 11.3187 5.44375 10.7687 5.69375 10.2719L8.4375 4.78436C8.24062 4.48749 8.12813 4.13436 8.12813 3.75311C8.12813 2.71874 8.96875 1.87811 10.0031 1.87811C11.0375 1.87811 11.8781 2.71874 11.8781 3.75311C11.8781 4.78749 11.1 5.56249 10.1156 5.62186L7.6125 10.6281H9.00938L10.8844 6.87811H12.6125L14.3094 10.275C14.5594 10.7719 14.6875 11.3219 14.6875 11.8781C14.6875 12.4344 14.5594 12.9844 14.3094 13.4812L13.2375 15.6281H16.2531L16.25 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessBishopIcon = createIcon("chessBishop", iconDefinition171);

// src/noticons/src/chessKing/default.icon.tsx
import { jsxDEV as jsxDEV174, Fragment as Fragment172 } from "react/jsx-dev-runtime";
var iconDefinition172 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV174(Fragment172, {
    children: /* @__PURE__ */ jsxDEV174("path", {
      d: "M13.75 4.375C13.0656 4.375 12.4281 4.5625 11.875 4.88125V1.875H8.125V4.88125C7.57188 4.5625 6.93437 4.375 6.25 4.375C4.17812 4.375 2.5 6.05312 2.5 8.125V8.3375C2.5 9.01562 2.68438 9.68437 3.03438 10.2656L6.25 15.625H3.75V17.5H16.25V15.625H13.75L16.9656 10.2656C17.3156 9.68437 17.5 9.01562 17.5 8.3375V8.125C17.5 6.05312 15.8219 4.375 13.75 4.375ZM4.375 8.125C4.375 7.09062 5.21563 6.25 6.25 6.25C7.28438 6.25 8.125 7.09062 8.125 8.125V11.25H5.8125L4.64375 9.3C4.46875 9.00938 4.37813 8.675 4.37813 8.33437V8.12187L4.375 8.125ZM15.625 8.3375C15.625 8.67812 15.5313 9.0125 15.3594 9.30313L14.1906 11.2531H11.8781V8.12813C11.8781 7.09375 12.7187 6.25313 13.7531 6.25313C14.7875 6.25313 15.6281 7.09375 15.6281 8.12813V8.34063L15.625 8.3375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessKingIcon = createIcon("chessKing", iconDefinition172);

// src/noticons/src/chessKnight/default.icon.tsx
import { jsxDEV as jsxDEV175, Fragment as Fragment173 } from "react/jsx-dev-runtime";
var iconDefinition173 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV175(Fragment173, {
    children: /* @__PURE__ */ jsxDEV175("path", {
      d: "M14.375 15.625H16.25V17.5H3.75V15.625H5.9375L3.74687 11.2437C3.46875 10.6875 3.26562 10.0938 3.18125 9.475C2.8375 6.98125 4.15312 4.75 6.18125 3.725C5.8875 3.05938 5.71875 2.30625 5.71875 1.48125L6.575 0.625L9.08125 3.13125C10.5094 3.16563 11.8719 3.74062 12.8812 4.75313L16.2531 8.125L13.7531 10.625L10.6281 8.54063V10.4156L12.7094 11.8031C13.7531 12.5 14.3781 13.6687 14.3781 14.9219V15.6219L14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessKnightIcon = createIcon("chessKnight", iconDefinition173);

// src/noticons/src/chessPawn/default.icon.tsx
import { jsxDEV as jsxDEV176, Fragment as Fragment174 } from "react/jsx-dev-runtime";
var iconDefinition174 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV176(Fragment174, {
    children: /* @__PURE__ */ jsxDEV176("path", {
      d: "M14.0625 15.625L12.1875 10H13.75V8.125H11.8687C12.6312 7.55625 13.125 6.65 13.125 5.625C13.125 3.9 11.725 2.5 10 2.5C8.275 2.5 6.875 3.9 6.875 5.625C6.875 6.65 7.36875 7.55625 8.13125 8.125H6.25V10H7.8125L5.9375 15.625H3.75V17.5H16.25V15.625H14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessPawnIcon = createIcon("chessPawn", iconDefinition174);

// src/noticons/src/chessQueen/default.icon.tsx
import { jsxDEV as jsxDEV177, Fragment as Fragment175 } from "react/jsx-dev-runtime";
var iconDefinition175 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV177(Fragment175, {
    children: /* @__PURE__ */ jsxDEV177("path", {
      d: "M16.5719 7.47188L13.8531 15.625H16.25V17.5H3.75V15.625H6.14687L3.42813 7.47188C2.54688 7.31875 1.875 6.55312 1.875 5.625C1.875 4.59063 2.71563 3.75 3.75 3.75C4.78437 3.75 5.625 4.59063 5.625 5.625C5.625 6.09375 5.45 6.52187 5.16563 6.85L7.89062 10.9375L9.11875 5.40625C8.52813 5.09062 8.125 4.46875 8.125 3.75C8.125 2.71563 8.96562 1.875 10 1.875C11.0344 1.875 11.875 2.71563 11.875 3.75C11.875 4.46875 11.4719 5.09062 10.8813 5.40625L12.1094 10.9375L14.8344 6.85C14.55 6.52187 14.375 6.09375 14.375 5.625C14.375 4.59063 15.2156 3.75 16.25 3.75C17.2844 3.75 18.125 4.59063 18.125 5.625C18.125 6.55 17.4531 7.31875 16.5719 7.47188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessQueenIcon = createIcon("chessQueen", iconDefinition175);

// src/noticons/src/chessRook/default.icon.tsx
import { jsxDEV as jsxDEV178, Fragment as Fragment176 } from "react/jsx-dev-runtime";
var iconDefinition176 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV178(Fragment176, {
    children: /* @__PURE__ */ jsxDEV178("path", {
      d: "M16.25 15.625V17.5H3.75V15.625H5.72812L6.875 8.75L4.375 6.25V2.5H6.25V4.375H8.75V2.5H11.25V4.375H13.75V2.5H15.625V6.25L13.125 8.75L14.2719 15.625H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chessRookIcon = createIcon("chessRook", iconDefinition176);

// src/noticons/src/chevronsVertical/default.icon.tsx
import { jsxDEV as jsxDEV179, Fragment as Fragment177 } from "react/jsx-dev-runtime";
var iconDefinition177 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV179(Fragment177, {
    children: /* @__PURE__ */ jsxDEV179("path", {
      d: "M6.325 8.825L5 7.5L10 2.5L15 7.5L13.675 8.825L10 5.15L6.325 8.825ZM10 14.8469L6.325 11.1719L5 12.4969L10 17.4969L15 12.4969L13.675 11.1719L10 14.8469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chevronsVerticalIcon = createIcon("chevronsVertical", iconDefinition177);

// src/noticons/src/chicken/default.icon.tsx
import { jsxDEV as jsxDEV180, Fragment as Fragment178 } from "react/jsx-dev-runtime";
var iconDefinition178 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV180(Fragment178, {
    children: /* @__PURE__ */ jsxDEV180("path", {
      d: "M17.5 3.75V6.25H15.625V9.375C15.625 10.2531 15.3281 10.8469 14.625 11.375L10.625 14.375V16.25H11.875V17.5H8.125V16.25H9.375V14.375H8.125C6.58125 14.375 5.625 13.4187 5.625 11.875H5C3.45625 11.875 2.5 10.9187 2.5 9.375V4.375H3.75C5.29375 4.375 6.25 5.33125 6.25 6.875V8.125H11.25L13.0312 5.00938C13.5281 4.14063 14.2 3.75 15.2031 3.75H15.6281V2.5H16.2531C17.025 2.5 17.5031 2.97812 17.5031 3.75H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chickenIcon = createIcon("chicken", iconDefinition178);

// src/noticons/src/child/default.icon.tsx
import { jsxDEV as jsxDEV181, Fragment as Fragment179 } from "react/jsx-dev-runtime";
var iconDefinition179 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV181(Fragment179, {
    children: /* @__PURE__ */ jsxDEV181("path", {
      d: "M8.125 4.375C8.125 3.21875 8.84375 2.5 10 2.5C11.1562 2.5 11.875 3.21875 11.875 4.375C11.875 5.53125 11.1562 6.25 10 6.25C8.84375 6.25 8.125 5.53125 8.125 4.375ZM11.875 8.79062C11.9406 8.75 12.0094 8.70937 12.0781 8.6625L15 6.71562L14.1344 5.41563L11.8469 6.94062C11.2344 7.34687 10.7344 7.5 10 7.5C9.26562 7.5 8.7625 7.34687 8.15313 6.94062L5.86563 5.41563L5 6.71562L7.92188 8.6625C7.99063 8.70937 8.05938 8.75 8.125 8.79062V11.7031L6.25 16.9156L8.02813 17.4656L9.71562 12.7781H10.2875L11.975 17.4656L13.7531 16.9156L11.8781 11.7031V8.79062H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var childIcon = createIcon("child", iconDefinition179);

// src/noticons/src/chiliPepper/default.icon.tsx
import { jsxDEV as jsxDEV182, Fragment as Fragment180 } from "react/jsx-dev-runtime";
var iconDefinition180 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV182(Fragment180, {
    children: /* @__PURE__ */ jsxDEV182("path", {
      d: "M18.75 2.5V4.375H18.0688C17.3281 4.375 16.9188 4.59375 16.5094 5.20937L15.6187 6.54375C16.3906 7.22188 16.875 8.17812 16.875 9.0625C16.875 14.0625 11.7156 17.5 7.5 17.5C2.9625 17.5 1.25 15.625 1.25 15.625L1.875 13.125C10 13.125 8.125 5.625 13.2812 5.625C13.5031 5.625 13.7219 5.65 13.9313 5.69375L14.9469 4.16875C15.7063 3.02813 16.6969 2.5 18.0656 2.5H18.7469H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var chiliPepperIcon = createIcon("chiliPepper", iconDefinition180);

// src/noticons/src/christmasTree/default.icon.tsx
import { jsxDEV as jsxDEV183, Fragment as Fragment181 } from "react/jsx-dev-runtime";
var iconDefinition181 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV183(Fragment181, {
    children: /* @__PURE__ */ jsxDEV183("path", {
      d: "M13.7906 9.95001C14.4344 9.70626 15.0531 9.40001 15.625 9.01564L12.4875 5.87814C13.1531 5.67189 13.7937 5.38439 14.375 4.99689L10.625 1.24689H9.375L5.625 4.99689C6.1875 5.37189 6.82812 5.66564 7.51562 5.87501L4.375 9.01564C4.93438 9.38751 5.55312 9.70001 6.2125 9.94689L3.125 13.0344C4.70312 14.0906 6.68125 14.7406 8.75 14.9344V17.5H11.25V14.9375C13.2437 14.7594 15.2094 14.15 16.875 13.0344L13.7906 9.95001ZM7.8125 13.125C7.29375 13.125 6.875 12.7063 6.875 12.1875C6.875 11.6688 7.29375 11.25 7.8125 11.25C8.33125 11.25 8.75 11.6688 8.75 12.1875C8.75 12.7063 8.33125 13.125 7.8125 13.125ZM8.75 4.68751C8.75 4.16876 9.16875 3.75001 9.6875 3.75001C10.2063 3.75001 10.625 4.16876 10.625 4.68751C10.625 5.20626 10.2063 5.62501 9.6875 5.62501C9.16875 5.62501 8.75 5.20626 8.75 4.68751ZM10.9375 10C10.4187 10 10 9.58126 10 9.06251C10 8.54376 10.4187 8.12501 10.9375 8.12501C11.4563 8.12501 11.875 8.54376 11.875 9.06251C11.875 9.58126 11.4563 10 10.9375 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var christmasTreeIcon = createIcon("christmasTree", iconDefinition181);

// src/noticons/src/church/default.icon.tsx
import { jsxDEV as jsxDEV184, Fragment as Fragment182 } from "react/jsx-dev-runtime";
var iconDefinition182 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV184(Fragment182, {
    children: /* @__PURE__ */ jsxDEV184("path", {
      d: "M13.75 7.5L10.625 4.375V3.125H11.875V1.875H10.625V0.625H9.375V1.875H8.125V3.125H9.375V4.375L6.25 7.5H1.25V9.375H2.5V16.875H8.75V13.75C8.75 12.9781 9.22813 12.5 10 12.5C10.7719 12.5 11.25 12.9781 11.25 13.75V16.875H17.5V9.375H18.75V7.5H13.75ZM6.875 15H4.375V11.25C4.375 10.4781 4.85313 10 5.625 10C6.39687 10 6.875 10.4781 6.875 11.25V15ZM10 10.625C9.30937 10.625 8.75 10.0656 8.75 9.375C8.75 8.68437 9.30937 8.125 10 8.125C10.6906 8.125 11.25 8.68437 11.25 9.375C11.25 10.0656 10.6906 10.625 10 10.625ZM15.625 15H13.125V11.25C13.125 10.4781 13.6031 10 14.375 10C15.1469 10 15.625 10.4781 15.625 11.25V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var churchIcon = createIcon("church", iconDefinition182);

// src/noticons/src/cigarette/default.icon.tsx
import { jsxDEV as jsxDEV185, Fragment as Fragment183 } from "react/jsx-dev-runtime";
var iconDefinition183 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV185(Fragment183, {
    children: /* @__PURE__ */ jsxDEV185("path", {
      d: "M15 11.875V13.125H13.75V11.875C13.75 11.45 13.55 11.25 13.125 11.25H9.375C7.87813 11.25 6.875 10.2469 6.875 8.75C6.875 8.27812 6.975 7.85625 7.15625 7.5C5.08437 7.4875 3.75 6.14062 3.75 4.0625C3.75 1.98438 5.1 0.625 7.1875 0.625H8.125V1.875H7.1875C5.79688 1.875 5 2.67188 5 4.0625C5 5.45312 5.79688 6.25 7.1875 6.25H10V7.5H9.375C8.56875 7.5 8.125 7.94375 8.125 8.75C8.125 9.55625 8.56875 10 9.375 10H13.125C14.2469 10 15 10.7531 15 11.875ZM13.75 16.875H15V14.375H13.75V16.875ZM2.5 16.875H12.5V14.375H2.5V16.875ZM16.25 16.875H17.5V14.375H16.25V16.875ZM14.375 7.64062C14.775 7.11875 15 6.43125 15 5.625C15 3.725 13.7719 2.5 11.875 2.5H9.375V3.75H11.875C13.0656 3.75 13.75 4.43438 13.75 5.625C13.75 6.81563 13.0656 7.5 11.875 7.5H11.25V8.75H13.125C15.0813 8.75 16.25 9.91875 16.25 11.875V13.125H17.5V11.875C17.5 9.6625 16.3094 8.1 14.375 7.64062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cigaretteIcon = createIcon("cigarette", iconDefinition183);

// src/noticons/src/circle/default.icon.tsx
import { jsxDEV as jsxDEV186, Fragment as Fragment184 } from "react/jsx-dev-runtime";
var iconDefinition184 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV186(Fragment184, {
    children: /* @__PURE__ */ jsxDEV186("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleIcon = createIcon("circle", iconDefinition184);

// src/noticons/src/circleAlternate/default.icon.tsx
import { jsxDEV as jsxDEV187, Fragment as Fragment185 } from "react/jsx-dev-runtime";
var iconDefinition185 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV187(Fragment185, {
    children: /* @__PURE__ */ jsxDEV187("path", {
      d: "M17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleAlternateIcon = createIcon("circleAlternate", iconDefinition185);

// src/noticons/src/circleArrowsHorizontal/default.icon.tsx
import { jsxDEV as jsxDEV188, Fragment as Fragment186 } from "react/jsx-dev-runtime";
var iconDefinition186 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV188(Fragment186, {
    children: /* @__PURE__ */ jsxDEV188("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.2625 14.0625L10.9375 12.7375L12.7375 10.9375H7.26562L9.06563 12.7375L7.74063 14.0625L3.67813 10L7.74063 5.9375L9.06563 7.2625L7.26562 9.0625H12.7375L10.9375 7.2625L12.2625 5.9375L16.325 10L12.2625 14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleArrowsHorizontalIcon = createIcon("circleArrowsHorizontal", iconDefinition186);

// src/noticons/src/circleArrowsVertical/default.icon.tsx
import { jsxDEV as jsxDEV189, Fragment as Fragment187 } from "react/jsx-dev-runtime";
var iconDefinition187 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV189(Fragment187, {
    children: /* @__PURE__ */ jsxDEV189("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.7375 10.9375L14.0625 12.2625L10 16.325L5.9375 12.2625L7.2625 10.9375L9.0625 12.7375V7.26562L7.2625 9.06563L5.9375 7.74063L10 3.67813L14.0625 7.74063L12.7375 9.06563L10.9375 7.26562V12.7375L12.7375 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleArrowsVerticalIcon = createIcon("circleArrowsVertical", iconDefinition187);

// src/noticons/src/circleDashed/default.icon.tsx
import { jsxDEV as jsxDEV190, Fragment as Fragment188 } from "react/jsx-dev-runtime";
var iconDefinition188 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV190(Fragment188, {
    children: /* @__PURE__ */ jsxDEV190("path", {
      d: "M4.6 11.5594L2.85625 12.2812C2.625 11.5625 2.5 10.7937 2.5 9.99687C2.5 9.2 2.625 8.43438 2.85625 7.7125L4.6 8.43437C4.45625 8.93125 4.375 9.45312 4.375 9.99375C4.375 10.5344 4.45625 11.0594 4.6 11.5531V11.5594ZM5.075 12.7156L3.33438 13.4375C4.05 14.8188 5.18125 15.95 6.5625 16.6656L7.28437 14.925C6.35625 14.4125 5.5875 13.6437 5.075 12.7156ZM3.33438 6.5625L5.075 7.28437C5.5875 6.35625 6.35625 5.59062 7.28437 5.075L6.5625 3.33438C5.18125 4.05 4.05 5.18125 3.33438 6.5625ZM14.925 7.28437L16.6656 6.5625C15.95 5.18125 14.8188 4.05 13.4375 3.33438L12.7156 5.075C13.6437 5.5875 14.4125 6.35625 14.925 7.28437ZM17.1438 7.71875L15.4 8.44063C15.5437 8.9375 15.625 9.45937 15.625 10C15.625 10.5406 15.5437 11.0656 15.4 11.5594L17.1438 12.2812C17.375 11.5625 17.5 10.7937 17.5 9.99687C17.5 9.2 17.375 8.43438 17.1438 7.7125V7.71875ZM12.7156 14.925L13.4375 16.6656C14.8188 15.95 15.95 14.8188 16.6656 13.4375L14.925 12.7156C14.4125 13.6437 13.6437 14.4125 12.7156 14.925ZM7.71563 2.85625L8.4375 4.6C8.93437 4.45625 9.45625 4.375 9.99687 4.375C10.5375 4.375 11.0625 4.45625 11.5562 4.6L12.2781 2.85625C11.5594 2.625 10.7906 2.5 9.99375 2.5C9.19688 2.5 8.43125 2.625 7.70937 2.85625H7.71563ZM10 15.625C9.45937 15.625 8.93438 15.5437 8.44063 15.4L7.71875 17.1438C8.4375 17.375 9.20625 17.5 10.0031 17.5C10.8 17.5 11.5656 17.375 12.2875 17.1438L11.5656 15.4C11.0687 15.5437 10.5469 15.625 10.0063 15.625H10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleDashedIcon = createIcon("circleDashed", iconDefinition188);

// src/noticons/src/circleDot/default.icon.tsx
import { jsxDEV as jsxDEV191, Fragment as Fragment189 } from "react/jsx-dev-runtime";
var iconDefinition189 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV191(Fragment189, {
    children: /* @__PURE__ */ jsxDEV191("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 13.125C8.275 13.125 6.875 11.725 6.875 10C6.875 8.275 8.275 6.875 10 6.875C11.725 6.875 13.125 8.275 13.125 10C13.125 11.725 11.725 13.125 10 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleDotIcon = createIcon("circleDot", iconDefinition189);

// src/noticons/src/circleFiveEighths/default.icon.tsx
import { jsxDEV as jsxDEV192, Fragment as Fragment190 } from "react/jsx-dev-runtime";
var iconDefinition190 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV192(Fragment190, {
    children: /* @__PURE__ */ jsxDEV192("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 10L6.02188 13.9781C5.00313 12.9594 4.375 11.5531 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleFiveEighthsIcon = createIcon("circleFiveEighths", iconDefinition190);

// src/noticons/src/circleFourEighths/default.icon.tsx
import { jsxDEV as jsxDEV193, Fragment as Fragment191 } from "react/jsx-dev-runtime";
var iconDefinition191 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV193(Fragment191, {
    children: /* @__PURE__ */ jsxDEV193("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleFourEighthsIcon = createIcon("circleFourEighths", iconDefinition191);

// src/noticons/src/circleOneEighth/default.icon.tsx
import { jsxDEV as jsxDEV194, Fragment as Fragment192 } from "react/jsx-dev-runtime";
var iconDefinition192 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV194(Fragment192, {
    children: /* @__PURE__ */ jsxDEV194("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375V10L13.9781 6.02188C14.9969 7.04063 15.625 8.44688 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleOneEighthIcon = createIcon("circleOneEighth", iconDefinition192);

// src/noticons/src/circleRemove/default.icon.tsx
import { jsxDEV as jsxDEV195, Fragment as Fragment193 } from "react/jsx-dev-runtime";
var iconDefinition193 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV195(Fragment193, {
    children: /* @__PURE__ */ jsxDEV195("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.0625 10.9375H5.9375V9.0625H14.0625V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleRemoveIcon = createIcon("circleRemove", iconDefinition193);

// src/noticons/src/circleSevenEighths/default.icon.tsx
import { jsxDEV as jsxDEV196, Fragment as Fragment194 } from "react/jsx-dev-runtime";
var iconDefinition194 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV196(Fragment194, {
    children: /* @__PURE__ */ jsxDEV196("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 10L6.02188 6.02188C7.04063 5.00313 8.44688 4.375 10 4.375V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleSevenEighthsIcon = createIcon("circleSevenEighths", iconDefinition194);

// src/noticons/src/circleSixEighths/default.icon.tsx
import { jsxDEV as jsxDEV197, Fragment as Fragment195 } from "react/jsx-dev-runtime";
var iconDefinition195 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV197(Fragment195, {
    children: /* @__PURE__ */ jsxDEV197("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 10H4.375C4.375 6.89375 6.89375 4.375 10 4.375V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleSixEighthsIcon = createIcon("circleSixEighths", iconDefinition195);

// src/noticons/src/circleThreeEighths/default.icon.tsx
import { jsxDEV as jsxDEV198, Fragment as Fragment196 } from "react/jsx-dev-runtime";
var iconDefinition196 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV198(Fragment196, {
    children: /* @__PURE__ */ jsxDEV198("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375V10L13.9781 13.9781C12.9594 14.9969 11.5531 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleThreeEighthsIcon = createIcon("circleThreeEighths", iconDefinition196);

// src/noticons/src/circleTwoEighths/default.icon.tsx
import { jsxDEV as jsxDEV199, Fragment as Fragment197 } from "react/jsx-dev-runtime";
var iconDefinition197 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV199(Fragment197, {
    children: /* @__PURE__ */ jsxDEV199("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375V10H15.625C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var circleTwoEighthsIcon = createIcon("circleTwoEighths", iconDefinition197);

// src/noticons/src/city/default.icon.tsx
import { jsxDEV as jsxDEV200, Fragment as Fragment198 } from "react/jsx-dev-runtime";
var iconDefinition198 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV200(Fragment198, {
    children: /* @__PURE__ */ jsxDEV200("path", {
      d: "M17.5 5V17.5H2.5V7.1875L4.0625 5.625V3.75H5.3125V5.625L6.875 7.1875V12.5H8.125V2.5H13.125V10H14.375V5H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cityIcon = createIcon("city", iconDefinition198);

// src/noticons/src/clarinet/default.icon.tsx
import { jsxDEV as jsxDEV201, Fragment as Fragment199 } from "react/jsx-dev-runtime";
var iconDefinition199 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV201(Fragment199, {
    children: /* @__PURE__ */ jsxDEV201("path", {
      d: "M20 6.875V13.75H17.5C17.5 12.5938 16.7812 11.875 15.625 11.875H3.75L0 10.9375V9.6875L3.75 8.75H5V6.875H7.5V8.75H8.75V6.875H11.25V8.75H15.625C16.7812 8.75 17.5 8.03125 17.5 6.875H20Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clarinetIcon = createIcon("clarinet", iconDefinition199);

// src/noticons/src/clear/default.icon.tsx
import { jsxDEV as jsxDEV202, Fragment as Fragment200 } from "react/jsx-dev-runtime";
var iconDefinition200 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV202(Fragment200, {
    children: /* @__PURE__ */ jsxDEV202("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.75 12.425L12.425 13.75L10 11.325L7.575 13.75L6.25 12.425L8.675 10L6.25 7.575L7.575 6.25L10 8.675L12.425 6.25L13.75 7.575L11.325 10L13.75 12.425Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clearIcon = createIcon("clear", iconDefinition200);

// src/noticons/src/clipping/default.icon.tsx
import { jsxDEV as jsxDEV203, Fragment as Fragment201 } from "react/jsx-dev-runtime";
var iconDefinition201 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV203(Fragment201, {
    children: /* @__PURE__ */ jsxDEV203("path", {
      d: "M11.25 11.25H16.875V12.5L12.5 16.875H11.25V11.25ZM3.125 3.125V16.875H10V10H16.875V3.125H3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clippingIcon = createIcon("clipping", iconDefinition201);

// src/noticons/src/clock/default.icon.tsx
import { jsxDEV as jsxDEV204, Fragment as Fragment202 } from "react/jsx-dev-runtime";
var iconDefinition202 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV204(Fragment202, {
    children: /* @__PURE__ */ jsxDEV204("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.375 11.25H9.0625V5H10.9375V9.375H14.375V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clockIcon = createIcon("clock", iconDefinition202);

// src/noticons/src/clockAlternate/default.icon.tsx
import { jsxDEV as jsxDEV205, Fragment as Fragment203 } from "react/jsx-dev-runtime";
var iconDefinition203 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV205(Fragment203, {
    children: /* @__PURE__ */ jsxDEV205("path", {
      d: "M10.9375 9.375H13.75V11.25H9.0625V5.625H10.9375V9.375ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C6.89375 4.375 4.375 6.89375 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C13.1062 15.625 15.625 13.1062 15.625 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clockAlternateIcon = createIcon("clockAlternate", iconDefinition203);

// src/noticons/src/close/default.icon.tsx
import { jsxDEV as jsxDEV206, Fragment as Fragment204 } from "react/jsx-dev-runtime";
var iconDefinition204 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV206(Fragment204, {
    children: /* @__PURE__ */ jsxDEV206("path", {
      d: "M11.325 10L16.25 14.925L14.925 16.25L10 11.325L5.075 16.25L3.75 14.925L8.675 10L3.75 5.075L5.075 3.75L10 8.675L14.925 3.75L16.25 5.075L11.325 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var closeIcon = createIcon("close", iconDefinition204);

// src/noticons/src/clothesButton/default.icon.tsx
import { jsxDEV as jsxDEV207, Fragment as Fragment205 } from "react/jsx-dev-runtime";
var iconDefinition205 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV207(Fragment205, {
    children: /* @__PURE__ */ jsxDEV207("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM7.1875 10.9375C6.66875 10.9375 6.25 10.5188 6.25 10C6.25 9.48125 6.66875 9.0625 7.1875 9.0625C7.70625 9.0625 8.125 9.48125 8.125 10C8.125 10.5188 7.70625 10.9375 7.1875 10.9375ZM10 13.75C9.48125 13.75 9.0625 13.3313 9.0625 12.8125C9.0625 12.2937 9.48125 11.875 10 11.875C10.5188 11.875 10.9375 12.2937 10.9375 12.8125C10.9375 13.3313 10.5188 13.75 10 13.75ZM10 8.125C9.48125 8.125 9.0625 7.70625 9.0625 7.1875C9.0625 6.66875 9.48125 6.25 10 6.25C10.5188 6.25 10.9375 6.66875 10.9375 7.1875C10.9375 7.70625 10.5188 8.125 10 8.125ZM12.8125 10.9375C12.2937 10.9375 11.875 10.5188 11.875 10C11.875 9.48125 12.2937 9.0625 12.8125 9.0625C13.3313 9.0625 13.75 9.48125 13.75 10C13.75 10.5188 13.3313 10.9375 12.8125 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clothesButtonIcon = createIcon("clothesButton", iconDefinition205);

// src/noticons/src/clothesIron/default.icon.tsx
import { jsxDEV as jsxDEV208, Fragment as Fragment206 } from "react/jsx-dev-runtime";
var iconDefinition206 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV208(Fragment206, {
    children: /* @__PURE__ */ jsxDEV208("path", {
      d: "M16.4469 9.14688C15.2656 6.78438 13.6 5.4875 11.25 5.11563V3.75H8.75V5H1.25V11.25H3.125C4.66875 11.25 5.625 12.2063 5.625 13.75V15H18.75V13.75L16.4469 9.14688ZM3.125 9.375V6.875H8.75C10.2937 6.875 11.25 7.83125 11.25 9.375H3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var clothesIronIcon = createIcon("clothesIron", iconDefinition206);

// src/noticons/src/cloud/default.icon.tsx
import { jsxDEV as jsxDEV209, Fragment as Fragment207 } from "react/jsx-dev-runtime";
var iconDefinition207 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV209(Fragment207, {
    children: /* @__PURE__ */ jsxDEV209("path", {
      d: "M16.25 8.85V8.75C16.25 5.27813 14.0969 3.125 10.625 3.125C7.59062 3.125 5.5625 4.77188 5.1 7.50938C2.71875 7.59688 1.25 9.12813 1.25 11.5625C1.25 13.9969 2.80625 15.625 5.3125 15.625H15.3125C17.4344 15.625 18.75 14.3094 18.75 12.1875C18.75 10.4 17.8125 9.1875 16.25 8.85ZM15.3125 13.75H5.3125C3.84063 13.75 3.125 13.0344 3.125 11.5625C3.125 10.0906 3.84063 9.375 5.3125 9.375H6.875V8.75C6.875 6.33125 8.20625 5 10.625 5C13.0437 5 14.375 6.33125 14.375 8.75V10.625H15.3125C16.3938 10.625 16.875 11.1062 16.875 12.1875C16.875 13.2688 16.3938 13.75 15.3125 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudIcon = createIcon("cloud", iconDefinition207);

// src/noticons/src/cloudNo/default.icon.tsx
import { jsxDEV as jsxDEV210, Fragment as Fragment208 } from "react/jsx-dev-runtime";
var iconDefinition208 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV210(Fragment208, {
    children: /* @__PURE__ */ jsxDEV210("path", {
      d: "M16.25 8.85V8.75C16.25 5.27813 14.0969 3.125 10.625 3.125C7.59062 3.125 5.5625 4.77188 5.1 7.50938C2.71875 7.59688 1.25 9.12813 1.25 11.5625C1.25 13.9969 2.80625 15.625 5.3125 15.625H15.3125C17.4344 15.625 18.75 14.3094 18.75 12.1875C18.75 10.4 17.8125 9.1875 16.25 8.85ZM13.4375 12.425L12.1125 13.75L10 11.6375L7.8875 13.75L6.5625 12.425L8.675 10.3125L6.5625 8.2L7.8875 6.875L10 8.9875L12.1125 6.875L13.4375 8.2L11.325 10.3125L13.4375 12.425Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudNoIcon = createIcon("cloudNo", iconDefinition208);

// src/noticons/src/cloudOff/default.icon.tsx
import { jsxDEV as jsxDEV211, Fragment as Fragment209 } from "react/jsx-dev-runtime";
var iconDefinition209 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV211(Fragment209, {
    children: /* @__PURE__ */ jsxDEV211("path", {
      d: "M8.27187 5.62187L6.92188 4.27187C7.8625 3.53125 9.11875 3.125 10.6219 3.125C14.0938 3.125 16.2469 5.27813 16.2469 8.75V8.85C17.8094 9.1875 18.7469 10.4 18.7469 12.1875C18.7469 13.3875 18.325 14.3312 17.5719 14.925L16.2156 13.5687C16.6594 13.3406 16.8719 12.8938 16.8719 12.1875C16.8719 11.1062 16.3906 10.625 15.3094 10.625H14.3719V8.75C14.3719 6.33125 13.0406 5 10.6219 5C9.65938 5 8.87187 5.21563 8.26875 5.62187H8.27187ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937ZM5.3125 13.75C3.84063 13.75 3.125 13.0344 3.125 11.5625C3.125 10.0906 3.84063 9.375 5.3125 9.375H6.72188L4.86562 7.51875C2.62187 7.69375 1.25 9.20937 1.25 11.5625C1.25 14.0688 2.80625 15.625 5.3125 15.625H12.9719L11.0969 13.75H5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudOffIcon = createIcon("cloudOff", iconDefinition209);

// src/noticons/src/cloudYes/default.icon.tsx
import { jsxDEV as jsxDEV212, Fragment as Fragment210 } from "react/jsx-dev-runtime";
var iconDefinition210 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV212(Fragment210, {
    children: /* @__PURE__ */ jsxDEV212("path", {
      d: "M16.25 8.85V8.75C16.25 5.27813 14.0969 3.125 10.625 3.125C7.59062 3.125 5.5625 4.77188 5.1 7.50938C2.71875 7.59688 1.25 9.12813 1.25 11.5625C1.25 13.9969 2.80625 15.625 5.3125 15.625H15.3125C17.4344 15.625 18.75 14.3094 18.75 12.1875C18.75 10.4 17.8125 9.1875 16.25 8.85ZM9.0625 13.5125L5.9375 10.3875L7.2625 9.0625L9.0625 10.8625L12.425 7.5L13.75 8.825L9.0625 13.5125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudYesIcon = createIcon("cloudYes", iconDefinition210);

// src/noticons/src/cloudy/default.icon.tsx
import { jsxDEV as jsxDEV213, Fragment as Fragment211 } from "react/jsx-dev-runtime";
var iconDefinition211 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV213(Fragment211, {
    children: /* @__PURE__ */ jsxDEV213("path", {
      d: "M18.125 13.125C18.125 14.2812 17.4062 15 16.25 15H4.6875C2.95312 15 1.875 13.9219 1.875 12.1875C1.875 10.5594 2.825 9.50938 4.375 9.3875C4.375 9.38438 4.375 9.37813 4.375 9.375C4.375 6.675 6.05 5 8.75 5C11.0312 5 12.5781 6.2 13.0031 8.20312C13.2375 8.15313 13.4844 8.125 13.75 8.125C15.4844 8.125 16.5625 9.20312 16.5625 10.9375C16.5625 11.0531 16.5563 11.1656 16.5469 11.275C17.525 11.3906 18.125 12.075 18.125 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloudyIcon = createIcon("cloudy", iconDefinition211);

// src/noticons/src/clover/default.icon.tsx
import { jsxDEV as jsxDEV214, Fragment as Fragment212 } from "react/jsx-dev-runtime";
var iconDefinition212 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV214(Fragment212, {
    children: /* @__PURE__ */ jsxDEV214("path", {
      d: "M11.875 9.375V9.99687C11.875 10.6687 12.0719 11.1281 12.5625 11.5875C14.5938 13.5031 15.625 14.6219 15.625 17.5H13.4375C13.4375 15.2563 13.0438 14.2031 11.6656 12.6312C11.1969 12.0969 10.7188 11.875 10.0094 11.875H9.37189V13.125C9.37189 15.75 8.44689 17.5 6.87189 17.5C5.83751 17.5 4.99689 16.7437 4.99689 15.625V15H4.37189C3.25314 15 2.49689 14.1594 2.49689 13.125C2.49689 11.55 4.24689 10.625 6.87189 10.625H8.12189V9.375H6.87189C4.24689 9.375 2.49689 8.45 2.49689 6.875C2.49689 5.84063 3.25314 5 4.37189 5H4.99689V4.375C4.99689 3.25625 5.83751 2.5 6.87189 2.5C8.44689 2.5 9.37189 4.25 9.37189 6.875V8.125H10.6219V6.875C10.6219 4.25 11.5469 2.5 13.1219 2.5C14.1563 2.5 14.9969 3.25625 14.9969 4.375V5H15.6219C16.7406 5 17.4969 5.84063 17.4969 6.875C17.4969 8.45 15.7469 9.375 13.1219 9.375H11.8719H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloverIcon = createIcon("clover", iconDefinition212);

// src/noticons/src/cloverFourLeaf/default.icon.tsx
import { jsxDEV as jsxDEV215, Fragment as Fragment213 } from "react/jsx-dev-runtime";
var iconDefinition213 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV215(Fragment213, {
    children: /* @__PURE__ */ jsxDEV215("path", {
      d: "M17.5 13.125C17.5 14.1594 16.7437 15 15.625 15H15V15.625C15 16.7437 14.1594 17.5 13.125 17.5C11.55 17.5 10.625 15.75 10.625 13.125V11.875H9.375V13.125C9.375 15.75 8.45 17.5 6.875 17.5C5.84063 17.5 5 16.7437 5 15.625V15H4.375C3.25625 15 2.5 14.1594 2.5 13.125C2.5 11.55 4.25 10.625 6.875 10.625H8.125V9.375H6.875C4.25 9.375 2.5 8.45 2.5 6.875C2.5 5.84063 3.25625 5 4.375 5H5V4.375C5 3.25625 5.84063 2.5 6.875 2.5C8.45 2.5 9.375 4.25 9.375 6.875V8.125H10.625V6.875C10.625 4.25 11.55 2.5 13.125 2.5C14.1594 2.5 15 3.25625 15 4.375V5H15.625C16.7437 5 17.5 5.84063 17.5 6.875C17.5 8.45 15.75 9.375 13.125 9.375H11.875V10.625H13.125C15.75 10.625 17.5 11.55 17.5 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cloverFourLeafIcon = createIcon("cloverFourLeaf", iconDefinition213);

// src/noticons/src/coaster/default.icon.tsx
import { jsxDEV as jsxDEV216, Fragment as Fragment214 } from "react/jsx-dev-runtime";
var iconDefinition214 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV216(Fragment214, {
    children: /* @__PURE__ */ jsxDEV216("path", {
      d: "M14.2719 14.375L16.25 2.5H3.75L5.72812 14.375H14.2688H14.2719ZM14.0375 4.375L13.6219 6.875H6.38125L5.96563 4.375H14.0375ZM3.75 15.625H16.25V17.5H3.75V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var coasterIcon = createIcon("coaster", iconDefinition214);

// src/noticons/src/coat/default.icon.tsx
import { jsxDEV as jsxDEV217, Fragment as Fragment215 } from "react/jsx-dev-runtime";
var iconDefinition215 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV217(Fragment215, {
    children: /* @__PURE__ */ jsxDEV217("path", {
      d: "M19.0625 13.75L16.25 14.6875L14.375 9.0625V17.5H10.625V6.81562C10.625 6.075 10.8344 5.57188 11.3562 5.04688L12.1875 4.21562C12.1875 4.21562 11.6844 3.12187 10 3.12187C8.31563 3.12187 7.8125 4.21562 7.8125 4.21562L8.64375 5.04688C9.16875 5.57188 9.375 6.075 9.375 6.81562V17.5H5.625V9.0625L3.75 14.6875L0.9375 13.75L4.25938 3.78125C4.54375 2.925 5.1375 2.5 6.0375 2.5H6.875C6.875 2.5 7.59375 1.25 10 1.25C12.4062 1.25 13.125 2.5 13.125 2.5H13.9625C14.8656 2.5 15.4562 2.92813 15.7406 3.78125L19.0625 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var coatIcon = createIcon("coat", iconDefinition215);

// src/noticons/src/cocktail/default.icon.tsx
import { jsxDEV as jsxDEV218, Fragment as Fragment216 } from "react/jsx-dev-runtime";
var iconDefinition216 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV218(Fragment216, {
    children: /* @__PURE__ */ jsxDEV218("path", {
      d: "M17.5 5V3.125H2.5V5L9.0625 11.5625V15.625H5.3125V17.5H14.6875V15.625H10.9375V11.5625L17.5 5ZM10 9.375C9.48125 9.375 9.0625 8.95625 9.0625 8.4375C9.0625 7.91875 9.48125 7.5 10 7.5C10.5188 7.5 10.9375 7.91875 10.9375 8.4375C10.9375 8.95625 10.5188 9.375 10 9.375ZM14.8469 5L13.5969 6.25H6.4L5.15 5H14.8469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cocktailIcon = createIcon("cocktail", iconDefinition216);

// src/noticons/src/code/default.icon.tsx
import { jsxDEV as jsxDEV219, Fragment as Fragment217 } from "react/jsx-dev-runtime";
var iconDefinition217 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV219(Fragment217, {
    children: /* @__PURE__ */ jsxDEV219("path", {
      d: "M5 5.625H6.875V6.25L3.125 10L6.875 13.75V14.375H5L0.625 10L5 5.625ZM15.625 5.625H13.75V6.25L17.5 10L13.75 13.75V14.375H15.625L20 10L15.625 5.625ZM7.1875 17.5H9.0625L12.8125 2.5H10.9375L7.1875 17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var codeIcon = createIcon("code", iconDefinition217);

// src/noticons/src/codeScan/default.icon.tsx
import { jsxDEV as jsxDEV220, Fragment as Fragment218 } from "react/jsx-dev-runtime";
var iconDefinition218 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV220(Fragment218, {
    children: /* @__PURE__ */ jsxDEV220("path", {
      d: "M3.125 16.875H9.375V10.625H3.125V16.875ZM5 12.5H7.5V15H5V12.5ZM14.375 10.625H16.875V13.125H15V14.375H16.875V16.875H14.375V15H13.125V16.875H10.625V14.375H12.5V13.125H10.625V10.625H13.125V12.5H14.375V10.625ZM10.625 3.125V9.375H16.875V3.125H10.625ZM15 7.5H12.5V5H15V7.5ZM3.125 9.375H9.375V3.125H3.125V9.375ZM5 5H7.5V7.5H5V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var codeScanIcon = createIcon("codeScan", iconDefinition218);

// src/noticons/src/coffee/default.icon.tsx
import { jsxDEV as jsxDEV221, Fragment as Fragment219 } from "react/jsx-dev-runtime";
var iconDefinition219 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV221(Fragment219, {
    children: /* @__PURE__ */ jsxDEV221("path", {
      d: "M17.5 4.375H15.1562L14.8438 2.5H5.15625L4.84375 4.375H2.5V6.25H4.0625L5.9375 17.5H14.0625L15.9375 6.25H17.5V4.375ZM7.525 15.625L7.2125 13.75H12.7844L12.4719 15.625H7.525ZM13.7219 8.125H6.275L5.9625 6.25H14.0344L13.7219 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var coffeeIcon = createIcon("coffee", iconDefinition219);

// src/noticons/src/coffeeMaker/default.icon.tsx
import { jsxDEV as jsxDEV222, Fragment as Fragment220 } from "react/jsx-dev-runtime";
var iconDefinition220 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV222(Fragment220, {
    children: /* @__PURE__ */ jsxDEV222("path", {
      d: "M7.5 15.625H16.25V17.5H2.5V5C2.5 3.45625 3.45625 2.5 5 2.5H15L16.25 5V6.25H7.5V15.625ZM18.75 9.375V10.4688C18.75 11.625 18.0312 12.3438 16.875 12.3438H16.25V12.5C16.25 13.6562 15.5312 14.375 14.375 14.375H10.625C9.46875 14.375 8.75 13.6562 8.75 12.5V7.5H16.875C18.0312 7.5 18.75 8.21875 18.75 9.375ZM17.5 9.375C17.5 8.90625 17.3438 8.75 16.875 8.75H16.25V11.0938H16.875C17.3438 11.0938 17.5 10.9375 17.5 10.4688V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var coffeeMakerIcon = createIcon("coffeeMaker", iconDefinition220);

// src/noticons/src/colorPalette/default.icon.tsx
import { jsxDEV as jsxDEV223, Fragment as Fragment221 } from "react/jsx-dev-runtime";
var iconDefinition221 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV223(Fragment221, {
    children: /* @__PURE__ */ jsxDEV223("path", {
      d: "M17.0625 6.6C15.6625 4.525 13.025 3.125 10 3.125C5.5125 3.125 1.875 6.20312 1.875 10C1.875 13.7969 5.5125 16.875 10 16.875C12.275 16.875 14.3313 16.0844 15.8031 14.8094C16.0906 14.5625 16.25 14.1969 16.25 13.8188C16.25 13.0906 15.6594 12.5 14.9312 12.5C14.2031 12.5 13.75 12.1406 13.75 11.5625C13.75 10.9844 14.1656 10.625 14.9188 10.625C16.3438 10.625 17.5 9.46875 17.5 8.04375C17.5 7.53125 17.35 7.025 17.0625 6.6ZM5.625 11.875C4.93438 11.875 4.375 11.3156 4.375 10.625C4.375 9.93437 4.93438 9.375 5.625 9.375C6.31563 9.375 6.875 9.93437 6.875 10.625C6.875 11.3156 6.31563 11.875 5.625 11.875ZM6.875 6.5625C6.875 5.87188 7.43437 5.3125 8.125 5.3125C8.81563 5.3125 9.375 5.87188 9.375 6.5625C9.375 7.25313 8.81563 7.8125 8.125 7.8125C7.43437 7.8125 6.875 7.25313 6.875 6.5625ZM9.0625 15C8.37187 15 7.8125 14.4406 7.8125 13.75C7.8125 13.0594 8.37187 12.5 9.0625 12.5C9.75313 12.5 10.3125 13.0594 10.3125 13.75C10.3125 14.4406 9.75313 15 9.0625 15ZM12.8125 8.4375C12.1219 8.4375 11.5625 7.87813 11.5625 7.1875C11.5625 6.49688 12.1219 5.9375 12.8125 5.9375C13.5031 5.9375 14.0625 6.49688 14.0625 7.1875C14.0625 7.87813 13.5031 8.4375 12.8125 8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var colorPaletteIcon = createIcon("colorPalette", iconDefinition221);

// src/noticons/src/colorPicker/default.icon.tsx
import { jsxDEV as jsxDEV224, Fragment as Fragment222 } from "react/jsx-dev-runtime";
var iconDefinition222 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV224(Fragment222, {
    children: /* @__PURE__ */ jsxDEV224("path", {
      d: "M16.8875 5.76561L13.8656 8.78749L15.0031 9.92499L13.6781 11.25L8.75313 6.32499L10.0781 4.99999L11.2156 6.13749L14.2375 3.11561C14.6469 2.70624 15.1062 2.50311 15.5625 2.50311C16.5188 2.50311 17.5031 3.48749 17.5031 4.44374C17.5031 4.90311 17.3 5.35936 16.8906 5.76874L16.8875 5.76561ZM4.0625 13.2844L2.5 17.0562L2.94062 17.4969L6.7125 15.9344L11.6531 10.9937L9 8.34061L4.05937 13.2812L4.0625 13.2844Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var colorPickerIcon = createIcon("colorPicker", iconDefinition222);

// src/noticons/src/colorSwatch/default.icon.tsx
import { jsxDEV as jsxDEV225, Fragment as Fragment223 } from "react/jsx-dev-runtime";
var iconDefinition223 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV225(Fragment223, {
    children: /* @__PURE__ */ jsxDEV225("path", {
      d: "M4.375 2.5V17.5H15.625V2.5H4.375ZM13.75 15.625H6.25V11.875H13.75V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var colorSwatchIcon = createIcon("colorSwatch", iconDefinition223);

// src/noticons/src/column/default.icon.tsx
import { jsxDEV as jsxDEV226, Fragment as Fragment224 } from "react/jsx-dev-runtime";
var iconDefinition224 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV226(Fragment224, {
    children: /* @__PURE__ */ jsxDEV226("path", {
      d: "M3.125 3.125H6.875V16.875H3.125V3.125ZM8.125 16.875H11.875V3.125H8.125V16.875ZM13.125 3.125V16.875H16.875V3.125H13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var columnIcon = createIcon("column", iconDefinition224);

// src/noticons/src/comb/default.icon.tsx
import { jsxDEV as jsxDEV227, Fragment as Fragment225 } from "react/jsx-dev-runtime";
var iconDefinition225 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV227(Fragment225, {
    children: /* @__PURE__ */ jsxDEV227("path", {
      d: "M9.375 4.375V5H14.375V6.875H9.375V8.125H14.375V10H9.375V11.25H14.375V13.125H10.625C9.85313 13.125 9.375 13.6031 9.375 14.375V18.125H6.25V4.375C6.25 2.83125 7.20625 1.875 8.75 1.875H14.375V3.75H10C9.61562 3.75 9.375 3.99062 9.375 4.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var combIcon = createIcon("comb", iconDefinition225);

// src/noticons/src/commandLine/default.icon.tsx
import { jsxDEV as jsxDEV228, Fragment as Fragment226 } from "react/jsx-dev-runtime";
var iconDefinition226 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV228(Fragment226, {
    children: /* @__PURE__ */ jsxDEV228("path", {
      d: "M15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V5.625C17.5 4.08125 16.5437 3.125 15 3.125ZM6.25 11.25H4.375V10.625L6.875 8.125L4.375 5.625V5H6.25L9.375 8.125L6.25 11.25ZM15.625 11.25H10.625V9.375H15.625V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var commandLineIcon = createIcon("commandLine", iconDefinition226);

// src/noticons/src/comment/default.icon.tsx
import { jsxDEV as jsxDEV229, Fragment as Fragment227 } from "react/jsx-dev-runtime";
var iconDefinition227 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV229(Fragment227, {
    children: /* @__PURE__ */ jsxDEV229("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM14.0625 10.3125H10.9375V13.4375H9.0625V10.3125H5.9375V8.4375H9.0625V5.3125H10.9375V8.4375H14.0625V10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var commentIcon = createIcon("comment", iconDefinition227);

// src/noticons/src/compass/default.icon.tsx
import { jsxDEV as jsxDEV230, Fragment as Fragment228 } from "react/jsx-dev-runtime";
var iconDefinition228 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV230(Fragment228, {
    children: /* @__PURE__ */ jsxDEV230("path", {
      d: "M10.9375 10C10.9375 10.5188 10.5188 10.9375 10 10.9375C9.48125 10.9375 9.0625 10.5188 9.0625 10C9.0625 9.48125 9.48125 9.0625 10 9.0625C10.5188 9.0625 10.9375 9.48125 10.9375 10ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM14.375 6.06562L13.9344 5.625L8.4375 8.4375L5.625 13.9344L6.06562 14.375L11.5625 11.5625L14.375 6.06562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var compassIcon = createIcon("compass", iconDefinition228);

// src/noticons/src/compose/default.icon.tsx
import { jsxDEV as jsxDEV231, Fragment as Fragment229 } from "react/jsx-dev-runtime";
var iconDefinition229 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV231(Fragment229, {
    children: /* @__PURE__ */ jsxDEV231("path", {
      d: "M14.375 10.625H16.25V17.5H2.5V3.75H9.375V5.625H4.375V15.625H14.375V10.625ZM18.125 4.08437L15.9156 1.875L13.75 4.04063L15.9594 6.25L18.125 4.08437ZM6.25 13.3063L6.69063 13.7469L9.70937 12.4969L15.075 7.13125L12.8656 4.92188L7.5 10.2875L6.25 13.3063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var composeIcon = createIcon("compose", iconDefinition229);

// src/noticons/src/compressedDocument/default.icon.tsx
import { jsxDEV as jsxDEV232, Fragment as Fragment230 } from "react/jsx-dev-runtime";
var iconDefinition230 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV232(Fragment230, {
    children: /* @__PURE__ */ jsxDEV232("path", {
      d: "M10.625 9.375H16.25V17.5H3.75V2.5H9.375V4.375H8.125V5.625H9.375V6.875H8.125V8.125H9.375V9.375H8.125V10.625H9.375V11.875H8.125V13.125H9.375C9.14687 13.5844 9.0625 13.9344 9.0625 14.45V15.625H10.9375V14.45C10.9375 13.9375 10.8531 13.5844 10.625 13.125V11.875H11.875V10.625H10.625V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var compressedDocumentIcon = createIcon("compressedDocument", iconDefinition230);

// src/noticons/src/computer/default.icon.tsx
import { jsxDEV as jsxDEV233, Fragment as Fragment231 } from "react/jsx-dev-runtime";
var iconDefinition231 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV233(Fragment231, {
    children: /* @__PURE__ */ jsxDEV233("path", {
      d: "M2.5 12.5H17.5V13.75C17.5 14.5219 17.0219 15 16.25 15H11.875V16.25H13.75V17.5H6.25V16.25H8.125V15H3.75C2.97812 15 2.5 14.5219 2.5 13.75V12.5ZM16.25 3.125H3.75C2.97812 3.125 2.5 3.60312 2.5 4.375V11.25H17.5V4.375C17.5 3.60312 17.0219 3.125 16.25 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var computerIcon = createIcon("computer", iconDefinition231);

// src/noticons/src/computerChip/default.icon.tsx
import { jsxDEV as jsxDEV234, Fragment as Fragment232 } from "react/jsx-dev-runtime";
var iconDefinition232 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV234(Fragment232, {
    children: /* @__PURE__ */ jsxDEV234("path", {
      d: "M18.125 6.71875V5.78125L16.25 5.3125V5C16.25 4.22813 15.7719 3.75 15 3.75H14.6875L14.2188 1.875H13.2812L12.8125 3.75H10.9375L10.4688 1.875H9.53125L9.0625 3.75H7.1875L6.71875 1.875H5.78125L5.3125 3.75H5C4.22813 3.75 3.75 4.22813 3.75 5V5.3125L1.875 5.78125V6.71875L3.75 7.1875V9.0625L1.875 9.53125V10.4688L3.75 10.9375V12.8125L1.875 13.2812V14.2188L3.75 14.6875V15C3.75 15.7719 4.22813 16.25 5 16.25H5.3125L5.78125 18.125H6.71875L7.1875 16.25H9.0625L9.53125 18.125H10.4688L10.9375 16.25H12.8125L13.2812 18.125H14.2188L14.6875 16.25H15C15.7719 16.25 16.25 15.7719 16.25 15V14.6875L18.125 14.2188V13.2812L16.25 12.8125V10.9375L18.125 10.4688V9.53125L16.25 9.0625V7.1875L18.125 6.71875ZM15 15H5V5H15V15ZM13.75 6.25H6.25V13.75H13.75V6.25ZM8.4375 9.375C7.91875 9.375 7.5 8.95625 7.5 8.4375C7.5 7.91875 7.91875 7.5 8.4375 7.5C8.95625 7.5 9.375 7.91875 9.375 8.4375C9.375 8.95625 8.95625 9.375 8.4375 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var computerChipIcon = createIcon("computerChip", iconDefinition232);

// src/noticons/src/conceal/default.icon.tsx
import { jsxDEV as jsxDEV235, Fragment as Fragment233 } from "react/jsx-dev-runtime";
var iconDefinition233 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV235(Fragment233, {
    children: /* @__PURE__ */ jsxDEV235("path", {
      d: "M18.75 8.75V10.625H1.25V8.75H4.39687C4.60312 5.65937 6.27812 2.5 7.8125 2.5C8.82188 2.5 9.22813 3.125 10 3.125C10.7719 3.125 11.2063 2.5 12.1875 2.5C13.7344 2.5 15.4031 5.62813 15.6031 8.75H18.75ZM2.5 11.875H17.5V13.75H16.25L15.9844 15.3438C15.7531 16.7344 14.8469 17.5 13.4375 17.5C12.0281 17.5 11.1219 16.7344 10.8906 15.3438L10.7281 14.3687C10.6625 13.9719 10.4031 13.7531 10 13.7531C9.59688 13.7531 9.3375 13.9719 9.27188 14.3687L9.10938 15.3438C8.87812 16.7344 7.97188 17.5 6.5625 17.5C5.15312 17.5 4.24688 16.7344 4.01562 15.3438L3.75 13.75H2.5V11.875ZM12.1875 16.25H13.4375L14.6875 13.75H13.4375L12.1875 16.25ZM5.3125 16.25H6.5625L7.8125 13.75H6.5625L5.3125 16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var concealIcon = createIcon("conceal", iconDefinition233);

// src/noticons/src/condense/default.icon.tsx
import { jsxDEV as jsxDEV236, Fragment as Fragment234 } from "react/jsx-dev-runtime";
var iconDefinition234 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV236(Fragment234, {
    children: /* @__PURE__ */ jsxDEV236("path", {
      d: "M2.49999 11.5625H8.43749V17.5H6.56249V14.7625L3.21874 18.1062L1.89374 16.7812L5.23749 13.4375H2.49999V11.5625ZM17.5 6.56249H14.7625L18.1062 3.21874L16.7812 1.89374L13.4375 5.23749V2.49999H11.5625V8.43749H17.5V6.56249ZM17.5 13.4375V11.5625H11.5625V17.5H13.4375V14.7625L16.7812 18.1062L18.1062 16.7812L14.7625 13.4375H17.5ZM6.56249 5.23749L3.21874 1.89374L1.89374 3.21874L5.23749 6.56249H2.49999V8.43749H8.43749V2.49999H6.56249V5.23749Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var condenseIcon = createIcon("condense", iconDefinition234);

// src/noticons/src/confettiBall/default.icon.tsx
import { jsxDEV as jsxDEV237, Fragment as Fragment235 } from "react/jsx-dev-runtime";
var iconDefinition235 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV237(Fragment235, {
    children: /* @__PURE__ */ jsxDEV237("path", {
      d: "M5.88438 14.375L8.125 16.6156L7.24062 17.5L5 15.2594L5.88438 14.375ZM9.6875 13.75C9.16875 13.75 8.75 14.1687 8.75 14.6875C8.75 15.2063 9.16875 15.625 9.6875 15.625C10.2063 15.625 10.625 15.2063 10.625 14.6875C10.625 14.1687 10.2063 13.75 9.6875 13.75ZM5 10C5 9.1 5.35 8.75 6.25 8.75V7.5C4.57812 7.5 3.75 8.32813 3.75 10V10.625C3.75 11.525 3.4 11.875 2.5 11.875V13.125C4.17188 13.125 5 12.2969 5 10.625V10ZM6.25 11.875V13.125C8.52812 13.125 10 11.6531 10 9.375H8.75C8.75 10.9625 7.8375 11.875 6.25 11.875ZM7.11875 3.00625C4.9625 1.92812 2.95312 2.59687 1.875 4.75312L8.86875 8.25C9.94687 6.09375 9.27813 4.08437 7.12188 3.00625H7.11875ZM16.5625 7.5C16.0437 7.5 15.625 7.91875 15.625 8.4375C15.625 8.95625 16.0437 9.375 16.5625 9.375C17.0813 9.375 17.5 8.95625 17.5 8.4375C17.5 7.91875 17.0813 7.5 16.5625 7.5ZM15 13.75H14.375C12.7031 13.75 11.875 14.5781 11.875 16.25H13.125C13.125 15.35 13.475 15 14.375 15H15C16.6719 15 17.5 14.1719 17.5 12.5H16.25C16.25 13.4 15.9 13.75 15 13.75ZM14.1156 12.5L15 11.6156L12.7594 9.375L11.875 10.2594L14.1156 12.5ZM12.8781 3.00625C10.7219 4.08437 10.05 6.09375 11.1312 8.25L18.125 4.75312C17.0469 2.59687 15.0375 1.925 12.8813 3.00625H12.8781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var confettiBallIcon = createIcon("confettiBall", iconDefinition235);

// src/noticons/src/confettiPartyPopper/default.icon.tsx
import { jsxDEV as jsxDEV238, Fragment as Fragment236 } from "react/jsx-dev-runtime";
var iconDefinition236 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV238(Fragment236, {
    children: /* @__PURE__ */ jsxDEV238("path", {
      d: "M12.1344 7.1875L14.375 9.42813L13.4906 10.3125L11.25 8.07188L12.1344 7.1875ZM5.3125 6.5625L1.875 16.875L3.125 18.125L13.4375 14.6875L14.375 13.75L6.25 5.625L5.3125 6.5625ZM11.25 4.375V3.75C11.25 2.85 11.6 2.5 12.5 2.5V1.25C10.8281 1.25 10 2.07812 10 3.75V4.375C10 5.275 9.65 5.625 8.75 5.625V6.875C10.4219 6.875 11.25 6.04688 11.25 4.375ZM17.5 5C17.5 6.5875 16.5875 7.5 15 7.5V8.75C17.2781 8.75 18.75 7.27812 18.75 5H17.5ZM14.0625 3.75C13.5437 3.75 13.125 4.16875 13.125 4.6875C13.125 5.20625 13.5437 5.625 14.0625 5.625C14.5813 5.625 15 5.20625 15 4.6875C15 4.16875 14.5813 3.75 14.0625 3.75ZM16.5625 10.3125C16.0437 10.3125 15.625 10.7312 15.625 11.25C15.625 11.7688 16.0437 12.1875 16.5625 12.1875C17.0813 12.1875 17.5 11.7688 17.5 11.25C17.5 10.7312 17.0813 10.3125 16.5625 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var confettiPartyPopperIcon = createIcon("confettiPartyPopper", iconDefinition236);

// src/noticons/src/coniferTree/default.icon.tsx
import { jsxDEV as jsxDEV239, Fragment as Fragment237 } from "react/jsx-dev-runtime";
var iconDefinition237 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV239(Fragment237, {
    children: /* @__PURE__ */ jsxDEV239("path", {
      d: "M16.875 13.0344L13.7906 9.95001C14.4344 9.70626 15.0531 9.40001 15.625 9.01564L12.4875 5.87814C13.1531 5.67189 13.7937 5.38439 14.375 4.99689L10.625 1.24689H9.375L5.625 4.99689C6.1875 5.37189 6.82812 5.66564 7.51562 5.87501L4.375 9.01564C4.93438 9.38751 5.55312 9.70001 6.2125 9.94689L3.125 13.0344C4.70312 14.0906 6.68125 14.7406 8.75 14.9344V17.5H11.25V14.9375C13.2437 14.7594 15.2094 14.15 16.875 13.0344Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var coniferTreeIcon = createIcon("coniferTree", iconDefinition237);

// src/noticons/src/connectingFlight/default.icon.tsx
import { jsxDEV as jsxDEV240, Fragment as Fragment238 } from "react/jsx-dev-runtime";
var iconDefinition238 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV240(Fragment238, {
    children: /* @__PURE__ */ jsxDEV240("path", {
      d: "M17.5 6.25V7.5L14.375 6.71875V8.4375L15.625 9.0625V10L13.4375 9.45312L11.25 10V9.0625L12.5 8.4375V6.71875L9.375 7.5V6.25L12.5 4.6875V3.4375C12.5 2.37812 12.8594 1.875 13.4375 1.875C14.0156 1.875 14.375 2.37812 14.375 3.4375V4.6875L17.5 6.25ZM7.5 13.5938L10.625 14.375V13.125L7.5 11.5625V10.3125C7.5 9.25313 7.14062 8.75 6.5625 8.75C5.98438 8.75 5.625 9.25313 5.625 10.3125V11.5625L2.5 13.125V14.375L5.625 13.5938V15.3125L4.375 15.9375V16.875L6.5625 16.3281L8.75 16.875V15.9375L7.5 15.3125V13.5938ZM8.4375 4.375C8.95625 4.375 9.375 3.95625 9.375 3.4375C9.375 2.91875 8.95625 2.5 8.4375 2.5C7.91875 2.5 7.5 2.91875 7.5 3.4375C7.5 3.95625 7.91875 4.375 8.4375 4.375ZM3.4375 9.375C3.95625 9.375 4.375 8.95625 4.375 8.4375C4.375 7.91875 3.95625 7.5 3.4375 7.5C2.91875 7.5 2.5 7.91875 2.5 8.4375C2.5 8.95625 2.91875 9.375 3.4375 9.375ZM5.3125 6.25C5.83125 6.25 6.25 5.83125 6.25 5.3125C6.25 4.79375 5.83125 4.375 5.3125 4.375C4.79375 4.375 4.375 4.79375 4.375 5.3125C4.375 5.83125 4.79375 6.25 5.3125 6.25ZM11.5625 15.625C11.0437 15.625 10.625 16.0437 10.625 16.5625C10.625 17.0813 11.0437 17.5 11.5625 17.5C12.0813 17.5 12.5 17.0813 12.5 16.5625C12.5 16.0437 12.0813 15.625 11.5625 15.625ZM16.5625 10.625C16.0437 10.625 15.625 11.0437 15.625 11.5625C15.625 12.0813 16.0437 12.5 16.5625 12.5C17.0813 12.5 17.5 12.0813 17.5 11.5625C17.5 11.0437 17.0813 10.625 16.5625 10.625ZM14.6875 13.75C14.1687 13.75 13.75 14.1687 13.75 14.6875C13.75 15.2063 14.1687 15.625 14.6875 15.625C15.2063 15.625 15.625 15.2063 15.625 14.6875C15.625 14.1687 15.2063 13.75 14.6875 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var connectingFlightIcon = createIcon("connectingFlight", iconDefinition238);

// src/noticons/src/constructionCrane/default.icon.tsx
import { jsxDEV as jsxDEV241, Fragment as Fragment239 } from "react/jsx-dev-runtime";
var iconDefinition239 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV241(Fragment239, {
    children: /* @__PURE__ */ jsxDEV241("path", {
      d: "M18.75 6.875V5H8.125V3.75L7.5 1.25H6.25L5.625 3.75V5H1.25V6.875H2.5V8.75H4.375V6.875H5.625V14.375L3.75 15.625V17.5H10V15.625L8.125 14.375V6.875H16.25V10L15 11.25V12.5H18.75V11.25L17.5 10V6.875H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var constructionCraneIcon = createIcon("constructionCrane", iconDefinition239);

// src/noticons/src/contrast/default.icon.tsx
import { jsxDEV as jsxDEV242, Fragment as Fragment240 } from "react/jsx-dev-runtime";
var iconDefinition240 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV242(Fragment240, {
    children: /* @__PURE__ */ jsxDEV242("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.9781 13.9781L6.02188 6.02188C7.11875 4.925 8.55937 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.4406 15.075 12.8781 13.9781 13.9781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var contrastIcon = createIcon("contrast", iconDefinition240);

// src/noticons/src/conversation/default.icon.tsx
import { jsxDEV as jsxDEV243, Fragment as Fragment241 } from "react/jsx-dev-runtime";
var iconDefinition241 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV243(Fragment241, {
    children: /* @__PURE__ */ jsxDEV243("path", {
      d: "M7.5 11.4062C7.5 11.8094 7.53438 12.1906 7.59063 12.5625C6.99375 12.725 6.3375 12.8125 5.625 12.8125C4.98438 12.8125 4.39062 12.7437 3.84688 12.6156C2.90625 13.325 1.7375 13.75 0.46875 13.75L0 13.0469L1.57188 11.475C0.5625 10.5813 0 9.275 0 7.65625C0 4.475 2.15313 2.5 5.625 2.5C8.31563 2.5 10.2094 3.69062 10.925 5.70312C8.77187 6.70625 7.5 8.73125 7.5 11.4062ZM20 11.4062C20 8.225 17.8469 6.25 14.375 6.25C10.9031 6.25 8.75 8.225 8.75 11.4062C8.75 14.5875 10.9031 16.5625 14.375 16.5625C15.0156 16.5625 15.6094 16.4937 16.1531 16.3656C17.0938 17.075 18.2625 17.5 19.5312 17.5L20 16.7969L18.4281 15.225C19.4375 14.3313 20 13.025 20 11.4062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var conversationIcon = createIcon("conversation", iconDefinition241);

// src/noticons/src/copy/default.icon.tsx
import { jsxDEV as jsxDEV244, Fragment as Fragment242 } from "react/jsx-dev-runtime";
var iconDefinition242 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV244(Fragment242, {
    children: /* @__PURE__ */ jsxDEV244("path", {
      d: "M12.5 7.5H17.5V13.125H8.75V2.5H12.5V7.5ZM7.5 6.875H2.5V17.5H11.25V14.375H7.5V6.875ZM15 2.5H13.75V6.25H17.5V5L15 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var copyIcon = createIcon("copy", iconDefinition242);

// src/noticons/src/corn/default.icon.tsx
import { jsxDEV as jsxDEV245, Fragment as Fragment243 } from "react/jsx-dev-runtime";
var iconDefinition243 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV245(Fragment243, {
    children: /* @__PURE__ */ jsxDEV245("path", {
      d: "M16.25 7.5C16.25 12.5 13.125 14.375 13.125 14.375L10.625 19.375H9.375L6.875 14.375C6.875 14.375 3.75 12.5 3.75 7.5H5L10 13.75L15 7.5H16.25ZM10 11.775L7.1875 8.26875V7.8125C7.1875 3.4375 9.375 0.625 9.375 0.625H10.625C10.625 0.625 12.8125 3.4375 12.8125 7.8125V8.26875L10 11.775ZM10.3125 8.125H11.5625V6.875H10.3125V8.125ZM9.6875 5H8.4375V6.25H9.6875V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cornIcon = createIcon("corn", iconDefinition243);

// src/noticons/src/couch/default.icon.tsx
import { jsxDEV as jsxDEV246, Fragment as Fragment244 } from "react/jsx-dev-runtime";
var iconDefinition244 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV246(Fragment244, {
    children: /* @__PURE__ */ jsxDEV246("path", {
      d: "M19.375 14.375H17.5V16.25H15.625V14.375H4.375V16.25H2.5V14.375H0.625V6.875H2.5V10.625H17.5V6.875H19.375V14.375ZM9.375 3.75H3.75V9.375H9.375V3.75ZM16.25 3.75H10.625V9.375H16.25V3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var couchIcon = createIcon("couch", iconDefinition244);

// src/noticons/src/cow/default.icon.tsx
import { jsxDEV as jsxDEV247, Fragment as Fragment245 } from "react/jsx-dev-runtime";
var iconDefinition245 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV247(Fragment245, {
    children: /* @__PURE__ */ jsxDEV247("path", {
      d: "M19.375 7.8125L18.9062 8.75H15.9375L14.7219 11.1844C14.4844 11.6562 14.1312 11.875 13.6031 11.875H13.4375V15.625L14.0625 16.875H11.875L11.25 15.625V11.875H10.625L9.51875 12.2437C8.95 12.4344 8.5375 12.5 7.9375 12.5H6.5625L5.78125 14.0625L7.1875 16.875H5L3.75 14.375V10L2.5 8.75V12.5H1.25V7.5C1.25 5.95625 2.20625 5 3.75 5H14.375L15 4.375V3.125H15.9375C16.3219 3.125 16.5625 3.36562 16.5625 3.75V4.375H16.8844C17.4125 4.375 17.7656 4.59375 18.0031 5.06562L19.375 7.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cowIcon = createIcon("cow", iconDefinition245);

// src/noticons/src/crab/default.icon.tsx
import { jsxDEV as jsxDEV248, Fragment as Fragment246 } from "react/jsx-dev-runtime";
var iconDefinition246 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV248(Fragment246, {
    children: /* @__PURE__ */ jsxDEV248("path", {
      d: "M15.3125 11.25H16.9812C17.5187 11.25 17.9281 11.0813 18.3062 10.7L19.3719 9.63438L18.4875 8.75L17.4219 9.81563C17.275 9.9625 17.1844 10 16.9781 10H15.9344L17.2187 7.43438C17.4031 7.06563 17.4969 6.6625 17.4969 6.25C17.4969 3.75 14.6156 1.875 12.8094 1.875C11.1656 1.875 10.6219 2.8125 10.6219 2.8125L12.0281 3.51562L11.5594 4.45312L15.6 6.475L14.6687 8.33437C14.0375 6.94688 12.4781 6.25 9.99373 6.25C7.50935 6.25 5.9531 6.94688 5.31873 8.33437L4.38748 6.475L8.4281 4.45312L7.95935 3.51562L9.3656 2.8125C9.3656 2.8125 8.82185 1.875 7.1781 1.875C5.37185 1.875 2.4906 3.75 2.4906 6.25C2.4906 6.6625 2.58748 7.06563 2.76873 7.43438L4.0531 10H3.00935C2.8031 10 2.71248 9.9625 2.5656 9.81563L1.49998 8.75L0.615601 9.63438L1.68123 10.7C2.06248 11.0813 2.46873 11.25 3.00623 11.25H4.67498L5.01248 11.925C5.1156 12.1281 5.22185 12.3188 5.33435 12.5H4.25623C3.71873 12.5 3.30935 12.6687 2.93123 13.05L1.8656 14.1156L2.74998 15L3.8156 13.9344C3.96248 13.7875 4.0531 13.75 4.25935 13.75H6.3531C6.55623 13.9312 6.76873 14.0969 6.99373 14.2375L6.0281 14.7219C5.3406 15.0656 4.9906 15.6312 4.9906 16.4V17.5031H6.2406V16.4C6.2406 16.1062 6.32498 15.9719 6.58748 15.8406L8.5531 14.8563C8.99685 14.95 9.47498 15 9.9906 15C10.5062 15 10.9844 14.95 11.4281 14.8563L13.3937 15.8406C13.6562 15.9719 13.7406 16.1062 13.7406 16.4V17.5031H14.9906V16.4C14.9906 15.6312 14.6406 15.0656 13.9531 14.7219L12.9875 14.2375C13.2125 14.0969 13.425 13.9312 13.6281 13.75H15.7219C15.9281 13.75 16.0187 13.7875 16.1656 13.9344L17.2312 15L18.1156 14.1156L17.05 13.05C16.6687 12.6687 16.2625 12.5 15.725 12.5H14.6468C14.7593 12.3188 14.8656 12.1281 14.9687 11.925L15.3062 11.25H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var crabIcon = createIcon("crab", iconDefinition246);

// src/noticons/src/crayon/default.icon.tsx
import { jsxDEV as jsxDEV249, Fragment as Fragment247 } from "react/jsx-dev-runtime";
var iconDefinition247 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV249(Fragment247, {
    children: /* @__PURE__ */ jsxDEV249("path", {
      d: "M17.5 6.03437L15.8844 7.65L12.35 4.11563L13.9656 2.5L17.5 6.03437ZM3.75 12.7156L4.1375 13.1031L2.5 17.0594L2.94062 17.5L6.89687 15.8625L7.28437 16.25L8.9 14.6344L5.36562 11.1L3.75 12.7156ZM6.25 10.2156L9.78437 13.75L15 8.53437L11.4656 5L6.25 10.2156Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var crayonIcon = createIcon("crayon", iconDefinition247);

// src/noticons/src/create/default.icon.tsx
import { jsxDEV as jsxDEV250, Fragment as Fragment248 } from "react/jsx-dev-runtime";
var iconDefinition248 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV250(Fragment248, {
    children: /* @__PURE__ */ jsxDEV250("path", {
      d: "M18.125 2.75937L16.8062 4.7875C15.9562 6.09375 15.2812 6.92813 14.1781 8.03125L12.6281 9.58125L10.4187 7.37187L11.9688 5.82187C13.0719 4.71875 13.9031 4.04375 15.2125 3.19375L17.2406 1.875L18.125 2.75937ZM6.875 11.1312V11.25L5.625 11.875V13.125H8.86875C9.92812 13.125 10.6313 12.6906 11.1063 11.7438L11.7469 10.4656L9.5375 8.25625L8.25938 8.89687C7.3125 9.36875 6.87813 10.075 6.87813 11.1344L6.875 11.1312ZM14.375 15.625H4.375V5.625H9.375V3.75H2.5V17.5H16.25V10.625H14.375V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var createIcon2 = createIcon2("create", iconDefinition248);

// src/noticons/src/creditCard/default.icon.tsx
import { jsxDEV as jsxDEV251, Fragment as Fragment249 } from "react/jsx-dev-runtime";
var iconDefinition249 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV251(Fragment249, {
    children: /* @__PURE__ */ jsxDEV251("path", {
      d: "M15 4.375H5C3.45625 4.375 2.5 5.33125 2.5 6.875V13.125C2.5 14.6687 3.45625 15.625 5 15.625H15C16.5437 15.625 17.5 14.6687 17.5 13.125V6.875C17.5 5.33125 16.5437 4.375 15 4.375ZM4.375 7.5H7.5V9.375H4.375V7.5ZM6.25 12.5H4.375V11.25H6.25V12.5ZM9.375 12.5H7.5V11.25H9.375V12.5ZM12.5 12.5H10.625V11.25H12.5V12.5ZM15.625 12.5H13.75V11.25H15.625V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var creditCardIcon = createIcon("creditCard", iconDefinition249);

// src/noticons/src/crop/default.icon.tsx
import { jsxDEV as jsxDEV252, Fragment as Fragment250 } from "react/jsx-dev-runtime";
var iconDefinition250 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV252(Fragment250, {
    children: /* @__PURE__ */ jsxDEV252("path", {
      d: "M18.125 12.5V15.625H15.625V18.125H12.5V15.625H4.375V7.5H1.875V4.375H4.375V1.875H7.5V12.5H18.125ZM12.5 11.25H15.625V4.375H8.75V7.5H12.5V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cropIcon = createIcon("crop", iconDefinition250);

// src/noticons/src/crutch/default.icon.tsx
import { jsxDEV as jsxDEV253, Fragment as Fragment251 } from "react/jsx-dev-runtime";
var iconDefinition251 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV253(Fragment251, {
    children: /* @__PURE__ */ jsxDEV253("path", {
      d: "M15.4406 4.55938C14.1562 3.275 13.75 2.82187 13.75 1.875H12.5C12.5 2.4875 12.6313 2.98125 12.8687 3.43437L7.16563 9.1375C6.575 9.72813 6.25 10.5125 6.25 11.3469V12.4219L3.9875 14.6844H3.64375C3.3125 14.6844 2.99375 14.8156 2.75937 15.05L2.1875 15.6219L4.375 17.8094L4.94688 17.2375C5.18125 17.0031 5.3125 16.6844 5.3125 16.3531V16.0094L7.575 13.7469H8.65C9.48438 13.7469 10.2688 13.4219 10.8594 12.8313L16.5625 7.12812C17.0156 7.36562 17.5094 7.49687 18.1219 7.49687V6.24687C17.175 6.24687 16.725 5.84063 15.4375 4.55625L15.4406 4.55938ZM9.975 11.9531C9.62187 12.3062 9.15 12.5031 8.65 12.5031H7.49687V11.35C7.49687 10.85 7.69063 10.3781 8.04688 10.025L8.90312 9.16875L10.8313 11.0969L9.975 11.9531ZM11.7156 10.2125L9.7875 8.28438L13.6094 4.4625C13.8812 4.76875 14.2 5.0875 14.5563 5.44375C14.9156 5.80312 15.2313 6.11875 15.5375 6.39062L11.7156 10.2125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var crutchIcon = createIcon("crutch", iconDefinition251);

// src/noticons/src/cupcake/default.icon.tsx
import { jsxDEV as jsxDEV254, Fragment as Fragment252 } from "react/jsx-dev-runtime";
var iconDefinition252 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV254(Fragment252, {
    children: /* @__PURE__ */ jsxDEV254("path", {
      d: "M15 8.125C15 7.35313 14.5219 6.875 13.75 6.875H13.4375V5.9375C13.4375 5.16563 12.9594 4.6875 12.1875 4.6875H11.875V3.75C11.875 2.20625 10.9187 1.25 9.375 1.25H9.0625V3.07187L7.79688 3.70625C7.16563 4.02187 6.875 4.49062 6.875 5.19687V6.35313L5.92188 6.83125C5.29063 7.14688 5 7.61562 5 8.32187V10H15V8.125ZM9.375 7.5H8.125V5H9.375V7.5ZM10.8844 9.0625L10 8.17812L11.6156 6.5625L12.5 7.44688L10.8844 9.0625ZM16.25 11.25L14.6875 17.5H5.3125L3.75 11.25H5.625L6.875 12.5L8.125 11.25H8.75L10 12.5L11.25 11.25H11.875L13.125 12.5L14.375 11.25H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cupcakeIcon = createIcon("cupcake", iconDefinition252);

// src/noticons/src/currency/default.icon.tsx
import { jsxDEV as jsxDEV255, Fragment as Fragment253 } from "react/jsx-dev-runtime";
var iconDefinition253 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV255(Fragment253, {
    children: /* @__PURE__ */ jsxDEV255("path", {
      d: "M4.375 12.5H7.5V14.375H0V3.125H16.25V5H4.375C4.375 6.54375 3.41875 7.5 1.875 7.5V10C3.41875 10 4.375 10.9563 4.375 12.5ZM20 11.875C20 14.9812 17.4813 17.5 14.375 17.5C11.2688 17.5 8.75 14.9812 8.75 11.875C8.75 8.76875 11.2688 6.25 14.375 6.25C17.4813 6.25 20 8.76875 20 11.875ZM15.9375 13.5938V12.5H16.5625C17.1406 12.5 17.5 12.1406 17.5 11.5625C17.5 10.9844 17.1406 10.625 16.5625 10.625C16.5625 10.625 16.5594 10.625 16.5562 10.625C16.5562 10.5719 16.5625 10.5219 16.5625 10.4688C16.5625 9.02187 15.6656 8.125 14.2188 8.125C12.875 8.125 12.0062 8.9 11.8906 10.1688L11.0312 11.0281C10.9594 11.1 10.9281 11.2 10.9438 11.3C10.9594 11.4 11.0219 11.4844 11.1125 11.5281L11.8281 11.8844L11.9656 12.7125C12.0094 12.9719 12.1781 13.1219 12.4094 13.1219C12.4563 13.1219 12.5062 13.1156 12.5594 13.1031L13.4406 12.8844V14.0625L12.7094 14.4281C12.3531 14.6062 12.1906 14.8687 12.1906 15.2656V15.6594C12.8344 16.0312 13.5812 16.25 14.3781 16.25C15.55 16.25 16.6125 15.7875 17.3969 15.0375C17.1812 14.4469 16.6531 13.95 15.9406 13.5938H15.9375ZM8.125 6.25C6.775 6.25 5.9375 7.20625 5.9375 8.75C5.9375 10.0531 6.5375 10.9344 7.53438 11.1781C7.70625 9.48125 8.49375 7.96875 9.66875 6.8625C9.29375 6.46875 8.76875 6.24687 8.125 6.24687V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var currencyIcon = createIcon("currency", iconDefinition253);

// src/noticons/src/currencyCoin/default.icon.tsx
import { jsxDEV as jsxDEV256, Fragment as Fragment254 } from "react/jsx-dev-runtime";
var iconDefinition254 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV256(Fragment254, {
    children: /* @__PURE__ */ jsxDEV256("path", {
      d: "M2.81563 6.5625L2.55313 7.36875L4.4125 8.72188L3.70312 10.9094L4.39062 11.4094L6.25 10.0563L6.99687 10.5969C6.91875 11.0094 6.875 11.4375 6.875 11.875C6.875 12.5 6.95938 13.1031 7.11563 13.6781C6.83438 13.7219 6.54688 13.75 6.25 13.75C3.14375 13.75 0.625 11.2312 0.625 8.125C0.625 5.01875 3.14375 2.5 6.25 2.5C8.40312 2.5 10.2688 3.70937 11.2156 5.48437C10.5469 5.75 9.93125 6.1125 9.3875 6.5625H7.3875L6.67813 4.375H5.82812L5.11875 6.5625H2.81875H2.81563ZM19.375 11.875C19.375 14.9812 16.8563 17.5 13.75 17.5C10.6438 17.5 8.125 14.9812 8.125 11.875C8.125 8.76875 10.6438 6.25 13.75 6.25C16.8563 6.25 19.375 8.76875 19.375 11.875ZM15.3125 13.5938V12.5H15.9375C16.5156 12.5 16.875 12.1406 16.875 11.5625C16.875 10.9844 16.5156 10.625 15.9375 10.625C15.9375 10.625 15.9344 10.625 15.9312 10.625C15.9312 10.5719 15.9375 10.5219 15.9375 10.4688C15.9375 9.02187 15.0406 8.125 13.5938 8.125C12.25 8.125 11.3812 8.9 11.2656 10.1688L10.4062 11.0281C10.3344 11.1 10.3031 11.2 10.3188 11.3C10.3344 11.4 10.3969 11.4844 10.4875 11.5281L11.2031 11.8844L11.3406 12.7125C11.3844 12.9719 11.5531 13.1219 11.7844 13.1219C11.8313 13.1219 11.8812 13.1156 11.9344 13.1031L12.8156 12.8844V14.0625L12.0844 14.4281C11.7281 14.6062 11.5656 14.8687 11.5656 15.2656V15.6594C12.2094 16.0312 12.9562 16.25 13.7531 16.25C14.925 16.25 15.9875 15.7875 16.7719 15.0375C16.5562 14.4469 16.0281 13.95 15.3156 13.5938H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var currencyCoinIcon = createIcon("currencyCoin", iconDefinition254);

// src/noticons/src/cursor/default.icon.tsx
import { jsxDEV as jsxDEV257, Fragment as Fragment255 } from "react/jsx-dev-runtime";
var iconDefinition255 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV257(Fragment255, {
    children: /* @__PURE__ */ jsxDEV257("path", {
      d: "M15 11.25H11.6656L13.8594 16.5437L11.55 17.5L9.35625 12.2063L7 14.5625L6.25 13.8125V2.94062L7.30937 2.5L15 10.1906V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cursorIcon = createIcon("cursor", iconDefinition255);

// src/noticons/src/cursorButton/default.icon.tsx
import { jsxDEV as jsxDEV258, Fragment as Fragment256 } from "react/jsx-dev-runtime";
var iconDefinition256 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV258(Fragment256, {
    children: /* @__PURE__ */ jsxDEV258("path", {
      d: "M18.125 6.25001V8.75001C18.125 10.2938 17.1687 11.25 15.625 11.25H15.2437L10.9563 6.96251L8.75 7.87501V11.2469H4.375C2.83125 11.2469 1.875 10.2906 1.875 8.74689V6.24689C1.875 4.70314 2.83125 3.74689 4.375 3.74689H15.625C17.1687 3.74689 18.125 4.70314 18.125 6.24689V6.25001ZM10 8.71251V15.7313L10.4406 16.1719L11.9906 14.6219L13.3125 17.8125L14.7563 17.2156L13.4344 14.025H15.625V13.4L10.6625 8.43751L10 8.71251Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cursorButtonIcon = createIcon("cursorButton", iconDefinition256);

// src/noticons/src/cursorClick/default.icon.tsx
import { jsxDEV as jsxDEV259, Fragment as Fragment257 } from "react/jsx-dev-runtime";
var iconDefinition257 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV259(Fragment257, {
    children: /* @__PURE__ */ jsxDEV259("path", {
      d: "M6.25 10.625H1.875V9.375H6.25V10.625ZM10.625 1.875H9.375V6.25H10.625V1.875ZM16.1875 4.69687L15.3031 3.8125L12.2094 6.90625L13.0938 7.79063L16.1875 4.69687ZM3.8125 15.3031L4.69687 16.1875L7.79063 13.0938L6.90625 12.2094L3.8125 15.3031ZM13.75 9.375V10.625H18.125V9.375H13.75ZM9.375 9.3375V16.3562L9.81563 16.7969L11.3656 15.2469L12.6875 18.4375L14.1313 17.8406L12.8094 14.65H15V14.025L10.0375 9.0625L9.375 9.3375ZM3.8125 4.69687L6.90625 7.79063L7.79063 6.90625L4.69687 3.8125L3.8125 4.69687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cursorClickIcon = createIcon("cursorClick", iconDefinition257);

// src/noticons/src/customs/default.icon.tsx
import { jsxDEV as jsxDEV260, Fragment as Fragment258 } from "react/jsx-dev-runtime";
var iconDefinition258 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV260(Fragment258, {
    children: /* @__PURE__ */ jsxDEV260("path", {
      d: "M11.875 5H10V3.75H11.875V1.875H16.875V5C16.875 6.54375 15.9187 7.5 14.375 7.5C12.8313 7.5 11.875 6.54375 11.875 5ZM11.25 11.1594V13.75H12.5L15 8.75H11.5156C10.7219 8.75 10.1937 9.07812 9.8375 9.7875L8.79375 11.875H6.24687V13.75H9.95L11.2469 11.1594H11.25ZM11.25 17.5H17.5V15H11.25V17.5ZM3.75 13.3094V8.75H1.875V15H3.75V17.5H10V15H5.44062L3.75 13.3094ZM16.25 8.75L13.75 13.75H17.5V10C17.5 9.22813 17.0219 8.75 16.25 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var customsIcon = createIcon("customs", iconDefinition258);

// src/noticons/src/cut/default.icon.tsx
import { jsxDEV as jsxDEV261, Fragment as Fragment259 } from "react/jsx-dev-runtime";
var iconDefinition259 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV261(Fragment259, {
    children: /* @__PURE__ */ jsxDEV261("path", {
      d: "M11.6656 9.375L10.7 7.44375L13.1719 2.5H13.4375C14.4 2.5 15 3.09688 15 4.0625C15 4.33438 14.9563 4.51875 14.8344 4.7625L12.5281 9.375H11.6656ZM16.25 15.0188C16.25 16.3875 15.1375 17.5 13.7688 17.5C12.8219 17.5 11.9719 16.975 11.5469 16.1281L10 13.0344L8.45312 16.1281C8.03125 16.975 7.17813 17.5 6.23125 17.5C4.8625 17.5 3.75 16.3875 3.75 15.0188C3.75 12.6125 5.69687 10.6531 8.09688 10.6281L5.1625 4.7625C5.04063 4.51875 4.99687 4.33438 4.99687 4.0625C4.99687 3.1 5.59375 2.5 6.55937 2.5H6.825L10.8875 10.625H11.8531C14.275 10.625 16.2469 12.5969 16.2469 15.0188H16.25ZM8.17188 12.5H8.14375C6.75625 12.5 5.625 13.6281 5.625 15.0188C5.625 15.3531 5.89688 15.625 6.23125 15.625C6.4625 15.625 6.67188 15.4969 6.775 15.2875L8.16875 12.5H8.17188ZM14.375 15.0188C14.375 13.6313 13.2469 12.5 11.8562 12.5H11.8281L13.2219 15.2875C13.325 15.4937 13.5344 15.625 13.7656 15.625C14.1 15.625 14.3719 15.3531 14.3719 15.0188H14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var cutIcon = createIcon("cut", iconDefinition259);

// src/noticons/src/dairy/default.icon.tsx
import { jsxDEV as jsxDEV262, Fragment as Fragment260 } from "react/jsx-dev-runtime";
var iconDefinition260 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV262(Fragment260, {
    children: /* @__PURE__ */ jsxDEV262("path", {
      d: "M10.9375 3.125V1.25H9.0625V3.125L5.3125 5V17.5H14.6875V5L10.9375 3.125ZM12.8125 8.125H7.1875V6.15937L10 4.75312L12.8125 6.15937V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dairyIcon = createIcon("dairy", iconDefinition260);

// src/noticons/src/daisy/default.icon.tsx
import { jsxDEV as jsxDEV263, Fragment as Fragment261 } from "react/jsx-dev-runtime";
var iconDefinition261 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV263(Fragment261, {
    children: /* @__PURE__ */ jsxDEV263("path", {
      d: "M14.9312 12.5C13.075 12.5 11.5656 13.5625 10.9375 15.1406V11.5531C11.2719 11.7438 11.6469 11.8406 12.025 11.8406C13.6156 11.8406 14.2094 10.425 14.2094 9.65312C14.2094 9.48438 14.2031 8.64062 13.4375 7.99062C14.7156 7.89062 15.4562 6.81563 15.4562 5.8125C15.4562 5.5875 15.4219 5.35938 15.35 5.1375C15.05 4.2125 14.1906 3.625 13.2687 3.625C12.7219 3.625 12.3312 3.825 12.125 3.95C12.1656 3.78438 12.1875 3.6125 12.1875 3.4375C12.1875 2.22813 11.2094 1.25 10 1.25C8.79063 1.25 7.8125 2.22813 7.8125 3.4375C7.8125 3.61562 7.83438 3.7875 7.875 3.95C7.66875 3.82188 7.275 3.625 6.73125 3.625C5.80938 3.625 4.95313 4.2125 4.65 5.1375C4.57813 5.3625 4.54375 5.59063 4.54375 5.8125C4.54375 6.81875 5.29375 7.89062 6.5625 7.99062C5.8 8.64062 5.79063 9.48438 5.79063 9.65312C5.79063 10.4125 6.38125 11.8406 7.975 11.8406C8.35313 11.8406 8.73125 11.7438 9.0625 11.5531V15.1406C8.4375 13.5625 6.925 12.5 5.06875 12.5L4.375 13.1938L8.68125 17.5H11.3219L15.6281 13.1938L14.9344 12.5H14.9312ZM10 8.125C9.30937 8.125 8.75 7.56563 8.75 6.875C8.75 6.18437 9.30937 5.625 10 5.625C10.6906 5.625 11.25 6.18437 11.25 6.875C11.25 7.56563 10.6906 8.125 10 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var daisyIcon = createIcon("daisy", iconDefinition261);

// src/noticons/src/dance/default.icon.tsx
import { jsxDEV as jsxDEV264, Fragment as Fragment262 } from "react/jsx-dev-runtime";
var iconDefinition262 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV264(Fragment262, {
    children: /* @__PURE__ */ jsxDEV264("path", {
      d: "M3.25 15.5L5 15.9375V16.5625L3.25 17L2.8125 18.75H2.1875L1.75 17L0 16.5625V15.9375L1.75 15.5L2.1875 13.75H2.8125L3.25 15.5ZM16.25 10.625C16.25 14.0781 13.4531 16.875 10 16.875C6.54688 16.875 3.75 14.0781 3.75 10.625C3.75 7.82812 5.59063 5.45937 8.125 4.6625V3.75H9.375V2.5H10.625V3.75H11.875V4.6625C14.4094 5.45937 16.25 7.82812 16.25 10.625ZM10 5.625C9.42188 5.625 8.91875 6.63125 8.64688 8.125H11.35C11.0813 6.63125 10.575 5.625 9.99687 5.625H10ZM7.9375 15.175C7.67812 14.5844 7.49375 13.8813 7.375 13.125H5.675C6.19688 14.025 6.9875 14.7438 7.9375 15.175ZM7.94063 6.07188C6.9875 6.50313 6.19375 7.225 5.67188 8.125H7.37813C7.45938 7.61562 7.56875 7.14062 7.7 6.71562C7.775 6.47813 7.85625 6.26562 7.94063 6.07188ZM11.35 13.125H8.64688C8.91562 14.6187 9.42188 15.625 10 15.625C10.5781 15.625 11.0813 14.6187 11.3531 13.125H11.35ZM11.5594 10.625C11.5594 10.1938 11.5406 9.775 11.5094 9.375H8.4875C8.45625 9.775 8.4375 10.1938 8.4375 10.625C8.4375 11.0562 8.45625 11.475 8.4875 11.875H11.5094C11.5406 11.475 11.5594 11.0562 11.5594 10.625ZM12.625 8.125H14.325C13.8031 7.225 13.0125 6.50625 12.0625 6.075C12.3219 6.66563 12.5063 7.36875 12.625 8.125ZM14.8344 9.375H12.7656C12.7937 9.79062 12.8094 10.2094 12.8094 10.625C12.8094 11.0406 12.7906 11.4688 12.7625 11.875H14.8344C14.9375 11.475 14.9969 11.0562 14.9969 10.625C14.9969 10.1938 14.9375 9.775 14.8344 9.375ZM19.9969 3.4375L17.7469 2.875L17.1844 0.625H16.5594L15.9969 2.875L13.7469 3.4375V4.0625L15.9969 4.625L16.5594 6.875H17.1844L17.7469 4.625L19.9969 4.0625V3.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var danceIcon = createIcon("dance", iconDefinition262);

// src/noticons/src/darks/default.icon.tsx
import { jsxDEV as jsxDEV265, Fragment as Fragment263 } from "react/jsx-dev-runtime";
var iconDefinition263 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV265(Fragment263, {
    children: /* @__PURE__ */ jsxDEV265("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM6.02188 6.02188C6.96875 5.075 8.16875 4.54062 9.40312 4.40937L6.90625 6.90625L6.02188 6.02188ZM7.79063 7.79063L11.0969 4.48438C11.55 4.575 11.9938 4.725 12.4188 4.92813L8.67188 8.675L7.7875 7.79063H7.79063ZM9.55937 9.55937L13.5094 5.60938C13.8562 5.8875 14.1156 6.14688 14.3938 6.49375L10.4406 10.4437L9.55625 9.55937H9.55937ZM11.3281 11.3281L15.075 7.58125C15.2781 8.00625 15.4281 8.45 15.5188 8.90312L12.2125 12.2094L11.3281 11.325V11.3281ZM13.9813 13.9813L13.0969 13.0969L15.5938 10.6C15.4625 11.8344 14.9281 13.0344 13.9813 13.9813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var darksIcon = createIcon("darks", iconDefinition263);

// src/noticons/src/dashboard/default.icon.tsx
import { jsxDEV as jsxDEV266, Fragment as Fragment264 } from "react/jsx-dev-runtime";
var iconDefinition264 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV266(Fragment264, {
    children: /* @__PURE__ */ jsxDEV266("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM13.125 13.75H6.875V11.875H13.125V13.75ZM11.1281 10L8.36875 5.85938L6.80938 6.9L8.875 10H4.37813C4.37813 6.89375 6.89687 4.375 10.0031 4.375C13.1094 4.375 15.6281 6.89375 15.6281 10H11.1312H11.1281Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dashboardIcon = createIcon("dashboard", iconDefinition264);

// src/noticons/src/database/default.icon.tsx
import { jsxDEV as jsxDEV267, Fragment as Fragment265 } from "react/jsx-dev-runtime";
var iconDefinition265 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV267(Fragment265, {
    children: /* @__PURE__ */ jsxDEV267("path", {
      d: "M16.25 5V6.25C16.25 7.63125 13.4531 8.75 10 8.75C6.54688 8.75 3.75 7.63125 3.75 6.25V5C3.75 3.61875 6.54688 2.5 10 2.5C13.4531 2.5 16.25 3.61875 16.25 5ZM10 14.375C7.21563 14.375 5.25625 13.8062 4.0375 12.9969C3.85 13.2344 3.75 13.4875 3.75 13.75V15C3.75 16.3813 6.54688 17.5 10 17.5C13.4531 17.5 16.25 16.3813 16.25 15V13.75C16.25 13.4875 16.1469 13.2344 15.9625 12.9969C14.7438 13.8031 12.7844 14.375 10 14.375ZM10 10C7.21563 10 5.25625 9.43125 4.0375 8.62187C3.85 8.85938 3.75 9.1125 3.75 9.375V10.625C3.75 12.0063 6.54688 13.125 10 13.125C13.4531 13.125 16.25 12.0063 16.25 10.625V9.375C16.25 9.1125 16.1469 8.85938 15.9625 8.62187C14.7438 9.42812 12.7844 10 10 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var databaseIcon = createIcon("database", iconDefinition265);

// src/noticons/src/defibrillator/default.icon.tsx
import { jsxDEV as jsxDEV268, Fragment as Fragment266 } from "react/jsx-dev-runtime";
var iconDefinition266 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV268(Fragment266, {
    children: /* @__PURE__ */ jsxDEV268("path", {
      d: "M13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 11.8594 7.07812 15.4719 10 17.5C12.9219 15.4719 17.5 11.8594 17.5 7.5C17.5 4.83125 15.6812 3.125 13.4375 3.125ZM13.125 10.625L10.625 14.375H9.375V11.25H6.875V10.625L9.375 6.875H10.625V10H13.125V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var defibrillatorIcon = createIcon("defibrillator", iconDefinition266);

// src/noticons/src/delete/default.icon.tsx
import { jsxDEV as jsxDEV269, Fragment as Fragment267 } from "react/jsx-dev-runtime";
var iconDefinition267 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV269(Fragment267, {
    children: /* @__PURE__ */ jsxDEV269("path", {
      d: "M13.75 5V3.75C13.75 2.20625 12.7937 1.25 11.25 1.25H8.75C7.20625 1.25 6.25 2.20625 6.25 3.75V5H1.875V6.875H18.125V5H13.75ZM8.125 3.75C8.125 3.24063 8.24062 3.125 8.75 3.125H11.25C11.7594 3.125 11.875 3.24063 11.875 3.75V5H8.125V3.75ZM3.75 8.125H16.25L14.6875 17.5H5.3125L3.75 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var deleteIcon = createIcon("delete", iconDefinition267);

// src/noticons/src/deliveryTruck/default.icon.tsx
import { jsxDEV as jsxDEV270, Fragment as Fragment268 } from "react/jsx-dev-runtime";
var iconDefinition268 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV270(Fragment268, {
    children: /* @__PURE__ */ jsxDEV270("path", {
      d: "M15.625 6.25H11.875V4.375H1.875V14.375H3.75V15C3.75 16.0344 4.59063 16.875 5.625 16.875C6.65938 16.875 7.5 16.0344 7.5 15V14.375H12.5V15C12.5 16.0344 13.3406 16.875 14.375 16.875C15.4094 16.875 16.25 16.0344 16.25 15V14.375H18.125V11.25L15.625 6.25ZM11.875 10.625V8.125H14.4656L15.7156 10.625H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var deliveryTruckIcon = createIcon("deliveryTruck", iconDefinition268);

// src/noticons/src/dental/default.icon.tsx
import { jsxDEV as jsxDEV271, Fragment as Fragment269 } from "react/jsx-dev-runtime";
var iconDefinition269 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV271(Fragment269, {
    children: /* @__PURE__ */ jsxDEV271("path", {
      d: "M11.0563 14.6531C11.2 15.375 11.25 15.8781 11.25 16.6156V17.5H3.125V16.6156C3.125 15.8812 3.175 15.375 3.31875 14.6531L5 6.25H9.375L11.0563 14.6531ZM9.375 2.5H5V5H9.375V2.5ZM15 2.5V3.75H12.5V8.75H15V17.5H16.875V2.5H15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dentalIcon = createIcon("dental", iconDefinition269);

// src/noticons/src/departures/default.icon.tsx
import { jsxDEV as jsxDEV272, Fragment as Fragment270 } from "react/jsx-dev-runtime";
var iconDefinition270 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV272(Fragment270, {
    children: /* @__PURE__ */ jsxDEV272("path", {
      d: "M18.0563 8.72188L8.275 11.1688C7.85313 11.275 7.55 11.2781 7.125 11.1844L3.43125 10.3625C3.06875 10.2813 2.84688 10.125 2.64688 9.8125L1.33438 7.74688L1.18125 7.14063L1.89063 6.96251C2.25 6.87188 2.51875 6.91251 2.8375 7.10313L5.425 8.65626L8.45625 7.89688L5.425 6.07813L5.27188 5.47188L6.65938 5.12501C7.19375 4.99063 7.5875 5.00938 8.10625 5.19688L12.7 6.8375L14.4625 6.39688C15.3406 6.17813 15.9906 6.22813 16.8281 6.57813L18.1719 7.14376C18.9969 7.49063 18.9125 8.50625 18.05 8.71876L18.0563 8.72188ZM2.5 17.5H12.5V15.625H2.5V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var departuresIcon = createIcon("departures", iconDefinition270);

// src/noticons/src/dependency/default.icon.tsx
import { jsxDEV as jsxDEV273, Fragment as Fragment271 } from "react/jsx-dev-runtime";
var iconDefinition271 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV273(Fragment271, {
    children: /* @__PURE__ */ jsxDEV273("path", {
      d: "M7.8875 8.75L11.95 12.8125L7.8875 16.875L6.5625 15.55L8.3625 13.75H5.9375C3.28125 13.75 1.5625 12.0312 1.5625 9.375C1.5625 6.71875 3.28125 5 5.9375 5H8.75V6.875H5.9375C4.325 6.875 3.4375 7.7625 3.4375 9.375C3.4375 10.9875 4.325 11.875 5.9375 11.875H8.3625L6.5625 10.075L7.8875 8.75ZM15.625 3.125H10V8.75H15.625V3.125ZM12.5 10V15.625H18.125V10H12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dependencyIcon = createIcon("dependency", iconDefinition271);

// src/noticons/src/description/default.icon.tsx
import { jsxDEV as jsxDEV274, Fragment as Fragment272 } from "react/jsx-dev-runtime";
var iconDefinition272 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV274(Fragment272, {
    children: /* @__PURE__ */ jsxDEV274("path", {
      d: "M17.5 4.0625V5.9375H2.5V4.0625H17.5ZM2.5 10.9375H17.5V9.0625H2.5V10.9375ZM2.5 15.9375H10.375V14.0625H2.5V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var descriptionIcon = createIcon("description", iconDefinition272);

// src/noticons/src/dialogue/default.icon.tsx
import { jsxDEV as jsxDEV275, Fragment as Fragment273 } from "react/jsx-dev-runtime";
var iconDefinition273 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV275(Fragment273, {
    children: /* @__PURE__ */ jsxDEV275("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM11.25 14.0625H8.75V12.1875H11.25V14.0625ZM10.9375 10.9375H9.0625C9.0625 8.75 11.4062 8.80937 11.4062 7.65625C11.4062 6.9125 10.8719 6.5625 9.92188 6.5625C8.97188 6.5625 8.4375 6.9125 8.4375 7.8125H6.5625C6.5625 5.9 7.87813 4.6875 10 4.6875C12.1219 4.6875 13.4375 5.9 13.4375 7.65625C13.4375 9.84375 10.9375 9.78438 10.9375 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dialogueIcon = createIcon("dialogue", iconDefinition273);

// src/noticons/src/die1/default.icon.tsx
import { jsxDEV as jsxDEV276, Fragment as Fragment274 } from "react/jsx-dev-runtime";
var iconDefinition274 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV276(Fragment274, {
    children: /* @__PURE__ */ jsxDEV276("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die1Icon = createIcon("die1", iconDefinition274);

// src/noticons/src/die2/default.icon.tsx
import { jsxDEV as jsxDEV277, Fragment as Fragment275 } from "react/jsx-dev-runtime";
var iconDefinition275 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV277(Fragment275, {
    children: /* @__PURE__ */ jsxDEV277("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die2Icon = createIcon("die2", iconDefinition275);

// src/noticons/src/die3/default.icon.tsx
import { jsxDEV as jsxDEV278, Fragment as Fragment276 } from "react/jsx-dev-runtime";
var iconDefinition276 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV278(Fragment276, {
    children: /* @__PURE__ */ jsxDEV278("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die3Icon = createIcon("die3", iconDefinition276);

// src/noticons/src/die4/default.icon.tsx
import { jsxDEV as jsxDEV279, Fragment as Fragment277 } from "react/jsx-dev-runtime";
var iconDefinition277 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV279(Fragment277, {
    children: /* @__PURE__ */ jsxDEV279("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 15.625C5.075 15.625 4.375 14.925 4.375 14.0625C4.375 13.2 5.075 12.5 5.9375 12.5C6.8 12.5 7.5 13.2 7.5 14.0625C7.5 14.925 6.8 15.625 5.9375 15.625ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625ZM14.0625 7.5C13.2 7.5 12.5 6.8 12.5 5.9375C12.5 5.075 13.2 4.375 14.0625 4.375C14.925 4.375 15.625 5.075 15.625 5.9375C15.625 6.8 14.925 7.5 14.0625 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die4Icon = createIcon("die4", iconDefinition277);

// src/noticons/src/die5/default.icon.tsx
import { jsxDEV as jsxDEV280, Fragment as Fragment278 } from "react/jsx-dev-runtime";
var iconDefinition278 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV280(Fragment278, {
    children: /* @__PURE__ */ jsxDEV280("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 15.625C5.075 15.625 4.375 14.925 4.375 14.0625C4.375 13.2 5.075 12.5 5.9375 12.5C6.8 12.5 7.5 13.2 7.5 14.0625C7.5 14.925 6.8 15.625 5.9375 15.625ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625ZM14.0625 7.5C13.2 7.5 12.5 6.8 12.5 5.9375C12.5 5.075 13.2 4.375 14.0625 4.375C14.925 4.375 15.625 5.075 15.625 5.9375C15.625 6.8 14.925 7.5 14.0625 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die5Icon = createIcon("die5", iconDefinition278);

// src/noticons/src/die6/default.icon.tsx
import { jsxDEV as jsxDEV281, Fragment as Fragment279 } from "react/jsx-dev-runtime";
var iconDefinition279 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV281(Fragment279, {
    children: /* @__PURE__ */ jsxDEV281("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 15.625C5.075 15.625 4.375 14.925 4.375 14.0625C4.375 13.2 5.075 12.5 5.9375 12.5C6.8 12.5 7.5 13.2 7.5 14.0625C7.5 14.925 6.8 15.625 5.9375 15.625ZM5.9375 11.5625C5.075 11.5625 4.375 10.8625 4.375 10C4.375 9.1375 5.075 8.4375 5.9375 8.4375C6.8 8.4375 7.5 9.1375 7.5 10C7.5 10.8625 6.8 11.5625 5.9375 11.5625ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625ZM14.0625 11.5625C13.2 11.5625 12.5 10.8625 12.5 10C12.5 9.1375 13.2 8.4375 14.0625 8.4375C14.925 8.4375 15.625 9.1375 15.625 10C15.625 10.8625 14.925 11.5625 14.0625 11.5625ZM14.0625 7.5C13.2 7.5 12.5 6.8 12.5 5.9375C12.5 5.075 13.2 4.375 14.0625 4.375C14.925 4.375 15.625 5.075 15.625 5.9375C15.625 6.8 14.925 7.5 14.0625 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var die6Icon = createIcon("die6", iconDefinition279);

// src/noticons/src/dining/default.icon.tsx
import { jsxDEV as jsxDEV282, Fragment as Fragment280 } from "react/jsx-dev-runtime";
var iconDefinition280 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV282(Fragment280, {
    children: /* @__PURE__ */ jsxDEV282("path", {
      d: "M4.375 2.5H5.625V7.1875C5.625 8.58437 4.92812 9.55313 3.75 9.87813V17.5H1.875V9.87813C0.696875 9.55313 0 8.58437 0 7.1875V2.5H1.25V7.1875H2.1875V2.5H3.4375V7.1875H4.375V2.5ZM20 10C20 13.7969 16.9219 16.875 13.125 16.875C9.32812 16.875 6.25 13.7969 6.25 10C6.25 6.20312 9.32812 3.125 13.125 3.125C16.9219 3.125 20 6.20312 20 10ZM18.125 10C18.125 7.2375 15.8875 5 13.125 5C10.3625 5 8.125 7.2375 8.125 10C8.125 12.7625 10.3625 15 13.125 15C15.8875 15 18.125 12.7625 18.125 10ZM13.125 6.25C11.0531 6.25 9.375 7.92812 9.375 10C9.375 12.0719 11.0531 13.75 13.125 13.75C15.1969 13.75 16.875 12.0719 16.875 10C16.875 7.92812 15.1969 6.25 13.125 6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var diningIcon = createIcon("dining", iconDefinition280);

// src/noticons/src/directionalSign/default.icon.tsx
import { jsxDEV as jsxDEV283, Fragment as Fragment281 } from "react/jsx-dev-runtime";
var iconDefinition281 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV283(Fragment281, {
    children: /* @__PURE__ */ jsxDEV283("path", {
      d: "M10.9375 10H17.5V15H10.9375V17.5H9.0625V15H4.375L1.875 12.5L4.375 10H9.0625V8.75H3.125V3.75H9.0625V2.5H10.9375V3.75H16.25L18.75 6.25L16.25 8.75H10.9375V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var directionalSignIcon = createIcon("directionalSign", iconDefinition281);

// src/noticons/src/directionalSignLeft/default.icon.tsx
import { jsxDEV as jsxDEV284, Fragment as Fragment282 } from "react/jsx-dev-runtime";
var iconDefinition282 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV284(Fragment282, {
    children: /* @__PURE__ */ jsxDEV284("path", {
      d: "M16.25 12.5H10.9375V17.5H9.0625V12.5H4.375L0.625 8.75L4.375 5H9.0625V2.5H10.9375V5H16.25V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var directionalSignLeftIcon = createIcon("directionalSignLeft", iconDefinition282);

// src/noticons/src/directionalSignRight/default.icon.tsx
import { jsxDEV as jsxDEV285, Fragment as Fragment283 } from "react/jsx-dev-runtime";
var iconDefinition283 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV285(Fragment283, {
    children: /* @__PURE__ */ jsxDEV285("path", {
      d: "M15 12.5H10.9375V17.5H9.0625V12.5H3.125V5H9.0625V2.5H10.9375V5H15L18.75 8.75L15 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var directionalSignRightIcon = createIcon("directionalSignRight", iconDefinition283);

// src/noticons/src/directions/default.icon.tsx
import { jsxDEV as jsxDEV286, Fragment as Fragment284 } from "react/jsx-dev-runtime";
var iconDefinition284 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV286(Fragment284, {
    children: /* @__PURE__ */ jsxDEV286("path", {
      d: "M10.625 1.875H9.375L1.875 9.375V10.625L9.375 18.125H10.625L18.125 10.625V9.375L10.625 1.875ZM11.875 11.5625H11.25V9.6875H10C8.79063 9.6875 8.125 10.3531 8.125 11.5625V13.75H6.25V11.5625C6.25 9.31875 7.75625 7.8125 10 7.8125H11.25V5.9375H11.875L14.6875 8.75L11.875 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var directionsIcon = createIcon("directions", iconDefinition284);

// src/noticons/src/dishSoap/default.icon.tsx
import { jsxDEV as jsxDEV287, Fragment as Fragment285 } from "react/jsx-dev-runtime";
var iconDefinition285 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV287(Fragment285, {
    children: /* @__PURE__ */ jsxDEV287("path", {
      d: "M13.8625 12.8344C14.2438 13.975 14.375 14.7969 14.375 15.9969V17.5H5.625V15.9969C5.625 14.7969 5.75937 13.975 6.1375 12.8344L6.875 10.625L5.82812 8.53125C5.67812 8.23438 5.625 8.00625 5.625 7.67188C5.625 7.10312 5.78437 6.71563 6.1875 6.3125L8.4375 4.0625V1.875H11.5625V4.0625L13.8125 6.3125C14.2156 6.71563 14.375 7.10312 14.375 7.67188C14.375 8.00625 14.3219 8.23438 14.1719 8.53125L13.125 10.625L13.8625 12.8344Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dishSoapIcon = createIcon("dishSoap", iconDefinition285);

// src/noticons/src/dna/default.icon.tsx
import { jsxDEV as jsxDEV288, Fragment as Fragment286 } from "react/jsx-dev-runtime";
var iconDefinition286 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV288(Fragment286, {
    children: /* @__PURE__ */ jsxDEV288("path", {
      d: "M12.6031 9.21875L14.0625 8.125C15.3594 7.15312 15.9375 5.99688 15.9375 4.375V2.5H14.0625V3.75H5.9375V2.5H4.0625V4.375C4.0625 5.99688 4.64062 7.15312 5.9375 8.125L11.7719 12.5H8.23125L8.95937 11.9531L7.39687 10.7812L5.9375 11.875C4.64062 12.8469 4.0625 14.0031 4.0625 15.625V17.5H5.9375V16.25H14.0625V17.5H15.9375V15.625C15.9375 14.0031 15.3594 12.8469 14.0625 11.875L8.22813 7.5H11.7688L11.0406 8.04688L12.6031 9.21875ZM5.9875 5H14.0125C13.9281 5.49688 13.725 5.8875 13.3656 6.25H6.63125C6.27187 5.8875 6.06875 5.49688 5.98437 5H5.9875ZM14.0125 15H5.9875C6.07187 14.5031 6.275 14.1125 6.63437 13.75H13.3687C13.7281 14.1125 13.9312 14.5031 14.0156 15H14.0125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dnaIcon = createIcon("dna", iconDefinition286);

// src/noticons/src/doNotDisturb/default.icon.tsx
import { jsxDEV as jsxDEV289, Fragment as Fragment287 } from "react/jsx-dev-runtime";
var iconDefinition287 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV289(Fragment287, {
    children: /* @__PURE__ */ jsxDEV289("path", {
      d: "M5.3125 1.875V7.5H6.25L8.125 6.5625V5.625C8.125 4.54375 9.00938 3.74687 10 3.74687C11.0813 3.74687 11.8781 4.63125 11.8781 5.62187C11.8781 6.30937 11.4969 6.97188 10.8406 7.3L5.31563 10.0625V18.1219H14.6906V1.875H5.31563H5.3125ZM10 16.5625C8.775 16.5625 7.7375 15.7781 7.35 14.6875H12.6469C12.2594 15.7781 11.2219 16.5625 9.99687 16.5625H10ZM7.35 12.8125C7.7375 11.7219 8.775 10.9375 10 10.9375C11.225 10.9375 12.2625 11.7219 12.65 12.8125H7.35313H7.35Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var doNotDisturbIcon = createIcon("doNotDisturb", iconDefinition287);

// src/noticons/src/document/default.icon.tsx
import { jsxDEV as jsxDEV290, Fragment as Fragment288 } from "react/jsx-dev-runtime";
var iconDefinition288 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV290(Fragment288, {
    children: /* @__PURE__ */ jsxDEV290("path", {
      d: "M9.375 9.375H16.25V17.5H3.75V2.5H9.375V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var documentIcon = createIcon("document", iconDefinition288);

// src/noticons/src/dog/default.icon.tsx
import { jsxDEV as jsxDEV291, Fragment as Fragment289 } from "react/jsx-dev-runtime";
var iconDefinition289 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV291(Fragment289, {
    children: /* @__PURE__ */ jsxDEV291("path", {
      d: "M17.5 4.375L16.25 3.125H14.1281C13.4281 3.125 12.9563 3.37813 12.5688 3.95938L11.875 5L12.8125 5.625L11.875 6.875H4.10625C2.99063 6.39687 2.08125 5.39375 1.39687 4.0625L0 4.7625C0.54375 5.825 1.5125 7.3375 3.125 8.1625V12.5031L1.875 13.7531V17.5031H5V16.5656C5 15.9875 4.64062 15.6281 4.0625 15.6281H3.75V15.0031L5.25 13.8781C5.95312 13.35 6.25 12.7562 6.25 11.8781V11.4094L11.875 12.8156V17.5031H15V16.5656C15 15.9875 14.6406 15.6281 14.0625 15.6281H13.75V11.8781L16.25 7.50313L19.375 5.62813V4.37813H17.5V4.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dogIcon = createIcon("dog", iconDefinition289);

// src/noticons/src/donkey/default.icon.tsx
import { jsxDEV as jsxDEV292, Fragment as Fragment290 } from "react/jsx-dev-runtime";
var iconDefinition290 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV292(Fragment290, {
    children: /* @__PURE__ */ jsxDEV292("path", {
      d: "M18.125 3.75005L17.4156 5.1688C17.8687 5.6563 18.125 6.34692 18.125 7.18755V10.625H16.25L15.4688 8.2813L13.125 10.625V16.25L13.75 17.5H11.5625L10.9375 16.25V12.5407C10.2125 12.9469 9.425 13.125 8.4375 13.125C7.77812 13.125 7.2125 13.0407 6.69063 12.8688L5.9375 14.375L7.5 17.5H5.3125L3.75 14.375V11.875L2.5 10.625V14.375H1.25V10.625C1.25 7.92505 2.925 6.25005 5.625 6.25005H12.2719L13.2594 5.26255C13.8 4.7188 14.2969 4.45317 15.0594 4.38755C15.2531 4.37192 15.4375 4.37192 15.6156 4.3813L16.1375 3.85942C16.6625 3.33442 17.1656 3.12817 17.9062 3.12817H18.1219V3.75317L18.125 3.75005Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var donkeyIcon = createIcon("donkey", iconDefinition290);

// src/noticons/src/download/default.icon.tsx
import { jsxDEV as jsxDEV293, Fragment as Fragment291 } from "react/jsx-dev-runtime";
var iconDefinition291 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV293(Fragment291, {
    children: /* @__PURE__ */ jsxDEV293("path", {
      d: "M18.125 9.375C18.125 11.3031 16.9281 12.5 15 12.5H13.75V10.625H15C15.8875 10.625 16.25 10.2625 16.25 9.375C16.25 8.4875 15.8875 8.125 15 8.125H13.75V6.25C13.75 4.20625 12.6687 3.125 10.625 3.125C8.58125 3.125 7.5 4.20625 7.5 6.25V6.875H5.625C4.34687 6.875 3.75 7.47188 3.75 8.75C3.75 10.0281 4.34687 10.625 5.625 10.625H6.25V12.5H5.625C3.3125 12.5 1.875 11.0625 1.875 8.75C1.875 6.4375 3.3125 5 5.625 5C5.66563 5 5.70312 5.00313 5.74375 5.00625C6.2 2.6625 7.98125 1.25 10.625 1.25C13.7094 1.25 15.625 3.16563 15.625 6.25C15.625 6.26562 15.625 6.28125 15.625 6.29688C17.1844 6.53125 18.1281 7.66563 18.1281 9.375H18.125ZM10.9375 15.8625V10.625H9.0625V15.8625L7.2625 14.0625L5.9375 15.3875L10 19.45L14.0625 15.3875L12.7375 14.0625L10.9375 15.8625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var downloadIcon = createIcon("download", iconDefinition291);

// src/noticons/src/downward/default.icon.tsx
import { jsxDEV as jsxDEV294, Fragment as Fragment292 } from "react/jsx-dev-runtime";
var iconDefinition292 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV294(Fragment292, {
    children: /* @__PURE__ */ jsxDEV294("path", {
      d: "M16.875 9.45V10.625L10 17.5L3.125 10.625V9.45H7.5V2.5H12.5V9.45H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var downwardIcon = createIcon("downward", iconDefinition292);

// src/noticons/src/drafts/default.icon.tsx
import { jsxDEV as jsxDEV295, Fragment as Fragment293 } from "react/jsx-dev-runtime";
var iconDefinition293 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV295(Fragment293, {
    children: /* @__PURE__ */ jsxDEV295("path", {
      d: "M11.875 5.9375H1.25V4.0625H11.875V5.9375ZM1.25 15.9375H5.625V14.0625H1.25V15.9375ZM8.75 9.0625H1.25V10.9375H8.75V9.0625ZM9.375 12.4781L8.125 15.4969L8.56563 15.9375L11.5844 14.6875L16.95 9.32188L14.7406 7.1125L9.375 12.4781ZM17.7906 4.0625L15.625 6.22813L17.8344 8.4375L20 6.27187L17.7906 4.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var draftsIcon = createIcon("drafts", iconDefinition293);

// src/noticons/src/dress/default.icon.tsx
import { jsxDEV as jsxDEV296, Fragment as Fragment294 } from "react/jsx-dev-runtime";
var iconDefinition294 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV296(Fragment294, {
    children: /* @__PURE__ */ jsxDEV296("path", {
      d: "M15 17.5C15 17.5 13.85 18.75 10 18.75C6.15 18.75 5 17.5 5 17.5L7.25312 8.48125L6.39687 5.9125C6.2875 5.58437 6.25 5.34688 6.25 5C6.25 4.65313 6.2875 4.41562 6.39687 4.0875L7.34375 1.25H8.4375V3.75C8.4375 4.13438 8.67812 4.375 9.0625 4.375H10.9375C11.3219 4.375 11.5625 4.13438 11.5625 3.75V1.25H12.6562L13.6031 4.0875C13.7125 4.41562 13.75 4.65313 13.75 5C13.75 5.34688 13.7125 5.58437 13.6031 5.9125L12.7469 8.48125C13.1469 10.0781 15 17.5 15 17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dressIcon = createIcon("dress", iconDefinition294);

// src/noticons/src/drink/default.icon.tsx
import { jsxDEV as jsxDEV297, Fragment as Fragment295 } from "react/jsx-dev-runtime";
var iconDefinition295 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV297(Fragment295, {
    children: /* @__PURE__ */ jsxDEV297("path", {
      d: "M17.5 4.375H12.4469L13.125 0.309375L11.275 0L10.5469 4.375H2.5V6.25H4.0625L5.9375 17.5H14.0625L15.9375 6.25H17.5V4.375ZM10.2344 6.25L9.92188 8.125H6.275L5.9625 6.25H10.2344ZM13.725 8.125H11.8219L12.1344 6.25H14.0375L13.725 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var drinkIcon = createIcon("drink", iconDefinition295);

// src/noticons/src/duck/default.icon.tsx
import { jsxDEV as jsxDEV298, Fragment as Fragment296 } from "react/jsx-dev-runtime";
var iconDefinition296 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV298(Fragment296, {
    children: /* @__PURE__ */ jsxDEV298("path", {
      d: "M13.3406 5.30312L12.7875 6.13125C14.5031 7.31563 15.625 8.50938 15.625 10.625C15.625 12.4062 13.925 14.1875 10 14.3594V16.25H11.875V17.5H8.75V14.35C4.7625 14.075 2.5 11.25 2.5 11.25V10L8.125 8.125H11.25C11.25 7.00625 9.375 6.03438 9.375 4.21875C9.375 2.925 10.425 1.875 11.7188 1.875C12.9031 1.875 13.8781 2.75312 14.0375 3.89062L16.5625 5.575L15.6969 6.875L13.3406 5.30312Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var duckIcon = createIcon("duck", iconDefinition296);

// src/noticons/src/duster/default.icon.tsx
import { jsxDEV as jsxDEV299, Fragment as Fragment297 } from "react/jsx-dev-runtime";
var iconDefinition297 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV299(Fragment297, {
    children: /* @__PURE__ */ jsxDEV299("path", {
      d: "M17.5 13.125H8.2L3.825 17.5L2.5 16.175L6.875 11.8V2.5H8.125C9.66875 2.5 10.625 3.45625 10.625 5H12.5C14.0437 5 15 5.95625 15 7.5V9.375C16.5437 9.375 17.5 10.3313 17.5 11.875V13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var dusterIcon = createIcon("duster", iconDefinition297);

// src/noticons/src/ear/default.icon.tsx
import { jsxDEV as jsxDEV300, Fragment as Fragment298 } from "react/jsx-dev-runtime";
var iconDefinition298 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV300(Fragment298, {
    children: /* @__PURE__ */ jsxDEV300("path", {
      d: "M16.0156 12.0281L15 10V7.8125C15 4.4 13.1469 1.875 9.6875 1.875C6.40938 1.875 3.75 4.64375 3.75 9.0625C3.75 14.375 7.63125 18.125 12.1875 18.125C13.9219 18.125 15 17.0469 15 15.3125L15.7125 14.4812C16.0594 14.075 16.25 13.5594 16.25 13.0281C16.25 12.6812 16.1687 12.3406 16.0156 12.0281ZM13.75 10H12.5V9.0625C11.5656 9.0625 10.9375 9.69063 10.9375 10.625C10.9375 11.5594 11.5656 12.1875 12.5 12.1875V13.4375C10.8719 13.4375 9.6875 12.2531 9.6875 10.625C9.6875 8.99687 10.8562 7.82812 12.4719 7.8125C12.3156 5.99375 11.4531 5 10 5C8.07188 5 6.875 6.55625 6.875 9.0625C6.875 10.1219 7.10313 11.0938 7.50313 11.9344L6.375 12.5C5.89687 11.4906 5.62813 10.325 5.62813 9.0625C5.62813 5.83437 7.34687 3.75 10.0031 3.75C12.1812 3.75 13.7531 5.175 13.7531 8.4375V10H13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var earIcon = createIcon("ear", iconDefinition298);

// src/noticons/src/earHearingAid/default.icon.tsx
import { jsxDEV as jsxDEV301, Fragment as Fragment299 } from "react/jsx-dev-runtime";
var iconDefinition299 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV301(Fragment299, {
    children: /* @__PURE__ */ jsxDEV301("path", {
      d: "M17.3375 12.1875H16.5625C16.5625 12.1875 15.3594 13.4375 13.75 13.4375C12.1406 13.4375 10.9375 12.2531 10.9375 10.625C10.9375 8.99687 12.1094 7.825 13.725 7.8125C13.5687 5.99062 12.7031 5 11.25 5C9.32186 5 8.12499 6.55625 8.12499 9.0625C8.12499 10.1219 8.35311 11.0938 8.75311 11.9344L7.62499 12.5C7.14686 11.4906 6.87811 10.325 6.87811 9.0625C6.87811 5.83437 8.59686 3.75 11.2531 3.75C13.4312 3.75 15.0031 5.36875 15.0031 7.8125C15.0031 8.54688 14.5906 9.0625 13.7531 9.0625C12.8187 9.0625 12.1906 9.69063 12.1906 10.625C12.1906 11.5594 12.8187 12.1875 13.7531 12.1875C15.2594 12.1875 16.8781 10.475 16.8781 7.8125C16.8781 4.49375 14.8062 2.02187 11.2406 1.8875L11.2531 1.875H7.18124C4.74061 1.875 3.12499 3.04063 2.40936 5.375C2.06249 6.50625 1.87811 7.74375 1.87811 9.0625C1.87811 9.37813 1.89374 9.69063 1.91249 10H3.79061C3.76561 9.69063 3.74999 9.37813 3.74999 9.0625C3.74999 7.69063 3.99061 6.425 4.42499 5.31563C4.84061 4.25312 5.60624 3.75 6.74686 3.75H6.79999C5.69061 4.99688 5.00311 6.81563 5.00311 9.0625C5.00311 14.375 8.88436 18.125 13.4406 18.125C15.175 18.125 16.2531 17.0469 16.2531 15.3125L16.9656 14.4812C17.3125 14.075 17.5031 13.5594 17.5031 13.0281C17.5031 12.7406 17.4469 12.4531 17.3406 12.1875H17.3375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var earHearingAidIcon = createIcon("earHearingAid", iconDefinition299);

// src/noticons/src/earthquake/default.icon.tsx
import { jsxDEV as jsxDEV302, Fragment as Fragment300 } from "react/jsx-dev-runtime";
var iconDefinition300 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV302(Fragment300, {
    children: /* @__PURE__ */ jsxDEV302("path", {
      d: "M17.5 9.375V10.625H15.3125V16.875H10.7031L12.1875 13.9062L9.64687 11.3656L10.675 9.30938L9.55625 8.75L8.125 11.6125L10.6656 14.1531L9.30312 16.875H4.68437V10.625H2.49687V9.375L10 1.875L12.8125 4.6875V2.5H15.3125V7.1875L17.5 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var earthquakeIcon = createIcon("earthquake", iconDefinition300);

// src/noticons/src/egg/default.icon.tsx
import { jsxDEV as jsxDEV303, Fragment as Fragment301 } from "react/jsx-dev-runtime";
var iconDefinition301 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV303(Fragment301, {
    children: /* @__PURE__ */ jsxDEV303("path", {
      d: "M15.9375 11.25C15.9375 14.7156 13.4656 17.5 10 17.5C6.53437 17.5 4.0625 14.7156 4.0625 11.25C4.0625 7.5875 6.3375 2.5 10 2.5C13.6625 2.5 15.9375 7.5875 15.9375 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var eggIcon = createIcon("egg", iconDefinition301);

// src/noticons/src/eject/default.icon.tsx
import { jsxDEV as jsxDEV304, Fragment as Fragment302 } from "react/jsx-dev-runtime";
var iconDefinition302 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV304(Fragment302, {
    children: /* @__PURE__ */ jsxDEV304("path", {
      d: "M2.5 13.75H17.5V16.875H2.5V13.75ZM10 2.5L2.5 10V11.25H17.5V10L10 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ejectIcon = createIcon("eject", iconDefinition302);

// src/noticons/src/electricGuitar/default.icon.tsx
import { jsxDEV as jsxDEV305, Fragment as Fragment303 } from "react/jsx-dev-runtime";
var iconDefinition303 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV305(Fragment303, {
    children: /* @__PURE__ */ jsxDEV305("path", {
      d: "M13.75 13.4375C13.75 12.6594 14.375 12.2281 14.375 11.0938C14.375 10.0781 13.5312 9.375 12.5 9.375H12.1875V10.3125C12.1875 10.8906 11.8281 11.25 11.25 11.25H10.9375V5.3125L11.5094 4.74062C11.7438 4.50625 11.875 4.1875 11.875 3.85625V0H10.625L8.27187 3.53125C8.175 3.675 8.125 3.84375 8.125 4.01562C8.125 4.24688 8.21562 4.46875 8.38125 4.63125L9.0625 5.3125V10H8.75C8.17188 10 7.8125 9.64062 7.8125 9.0625V7.5H7.5C6.33438 7.5 5.3125 8.33125 5.3125 9.84375C5.3125 11.4312 6.5625 12.1906 6.5625 12.9688C6.5625 13.7469 5 14.6906 5 16.5625C5 18.7125 6.90937 20 10 20C13.0906 20 15 18.7125 15 16.5625C15 14.6906 13.75 14.2469 13.75 13.4375ZM11.5625 16.875H8.4375V15.625H11.5625V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var electricGuitarIcon = createIcon("electricGuitar", iconDefinition303);

// src/noticons/src/electricPlug/default.icon.tsx
import { jsxDEV as jsxDEV306, Fragment as Fragment304 } from "react/jsx-dev-runtime";
var iconDefinition304 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV306(Fragment304, {
    children: /* @__PURE__ */ jsxDEV306("path", {
      d: "M15.625 6.25V8.125H14.375V10.625C14.375 12.1687 13.4187 13.125 11.875 13.125H10.9375V14.375C10.9375 15.5844 11.6031 16.25 12.8125 16.25H13.75V18.125H12.8125C10.5687 18.125 9.0625 16.6187 9.0625 14.375V13.125H8.125C6.58125 13.125 5.625 12.1687 5.625 10.625V8.125H4.375V6.25H6.5625V1.875H8.4375V6.25H11.5625V1.875H13.4375V6.25H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var electricPlugIcon = createIcon("electricPlug", iconDefinition304);

// src/noticons/src/elephant/default.icon.tsx
import { jsxDEV as jsxDEV307, Fragment as Fragment305 } from "react/jsx-dev-runtime";
var iconDefinition305 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV307(Fragment305, {
    children: /* @__PURE__ */ jsxDEV307("path", {
      d: "M18.75 7.90937V11.875C18.75 13.8031 17.5531 15 15.625 15H15V13.125H15.625C16.3969 13.125 16.875 12.6469 16.875 11.875C16.875 11.1031 16.3969 10.625 15.625 10.625H13.75V15.7625C14.1438 15.9562 14.375 16.3438 14.375 16.875V17.5H10.625V13.125H6.875V15.7625C7.26875 15.9562 7.5 16.3438 7.5 16.875V17.5H3.75V11.875L2.5 10.625V13.75H1.25V9.375C1.25 7.30312 2.92812 5.625 5 5.625H10C10 4.08125 10.9563 3.125 12.5 3.125H13.9656C14.7062 3.125 15.2094 3.33438 15.7344 3.85625L18.0187 6.14062C18.5438 6.66562 18.75 7.16875 18.75 7.90937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var elephantIcon = createIcon("elephant", iconDefinition305);

// src/noticons/src/elevator/default.icon.tsx
import { jsxDEV as jsxDEV308, Fragment as Fragment306 } from "react/jsx-dev-runtime";
var iconDefinition306 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV308(Fragment306, {
    children: /* @__PURE__ */ jsxDEV308("path", {
      d: "M18.675 10.9375L20 12.2625L15.9375 16.325L11.875 12.2625L13.2 10.9375L15 12.7375V7.26562L13.2 9.06563L11.875 7.74063L15.9375 3.67813L20 7.74063L18.675 9.06563L16.875 7.26562V12.7375L18.675 10.9375ZM0 3.125H10.625V16.875H0V3.125ZM4.0625 5.3125C4.0625 6.08437 4.54063 6.5625 5.3125 6.5625C6.08437 6.5625 6.5625 6.08437 6.5625 5.3125C6.5625 4.54062 6.08437 4.0625 5.3125 4.0625C4.54063 4.0625 4.0625 4.54062 4.0625 5.3125ZM1.09375 9.43438L1.74375 10.4094L4.14062 8.8125V10.7062L2.5 15.6281H3.98125L5.3125 11.6375L6.64375 15.6281H8.125L6.48438 10.7062V8.8125L8.88125 10.4094L9.53125 9.43438L6.87187 7.6625C6.35625 7.31875 5.93437 7.19063 5.3125 7.19063C4.69063 7.19063 4.26875 7.31875 3.75313 7.6625L1.09375 9.43438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var elevatorIcon = createIcon("elevator", iconDefinition306);

// src/noticons/src/emoji/default.icon.tsx
import { jsxDEV as jsxDEV309, Fragment as Fragment307 } from "react/jsx-dev-runtime";
var iconDefinition307 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV309(Fragment307, {
    children: /* @__PURE__ */ jsxDEV309("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.5625 8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM10 14.6875C7.33437 14.6875 5.9375 12.5 5.9375 12.5L6.97813 11.8062C6.97813 11.8062 7.95312 13.4375 10 13.4375C12.0469 13.4375 13.0219 11.8062 13.0219 11.8062L14.0625 12.5C14.0625 12.5 12.6656 14.6875 10 14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiIcon = createIcon("emoji", iconDefinition307);

// src/noticons/src/emojiAngry/default.icon.tsx
import { jsxDEV as jsxDEV310, Fragment as Fragment308 } from "react/jsx-dev-runtime";
var iconDefinition308 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV310(Fragment308, {
    children: /* @__PURE__ */ jsxDEV310("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 10V8.4625L5 7.68125L5.55938 6.5625L7.91875 7.74375C8.275 7.92188 8.4375 8.18437 8.4375 8.58125V10C8.4375 10.5781 8.07812 10.9375 7.5 10.9375C6.92188 10.9375 6.5625 10.5781 6.5625 10ZM12.0406 14.175C12.0406 14.175 11.2594 13.4375 10 13.4375C8.74062 13.4375 7.95937 14.175 7.95937 14.175L7.075 13.2906C7.075 13.2906 8.16875 12.1875 10 12.1875C11.8313 12.1875 12.925 13.2906 12.925 13.2906L12.0406 14.175ZM13.4375 8.4625V10C13.4375 10.5781 13.0781 10.9375 12.5 10.9375C11.9219 10.9375 11.5625 10.5781 11.5625 10V8.58125C11.5625 8.18437 11.725 7.91875 12.0813 7.74375L14.4406 6.5625L15 7.68125L13.4375 8.4625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiAngryIcon = createIcon("emojiAngry", iconDefinition308);

// src/noticons/src/emojiBigSad/default.icon.tsx
import { jsxDEV as jsxDEV311, Fragment as Fragment309 } from "react/jsx-dev-runtime";
var iconDefinition309 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV311(Fragment309, {
    children: /* @__PURE__ */ jsxDEV311("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM6.5625 14.0625C6.5625 12.6812 8.1 11.5625 10 11.5625C11.9 11.5625 13.4375 12.6812 13.4375 14.0625H6.5625ZM13.4375 9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiBigSadIcon = createIcon("emojiBigSad", iconDefinition309);

// src/noticons/src/emojiDisappointed/default.icon.tsx
import { jsxDEV as jsxDEV312, Fragment as Fragment310 } from "react/jsx-dev-runtime";
var iconDefinition310 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV312(Fragment310, {
    children: /* @__PURE__ */ jsxDEV312("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM11.9344 13.3781C11.4531 13.0688 10.8125 12.8125 10 12.8125C7.95312 12.8125 6.97813 14.4438 6.97813 14.4438L5.9375 13.75C5.9375 13.75 7.33437 11.5625 10 11.5625C11.2031 11.5625 12.1437 12.0063 12.8156 12.4969L11.9312 13.3813L11.9344 13.3781ZM13.4375 9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiDisappointedIcon = createIcon("emojiDisappointed", iconDefinition310);

// src/noticons/src/emojiGrinning/default.icon.tsx
import { jsxDEV as jsxDEV313, Fragment as Fragment311 } from "react/jsx-dev-runtime";
var iconDefinition311 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV313(Fragment311, {
    children: /* @__PURE__ */ jsxDEV313("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM10 14.6875C8.1 14.6875 6.5625 13.5688 6.5625 12.1875H13.4375C13.4375 13.5688 11.9 14.6875 10 14.6875ZM13.4375 9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiGrinningIcon = createIcon("emojiGrinning", iconDefinition311);

// src/noticons/src/emojiGrinningSmilingEyes/default.icon.tsx
import { jsxDEV as jsxDEV314, Fragment as Fragment312 } from "react/jsx-dev-runtime";
var iconDefinition312 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV314(Fragment312, {
    children: /* @__PURE__ */ jsxDEV314("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM5 9.38438C5.14062 8.40625 5.8375 7.1875 7.1875 7.1875C8.5375 7.1875 9.23438 8.40625 9.375 9.38438L8.1625 9.6875C8.05 9.24375 7.94063 8.4375 7.1875 8.4375C6.43438 8.4375 6.325 9.24375 6.2125 9.6875L5 9.38438ZM10 14.6875C8.1 14.6875 6.5625 13.5688 6.5625 12.1875H13.4375C13.4375 13.5688 11.9 14.6875 10 14.6875ZM13.7875 9.6875C13.675 9.24375 13.5656 8.4375 12.8125 8.4375C12.0594 8.4375 11.95 9.24375 11.8375 9.6875L10.625 9.38438C10.7656 8.40625 11.4625 7.1875 12.8125 7.1875C14.1625 7.1875 14.8594 8.40625 15 9.38438L13.7875 9.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiGrinningSmilingEyesIcon = createIcon("emojiGrinningSmilingEyes", iconDefinition312);

// src/noticons/src/emojiHeartEyes/default.icon.tsx
import { jsxDEV as jsxDEV315, Fragment as Fragment313 } from "react/jsx-dev-runtime";
var iconDefinition313 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV315(Fragment313, {
    children: /* @__PURE__ */ jsxDEV315("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM5.02813 8.53125C4.89375 7.94062 5.25 7.4375 5.76563 7.33125C6.53438 7.16875 6.79063 7.87813 6.96563 7.84375C7.1375 7.80625 7.06563 7.05937 7.8375 6.89687C8.35 6.7875 8.89063 7.10313 9.02188 7.69375C9.27188 8.80938 8.37187 9.88125 7.77812 10.5062C7.6625 10.6281 7.52812 10.6562 7.36875 10.5906C6.5625 10.2625 5.28125 9.64687 5.02813 8.53125ZM10 14.6875C7.33437 14.6875 5.9375 12.5 5.9375 12.5L6.97813 11.8062C6.97813 11.8062 7.95312 13.4375 10 13.4375C12.0469 13.4375 13.0219 11.8062 13.0219 11.8062L14.0625 12.5C14.0625 12.5 12.6656 14.6875 10 14.6875ZM14.9719 8.53125C14.7219 9.64687 13.4375 10.2625 12.6312 10.5906C12.4719 10.6562 12.3406 10.6281 12.2219 10.5062C11.6281 9.88437 10.7281 8.8125 10.9781 7.69375C11.1125 7.10313 11.65 6.7875 12.1625 6.89687C12.9344 7.05937 12.8594 7.80625 13.0344 7.84375C13.2063 7.88125 13.4656 7.17187 14.2344 7.33125C14.7469 7.44062 15.1031 7.94062 14.9719 8.53125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiHeartEyesIcon = createIcon("emojiHeartEyes", iconDefinition313);

// src/noticons/src/emojiNeutral/default.icon.tsx
import { jsxDEV as jsxDEV316, Fragment as Fragment314 } from "react/jsx-dev-runtime";
var iconDefinition314 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV316(Fragment314, {
    children: /* @__PURE__ */ jsxDEV316("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM13.4375 13.75H6.5625V12.5H13.4375V13.75ZM13.4375 9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiNeutralIcon = createIcon("emojiNeutral", iconDefinition314);

// src/noticons/src/emojiSad/default.icon.tsx
import { jsxDEV as jsxDEV317, Fragment as Fragment315 } from "react/jsx-dev-runtime";
var iconDefinition315 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV317(Fragment315, {
    children: /* @__PURE__ */ jsxDEV317("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.5625 8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM13.0219 14.4438C13.0219 14.4438 12.0469 12.8125 10 12.8125C7.95312 12.8125 6.97813 14.4438 6.97813 14.4438L5.9375 13.75C5.9375 13.75 7.33437 11.5625 10 11.5625C12.6656 11.5625 14.0625 13.75 14.0625 13.75L13.0219 14.4438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiSadIcon = createIcon("emojiSad", iconDefinition315);

// src/noticons/src/emojiSmilingEyes/default.icon.tsx
import { jsxDEV as jsxDEV318, Fragment as Fragment316 } from "react/jsx-dev-runtime";
var iconDefinition316 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV318(Fragment316, {
    children: /* @__PURE__ */ jsxDEV318("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM7.1875 7.1875C8.5375 7.1875 9.23438 8.40625 9.375 9.38438L8.1625 9.6875C8.05 9.24375 7.94063 8.4375 7.1875 8.4375C6.43438 8.4375 6.325 9.24375 6.2125 9.6875L5 9.38438C5.14062 8.40625 5.8375 7.1875 7.1875 7.1875ZM10 14.6875C7.33437 14.6875 5.9375 12.5 5.9375 12.5L6.97813 11.8062C6.97813 11.8062 7.95312 13.4375 10 13.4375C12.0469 13.4375 13.0219 11.8062 13.0219 11.8062L14.0625 12.5C14.0625 12.5 12.6656 14.6875 10 14.6875ZM13.7875 9.6875C13.675 9.24375 13.5656 8.4375 12.8125 8.4375C12.0594 8.4375 11.95 9.24375 11.8375 9.6875L10.625 9.38438C10.7656 8.40625 11.4625 7.1875 12.8125 7.1875C14.1625 7.1875 14.8594 8.40625 15 9.38438L13.7875 9.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiSmilingEyesIcon = createIcon("emojiSmilingEyes", iconDefinition316);

// src/noticons/src/emojiSunglasses/default.icon.tsx
import { jsxDEV as jsxDEV319, Fragment as Fragment317 } from "react/jsx-dev-runtime";
var iconDefinition317 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV319(Fragment317, {
    children: /* @__PURE__ */ jsxDEV319("path", {
      d: "M12.8125 8.125H14.0625L13.125 10H11.875L12.8125 8.125ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM14.0625 12.5L13.0219 11.8062C13.0219 11.8062 12.0469 13.4375 10 13.4375C7.95312 13.4375 6.97813 11.8062 6.97813 11.8062L5.9375 12.5C5.9375 12.5 7.33437 14.6875 10 14.6875C12.6656 14.6875 14.0625 12.5 14.0625 12.5ZM15.625 8.125V6.875H4.375V8.125H5L5.1875 9.24062C5.36875 10.3344 6.08125 10.9375 7.1875 10.9375C8.29375 10.9375 9.00625 10.3344 9.1875 9.24375L9.27187 8.74375C9.3375 8.34687 9.59688 8.12813 10 8.12813C10.4031 8.12813 10.6625 8.34687 10.7281 8.74375L10.8125 9.24375C10.9937 10.3375 11.7063 10.9406 12.8125 10.9406C13.9187 10.9406 14.6313 10.3375 14.8125 9.24687L15 8.12813H15.625V8.125ZM6.25 10H7.5L8.4375 8.125H7.1875L6.25 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiSunglassesIcon = createIcon("emojiSunglasses", iconDefinition317);

// src/noticons/src/emojiSurprised/default.icon.tsx
import { jsxDEV as jsxDEV320, Fragment as Fragment318 } from "react/jsx-dev-runtime";
var iconDefinition318 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV320(Fragment318, {
    children: /* @__PURE__ */ jsxDEV320("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 9.375V8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375ZM10 15C8.90625 15 8.125 14.35 8.125 13.4375C8.125 12.525 8.90625 11.875 10 11.875C11.0938 11.875 11.875 12.525 11.875 13.4375C11.875 14.35 11.0938 15 10 15ZM13.4375 9.375C13.4375 9.95312 13.0781 10.3125 12.5 10.3125C11.9219 10.3125 11.5625 9.95312 11.5625 9.375V8.125C11.5625 7.54688 11.9219 7.1875 12.5 7.1875C13.0781 7.1875 13.4375 7.54688 13.4375 8.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiSurprisedIcon = createIcon("emojiSurprised", iconDefinition318);

// src/noticons/src/emojiWinking/default.icon.tsx
import { jsxDEV as jsxDEV321, Fragment as Fragment319 } from "react/jsx-dev-runtime";
var iconDefinition319 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV321(Fragment319, {
    children: /* @__PURE__ */ jsxDEV321("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM6.5625 8.125C6.5625 7.54688 6.92188 7.1875 7.5 7.1875C8.07812 7.1875 8.4375 7.54688 8.4375 8.125V9.375C8.4375 9.95312 8.07812 10.3125 7.5 10.3125C6.92188 10.3125 6.5625 9.95312 6.5625 9.375V8.125ZM10 14.6875C7.33437 14.6875 5.9375 12.5 5.9375 12.5L6.97813 11.8062C6.97813 11.8062 7.95312 13.4375 10 13.4375C12.0469 13.4375 13.0219 11.8062 13.0219 11.8062L14.0625 12.5C14.0625 12.5 12.6656 14.6875 10 14.6875ZM13.6469 9.6875C13.5469 9.47813 13.3469 9.0625 12.8125 9.0625C12.2781 9.0625 12.0781 9.47813 11.9781 9.6875L10.9375 8.99375C11.0938 8.525 11.7188 7.8125 12.8125 7.8125C13.9062 7.8125 14.5312 8.525 14.6875 8.99375L13.6469 9.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var emojiWinkingIcon = createIcon("emojiWinking", iconDefinition319);

// src/noticons/src/error/default.icon.tsx
import { jsxDEV as jsxDEV322, Fragment as Fragment320 } from "react/jsx-dev-runtime";
var iconDefinition320 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV322(Fragment320, {
    children: /* @__PURE__ */ jsxDEV322("path", {
      d: "M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM11.25 15H8.75V13.125H11.25V15ZM11.25 9.375L10.625 11.875H9.375L8.75 9.375V5.625H11.25V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var errorIcon = createIcon("error", iconDefinition320);

// src/noticons/src/escalator/default.icon.tsx
import { jsxDEV as jsxDEV323, Fragment as Fragment321 } from "react/jsx-dev-runtime";
var iconDefinition321 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV323(Fragment321, {
    children: /* @__PURE__ */ jsxDEV323("path", {
      d: "M2.50001 4.0625C2.50001 3.09688 3.09689 2.5 4.06251 2.5C5.02814 2.5 5.62501 3.09688 5.62501 4.0625C5.62501 5.02813 5.02814 5.625 4.06251 5.625C3.09689 5.625 2.50001 5.02813 2.50001 4.0625ZM16.875 4.375H13.4375C12.6906 4.375 12.1969 4.57812 11.6688 5.10625L6.15001 10.625H3.12189C1.58126 10.625 0.621887 11.5844 0.621887 13.125C0.621887 14.6656 1.58126 15.625 3.12189 15.625H7.18439C7.93126 15.625 8.42501 15.4219 8.95314 14.8938L14.4719 9.375H16.875C18.4156 9.375 19.375 8.41563 19.375 6.875C19.375 5.33438 18.4156 4.375 16.875 4.375ZM5.62501 8.125C5.62501 7.15938 5.02814 6.5625 4.06251 6.5625C3.09689 6.5625 2.50001 7.15938 2.50001 8.125V9.375H5.62501V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var escalatorIcon = createIcon("escalator", iconDefinition321);

// src/noticons/src/exclamationMark/default.icon.tsx
import { jsxDEV as jsxDEV324, Fragment as Fragment322 } from "react/jsx-dev-runtime";
var iconDefinition322 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV324(Fragment322, {
    children: /* @__PURE__ */ jsxDEV324("path", {
      d: "M8.125 14.375H11.875V17.5H8.125V14.375ZM8.125 2.5V8.75L9.0625 12.5H10.9375L11.875 8.75V2.5H8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var exclamationMarkIcon = createIcon("exclamationMark", iconDefinition322);

// src/noticons/src/exclamationMarkDouble/default.icon.tsx
import { jsxDEV as jsxDEV325, Fragment as Fragment323 } from "react/jsx-dev-runtime";
var iconDefinition323 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV325(Fragment323, {
    children: /* @__PURE__ */ jsxDEV325("path", {
      d: "M5 2.5H8.75V8.75L7.8125 12.5H5.9375L5 8.75V2.5ZM5 17.5H8.75V14.375H5V17.5ZM11.25 2.5V8.75L12.1875 12.5H14.0625L15 8.75V2.5H11.25ZM11.25 17.5H15V14.375H11.25V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var exclamationMarkDoubleIcon = createIcon("exclamationMarkDouble", iconDefinition323);

// src/noticons/src/exit/default.icon.tsx
import { jsxDEV as jsxDEV326, Fragment as Fragment324 } from "react/jsx-dev-runtime";
var iconDefinition324 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV326(Fragment324, {
    children: /* @__PURE__ */ jsxDEV326("path", {
      d: "M8.125 2.73749V17.2656C4.89062 16.4344 2.5 13.4969 2.5 10.0031C2.5 6.50936 4.89062 3.56874 8.125 2.73749ZM11.875 2.73749V17.2656C15.1094 16.4344 17.5 13.4969 17.5 10.0031C17.5 6.50936 15.1094 3.57186 11.875 2.74061V2.73749Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var exitIcon = createIcon("exit", iconDefinition324);

// src/noticons/src/expand/default.icon.tsx
import { jsxDEV as jsxDEV327, Fragment as Fragment325 } from "react/jsx-dev-runtime";
var iconDefinition325 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV327(Fragment325, {
    children: /* @__PURE__ */ jsxDEV327("path", {
      d: "M9.04375 12.2812L5.7 15.625H8.4375V17.5H2.5V11.5625H4.375V14.3L7.71875 10.9563L9.04375 12.2812ZM11.5625 2.5V4.375H14.3L10.9563 7.71875L12.2812 9.04375L15.625 5.7V8.4375H17.5V2.5H11.5625ZM15.625 14.3L12.2812 10.9563L10.9563 12.2812L14.3 15.625H11.5625V17.5H17.5V11.5625H15.625V14.3ZM4.375 5.7L7.71875 9.04375L9.04375 7.71875L5.7 4.375H8.4375V2.5H2.5V8.4375H4.375V5.7Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var expandIcon = createIcon("expand", iconDefinition325);

// src/noticons/src/extension/default.icon.tsx
import { jsxDEV as jsxDEV328, Fragment as Fragment326 } from "react/jsx-dev-runtime";
var iconDefinition326 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV328(Fragment326, {
    children: /* @__PURE__ */ jsxDEV328("path", {
      d: "M18.7344 10C18.7344 11.1562 18.1375 11.875 17.1719 11.875C16.6031 11.875 16.1656 11.6219 15.9031 11.1781C15.8031 11.0125 15.675 10.9375 15.4813 10.9375C15.225 10.9375 15.05 11.0969 15 11.3094V16.875H3.125V11.4344C3.125 11.1594 3.31563 10.9375 3.62188 10.9375C3.81563 10.9375 3.94375 11.0125 4.04375 11.1781C4.30937 11.6219 4.74688 11.875 5.3125 11.875C6.27813 11.875 6.875 11.1562 6.875 10C6.875 8.84375 6.27813 8.125 5.3125 8.125C4.74375 8.125 4.30625 8.37812 4.04375 8.82187C3.94375 8.9875 3.81563 9.0625 3.62188 9.0625C3.31563 9.0625 3.125 8.87187 3.125 8.56563V3.125H15V8.7C15.05 8.925 15.2219 9.0625 15.4813 9.0625C15.675 9.0625 15.8031 8.9875 15.9031 8.82187C16.1687 8.37812 16.6062 8.125 17.1719 8.125C18.1375 8.125 18.7344 8.84375 18.7344 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var extensionIcon = createIcon("extension", iconDefinition326);

// src/noticons/src/fabricSwatch/default.icon.tsx
import { jsxDEV as jsxDEV329, Fragment as Fragment327 } from "react/jsx-dev-runtime";
var iconDefinition327 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV329(Fragment327, {
    children: /* @__PURE__ */ jsxDEV329("path", {
      d: "M16.875 5.3125C16.875 4.525 17.5 4.64062 17.5 3.75C17.5 2.97812 17.0219 2.5 16.25 2.5C15.3469 2.5 15.4844 3.125 14.6875 3.125C13.8906 3.125 14.0156 2.5 13.125 2.5C12.2344 2.5 12.3594 3.125 11.5625 3.125C10.7656 3.125 10.8906 2.5 10 2.5C9.10938 2.5 9.23438 3.125 8.4375 3.125C7.64062 3.125 7.76562 2.5 6.875 2.5C5.98438 2.5 6.10938 3.125 5.3125 3.125C4.51562 3.125 4.64062 2.5 3.75 2.5C2.97812 2.5 2.5 2.97812 2.5 3.75C2.5 4.65313 3.125 4.51562 3.125 5.3125C3.125 6.10938 2.5 5.98438 2.5 6.875C2.5 7.76562 3.125 7.64062 3.125 8.4375C3.125 9.23438 2.5 9.10938 2.5 10C2.5 10.8906 3.125 10.7656 3.125 11.5625C3.125 12.3594 2.5 12.2344 2.5 13.125C2.5 14.0156 3.125 13.8906 3.125 14.6875C3.125 15.4844 2.5 15.3594 2.5 16.25C2.5 17.0219 2.97812 17.5 3.75 17.5C4.65313 17.5 4.51562 16.875 5.3125 16.875C6.10938 16.875 5.98438 17.5 6.875 17.5C7.76562 17.5 7.64062 16.875 8.4375 16.875C9.23438 16.875 9.10938 17.5 10 17.5C10.8906 17.5 10.7656 16.875 11.5625 16.875C12.3594 16.875 12.2344 17.5 13.125 17.5C14.0156 17.5 13.8906 16.875 14.6875 16.875C15.4844 16.875 15.3594 17.5 16.25 17.5C17.0219 17.5 17.5 17.0219 17.5 16.25C17.5 15.3469 16.875 15.4844 16.875 14.6875C16.875 13.8906 17.5 14.0156 17.5 13.125C17.5 12.2344 16.875 12.3594 16.875 11.5625C16.875 10.7656 17.5 10.8906 17.5 10C17.5 9.10938 16.875 9.23438 16.875 8.4375C16.875 7.64062 17.5 7.76562 17.5 6.875C17.5 5.98438 16.875 6.10938 16.875 5.3125ZM15 15H5V11.875H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fabricSwatchIcon = createIcon("fabricSwatch", iconDefinition327);

// src/noticons/src/facialTissues/default.icon.tsx
import { jsxDEV as jsxDEV330, Fragment as Fragment328 } from "react/jsx-dev-runtime";
var iconDefinition328 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV330(Fragment328, {
    children: /* @__PURE__ */ jsxDEV330("path", {
      d: "M6.875 8.75L5 3.125C5 3.125 6.09375 2.5 7.1875 2.5C8.8875 2.5 10.1312 3.75 11.5625 3.75C12.6562 3.75 13.75 3.125 13.75 3.125H15L13.125 8.75H6.875ZM2.5 10V17.5H17.5V10H2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var facialTissuesIcon = createIcon("facialTissues", iconDefinition328);

// src/noticons/src/factory/default.icon.tsx
import { jsxDEV as jsxDEV331, Fragment as Fragment329 } from "react/jsx-dev-runtime";
var iconDefinition329 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV331(Fragment329, {
    children: /* @__PURE__ */ jsxDEV331("path", {
      d: "M16.875 4.375L13.125 8.125V4.375H11.875L8.125 8.125V2.5H5V8.125H1.875V16.875H5V12.5H8.125V16.875H18.125V4.375H16.875ZM15 15H11.25V12.5H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var factoryIcon = createIcon("factory", iconDefinition329);

// src/noticons/src/fanDeck/default.icon.tsx
import { jsxDEV as jsxDEV332, Fragment as Fragment330 } from "react/jsx-dev-runtime";
var iconDefinition330 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV332(Fragment330, {
    children: /* @__PURE__ */ jsxDEV332("path", {
      d: "M2.5 17.5H10V2.5H2.5V17.5ZM7.1875 15.625C6.66875 15.625 6.25 15.2063 6.25 14.6875C6.25 14.1687 6.66875 13.75 7.1875 13.75C7.70625 13.75 8.125 14.1687 8.125 14.6875C8.125 15.2063 7.70625 15.625 7.1875 15.625ZM4.375 4.375H8.125V6.875H4.375V4.375ZM4.375 8.75H8.125V11.25H4.375V8.75ZM19.3562 8.14375L11.25 16.25V6.89375L14.6781 3.46563L19.3562 8.14375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fanDeckIcon = createIcon("fanDeck", iconDefinition330);

// src/noticons/src/feather/default.icon.tsx
import { jsxDEV as jsxDEV333, Fragment as Fragment331 } from "react/jsx-dev-runtime";
var iconDefinition331 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV333(Fragment331, {
    children: /* @__PURE__ */ jsxDEV333("path", {
      d: "M16.875 2.50001V6.99064C16.875 8.47189 16.4594 9.47814 15.4094 10.525L11.4094 14.525C10.625 15.3094 9.86876 15.6219 8.75626 15.6219H6.32189L3.82189 18.1219L2.49689 16.7969L10.9125 8.38126L10.0281 7.49689L4.37189 13.1219L3.74689 12.4969V9.94376C3.74689 9.31251 3.92501 8.88126 4.37189 8.43439C4.81876 7.98751 5.25001 7.80939 5.88126 7.80939H5.93439L5.94376 9.79064L7.18439 8.55001V6.65939C7.18439 5.91876 7.39376 5.41564 7.91564 4.89064L8.84376 3.96251C9.89064 2.91564 10.8969 2.49689 12.3781 2.49689H16.8688L16.875 2.50001Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var featherIcon = createIcon("feather", iconDefinition331);

// src/noticons/src/feed/default.icon.tsx
import { jsxDEV as jsxDEV334, Fragment as Fragment332 } from "react/jsx-dev-runtime";
var iconDefinition332 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV334(Fragment332, {
    children: /* @__PURE__ */ jsxDEV334("path", {
      d: "M2.5 3.125V16.875H17.5V3.125H2.5ZM9.375 7.5H13.125V8.75H9.375V7.5ZM4.375 5H8.125V8.75H4.375V5ZM15.625 15H4.375V10.625H15.625V15ZM15.625 6.25H9.375V5H15.625V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var feedIcon = createIcon("feed", iconDefinition332);

// src/noticons/src/filtered/default.icon.tsx
import { jsxDEV as jsxDEV335, Fragment as Fragment333 } from "react/jsx-dev-runtime";
var iconDefinition333 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV335(Fragment333, {
    children: /* @__PURE__ */ jsxDEV335("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM13.125 11.5625H6.875V9.6875H13.125V11.5625ZM15 8.4375H5V6.5625H15V8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var filteredIcon = createIcon("filtered", iconDefinition333);

// src/noticons/src/fire/default.icon.tsx
import { jsxDEV as jsxDEV336, Fragment as Fragment334 } from "react/jsx-dev-runtime";
var iconDefinition334 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV336(Fragment334, {
    children: /* @__PURE__ */ jsxDEV336("path", {
      d: "M14.9969 5L10.625 7.91563V1.875C7.17188 1.875 4.375 4.67188 4.375 8.125C4.375 8.77812 4.475 9.40938 4.6625 10H2.5C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 7.95312 16.5156 6.14062 14.9969 5ZM10 15.625C8.61875 15.625 7.5 14.5063 7.5 13.125C7.5 11.7437 8.61875 10.625 10 10.625V13.125L12.0813 11.7375C12.3469 12.1344 12.5 12.6125 12.5 13.125C12.5 14.5063 11.3813 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fireIcon = createIcon("fire", iconDefinition334);

// src/noticons/src/fireExtinguisher/default.icon.tsx
import { jsxDEV as jsxDEV337, Fragment as Fragment335 } from "react/jsx-dev-runtime";
var iconDefinition335 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV337(Fragment335, {
    children: /* @__PURE__ */ jsxDEV337("path", {
      d: "M10.9375 4.3375V6.25H11.875C13.0312 6.25 13.75 6.96875 13.75 8.125V17.5H6.25V8.125C6.25 6.96875 6.96875 6.25 8.125 6.25H9.0625V5H8.125C6.1375 5 5 6.1375 5 8.125V15.625H3.125V8.125C3.125 5.0875 5.0875 3.125 8.125 3.125H9.0625V1.875H14.375V3.125L10.9375 4.3375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fireExtinguisherIcon = createIcon("fireExtinguisher", iconDefinition335);

// src/noticons/src/fireTruck/default.icon.tsx
import { jsxDEV as jsxDEV338, Fragment as Fragment336 } from "react/jsx-dev-runtime";
var iconDefinition336 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV338(Fragment336, {
    children: /* @__PURE__ */ jsxDEV338("path", {
      d: "M17.5 6.25H15.625V5H13.125V6.25H11.25V7.5H8.75V6.25H10V5H1.25V6.25H2.5V7.5H1.25V14.375H3.125V15C3.125 16.0344 3.96563 16.875 5 16.875C6.03438 16.875 6.875 16.0344 6.875 15V14.375H13.125V15C13.125 16.0344 13.9656 16.875 15 16.875C16.0344 16.875 16.875 16.0344 16.875 15V14.375H18.75V11.25L17.5 6.25ZM6.25 6.25H7.5V7.5H6.25V6.25ZM3.75 6.25H5V7.5H3.75V6.25ZM10 10.625H2.5V9.375H10V10.625ZM13.125 10.625V8.125H16.0375L16.6625 10.625H13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fireTruckIcon = createIcon("fireTruck", iconDefinition336);

// src/noticons/src/fireworks/default.icon.tsx
import { jsxDEV as jsxDEV339, Fragment as Fragment337 } from "react/jsx-dev-runtime";
var iconDefinition337 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV339(Fragment337, {
    children: /* @__PURE__ */ jsxDEV339("path", {
      d: "M6.25 10.625H1.875V9.375H6.25V10.625ZM4.9 6.33438L3.81875 5.70938L3.19375 6.79062L4.275 7.41562L4.9 6.33438ZM5.39688 16.725L6.47812 17.35L8.66562 13.5625L7.58438 12.9375L5.39688 16.725ZM8.66562 6.44063L6.47812 2.65312L5.39688 3.27812L7.58438 7.06563L8.66562 6.44063ZM16.8062 6.79062L16.1812 5.70938L15.1 6.33438L15.725 7.41562L16.8062 6.79062ZM14.6031 3.275L13.5219 2.65L11.3344 6.4375L12.4156 7.0625L14.6031 3.275ZM5.0875 12.1125L5.7125 13.1938L8.69062 11.475L8.06562 10.3937L5.0875 12.1125ZM14.9125 7.88125L14.2875 6.8L11.3094 8.51875L11.9344 9.6L14.9125 7.88125ZM3.19375 13.2094L3.81875 14.2906L4.9 13.6656L4.275 12.5844L3.19375 13.2094ZM15.1031 13.6656L16.1844 14.2906L16.8094 13.2094L15.7281 12.5844L15.1031 13.6656ZM11.3156 11.4781L14.2938 13.1969L14.9188 12.1156L11.9406 10.3969L11.3156 11.4781ZM13.7531 9.375V10.625H18.1281V9.375H13.7531ZM5.09063 7.88437L8.06875 9.60312L8.69375 8.52188L5.71563 6.80313L5.09063 7.88437ZM11.3375 13.5594L13.525 17.3469L14.6063 16.7219L12.4188 12.9344L11.3375 13.5594ZM9.37813 17.5H10.6281V16.25H9.37813V17.5ZM9.37813 3.75H10.6281V2.5H9.37813V3.75ZM9.37813 15.3125H10.6281V11.875H9.37813V15.3125ZM9.37813 8.125H10.6281V4.6875H9.37813V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fireworksIcon = createIcon("fireworks", iconDefinition337);

// src/noticons/src/firstAid/default.icon.tsx
import { jsxDEV as jsxDEV340, Fragment as Fragment338 } from "react/jsx-dev-runtime";
var iconDefinition338 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV340(Fragment338, {
    children: /* @__PURE__ */ jsxDEV340("path", {
      d: "M17.5 7.8125V12.1875H12.1875V17.5H7.8125V12.1875H2.5V7.8125H7.8125V2.5H12.1875V7.8125H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var firstAidIcon = createIcon("firstAid", iconDefinition338);

// src/noticons/src/firstAidKit/default.icon.tsx
import { jsxDEV as jsxDEV341, Fragment as Fragment339 } from "react/jsx-dev-runtime";
var iconDefinition339 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV341(Fragment339, {
    children: /* @__PURE__ */ jsxDEV341("path", {
      d: "M15 6.25H13.75V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V6.25H5C3.4625 6.25 2.5 7.2125 2.5 8.75V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75C17.5 7.2125 16.5375 6.25 15 6.25ZM8.125 5C8.125 4.49063 8.24062 4.375 8.75 4.375H11.25C11.7594 4.375 11.875 4.49063 11.875 5V6.25H8.125V5ZM13.4375 12.5H10.9375V15H9.0625V12.5H6.5625V10.625H9.0625V8.125H10.9375V10.625H13.4375V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var firstAidKitIcon = createIcon("firstAidKit", iconDefinition339);

// src/noticons/src/fish/default.icon.tsx
import { jsxDEV as jsxDEV342, Fragment as Fragment340 } from "react/jsx-dev-runtime";
var iconDefinition340 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV342(Fragment340, {
    children: /* @__PURE__ */ jsxDEV342("path", {
      d: "M11.5625 5C9.0375 5 6.77812 6.025 5.25938 7.6375C4.42188 6.96875 2.975 6.25 0.625 6.25V7.5L2.70937 10L0.625 12.5V13.75C2.975 13.75 4.42188 13.0281 5.25938 12.3625C6.77812 13.975 9.0375 15 11.5625 15C15.1687 15 18.2375 12.9125 19.375 10C18.2375 7.0875 15.1687 5 11.5625 5ZM13.75 10.625C13.0594 10.625 12.5 10.0656 12.5 9.375C12.5 8.68438 13.0594 8.125 13.75 8.125C14.4406 8.125 15 8.68438 15 9.375C15 10.0656 14.4406 10.625 13.75 10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fishIcon = createIcon("fish", iconDefinition340);

// src/noticons/src/flag/default.icon.tsx
import { jsxDEV as jsxDEV343, Fragment as Fragment341 } from "react/jsx-dev-runtime";
var iconDefinition341 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV343(Fragment341, {
    children: /* @__PURE__ */ jsxDEV343("path", {
      d: "M2.5 1.875H4.375V18.125H2.5V1.875ZM5.625 3.125V14.375H16.875V3.125H5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flagIcon = createIcon("flag", iconDefinition341);

// src/noticons/src/flagCheckered/default.icon.tsx
import { jsxDEV as jsxDEV344, Fragment as Fragment342 } from "react/jsx-dev-runtime";
var iconDefinition342 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV344(Fragment342, {
    children: /* @__PURE__ */ jsxDEV344("path", {
      d: "M2.5 1.875H4.375V18.125H2.5V1.875ZM16.875 3.125V14.375H5.625V3.125H16.875ZM9.375 7.5H6.875V10H9.375V7.5ZM12.5 10.625H10V13.125H12.5V10.625ZM12.5 4.375H10V6.875H12.5V4.375ZM15.625 7.5H13.125V10H15.625V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flagCheckeredIcon = createIcon("flagCheckered", iconDefinition342);

// src/noticons/src/flagPennant/default.icon.tsx
import { jsxDEV as jsxDEV345, Fragment as Fragment343 } from "react/jsx-dev-runtime";
var iconDefinition343 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV345(Fragment343, {
    children: /* @__PURE__ */ jsxDEV345("path", {
      d: "M2.5 1.875H4.375V18.125H2.5V1.875ZM6.875 3.125H5.625V14.375H6.875L16.875 9.375V8.125L6.875 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flagPennantIcon = createIcon("flagPennant", iconDefinition343);

// src/noticons/src/flagSwallowtail/default.icon.tsx
import { jsxDEV as jsxDEV346, Fragment as Fragment344 } from "react/jsx-dev-runtime";
var iconDefinition344 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV346(Fragment344, {
    children: /* @__PURE__ */ jsxDEV346("path", {
      d: "M16.875 4.0625L13.75 8.75L16.875 13.4375V14.375H5.625V3.125H16.875V4.0625ZM2.5 18.125H4.375V1.875H2.5V18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flagSwallowtailIcon = createIcon("flagSwallowtail", iconDefinition344);

// src/noticons/src/flash/default.icon.tsx
import { jsxDEV as jsxDEV347, Fragment as Fragment345 } from "react/jsx-dev-runtime";
var iconDefinition345 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV347(Fragment345, {
    children: /* @__PURE__ */ jsxDEV347("path", {
      d: "M16.25 8.125V10L11.25 17.5H9.375V11.875H3.75V10L8.75 2.5H10.625V8.125H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flashIcon = createIcon("flash", iconDefinition345);

// src/noticons/src/flashlight/default.icon.tsx
import { jsxDEV as jsxDEV348, Fragment as Fragment346 } from "react/jsx-dev-runtime";
var iconDefinition346 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV348(Fragment346, {
    children: /* @__PURE__ */ jsxDEV348("path", {
      d: "M9.375 5.625L14.375 10.625L11.875 13.125H9.52812L4.52812 18.125L1.875 15.4719L6.875 10.4719V8.125L9.375 5.625ZM13.125 1.02187L11.9406 0.625L10.625 4.56875L11.8094 4.96563L13.125 1.02187ZM18.9781 6.875L15.0344 8.19062L15.4313 9.375L19.375 8.05938L18.9781 6.875ZM17.5 3.38438L16.6156 2.5L13.4375 5.67812L14.3219 6.5625L17.5 3.38438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flashlightIcon = createIcon("flashlight", iconDefinition346);

// src/noticons/src/flatware/default.icon.tsx
import { jsxDEV as jsxDEV349, Fragment as Fragment347 } from "react/jsx-dev-runtime";
var iconDefinition347 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV349(Fragment347, {
    children: /* @__PURE__ */ jsxDEV349("path", {
      d: "M5.625 2.5H6.875V7.1875C6.875 8.58437 6.17812 9.55313 5 9.87813V17.5H3.125V9.87813C1.94687 9.55313 1.25 8.58437 1.25 7.1875V2.5H2.5V7.1875H3.4375V2.5H4.6875V7.1875H5.625V2.5ZM10.625 2.5C9.06563 2.5 8.125 4.43438 8.125 6.875C8.125 8.4875 8.7 9.48125 9.6875 9.84375V17.5H11.5625V9.84375C12.55 9.48125 13.125 8.49062 13.125 6.875C13.125 4.43438 12.1844 2.5 10.625 2.5ZM14.375 9.35938V9.98438H16.25V17.5H18.125V2.5C15.7656 2.5 14.375 4.29688 14.375 9.35938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var flatwareIcon = createIcon("flatware", iconDefinition347);

// src/noticons/src/fleurDeLis/default.icon.tsx
import { jsxDEV as jsxDEV350, Fragment as Fragment348 } from "react/jsx-dev-runtime";
var iconDefinition348 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV350(Fragment348, {
    children: /* @__PURE__ */ jsxDEV350("path", {
      d: "M18.125 10.7812C18.125 12.2844 17.3062 13.4375 15.9375 13.4375C15.9375 11.9906 15.2375 10.9375 13.75 10.9375C12.6625 10.9375 11.9094 11.5188 11.6562 12.5H13.125V13.75H11.5969C11.7844 15.0625 12.7875 15.625 14.375 15.625V16.875H11.875L10 18.75L8.125 16.875H5.625V15.625C7.2125 15.625 8.21562 15.0625 8.40312 13.75H6.875V12.5H8.34375C8.09063 11.5188 7.3375 10.9375 6.25 10.9375C4.7625 10.9375 4.0625 11.9906 4.0625 13.4375C2.69375 13.4375 1.875 12.2844 1.875 10.7812C1.875 8.8 3.25937 7.5 5.3125 7.5C6.38125 7.5 7.225 7.97188 7.85312 8.70938L8.28438 8.27812C7.84688 7.38125 7.5 6.53437 7.5 5.75C7.5 4.24687 8.29375 2.9 10 1.25C11.7063 2.9 12.5 4.24375 12.5 5.75C12.5 6.53437 12.1531 7.38438 11.7156 8.27812L12.1469 8.70938C12.775 7.975 13.6187 7.5 14.6875 7.5C16.7406 7.5 18.125 8.8 18.125 10.7812Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fleurDeLisIcon = createIcon("fleurDeLis", iconDefinition348);

// src/noticons/src/flood/default.icon.tsx
import { jsxDEV as jsxDEV351, Fragment as Fragment349 } from "react/jsx-dev-runtime";
var iconDefinition349 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV351(Fragment349, {
    children: /* @__PURE__ */ jsxDEV351("path", {
      d: "M13.75 16.25C14.9312 16.25 15.6594 15 17.5 15V16.875C16.3188 16.875 15.5906 18.125 13.75 18.125C11.9094 18.125 11.2063 16.875 10 16.875C8.79375 16.875 8.09062 18.125 6.25 18.125C4.40938 18.125 3.70625 16.875 2.5 16.875V15C4.36562 15 5.04375 16.25 6.25 16.25C7.45625 16.25 8.15938 15 10 15C11.8406 15 12.5437 16.25 13.75 16.25ZM15.3125 7.1875V2.5H12.8125V4.6875L10 1.875L2.5 9.375V10.625H4.6875V14.25C4.9625 14.3812 5.20625 14.5187 5.42188 14.6406C5.82188 14.8687 6.05625 15 6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.44375 14.4344 7.8875 14.1844 8.4375 14.0031V11.875H11.5625V14C12.1156 14.1812 12.5562 14.4312 12.9219 14.6406C13.3219 14.8687 13.5562 15 13.75 15C13.9438 15 14.225 14.8406 14.5781 14.6406C14.7938 14.5187 15.0375 14.3813 15.3125 14.2531V10.625H17.5V9.375L15.3125 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var floodIcon = createIcon("flood", iconDefinition349);

// src/noticons/src/fog/default.icon.tsx
import { jsxDEV as jsxDEV352, Fragment as Fragment350 } from "react/jsx-dev-runtime";
var iconDefinition350 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV352(Fragment350, {
    children: /* @__PURE__ */ jsxDEV352("path", {
      d: "M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM5.3125 13.75H14.6875V12.5H5.3125V13.75ZM3.75 16.25H13.125V15H3.75V16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fogIcon = createIcon("fog", iconDefinition350);

// src/noticons/src/folder/default.icon.tsx
import { jsxDEV as jsxDEV353, Fragment as Fragment351 } from "react/jsx-dev-runtime";
var iconDefinition351 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV353(Fragment351, {
    children: /* @__PURE__ */ jsxDEV353("path", {
      d: "M17.5 5V7.5H2.5V3.125H6.4875C7.43438 3.125 8.08125 3.39062 8.75 4.0625C9.42188 4.73438 10.0656 5 11.0125 5H17.5ZM2.5 14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75H2.5V14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var folderIcon = createIcon("folder", iconDefinition351);

// src/noticons/src/follow/default.icon.tsx
import { jsxDEV as jsxDEV354, Fragment as Fragment352 } from "react/jsx-dev-runtime";
var iconDefinition352 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV354(Fragment352, {
    children: /* @__PURE__ */ jsxDEV354("path", {
      d: "M3.125 6.25C3.125 4.70625 4.08125 3.75 5.625 3.75C7.16875 3.75 8.125 4.70625 8.125 6.25C8.125 7.79375 7.16875 8.75 5.625 8.75C4.08125 8.75 3.125 7.79375 3.125 6.25ZM5.625 10C2.54063 10 0.625 11.9156 0.625 15H10.625C10.625 11.9156 8.70938 10 5.625 10ZM15.9375 9.0625V5.9375H14.0625V9.0625H10.9375V10.9375H14.0625V14.0625H15.9375V10.9375H19.0625V9.0625H15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var followIcon = createIcon("follow", iconDefinition352);

// src/noticons/src/following/default.icon.tsx
import { jsxDEV as jsxDEV355, Fragment as Fragment353 } from "react/jsx-dev-runtime";
var iconDefinition353 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV355(Fragment353, {
    children: /* @__PURE__ */ jsxDEV355("path", {
      d: "M19.6875 8.2L14.0625 13.825L10.625 10.3875L11.95 9.0625L14.0625 11.175L18.3625 6.875L19.6875 8.2ZM5.625 8.75C7.16875 8.75 8.125 7.79375 8.125 6.25C8.125 4.70625 7.16875 3.75 5.625 3.75C4.08125 3.75 3.125 4.70625 3.125 6.25C3.125 7.79375 4.08125 8.75 5.625 8.75ZM5.625 10C2.54063 10 0.625 11.9156 0.625 15H10.625C10.625 11.9156 8.70938 10 5.625 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var followingIcon = createIcon("following", iconDefinition353);

// src/noticons/src/font/default.icon.tsx
import { jsxDEV as jsxDEV356, Fragment as Fragment354 } from "react/jsx-dev-runtime";
var iconDefinition354 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV356(Fragment354, {
    children: [
      /* @__PURE__ */ jsxDEV356("path", {
        d: "M4.96259 4.44653H7.70001L11.5323 15.5535H9.54884L8.68625 13.0535H3.97632L3.11372 15.5535H1.13025L4.96259 4.44653ZM4.62327 11.1785H8.0393L6.36349 6.32153H6.29911L4.62327 11.1785Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV356("path", {
        d: "M16.9947 9.07927L17.19 8.6133H18.8697V15.5535H17.19L16.9947 14.757L16.9994 14.7486C16.4663 15.2582 15.7667 15.5535 14.9634 15.5535C13.1384 15.5535 11.6822 14.0399 11.6822 11.9181C11.6822 9.79646 13.1384 8.28281 14.9634 8.28281C15.7634 8.28281 16.4603 8.57367 16.9947 9.07927ZM13.5572 11.9148C13.5572 13.0595 14.2722 13.875 15.2759 13.875C16.2797 13.875 16.9947 13.0595 16.9947 11.9148C16.9947 10.7701 16.2797 9.95469 15.2759 9.95469C14.2722 9.95469 13.5572 10.7701 13.5572 11.9148Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var fontIcon = createIcon("font", iconDefinition354);

// src/noticons/src/foodAndDrink/default.icon.tsx
import { jsxDEV as jsxDEV357, Fragment as Fragment355 } from "react/jsx-dev-runtime";
var iconDefinition355 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV357(Fragment355, {
    children: /* @__PURE__ */ jsxDEV357("path", {
      d: "M10 10.625C10 8.3125 11.675 6.875 14.375 6.875C17.075 6.875 18.75 8.3125 18.75 10.625H10ZM18.75 11.875H10C9.61563 11.875 9.375 12.1156 9.375 12.5V13.125C9.375 13.5094 9.61563 13.75 10 13.75H18.75C19.1344 13.75 19.375 13.5094 19.375 13.125V12.5C19.375 12.1156 19.1344 11.875 18.75 11.875ZM10 15.625C10 16.3969 10.4781 16.875 11.25 16.875H17.5C18.2719 16.875 18.75 16.3969 18.75 15.625V15H10V15.625ZM10 6.875V5H6.88125L7.18125 1.40625L5.3125 1.25L5 5H0V6.875H1.40625L2.24062 16.875H7.7625L8.59688 6.875H10.0031H10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var foodAndDrinkIcon = createIcon("foodAndDrink", iconDefinition355);

// src/noticons/src/football/default.icon.tsx
import { jsxDEV as jsxDEV358, Fragment as Fragment356 } from "react/jsx-dev-runtime";
var iconDefinition356 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV358(Fragment356, {
    children: /* @__PURE__ */ jsxDEV358("path", {
      d: "M17.0156 2.98438C15.8594 2.63438 15.0188 2.5 13.75 2.5C6.80938 2.5 2.5 6.80938 2.5 13.75C2.5 15.0188 2.63438 15.8625 2.98438 17.0156C4.14063 17.3656 4.98125 17.5 6.25 17.5C13.1906 17.5 17.5 13.1906 17.5 6.25C17.5 4.98125 17.3656 4.1375 17.0156 2.98438ZM13.3844 7.5L14.375 8.49062L13.4906 9.375L12.5 8.38438L10.8844 10L11.875 10.9906L10.9906 11.875L10 10.8844L8.38438 12.5L9.375 13.4906L8.49062 14.375L7.5 13.3844L5.88438 15L5 14.1156L6.61562 12.5L5.625 11.5094L6.50938 10.625L7.5 11.6156L9.11562 10L8.125 9.00938L9.00938 8.125L10 9.11562L11.6156 7.5L10.625 6.50938L11.5094 5.625L12.5 6.61562L14.1156 5L15 5.88438L13.3844 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var footballIcon = createIcon("football", iconDefinition356);

// src/noticons/src/forestFire/default.icon.tsx
import { jsxDEV as jsxDEV359, Fragment as Fragment357 } from "react/jsx-dev-runtime";
var iconDefinition357 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV359(Fragment357, {
    children: /* @__PURE__ */ jsxDEV359("path", {
      d: "M6.875 10.625C6.875 12.4468 7.5875 14.1062 8.75 15.3375V17.5H6.25V14.9343C4.18125 14.7406 2.20312 14.0906 0.625 13.0343L3.7125 9.94683C3.05313 9.69995 2.43438 9.39058 1.875 9.01558L5.01562 5.87495C4.33125 5.66558 3.6875 5.37183 3.125 4.99683L6.875 1.24683H8.125L11.0687 4.19058C9.39687 5.2437 8.28125 7.09995 8.28125 9.21558C8.28125 9.2687 8.28125 9.3187 8.28125 9.37183H6.87187V10.6218L6.875 10.625ZM19.375 10.625C19.375 13.7312 16.8563 16.25 13.75 16.25C10.6438 16.25 8.125 13.7312 8.125 10.625H9.74687C9.60625 10.1812 9.53125 9.70933 9.53125 9.2187C9.53125 6.6312 11.6313 4.5312 14.2188 4.5312V9.05933L17.4969 6.87495C18.6375 7.7312 19.375 9.09058 19.375 10.625ZM15.625 12.9687C15.625 12.5843 15.5094 12.2249 15.3094 11.9281L13.75 12.9687V11.0937C12.7156 11.0937 11.875 11.9343 11.875 12.9687C11.875 14.0031 12.7156 14.8437 13.75 14.8437C14.7844 14.8437 15.625 14.0031 15.625 12.9687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var forestFireIcon = createIcon("forestFire", iconDefinition357);

// src/noticons/src/fork/default.icon.tsx
import { jsxDEV as jsxDEV360, Fragment as Fragment358 } from "react/jsx-dev-runtime";
var iconDefinition358 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV360(Fragment358, {
    children: /* @__PURE__ */ jsxDEV360("path", {
      d: "M12.8125 2.5V7.1875C12.8125 8.58437 12.1156 9.55313 10.9375 9.87813V17.5H9.0625V9.87813C7.88437 9.55313 7.1875 8.58437 7.1875 7.1875V2.5H8.4375V7.1875H9.375V2.5H10.625V7.1875H11.5625V2.5H12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var forkIcon = createIcon("fork", iconDefinition358);

// src/noticons/src/forkAndKnife/default.icon.tsx
import { jsxDEV as jsxDEV361, Fragment as Fragment359 } from "react/jsx-dev-runtime";
var iconDefinition359 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV361(Fragment359, {
    children: /* @__PURE__ */ jsxDEV361("path", {
      d: "M8.75 2.5H10V7.1875C10 8.58437 9.30312 9.55313 8.125 9.87813V17.5H6.25V9.87813C5.07187 9.55313 4.375 8.58437 4.375 7.1875V2.5H5.625V7.1875H6.5625V2.5H7.8125V7.1875H8.75V2.5ZM11.25 9.35938V9.98438H13.125V17.5H15V2.5C12.6406 2.5 11.25 4.29688 11.25 9.35938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var forkAndKnifeIcon = createIcon("forkAndKnife", iconDefinition359);

// src/noticons/src/formula/default.icon.tsx
import { jsxDEV as jsxDEV362, Fragment as Fragment360 } from "react/jsx-dev-runtime";
var iconDefinition360 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV362(Fragment360, {
    children: /* @__PURE__ */ jsxDEV362("path", {
      d: "M5.375 16.6875H14.625V14.8125H8.00184L13.1533 10L8.00184 5.1875H14.625V3.3125H5.375V5.2994L10.4067 10L5.375 14.7006V16.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var formulaIcon = createIcon("formula", iconDefinition360);

// src/noticons/src/forward/default.icon.tsx
import { jsxDEV as jsxDEV363, Fragment as Fragment361 } from "react/jsx-dev-runtime";
var iconDefinition361 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV363(Fragment361, {
    children: /* @__PURE__ */ jsxDEV363("path", {
      d: "M17.5 10L10.625 16.875H9.45V12.5H2.5V7.5H9.45V3.125H10.625L17.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var forwardIcon = createIcon("forward", iconDefinition361);

// src/noticons/src/fragile/default.icon.tsx
import { jsxDEV as jsxDEV364, Fragment as Fragment362 } from "react/jsx-dev-runtime";
var iconDefinition362 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV364(Fragment362, {
    children: /* @__PURE__ */ jsxDEV364("path", {
      d: "M15.625 8.75C15.625 11.2125 14.0594 12.8188 10.9375 13.0813V15.625H13.4375V17.5H6.5625V15.625H9.0625V13.0813C5.94063 12.8188 4.375 11.2125 4.375 8.75C4.375 8.42812 4.41563 8.10938 4.49375 7.79688L5.81875 2.5H9.3L8.12813 4.84375L10.6687 7.38437L9.64062 9.44062L10.7594 10L12.1906 7.1375L9.65 4.59687L10.7 2.5H14.1875L15.5125 7.79688C15.5906 8.10938 15.6313 8.42812 15.6313 8.75H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fragileIcon = createIcon("fragile", iconDefinition362);

// src/noticons/src/friends/default.icon.tsx
import { jsxDEV as jsxDEV365, Fragment as Fragment363 } from "react/jsx-dev-runtime";
var iconDefinition363 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV365(Fragment363, {
    children: /* @__PURE__ */ jsxDEV365("path", {
      d: "M3.75 6.25C3.75 4.70625 4.70625 3.75 6.25 3.75C7.79375 3.75 8.75 4.70625 8.75 6.25C8.75 7.79375 7.79375 8.75 6.25 8.75C4.70625 8.75 3.75 7.79375 3.75 6.25ZM13.75 8.75C15.2937 8.75 16.25 7.79375 16.25 6.25C16.25 4.70625 15.2937 3.75 13.75 3.75C12.2063 3.75 11.25 4.70625 11.25 6.25C11.25 7.79375 12.2063 8.75 13.75 8.75ZM6.25 10C3.16563 10 1.25 11.9156 1.25 15H11.25C11.25 11.9156 9.33438 10 6.25 10ZM13.75 10C12.6781 10 11.75 10.2375 10.9937 10.6687C11.9563 11.7437 12.5 13.2219 12.5 15H18.75C18.75 11.9156 16.8344 10 13.75 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var friendsIcon = createIcon("friends", iconDefinition363);

// src/noticons/src/fryingPan/default.icon.tsx
import { jsxDEV as jsxDEV366, Fragment as Fragment364 } from "react/jsx-dev-runtime";
var iconDefinition364 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV366(Fragment364, {
    children: /* @__PURE__ */ jsxDEV366("path", {
      d: "M11.25 2.5C7.79688 2.5 5.00001 5.29688 5.00001 8.75C5.00001 9.79375 5.25938 10.775 5.70938 11.6375L3.11251 14.2344C2.29376 15.0531 2.29376 16.0688 3.11251 16.8875C3.93126 17.7063 4.94688 17.7063 5.76563 16.8875L8.36251 14.2906C9.22813 14.7406 10.2094 15 11.25 15C14.7031 15 17.5 12.2031 17.5 8.75C17.5 5.29688 14.7031 2.5 11.25 2.5ZM15 10.625C15 11.6594 14.1594 12.5 13.125 12.5C12.0906 12.5 12.0313 11.875 11.25 11.875C10.4688 11.875 10.4094 12.5 9.37501 12.5C8.34063 12.5 7.50001 11.6594 7.50001 10.625C7.50001 9.59062 8.12501 9.53125 8.12501 8.75C8.12501 7.96875 7.50001 7.90938 7.50001 6.875C7.50001 5.84063 8.34063 5 9.37501 5C10.4094 5 10.4688 5.625 11.25 5.625C12.0313 5.625 12.0906 5 13.125 5C14.1594 5 15 5.84063 15 6.875C15 7.90938 14.375 7.96875 14.375 8.75C14.375 9.53125 15 9.59062 15 10.625ZM12.8125 8.75C12.8125 9.6125 12.1125 10.3125 11.25 10.3125C10.3875 10.3125 9.68751 9.6125 9.68751 8.75C9.68751 7.8875 10.3875 7.1875 11.25 7.1875C12.1125 7.1875 12.8125 7.8875 12.8125 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fryingPanIcon = createIcon("fryingPan", iconDefinition364);

// src/noticons/src/fuel/default.icon.tsx
import { jsxDEV as jsxDEV367, Fragment as Fragment365 } from "react/jsx-dev-runtime";
var iconDefinition365 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV367(Fragment365, {
    children: /* @__PURE__ */ jsxDEV367("path", {
      d: "M15.7 2.5L14.375 3.825L15.8469 5.29688C15.7063 5.60938 15.625 5.95937 15.625 6.325C15.625 7.49062 16.4219 8.46562 17.5 8.74375V12.1875C17.5 12.8281 17.2031 13.125 16.5625 13.125C15.9219 13.125 15.625 12.8281 15.625 12.1875V10.9375C15.625 9.25625 14.4937 8.125 12.8125 8.125H11.875V2.5H3.125V15H1.25V16.875H13.75V15H11.875V10H12.8125C13.4531 10 13.75 10.2969 13.75 10.9375V12.1875C13.75 13.8687 14.8813 15 16.5625 15C18.2437 15 19.375 13.8687 19.375 12.1875V6.175L15.7 2.5ZM5 4.375H10V8.125H5V4.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var fuelIcon = createIcon("fuel", iconDefinition365);

// src/noticons/src/gamePawn/default.icon.tsx
import { jsxDEV as jsxDEV368, Fragment as Fragment366 } from "react/jsx-dev-runtime";
var iconDefinition366 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV368(Fragment366, {
    children: /* @__PURE__ */ jsxDEV368("path", {
      d: "M16.25 15.625V17.5H3.75V15.625C5.20938 15.625 6.16875 14.9344 6.62812 13.55L8.38125 8.29375C7.47812 7.74688 6.875 6.75625 6.875 5.625C6.875 3.9 8.275 2.5 10 2.5C11.725 2.5 13.125 3.9 13.125 5.625C13.125 6.75625 12.5219 7.74688 11.6188 8.29375L13.3719 13.55C13.8344 14.9344 14.7906 15.625 16.25 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gamePawnIcon = createIcon("gamePawn", iconDefinition366);

// src/noticons/src/garlic/default.icon.tsx
import { jsxDEV as jsxDEV369, Fragment as Fragment367 } from "react/jsx-dev-runtime";
var iconDefinition367 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV369(Fragment367, {
    children: /* @__PURE__ */ jsxDEV369("path", {
      d: "M11.25 3.75V2.5H8.75V3.75C8.75 6.875 2.5 7.08437 2.5 11.875C2.5 14.1875 3.9375 15.625 6.25 15.625H6.64375C7.21875 16.8125 8.4 17.5 10 17.5C11.6 17.5 12.7781 16.8125 13.3563 15.625H13.75C16.0625 15.625 17.5 14.1875 17.5 11.875C17.5 7.08437 11.25 6.875 11.25 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var garlicIcon = createIcon("garlic", iconDefinition367);

// src/noticons/src/gavel/default.icon.tsx
import { jsxDEV as jsxDEV370, Fragment as Fragment368 } from "react/jsx-dev-runtime";
var iconDefinition368 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV370(Fragment368, {
    children: /* @__PURE__ */ jsxDEV370("path", {
      d: "M9.85625 11.1063L3.4625 17.5L1.25313 15.2906L7.64688 8.89687L7.50313 8.75313C7.12813 8.37813 7.03438 7.975 7.2 7.475L7.39688 6.88125L6.95625 6.44063L6.3625 6.6375C5.85938 6.80625 5.45625 6.70938 5.08438 6.33438L4.375 5.625L9.375 0.625L10.0844 1.33438C10.4594 1.70938 10.5531 2.1125 10.3875 2.6125L10.1906 3.20625L10.6313 3.64687L11.225 3.45C11.7281 3.28125 12.1313 3.37812 12.5031 3.75313L15 6.25C15.375 6.625 15.4688 7.02812 15.3031 7.52812L15.1063 8.12187L15.5469 8.5625L16.1406 8.36563C16.6438 8.19688 17.0469 8.29375 17.4188 8.66875L18.1281 9.37813L13.1281 14.3781L12.4188 13.6688C12.0438 13.2938 11.95 12.8906 12.1156 12.3906L12.3125 11.7969L11.8719 11.3562L11.2781 11.5531C10.775 11.7219 10.3719 11.625 10 11.25L9.85625 11.1063ZM9.375 17.5H18.125V15.625H9.375V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gavelIcon = createIcon("gavel", iconDefinition368);

// src/noticons/src/gear/default.icon.tsx
import { jsxDEV as jsxDEV371, Fragment as Fragment369 } from "react/jsx-dev-runtime";
var iconDefinition369 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV371(Fragment369, {
    children: /* @__PURE__ */ jsxDEV371("path", {
      d: "M18.125 10.625V9.37498L16.1437 8.88123C16.0812 8.54373 15.9937 8.2156 15.8812 7.89998L17.35 6.48123L16.725 5.39998L14.7625 5.96248C14.5437 5.7031 14.3031 5.46248 14.0437 5.24373L14.6062 3.28123L13.525 2.65623L12.1062 4.12498C11.7906 4.01248 11.4625 3.92185 11.125 3.86248L10.6312 1.88123H9.38125L8.8875 3.86248C8.55 3.92498 8.22187 4.01248 7.90625 4.12498L6.4875 2.65623L5.40625 3.28123L5.96875 5.24373C5.70937 5.46248 5.46875 5.7031 5.25 5.96248L3.2875 5.39998L2.6625 6.48123L4.13125 7.89998C4.01875 8.2156 3.92812 8.54373 3.86875 8.88123L1.8875 9.37498V10.625L3.86875 11.1187C3.93125 11.4562 4.01875 11.7844 4.13125 12.1L2.6625 13.5187L3.2875 14.6L5.25 14.0375C5.46875 14.2969 5.70937 14.5375 5.96875 14.7562L5.40625 16.7187L6.4875 17.3437L7.90625 15.875C8.22187 15.9875 8.55 16.0781 8.8875 16.1375L9.38125 18.1187H10.6312L11.125 16.1375C11.4625 16.075 11.7906 15.9875 12.1062 15.875L13.525 17.3437L14.6062 16.7187L14.0437 14.7562C14.3031 14.5375 14.5437 14.2969 14.7625 14.0375L16.725 14.6L17.35 13.5187L15.8812 12.1C15.9937 11.7844 16.0844 11.4562 16.1437 11.1187L18.125 10.625ZM5.625 9.99998C5.625 8.71873 6.17812 7.57185 7.05312 6.77185L8.91562 9.99998L7.05312 13.2281C6.17812 12.4281 5.625 11.2812 5.625 9.99998ZM10.5406 9.06248L8.675 5.83123C9.09375 5.69998 9.5375 5.62498 10 5.62498C12.0937 5.62498 13.8437 7.09685 14.2719 9.06248H10.5406ZM10.5406 10.9375H14.2719C13.8437 12.9031 12.0937 14.375 10 14.375C9.5375 14.375 9.09375 14.3031 8.675 14.1687L10.5406 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gearIcon = createIcon("gear", iconDefinition369);

// src/noticons/src/gears/default.icon.tsx
import { jsxDEV as jsxDEV372, Fragment as Fragment370 } from "react/jsx-dev-runtime";
var iconDefinition370 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV372(Fragment370, {
    children: /* @__PURE__ */ jsxDEV372("path", {
      d: "M17.4656 5.76249L18.6094 4.91561L18.1312 3.75936L16.7218 3.96874C16.5187 3.70624 16.2875 3.47499 16.0312 3.27811L16.2406 1.87186L15.0844 1.39374L14.2375 2.53749C13.9156 2.49374 13.5875 2.49374 13.2593 2.53749L12.4125 1.39374L11.2562 1.87186L11.4656 3.28124C11.2031 3.48124 10.9719 3.71561 10.775 3.97186L9.36873 3.76249L8.8906 4.91874L10.0344 5.76561C9.9906 6.08749 9.9906 6.41561 10.0344 6.74374L8.8906 7.59061L9.36873 8.74686L10.7781 8.53749C10.9781 8.79999 11.2125 9.03124 11.4687 9.22811L11.2593 10.6344L12.4156 11.1125L13.2625 9.96874C13.5843 10.0125 13.9125 10.0125 14.2406 9.96874L15.0875 11.1125L16.2437 10.6344L16.0344 9.22499C16.2969 9.02499 16.5281 8.79061 16.725 8.53436L18.1312 8.74374L18.6094 7.58749L17.4656 6.74061C17.5093 6.41874 17.5093 6.09061 17.4656 5.76249ZM13.75 8.12499C12.7156 8.12499 11.875 7.28436 11.875 6.24999C11.875 5.21561 12.7156 4.37499 13.75 4.37499C14.7844 4.37499 15.625 5.21561 15.625 6.24999C15.625 7.28436 14.7844 8.12499 13.75 8.12499ZM9.49373 11.8781L10.225 10.6562L9.3406 9.77186L8.11873 10.5031C7.83748 10.3406 7.53435 10.2156 7.2156 10.1312L6.86873 8.74999H5.61873L5.27185 10.1312C4.9531 10.2156 4.64998 10.3437 4.36873 10.5031L3.14685 9.77186L2.26248 10.6562L2.99373 11.8781C2.83123 12.1594 2.70623 12.4625 2.62185 12.7812L1.2406 13.1281V14.3781L2.62185 14.725C2.70623 15.0437 2.83435 15.3469 2.99373 15.6281L2.26248 16.85L3.14685 17.7344L4.36873 17.0031C4.64998 17.1656 4.9531 17.2906 5.27185 17.375L5.61873 18.7562H6.86873L7.2156 17.375C7.53435 17.2906 7.83748 17.1625 8.11873 17.0031L9.3406 17.7344L10.225 16.85L9.49373 15.6281C9.65623 15.3469 9.78123 15.0437 9.8656 14.725L11.2469 14.3781V13.1281L9.8656 12.7812C9.78123 12.4625 9.6531 12.1594 9.49373 11.8781ZM6.24998 15.625C5.2156 15.625 4.37498 14.7844 4.37498 13.75C4.37498 12.7156 5.2156 11.875 6.24998 11.875C7.28435 11.875 8.12498 12.7156 8.12498 13.75C8.12498 14.7844 7.28435 15.625 6.24998 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gearsIcon = createIcon("gears", iconDefinition370);

// src/noticons/src/gem/default.icon.tsx
import { jsxDEV as jsxDEV373, Fragment as Fragment371 } from "react/jsx-dev-runtime";
var iconDefinition371 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV373(Fragment371, {
    children: /* @__PURE__ */ jsxDEV373("path", {
      d: "M15.9375 3.75H4.0625L1.25 8.125L10 16.875L18.75 8.125L15.9375 3.75ZM10 5.52188L11.5625 8.125H8.4375L10 5.52188ZM3.4375 8.125L5 5.52188L6.5625 8.125H3.4375ZM10 14.375L7.375 10H12.625L10 14.375ZM15 5.52188L16.5625 8.125H13.4375L15 5.52188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gemIcon = createIcon("gem", iconDefinition371);

// src/noticons/src/gemini/default.icon.tsx
import { jsxDEV as jsxDEV374, Fragment as Fragment372 } from "react/jsx-dev-runtime";
var iconDefinition372 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV374(Fragment372, {
    children: /* @__PURE__ */ jsxDEV374("path", {
      d: "M14.0625 5.44688C16.2 4.925 17.5 4.17812 17.5 4.17812L16.65 2.5C16.65 2.5 13.975 4.0625 10 4.0625C6.025 4.0625 3.35 2.5 3.35 2.5L2.5 4.17812C2.5 4.17812 3.8 4.92813 5.9375 5.44688V14.5531C3.8 15.075 2.5 15.8219 2.5 15.8219L3.35 17.5C3.35 17.5 6.025 15.9375 10 15.9375C13.975 15.9375 16.65 17.5 16.65 17.5L17.5 15.8219C17.5 15.8219 16.2 15.0719 14.0625 14.5531V5.44688ZM7.8125 14.2062V5.79687C8.49375 5.88437 9.225 5.94063 10 5.94063C10.775 5.94063 11.5063 5.8875 12.1875 5.79687V14.2062C11.5063 14.1187 10.775 14.0625 10 14.0625C9.225 14.0625 8.49375 14.1156 7.8125 14.2062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var geminiIcon = createIcon("gemini", iconDefinition372);

// src/noticons/src/geography/default.icon.tsx
import { jsxDEV as jsxDEV375, Fragment as Fragment373 } from "react/jsx-dev-runtime";
var iconDefinition373 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV375(Fragment373, {
    children: /* @__PURE__ */ jsxDEV375("path", {
      d: "M11.25 15.5188C11.8375 15.4188 12.4219 15.25 12.9906 15.0031L13.5625 14.7531L12.5469 12.4188C14.0125 11.5469 14.9969 9.95315 14.9969 8.1219C14.9969 5.3594 12.7594 3.1219 9.99688 3.1219C9.50938 3.1219 9.0375 3.19377 8.59375 3.32502L7.58125 0.993774L7.00938 1.24377C3.21563 2.89377 1.47188 7.31877 3.12188 11.1125C4.16875 13.5219 6.3375 15.0969 8.75 15.5094V16.2469H5V17.4969H15V16.2469H11.25V15.5156V15.5188ZM12.8219 10.5875C12.8094 10.1156 12.7375 9.59065 12.6063 9.0344L13.725 8.5469C13.6375 9.3219 13.3125 10.025 12.825 10.5844L12.8219 10.5875ZM13.6344 7.22502L12.2344 7.8344C12.1625 7.64065 12.0875 7.4469 12.0031 7.25315C11.9188 7.0594 11.8281 6.8719 11.7375 6.68752L13.1375 6.07815C13.3625 6.42502 13.5313 6.81252 13.6344 7.22502ZM12.225 5.11252L11.1094 5.5969C10.7938 5.1219 10.4594 4.71252 10.1219 4.38127C10.9094 4.40627 11.6313 4.67502 12.2219 5.11252H12.225ZM11.4969 11.5625C11.4969 11.5625 11.4938 11.5625 11.4906 11.5656C11.1719 11.7 10.5969 11.1281 10.0031 10.1688L11.4906 9.5219C11.7875 10.6094 11.8125 11.4188 11.4969 11.5625ZM10.5969 7.1844C10.6844 7.36877 10.775 7.55627 10.8594 7.75315C10.9438 7.95002 11.0219 8.14065 11.0969 8.33127L9.40313 9.06877C9.3125 8.8844 9.225 8.6969 9.14063 8.50002C9.05625 8.30315 8.97813 8.11252 8.90313 7.9219L10.5969 7.1844ZM9.875 11.8688C9.0875 11.8438 8.36563 11.575 7.775 11.1375L8.89063 10.6531C9.20625 11.1281 9.54063 11.5375 9.87813 11.8688H9.875ZM8.5 4.68752C8.5 4.68752 8.50313 4.68752 8.50625 4.6844C8.825 4.55002 9.4 5.1219 9.99375 6.08127L8.50625 6.72815C8.20938 5.64065 8.18438 4.83127 8.5 4.68752ZM7.7625 8.41565C7.83438 8.6094 7.90938 8.80315 7.99375 8.9969C8.07813 9.19065 8.16875 9.37815 8.25938 9.56252L6.85938 10.1719C6.63438 9.82502 6.46563 9.43752 6.3625 9.02502L7.7625 8.41565ZM6.275 7.70002C6.3625 6.92502 6.6875 6.2219 7.175 5.66252C7.1875 6.1344 7.25938 6.6594 7.39063 7.21565L6.27188 7.70315L6.275 7.70002ZM4.26875 10.6188C2.97813 7.65315 4.18125 4.21877 6.94688 2.6719L7.45 3.83127C5.98438 4.70315 5 6.2969 5 8.12815C5 10.8906 7.2375 13.1281 10 13.1281C10.4875 13.1281 10.9594 13.0563 11.4031 12.925L11.9063 14.0813C8.8875 15.05 5.55938 13.5875 4.26875 10.6219V10.6188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var geographyIcon = createIcon("geography", iconDefinition373);

// src/noticons/src/ghost/default.icon.tsx
import { jsxDEV as jsxDEV376, Fragment as Fragment374 } from "react/jsx-dev-runtime";
var iconDefinition374 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV376(Fragment374, {
    children: /* @__PURE__ */ jsxDEV376("path", {
      d: "M17.5 5.625C16.7281 5.625 16.25 6.10313 16.25 6.875V7.5C16.25 7.88438 16.0094 8.125 15.625 8.125H14.7906L14.3656 5.575C13.9688 3.19062 12.4156 1.875 10 1.875C7.58437 1.875 6.03125 3.19062 5.63438 5.575L5.20937 8.125H4.375C3.99062 8.125 3.75 7.88438 3.75 7.5V6.875C3.75 6.10313 3.27187 5.625 2.5 5.625C1.72812 5.625 1.25 6.10313 1.25 6.875V7.5C1.25 9.70937 2.55938 11.1125 4.69063 11.2375L3.75 16.875C3.75 16.875 4.23125 17.5 5.9375 17.5C7.64375 17.5 8.29375 16.875 10 16.875C11.7063 16.875 12.3562 17.5 14.0625 17.5C15.7688 17.5 16.25 16.875 16.25 16.875L15.3094 11.2375C17.4406 11.1125 18.75 9.70625 18.75 7.5V6.875C18.75 6.10313 18.2719 5.625 17.5 5.625ZM7.1875 7.5V6.25C7.1875 5.67188 7.54688 5.3125 8.125 5.3125C8.70312 5.3125 9.0625 5.67188 9.0625 6.25V7.5C9.0625 8.07812 8.70312 8.4375 8.125 8.4375C7.54688 8.4375 7.1875 8.07812 7.1875 7.5ZM10 11.875C9.27188 11.875 8.75 11.3531 8.75 10.625C8.75 9.89688 9.27188 9.375 10 9.375C10.7281 9.375 11.25 9.89375 11.25 10.625C11.25 11.3562 10.7281 11.875 10 11.875ZM12.8125 7.5C12.8125 8.07812 12.4531 8.4375 11.875 8.4375C11.2969 8.4375 10.9375 8.07812 10.9375 7.5V6.25C10.9375 5.67188 11.2969 5.3125 11.875 5.3125C12.4531 5.3125 12.8125 5.67188 12.8125 6.25V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ghostIcon = createIcon("ghost", iconDefinition374);

// src/noticons/src/gift/default.icon.tsx
import { jsxDEV as jsxDEV377, Fragment as Fragment375 } from "react/jsx-dev-runtime";
var iconDefinition375 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV377(Fragment375, {
    children: /* @__PURE__ */ jsxDEV377("path", {
      d: "M14.375 5.625V1.875H12.5L10 4.375L7.5 1.875H5.625V5.625H2.5V10H3.75V17.5H16.25V10H17.5V5.625H14.375ZM11.25 15.625H8.75V7.5H11.25V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var giftIcon = createIcon("gift", iconDefinition375);

// src/noticons/src/git/default.icon.tsx
import { jsxDEV as jsxDEV378, Fragment as Fragment376 } from "react/jsx-dev-runtime";
var iconDefinition376 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV378(Fragment376, {
    children: /* @__PURE__ */ jsxDEV378("path", {
      d: "M18.125 9.37501V10.625L10.625 18.125H9.375L1.875 10.625V9.37501L6.74687 4.50314L8.55 6.30626C8.48125 6.48126 8.44063 6.67501 8.44063 6.87501C8.44063 7.51564 8.82812 8.06564 9.37813 8.30626V12.9438C8.82812 13.1844 8.44063 13.7344 8.44063 14.375C8.44063 15.2375 9.14062 15.9375 10.0031 15.9375C10.8656 15.9375 11.5656 15.2375 11.5656 14.375C11.5656 13.7344 11.1781 13.1844 10.6281 12.9438V8.38439L12.3 10.0563C12.2312 10.2313 12.1906 10.425 12.1906 10.625C12.1906 11.4875 12.8906 12.1875 13.7531 12.1875C14.6156 12.1875 15.3156 11.4875 15.3156 10.625C15.3156 9.76251 14.6156 9.06251 13.7531 9.06251C13.5531 9.06251 13.3625 9.10314 13.1844 9.17189L11.4563 7.44376C11.525 7.26876 11.5656 7.07501 11.5656 6.87501C11.5656 6.01251 10.8656 5.31251 10.0031 5.31251C9.80312 5.31251 9.6125 5.35314 9.43438 5.42189L7.63125 3.61876L9.37813 1.87189H10.6281L18.1281 9.37189L18.125 9.37501Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gitIcon = createIcon("git", iconDefinition376);

// src/noticons/src/glasses/default.icon.tsx
import { jsxDEV as jsxDEV379, Fragment as Fragment377 } from "react/jsx-dev-runtime";
var iconDefinition377 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV379(Fragment377, {
    children: /* @__PURE__ */ jsxDEV379("path", {
      d: "M0.625 7.1875V9.0625H1.875L2.22813 11.1844C2.5375 13.0406 3.74375 14.0625 5.625 14.0625C7.50625 14.0625 8.7125 13.0406 9.02188 11.1844L9.27188 9.67812C9.3375 9.28125 9.59688 9.0625 10 9.0625C10.4031 9.0625 10.6625 9.28125 10.7281 9.67812L10.9781 11.1844C11.2875 13.0406 12.4937 14.0625 14.375 14.0625C16.2563 14.0625 17.4625 13.0406 17.7719 11.1844L18.125 9.0625H19.375V7.1875H0.625ZM7.17188 10.8781C7.0125 11.8344 6.59375 12.1875 5.625 12.1875C4.65625 12.1875 4.2375 11.8313 4.07812 10.8781L3.775 9.0625H7.47188L7.16875 10.8781H7.17188ZM15.9219 10.8781C15.7625 11.8344 15.3438 12.1875 14.375 12.1875C13.4062 12.1875 12.9875 11.8313 12.8281 10.8781L12.525 9.0625H16.2219L15.9187 10.8781H15.9219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var glassesIcon = createIcon("glasses", iconDefinition377);

// src/noticons/src/globe/default.icon.tsx
import { jsxDEV as jsxDEV380, Fragment as Fragment378 } from "react/jsx-dev-runtime";
var iconDefinition378 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV380(Fragment378, {
    children: /* @__PURE__ */ jsxDEV380("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.675 6.875H13.1187C12.9719 6.18438 12.7719 5.54063 12.5219 4.97813C13.3906 5.41563 14.1344 6.06875 14.6719 6.875H14.675ZM11.2812 6.875H8.71562C9.30937 4.10625 10.6875 4.10625 11.2812 6.875ZM4.51875 11.25C4.42813 10.8469 4.375 10.4313 4.375 10C4.375 9.56875 4.42813 9.15312 4.51875 8.75H6.6125C6.58125 9.1625 6.5625 9.58125 6.5625 10C6.5625 10.4187 6.57812 10.8375 6.6125 11.25H4.51875ZM5.32188 13.125H6.87813C7.025 13.8156 7.225 14.4594 7.475 15.0219C6.60625 14.5844 5.8625 13.9312 5.325 13.125H5.32188ZM6.87813 6.875H5.32188C5.85938 6.07188 6.60313 5.41875 7.47188 4.97813C7.22187 5.54063 7.025 6.18438 6.875 6.875H6.87813ZM8.71562 13.125H11.2812C10.6875 15.8938 9.30937 15.8938 8.71562 13.125ZM11.525 11.25H8.475C8.45 10.8625 8.4375 10.4469 8.4375 10C8.4375 9.55312 8.45 9.1375 8.475 8.75H11.525C11.55 9.1375 11.5625 9.55312 11.5625 10C11.5625 10.4469 11.55 10.8625 11.525 11.25ZM12.525 15.0219C12.775 14.4594 12.9719 13.8156 13.1219 13.125H14.6781C14.1406 13.9281 13.3969 14.5813 12.5281 15.0219H12.525ZM13.3875 11.25C13.4187 10.8375 13.4375 10.4187 13.4375 10C13.4375 9.58125 13.4219 9.1625 13.3875 8.75H15.4813C15.5719 9.15312 15.625 9.56875 15.625 10C15.625 10.4313 15.5719 10.8469 15.4813 11.25H13.3875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var globeIcon = createIcon("globe", iconDefinition378);

// src/noticons/src/golf/default.icon.tsx
import { jsxDEV as jsxDEV381, Fragment as Fragment379 } from "react/jsx-dev-runtime";
var iconDefinition379 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV381(Fragment379, {
    children: /* @__PURE__ */ jsxDEV381("path", {
      d: "M10.625 11.2719V8.125L15.625 5.625V4.375L10.625 1.875H9.375V11.2719C5.11875 11.4812 2.5 13.8219 2.5 17.5H17.5C17.5 13.8219 14.8813 11.4781 10.625 11.2719ZM10 15.625C8.275 15.625 6.875 14.925 6.875 14.0625C6.875 13.3062 7.95 12.675 9.375 12.5312V14.375H10.625V12.5312C12.05 12.675 13.125 13.3062 13.125 14.0625C13.125 14.925 11.725 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var golfIcon = createIcon("golf", iconDefinition379);

// src/noticons/src/government/default.icon.tsx
import { jsxDEV as jsxDEV382, Fragment as Fragment380 } from "react/jsx-dev-runtime";
var iconDefinition380 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV382(Fragment380, {
    children: /* @__PURE__ */ jsxDEV382("path", {
      d: "M17.5 10.625V8.125H15.5219C15.0906 5.5875 13.3094 3.9875 10.625 3.775V3.125L13.125 1.875V0.625H9.375V3.775C6.69063 3.9875 4.90937 5.5875 4.47812 8.125H2.5V10.625H4.375V14.375H2.5V16.875H17.5V14.375H15.625V10.625H17.5ZM6.875 10.625H8.75V14.375H6.875V10.625ZM13.125 14.375H11.25V10.625H13.125V14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var governmentIcon = createIcon("government", iconDefinition380);

// src/noticons/src/gradebook/default.icon.tsx
import { jsxDEV as jsxDEV383, Fragment as Fragment381 } from "react/jsx-dev-runtime";
var iconDefinition381 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV383(Fragment381, {
    children: /* @__PURE__ */ jsxDEV383("path", {
      d: "M15 5.625V15.625H7.025L5.775 14.375H13.75V2.5H3.125V13.3406C3.125 14.0812 3.33438 14.5844 3.85625 15.1094L5.51562 16.7688C6.04062 17.2937 6.54375 17.5 7.28437 17.5H16.875V5.625H15ZM8.75 6.71875H9.84375V5.625H10.7812V6.71875H11.875V7.65625H10.7812V8.75H9.84375V7.65625H8.75V6.71875ZM4.6875 8.75L5.9375 5H7.1875L8.4375 8.75H7.45L7.25312 8.125H5.875L5.67812 8.75H4.69063H4.6875ZM7.00625 7.34375H6.12188L6.56563 5.94063L7.00938 7.34375H7.00625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gradebookIcon = createIcon("gradebook", iconDefinition381);

// src/noticons/src/graduate/default.icon.tsx
import { jsxDEV as jsxDEV384, Fragment as Fragment382 } from "react/jsx-dev-runtime";
var iconDefinition382 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV384(Fragment382, {
    children: /* @__PURE__ */ jsxDEV384("path", {
      d: "M14.0594 10.6187L15 14.375C15 14.375 12.9937 16.875 8.75 16.875C4.50625 16.875 2.5 14.375 2.5 14.375L3.44063 10.6187L8.75 13.275L14.0594 10.6187ZM16.875 6.5625L8.75 2.5L0.625 6.5625V7.8125L8.75 11.875L15.4344 8.53125L16.8469 14.175L16.5625 15.3094V16.8719H19.0625V15.3094L16.875 6.55937V6.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var graduateIcon = createIcon("graduate", iconDefinition382);

// src/noticons/src/grapes/default.icon.tsx
import { jsxDEV as jsxDEV385, Fragment as Fragment383 } from "react/jsx-dev-runtime";
var iconDefinition383 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV385(Fragment383, {
    children: /* @__PURE__ */ jsxDEV385("path", {
      d: "M17.5 12.1875C17.5 13.3938 16.5188 14.375 15.3125 14.375C14.975 14.375 14.6562 14.2969 14.3687 14.1594C14.3187 15.3219 13.3594 16.25 12.1875 16.25C11.5031 16.25 10.8906 15.9344 10.4906 15.4375C10.1844 16.275 9.38125 16.875 8.4375 16.875C7.75313 16.875 7.14062 16.5594 6.74062 16.0625C6.43437 16.9 5.63125 17.5 4.6875 17.5C3.48125 17.5 2.5 16.5188 2.5 15.3125C2.5 14.3719 3.1 13.5688 3.9375 13.2594C3.44375 12.8594 3.125 12.2469 3.125 11.5625C3.125 10.6219 3.725 9.81875 4.5625 9.50938C4.06875 9.10938 3.75 8.49687 3.75 7.8125C3.75 6.6375 4.68125 5.68125 5.84063 5.63125C5.70313 5.34688 5.625 5.02813 5.625 4.6875C5.625 3.48125 6.60625 2.5 7.8125 2.5C8.9125 2.5 9.82188 3.31562 9.975 4.375C10.3031 4.17813 10.6844 4.0625 11.0938 4.0625C12.0844 4.0625 12.9187 4.72187 13.1906 5.625C13.6094 4.91875 14.0625 3.84687 14.0625 2.5L15.9375 3.125C15.9375 4.6875 14.9625 6.00313 14.2313 6.775C15.2063 6.99375 15.9375 7.86562 15.9375 8.90625C15.9375 9.31563 15.8219 9.69688 15.625 10.025C16.6812 10.1781 17.5 11.0875 17.5 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var grapesIcon = createIcon("grapes", iconDefinition383);

// src/noticons/src/grave/default.icon.tsx
import { jsxDEV as jsxDEV386, Fragment as Fragment384 } from "react/jsx-dev-runtime";
var iconDefinition384 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV386(Fragment384, {
    children: /* @__PURE__ */ jsxDEV386("path", {
      d: "M10 2.5C6.31875 2.5 4.99687 5.625 3.125 5.625V17.5H16.875V5.625C15.0031 5.625 13.6812 2.5 10 2.5ZM10.8344 15.625H9.16563L5.9375 12.3969L6.45937 11.875C7.78125 11.875 8.86562 12.5938 9.375 13.6812V10.5438C8.29688 10.2656 7.5 9.29063 7.5 8.125V5.625H8.125L8.90625 7.1875L9.6875 5.625H10.3125L11.0938 7.1875L11.875 5.625H12.5V8.125C12.5 9.29063 11.7031 10.2656 10.625 10.5438V13.6812C11.1344 12.5938 12.2188 11.875 13.5406 11.875L14.0625 12.3969L10.8344 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var graveIcon = createIcon("grave", iconDefinition384);

// src/noticons/src/grid/default.icon.tsx
import { jsxDEV as jsxDEV387, Fragment as Fragment385 } from "react/jsx-dev-runtime";
var iconDefinition385 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV387(Fragment385, {
    children: /* @__PURE__ */ jsxDEV387("path", {
      d: "M3.125 10.625H9.375V16.875H3.125V10.625ZM3.125 9.375H9.375V3.125H3.125V9.375ZM10.625 16.875H16.875V10.625H10.625V16.875ZM10.625 3.125V9.375H16.875V3.125H10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gridIcon = createIcon("grid", iconDefinition385);

// src/noticons/src/gridDense/default.icon.tsx
import { jsxDEV as jsxDEV388, Fragment as Fragment386 } from "react/jsx-dev-runtime";
var iconDefinition386 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV388(Fragment386, {
    children: /* @__PURE__ */ jsxDEV388("path", {
      d: "M8.125 13.125H11.875V16.875H8.125V13.125ZM3.125 6.875H6.875V3.125H3.125V6.875ZM3.125 16.875H6.875V13.125H3.125V16.875ZM3.125 11.875H6.875V8.125H3.125V11.875ZM13.125 16.875H16.875V13.125H13.125V16.875ZM8.125 11.875H11.875V8.125H8.125V11.875ZM13.125 3.125V6.875H16.875V3.125H13.125ZM13.125 11.875H16.875V8.125H13.125V11.875ZM8.125 6.875H11.875V3.125H8.125V6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gridDenseIcon = createIcon("gridDense", iconDefinition386);

// src/noticons/src/gridWide/default.icon.tsx
import { jsxDEV as jsxDEV389, Fragment as Fragment387 } from "react/jsx-dev-runtime";
var iconDefinition387 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV389(Fragment387, {
    children: /* @__PURE__ */ jsxDEV389("path", {
      d: "M2.5 10.625H9.375V15.625H2.5V10.625ZM2.5 9.375H9.375V4.375H2.5V9.375ZM10.625 15.625H17.5V10.625H10.625V15.625ZM10.625 4.375V9.375H17.5V4.375H10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gridWideIcon = createIcon("gridWide", iconDefinition387);

// src/noticons/src/gridWideSix/default.icon.tsx
import { jsxDEV as jsxDEV390, Fragment as Fragment388 } from "react/jsx-dev-runtime";
var iconDefinition388 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV390(Fragment388, {
    children: /* @__PURE__ */ jsxDEV390("path", {
      d: "M2.5 8.125H9.375V11.875H2.5V8.125ZM2.5 16.875H9.375V13.125H2.5V16.875ZM2.5 6.875H9.375V3.125H2.5V6.875ZM10.625 16.875H17.5V13.125H10.625V16.875ZM10.625 11.875H17.5V8.125H10.625V11.875ZM10.625 3.125V6.875H17.5V3.125H10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gridWideSixIcon = createIcon("gridWideSix", iconDefinition388);

// src/noticons/src/grocery/default.icon.tsx
import { jsxDEV as jsxDEV391, Fragment as Fragment389 } from "react/jsx-dev-runtime";
var iconDefinition389 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV391(Fragment389, {
    children: /* @__PURE__ */ jsxDEV391("path", {
      d: "M19.375 12C19.375 14.4375 17.7656 16.875 16.5906 16.875C15.8687 16.875 15.7156 16.4062 15 16.4062C14.2844 16.4062 14.1313 16.875 13.4094 16.875C12.2344 16.875 10.625 14.4375 10.625 12C10.625 9.5625 11.8375 8.75 13.0125 8.75C13.6031 8.75 14.0656 9.125 14.4375 9.4C14.6594 7.6875 15.4313 6.5625 15.4313 6.5625L16.8375 7.26562C16.8375 7.26562 16.1094 8.03125 15.6781 9.31562C16.0281 9.05312 16.4594 8.75 16.9906 8.75C18.1656 8.75 19.3781 9.5625 19.3781 12H19.375ZM6.25 3.75L9.375 5.3125V16.875H1.25V5.3125L4.375 3.75V1.875H6.25V3.75ZM5.3125 5.37812L3.125 6.47187V7.8125H7.5V6.47187L5.3125 5.37812Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var groceryIcon = createIcon("grocery", iconDefinition389);

// src/noticons/src/groups/default.icon.tsx
import { jsxDEV as jsxDEV392, Fragment as Fragment390 } from "react/jsx-dev-runtime";
var iconDefinition390 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV392(Fragment390, {
    children: /* @__PURE__ */ jsxDEV392("path", {
      d: "M20 15H16.25C16.25 13.4062 15.8125 12.05 15.0281 11.0125C15.3156 10.9625 15.6187 10.9375 15.9375 10.9375C18.4438 10.9375 20 12.4937 20 15ZM4.0625 10C5.4125 10 6.25 9.1625 6.25 7.8125C6.25 6.4625 5.4125 5.625 4.0625 5.625C2.7125 5.625 1.875 6.4625 1.875 7.8125C1.875 9.1625 2.7125 10 4.0625 10ZM15.9375 10C17.2875 10 18.125 9.1625 18.125 7.8125C18.125 6.4625 17.2875 5.625 15.9375 5.625C14.5875 5.625 13.75 6.4625 13.75 7.8125C13.75 9.1625 14.5875 10 15.9375 10ZM10 8.75C11.5437 8.75 12.5 7.79375 12.5 6.25C12.5 4.70625 11.5437 3.75 10 3.75C8.45625 3.75 7.5 4.70625 7.5 6.25C7.5 7.79375 8.45625 8.75 10 8.75ZM10 10C6.91563 10 5 11.9156 5 15H15C15 11.9156 13.0844 10 10 10ZM0 15H3.75C3.75 13.4062 4.1875 12.05 4.97188 11.0125C4.68437 10.9625 4.38125 10.9375 4.0625 10.9375C1.55625 10.9375 0 12.4937 0 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var groupsIcon = createIcon("groups", iconDefinition390);

// src/noticons/src/guitar/default.icon.tsx
import { jsxDEV as jsxDEV393, Fragment as Fragment391 } from "react/jsx-dev-runtime";
var iconDefinition391 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV393(Fragment391, {
    children: /* @__PURE__ */ jsxDEV393("path", {
      d: "M13.4375 12.3438C13.4375 11.9156 14.0625 11.5969 14.0625 10.4688C14.0625 8.94375 12.8313 7.84062 10.9375 7.56562V3.75H11.875V0H8.125V3.75H9.0625V7.56562C7.16875 7.8375 5.9375 8.94375 5.9375 10.4688C5.9375 11.6 6.5625 11.9125 6.5625 12.3438C6.5625 12.9469 5 13.5094 5 15.7812C5 18.2875 7.02812 20 10 20C12.9719 20 15 18.2875 15 15.7812C15 13.5063 13.4375 12.95 13.4375 12.3438ZM10 10.625C10.6906 10.625 11.25 11.1844 11.25 11.875C11.25 12.5656 10.6906 13.125 10 13.125C9.30937 13.125 8.75 12.5656 8.75 11.875C8.75 11.1844 9.30937 10.625 10 10.625ZM11.5625 16.875H8.4375V15.625H11.5625V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var guitarIcon = createIcon("guitar", iconDefinition391);

// src/noticons/src/gym/default.icon.tsx
import { jsxDEV as jsxDEV394, Fragment as Fragment392 } from "react/jsx-dev-runtime";
var iconDefinition392 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV394(Fragment392, {
    children: /* @__PURE__ */ jsxDEV394("path", {
      d: "M18.75 13.75H16.875V15.625H13.75V11.25H6.25V15.625H3.125V13.75H1.25V6.25H3.125V4.375H6.25V8.75H13.75V4.375H16.875V6.25H18.75V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var gymIcon = createIcon("gym", iconDefinition392);

// src/noticons/src/hail/default.icon.tsx
import { jsxDEV as jsxDEV395, Fragment as Fragment393 } from "react/jsx-dev-runtime";
var iconDefinition393 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV395(Fragment393, {
    children: /* @__PURE__ */ jsxDEV395("path", {
      d: "M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM6.25 12.5C5.67188 12.5 5.3125 12.8594 5.3125 13.4375C5.3125 14.0156 5.67188 14.375 6.25 14.375C6.82812 14.375 7.1875 14.0156 7.1875 13.4375C7.1875 12.8594 6.82812 12.5 6.25 12.5ZM10 12.5C9.42188 12.5 9.0625 12.8594 9.0625 13.4375C9.0625 14.0156 9.42188 14.375 10 14.375C10.5781 14.375 10.9375 14.0156 10.9375 13.4375C10.9375 12.8594 10.5781 12.5 10 12.5ZM13.75 12.5C13.1719 12.5 12.8125 12.8594 12.8125 13.4375C12.8125 14.0156 13.1719 14.375 13.75 14.375C14.3281 14.375 14.6875 14.0156 14.6875 13.4375C14.6875 12.8594 14.3281 12.5 13.75 12.5ZM4.6875 15.625C4.10938 15.625 3.75 15.9844 3.75 16.5625C3.75 17.1406 4.10938 17.5 4.6875 17.5C5.26562 17.5 5.625 17.1406 5.625 16.5625C5.625 15.9844 5.26562 15.625 4.6875 15.625ZM8.4375 15.625C7.85938 15.625 7.5 15.9844 7.5 16.5625C7.5 17.1406 7.85938 17.5 8.4375 17.5C9.01562 17.5 9.375 17.1406 9.375 16.5625C9.375 15.9844 9.01562 15.625 8.4375 15.625ZM12.1875 15.625C11.6094 15.625 11.25 15.9844 11.25 16.5625C11.25 17.1406 11.6094 17.5 12.1875 17.5C12.7656 17.5 13.125 17.1406 13.125 16.5625C13.125 15.9844 12.7656 15.625 12.1875 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hailIcon = createIcon("hail", iconDefinition393);

// src/noticons/src/hairCare/default.icon.tsx
import { jsxDEV as jsxDEV396, Fragment as Fragment394 } from "react/jsx-dev-runtime";
var iconDefinition394 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV396(Fragment394, {
    children: /* @__PURE__ */ jsxDEV396("path", {
      d: "M7.1875 5.18125V2.5H4.6875V5.18125C3.3125 5.60625 2.5 6.77187 2.5 8.4375V17.5H9.375V8.4375C9.375 6.77187 8.5625 5.60625 7.1875 5.18125ZM7.5 12.5H4.375V10H7.5V12.5ZM15.3125 5.18125V2.5H12.8125V5.18125C11.4375 5.60625 10.625 6.77187 10.625 8.4375V17.5H17.5V8.4375C17.5 6.77187 16.6875 5.60625 15.3125 5.18125ZM15.625 15.625H12.5V12.5H15.625V15.625ZM15.625 10H12.5V8.4375C12.5 7.47188 13.0969 6.875 14.0625 6.875C15.0281 6.875 15.625 7.47188 15.625 8.4375V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hairCareIcon = createIcon("hairCare", iconDefinition394);

// src/noticons/src/hairdryer/default.icon.tsx
import { jsxDEV as jsxDEV397, Fragment as Fragment395 } from "react/jsx-dev-runtime";
var iconDefinition395 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV397(Fragment395, {
    children: /* @__PURE__ */ jsxDEV397("path", {
      d: "M18.125 9.375H13.9813C13.4063 10.5625 12.225 11.25 10.625 11.25H8.125L9.375 16.25H6.25L4.99063 11.2063C3.05313 10.9625 1.875 9.59062 1.875 7.5C1.875 5.1875 3.3125 3.75 5.625 3.75H10.625C12.225 3.75 13.4031 4.4375 13.9813 5.625H18.125V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hairdryerIcon = createIcon("hairdryer", iconDefinition395);

// src/noticons/src/hammer/default.icon.tsx
import { jsxDEV as jsxDEV398, Fragment as Fragment396 } from "react/jsx-dev-runtime";
var iconDefinition396 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV398(Fragment396, {
    children: /* @__PURE__ */ jsxDEV398("path", {
      d: "M18.75 11.25L15 15L14.2906 14.2906C13.9156 13.9156 13.8219 13.5125 13.9875 13.0125L14.1844 12.4188L13.7438 11.9782L13.15 12.175C12.6469 12.3438 12.2438 12.2469 11.8719 11.8719L11.325 11.325L4.52501 18.125L1.87189 15.4719L8.67189 8.6719L7.49689 7.4969L9.92189 5.0719L9.76876 4.91877C9.37501 4.52502 8.99689 4.36877 8.44376 4.36877H6.87189V2.49377H8.44376C9.55626 2.49377 10.3094 2.80627 11.0969 3.59065L15.6219 8.11565C15.9969 8.49065 16.0906 8.89377 15.925 9.39377L15.7281 9.98752L16.1688 10.4281L16.7625 10.2313C17.2656 10.0625 17.6688 10.1594 18.0406 10.5344L18.75 11.2438V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hammerIcon = createIcon("hammer", iconDefinition396);

// src/noticons/src/hanafuda/default.icon.tsx
import { jsxDEV as jsxDEV399, Fragment as Fragment397 } from "react/jsx-dev-runtime";
var iconDefinition397 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV399(Fragment397, {
    children: /* @__PURE__ */ jsxDEV399("path", {
      d: "M5 2.5V17.5H15V2.5H5ZM11.9406 14.375C11.9406 14.375 10.8906 13.7531 9.84375 13.7531C8.7125 13.7531 7.89688 14.2406 7.1375 15H10.625V16.25H6.25V14.1187C7.225 13.1531 8.34687 12.5031 9.6875 12.5031C11.3375 12.5031 12.5 13.2562 12.5 13.2562L11.9406 14.375ZM13.75 11.7125C12.4437 11.0219 10.9563 10.625 9.375 10.625C8.27813 10.625 7.22813 10.8156 6.25 11.1625V9.84688C6.725 9.7 7.20937 9.5875 7.7 9.50938C6.83125 8.95312 6.25 7.98438 6.25 6.875C6.25 5.15 7.65 3.75 9.375 3.75C11.1 3.75 12.5 5.15 12.5 6.875C12.5 7.98438 11.9187 8.95625 11.0469 9.5125C11.9812 9.6625 12.8875 9.9375 13.75 10.325V11.7094V11.7125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hanafudaIcon = createIcon("hanafuda", iconDefinition397);

// src/noticons/src/hand/default.icon.tsx
import { jsxDEV as jsxDEV400, Fragment as Fragment398 } from "react/jsx-dev-runtime";
var iconDefinition398 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV400(Fragment398, {
    children: /* @__PURE__ */ jsxDEV400("path", {
      d: "M15.9375 8.4375V11.6187C15.9375 13.1406 15.4969 14.1719 14.4 15.225L13.3 16.2812C12.3906 17.1562 11.5312 17.5 10.2687 17.5H8.74687C6.04687 17.5 4.37187 15.825 4.37187 13.125V5.78125C4.37187 5.3 4.67187 5 5.15312 5C5.63437 5 5.93437 5.3 5.93437 5.78125V9.6875H6.87187V3.90625C6.87187 3.425 7.17187 3.125 7.65312 3.125C8.13437 3.125 8.43437 3.425 8.43437 3.90625V9.6875H9.37187V3.28125C9.37187 2.8 9.67187 2.5 10.1531 2.5C10.6344 2.5 10.9344 2.8 10.9344 3.28125V9.6875H11.8719V4.53125C11.8719 4.05 12.1719 3.75 12.6531 3.75C13.1344 3.75 13.4344 4.05 13.4344 4.53125V11.875C13.9156 11.875 14.2156 11.575 14.2156 11.0938V10.3125C14.2156 8.92188 14.7531 8.125 15.6219 8.125C15.825 8.125 15.9344 8.23438 15.9344 8.4375H15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var handIcon = createIcon("hand", iconDefinition398);

// src/noticons/src/handbag/default.icon.tsx
import { jsxDEV as jsxDEV401, Fragment as Fragment399 } from "react/jsx-dev-runtime";
var iconDefinition399 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV401(Fragment399, {
    children: /* @__PURE__ */ jsxDEV401("path", {
      d: "M15 6.875H13.75V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V6.875H5C5 6.875 2.5 9.375 2.5 16.875H17.5C17.5 9.375 15 6.875 15 6.875ZM8.125 5C8.125 4.49063 8.24062 4.375 8.75 4.375H11.25C11.7594 4.375 11.875 4.49063 11.875 5V6.875H8.125V5ZM13.75 13.125H6.25V11.875H13.75V13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var handbagIcon = createIcon("handbag", iconDefinition399);

// src/noticons/src/hanger/default.icon.tsx
import { jsxDEV as jsxDEV402, Fragment as Fragment400 } from "react/jsx-dev-runtime";
var iconDefinition400 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV402(Fragment400, {
    children: /* @__PURE__ */ jsxDEV402("path", {
      d: "M10.9375 9.21875V8.70312L11.5375 8.40312C12.7094 7.81562 13.4375 6.64062 13.4375 5.3125C13.4375 3.41562 11.8969 1.875 10 1.875C8.10313 1.875 6.5625 3.41562 6.5625 5.3125H8.4375C8.4375 4.45 9.1375 3.75 10 3.75C10.8625 3.75 11.5625 4.45 11.5625 5.33125C11.5625 5.92812 11.2313 6.4625 10.7 6.72813L9.0625 7.54688V9.21875L1.875 12.8125V16.875H18.125V12.8125L10.9375 9.21875ZM16.25 15H3.75V13.9719L10 10.8469L16.25 13.9719V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hangerIcon = createIcon("hanger", iconDefinition400);

// src/noticons/src/hare/default.icon.tsx
import { jsxDEV as jsxDEV403, Fragment as Fragment401 } from "react/jsx-dev-runtime";
var iconDefinition401 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV403(Fragment401, {
    children: /* @__PURE__ */ jsxDEV403("path", {
      d: "M18.75 9.39377C18.75 10.1625 18.2469 10.625 17.4812 10.625H15L13.75 12.5L14.2688 13.0188C14.7937 13.5438 15 14.0469 15 14.7875V17.5031H13.125V15.8C13.125 15.2 12.8406 14.8032 12.2687 14.6157L7.1375 12.9063C6.58437 13.4281 5.84375 13.75 5.025 13.7563C5.18125 13.9 5.35 14.025 5.54062 14.1188L6.61562 14.6563C7.29375 14.9969 7.50625 15.6281 7.16563 16.3063L6.87813 16.8844L5.46562 16.1782C4.74375 15.8188 4.0875 15.3438 3.51562 14.7719L2.72187 13.9781C2.58438 13.8406 2.50312 13.6563 2.5 13.4625C2.49688 13.2282 2.55938 13.0719 2.72187 12.9094L3.75 11.8813L3.125 10.6313C1.96875 10.6313 1.25 9.91252 1.25 8.75627C1.25 7.60002 1.96875 6.88127 3.125 6.88127C3.36875 6.88127 3.58437 6.91877 3.7875 6.98127C4.44375 6.09065 5.62813 5.00627 7.5 5.00627C10.5938 5.00627 11.8094 7.96252 11.8719 8.12502C12.3219 8.08752 12.6313 7.86877 12.8469 7.44065L13.3031 6.52815L11.25 2.42502L12.3344 1.8844C14.1438 2.48752 15.4688 3.92815 15.8594 5.70627C17.6688 6.02502 18.7594 7.37815 18.75 9.40002V9.39377Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hareIcon = createIcon("hare", iconDefinition401);

// src/noticons/src/hashtag/default.icon.tsx
import { jsxDEV as jsxDEV404, Fragment as Fragment402 } from "react/jsx-dev-runtime";
var iconDefinition402 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV404(Fragment402, {
    children: /* @__PURE__ */ jsxDEV404("path", {
      d: "M16.875 8.125V6.25H14.375L15.3125 2.5H13.4375L12.5 6.25H9.375L10.3125 2.5H8.4375L7.5 6.25H3.75V8.125H7.03125L6.09375 11.875H3.125V13.75H5.625L4.6875 17.5H6.5625L7.5 13.75H10.625L9.6875 17.5H11.5625L12.5 13.75H16.25V11.875H12.9688L13.9062 8.125H16.875ZM11.0938 11.875H7.96875L8.90625 8.125H12.0312L11.0938 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hashtagIcon = createIcon("hashtag", iconDefinition402);

// src/noticons/src/headphones/default.icon.tsx
import { jsxDEV as jsxDEV405, Fragment as Fragment403 } from "react/jsx-dev-runtime";
var iconDefinition403 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV405(Fragment403, {
    children: /* @__PURE__ */ jsxDEV405("path", {
      d: "M17.5 15H16.25V17.5H12.5V11.25H15.625V10C15.625 6.52813 13.4719 4.375 10 4.375C6.52813 4.375 4.375 6.52813 4.375 10V11.25H7.5V17.5H3.75V15H2.5V10C2.5 5.37187 5.37187 2.5 10 2.5C14.6281 2.5 17.5 5.37187 17.5 10V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var headphonesIcon = createIcon("headphones", iconDefinition403);

// src/noticons/src/headset/default.icon.tsx
import { jsxDEV as jsxDEV406, Fragment as Fragment404 } from "react/jsx-dev-runtime";
var iconDefinition404 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV406(Fragment404, {
    children: /* @__PURE__ */ jsxDEV406("path", {
      d: "M17.5 9.375V12.5H16.25V16.25C16.25 17.7469 15.2469 18.75 13.75 18.75H8.75V16.25H11.25V17.5H13.75C14.5562 17.5 15 17.0562 15 16.25V15H12.5V10H15.625V9.375C15.625 5.90313 13.4719 3.75 10 3.75C6.52813 3.75 4.375 5.90313 4.375 9.375V10H7.5V15H3.75V12.5H2.5V9.375C2.5 4.74687 5.37187 1.875 10 1.875C14.6281 1.875 17.5 4.74687 17.5 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var headsetIcon = createIcon("headset", iconDefinition404);

// src/noticons/src/heart/default.icon.tsx
import { jsxDEV as jsxDEV407, Fragment as Fragment405 } from "react/jsx-dev-runtime";
var iconDefinition405 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV407(Fragment405, {
    children: /* @__PURE__ */ jsxDEV407("path", {
      d: "M17.5 7.5C17.5 11.8594 12.9219 15.4719 10 17.5C7.07812 15.4719 2.5 11.8594 2.5 7.5C2.5 4.83125 4.31875 3.125 6.5625 3.125C8.1 3.125 9.42188 4.05312 10 5.37812C10.5781 4.05312 11.9 3.125 13.4375 3.125C15.6812 3.125 17.5 4.83125 17.5 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartIcon = createIcon("heart", iconDefinition405);

// src/noticons/src/heartBoxBow/default.icon.tsx
import { jsxDEV as jsxDEV408, Fragment as Fragment406 } from "react/jsx-dev-runtime";
var iconDefinition406 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV408(Fragment406, {
    children: /* @__PURE__ */ jsxDEV408("path", {
      d: "M13.75 10H17.0062C15.7469 13.2312 12.3406 15.875 10 17.5C7.65938 15.875 4.25313 13.2312 2.99375 10H6.25V11.875H7.5L9.375 10H10.625L12.5 11.875H13.75V10ZM13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 7.70937 2.5125 7.91875 2.53437 8.125H6.25V6.25H7.5L9.375 8.125H10.625L12.5 6.25H13.75V8.125H17.4656C17.4875 7.91875 17.5 7.70937 17.5 7.5C17.5 4.83125 15.6812 3.125 13.4375 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartBoxBowIcon = createIcon("heartBoxBow", iconDefinition406);

// src/noticons/src/heartOutline/default.icon.tsx
import { jsxDEV as jsxDEV409, Fragment as Fragment407 } from "react/jsx-dev-runtime";
var iconDefinition407 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV409(Fragment407, {
    children: /* @__PURE__ */ jsxDEV409("path", {
      d: "M13.75 3.125C12.2125 3.125 10.6938 4.0875 10 5.37812C9.30625 4.0875 7.7875 3.125 6.25 3.125C4.00625 3.125 2.1875 4.83125 2.1875 7.5C2.1875 12.3687 6.1125 15.2344 9.375 17.5H10.625C13.8875 15.2344 17.8125 12.3687 17.8125 7.5C17.8125 4.83125 15.9937 3.125 13.75 3.125ZM10 15.6531C6.72813 13.3469 4.0625 11.0563 4.0625 7.5C4.0625 5.98125 4.92188 5 6.25 5C7.57812 5 8.17188 5.80312 10 7.96562C11.8281 5.80312 12.4469 5 13.75 5C15.0781 5 15.9375 5.98125 15.9375 7.5C15.9375 11.0563 13.2719 13.3469 10 15.6531Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartOutlineIcon = createIcon("heartOutline", iconDefinition407);

// src/noticons/src/heartRate/default.icon.tsx
import { jsxDEV as jsxDEV410, Fragment as Fragment408 } from "react/jsx-dev-runtime";
var iconDefinition408 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV410(Fragment408, {
    children: /* @__PURE__ */ jsxDEV410("path", {
      d: "M12.2625 11.25H16.4031C14.8656 13.9125 12.0344 16.0906 10.0031 17.5C7.97187 16.0906 5.14062 13.9125 3.60312 11.25H6.01562L7.50313 8.27187L10.2406 13.75H11.0125L12.2625 11.25ZM13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 8.36562 2.68125 9.2 2.99375 10H5.2375L7.1125 6.25H7.88437L10.6219 11.7281L11.4844 10H17C17.3125 9.2 17.4937 8.36562 17.4937 7.5C17.4937 4.83125 15.675 3.125 13.4312 3.125H13.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartRateIcon = createIcon("heartRate", iconDefinition408);

// src/noticons/src/heartRateMonitor/default.icon.tsx
import { jsxDEV as jsxDEV411, Fragment as Fragment409 } from "react/jsx-dev-runtime";
var iconDefinition409 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV411(Fragment409, {
    children: /* @__PURE__ */ jsxDEV411("path", {
      d: "M14.1375 10.625H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V10.625H6.0125L7.8125 7.02187L11.4875 14.375H12.2594L14.1344 10.625H14.1375ZM15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V9.375H5.2375L7.425 5H8.19687L11.8719 12.3531L13.3594 9.375H17.4969V5.625C17.4969 4.08125 16.5406 3.125 14.9969 3.125H15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartRateMonitorIcon = createIcon("heartRateMonitor", iconDefinition409);

// src/noticons/src/heartbroken/default.icon.tsx
import { jsxDEV as jsxDEV412, Fragment as Fragment410 } from "react/jsx-dev-runtime";
var iconDefinition410 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV412(Fragment410, {
    children: /* @__PURE__ */ jsxDEV412("path", {
      d: "M17.5 7.5C17.5 11.8594 12.9219 15.4719 10 17.5C7.07812 15.4719 2.5 11.8594 2.5 7.5C2.5 4.83125 4.31875 3.125 6.5625 3.125C7.54688 3.125 8.44062 3.50625 9.10938 4.125L7.5 7.34375L10.0406 9.88437L9.0125 11.9406L10.1312 12.5L11.5625 9.6375L9.02188 7.09687C9.94375 5.25625 10.9594 3.125 13.4375 3.125C15.6812 3.125 17.5 4.83125 17.5 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var heartbrokenIcon = createIcon("heartbroken", iconDefinition410);

// src/noticons/src/helicopter/default.icon.tsx
import { jsxDEV as jsxDEV413, Fragment as Fragment411 } from "react/jsx-dev-runtime";
var iconDefinition411 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV413(Fragment411, {
    children: /* @__PURE__ */ jsxDEV413("path", {
      d: "M19.0312 13.2843L16.6531 9.3187C15.8969 8.0562 14.9094 7.49683 13.4375 7.49683H12.1875V5.62183H18.75V4.37183H3.75V5.62183H10.3125V7.49683H2.8125L1.875 5.62183H0L0.703125 8.43433L0 11.2468H1.875L2.8125 9.37183H6.09375L9.21562 14.4593C9.97812 15.7 10.9563 16.2468 12.4125 16.2468H17.3531C18.5969 16.2468 19.3781 15.4406 19.3781 14.4468C19.3781 14.075 19.2687 13.675 19.0344 13.2843H19.0312ZM12.1875 12.5V9.37495H13.4375C14.0969 9.37495 14.7063 9.72183 15.0469 10.2843L16.375 12.5H12.1906H12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var helicopterIcon = createIcon("helicopter", iconDefinition411);

// src/noticons/src/helm/default.icon.tsx
import { jsxDEV as jsxDEV414, Fragment as Fragment412 } from "react/jsx-dev-runtime";
var iconDefinition412 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV414(Fragment412, {
    children: /* @__PURE__ */ jsxDEV414("path", {
      d: "M16.25 10C16.25 9.19688 16.0937 8.43125 15.8156 7.725L18.0469 6.4375L17.1094 4.8125L14.8812 6.1C13.9219 4.9 12.5281 4.06875 10.9406 3.82812V1.25H9.06562V3.82812C7.475 4.06875 6.08437 4.9 5.125 6.1L2.89687 4.8125L1.95937 6.4375L4.19062 7.725C3.91562 8.43125 3.75625 9.19688 3.75625 10C3.75625 10.8031 3.9125 11.5687 4.19062 12.275L1.95937 13.5625L2.89687 15.1875L5.125 13.9C6.08437 15.1 7.47812 15.9312 9.06562 16.1719V18.75H10.9406V16.1719C12.5312 15.9312 13.9219 15.1 14.8812 13.9L17.1094 15.1875L18.0469 13.5625L15.8156 12.275C16.0906 11.5687 16.25 10.8031 16.25 10ZM14.375 10C14.375 10.4625 14.3031 10.9063 14.1687 11.325L11.875 10L14.1687 8.675C14.3 9.09375 14.375 9.5375 14.375 10ZM13.2281 7.05312L10.9375 8.375V5.72813C11.8375 5.925 12.6281 6.39687 13.2281 7.05312ZM9.0625 5.72813V8.375L6.77187 7.05312C7.37187 6.39687 8.1625 5.925 9.0625 5.72813ZM5.625 10C5.625 9.5375 5.69687 9.09375 5.83125 8.675L8.125 10L5.83125 11.325C5.7 10.9063 5.625 10.4625 5.625 10ZM6.77187 12.9469L9.0625 11.625V14.2719C8.1625 14.075 7.37187 13.6031 6.77187 12.9469ZM10.9375 14.2719V11.625L13.2281 12.9469C12.6281 13.6031 11.8375 14.075 10.9375 14.2719Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var helmIcon = createIcon("helm", iconDefinition412);

// src/noticons/src/helpAlternate/default.icon.tsx
import { jsxDEV as jsxDEV415, Fragment as Fragment413 } from "react/jsx-dev-runtime";
var iconDefinition413 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV415(Fragment413, {
    children: /* @__PURE__ */ jsxDEV415("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM10.9375 11.5625H9.0625C9.0625 9.375 11.4062 9.43437 11.4062 8.28125C11.4062 7.5375 10.8719 7.1875 9.92188 7.1875C8.97188 7.1875 8.4375 7.5375 8.4375 8.4375H6.5625C6.5625 6.525 7.87813 5.3125 10 5.3125C12.1219 5.3125 13.4375 6.525 13.4375 8.28125C13.4375 10.4688 10.9375 10.4094 10.9375 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var helpAlternateIcon = createIcon("helpAlternate", iconDefinition413);

// src/noticons/src/hexagon/default.icon.tsx
import { jsxDEV as jsxDEV416, Fragment as Fragment414 } from "react/jsx-dev-runtime";
var iconDefinition414 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV416(Fragment414, {
    children: /* @__PURE__ */ jsxDEV416("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM15.625 13.25L10 16.4969L4.375 13.25V6.75626L10 3.50939L15.625 6.75626V13.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonIcon = createIcon("hexagon", iconDefinition414);

// src/noticons/src/hexagonAlternate/default.icon.tsx
import { jsxDEV as jsxDEV417, Fragment as Fragment415 } from "react/jsx-dev-runtime";
var iconDefinition415 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV417(Fragment415, {
    children: /* @__PURE__ */ jsxDEV417("path", {
      d: "M17.5 5.66877V14.3281L10 18.6594L2.5 14.3281V5.66877L10 1.33752L17.5 5.66877Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonAlternateIcon = createIcon("hexagonAlternate", iconDefinition415);

// src/noticons/src/hexagonDashed/default.icon.tsx
import { jsxDEV as jsxDEV418, Fragment as Fragment416 } from "react/jsx-dev-runtime";
var iconDefinition416 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV418(Fragment416, {
    children: /* @__PURE__ */ jsxDEV418("path", {
      d: "M12.2719 15.1844L13.2094 16.8094L10 18.6625L6.79062 16.8094L7.72812 15.1844L10 16.4969L12.2719 15.1844ZM2.5 5.66876V9.37501H4.375V6.75314L6.64688 5.44064L5.70938 3.81564L2.5 5.66876ZM4.375 10.625H2.5V14.3313L5.70938 16.1844L6.64688 14.5594L4.375 13.2469V10.625ZM6.79062 3.19376L7.72812 4.81876L10 3.50626L12.2719 4.81876L13.2094 3.19376L10 1.34064L6.79062 3.19376ZM14.2906 3.81876L13.3531 5.44376L15.625 6.75626V9.37814H17.5V5.67189L14.2906 3.81876ZM15.625 13.25L13.3531 14.5625L14.2906 16.1875L17.5 14.3344V10.6281H15.625V13.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonDashedIcon = createIcon("hexagonDashed", iconDefinition416);

// src/noticons/src/hexagonFiveSixths/default.icon.tsx
import { jsxDEV as jsxDEV419, Fragment as Fragment417 } from "react/jsx-dev-runtime";
var iconDefinition417 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV419(Fragment417, {
    children: /* @__PURE__ */ jsxDEV419("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 10L4.375 6.75314L10 3.50626V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonFiveSixthsIcon = createIcon("hexagonFiveSixths", iconDefinition417);

// src/noticons/src/hexagonFourSixths/default.icon.tsx
import { jsxDEV as jsxDEV420, Fragment as Fragment418 } from "react/jsx-dev-runtime";
var iconDefinition418 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV420(Fragment418, {
    children: /* @__PURE__ */ jsxDEV420("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 10L4.375 13.2469V6.75314L10 3.50626V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonFourSixthsIcon = createIcon("hexagonFourSixths", iconDefinition418);

// src/noticons/src/hexagonOneSixth/default.icon.tsx
import { jsxDEV as jsxDEV421, Fragment as Fragment419 } from "react/jsx-dev-runtime";
var iconDefinition419 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV421(Fragment419, {
    children: /* @__PURE__ */ jsxDEV421("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM15.625 13.25L10 16.4969L4.375 13.25V6.75626L10 3.50939V10.0031L15.625 6.75626V13.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonOneSixthIcon = createIcon("hexagonOneSixth", iconDefinition419);

// src/noticons/src/hexagonThreeSixths/default.icon.tsx
import { jsxDEV as jsxDEV422, Fragment as Fragment420 } from "react/jsx-dev-runtime";
var iconDefinition420 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV422(Fragment420, {
    children: /* @__PURE__ */ jsxDEV422("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 16.4969L4.375 13.25V6.75626L10 3.50939V16.5V16.4969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonThreeSixthsIcon = createIcon("hexagonThreeSixths", iconDefinition420);

// src/noticons/src/hexagonTwoSixths/default.icon.tsx
import { jsxDEV as jsxDEV423, Fragment as Fragment421 } from "react/jsx-dev-runtime";
var iconDefinition421 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV423(Fragment421, {
    children: /* @__PURE__ */ jsxDEV423("path", {
      d: "M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 16.4969L4.375 13.25V6.75626L10 3.50939V10.0031L15.625 13.25L10 16.4969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hexagonTwoSixthsIcon = createIcon("hexagonTwoSixths", iconDefinition421);

// src/noticons/src/highball/default.icon.tsx
import { jsxDEV as jsxDEV424, Fragment as Fragment422 } from "react/jsx-dev-runtime";
var iconDefinition422 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV424(Fragment422, {
    children: /* @__PURE__ */ jsxDEV424("path", {
      d: "M3.125 2.5L5.625 17.5H14.375L16.875 2.5H3.125ZM14.6625 4.375L14.2469 6.875H5.75625L5.34063 4.375H14.6625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var highballIcon = createIcon("highball", iconDefinition422);

// src/noticons/src/history/default.icon.tsx
import { jsxDEV as jsxDEV425, Fragment as Fragment423 } from "react/jsx-dev-runtime";
var iconDefinition423 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV425(Fragment423, {
    children: /* @__PURE__ */ jsxDEV425("path", {
      d: "M11.5625 5.625V9.375H14.375V11.25H9.6875V5.625H11.5625ZM10.625 2.5C6.48438 2.5 3.125 5.85938 3.125 10V10.7062L1.325 8.90625L0 10.2313L4.0625 14.2938L8.125 10.2313L6.8 8.90625L5 10.7062V10C5 6.89375 7.51875 4.375 10.625 4.375C13.7312 4.375 16.25 6.89375 16.25 10C16.25 13.1062 13.7312 15.625 10.625 15.625V17.5C14.7656 17.5 18.125 14.1406 18.125 10C18.125 5.85938 14.7656 2.5 10.625 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var historyIcon = createIcon("history", iconDefinition423);

// src/noticons/src/home/default.icon.tsx
import { jsxDEV as jsxDEV426, Fragment as Fragment424 } from "react/jsx-dev-runtime";
var iconDefinition424 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV426(Fragment424, {
    children: /* @__PURE__ */ jsxDEV426("path", {
      d: "M17.5 10.625H15.3125V16.875H11.5625V11.875H8.4375V16.875H4.6875V10.625H2.5V9.375L10 1.875L12.8125 4.6875V2.5H15.3125V7.1875L17.5 9.375V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var homeIcon = createIcon("home", iconDefinition424);

// src/noticons/src/hotAirBalloon/default.icon.tsx
import { jsxDEV as jsxDEV427, Fragment as Fragment425 } from "react/jsx-dev-runtime";
var iconDefinition425 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV427(Fragment425, {
    children: /* @__PURE__ */ jsxDEV427("path", {
      d: "M16.25 6.25C16.25 8.99375 14.375 10.625 11.25 13.75H8.75C5.625 10.625 3.75 8.99375 3.75 6.25C3.75 3.50625 5.93125 1.25 10 1.25C14.0688 1.25 16.25 3.5375 16.25 6.25ZM8.125 17.5H11.875V15H8.125V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hotAirBalloonIcon = createIcon("hotAirBalloon", iconDefinition425);

// src/noticons/src/hourglass/default.icon.tsx
import { jsxDEV as jsxDEV428, Fragment as Fragment426 } from "react/jsx-dev-runtime";
var iconDefinition426 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV428(Fragment426, {
    children: /* @__PURE__ */ jsxDEV428("path", {
      d: "M14.375 6.46563V4.375H16.25V2.5H3.75V4.375H5.625V6.46563C5.625 7.20625 5.83438 7.70937 6.35625 8.23438L8.125 10.0031L6.35625 11.7719C5.83125 12.2969 5.625 12.8 5.625 13.5406V15.6313H3.75V17.5063H16.25V15.6313H14.375V13.5406C14.375 12.8 14.1656 12.2969 13.6438 11.7719L11.875 10.0031L13.6438 8.23438C14.1687 7.70937 14.375 7.20625 14.375 6.46563ZM12.3187 13.0938C12.4906 13.2656 12.5 13.2906 12.5 13.5344V14.375L11.1844 13.7156C10.775 13.5094 10.4594 13.4375 10 13.4375C9.54063 13.4375 9.22812 13.5125 8.81562 13.7156L7.5 14.375V13.5344C7.5 13.2906 7.50937 13.2656 7.68125 13.0938L10 10.7781L12.3187 13.0938ZM12.5 6.25H7.5V4.375H12.5V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hourglassIcon = createIcon("hourglass", iconDefinition426);

// src/noticons/src/hurricane/default.icon.tsx
import { jsxDEV as jsxDEV429, Fragment as Fragment427 } from "react/jsx-dev-runtime";
var iconDefinition427 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV429(Fragment427, {
    children: /* @__PURE__ */ jsxDEV429("path", {
      d: "M14.7 4.80625H16.875V2.5H10C6.20312 2.5 3.125 5.34062 3.125 8.84687C3.125 10.8219 4.20313 12.5625 5.84375 13.6C6.1 13.7625 6.25 14.0312 6.25 14.3156C6.25 14.8 5.825 15.1906 5.3 15.1906H3.125V17.4969H10C13.7969 17.4969 16.875 14.6562 16.875 11.15C16.875 9.175 15.7969 7.43437 14.1562 6.39687C13.9 6.23437 13.75 5.96563 13.75 5.68125C13.75 5.19688 14.175 4.80625 14.7 4.80625ZM10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10C12.5 11.3813 11.3813 12.5 10 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var hurricaneIcon = createIcon("hurricane", iconDefinition427);

// src/noticons/src/iceSkate/default.icon.tsx
import { jsxDEV as jsxDEV430, Fragment as Fragment428 } from "react/jsx-dev-runtime";
var iconDefinition428 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV430(Fragment428, {
    children: /* @__PURE__ */ jsxDEV430("path", {
      d: "M16.25 14.375V15C16.25 15.3844 16.0094 15.625 15.625 15.625H13.75V14.3C16.5312 13.95 17.5 12.5 17.5 12.5V10.7812L14.375 10L9.375 5.625V2.5H3.125V5.02813L2.725 6.63125C2.55938 7.29688 2.5 7.76563 2.5 8.45C2.5 9.13438 2.55625 9.60313 2.725 10.2688L3.75 14.3719H4.375V15.6219H2.5V17.4969H15.625C17.1687 17.4969 18.125 16.5406 18.125 14.9969V14.3719H16.25V14.375ZM6.25 15.625V14.375H6.875V12.5H7.8125L9.6875 14.375H11.875V15.625H6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var iceSkateIcon = createIcon("iceSkate", iconDefinition428);

// src/noticons/src/immigration/default.icon.tsx
import { jsxDEV as jsxDEV431, Fragment as Fragment429 } from "react/jsx-dev-runtime";
var iconDefinition429 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV431(Fragment429, {
    children: /* @__PURE__ */ jsxDEV431("path", {
      d: "M7.5 10H2.5V3.75L5 2.5H5.625V3.75H7.5V10ZM14.375 7.5C15.9187 7.5 16.875 6.54375 16.875 5V1.875H11.875V3.75H10V5H11.875C11.875 6.54375 12.8313 7.5 14.375 7.5ZM11.25 17.5H17.5V15H11.25V17.5ZM11.25 13.75H12.5L15 8.75H11.5156C10.7219 8.75 10.1937 9.07812 9.8375 9.7875L8.79375 11.875H6.24687V13.75H9.95L11.2469 11.1594V13.75H11.25ZM16.25 8.75L13.75 13.75H17.5V10C17.5 9.22813 17.0219 8.75 16.25 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var immigrationIcon = createIcon("immigration", iconDefinition429);

// src/noticons/src/inbox/default.icon.tsx
import { jsxDEV as jsxDEV432, Fragment as Fragment430 } from "react/jsx-dev-runtime";
var iconDefinition430 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV432(Fragment430, {
    children: /* @__PURE__ */ jsxDEV432("path", {
      d: "M15.8344 2.5H4.16562L2.5 12.5V17.5H17.5V12.5L15.8344 2.5ZM11.875 12.5C11.875 13.5344 11.0344 14.375 10 14.375C8.96562 14.375 8.125 13.5344 8.125 12.5H4.4L5.75312 4.375H14.2438L15.5969 12.5H11.8719H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var inboxIcon = createIcon("inbox", iconDefinition430);

// src/noticons/src/infinity/default.icon.tsx
import { jsxDEV as jsxDEV433, Fragment as Fragment431 } from "react/jsx-dev-runtime";
var iconDefinition431 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV433(Fragment431, {
    children: /* @__PURE__ */ jsxDEV433("path", {
      d: "M14.6875 5.3125C12.5156 5.3125 11.1375 6.75625 10 8.3375C8.8625 6.75313 7.48438 5.3125 5.3125 5.3125C2.72812 5.3125 0.625 7.41562 0.625 10C0.625 12.5844 2.72812 14.6875 5.3125 14.6875C7.48438 14.6875 8.8625 13.2438 10 11.6625C11.1375 13.2469 12.5156 14.6875 14.6875 14.6875C17.2719 14.6875 19.375 12.5844 19.375 10C19.375 7.41562 17.2719 5.3125 14.6875 5.3125ZM5.3125 12.8125C3.7625 12.8125 2.5 11.55 2.5 10C2.5 8.45 3.7625 7.1875 5.3125 7.1875C6.8625 7.1875 7.81875 8.44375 8.87187 10C7.81875 11.5563 6.83125 12.8125 5.3125 12.8125ZM14.6875 12.8125C13.1687 12.8125 12.1813 11.5563 11.1281 10C12.1813 8.44375 13.1687 7.1875 14.6875 7.1875C16.2063 7.1875 17.5 8.45 17.5 10C17.5 11.55 16.2375 12.8125 14.6875 12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var infinityIcon = createIcon("infinity", iconDefinition431);

// src/noticons/src/infoAlternate/default.icon.tsx
import { jsxDEV as jsxDEV434, Fragment as Fragment432 } from "react/jsx-dev-runtime";
var iconDefinition432 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV434(Fragment432, {
    children: /* @__PURE__ */ jsxDEV434("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.6875C10.8625 4.6875 11.5625 5.3875 11.5625 6.25C11.5625 7.1125 10.8625 7.8125 10 7.8125C9.1375 7.8125 8.4375 7.1125 8.4375 6.25C8.4375 5.3875 9.1375 4.6875 10 4.6875ZM12.5 15H7.5V13.75H8.75V10.3125H7.5V9.0625H11.25V13.75H12.5V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var infoAlternateIcon = createIcon("infoAlternate", iconDefinition432);

// src/noticons/src/inlineSkate/default.icon.tsx
import { jsxDEV as jsxDEV435, Fragment as Fragment433 } from "react/jsx-dev-runtime";
var iconDefinition433 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV435(Fragment433, {
    children: /* @__PURE__ */ jsxDEV435("path", {
      d: "M18.75 14.6875C18.75 15.8969 17.7719 16.875 16.5625 16.875C15.6906 16.875 14.9406 16.3625 14.5875 15.625H14.1594C13.8094 16.3625 13.0562 16.875 12.1844 16.875C11.3125 16.875 10.5625 16.3625 10.2094 15.625H9.78123C9.43123 16.3625 8.6781 16.875 7.80623 16.875C6.93435 16.875 6.18435 16.3625 5.83123 15.625H5.4031C5.0531 16.3625 4.29998 16.875 3.4281 16.875C2.21873 16.875 1.2406 15.8969 1.2406 14.6875C1.2406 13.8156 1.7531 13.0656 2.4906 12.7125V8.45C2.4906 7.76563 2.54685 7.29688 2.7156 6.63125L3.1156 5.02813V2.5H9.3656V5.625L14.3656 10L17.4906 10.7812V12.7125C18.2281 13.0625 18.7406 13.8156 18.7406 14.6875H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var inlineSkateIcon = createIcon("inlineSkate", iconDefinition433);

// src/noticons/src/invitation/default.icon.tsx
import { jsxDEV as jsxDEV436, Fragment as Fragment434 } from "react/jsx-dev-runtime";
var iconDefinition434 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV436(Fragment434, {
    children: /* @__PURE__ */ jsxDEV436("path", {
      d: "M10 13.2719L17.5 9.52187V17.5H2.5V9.52187L10 13.2719ZM10 1.875L2.5 5.625V8.125L5.625 9.6875V6.25H14.375V9.6875L17.5 8.125V5.625L10 1.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var invitationIcon = createIcon("invitation", iconDefinition434);

// src/noticons/src/iterate/default.icon.tsx
import { jsxDEV as jsxDEV437, Fragment as Fragment435 } from "react/jsx-dev-runtime";
var iconDefinition435 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV437(Fragment435, {
    children: /* @__PURE__ */ jsxDEV437("path", {
      d: "M18.0438 15.9375L13.9813 20L12.6562 18.675L14.4562 16.875H10C5.85938 16.875 2.5 13.5156 2.5 9.375C2.5 5.23438 5.85938 1.875 10 1.875C14.1406 1.875 17.5 5.23438 17.5 9.375H15.625C15.625 6.26875 13.1062 3.75 10 3.75C6.89375 3.75 4.375 6.26875 4.375 9.375C4.375 12.4812 6.89375 15 10 15H14.4562L12.6562 13.2L13.9813 11.875L18.0438 15.9375ZM6.875 9.375C6.875 11.1 8.275 12.5 10 12.5C11.725 12.5 13.125 11.1 13.125 9.375C13.125 7.65 11.725 6.25 10 6.25C8.275 6.25 6.875 7.65 6.875 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var iterateIcon = createIcon("iterate", iconDefinition435);

// src/noticons/src/jackOLantern/default.icon.tsx
import { jsxDEV as jsxDEV438, Fragment as Fragment436 } from "react/jsx-dev-runtime";
var iconDefinition436 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV438(Fragment436, {
    children: /* @__PURE__ */ jsxDEV438("path", {
      d: "M13.125 4.375C12.0625 4.375 11.3906 4.68437 10.9281 4.99687C11.5031 3.24062 12.5 2.1875 12.5 2.1875L10.625 1.25C10.625 1.25 9.55937 2.8 9.28437 5.15312C8.82187 4.8 8.11562 4.375 6.875 4.375C4.78125 4.375 1.875 5.74688 1.875 10C1.875 14.7125 4.55313 16.875 6.875 16.875C8.31563 16.875 9.30312 16.25 10 16.25C10.6969 16.25 11.6844 16.875 13.125 16.875C15.4469 16.875 18.125 14.7125 18.125 10C18.125 5.74688 15.2188 4.375 13.125 4.375ZM5.3125 8.75L6.5625 6.875H7.1875L8.4375 8.75V9.375H5.3125V8.75ZM14.6875 12.5C14.6875 13.6562 13.9688 14.375 12.8125 14.375H7.1875C6.03125 14.375 5.3125 13.6562 5.3125 12.5V11.25H7.1875V12.5H9.0625V11.25H10.9375V12.5H12.8125V11.25H14.6875V12.5ZM14.6875 9.375H11.5625V8.75L12.8125 6.875H13.4375L14.6875 8.75V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var jackOLanternIcon = createIcon("jackOLantern", iconDefinition436);

// src/noticons/src/jar/default.icon.tsx
import { jsxDEV as jsxDEV439, Fragment as Fragment437 } from "react/jsx-dev-runtime";
var iconDefinition437 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV439(Fragment437, {
    children: /* @__PURE__ */ jsxDEV439("path", {
      d: "M16.875 11.8062V16.875H3.125V11.8062C3.125 10.9375 3.26562 10.3469 3.65312 9.56875L5 6.875H15L16.3469 9.56875C16.7344 10.3438 16.875 10.9375 16.875 11.8062ZM15 3.125H5V5.625H15V3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var jarIcon = createIcon("jar", iconDefinition437);

// src/noticons/src/judicialScales/default.icon.tsx
import { jsxDEV as jsxDEV440, Fragment as Fragment438 } from "react/jsx-dev-runtime";
var iconDefinition438 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV440(Fragment438, {
    children: /* @__PURE__ */ jsxDEV440("path", {
      d: "M18.75 6.25L17.425 4.925C17.425 4.925 16.4438 5.9375 15 5.9375C13.2781 5.9375 12.4281 5.21563 11.25 4.86875V2.5H8.75V4.86875C7.56875 5.21563 6.71875 5.9375 5 5.9375C3.55625 5.9375 2.575 4.925 2.575 4.925L1.25 6.25C1.25 6.25 2.4875 7.52188 4.375 7.76875V8.75L2.5 12.5V13.75H7.5V12.5L5.625 8.75V7.78438C7.0625 7.67188 7.95625 7.18438 8.75 6.85938V15.6219H5V17.4969H15V15.6219H11.25V6.85938C12.05 7.18438 12.9563 7.66563 14.375 7.78125V8.74687L12.5 12.4969V13.7469H17.5V12.4969L15.625 8.74687V7.76562C17.5125 7.51875 18.75 6.24687 18.75 6.24687V6.25ZM6.10313 12.5H3.89688L5 10.2937L6.10313 12.5ZM16.1031 12.5H13.8969L15 10.2937L16.1031 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var judicialScalesIcon = createIcon("judicialScales", iconDefinition438);

// src/noticons/src/junk/default.icon.tsx
import { jsxDEV as jsxDEV441, Fragment as Fragment439 } from "react/jsx-dev-runtime";
var iconDefinition439 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV441(Fragment439, {
    children: /* @__PURE__ */ jsxDEV441("path", {
      d: "M18.125 3.125V5.625H1.875V3.125H18.125ZM3.125 6.875H16.875L15.2094 16.875H4.79063L3.125 6.875ZM9.11562 11.875L7.1875 13.8031L8.07188 14.6875L10 12.7594L11.9281 14.6875L12.8125 13.8031L10.8844 11.875L12.8125 9.94688L11.9281 9.0625L10 10.9906L8.07188 9.0625L7.1875 9.94688L9.11562 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var junkIcon = createIcon("junk", iconDefinition439);

// src/noticons/src/key/default.icon.tsx
import { jsxDEV as jsxDEV442, Fragment as Fragment440 } from "react/jsx-dev-runtime";
var iconDefinition440 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV442(Fragment440, {
    children: /* @__PURE__ */ jsxDEV442("path", {
      d: "M12.5 2.5C9.7375 2.5 7.5 4.7375 7.5 7.5C7.5 8.15 7.62812 8.76563 7.85312 9.33438L2.5 14.6875V17.5H5.3125L5.9375 16.875V15.3125H7.5L8.125 14.6875V13.125H9.6875L10.6656 12.1469C11.2344 12.3719 11.8531 12.5 12.5 12.5C15.2625 12.5 17.5 10.2625 17.5 7.5C17.5 4.7375 15.2625 2.5 12.5 2.5ZM14.0625 6.875C13.5437 6.875 13.125 6.45625 13.125 5.9375C13.125 5.41875 13.5437 5 14.0625 5C14.5813 5 15 5.41875 15 5.9375C15 6.45625 14.5813 6.875 14.0625 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keyIcon = createIcon("key", iconDefinition440);

// src/noticons/src/keyAntique/default.icon.tsx
import { jsxDEV as jsxDEV443, Fragment as Fragment441 } from "react/jsx-dev-runtime";
var iconDefinition441 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV443(Fragment441, {
    children: /* @__PURE__ */ jsxDEV443("path", {
      d: "M12.5 2.5C10.0844 2.5 8.12499 4.45938 8.12499 6.875C8.12499 7.74375 8.38124 8.55 8.81874 9.23125L3.08749 14.9625L6.24999 18.125L7.57499 16.8L5.73749 14.9625L6.62187 14.0781L8.45937 15.9156L9.78437 14.5906L7.94687 12.7531L10.1406 10.5594C10.8219 10.9969 11.6281 11.2531 12.4969 11.2531C14.9125 11.2531 16.8719 9.29375 16.8719 6.87813C16.8719 4.4625 14.9125 2.50313 12.4969 2.50313L12.5 2.5ZM12.5 9.375C11.1187 9.375 9.99999 8.25625 9.99999 6.875C9.99999 5.49375 11.1187 4.375 12.5 4.375C13.8812 4.375 15 5.49375 15 6.875C15 8.25625 13.8812 9.375 12.5 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keyAntiqueIcon = createIcon("keyAntique", iconDefinition441);

// src/noticons/src/keyboard/default.icon.tsx
import { jsxDEV as jsxDEV444, Fragment as Fragment442 } from "react/jsx-dev-runtime";
var iconDefinition442 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV444(Fragment442, {
    children: /* @__PURE__ */ jsxDEV444("path", {
      d: "M17.1875 3.75H2.8125C2.04062 3.75 1.5625 4.22812 1.5625 5V15C1.5625 15.7719 2.04062 16.25 2.8125 16.25H17.1875C17.9594 16.25 18.4375 15.7719 18.4375 15V5C18.4375 4.22812 17.9594 3.75 17.1875 3.75ZM10.9375 5.625H12.8125V7.1875H10.9375V5.625ZM7.1875 5.625H9.0625V7.1875H7.1875V5.625ZM10.9375 9.0625V10.625H9.0625V9.0625H10.9375ZM3.4375 5.625H5.3125V7.1875H3.4375V5.625ZM5.3125 14.0625H3.4375V12.5H5.3125V14.0625ZM5.3125 9.0625H7.1875V10.625H5.3125V9.0625ZM12.8125 14.0625H7.1875V12.5H12.8125V14.0625ZM12.8125 9.0625H14.6875V10.625H12.8125V9.0625ZM16.5625 14.0625H14.6875V12.5H16.5625V14.0625ZM16.5625 7.1875H14.6875V5.625H16.5625V7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keyboardIcon = createIcon("keyboard", iconDefinition442);

// src/noticons/src/keyboardAlternate/default.icon.tsx
import { jsxDEV as jsxDEV445, Fragment as Fragment443 } from "react/jsx-dev-runtime";
var iconDefinition443 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV445(Fragment443, {
    children: /* @__PURE__ */ jsxDEV445("path", {
      d: "M7.5 7.5H5V5H7.5V7.5ZM11.25 5H8.75V7.5H11.25V5ZM14.375 11.25H16.875V8.75H14.375V11.25ZM15 5H12.5V7.5H15V5ZM10.625 11.25H13.125V8.75H10.625V11.25ZM6.875 11.25H9.375V8.75H6.875V11.25ZM16.25 15H18.75V12.5H16.25V15ZM16.25 5V7.5H18.75V5H16.25ZM5 15H15V12.5H5V15ZM3.125 11.25H5.625V8.75H3.125V11.25ZM1.25 15H3.75V12.5H1.25V15ZM3.76562 5H1.26563V7.5H3.76562V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keyboardAlternateIcon = createIcon("keyboardAlternate", iconDefinition443);

// src/noticons/src/keypad/default.icon.tsx
import { jsxDEV as jsxDEV446, Fragment as Fragment444 } from "react/jsx-dev-runtime";
var iconDefinition444 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV446(Fragment444, {
    children: /* @__PURE__ */ jsxDEV446("path", {
      d: "M8.4375 10.625H11.5625V13.125H8.4375V10.625ZM4.0625 16.875H11.5625V14.375H4.0625V16.875ZM8.4375 9.375H11.5625V6.875H8.4375V9.375ZM7.1875 10.625H4.0625V13.125H7.1875V10.625ZM7.1875 3.125H4.0625V5.625H7.1875V3.125ZM7.1875 6.875H4.0625V9.375H7.1875V6.875ZM12.8125 9.375H15.9375V6.875H12.8125V9.375ZM12.8125 3.125V5.625H15.9375V3.125H12.8125ZM12.8125 13.125H15.9375V10.625H12.8125V13.125ZM12.8125 16.875H15.9375V14.375H12.8125V16.875ZM8.4375 5.625H11.5625V3.125H8.4375V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var keypadIcon = createIcon("keypad", iconDefinition444);

// src/noticons/src/kind/default.icon.tsx
import { jsxDEV as jsxDEV447, Fragment as Fragment445 } from "react/jsx-dev-runtime";
var iconDefinition445 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV447(Fragment445, {
    children: /* @__PURE__ */ jsxDEV447("path", {
      d: "M12.0281 10H7.5V2.5H15V8.125H13.1125L12.0312 10H12.0281ZM6.25 11.25V6.875C3.83437 6.875 1.875 8.83437 1.875 11.25C1.875 13.6656 3.83437 15.625 6.25 15.625C8.66562 15.625 10.625 13.6656 10.625 11.25H6.25ZM14.9156 9.375H13.8344L10.0469 15.9375C10.2875 16.3531 10.3469 16.4594 10.5875 16.875H18.1656C18.4062 16.4594 18.4656 16.3531 18.7062 15.9375L14.9187 9.375H14.9156Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var kindIcon = createIcon("kind", iconDefinition445);

// src/noticons/src/kite/default.icon.tsx
import { jsxDEV as jsxDEV448, Fragment as Fragment446 } from "react/jsx-dev-runtime";
var iconDefinition446 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV448(Fragment446, {
    children: /* @__PURE__ */ jsxDEV448("path", {
      d: "M16.875 8.125L10.625 1.875V0.625H9.375V1.875L3.125 8.125H1.875V9.375H3.125L9.375 15.625V16.5625C9.375 17.9094 10.2156 18.75 11.5625 18.75H15V17.5H11.5625C10.9844 17.5 10.625 17.1406 10.625 16.5625V15.625L16.875 9.375H18.125V8.125H16.875ZM9.375 8.125H4.89375L9.375 3.64375V8.125ZM10.625 13.8562V9.375H15.1062L10.625 13.8562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var kiteIcon = createIcon("kite", iconDefinition446);

// src/noticons/src/knife/default.icon.tsx
import { jsxDEV as jsxDEV449, Fragment as Fragment447 } from "react/jsx-dev-runtime";
var iconDefinition447 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV449(Fragment447, {
    children: /* @__PURE__ */ jsxDEV449("path", {
      d: "M10.9375 2.5V17.5H9.0625V9.98438H7.1875V9.35938C7.1875 4.3 8.57812 2.5 10.9375 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var knifeIcon = createIcon("knife", iconDefinition447);

// src/noticons/src/knifeKitchen/default.icon.tsx
import { jsxDEV as jsxDEV450, Fragment as Fragment448 } from "react/jsx-dev-runtime";
var iconDefinition448 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV450(Fragment448, {
    children: /* @__PURE__ */ jsxDEV450("path", {
      d: "M18.125 5.15312L16.8219 6.45625C16.5438 6.73438 16.2312 6.875 15.9187 6.875C15.6062 6.875 15.3094 6.74062 15.0344 6.475L12.1656 9.34375L14.375 11.5531L12.4156 13.5125C9.91562 16.0125 7.8125 17.5 5.3125 17.5C4.11875 17.5 2.8125 17.0344 1.875 16.0969L15.4719 2.5L18.125 5.15312Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var knifeKitchenIcon = createIcon("knifeKitchen", iconDefinition448);

// src/noticons/src/language/default.icon.tsx
import { jsxDEV as jsxDEV451, Fragment as Fragment449 } from "react/jsx-dev-runtime";
var iconDefinition449 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV451(Fragment449, {
    children: /* @__PURE__ */ jsxDEV451("path", {
      d: "M6.25 6.0125L6.925 7.8125H5.575L6.25 6.0125ZM8.10938 7.45625C8.8875 6.43438 10.0063 5.69375 11.3906 5.30937C10.575 3.53437 8.75937 2.5 6.25 2.5C2.77813 2.5 0.625 4.475 0.625 7.65625C0.625 9.27812 1.1875 10.5844 2.19688 11.475L0.625 13.0469L1.09375 13.75C2.3625 13.75 3.53125 13.325 4.47188 12.6156C5.01562 12.7437 5.60938 12.8125 6.25 12.8125C6.50625 12.8125 6.75312 12.7969 6.99687 12.7781C6.91875 12.3438 6.875 11.8875 6.875 11.4062C6.875 10.5531 7.00937 9.77187 7.25625 9.0625H5.10625L4.75625 10H3.4375L5.3125 5H7.1875L8.10938 7.45625ZM13.75 11.6625C14.0594 11.3813 14.325 11.0406 14.5 10.625H13.0031C13.1781 11.0406 13.4437 11.3813 13.7531 11.6625H13.75ZM17.8031 15.225L19.375 16.7969L18.9062 17.5C17.6375 17.5 16.4688 17.075 15.5281 16.3656C14.9844 16.4937 14.3906 16.5625 13.75 16.5625C10.2781 16.5625 8.125 14.5875 8.125 11.4062C8.125 8.225 10.2781 6.25 13.75 6.25C17.2219 6.25 19.375 8.225 19.375 11.4062C19.375 13.0281 18.8125 14.3344 17.8031 15.225ZM16.5625 9.375H14.375V8.4375H13.125V9.375H10.9375V10.625H11.7156C11.8969 11.2406 12.2406 11.8313 12.7219 12.35C11.8594 12.775 11.0406 12.8937 11.0406 12.8937L11.4781 14.0656C12.3469 13.9094 13.1063 13.6031 13.7469 13.1969C14.3875 13.6031 15.15 13.9125 16.0156 14.0656L16.4531 12.8937C16.4531 12.8937 15.6344 12.775 14.7719 12.35C15.2563 11.8313 15.5969 11.2406 15.7781 10.625H16.5562V9.375H16.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var languageIcon = createIcon("language", iconDefinition449);

// src/noticons/src/laptop/default.icon.tsx
import { jsxDEV as jsxDEV452, Fragment as Fragment450 } from "react/jsx-dev-runtime";
var iconDefinition450 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV452(Fragment450, {
    children: /* @__PURE__ */ jsxDEV452("path", {
      d: "M16.875 12.5H3.125V5C3.125 4.22812 3.60313 3.75 4.375 3.75H15.625C16.3969 3.75 16.875 4.22812 16.875 5V12.5ZM1.25 13.75C1.25 15.2937 2.20625 16.25 3.75 16.25H16.25C17.7938 16.25 18.75 15.2937 18.75 13.75H1.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laptopIcon = createIcon("laptop", iconDefinition450);

// src/noticons/src/laundryBasket/default.icon.tsx
import { jsxDEV as jsxDEV453, Fragment as Fragment451 } from "react/jsx-dev-runtime";
var iconDefinition451 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV453(Fragment451, {
    children: /* @__PURE__ */ jsxDEV453("path", {
      d: "M7.5 7.5H3.75C3.75 5.57188 4.94688 4.375 6.875 4.375C7.43437 4.375 7.93125 4.47812 8.35625 4.66875C9.10625 3.68125 10.3188 3.125 11.875 3.125C14.575 3.125 16.25 4.8 16.25 7.5H7.5ZM18.125 8.75V10.625H16.875L15.8344 16.875H4.16563L3.125 10.625H1.875V8.75H18.125ZM9.0625 10.625V15H10.9375V10.625H9.0625ZM5.75625 15H7.1875V10.625H5.025L5.75312 15H5.75625ZM14.975 10.625H12.8125V15H14.2438L14.9719 10.625H14.975Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laundryBasketIcon = createIcon("laundryBasket", iconDefinition451);

// src/noticons/src/laundryDetergent/default.icon.tsx
import { jsxDEV as jsxDEV454, Fragment as Fragment452 } from "react/jsx-dev-runtime";
var iconDefinition452 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV454(Fragment452, {
    children: /* @__PURE__ */ jsxDEV454("path", {
      d: "M11.875 4.15V1.875H8.125V4.15C5.59063 5.26562 3.75 8.58125 3.75 12.5C3.75 14.3594 4.16563 16.0813 4.87188 17.5H15.1281C15.8344 16.0813 16.25 14.3594 16.25 12.5C16.25 8.58125 14.4094 5.26562 11.875 4.15ZM11.875 12.5V7.5H12.9656C13.825 8.76562 14.375 10.5531 14.375 12.5H11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laundryDetergentIcon = createIcon("laundryDetergent", iconDefinition452);

// src/noticons/src/laundryDryer/default.icon.tsx
import { jsxDEV as jsxDEV455, Fragment as Fragment453 } from "react/jsx-dev-runtime";
var iconDefinition453 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV455(Fragment453, {
    children: /* @__PURE__ */ jsxDEV455("path", {
      d: "M9.12812 11.575C8.91562 11.925 8.75 12.2 8.75 12.55C8.75 13.1844 9.32188 13.4938 9.34688 13.5063L8.78438 14.6219C8.30625 14.3844 7.5 13.6812 7.5 12.55C7.5 11.8531 7.80938 11.3406 8.05938 10.9281C8.27188 10.5781 8.4375 10.3031 8.4375 9.95312C8.4375 9.38125 7.80313 8.975 7.79375 8.97187L8.45 7.90625C8.5 7.9375 9.6875 8.67813 9.6875 9.95312C9.6875 10.65 9.37812 11.1625 9.12812 11.575ZM16.25 2.5V17.5H3.75V2.5H16.25ZM14.375 11.25C14.375 8.83437 12.4156 6.875 10 6.875C7.58437 6.875 5.625 8.83437 5.625 11.25C5.625 13.6656 7.58437 15.625 10 15.625C12.4156 15.625 14.375 13.6656 14.375 11.25ZM14.375 5.3125C14.375 4.79375 13.9563 4.375 13.4375 4.375C12.9187 4.375 12.5 4.79375 12.5 5.3125C12.5 5.83125 12.9187 6.25 13.4375 6.25C13.9563 6.25 14.375 5.83125 14.375 5.3125ZM12.5 9.95C12.5 8.675 11.3156 7.93438 11.2625 7.90313L10.6062 8.96875C10.6062 8.96875 11.25 9.38125 11.25 9.95C11.25 10.3 11.0844 10.575 10.8719 10.925C10.6219 11.3375 10.3125 11.85 10.3125 12.5469C10.3125 13.6781 11.1188 14.3844 11.5969 14.6187L12.1594 13.5031C12.1344 13.4906 11.5625 13.1813 11.5625 12.5469C11.5625 12.1969 11.7281 11.9219 11.9406 11.5719C12.1906 11.1594 12.5 10.6469 12.5 9.95Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laundryDryerIcon = createIcon("laundryDryer", iconDefinition453);

// src/noticons/src/laundryWasher/default.icon.tsx
import { jsxDEV as jsxDEV456, Fragment as Fragment454 } from "react/jsx-dev-runtime";
var iconDefinition454 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV456(Fragment454, {
    children: /* @__PURE__ */ jsxDEV456("path", {
      d: "M6.875 11.25H13.125C13.125 12.975 11.725 14.375 10 14.375C8.275 14.375 6.875 12.975 6.875 11.25ZM16.25 2.5V17.5H3.75V2.5H16.25ZM14.375 11.25C14.375 8.83437 12.4156 6.875 10 6.875C7.58437 6.875 5.625 8.83437 5.625 11.25C5.625 13.6656 7.58437 15.625 10 15.625C12.4156 15.625 14.375 13.6656 14.375 11.25ZM14.375 5.3125C14.375 4.79375 13.9563 4.375 13.4375 4.375C12.9187 4.375 12.5 4.79375 12.5 5.3125C12.5 5.83125 12.9187 6.25 13.4375 6.25C13.9563 6.25 14.375 5.83125 14.375 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var laundryWasherIcon = createIcon("laundryWasher", iconDefinition454);

// src/noticons/src/layers/default.icon.tsx
import { jsxDEV as jsxDEV457, Fragment as Fragment455 } from "react/jsx-dev-runtime";
var iconDefinition455 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV457(Fragment455, {
    children: /* @__PURE__ */ jsxDEV457("path", {
      d: "M14.5219 8.51255L16.25 9.37505V10.625L10 13.75L3.75 10.625V9.37505L5.47813 8.51255L10 10.775L14.5219 8.51255ZM10 15.15L5.47813 12.8876L3.75 13.75V15L10 18.125L16.25 15V13.75L14.5219 12.8876L10 15.15ZM10 1.87817L3.75 5.00317V6.25317L10 9.37817L16.25 6.25317V5.00317L10 1.87817Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var layersIcon = createIcon("layers", iconDefinition455);

// src/noticons/src/leaf/default.icon.tsx
import { jsxDEV as jsxDEV458, Fragment as Fragment456 } from "react/jsx-dev-runtime";
var iconDefinition456 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV458(Fragment456, {
    children: /* @__PURE__ */ jsxDEV458("path", {
      d: "M16.875 5.78125C16.875 11.8562 13.1062 15.625 7.03125 15.625C6.78438 15.625 6.55937 15.6187 6.34375 15.6062L3.825 18.125L2.5 16.8L10.9156 8.38438L10.0312 7.5L4.375 13.125L3.75 12.5V12.3438C3.75 6.26875 7.51875 2.5 13.5938 2.5C14.7031 2.5 15.4406 2.61563 16.4531 2.92188C16.7594 3.93125 16.875 4.66875 16.875 5.78125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var leafIcon = createIcon("leaf", iconDefinition456);

// src/noticons/src/leafMonstera/default.icon.tsx
import { jsxDEV as jsxDEV459, Fragment as Fragment457 } from "react/jsx-dev-runtime";
var iconDefinition457 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV459(Fragment457, {
    children: /* @__PURE__ */ jsxDEV459("path", {
      d: "M17.5 11.5625C17.5 10.575 17.375 9.63442 17.1375 8.75317C16.4594 9.26255 15.6937 9.68755 15.0781 9.68755C14.6469 9.68755 14.2969 9.33755 14.2969 8.9063C14.2969 8.1313 15.4531 7.90317 16.45 6.96567C15.9469 5.9813 15.2625 5.09692 14.4062 4.32505C14.0719 5.06255 13.3312 6.56567 12.3437 6.56567C11.9125 6.56567 11.5625 6.21567 11.5625 5.78442C11.5625 5.00005 12.8062 4.4813 12.8062 3.12817L12.85 3.15005L10.0031 1.25317L7.19061 3.12817C7.19061 4.4813 8.44061 5.00005 8.44061 5.78442C8.44061 6.21567 8.09061 6.56567 7.65936 6.56567C6.67186 6.56567 5.92499 5.0688 5.59061 4.3313C4.73749 5.10317 4.05311 5.98442 3.55311 6.9688C4.54999 7.9063 5.70624 8.13442 5.70624 8.90942C5.70624 9.34067 5.35624 9.69067 4.92499 9.69067C4.31249 9.69067 3.54686 9.26567 2.86561 8.7563C2.62499 9.63755 2.50311 10.5782 2.50311 11.5657C2.50311 11.5657 3.08436 12.4563 5.31561 12.8157L3.32499 14.1438C3.99061 15.0313 5.04999 15.6282 6.47811 15.6282C8.13124 15.6282 9.38124 14.6907 9.38124 14.6907C9.38124 14.6907 9.06874 16.2532 9.06874 17.5032H10.9437C10.9437 16.2532 10.6312 14.6907 10.6312 14.6907C10.6312 14.6907 11.8812 15.6282 13.5344 15.6282C14.9625 15.6282 16.0219 15.0313 16.6875 14.1438L14.6969 12.8157C16.9281 12.4563 17.5094 11.5657 17.5094 11.5657L17.5 11.5625ZM8.12499 12.5C7.35311 12.5 6.87499 12.0813 6.87499 11.4063C6.87499 10.7313 7.35311 10.3125 8.12499 10.3125C8.89686 10.3125 9.37499 10.7313 9.37499 11.4063C9.37499 12.0813 8.89686 12.5 8.12499 12.5ZM11.5625 9.68755C10.9844 9.68755 10.625 9.38755 10.625 8.9063C10.625 8.42505 10.9844 8.12505 11.5625 8.12505C12.1406 8.12505 12.5 8.42505 12.5 8.9063C12.5 9.38755 12.1406 9.68755 11.5625 9.68755Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var leafMonsteraIcon = createIcon("leafMonstera", iconDefinition457);

// src/noticons/src/lemon/default.icon.tsx
import { jsxDEV as jsxDEV460, Fragment as Fragment458 } from "react/jsx-dev-runtime";
var iconDefinition458 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV460(Fragment458, {
    children: /* @__PURE__ */ jsxDEV460("path", {
      d: "M16.25 7.5C16.25 8.05 16.125 8.525 15.9 8.90938C16.125 9.6125 16.25 10.3938 16.25 11.25C16.25 15.1062 13.8562 17.5 10 17.5C9.14375 17.5 8.3625 17.375 7.65938 17.15C7.275 17.3781 6.8 17.5 6.25 17.5C4.70625 17.5 3.75 16.5437 3.75 15C3.75 14.45 3.875 13.975 4.1 13.5906C3.875 12.8875 3.75 12.1062 3.75 11.25C3.75 7.39375 6.14375 5 10 5C10.8562 5 11.6375 5.125 12.3406 5.35C12.725 5.12188 13.2 5 13.75 5C13.9719 5 14.1781 5.02188 14.375 5.05938V3.75H12.1875C10.6438 3.75 9.6875 2.79375 9.6875 1.25H13.75C15.2937 1.25 16.25 2.20625 16.25 3.75V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lemonIcon = createIcon("lemon", iconDefinition458);

// src/noticons/src/leo/default.icon.tsx
import { jsxDEV as jsxDEV461, Fragment as Fragment459 } from "react/jsx-dev-runtime";
var iconDefinition459 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV461(Fragment459, {
    children: /* @__PURE__ */ jsxDEV461("path", {
      d: "M16.25 14.375C16.25 15.4094 15.4094 16.25 14.375 16.25C13.3406 16.25 12.5 15.4094 12.5 14.375C12.5 13.1313 12.7875 12.0312 13.0938 10.8625C13.4156 9.63125 13.75 8.35938 13.75 6.875C13.75 4.11875 11.5063 1.875 8.75 1.875C5.99375 1.875 3.75 4.11875 3.75 6.875C3.75 8.30937 4.39063 9.49062 5.0375 10.6281C5.025 10.6281 5.0125 10.6281 5 10.6281C3.27812 10.6281 1.875 12.0312 1.875 13.7531C1.875 15.475 3.27812 16.8781 5 16.8781C6.72188 16.8781 8.125 15.475 8.125 13.7531C8.125 12.2531 7.42813 11.0312 6.75 9.85C6.17188 8.8375 5.625 7.87813 5.625 6.87813C5.625 5.15625 7.02812 3.75313 8.75 3.75313C10.4719 3.75313 11.875 5.15625 11.875 6.87813C11.875 8.12188 11.5875 9.22188 11.2812 10.3906C10.9594 11.6219 10.625 12.8937 10.625 14.3781C10.625 16.4469 12.3062 18.1281 14.375 18.1281C16.4438 18.1281 18.125 16.4469 18.125 14.3781H16.25V14.375ZM6.25 13.75C6.25 14.4406 5.69062 15 5 15C4.30938 15 3.75 14.4406 3.75 13.75C3.75 13.0594 4.30938 12.5 5 12.5C5.69062 12.5 6.25 13.0594 6.25 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var leoIcon = createIcon("leo", iconDefinition459);

// src/noticons/src/libra/default.icon.tsx
import { jsxDEV as jsxDEV462, Fragment as Fragment460 } from "react/jsx-dev-runtime";
var iconDefinition460 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV462(Fragment460, {
    children: /* @__PURE__ */ jsxDEV462("path", {
      d: "M2.5 15H17.5V16.875H2.5V15ZM13.9031 10.625C14.5969 9.7625 15 8.66875 15 7.5C15 4.74375 12.7563 2.5 10 2.5C7.24375 2.5 5 4.74375 5 7.5C5 8.66875 5.40313 9.7625 6.09688 10.625H2.5V12.5H8.75V10.3625C7.61875 9.86875 6.875 8.75625 6.875 7.5C6.875 5.77812 8.27812 4.375 10 4.375C11.7219 4.375 13.125 5.77812 13.125 7.5C13.125 8.75625 12.3813 9.86875 11.25 10.3625V12.5H17.5V10.625H13.9031Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var libraIcon = createIcon("libra", iconDefinition460);

// src/noticons/src/library/default.icon.tsx
import { jsxDEV as jsxDEV463, Fragment as Fragment461 } from "react/jsx-dev-runtime";
var iconDefinition461 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV463(Fragment461, {
    children: /* @__PURE__ */ jsxDEV463("path", {
      d: "M17.5 7.5V5.625L10 1.875L2.5 5.625V7.5H4.375V14.375H2.5V16.875H17.5V14.375H15.625V7.5H17.5ZM10 3.75C10.6906 3.75 11.25 4.30938 11.25 5C11.25 5.69062 10.6906 6.25 10 6.25C9.30937 6.25 8.75 5.69062 8.75 5C8.75 4.30938 9.30937 3.75 10 3.75ZM6.875 7.5H8.75V14.375H6.875V7.5ZM13.125 14.375H11.25V7.5H13.125V14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var libraryIcon = createIcon("library", iconDefinition461);

// src/noticons/src/lightBulb/default.icon.tsx
import { jsxDEV as jsxDEV464, Fragment as Fragment462 } from "react/jsx-dev-runtime";
var iconDefinition462 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV464(Fragment462, {
    children: /* @__PURE__ */ jsxDEV464("path", {
      d: "M10 1.875C6.89375 1.875 4.375 4.39375 4.375 7.5C4.375 9 4.97187 10.4406 6.03125 11.5L6.94687 12.4156C7.3 12.7688 7.5 13.25 7.5 13.75H12.5C12.5 13.25 12.7 12.7688 13.0531 12.4156L13.9688 11.5C15.0312 10.4375 15.625 9 15.625 7.5C15.625 4.39375 13.1062 1.875 10 1.875ZM12.5 7.5H10.625V11.875H9.375V7.5H7.5V6.25H12.5V7.5ZM7.5 15H12.5V16.25L10.625 18.125H9.375L7.5 16.25V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lightBulbIcon = createIcon("lightBulb", iconDefinition462);

// src/noticons/src/lights/default.icon.tsx
import { jsxDEV as jsxDEV465, Fragment as Fragment463 } from "react/jsx-dev-runtime";
var iconDefinition463 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV465(Fragment463, {
    children: /* @__PURE__ */ jsxDEV465("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM10.5969 15.5906L13.0938 13.0938L12.2094 12.2094L8.90312 15.5156C8.45 15.425 8.00625 15.275 7.58125 15.0719L11.3281 11.325L10.4437 10.4406L6.49375 14.3938C6.14688 14.1156 5.8875 13.8562 5.60938 13.5094L9.5625 9.55625L8.67813 8.67188L4.93125 12.4188C4.72812 11.9938 4.57812 11.55 4.4875 11.0969L7.79375 7.79063L6.90938 6.90625L4.4125 9.40312C4.71563 6.54375 7.12812 4.375 10.0031 4.375C13.1094 4.375 15.6281 6.89375 15.6281 10C15.6281 12.8781 13.4594 15.2875 10.6 15.5906H10.5969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lightsIcon = createIcon("lights", iconDefinition463);

// src/noticons/src/link/default.icon.tsx
import { jsxDEV as jsxDEV466, Fragment as Fragment464 } from "react/jsx-dev-runtime";
var iconDefinition464 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV466(Fragment464, {
    children: /* @__PURE__ */ jsxDEV466("path", {
      d: "M8.67188 13.9781L9.99688 15.3032L8.9 16.4C8.16875 17.1313 7.20938 17.4969 6.24688 17.4969C4.175 17.4969 2.49688 15.8188 2.49688 13.7469C2.49688 12.7875 2.8625 11.8281 3.59375 11.0938L6.71875 7.96877C7.45 7.23752 8.40938 6.8719 9.37188 6.8719C10.3344 6.8719 11.2906 7.23752 12.025 7.96877L12.4656 8.4094L11.1406 9.7344L10.7 9.29377C10.3469 8.94065 9.875 8.74377 9.375 8.74377C8.875 8.74377 7.77813 9.56252 7.425 9.91877L4.925 12.4188C4.57188 12.7719 4.375 13.2438 4.375 13.7438C4.375 14.7781 5.21563 15.6188 6.25 15.6188C6.75 15.6188 7.22188 15.425 7.575 15.0688L8.67188 13.9719V13.9781ZM13.75 2.50002C12.7906 2.50002 11.8313 2.86565 11.0969 3.5969L10 4.69377L11.325 6.01877L12.4219 4.9219C12.775 4.56877 13.2469 4.3719 13.7469 4.3719C14.7813 4.3719 15.6219 5.21252 15.6219 6.2469C15.6219 6.7469 15.4281 7.21877 15.0719 7.5719L11.9469 10.6969C11.5938 11.05 11.1219 11.2469 10.6219 11.2469C10.1219 11.2469 9.65 11.0531 9.29688 10.6969L8.85625 10.2563L7.53125 11.5813L7.97188 12.0219C8.70313 12.7531 9.6625 13.1188 10.625 13.1188C11.5875 13.1188 12.5438 12.7531 13.2781 12.0219L16.4031 8.8969C17.1344 8.16565 17.5 7.20627 17.5 6.24377C17.5 4.1719 15.8219 2.49377 13.75 2.49377V2.50002Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var linkIcon = createIcon("link", iconDefinition464);

// src/noticons/src/lipstick/default.icon.tsx
import { jsxDEV as jsxDEV467, Fragment as Fragment465 } from "react/jsx-dev-runtime";
var iconDefinition465 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV467(Fragment465, {
    children: /* @__PURE__ */ jsxDEV467("path", {
      d: "M11.875 6.875H8.125V3.74063C8.125 3.28438 8.1625 2.97187 8.275 2.52813L8.75 0.625H9.375L11.1438 2.39375C11.6687 2.91875 11.875 3.42188 11.875 4.1625V6.87813V6.875ZM12.5 12.5V8.125H7.5V12.5H6.25V17.5H13.75V12.5H12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lipstickIcon = createIcon("lipstick", iconDefinition465);

// src/noticons/src/list/default.icon.tsx
import { jsxDEV as jsxDEV468, Fragment as Fragment466 } from "react/jsx-dev-runtime";
var iconDefinition466 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV468(Fragment466, {
    children: /* @__PURE__ */ jsxDEV468("path", {
      d: "M17.5 4.0625V5.9375H6.875V4.0625H17.5ZM6.875 10.9375H17.5V9.0625H6.875V10.9375ZM6.875 15.9375H17.5V14.0625H6.875V15.9375ZM3.75 3.75C3.05937 3.75 2.5 4.30937 2.5 5C2.5 5.69062 3.05937 6.25 3.75 6.25C4.44062 6.25 5 5.69062 5 5C5 4.30937 4.44062 3.75 3.75 3.75ZM3.75 8.75C3.05937 8.75 2.5 9.30937 2.5 10C2.5 10.6906 3.05937 11.25 3.75 11.25C4.44062 11.25 5 10.6906 5 10C5 9.30937 4.44062 8.75 3.75 8.75ZM3.75 13.75C3.05937 13.75 2.5 14.3094 2.5 15C2.5 15.6906 3.05937 16.25 3.75 16.25C4.44062 16.25 5 15.6906 5 15C5 14.3094 4.44062 13.75 3.75 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var listIcon = createIcon("list", iconDefinition466);

// src/noticons/src/listIndent/default.icon.tsx
import { jsxDEV as jsxDEV469, Fragment as Fragment467 } from "react/jsx-dev-runtime";
var iconDefinition467 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV469(Fragment467, {
    children: /* @__PURE__ */ jsxDEV469("path", {
      d: "M15 5.9375H6.25V4.0625H15V5.9375ZM9.375 9.0625V10.9375H18.125V9.0625H9.375ZM9.375 15.9375H18.125V14.0625H9.375V15.9375ZM3.125 3.75C2.43437 3.75 1.875 4.30937 1.875 5C1.875 5.69062 2.43437 6.25 3.125 6.25C3.81562 6.25 4.375 5.69062 4.375 5C4.375 4.30937 3.81562 3.75 3.125 3.75ZM6.25 8.75C5.55938 8.75 5 9.30937 5 10C5 10.6906 5.55938 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75ZM6.25 13.75C5.55938 13.75 5 14.3094 5 15C5 15.6906 5.55938 16.25 6.25 16.25C6.94063 16.25 7.5 15.6906 7.5 15C7.5 14.3094 6.94063 13.75 6.25 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var listIndentIcon = createIcon("listIndent", iconDefinition467);

// src/noticons/src/litterDisposal/default.icon.tsx
import { jsxDEV as jsxDEV470, Fragment as Fragment468 } from "react/jsx-dev-runtime";
var iconDefinition468 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV470(Fragment468, {
    children: /* @__PURE__ */ jsxDEV470("path", {
      d: "M4.6875 3.75C4.6875 2.78438 5.28437 2.1875 6.25 2.1875C7.21562 2.1875 7.8125 2.78438 7.8125 3.75C7.8125 4.71563 7.21562 5.3125 6.25 5.3125C5.28437 5.3125 4.6875 4.71563 4.6875 3.75ZM7.8125 7.8125H11.875V6.25H6.25C4.26875 6.25 3.3875 6.90312 2.67812 8.32187L1.5625 10.55L2.95938 11.25L4.19375 8.78438C4.3125 8.54688 4.45 8.4375 4.6875 8.4375V10.9375L2.5 17.5H4.475L6.25 12.1781L8.025 17.5H10L7.8125 10.9375V7.8125ZM15.625 7.5L14.375 6.25L13.125 7.5L14.375 8.75L15.625 7.5ZM18.125 10L16.875 17.5H11.875L10.625 10H18.125ZM15.3125 15L14.0625 13.75L12.8125 15L14.0625 16.25L15.3125 15ZM16.25 12.1875C16.25 11.6687 15.8313 11.25 15.3125 11.25C14.7937 11.25 14.375 11.6687 14.375 12.1875C14.375 12.7063 14.7937 13.125 15.3125 13.125C15.8313 13.125 16.25 12.7063 16.25 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var litterDisposalIcon = createIcon("litterDisposal", iconDefinition468);

// src/noticons/src/location/default.icon.tsx
import { jsxDEV as jsxDEV471, Fragment as Fragment469 } from "react/jsx-dev-runtime";
var iconDefinition469 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV471(Fragment469, {
    children: /* @__PURE__ */ jsxDEV471("path", {
      d: "M17.5 3.38437L12.7937 17.5H11.5625L9.29688 10.7031L2.5 8.4375V7.20625L16.6156 2.5L17.5 3.38437Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var locationIcon = createIcon("location", iconDefinition469);

// src/noticons/src/lock/default.icon.tsx
import { jsxDEV as jsxDEV472, Fragment as Fragment470 } from "react/jsx-dev-runtime";
var iconDefinition470 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV472(Fragment470, {
    children: /* @__PURE__ */ jsxDEV472("path", {
      d: "M13.75 8.125V6.25C13.75 3.9375 12.3125 2.5 10 2.5C7.6875 2.5 6.25 3.9375 6.25 6.25V8.125H3.75V17.5H16.25V8.125H13.75ZM8.125 6.25C8.125 4.97187 8.72188 4.375 10 4.375C11.2781 4.375 11.875 4.97187 11.875 6.25V8.125H8.125V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lockIcon = createIcon("lock", iconDefinition470);

// src/noticons/src/lockKeyhole/default.icon.tsx
import { jsxDEV as jsxDEV473, Fragment as Fragment471 } from "react/jsx-dev-runtime";
var iconDefinition471 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV473(Fragment471, {
    children: /* @__PURE__ */ jsxDEV473("path", {
      d: "M13.75 8.125V6.25C13.75 3.9375 12.3125 2.5 10 2.5C7.6875 2.5 6.25 3.9375 6.25 6.25V8.125H3.75V17.5H16.25V8.125H13.75ZM8.125 6.25C8.125 4.97187 8.72188 4.375 10 4.375C11.2781 4.375 11.875 4.97187 11.875 6.25V8.125H8.125V6.25ZM11.5625 15V15.625H8.4375V15L9.22188 12.9094C8.75625 12.6406 8.4375 12.1406 8.4375 11.5625C8.4375 10.7 9.1375 10 10 10C10.8625 10 11.5625 10.7 11.5625 11.5625C11.5625 12.1406 11.2438 12.6406 10.7781 12.9094L11.5625 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lockKeyholeIcon = createIcon("lockKeyhole", iconDefinition471);

// src/noticons/src/logIn/default.icon.tsx
import { jsxDEV as jsxDEV474, Fragment as Fragment472 } from "react/jsx-dev-runtime";
var iconDefinition472 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV474(Fragment472, {
    children: /* @__PURE__ */ jsxDEV474("path", {
      d: "M18.125 3.125V16.875L13.125 18.125H11.875V16.875H7.5V13.75H9.375V15H11.875V5H9.375V6.25H7.5V3.125H11.875V1.875H13.125L18.125 3.125ZM6.0125 5.9375L4.6875 7.2625L6.4875 9.0625H1.25V10.9375H6.4875L4.6875 12.7375L6.0125 14.0625L10.075 10L6.0125 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var logInIcon = createIcon("logIn", iconDefinition472);

// src/noticons/src/logOut/default.icon.tsx
import { jsxDEV as jsxDEV475, Fragment as Fragment473 } from "react/jsx-dev-runtime";
var iconDefinition473 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV475(Fragment473, {
    children: /* @__PURE__ */ jsxDEV475("path", {
      d: "M19.45 10L15.3875 14.0625L14.0625 12.7375L15.8625 10.9375H10.625V9.0625H15.8625L14.0625 7.2625L15.3875 5.9375L19.45 10ZM10.625 15H8.125V5H10.625V6.25H12.5V3.125H8.125V1.875H6.875L1.875 3.125V16.875L6.875 18.125H8.125V16.875H12.5V13.75H10.625V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var logOutIcon = createIcon("logOut", iconDefinition473);

// src/noticons/src/longBone/default.icon.tsx
import { jsxDEV as jsxDEV476, Fragment as Fragment474 } from "react/jsx-dev-runtime";
var iconDefinition474 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV476(Fragment474, {
    children: /* @__PURE__ */ jsxDEV476("path", {
      d: "M18.75 7.6063C18.75 8.5813 17.9594 9.37505 16.9812 9.37505C16.4344 9.37505 15.9469 9.12817 15.625 8.74067C15.625 7.65942 14.7656 6.87505 13.7812 6.87505C13.2937 6.87505 12.8219 7.0688 12.4781 7.41567L6.98125 12.9125C6.45625 13.4375 6.25 13.9407 6.25 14.6813V15.6282C6.25 16.4 5.77187 16.8782 5 16.8782C4.22813 16.8782 3.75 16.4 3.75 15.6282V14.3782H2.5C1.72812 14.3782 1.25 13.9 1.25 13.1282C1.25 12.3563 1.72812 11.8782 2.5 11.8782H3.44687C4.1875 11.8782 4.69063 11.6688 5.21563 11.1469L12.6094 3.75317C13.0562 3.3063 13.4875 3.12817 14.1187 3.12817C14.75 3.12817 15.1812 3.3063 15.6281 3.75317L15.6812 3.8063C15.4375 4.05005 15.3156 4.3688 15.3156 4.69067C15.3156 5.3813 15.875 5.94067 16.5656 5.94067C16.8844 5.94067 17.2063 5.8188 17.45 5.57505L18.2344 6.35942C18.5656 6.69067 18.7531 7.14067 18.7531 7.60942L18.75 7.6063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var longBoneIcon = createIcon("longBone", iconDefinition474);

// src/noticons/src/longSleeveShirt/default.icon.tsx
import { jsxDEV as jsxDEV477, Fragment as Fragment475 } from "react/jsx-dev-runtime";
var iconDefinition475 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV477(Fragment475, {
    children: /* @__PURE__ */ jsxDEV477("path", {
      d: "M19.0625 13.75L16.25 14.6875L14.375 9.0625V17.5H5.625V9.0625L3.75 14.6875L0.9375 13.75L4.25938 3.78125C4.54375 2.925 5.1375 2.5 6.0375 2.5H7.5C7.5 2.5 7.85 4.375 10 4.375C12.15 4.375 12.5 2.5 12.5 2.5H13.9625C14.8656 2.5 15.4562 2.92813 15.7406 3.78125L19.0625 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var longSleeveShirtIcon = createIcon("longSleeveShirt", iconDefinition475);

// src/noticons/src/loopedSquare/default.icon.tsx
import { jsxDEV as jsxDEV478, Fragment as Fragment476 } from "react/jsx-dev-runtime";
var iconDefinition476 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV478(Fragment476, {
    children: /* @__PURE__ */ jsxDEV478("path", {
      d: "M14.375 11.25H13.125V8.75H14.375C16.3031 8.75 17.5 7.55312 17.5 5.625C17.5 3.69687 16.3031 2.5 14.375 2.5C12.4469 2.5 11.25 3.69687 11.25 5.625V6.875H8.75V5.625C8.75 3.69687 7.55312 2.5 5.625 2.5C3.69687 2.5 2.5 3.69687 2.5 5.625C2.5 7.55312 3.69687 8.75 5.625 8.75H6.875V11.25H5.625C3.69687 11.25 2.5 12.4469 2.5 14.375C2.5 16.3031 3.69687 17.5 5.625 17.5C7.55312 17.5 8.75 16.3031 8.75 14.375V13.125H11.25V14.375C11.25 16.3031 12.4469 17.5 14.375 17.5C16.3031 17.5 17.5 16.3031 17.5 14.375C17.5 12.4469 16.3031 11.25 14.375 11.25ZM13.125 5.625C13.125 4.85313 13.6031 4.375 14.375 4.375C15.1469 4.375 15.625 4.85313 15.625 5.625C15.625 6.39687 15.1469 6.875 14.375 6.875H13.125V5.625ZM6.875 14.375C6.875 15.1469 6.39687 15.625 5.625 15.625C4.85313 15.625 4.375 15.1469 4.375 14.375C4.375 13.6031 4.85313 13.125 5.625 13.125H6.875V14.375ZM6.875 6.875H5.625C4.85313 6.875 4.375 6.39687 4.375 5.625C4.375 4.85313 4.85313 4.375 5.625 4.375C6.39687 4.375 6.875 4.85313 6.875 5.625V6.875ZM11.25 11.25H8.75V8.75H11.25V11.25ZM14.375 15.625C13.6031 15.625 13.125 15.1469 13.125 14.375V13.125H14.375C15.1469 13.125 15.625 13.6031 15.625 14.375C15.625 15.1469 15.1469 15.625 14.375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var loopedSquareIcon = createIcon("loopedSquare", iconDefinition476);

// src/noticons/src/lostAndFound/default.icon.tsx
import { jsxDEV as jsxDEV479, Fragment as Fragment477 } from "react/jsx-dev-runtime";
var iconDefinition477 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV479(Fragment477, {
    children: /* @__PURE__ */ jsxDEV479("path", {
      d: "M18.125 6.25V14.6875C18.125 16.4219 17.0469 17.5 15.3125 17.5C13.5781 17.5 12.5 16.4219 12.5 14.6875V12.5H11.9344L11.5281 13.7188C11.3438 14.2688 10.8906 14.4937 10.3438 14.3125C9.79375 14.1281 9.56875 13.675 9.75 13.1281L11.25 8.62813V6.25313H18.125V6.25ZM6.25 6.25V3.4375C6.25 2.85938 6.60938 2.5 7.1875 2.5C7.76562 2.5 8.125 2.85938 8.125 3.4375V4.375H10V3.4375C10 1.70312 8.92188 0.625 7.1875 0.625C5.45312 0.625 4.375 1.70312 4.375 3.4375V6.25H0.625L4.58437 18.125H6.04375L10.0031 6.25H6.25313H6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lostAndFoundIcon = createIcon("lostAndFound", iconDefinition477);

// src/noticons/src/lounge/default.icon.tsx
import { jsxDEV as jsxDEV480, Fragment as Fragment478 } from "react/jsx-dev-runtime";
var iconDefinition478 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV480(Fragment478, {
    children: /* @__PURE__ */ jsxDEV480("path", {
      d: "M17.5 11.875V16.25H15.625V13.75H4.375V16.25H2.5V8.125C1.34375 8.125 0.625 7.40625 0.625 6.25C0.625 5.09375 1.34375 4.375 2.5 4.375C3.29375 4.375 3.82187 4.70312 4.17812 5.4125L6.15937 9.375H15C16.5437 9.375 17.5 10.3313 17.5 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var loungeIcon = createIcon("lounge", iconDefinition478);

// src/noticons/src/luggage/default.icon.tsx
import { jsxDEV as jsxDEV481, Fragment as Fragment479 } from "react/jsx-dev-runtime";
var iconDefinition479 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV481(Fragment479, {
    children: /* @__PURE__ */ jsxDEV481("path", {
      d: "M13.75 5.625V3.125C13.75 1.58125 12.7937 0.625 11.25 0.625H8.75C7.20625 0.625 6.25 1.58125 6.25 3.125V5.625H4.375V18.125H6.25V19.375H8.125V18.125H11.875V19.375H13.75V18.125H15.625V5.625H13.75ZM8.125 3.125C8.125 2.61563 8.24062 2.5 8.75 2.5H11.25C11.7594 2.5 11.875 2.61563 11.875 3.125V5.625H8.125V3.125ZM13.75 10.625H6.25V9.375H13.75V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var luggageIcon = createIcon("luggage", iconDefinition479);

// src/noticons/src/luggageCart/default.icon.tsx
import { jsxDEV as jsxDEV482, Fragment as Fragment480 } from "react/jsx-dev-runtime";
var iconDefinition480 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV482(Fragment480, {
    children: /* @__PURE__ */ jsxDEV482("path", {
      d: "M5 13.125H18.125V15H15.9375V15.9375C15.9375 16.8 15.2375 17.5 14.375 17.5C13.5125 17.5 12.8125 16.8 12.8125 15.9375V15H9.375V15.9375C9.375 16.8 8.675 17.5 7.8125 17.5C6.95 17.5 6.25 16.8 6.25 15.9375V15H5C3.52813 15 2.5 13.9719 2.5 12.5V6.875C2.5 6.43125 2.31875 6.25 1.875 6.25H0.625V4.375H1.875C3.34687 4.375 4.375 5.40312 4.375 6.875V12.5C4.375 12.9438 4.55625 13.125 5 13.125ZM18.125 7.5V9.375C18.125 10.9187 17.1688 11.875 15.625 11.875H8.125C6.58125 11.875 5.625 10.9187 5.625 9.375V7.5C5.625 5.9625 6.5875 5 8.125 5V3.75C8.125 2.20625 9.08125 1.25 10.625 1.25H13.125C14.6687 1.25 15.625 2.20625 15.625 3.75V5C17.1625 5 18.125 5.9625 18.125 7.5ZM13.75 3.75C13.75 3.24063 13.6344 3.125 13.125 3.125H10.625C10.1156 3.125 10 3.24063 10 3.75V5H13.75V3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var luggageCartIcon = createIcon("luggageCart", iconDefinition480);

// src/noticons/src/lungs/default.icon.tsx
import { jsxDEV as jsxDEV483, Fragment as Fragment481 } from "react/jsx-dev-runtime";
var iconDefinition481 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV483(Fragment481, {
    children: /* @__PURE__ */ jsxDEV483("path", {
      d: "M18.125 9.99995V17.5H16.875L14.5719 16.35C13.1531 15.6406 12.5 14.5843 12.5 12.9968V11.9531L10 9.45308L7.5 11.9531V12.9968C7.5 14.5843 6.84688 15.6406 5.42813 16.35L3.125 17.5H1.875V9.99995C1.875 6.91558 3.79063 4.99995 6.875 4.99995H7.5V9.29995L7.65312 9.14683C8.4375 8.36245 8.75 7.6062 8.75 6.4937V2.49683H11.25V6.4937C11.25 7.6062 11.5625 8.35933 12.3469 9.14683L12.5 9.29995V4.99995H13.125C16.2094 4.99995 18.125 6.91558 18.125 9.99995Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var lungsIcon = createIcon("lungs", iconDefinition481);

// src/noticons/src/magicWand/default.icon.tsx
import { jsxDEV as jsxDEV484, Fragment as Fragment482 } from "react/jsx-dev-runtime";
var iconDefinition482 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV484(Fragment482, {
    children: /* @__PURE__ */ jsxDEV484("path", {
      d: "M12.1656 5.625L14.375 7.83437L11.2719 10.9375L9.0625 8.72812L12.1656 5.625ZM20 9.6875L18.25 9.25L17.8125 7.5H17.1875L16.75 9.25L15 9.6875V10.3125L16.75 10.75L17.1875 12.5H17.8125L18.25 10.75L20 10.3125V9.6875ZM5.9375 8.75H6.5625L7 7L8.75 6.5625V5.9375L7 5.5L6.5625 3.75H5.9375L5.5 5.5L3.75 5.9375V6.5625L5.5 7L5.9375 8.75ZM1.875 15.9156L4.08437 18.125L10.3875 11.8219L8.17812 9.6125L1.875 15.9156ZM15.875 4L18.125 3.4375V2.8125L15.875 2.25L15.3125 0H14.6875L14.125 2.25L11.875 2.8125V3.4375L14.125 4L14.6875 6.25H15.3125L15.875 4Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var magicWandIcon = createIcon("magicWand", iconDefinition482);

// src/noticons/src/magnet/default.icon.tsx
import { jsxDEV as jsxDEV485, Fragment as Fragment483 } from "react/jsx-dev-runtime";
var iconDefinition483 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV485(Fragment483, {
    children: /* @__PURE__ */ jsxDEV485("path", {
      d: "M7.5 5.625H3.125V2.5H7.5V5.625ZM12.5 10.625C12.5 12.1687 11.5437 13.125 10 13.125C8.45625 13.125 7.5 12.1687 7.5 10.625V6.875H3.125V10.625C3.125 14.8656 5.75938 17.5 10 17.5C14.2406 17.5 16.875 14.8656 16.875 10.625V6.875H12.5V10.625ZM12.5 2.5V5.625H16.875V2.5H12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var magnetIcon = createIcon("magnet", iconDefinition483);

// src/noticons/src/mahjong/default.icon.tsx
import { jsxDEV as jsxDEV486, Fragment as Fragment484 } from "react/jsx-dev-runtime";
var iconDefinition484 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV486(Fragment484, {
    children: /* @__PURE__ */ jsxDEV486("path", {
      d: "M7.8125 10H9.375V11.875H7.8125V10ZM5.9375 4.375H14.0625C14.6406 4.375 15 4.01562 15 3.4375C15 2.85938 14.6406 2.5 14.0625 2.5H5.9375C5.35938 2.5 5 2.85938 5 3.4375C5 4.01562 5.35938 4.375 5.9375 4.375ZM15 6.5625V16.5625C15 17.1375 14.6375 17.5 14.0625 17.5H5.9375C5.3625 17.5 5 17.1375 5 16.5625V6.5625C5 5.9875 5.3625 5.625 5.9375 5.625H14.0625C14.6375 5.625 15 5.9875 15 6.5625ZM13.4375 8.75H10.625V7.5H9.375V8.75H6.5625V13.75H7.8125V13.125H9.375V15.625H10.625V13.125H12.1875V13.75H13.4375V8.75ZM10.625 11.875H12.1875V10H10.625V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mahjongIcon = createIcon("mahjong", iconDefinition484);

// src/noticons/src/mail/default.icon.tsx
import { jsxDEV as jsxDEV487, Fragment as Fragment485 } from "react/jsx-dev-runtime";
var iconDefinition485 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV487(Fragment485, {
    children: /* @__PURE__ */ jsxDEV487("path", {
      d: "M17.5 3.75V6.875L10 10.625L2.5 6.875V3.75H17.5ZM2.5 8.27187V16.25H17.5V8.27187L10 12.0219L2.5 8.27187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mailIcon = createIcon("mail", iconDefinition485);

// src/noticons/src/makeupBrush/default.icon.tsx
import { jsxDEV as jsxDEV488, Fragment as Fragment486 } from "react/jsx-dev-runtime";
var iconDefinition486 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV488(Fragment486, {
    children: /* @__PURE__ */ jsxDEV488("path", {
      d: "M11.25 10L7.5 6.25L9.66562 1.91875C9.89375 1.45937 10.2375 1.25 10.75 1.25C12.2594 1.25 16.2531 4.04688 16.2531 6.75C16.2531 7.2625 16.0406 7.60313 15.5844 7.83437L11.2531 10H11.25ZM0.625 15.55L1.95 16.875L10 11.25L6.25 7.5L0.625 15.55ZM18.5125 13.0719C18.6625 13.4781 18.75 13.9156 18.75 14.375C18.75 16.4469 17.0719 18.125 15 18.125C12.9281 18.125 11.25 16.4469 11.25 14.375C11.25 12.3031 12.9281 10.625 15 10.625C15.4594 10.625 15.8969 10.7125 16.3031 10.8625L17.1656 10L19.375 12.2094L18.5125 13.0719ZM16.875 14.375C16.875 13.3406 16.0344 12.5 15 12.5C13.9656 12.5 13.125 13.3406 13.125 14.375C13.125 15.4094 13.9656 16.25 15 16.25C16.0344 16.25 16.875 15.4094 16.875 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var makeupBrushIcon = createIcon("makeupBrush", iconDefinition486);

// src/noticons/src/mandir/default.icon.tsx
import { jsxDEV as jsxDEV489, Fragment as Fragment487 } from "react/jsx-dev-runtime";
var iconDefinition487 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV489(Fragment487, {
    children: /* @__PURE__ */ jsxDEV489("path", {
      d: "M17.5 9.375V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H2.5V9.375H4.375L5.625 4.375H6.875L7.1875 5.625H8.125L9.375 0.625H10.625L11.875 5.625H12.8125L13.125 4.375H14.375L15.625 9.375H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mandirIcon = createIcon("mandir", iconDefinition487);

// src/noticons/src/map/default.icon.tsx
import { jsxDEV as jsxDEV490, Fragment as Fragment488 } from "react/jsx-dev-runtime";
var iconDefinition488 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV490(Fragment488, {
    children: /* @__PURE__ */ jsxDEV490("path", {
      d: "M11.25 3.75H12.5V14.375L8.75 16.25H7.5V5.625L11.25 3.75ZM1.25 3.75V14.375L5 16.25H6.25V5.625L2.5 3.75H1.25ZM15 3.75H13.75V14.375L17.5 16.25H18.75V5.625L15 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mapIcon = createIcon("map", iconDefinition488);

// src/noticons/src/mapPin/default.icon.tsx
import { jsxDEV as jsxDEV491, Fragment as Fragment489 } from "react/jsx-dev-runtime";
var iconDefinition489 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV491(Fragment489, {
    children: /* @__PURE__ */ jsxDEV491("path", {
      d: "M10.9375 10.5219V15L10.3125 17.5H9.6875L9.0625 15V10.5219C7.09687 10.0937 5.625 8.34375 5.625 6.25C5.625 3.83438 7.58438 1.875 10 1.875C12.4156 1.875 14.375 3.83438 14.375 6.25C14.375 8.34375 12.9031 10.0937 10.9375 10.5219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mapPinIcon = createIcon("mapPin", iconDefinition489);

// src/noticons/src/mapPinAlternate/default.icon.tsx
import { jsxDEV as jsxDEV492, Fragment as Fragment490 } from "react/jsx-dev-runtime";
var iconDefinition490 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV492(Fragment490, {
    children: /* @__PURE__ */ jsxDEV492("path", {
      d: "M10 1.875C7.2375 1.875 5 4.1125 5 6.875C5 7.69688 5.18125 8.4875 5.52813 9.18125L9.6875 17.5H10.3125L14.4719 9.18125C14.8188 8.4875 15 7.69688 15 6.875C15 4.1125 12.7625 1.875 10 1.875ZM10 10C8.275 10 6.875 8.6 6.875 6.875C6.875 5.15 8.275 3.75 10 3.75C11.725 3.75 13.125 5.15 13.125 6.875C13.125 8.6 11.725 10 10 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mapPinAlternateIcon = createIcon("mapPinAlternate", iconDefinition490);

// src/noticons/src/mathematics/default.icon.tsx
import { jsxDEV as jsxDEV493, Fragment as Fragment491 } from "react/jsx-dev-runtime";
var iconDefinition491 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV493(Fragment491, {
    children: /* @__PURE__ */ jsxDEV493("path", {
      d: "M15.1562 16.7188C15.1562 17.3219 14.6656 17.8125 14.0625 17.8125C13.4594 17.8125 12.9688 17.3219 12.9688 16.7188C12.9688 16.1156 13.4594 15.625 14.0625 15.625C14.6656 15.625 15.1562 16.1156 15.1562 16.7188ZM6.875 2.5H5V5H2.5V6.875H5V9.375H6.875V6.875H9.375V5H6.875V2.5ZM8.05 10.625L5.9375 12.7375L3.825 10.625L2.5 11.95L4.6125 14.0625L2.5 16.175L3.825 17.5L5.9375 15.3875L8.05 17.5L9.375 16.175L7.2625 14.0625L9.375 11.95L8.05 10.625ZM10.625 5V6.875H17.5V5H10.625ZM15.1562 11.4062C15.1562 10.8031 14.6656 10.3125 14.0625 10.3125C13.4594 10.3125 12.9688 10.8031 12.9688 11.4062C12.9688 12.0094 13.4594 12.5 14.0625 12.5C14.6656 12.5 15.1562 12.0094 15.1562 11.4062ZM10.625 15H17.5V13.125H10.625V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mathematicsIcon = createIcon("mathematics", iconDefinition491);

// src/noticons/src/meat/default.icon.tsx
import { jsxDEV as jsxDEV494, Fragment as Fragment492 } from "react/jsx-dev-runtime";
var iconDefinition492 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV494(Fragment492, {
    children: /* @__PURE__ */ jsxDEV494("path", {
      d: "M17.5 2.5V5.14063C17.5 6.875 17.2188 8.0625 16.4437 9.6125L12.5 17.5H10.625V7.45312C11.7469 7.29063 12.5 6.74687 12.5 6.74687L11.9406 5.625C11.9406 5.625 11.0844 6.24687 10 6.24687C8.91563 6.24687 8.05938 5.625 8.05938 5.625L7.5 6.74687C7.5 6.74687 8.25313 7.29063 9.375 7.45312V17.5H6.25V12.1719C4.06563 11.4 2.5 9.32188 2.5 6.875C2.5 5.10625 3.31875 3.53125 4.59375 2.5H8.125C8.125 3.65625 8.84375 4.375 10 4.375C11.1562 4.375 11.875 3.65625 11.875 2.5H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var meatIcon = createIcon("meat", iconDefinition492);

// src/noticons/src/medication/default.icon.tsx
import { jsxDEV as jsxDEV495, Fragment as Fragment493 } from "react/jsx-dev-runtime";
var iconDefinition493 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV495(Fragment493, {
    children: /* @__PURE__ */ jsxDEV495("path", {
      d: "M15 4.375H13.75V2.5H6.25V4.375H5V6.875H6.25V17.5H13.75V6.875H15V4.375ZM11.875 13.75H8.125V8.75H11.875V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var medicationIcon = createIcon("medication", iconDefinition493);

// src/noticons/src/meeting/default.icon.tsx
import { jsxDEV as jsxDEV496, Fragment as Fragment494 } from "react/jsx-dev-runtime";
var iconDefinition494 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV496(Fragment494, {
    children: /* @__PURE__ */ jsxDEV496("path", {
      d: "M8.4375 5.9375C8.4375 4.97188 9.03438 4.375 10 4.375C10.9656 4.375 11.5625 4.97188 11.5625 5.9375C11.5625 6.90313 10.9656 7.5 10 7.5C9.03438 7.5 8.4375 6.90313 8.4375 5.9375ZM17.8125 7.5C18.7781 7.5 19.375 6.90313 19.375 5.9375C19.375 4.97188 18.7781 4.375 17.8125 4.375C16.8469 4.375 16.25 4.97188 16.25 5.9375C16.25 6.90313 16.8469 7.5 17.8125 7.5ZM12.1875 9.6875C12.1875 8.91563 11.7094 8.4375 10.9375 8.4375H9.0625C8.29062 8.4375 7.8125 8.91563 7.8125 9.6875V11.875H12.1875V9.6875ZM5 15H15V13.125H5V15ZM18.75 8.4375H16.875C16.2156 8.4375 15.7719 8.65937 15.375 9.1875L14.2969 10.625H13.4375V11.875H14.9219L16.25 10.1031V15H20V9.6875C20 8.91563 19.5219 8.4375 18.75 8.4375ZM2.1875 7.5C3.15313 7.5 3.75 6.90313 3.75 5.9375C3.75 4.97188 3.15313 4.375 2.1875 4.375C1.22188 4.375 0.625 4.97188 0.625 5.9375C0.625 6.90313 1.22188 7.5 2.1875 7.5ZM6.5625 11.875V10.625H5.70312L4.625 9.1875C4.22813 8.65937 3.78437 8.4375 3.125 8.4375H1.25C0.478125 8.4375 0 8.91563 0 9.6875V15H3.75V10.1031L5.07812 11.875H6.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var meetingIcon = createIcon("meeting", iconDefinition494);

// src/noticons/src/megaphone/default.icon.tsx
import { jsxDEV as jsxDEV497, Fragment as Fragment495 } from "react/jsx-dev-runtime";
var iconDefinition495 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV497(Fragment495, {
    children: /* @__PURE__ */ jsxDEV497("path", {
      d: "M16.875 3.125V15.625H15.625L9.375 12.5H8.125L9.375 17.5H6.25L5 12.5C3.45625 12.5 2.5 11.5437 2.5 10V8.75C2.5 7.20625 3.45625 6.25 5 6.25H9.375L15.625 3.125H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var megaphoneIcon = createIcon("megaphone", iconDefinition495);

// src/noticons/src/menorah/default.icon.tsx
import { jsxDEV as jsxDEV498, Fragment as Fragment496 } from "react/jsx-dev-runtime";
var iconDefinition496 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV498(Fragment496, {
    children: /* @__PURE__ */ jsxDEV498("path", {
      d: "M9.0625 3.125C9.0625 2.60625 9.30937 2.25625 10 1.40625C10.6906 2.25625 10.9375 2.60625 10.9375 3.125C10.9375 3.64375 10.5188 4.0625 10 4.0625C9.48125 4.0625 9.0625 3.64375 9.0625 3.125ZM7.5 5.9375C8.01875 5.9375 8.4375 5.51875 8.4375 5C8.4375 4.48125 8.19063 4.13125 7.5 3.28125C6.80937 4.13125 6.5625 4.48125 6.5625 5C6.5625 5.51875 6.98125 5.9375 7.5 5.9375ZM15 5.9375C15.5188 5.9375 15.9375 5.51875 15.9375 5C15.9375 4.48125 15.6906 4.13125 15 3.28125C14.3094 4.13125 14.0625 4.48125 14.0625 5C14.0625 5.51875 14.4812 5.9375 15 5.9375ZM12.5 5.9375C13.0188 5.9375 13.4375 5.51875 13.4375 5C13.4375 4.48125 13.1906 4.13125 12.5 3.28125C11.8094 4.13125 11.5625 4.48125 11.5625 5C11.5625 5.51875 11.9812 5.9375 12.5 5.9375ZM5 5.9375C5.51875 5.9375 5.9375 5.51875 5.9375 5C5.9375 4.48125 5.69063 4.13125 5 3.28125C4.30938 4.13125 4.0625 4.48125 4.0625 5C4.0625 5.51875 4.48125 5.9375 5 5.9375ZM17.5 3.28125C16.8094 4.13125 16.5625 4.48125 16.5625 5C16.5625 5.51875 16.9812 5.9375 17.5 5.9375C18.0187 5.9375 18.4375 5.51875 18.4375 5C18.4375 4.48125 18.1906 4.13125 17.5 3.28125ZM3.4375 5C3.4375 4.48125 3.19062 4.13125 2.5 3.28125C1.80937 4.13125 1.5625 4.48125 1.5625 5C1.5625 5.51875 1.98125 5.9375 2.5 5.9375C3.01875 5.9375 3.4375 5.51875 3.4375 5ZM10.625 13.725V12.475C13.7281 12.2281 15.625 10.1313 15.625 6.875H14.375C14.375 9.35938 12.9531 10.9719 10.625 11.2156V9.95312C12.1812 9.71875 13.125 8.58437 13.125 6.875H11.875C11.875 7.80312 11.4062 8.44375 10.625 8.65937V5H9.375V8.65937C8.59375 8.44062 8.125 7.80312 8.125 6.875H6.875C6.875 8.58437 7.81875 9.71875 9.375 9.95312V11.2156C7.04688 10.9719 5.625 9.35938 5.625 6.875H4.375C4.375 10.1313 6.27187 12.2281 9.375 12.475V13.725C5.50312 13.475 3.125 10.9031 3.125 6.875H1.875C1.875 11.675 4.73125 14.7312 9.375 14.9812V16.25H5V17.5H15V16.25H10.625V14.9812C15.2688 14.7312 18.125 11.675 18.125 6.875H16.875C16.875 10.9031 14.4969 13.475 10.625 13.725Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var menorahIcon = createIcon("menorah", iconDefinition496);

// src/noticons/src/menstrualPad/default.icon.tsx
import { jsxDEV as jsxDEV499, Fragment as Fragment497 } from "react/jsx-dev-runtime";
var iconDefinition497 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV499(Fragment497, {
    children: /* @__PURE__ */ jsxDEV499("path", {
      d: "M13.3344 2.5C11.6875 2.5 10.1969 3.46875 9.525 4.975L8.94063 6.29062L7.65 5L4.99687 7.65312L6.2875 8.94375L4.97187 9.52812C3.46562 10.1969 2.49687 11.6906 2.49687 13.3375C2.49687 15.6375 4.3625 17.5031 6.6625 17.5031C8.30937 17.5031 9.8 16.5344 10.4719 15.0281L11.0563 13.7125L12.3469 15.0031L15 12.35L13.7094 11.0594L15.025 10.475C16.5313 9.80625 17.5 8.3125 17.5 6.66563C17.5 4.36562 15.6344 2.5 13.3344 2.5ZM14.2656 8.7625L12.5812 9.5125C11.2125 10.1219 10.1219 11.2094 9.5125 12.5812L8.7625 14.2656C8.39375 15.0938 7.57188 15.6281 6.66875 15.6281C5.40625 15.6281 4.37812 14.6 4.37812 13.3375C4.37812 12.4312 4.9125 11.6094 5.74063 11.2437L7.425 10.4938C8.79375 9.88438 9.88438 8.79688 10.4938 7.425L11.2437 5.74063C11.6125 4.9125 12.4344 4.37813 13.3375 4.37813C14.6 4.37813 15.6281 5.40625 15.6281 6.66875C15.6281 7.575 15.0938 8.39688 14.2656 8.7625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var menstrualPadIcon = createIcon("menstrualPad", iconDefinition497);

// src/noticons/src/merge/default.icon.tsx
import { jsxDEV as jsxDEV500, Fragment as Fragment498 } from "react/jsx-dev-runtime";
var iconDefinition498 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV500(Fragment498, {
    children: /* @__PURE__ */ jsxDEV500("path", {
      d: "M15.9375 15.7813V17.5H14.0625V15.7813C14.0625 14.6407 13.725 13.9657 12.8125 13.2813L11.0625 11.9688C10.6375 11.65 10.2844 11.3125 10 10.9469C9.71562 11.3125 9.3625 11.65 8.9375 11.9688L7.1875 13.2813C6.275 13.9657 5.9375 14.6407 5.9375 15.7813V17.5H4.0625V15.7813C4.0625 14.0532 4.67812 12.8188 6.0625 11.7813L7.8125 10.4688C8.725 9.78442 9.0625 9.10942 9.0625 7.9688V5.38755L7.2625 7.18755L5.9375 5.86255L10 1.80005L14.0625 5.86255L12.7375 7.18755L10.9375 5.38755V7.9688C10.9375 9.10942 11.275 9.78442 12.1875 10.4688L13.9375 11.7813C15.3219 12.8188 15.9375 14.0532 15.9375 15.7813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mergeIcon = createIcon("merge", iconDefinition498);

// src/noticons/src/metronome/default.icon.tsx
import { jsxDEV as jsxDEV501, Fragment as Fragment499 } from "react/jsx-dev-runtime";
var iconDefinition499 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV501(Fragment499, {
    children: /* @__PURE__ */ jsxDEV501("path", {
      d: "M16.25 11.25V17.5H3.75V11.25L8.125 2.5H11.875L12.3719 3.49063L11.325 5.5875L10.7188 4.375H9.2875L5.85 11.25H9.89375L13.9563 3.125L15.6344 3.9625L11.9906 11.25H14.1594L13.775 10.4781L14.8219 8.38125L16.2563 11.2469L16.25 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var metronomeIcon = createIcon("metronome", iconDefinition499);

// src/noticons/src/microphone/default.icon.tsx
import { jsxDEV as jsxDEV502, Fragment as Fragment500 } from "react/jsx-dev-runtime";
var iconDefinition500 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV502(Fragment500, {
    children: /* @__PURE__ */ jsxDEV502("path", {
      d: "M10.9375 14.3125V15.625H13.75V17.5H6.25V15.625H9.0625V14.3125C6.14688 13.9531 4.375 11.8938 4.375 8.75H6.25C6.25 11.0625 7.6875 12.5 10 12.5C12.3125 12.5 13.75 11.0625 13.75 8.75H15.625C15.625 11.8938 13.8531 13.9531 10.9375 14.3125ZM10 11.25C11.5437 11.25 12.5 10.2937 12.5 8.75V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V8.75C7.5 10.2937 8.45625 11.25 10 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var microphoneIcon = createIcon("microphone", iconDefinition500);

// src/noticons/src/microphoneOff/default.icon.tsx
import { jsxDEV as jsxDEV503, Fragment as Fragment501 } from "react/jsx-dev-runtime";
var iconDefinition501 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV503(Fragment501, {
    children: /* @__PURE__ */ jsxDEV503("path", {
      d: "M14.7375 12.0844L13.3281 10.675C13.6031 10.1344 13.75 9.4875 13.75 8.74687H15.625C15.625 10.0656 15.3125 11.1906 14.7375 12.0813V12.0844ZM12.5 8.75V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V4.84688L12.3531 9.7C12.4469 9.41563 12.5 9.09687 12.5 8.74687V8.75ZM10.9375 12.5H10C7.6875 12.5 6.25 11.0625 6.25 8.75H4.375C4.375 11.8938 6.14687 13.9531 9.0625 14.3125V15.625H6.25V17.5H13.75V15.625H10.9375V12.5ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var microphoneOffIcon = createIcon("microphoneOff", iconDefinition501);

// src/noticons/src/microscope/default.icon.tsx
import { jsxDEV as jsxDEV504, Fragment as Fragment502 } from "react/jsx-dev-runtime";
var iconDefinition502 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV504(Fragment502, {
    children: /* @__PURE__ */ jsxDEV504("path", {
      d: "M16.0406 10.0469L14.3594 13.4094L15.3594 15.4094C15.5531 15.7969 15.6219 16.0938 15.6219 16.5281V17.5H3.125V15.625H10.625V14.375H5V12.5H12.0187L13.5719 9.39375L11.3875 8.30312L10.225 10.625L6.87187 8.94687L10.0938 2.5L10.9312 2.91875L11.7656 1.25L13.4438 2.0875L12.6094 3.75625L13.4469 4.175L12.5031 6.0625L15.15 7.38437C15.825 7.72187 16.2437 8.4 16.2437 9.15625C16.2437 9.4625 16.1719 9.76875 16.0344 10.0406L16.0406 10.0469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var microscopeIcon = createIcon("microscope", iconDefinition502);

// src/noticons/src/microwave/default.icon.tsx
import { jsxDEV as jsxDEV505, Fragment as Fragment503 } from "react/jsx-dev-runtime";
var iconDefinition503 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV505(Fragment503, {
    children: /* @__PURE__ */ jsxDEV505("path", {
      d: "M1.875 3.75V16.25H18.125V3.75H1.875ZM12.5 13.125C12.5 13.8969 12.0219 14.375 11.25 14.375H5C4.22813 14.375 3.75 13.8969 3.75 13.125V6.875C3.75 6.10313 4.22813 5.625 5 5.625H11.25C12.0219 5.625 12.5 6.10313 12.5 6.875V13.125ZM15.3125 7.5C14.7937 7.5 14.375 7.08125 14.375 6.5625C14.375 6.04375 14.7937 5.625 15.3125 5.625C15.8313 5.625 16.25 6.04375 16.25 6.5625C16.25 7.08125 15.8313 7.5 15.3125 7.5ZM10.6938 7.52813L11.8062 8.09688C11.7719 8.1625 10.9781 9.6875 9.56875 9.6875C8.78438 9.6875 8.21562 9.275 7.75938 8.94375C7.32812 8.63125 7.04375 8.4375 6.68437 8.4375C5.95937 8.4375 5.58125 9.29688 5.57812 9.30625L4.425 8.825C4.45312 8.75938 5.12187 7.19063 6.68437 7.19063C7.46875 7.19063 8.0375 7.60312 8.49375 7.93437C8.925 8.24687 9.20938 8.44063 9.56875 8.44063C10.2031 8.44063 10.6906 7.54063 10.6938 7.53125V7.52813ZM10.6938 10.6531L11.8062 11.2219C11.7719 11.2875 10.9781 12.8125 9.56875 12.8125C8.78438 12.8125 8.21562 12.4 7.75938 12.0687C7.32812 11.7562 7.04375 11.5625 6.68437 11.5625C5.95937 11.5625 5.58438 12.4187 5.58125 12.425L4.425 11.9469C4.45312 11.8812 5.12187 10.3094 6.68437 10.3094C7.46875 10.3094 8.0375 10.7219 8.49375 11.0531C8.925 11.3656 9.20938 11.5594 9.56875 11.5594C10.2031 11.5594 10.6906 10.6594 10.6938 10.65V10.6531Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var microwaveIcon = createIcon("microwave", iconDefinition503);

// src/noticons/src/midtones/default.icon.tsx
import { jsxDEV as jsxDEV506, Fragment as Fragment504 } from "react/jsx-dev-runtime";
var iconDefinition504 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV506(Fragment504, {
    children: /* @__PURE__ */ jsxDEV506("path", {
      d: "M10 2.5C5.85625 2.5 2.5 5.85625 2.5 10C2.5 14.1438 5.85625 17.5 10 17.5C14.1438 17.5 17.5 14.1438 17.5 10C17.5 5.85625 14.1438 2.5 10 2.5ZM9.40312 4.40937L4.40937 9.40312C4.6875 6.76562 6.76562 4.6875 9.40312 4.40937ZM4.48125 11.0969L11.0938 4.48438C11.5469 4.575 11.9906 4.725 12.4156 4.92813L4.92188 12.4219C4.71875 11.9969 4.56875 11.5531 4.47812 11.1L4.48125 11.0969ZM5.60313 13.5094L13.5063 5.60625C13.8531 5.88438 14.1125 6.14375 14.3906 6.49063L6.4875 14.3938C6.14062 14.1156 5.88125 13.8562 5.60313 13.5094ZM8.9 15.5156C8.44687 15.425 8.00313 15.275 7.57812 15.0719L15.0719 7.57812C15.275 8.00313 15.425 8.44687 15.5156 8.9L8.90312 15.5125L8.9 15.5156ZM10.5938 15.5906L15.5875 10.5969C15.3094 13.2344 13.2313 15.3125 10.5938 15.5906Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var midtonesIcon = createIcon("midtones", iconDefinition504);

// src/noticons/src/mirror/default.icon.tsx
import { jsxDEV as jsxDEV507, Fragment as Fragment505 } from "react/jsx-dev-runtime";
var iconDefinition505 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV507(Fragment505, {
    children: /* @__PURE__ */ jsxDEV507("path", {
      d: "M14.9563 6.25C14.6469 3.78438 12.55 1.875 10 1.875C7.45 1.875 5.35 3.78438 5.04375 6.25H2.5V6.875C2.5 10.5906 5.20312 13.675 8.75 14.2688V16.25H5V17.5H15V16.25H11.25V14.2688C14.7969 13.6719 17.5 10.5906 17.5 6.875V6.25H14.9563ZM10 3.75C11.725 3.75 13.125 5.15 13.125 6.875C13.125 8.6 11.725 10 10 10C8.275 10 6.875 8.6 6.875 6.875C6.875 5.15 8.275 3.75 10 3.75ZM10 13.125C6.75938 13.125 4.09375 10.6594 3.78125 7.5H5.04375C5.35312 9.96562 7.45 11.875 10 11.875C12.55 11.875 14.65 9.96562 14.9563 7.5H16.2188C15.9062 10.6594 13.2406 13.125 10 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mirrorIcon = createIcon("mirror", iconDefinition505);

// src/noticons/src/mobile/default.icon.tsx
import { jsxDEV as jsxDEV508, Fragment as Fragment506 } from "react/jsx-dev-runtime";
var iconDefinition506 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV508(Fragment506, {
    children: /* @__PURE__ */ jsxDEV508("path", {
      d: "M4.375 11.25H2.5V7.9375L9.0625 4.65625V2.5H10.9375V4.65625L17.5 7.9375V11.25H15.625V9.09375L10.9375 6.75V11.25H9.0625V6.75L4.375 9.09375V11.25ZM12.8062 13.75H10.8344L10.225 11.875H9.77188L9.1625 13.75H7.19063L7.05 14.1813L8.64375 15.3406L8.03437 17.2156L8.4 17.4812L9.99375 16.325C9.99375 16.325 9.99687 16.325 10 16.325L11.5938 17.4812L11.9594 17.2156L11.35 15.3406L12.9437 14.1813L12.8031 13.75H12.8062ZM4.6875 13.4375C4.725 13.4375 4.7625 13.4469 4.8 13.45L5 13.05C4.57188 12.7062 4.02813 12.5 3.4375 12.5C2.05625 12.5 0.9375 13.6187 0.9375 15C0.9375 16.3813 2.05625 17.5 3.4375 17.5C4.02813 17.5 4.57188 17.2938 5 16.95L4.8 16.55C4.7625 16.55 4.725 16.5625 4.6875 16.5625C3.825 16.5625 3.125 15.8625 3.125 15C3.125 14.1375 3.825 13.4375 4.6875 13.4375ZM16.5625 12.5C15.1812 12.5 14.0625 13.6187 14.0625 15C14.0625 16.3813 15.1812 17.5 16.5625 17.5C17.9438 17.5 19.0625 16.3813 19.0625 15C19.0625 13.6187 17.9438 12.5 16.5625 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mobileIcon = createIcon("mobile", iconDefinition506);

// src/noticons/src/monorail/default.icon.tsx
import { jsxDEV as jsxDEV509, Fragment as Fragment507 } from "react/jsx-dev-runtime";
var iconDefinition507 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV509(Fragment507, {
    children: /* @__PURE__ */ jsxDEV509("path", {
      d: "M8.75 15.625H11.25V18.75H8.75V15.625ZM15.8188 12.0594L14.2125 16.875H12.4969V14.375H7.49688V16.875H5.78125L4.175 12.0594C3.60313 10.3406 3.60313 9.0375 4.175 7.31563L5.45625 3.46875C6.25 3.08125 7.38438 2.69063 8.875 2.55313L9.4 0.9375H10.5906L11.1156 2.55313C12.6031 2.69063 13.7406 3.08438 14.5344 3.46875L15.8156 7.31563C16.3875 9.03438 16.3875 10.3375 15.8156 12.0594H15.8188ZM7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM14.3219 8.75L13.0281 4.8625C12.2812 4.59688 11.2781 4.375 10.0031 4.375C8.72812 4.375 7.72188 4.59688 6.97813 4.8625C6.97813 4.8625 5.87813 8.15938 5.68438 8.75H14.3281H14.3219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var monorailIcon = createIcon("monorail", iconDefinition507);

// src/noticons/src/moon/default.icon.tsx
import { jsxDEV as jsxDEV510, Fragment as Fragment508 } from "react/jsx-dev-runtime";
var iconDefinition508 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV510(Fragment508, {
    children: /* @__PURE__ */ jsxDEV510("path", {
      d: "M17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5L10.475 3.45313C8.73438 4.1375 7.5 5.82812 7.5 7.8125C7.5 10.4 9.6 12.5 12.1875 12.5C14.1719 12.5 15.8625 11.2656 16.5469 9.525L17.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var moonIcon = createIcon("moon", iconDefinition508);

// src/noticons/src/mop/default.icon.tsx
import { jsxDEV as jsxDEV511, Fragment as Fragment509 } from "react/jsx-dev-runtime";
var iconDefinition509 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV511(Fragment509, {
    children: /* @__PURE__ */ jsxDEV511("path", {
      d: "M16.4594 15.4156V16.875H7.65625L6.48438 14.5344C6.00625 13.575 5.83125 12.8437 5.83125 11.7719C5.83125 9.85 7.11875 8.55313 9.05938 8.21563V1.25H10.9344V8.18125C12.9719 8.45937 14.2688 9.78125 14.2688 11.7688V13.2281C14.2688 14.5781 15.1063 15.4156 16.4563 15.4156H16.4594Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mopIcon = createIcon("mop", iconDefinition509);

// src/noticons/src/mopAndBucket/default.icon.tsx
import { jsxDEV as jsxDEV512, Fragment as Fragment510 } from "react/jsx-dev-runtime";
var iconDefinition510 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV512(Fragment510, {
    children: /* @__PURE__ */ jsxDEV512("path", {
      d: "M10.625 15.625V16.875H2.8125L1.80937 14.8688C1.4 14.0469 1.25 13.4187 1.25 12.5C1.25 10.8656 2.4 9.75938 4.0625 9.45938V1.25H5.9375V9.45938C7.6 9.75938 8.75 10.8656 8.75 12.5V13.75C8.75 14.9062 9.46875 15.625 10.625 15.625ZM19.375 9.375H10.625V11.25H11.5625L12.5 16.875H17.5L18.4375 11.25H19.375V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mopAndBucketIcon = createIcon("mopAndBucket", iconDefinition510);

// src/noticons/src/more/default.icon.tsx
import { jsxDEV as jsxDEV513, Fragment as Fragment511 } from "react/jsx-dev-runtime";
var iconDefinition511 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV513(Fragment511, {
    children: /* @__PURE__ */ jsxDEV513("path", {
      d: "M17.5 10C17.5 11.0344 16.6594 11.875 15.625 11.875C14.5906 11.875 13.75 11.0344 13.75 10C13.75 8.96563 14.5906 8.125 15.625 8.125C16.6594 8.125 17.5 8.96563 17.5 10ZM4.375 8.125C3.34063 8.125 2.5 8.96563 2.5 10C2.5 11.0344 3.34063 11.875 4.375 11.875C5.40937 11.875 6.25 11.0344 6.25 10C6.25 8.96563 5.40937 8.125 4.375 8.125ZM10 8.125C8.96562 8.125 8.125 8.96563 8.125 10C8.125 11.0344 8.96562 11.875 10 11.875C11.0344 11.875 11.875 11.0344 11.875 10C11.875 8.96563 11.0344 8.125 10 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var moreIcon = createIcon("more", iconDefinition511);

// src/noticons/src/mosque/default.icon.tsx
import { jsxDEV as jsxDEV514, Fragment as Fragment512 } from "react/jsx-dev-runtime";
var iconDefinition512 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV514(Fragment512, {
    children: /* @__PURE__ */ jsxDEV514("path", {
      d: "M2.5 5.625L3.75 8.125V16.875H1.25V8.125L2.5 5.625ZM17.5 5.625L16.25 8.125V16.875H18.75V8.125L17.5 5.625ZM15 5C15 3.125 12.5 1.875 10 0.625C7.5 1.875 5 3.125 5 5C5 6.0375 5.76875 6.88125 6.875 7.43125V8.125H5V16.875H8.75V13.75C8.75 12.9781 9.22813 12.5 10 12.5C10.7719 12.5 11.25 12.9781 11.25 13.75V16.875H15V8.125H13.125V7.43125C14.2312 6.88125 15 6.0375 15 5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mosqueIcon = createIcon("mosque", iconDefinition512);

// src/noticons/src/motorcycle/default.icon.tsx
import { jsxDEV as jsxDEV515, Fragment as Fragment513 } from "react/jsx-dev-runtime";
var iconDefinition513 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV515(Fragment513, {
    children: [
      /* @__PURE__ */ jsxDEV515("g", {
        "clip-path": "url(#clip0_1501_15502)",
        children: /* @__PURE__ */ jsxDEV515("path", {
          d: "M16.5625 9.375C16.3563 9.375 16.1563 9.39687 15.9625 9.43125L15.5188 8.24687C15.8563 8.16875 16.2031 8.125 16.5625 8.125V7.1875C16.5625 4.875 15.125 3.4375 12.8125 3.4375H10V4.6875H12.8469L13.1313 5.45C12.2156 5.87813 11.3938 6.46875 10.7031 7.1875H8.24376L7.77501 5.9375H4.05939V7.1875C5.16876 7.1875 6.05939 7.48438 6.74376 8.08125L5.18751 9.85938C4.67501 9.55312 4.07501 9.375 3.43439 9.375C1.53439 9.375 -0.00311279 10.9125 -0.00311279 12.8125C-0.00311279 14.7125 1.53439 16.25 3.43439 16.25C5.11876 16.25 6.51876 15.0375 6.81251 13.4375H11.8719V12.8125C11.8719 11.025 12.8719 9.47188 14.3438 8.68125L14.7906 9.86875C13.7938 10.4719 13.125 11.5625 13.125 12.8125C13.125 14.7125 14.6625 16.25 16.5625 16.25C18.4625 16.25 20 14.7125 20 12.8125C20 10.9125 18.4625 9.375 16.5625 9.375ZM6.13126 10.6813L7.54064 9.06875C7.67814 9.30938 7.80314 9.56875 7.90939 9.85313L8.78439 12.1875H6.81564C6.71251 11.625 6.47189 11.1125 6.13126 10.6813Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV515("defs", {
        children: /* @__PURE__ */ jsxDEV515("clipPath", {
          id: "clip0_1501_15502",
          children: /* @__PURE__ */ jsxDEV515("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var motorcycleIcon = createIcon("motorcycle", iconDefinition513);

// src/noticons/src/mountains/default.icon.tsx
import { jsxDEV as jsxDEV516, Fragment as Fragment514 } from "react/jsx-dev-runtime";
var iconDefinition514 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV516(Fragment514, {
    children: /* @__PURE__ */ jsxDEV516("path", {
      d: "M20 15V16.25H0V15L6.25 5.625H7.5L11.6656 11.875L14.1656 8.125H15.4156L20 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mountainsIcon = createIcon("mountains", iconDefinition514);

// src/noticons/src/mouth/default.icon.tsx
import { jsxDEV as jsxDEV517, Fragment as Fragment515 } from "react/jsx-dev-runtime";
var iconDefinition515 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV517(Fragment515, {
    children: /* @__PURE__ */ jsxDEV517("path", {
      d: "M12.5 4.375L10 5.625L7.5 4.375L0.625 7.8125C0.625 7.8125 2.55313 15.625 10 15.625C17.4469 15.625 19.375 7.8125 19.375 7.8125L12.5 4.375ZM10 11.875C6.1875 11.875 5 9.375 5 9.375L7.5 8.125L8.81562 8.78438C9.18437 8.96875 9.5875 9.0625 10 9.0625C10.4125 9.0625 10.8156 8.96563 11.1844 8.78438L12.5 8.125L15 9.375C15 9.375 13.8125 11.875 10 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mouthIcon = createIcon("mouth", iconDefinition515);

// src/noticons/src/move/default.icon.tsx
import { jsxDEV as jsxDEV518, Fragment as Fragment516 } from "react/jsx-dev-runtime";
var iconDefinition516 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV518(Fragment516, {
    children: /* @__PURE__ */ jsxDEV518("path", {
      d: "M2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V13.4375H6.61562L5 15.0531L5.88438 15.9375L9.00938 12.8125L5.88438 9.6875L5 10.5719L6.61562 12.1875H2.5V8.75ZM11.0125 5C10.0656 5 9.41875 4.73438 8.75 4.0625C8.07812 3.39062 7.43438 3.125 6.4875 3.125H2.5V7.5H17.5V5H11.0125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var moveIcon = createIcon("move", iconDefinition516);

// src/noticons/src/moveDocument/default.icon.tsx
import { jsxDEV as jsxDEV519, Fragment as Fragment517 } from "react/jsx-dev-runtime";
var iconDefinition517 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV519(Fragment517, {
    children: /* @__PURE__ */ jsxDEV519("path", {
      d: "M9.375 9.375H16.25V17.5H3.75V13.4375H7.86562L6.25 15.0531L7.13438 15.9375L10.2594 12.8125L7.13438 9.6875L6.25 10.5719L7.86562 12.1875H3.75V2.5H9.375V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var moveDocumentIcon = createIcon("moveDocument", iconDefinition517);

// src/noticons/src/movie/default.icon.tsx
import { jsxDEV as jsxDEV520, Fragment as Fragment518 } from "react/jsx-dev-runtime";
var iconDefinition518 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV520(Fragment518, {
    children: /* @__PURE__ */ jsxDEV520("path", {
      d: "M1.875 3.4375V16.5625H18.125V3.4375H1.875ZM5.625 14.6875H3.75V12.8125H5.625V14.6875ZM5.625 10.9375H3.75V9.0625H5.625V10.9375ZM5.625 7.1875H3.75V5.3125H5.625V7.1875ZM12.5 14.6875H7.5V11.25H12.5V14.6875ZM12.5 8.75H7.5V5.3125H12.5V8.75ZM16.25 14.6875H14.375V12.8125H16.25V14.6875ZM16.25 10.9375H14.375V9.0625H16.25V10.9375ZM16.25 7.1875H14.375V5.3125H16.25V7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var movieIcon = createIcon("movie", iconDefinition518);

// src/noticons/src/movieCamera/default.icon.tsx
import { jsxDEV as jsxDEV521, Fragment as Fragment519 } from "react/jsx-dev-runtime";
var iconDefinition519 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV521(Fragment519, {
    children: /* @__PURE__ */ jsxDEV521("path", {
      d: "M15.9375 6.25C15.9375 4.17812 14.2594 2.5 12.1875 2.5C10.65 2.5 9.32812 3.42813 8.75 4.75312C8.17188 3.42813 6.85 2.5 5.3125 2.5C3.24062 2.5 1.5625 4.17812 1.5625 6.25C1.5625 7.99687 2.75937 9.45938 4.375 9.87813V16.875H13.125V9.87813C14.7406 9.4625 15.9375 7.99687 15.9375 6.25ZM5.3125 8.125C4.27813 8.125 3.4375 7.28438 3.4375 6.25C3.4375 5.21563 4.27813 4.375 5.3125 4.375C6.34688 4.375 7.1875 5.21563 7.1875 6.25C7.1875 7.28438 6.34688 8.125 5.3125 8.125ZM12.1875 8.125C11.1531 8.125 10.3125 7.28438 10.3125 6.25C10.3125 5.21563 11.1531 4.375 12.1875 4.375C13.2219 4.375 14.0625 5.21563 14.0625 6.25C14.0625 7.28438 13.2219 8.125 12.1875 8.125ZM18.125 9.375V16.875H16.875L14.375 14.375V11.875L16.875 9.375H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var movieCameraIcon = createIcon("movieCamera", iconDefinition519);

// src/noticons/src/movieClapboard/default.icon.tsx
import { jsxDEV as jsxDEV522, Fragment as Fragment520 } from "react/jsx-dev-runtime";
var iconDefinition520 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV522(Fragment520, {
    children: /* @__PURE__ */ jsxDEV522("path", {
      d: "M2.5 3.125V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V3.125H2.5ZM5 6.875H3.75V4.375H5L6.25 5.625L5 6.875ZM10 6.875H7.5L8.75 5.625L7.5 4.375H10L11.25 5.625L10 6.875ZM15 6.875H12.5L13.75 5.625L12.5 4.375H15L16.25 5.625L15 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var movieClapboardIcon = createIcon("movieClapboard", iconDefinition520);

// src/noticons/src/movieClapboardPlay/default.icon.tsx
import { jsxDEV as jsxDEV523, Fragment as Fragment521 } from "react/jsx-dev-runtime";
var iconDefinition521 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV523(Fragment521, {
    children: /* @__PURE__ */ jsxDEV523("path", {
      d: "M2.5 3.125V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V3.125H2.5ZM7.5 4.375H10L11.25 5.625L10 6.875H7.5L8.75 5.625L7.5 4.375ZM5 6.875H3.75V4.375H5L6.25 5.625L5 6.875ZM13.75 12.3438L8.4375 15H7.5V8.75H8.4375L13.75 11.4062V12.3438ZM15 6.875H12.5L13.75 5.625L12.5 4.375H15L16.25 5.625L15 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var movieClapboardPlayIcon = createIcon("movieClapboardPlay", iconDefinition521);

// src/noticons/src/mushroom/default.icon.tsx
import { jsxDEV as jsxDEV524, Fragment as Fragment522 } from "react/jsx-dev-runtime";
var iconDefinition522 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV524(Fragment522, {
    children: /* @__PURE__ */ jsxDEV524("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.37187 2.5 10C2.5 10.7719 2.97812 11.25 3.75 11.25H8.125L7.06875 14.9531C6.925 15.4531 6.875 15.8062 6.875 16.3281V17.5031H13.125V16.3281C13.125 15.8094 13.075 15.4531 12.9313 14.9531L11.875 11.25H16.25C17.0219 11.25 17.5 10.7719 17.5 10C17.5 5.37187 14.6281 2.5 10 2.5ZM5.9375 9.375C5.41875 9.375 5 8.95625 5 8.4375C5 7.91875 5.41875 7.5 5.9375 7.5C6.45625 7.5 6.875 7.91875 6.875 8.4375C6.875 8.95625 6.45625 9.375 5.9375 9.375ZM7.8125 6.25C7.29375 6.25 6.875 5.83125 6.875 5.3125C6.875 4.79375 7.29375 4.375 7.8125 4.375C8.33125 4.375 8.75 4.79375 8.75 5.3125C8.75 5.83125 8.33125 6.25 7.8125 6.25ZM12.8125 9.375C11.95 9.375 11.25 8.675 11.25 7.8125C11.25 6.95 11.95 6.25 12.8125 6.25C13.675 6.25 14.375 6.95 14.375 7.8125C14.375 8.675 13.675 9.375 12.8125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var mushroomIcon = createIcon("mushroom", iconDefinition522);

// src/noticons/src/music/default.icon.tsx
import { jsxDEV as jsxDEV525, Fragment as Fragment523 } from "react/jsx-dev-runtime";
var iconDefinition523 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV525(Fragment523, {
    children: /* @__PURE__ */ jsxDEV525("path", {
      d: "M16.25 1.875V13.4375C16.25 14.9812 15.1719 15.9375 13.4375 15.9375C11.7031 15.9375 10.625 14.9812 10.625 13.4375C10.625 11.8938 11.7031 10.9375 13.4375 10.9375C13.775 10.9375 14.0906 10.975 14.375 11.0469V7.34375L7.5 9.0625V15.625C7.5 17.1687 6.42188 18.125 4.6875 18.125C2.95312 18.125 1.875 17.1687 1.875 15.625C1.875 14.0813 2.95312 13.125 4.6875 13.125C5.025 13.125 5.34063 13.1625 5.625 13.2344V4.53125L16.25 1.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var musicIcon = createIcon("music", iconDefinition523);

// src/noticons/src/musicAlbum/default.icon.tsx
import { jsxDEV as jsxDEV526, Fragment as Fragment524 } from "react/jsx-dev-runtime";
var iconDefinition524 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV526(Fragment524, {
    children: /* @__PURE__ */ jsxDEV526("path", {
      d: "M1.875 16.875H15.625V3.125H1.875V16.875ZM5.625 12.0844C5.85313 12.0844 6.05937 12.1125 6.25 12.1594V6.87813L12.5 5.00313V12.4C12.5 13.3656 11.7812 13.9625 10.625 13.9625C9.46875 13.9625 8.75 13.3656 8.75 12.4C8.75 11.4344 9.46875 10.8375 10.625 10.8375C10.8531 10.8375 11.0594 10.8656 11.25 10.9125V8.50625L7.5 9.63125V13.6531C7.5 14.6187 6.78125 15.2156 5.625 15.2156C4.46875 15.2156 3.75 14.6187 3.75 13.6531C3.75 12.6875 4.46875 12.0906 5.625 12.0906V12.0844ZM19.375 10C19.375 12.0437 18.3906 13.85 16.875 14.9906V5.00625C18.3906 6.14688 19.375 7.95625 19.375 9.99687V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var musicAlbumIcon = createIcon("musicAlbum", iconDefinition524);

// src/noticons/src/musicArtist/default.icon.tsx
import { jsxDEV as jsxDEV527, Fragment as Fragment525 } from "react/jsx-dev-runtime";
var iconDefinition525 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV527(Fragment525, {
    children: /* @__PURE__ */ jsxDEV527("path", {
      d: "M11.4531 5.62495L13.1312 8.97808L10.9375 10.075V17.5H9.06249V11.0125L6.67811 12.2062L6.25936 11.3687L3.34061 12.8281L2.50311 11.15L5.42186 9.69058L5.00311 8.85308L11.4562 5.62495H11.4531ZM15.625 2.49995C14.1 2.49995 12.8344 3.59058 12.5562 5.03433L14.2531 8.42808C14.6687 8.6312 15.1312 8.74683 15.6219 8.74683C17.3469 8.74683 18.7469 7.34683 18.7469 5.62183C18.7469 3.89683 17.3469 2.49683 15.6219 2.49683L15.625 2.49995Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var musicArtistIcon = createIcon("musicArtist", iconDefinition525);

// src/noticons/src/navigation/default.icon.tsx
import { jsxDEV as jsxDEV528, Fragment as Fragment526 } from "react/jsx-dev-runtime";
var iconDefinition526 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV528(Fragment526, {
    children: /* @__PURE__ */ jsxDEV528("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.1156 14.0625L10 12.0031L5.88438 14.0625L5 13.1781L9.24687 4.6875H10.7562L15.0031 13.1781L14.1187 14.0625H14.1156Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var navigationIcon = createIcon("navigation", iconDefinition526);

// src/noticons/src/necktie/default.icon.tsx
import { jsxDEV as jsxDEV529, Fragment as Fragment527 } from "react/jsx-dev-runtime";
var iconDefinition527 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV529(Fragment527, {
    children: /* @__PURE__ */ jsxDEV529("path", {
      d: "M8.75 5.625L7.5 1.875H12.5L11.25 5.625H8.75ZM8.75 6.875L7.5 16.875L10 19.375L12.5 16.875L11.25 6.875H8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var necktieIcon = createIcon("necktie", iconDefinition527);

// src/noticons/src/network/default.icon.tsx
import { jsxDEV as jsxDEV530, Fragment as Fragment528 } from "react/jsx-dev-runtime";
var iconDefinition528 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV530(Fragment528, {
    children: /* @__PURE__ */ jsxDEV530("path", {
      d: "M15 10.625V11.875H16.875V17.5H11.25V11.875H13.125V10.625H6.875V11.875H8.75V17.5H3.125V11.875H5V10.625H1.875V8.75H9.0625V7.5H7.1875V1.875H12.8125V7.5H10.9375V8.75H18.125V10.625H15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var networkIcon = createIcon("network", iconDefinition528);

// src/noticons/src/newAlert/default.icon.tsx
import { jsxDEV as jsxDEV531, Fragment as Fragment529 } from "react/jsx-dev-runtime";
var iconDefinition529 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV531(Fragment529, {
    children: /* @__PURE__ */ jsxDEV531("path", {
      d: "M18.4375 10L16.6531 8.21563L17.3063 5.78125L14.8719 5.12812L14.2188 2.69375L11.7844 3.34687L10 1.5625L8.21563 3.34687L5.78125 2.69375L5.12812 5.12812L2.69375 5.78125L3.34687 8.21563L1.5625 10L3.34687 11.7844L2.69375 14.2188L5.12812 14.8719L5.78125 17.3063L8.21563 16.6531L10 18.4375L11.7844 16.6531L14.2188 17.3063L14.8719 14.8719L17.3063 14.2188L16.6531 11.7844L18.4375 10ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM11.25 9.0625L10.625 11.5625H9.375L8.75 9.0625V5.3125H11.25V9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var newAlertIcon = createIcon("newAlert", iconDefinition529);

// src/noticons/src/newBadge/default.icon.tsx
import { jsxDEV as jsxDEV532, Fragment as Fragment530 } from "react/jsx-dev-runtime";
var iconDefinition530 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV532(Fragment530, {
    children: /* @__PURE__ */ jsxDEV532("path", {
      d: "M16.6531 11.7844L17.3063 14.2188L14.8719 14.8719L14.2188 17.3063L11.7844 16.6531L10 18.4375L8.21563 16.6531L5.78125 17.3063L5.12812 14.8719L2.69375 14.2188L3.34687 11.7844L1.5625 10L3.34687 8.21563L2.69375 5.78125L5.12812 5.12812L5.78125 2.69375L8.21563 3.34687L10 1.5625L11.7844 3.34687L14.2188 2.69375L14.8719 5.12812L17.3063 5.78125L16.6531 8.21563L18.4375 10L16.6531 11.7844Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var newBadgeIcon = createIcon("newBadge", iconDefinition530);

// src/noticons/src/newDocument/default.icon.tsx
import { jsxDEV as jsxDEV533, Fragment as Fragment531 } from "react/jsx-dev-runtime";
var iconDefinition531 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV533(Fragment531, {
    children: /* @__PURE__ */ jsxDEV533("path", {
      d: "M9.375 2.5H3.75V17.5H16.25V9.375H9.375V2.5ZM10.625 10.625V12.8125H12.8125V14.0625H10.625V16.25H9.375V14.0625H7.1875V12.8125H9.375V10.625H10.625ZM16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var newDocumentIcon = createIcon("newDocument", iconDefinition531);

// src/noticons/src/newFolder/default.icon.tsx
import { jsxDEV as jsxDEV534, Fragment as Fragment532 } from "react/jsx-dev-runtime";
var iconDefinition532 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV534(Fragment532, {
    children: /* @__PURE__ */ jsxDEV534("path", {
      d: "M17.5 5V7.5H2.5V3.125H6.4875C7.4375 3.125 8.08125 3.39062 8.75 4.0625C9.42188 4.73438 10.0656 5 11.0125 5H17.5ZM2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75ZM7.1875 13.4375H9.375V15.625H10.625V13.4375H12.8125V12.1875H10.625V10H9.375V12.1875H7.1875V13.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var newFolderIcon = createIcon("newFolder", iconDefinition532);

// src/noticons/src/news/default.icon.tsx
import { jsxDEV as jsxDEV535, Fragment as Fragment533 } from "react/jsx-dev-runtime";
var iconDefinition533 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV535(Fragment533, {
    children: /* @__PURE__ */ jsxDEV535("path", {
      d: "M15.9375 3.125L14.6875 4.375L13.4375 3.125H12.8125L11.5625 4.375L10.3125 3.125H9.6875L8.4375 4.375L7.1875 3.125H6.5625L5.3125 4.375L4.0625 3.125H3.125V14.375C3.125 15.9187 4.08125 16.875 5.625 16.875H14.375C15.9187 16.875 16.875 15.9187 16.875 14.375V3.125H15.9375ZM8.75 14.375H5V10.625H8.75V14.375ZM15 14.375H10V13.125H15V14.375ZM15 11.875H10V10.625H15V11.875ZM15 8.125H5V6.875H15V8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var newsIcon = createIcon("news", iconDefinition533);

// src/noticons/src/no/default.icon.tsx
import { jsxDEV as jsxDEV536, Fragment as Fragment534 } from "react/jsx-dev-runtime";
var iconDefinition534 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV536(Fragment534, {
    children: /* @__PURE__ */ jsxDEV536("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 8.78438 4.7625 7.6625 5.41875 6.74375L13.2562 14.5813C12.3375 15.2344 11.2156 15.625 10 15.625ZM14.5813 13.2562L6.74375 5.41875C7.6625 4.76562 8.78438 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.2156 15.2375 12.3375 14.5813 13.2562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noIcon = createIcon("no", iconDefinition534);

// src/noticons/src/noEntry/default.icon.tsx
import { jsxDEV as jsxDEV537, Fragment as Fragment535 } from "react/jsx-dev-runtime";
var iconDefinition535 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV537(Fragment535, {
    children: /* @__PURE__ */ jsxDEV537("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM15 11.875H5V8.125H15V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noEntryIcon = createIcon("noEntry", iconDefinition535);

// src/noticons/src/noteEighth/default.icon.tsx
import { jsxDEV as jsxDEV538, Fragment as Fragment536 } from "react/jsx-dev-runtime";
var iconDefinition536 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV538(Fragment536, {
    children: /* @__PURE__ */ jsxDEV538("path", {
      d: "M14.6875 7.5L10.9375 8.4375V15C10.9375 16.5437 9.85938 17.5 8.125 17.5C6.39062 17.5 5.3125 16.5437 5.3125 15C5.3125 13.4563 6.39062 12.5 8.125 12.5C8.4625 12.5 8.77813 12.5375 9.0625 12.6094V3.90625L14.6875 2.5V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteEighthIcon = createIcon("noteEighth", iconDefinition536);

// src/noticons/src/noteHalf/default.icon.tsx
import { jsxDEV as jsxDEV539, Fragment as Fragment537 } from "react/jsx-dev-runtime";
var iconDefinition537 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV539(Fragment537, {
    children: /* @__PURE__ */ jsxDEV539("path", {
      d: "M9.6875 2.5V12.0563C9.31563 11.9375 8.9 11.875 8.4375 11.875C6.50937 11.875 5.3125 12.9531 5.3125 14.6875C5.3125 16.4219 6.50937 17.5 8.4375 17.5C10.3656 17.5 11.5625 16.4219 11.5625 14.6875V2.5H9.6875ZM8.125 15.9375C7.49062 15.9375 7.1875 15.6344 7.1875 15C7.1875 14.1187 7.86875 13.4375 8.75 13.4375C9.38438 13.4375 9.6875 13.7406 9.6875 14.375C9.6875 15.2563 9.00625 15.9375 8.125 15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteHalfIcon = createIcon("noteHalf", iconDefinition537);

// src/noticons/src/noteQuarter/default.icon.tsx
import { jsxDEV as jsxDEV540, Fragment as Fragment538 } from "react/jsx-dev-runtime";
var iconDefinition538 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV540(Fragment538, {
    children: /* @__PURE__ */ jsxDEV540("path", {
      d: "M11.5625 2.5V14.6875C11.5625 16.4219 10.3656 17.5 8.4375 17.5C6.50937 17.5 5.3125 16.4219 5.3125 14.6875C5.3125 12.9531 6.50937 11.875 8.4375 11.875C8.9 11.875 9.31563 11.9375 9.6875 12.0563V2.5H11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteQuarterIcon = createIcon("noteQuarter", iconDefinition538);

// src/noticons/src/noteSixteenth/default.icon.tsx
import { jsxDEV as jsxDEV541, Fragment as Fragment539 } from "react/jsx-dev-runtime";
var iconDefinition539 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV541(Fragment539, {
    children: /* @__PURE__ */ jsxDEV541("path", {
      d: "M14.6875 4.0625L9.0625 2.65625V12.6094C8.77813 12.5406 8.4625 12.5 8.125 12.5C6.39062 12.5 5.3125 13.4563 5.3125 15C5.3125 16.5437 6.39062 17.5 8.125 17.5C9.85938 17.5 10.9375 16.5437 10.9375 15V8.75L14.6875 9.6875V4.0625ZM12.8125 7.2875L10.9375 6.81875V5.05938L12.8125 5.52813V7.2875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteSixteenthIcon = createIcon("noteSixteenth", iconDefinition539);

// src/noticons/src/noteSixteenthBeamed/default.icon.tsx
import { jsxDEV as jsxDEV542, Fragment as Fragment540 } from "react/jsx-dev-runtime";
var iconDefinition540 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV542(Fragment540, {
    children: /* @__PURE__ */ jsxDEV542("path", {
      d: "M16.25 4.53125L5.625 1.875V11.0469C5.34063 10.9781 5.025 10.9375 4.6875 10.9375C2.95312 10.9375 1.875 11.8938 1.875 13.4375C1.875 14.9812 2.95312 15.9375 4.6875 15.9375C6.42188 15.9375 7.5 14.9812 7.5 13.4375V7.96875L14.375 9.6875V13.2344C14.0906 13.1656 13.775 13.125 13.4375 13.125C11.7031 13.125 10.625 14.0813 10.625 15.625C10.625 17.1687 11.7031 18.125 13.4375 18.125C15.1719 18.125 16.25 17.1687 16.25 15.625V4.53125ZM7.5 6.0375V4.27812L14.375 5.99688V7.75625L7.5 6.0375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteSixteenthBeamedIcon = createIcon("noteSixteenthBeamed", iconDefinition540);

// src/noticons/src/noteWhole/default.icon.tsx
import { jsxDEV as jsxDEV543, Fragment as Fragment541 } from "react/jsx-dev-runtime";
var iconDefinition541 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV543(Fragment541, {
    children: /* @__PURE__ */ jsxDEV543("path", {
      d: "M10 5C6.52813 5 4.375 6.91563 4.375 10C4.375 13.0844 6.52813 15 10 15C13.4719 15 15.625 13.0844 15.625 10C15.625 6.91563 13.4719 5 10 5ZM10.625 12.5C8.8625 12.5 7.5 11.1375 7.5 9.375C7.5 8.10625 8.10625 7.5 9.375 7.5C11.1375 7.5 12.5 8.8625 12.5 10.625C12.5 11.8938 11.8938 12.5 10.625 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var noteWholeIcon = createIcon("noteWhole", iconDefinition541);

// src/noticons/src/notification/default.icon.tsx
import { jsxDEV as jsxDEV544, Fragment as Fragment542 } from "react/jsx-dev-runtime";
var iconDefinition542 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV544(Fragment542, {
    children: /* @__PURE__ */ jsxDEV544("path", {
      d: "M15 9.375V13.75C15 16.0625 13.5625 17.5 11.25 17.5H6.25C3.9375 17.5 2.5 16.0625 2.5 13.75V8.75C2.5 6.4375 3.9375 5 6.25 5H10.625C10.625 7.41563 12.5844 9.375 15 9.375ZM15 1.875C13.275 1.875 11.875 3.275 11.875 5C11.875 6.725 13.275 8.125 15 8.125C16.725 8.125 18.125 6.725 18.125 5C18.125 3.275 16.725 1.875 15 1.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var notificationIcon = createIcon("notification", iconDefinition542);

// src/noticons/src/notion/default.icon.tsx
import { jsxDEV as jsxDEV545, Fragment as Fragment543 } from "react/jsx-dev-runtime";
var iconDefinition543 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV545(Fragment543, {
    children: /* @__PURE__ */ jsxDEV545("path", {
      d: "M12.3965 1.03967C13.6034 0.93616 13.9143 1.00622 14.6729 1.55725L17.8096 3.76233C18.3272 4.14149 18.5 4.2445 18.5 4.65784V16.7516C18.4999 17.5092 18.2238 17.9574 17.2588 18.026L5.8457 18.7155C5.12108 18.75 4.77597 18.6464 4.39648 18.1637L2.08594 15.1666C1.67196 14.6149 1.5 14.2013 1.5 13.7184V2.96936C1.5 2.34964 1.77613 1.83303 2.56836 1.76428L12.3965 1.03967ZM16.7754 5.03674L5.56836 5.69104C5.15521 5.72589 5.01763 5.93301 5.01758 6.38049V16.6481C5.01771 17.1996 5.2936 17.4058 5.91406 17.3717L16.6377 16.7516C17.2585 16.7174 17.3271 16.3375 17.3271 15.8893V5.69104C17.3271 5.24372 17.1554 5.00232 16.7754 5.03674ZM15.6035 6.93127C15.6723 7.24165 15.6038 7.55163 15.293 7.58655L14.7764 7.69006V15.2692C14.3278 15.5102 13.914 15.648 13.5693 15.6481C13.0175 15.6481 12.8792 15.476 12.4658 14.9596L9.08594 9.65393V14.7877L10.1553 15.0289C10.1551 15.0441 10.144 15.6481 9.29199 15.6481L6.91406 15.7867C6.84496 15.6488 6.914 15.304 7.15527 15.235L7.77539 15.0631V8.276L6.91406 8.20667C6.84496 7.89628 7.01691 7.44844 7.5 7.4137L10.0518 7.24182L13.5693 12.6168V7.86194L12.6729 7.7594C12.604 7.38004 12.8789 7.10423 13.2236 7.06995L15.6035 6.93127ZM12.8105 2.00452L3.3623 2.69397C3.01773 2.72814 2.94869 2.90059 3.08594 3.0387L4.43164 4.10706C4.98264 4.55461 5.18977 4.51984 6.22461 4.45081L15.9824 3.86487C16.1891 3.86479 16.0173 3.65907 15.9482 3.62463L14.3271 2.45276C14.0167 2.21178 13.603 1.93552 12.8105 2.00452Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var notionIcon = createIcon("notion", iconDefinition543);

// src/noticons/src/numero/default.icon.tsx
import { jsxDEV as jsxDEV546, Fragment as Fragment544 } from "react/jsx-dev-runtime";
var iconDefinition544 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV546(Fragment544, {
    children: [
      /* @__PURE__ */ jsxDEV546("path", {
        d: "M0.877777 15.4642V4.53577H2.93436L8.11662 12.4872V4.53577H9.99162V15.4642H7.81882L2.75278 7.69114V15.4642H0.877777Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV546("path", {
        d: "M11.3566 8.41858C11.3566 6.27416 13.095 4.53577 15.2394 4.53577C17.3838 4.53577 19.1222 6.27416 19.1222 8.41858C19.1222 10.563 17.3838 12.3014 15.2394 12.3014C13.095 12.3014 11.3566 10.563 11.3566 8.41858ZM15.2394 6.41077C14.1305 6.41077 13.2316 7.30969 13.2316 8.41858C13.2316 9.52746 14.1305 10.4264 15.2394 10.4264C16.3483 10.4264 17.2472 9.52746 17.2472 8.41858C17.2472 7.30969 16.3483 6.41077 15.2394 6.41077Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV546("path", {
        d: "M19.0156 13.5892L11.3566 13.5892V15.4642L19.0156 15.4642V13.5892Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var numeroIcon = createIcon("numero", iconDefinition544);

// src/noticons/src/nut/default.icon.tsx
import { jsxDEV as jsxDEV547, Fragment as Fragment545 } from "react/jsx-dev-runtime";
var iconDefinition545 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV547(Fragment545, {
    children: /* @__PURE__ */ jsxDEV547("path", {
      d: "M13.2625 3.75H6.73437C4.05 3.75 1.87187 5.925 1.87187 8.6125C1.87187 9.90312 2.38437 11.1375 3.29687 12.05L8.74687 17.5H11.2469L16.6969 12.05C17.6094 11.1375 18.1219 9.90312 18.1219 8.6125C18.1219 5.92812 15.9469 3.75 13.2594 3.75H13.2625ZM10 8.75C6.10312 8.75 4.27812 6.91875 4.27812 6.91875C4.81875 6.1375 5.71562 5.625 6.73437 5.625H13.2625C14.2812 5.625 15.1812 6.1375 15.7187 6.91875C15.7187 6.91875 13.8937 8.75 9.99687 8.75H10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var nutIcon = createIcon("nut", iconDefinition545);

// src/noticons/src/octagon/default.icon.tsx
import { jsxDEV as jsxDEV548, Fragment as Fragment546 } from "react/jsx-dev-runtime";
var iconDefinition546 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV548(Fragment546, {
    children: /* @__PURE__ */ jsxDEV548("path", {
      d: "M17.5 6.89375V13.1062L13.1062 17.5H6.89375L2.5 13.1062V6.89375L6.89375 2.5H13.1062L17.5 6.89375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var octagonIcon = createIcon("octagon", iconDefinition546);

// src/noticons/src/officialDocument/default.icon.tsx
import { jsxDEV as jsxDEV549, Fragment as Fragment547 } from "react/jsx-dev-runtime";
var iconDefinition547 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV549(Fragment547, {
    children: /* @__PURE__ */ jsxDEV549("path", {
      d: "M8.75 14.3313L8.2125 15.625L8.75 16.9187L7.45625 17.4563L6.91875 18.75L5.625 18.2125L4.33125 18.75L3.79375 17.4563L2.5 16.9187L3.0375 15.625L2.5 14.3313L3.79375 13.7937L4.33125 12.5L5.625 13.0375L6.91875 12.5L7.45625 13.7937L8.75 14.3313ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5ZM9.375 2.5H3.75V10.9062L5.625 11.6813L7.59687 10.8656L8.4125 12.8375L10.3844 13.6531L9.56875 15.625L10.3469 17.5H16.2531V9.375H9.37813V2.5H9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var officialDocumentIcon = createIcon("officialDocument", iconDefinition547);

// src/noticons/src/onion/default.icon.tsx
import { jsxDEV as jsxDEV550, Fragment as Fragment548 } from "react/jsx-dev-runtime";
var iconDefinition548 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV550(Fragment548, {
    children: /* @__PURE__ */ jsxDEV550("path", {
      d: "M16.6156 5.15312C15.7937 5.975 15.625 6.5875 15.625 7.5C15.625 8.66875 16.25 10.3125 16.25 11.875C16.25 15.2344 13.6719 17.5 10.3125 17.5C8.37187 17.5 7.23438 16.5625 6.25 16.5625C5.26562 16.5625 4.89375 16.875 4.89375 16.875L3.125 15.1062C3.125 15.1062 3.4375 14.6875 3.4375 13.75C3.4375 12.7656 2.5 11.6281 2.5 9.6875C2.5 6.32812 4.76562 3.75 8.125 3.75C9.6875 3.75 11.3313 4.375 12.5 4.375C13.4156 4.375 14.025 4.20625 14.8469 3.38437L15.7312 2.5L17.5 4.26875L16.6156 5.15312Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var onionIcon = createIcon("onion", iconDefinition548);

// src/noticons/src/orange/default.icon.tsx
import { jsxDEV as jsxDEV551, Fragment as Fragment549 } from "react/jsx-dev-runtime";
var iconDefinition549 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV551(Fragment549, {
    children: /* @__PURE__ */ jsxDEV551("path", {
      d: "M16.5625 11.5625C16.5625 15.1875 13.625 18.125 10 18.125C6.375 18.125 3.4375 15.1875 3.4375 11.5625C3.4375 8.25625 5.88438 5.53125 9.0625 5.075V4.375H6.875C5.33125 4.375 4.375 3.41875 4.375 1.875H8.4375C9.98125 1.875 10.9375 2.83125 10.9375 4.375V5.075C14.1156 5.53125 16.5625 8.25625 16.5625 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var orangeIcon = createIcon("orange", iconDefinition549);

// src/noticons/src/orbit/default.icon.tsx
import { jsxDEV as jsxDEV552, Fragment as Fragment550 } from "react/jsx-dev-runtime";
var iconDefinition550 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV552(Fragment550, {
    children: /* @__PURE__ */ jsxDEV552("path", {
      d: "M16.75 6.725C17.025 6.32188 17.1875 5.8375 17.1875 5.3125C17.1875 3.93125 16.0688 2.8125 14.6875 2.8125C14.1625 2.8125 13.675 2.975 13.275 3.25C12.2844 2.76875 11.175 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 8.825 17.2312 7.71563 16.75 6.725ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C10.7937 4.375 11.55 4.54062 12.2344 4.8375C12.2063 4.99062 12.1875 5.15 12.1875 5.3125C12.1875 6.69375 13.3062 7.8125 14.6875 7.8125C14.85 7.8125 15.0094 7.79688 15.1625 7.76562C15.4594 8.45 15.625 9.20625 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625ZM12.5 10C12.5 11.3813 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3813 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var orbitIcon = createIcon("orbit", iconDefinition550);

// src/noticons/src/ornament/default.icon.tsx
import { jsxDEV as jsxDEV553, Fragment as Fragment551 } from "react/jsx-dev-runtime";
var iconDefinition551 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV553(Fragment551, {
    children: /* @__PURE__ */ jsxDEV553("path", {
      d: "M13.125 5.12813V3.75H11.9719C12.1063 3.46563 12.1875 3.14687 12.1875 2.8125C12.1875 1.60625 11.2063 0.625 10 0.625C8.79375 0.625 7.8125 1.60625 7.8125 2.8125C7.8125 3.14687 7.89062 3.46563 8.02813 3.75H6.875V5.12813C4.65 6.26562 3.125 8.58125 3.125 11.25C3.125 15.0469 6.20312 18.125 10 18.125C13.7969 18.125 16.875 15.0469 16.875 11.25C16.875 8.57812 15.35 6.26562 13.125 5.12813ZM9.0625 2.8125C9.0625 2.29688 9.48438 1.875 10 1.875C10.5156 1.875 10.9375 2.29688 10.9375 2.8125C10.9375 3.32812 10.5156 3.75 10 3.75C9.48438 3.75 9.0625 3.32812 9.0625 2.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ornamentIcon = createIcon("ornament", iconDefinition551);

// src/noticons/src/oven/default.icon.tsx
import { jsxDEV as jsxDEV554, Fragment as Fragment552 } from "react/jsx-dev-runtime";
var iconDefinition552 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV554(Fragment552, {
    children: /* @__PURE__ */ jsxDEV554("path", {
      d: "M2.5 17.5H17.5V8.75H2.5V17.5ZM5.625 11.875C5.625 11.1031 6.10313 10.625 6.875 10.625H13.125C13.8969 10.625 14.375 11.1031 14.375 11.875V13.125C14.375 13.8969 13.8969 14.375 13.125 14.375H6.875C6.10313 14.375 5.625 13.8969 5.625 13.125V11.875ZM2.5 2.5V7.5H17.5V2.5H2.5ZM5 5.9375C4.48125 5.9375 4.0625 5.51875 4.0625 5C4.0625 4.48125 4.48125 4.0625 5 4.0625C5.51875 4.0625 5.9375 4.48125 5.9375 5C5.9375 5.51875 5.51875 5.9375 5 5.9375ZM11.875 5.9375H8.125V4.0625H11.875V5.9375ZM15 5.9375C14.4812 5.9375 14.0625 5.51875 14.0625 5C14.0625 4.48125 14.4812 4.0625 15 4.0625C15.5188 4.0625 15.9375 4.48125 15.9375 5C15.9375 5.51875 15.5188 5.9375 15 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ovenIcon = createIcon("oven", iconDefinition552);

// src/noticons/src/package/default.icon.tsx
import { jsxDEV as jsxDEV555, Fragment as Fragment553 } from "react/jsx-dev-runtime";
var iconDefinition553 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV555(Fragment553, {
    children: /* @__PURE__ */ jsxDEV555("path", {
      d: "M10 1.875C10 1.875 8.65937 2.54375 7.64687 3.05L15 6.725V10.6219L12.5 11.8719V8.26875L4.85312 4.45C3.84062 4.95625 2.5 5.625 2.5 5.625V14.375L10 18.125L17.5 14.375V5.625L10 1.875ZM8.125 13.4375L4.375 11.5625V8.91563L8.125 10.7906V13.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var packageIcon = createIcon("package", iconDefinition553);

// src/noticons/src/paifang/default.icon.tsx
import { jsxDEV as jsxDEV556, Fragment as Fragment554 } from "react/jsx-dev-runtime";
var iconDefinition554 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV556(Fragment554, {
    children: /* @__PURE__ */ jsxDEV556("path", {
      d: "M20 11.5625L19.5312 10.625C19.5312 10.625 19.0438 10.9375 18.4375 10.9375C17.4719 10.9375 16.875 10.1 16.875 8.75H13.75V6.875C15 6.875 16.0719 6.61875 16.875 5.9375L16.4062 5C16.4062 5 15.9187 5.3125 15.3125 5.3125C14.3469 5.3125 13.75 4.475 13.75 3.125H6.25C6.25 4.475 5.65312 5.3125 4.6875 5.3125C4.08125 5.3125 3.59375 5 3.59375 5L3.125 5.9375C3.92812 6.61875 5 6.875 6.25 6.875V8.75H3.125C3.125 10.1 2.52813 10.9375 1.5625 10.9375C0.95625 10.9375 0.46875 10.625 0.46875 10.625L0 11.5625C0.803125 12.2437 1.875 12.5 3.125 12.5V16.875H5V12.5H6.25V16.875H8.125V12.5H11.875V16.875H13.75V12.5H15V16.875H16.875V12.5C18.125 12.5 19.1969 12.2437 20 11.5625ZM8.125 8.75V6.875H11.875V8.75H8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paifangIcon = createIcon("paifang", iconDefinition554);

// src/noticons/src/paintBrush/default.icon.tsx
import { jsxDEV as jsxDEV557, Fragment as Fragment555 } from "react/jsx-dev-runtime";
var iconDefinition555 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV557(Fragment555, {
    children: /* @__PURE__ */ jsxDEV557("path", {
      d: "M17.5 3.38437L14.7687 6.95C13.575 8.50937 12.6844 9.525 11.2969 10.9125L8.88125 13.3281L6.67188 11.1188L9.0875 8.70312C10.475 7.31563 11.4906 6.425 13.05 5.23125L16.6156 2.5L17.5 3.38437ZM4.50625 12.6437C3.62188 13.0875 3.1875 13.7344 3.13437 14.6812L1.25 15.625V16.875H5.11875C6.17812 16.875 6.88125 16.4406 7.35625 15.4938L7.99687 14.2156L5.7875 12.0062L4.50938 12.6469L4.50625 12.6437Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paintBrushIcon = createIcon("paintBrush", iconDefinition555);

// src/noticons/src/paintBrushWide/default.icon.tsx
import { jsxDEV as jsxDEV558, Fragment as Fragment556 } from "react/jsx-dev-runtime";
var iconDefinition556 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV558(Fragment556, {
    children: /* @__PURE__ */ jsxDEV558("path", {
      d: "M15.8344 11.25H4.16562L4.3375 10.2125C4.5625 8.86562 5.4375 8.125 6.80313 8.125H8.74687C8.74687 6.47188 7.49687 5.40312 7.49687 3.75C7.49687 2.20625 8.45312 1.25 9.99687 1.25C11.5406 1.25 12.4969 2.20625 12.4969 3.75C12.4969 5.40312 11.2469 6.47188 11.2469 8.125H13.1906C14.5562 8.125 15.4312 8.86875 15.6562 10.2125L15.8281 11.25H15.8344ZM16.875 17.5L16.0406 12.5H3.95938L3.125 17.5H5L5.41563 15H6.66563L6.25 17.5H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paintBrushWideIcon = createIcon("paintBrushWide", iconDefinition556);

// src/noticons/src/paintBucket/default.icon.tsx
import { jsxDEV as jsxDEV559, Fragment as Fragment557 } from "react/jsx-dev-runtime";
var iconDefinition557 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV559(Fragment557, {
    children: /* @__PURE__ */ jsxDEV559("path", {
      d: "M19.375 11.1438V13.4375C19.375 14.0156 19.0156 14.375 18.4375 14.375C17.8594 14.375 17.5 14.0156 17.5 13.4375V11.1438C17.5 10.4031 17.2906 9.9 16.7687 9.375L13.125 5.73125L13.4375 5.41875C13.7375 5.11875 14.025 5 14.45 5C14.875 5 15.1625 5.11875 15.4625 5.41875L18.0906 8.04688C19.0063 8.9625 19.3719 9.84375 19.3719 11.1406L19.375 11.1438ZM8.75 3.125L15.625 10L7.5 18.125L0.625 11.25L5.5875 6.2875L2.5 3.2L3.825 1.875L6.9125 4.9625L8.75 3.125ZM8.75 9.0625C8.75 9.58125 9.16875 10 9.6875 10C10.2063 10 10.625 9.58125 10.625 9.0625C10.625 8.54375 10.2063 8.125 9.6875 8.125C9.16875 8.125 8.75 8.54375 8.75 9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paintBucketIcon = createIcon("paintBucket", iconDefinition557);

// src/noticons/src/paintRoller/default.icon.tsx
import { jsxDEV as jsxDEV560, Fragment as Fragment558 } from "react/jsx-dev-runtime";
var iconDefinition558 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV560(Fragment558, {
    children: /* @__PURE__ */ jsxDEV560("path", {
      d: "M9.6875 12.3344V13.125H10.625V18.125H6.875V13.125H7.8125V10.8687L15.625 8.91563V6.25H14.375V8.125H3.125V2.5H14.375V4.375H17.5V10.3813L9.6875 12.3344Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paintRollerIcon = createIcon("paintRoller", iconDefinition558);

// src/noticons/src/palmTree/default.icon.tsx
import { jsxDEV as jsxDEV561, Fragment as Fragment559 } from "react/jsx-dev-runtime";
var iconDefinition559 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV561(Fragment559, {
    children: /* @__PURE__ */ jsxDEV561("path", {
      d: "M16.875 5.31239H13.3281C15.0875 6.15614 16.25 7.93114 16.25 10.0811L15.3937 10.9374L11.25 6.79364V17.4999H8.75V6.79364L4.60625 10.9374L3.75 10.0811C3.75 7.93114 4.9125 6.15614 6.67188 5.31239H3.125V4.09989C5.0625 2.16239 7.89687 1.99051 10 3.56551C12.1031 1.99051 14.9375 2.16239 16.875 4.09989V5.31239Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var palmTreeIcon = createIcon("palmTree", iconDefinition559);

// src/noticons/src/pants/default.icon.tsx
import { jsxDEV as jsxDEV562, Fragment as Fragment560 } from "react/jsx-dev-runtime";
var iconDefinition560 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV562(Fragment560, {
    children: /* @__PURE__ */ jsxDEV562("path", {
      d: "M10.625 8.125H9.375L6.875 18.125L3.125 17.5L5.625 2.5H14.375L16.875 17.5L13.125 18.125L10.625 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pantsIcon = createIcon("pants", iconDefinition560);

// src/noticons/src/paperTowels/default.icon.tsx
import { jsxDEV as jsxDEV563, Fragment as Fragment561 } from "react/jsx-dev-runtime";
var iconDefinition561 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV563(Fragment561, {
    children: /* @__PURE__ */ jsxDEV563("path", {
      d: "M12.125 7.5C12.75 6.90625 13.125 6.14375 13.125 5.3125C13.125 3.4125 11.1656 1.875 8.75 1.875C6.33438 1.875 4.375 3.4125 4.375 5.3125V14.6875C4.375 16.5875 6.33438 18.125 8.75 18.125H15.625V7.5H12.125ZM8.75 4.0625C9.6125 4.0625 10.3125 4.62188 10.3125 5.3125C10.3125 6.00313 9.6125 6.5625 8.75 6.5625C7.8875 6.5625 7.1875 6.00313 7.1875 5.3125C7.1875 4.62188 7.8875 4.0625 8.75 4.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var paperTowelsIcon = createIcon("paperTowels", iconDefinition561);

// src/noticons/src/parking/default.icon.tsx
import { jsxDEV as jsxDEV564, Fragment as Fragment562 } from "react/jsx-dev-runtime";
var iconDefinition562 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV564(Fragment562, {
    children: /* @__PURE__ */ jsxDEV564("path", {
      d: "M10.9375 6.25H7.5V13.75H9.375V11.875H10.9375C12.6719 11.875 13.75 10.7969 13.75 9.0625C13.75 7.32812 12.6719 6.25 10.9375 6.25ZM10.75 10.1875H9.375V7.9375H10.75C11.4438 7.9375 11.875 8.36875 11.875 9.0625C11.875 9.75625 11.4438 10.1875 10.75 10.1875ZM10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var parkingIcon = createIcon("parking", iconDefinition562);

// src/noticons/src/parkingNo/default.icon.tsx
import { jsxDEV as jsxDEV565, Fragment as Fragment563 } from "react/jsx-dev-runtime";
var iconDefinition563 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV565(Fragment563, {
    children: /* @__PURE__ */ jsxDEV565("path", {
      d: "M9.375 13.75H7.5V9.70937L9.375 11.5844V13.75ZM10.9375 6.25H8.45937L10.1469 7.9375H10.75C11.4438 7.9375 11.875 8.36875 11.875 9.0625C11.875 9.25313 11.8406 9.42188 11.7781 9.56875L13.1531 10.9438C13.5375 10.4688 13.75 9.83125 13.75 9.0625C13.75 7.32812 12.6719 6.25 10.9375 6.25ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM13.2562 14.5813L5.41875 6.74375C4.76562 7.6625 4.375 8.78438 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C11.2156 15.625 12.3375 15.2375 13.2562 14.5813ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C8.78438 4.375 7.6625 4.7625 6.74375 5.41875L14.5813 13.2562C15.2344 12.3375 15.625 11.2156 15.625 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var parkingNoIcon = createIcon("parkingNo", iconDefinition563);

// src/noticons/src/partlyCloudyDay/default.icon.tsx
import { jsxDEV as jsxDEV566, Fragment as Fragment564 } from "react/jsx-dev-runtime";
var iconDefinition564 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV566(Fragment564, {
    children: /* @__PURE__ */ jsxDEV566("path", {
      d: "M13.75 15C13.75 16.1562 13.0312 16.875 11.875 16.875H2.5C0.95625 16.875 0 15.9187 0 14.375C0 13.0531 0.70625 12.1625 1.87813 11.9344C1.87813 11.9156 1.87813 11.8938 1.87813 11.875C1.87813 9.5625 3.31562 8.125 5.62813 8.125C7.38125 8.125 8.63125 8.95 9.13125 10.3594C9.30625 10.3281 9.49375 10.3125 9.69063 10.3125C11.2344 10.3125 12.1906 11.2688 12.1906 12.8125C12.1906 12.9281 12.1844 13.0406 12.1719 13.15C13.1531 13.2656 13.7531 13.9469 13.7531 15H13.75ZM12.8125 2.5H11.5625V5.625H12.8125V2.5ZM16.875 9.6875V10.9375H20V9.6875H16.875ZM9.31563 6.55625L7.10625 4.34687L6.22188 5.23125L8.43125 7.44062L9.31563 6.55625ZM15.0594 14.0688L17.2687 16.2781L18.1531 15.3937L15.9438 13.1844L15.0594 14.0688ZM18.1531 5.23125L17.2687 4.34687L15.0594 6.55625L15.9438 7.44062L18.1531 5.23125ZM12.1875 6.875C11.0094 6.875 9.97188 7.46875 9.35312 8.37188C9.55313 8.58438 9.73125 8.81875 9.88437 9.07188C11.8156 9.15 13.1594 10.375 13.3969 12.2219C13.7687 12.4094 14.0875 12.6719 14.3406 12.9906C15.1219 12.3594 15.625 11.3969 15.625 10.3125C15.625 8.4125 14.0875 6.875 12.1875 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var partlyCloudyDayIcon = createIcon("partlyCloudyDay", iconDefinition564);

// src/noticons/src/partlyCloudyNight/default.icon.tsx
import { jsxDEV as jsxDEV567, Fragment as Fragment565 } from "react/jsx-dev-runtime";
var iconDefinition565 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV567(Fragment565, {
    children: /* @__PURE__ */ jsxDEV567("path", {
      d: "M13.75 15C13.75 16.1562 13.0312 16.875 11.875 16.875H2.5C0.95625 16.875 0 15.9187 0 14.375C0 13.0531 0.70625 12.1625 1.87813 11.9344C1.87813 11.9156 1.87813 11.8938 1.87813 11.875C1.87813 9.5625 3.31562 8.125 5.62813 8.125C7.38125 8.125 8.63125 8.95 9.13125 10.3594C9.30625 10.3281 9.49375 10.3125 9.69063 10.3125C11.2344 10.3125 12.1906 11.2688 12.1906 12.8125C12.1906 12.9281 12.1844 13.0406 12.1719 13.15C13.1531 13.2656 13.7531 13.9469 13.7531 15H13.75ZM19.3656 7.18125C18.9094 8.34062 17.7812 9.16563 16.4594 9.16563C14.7344 9.16563 13.3344 7.76562 13.3344 6.04063C13.3344 4.71875 14.1562 3.59062 15.3188 3.13437L15 2.5C12.2375 2.5 10 4.7375 10 7.5C10 8.0625 10.0969 8.6 10.2656 9.10312C11.9969 9.31875 13.1812 10.5031 13.3969 12.2344C13.9 12.4063 14.4375 12.5 15 12.5C17.7625 12.5 20 10.2625 20 7.5L19.3656 7.18125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var partlyCloudyNightIcon = createIcon("partlyCloudyNight", iconDefinition565);

// src/noticons/src/passport/default.icon.tsx
import { jsxDEV as jsxDEV568, Fragment as Fragment566 } from "react/jsx-dev-runtime";
var iconDefinition566 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV568(Fragment566, {
    children: /* @__PURE__ */ jsxDEV568("path", {
      d: "M7.95625 10.625C8.04062 11.1562 8.1625 11.6594 8.325 12.1031C7.66875 11.775 7.12188 11.2594 6.75625 10.625H7.95625ZM6.75625 6.875H7.95625C8.04062 6.34375 8.1625 5.84063 8.325 5.39688C7.66875 5.725 7.12188 6.24062 6.75625 6.875ZM7.8125 8.75C7.8125 8.54375 7.81875 8.33437 7.83125 8.125H6.30625C6.27188 8.32812 6.25 8.5375 6.25 8.75C6.25 8.9625 6.27188 9.17188 6.30625 9.375H7.83125C7.82187 9.16563 7.8125 8.95625 7.8125 8.75ZM9.22188 6.875H10.7781C10.3156 4.375 9.68125 4.375 9.22188 6.875ZM13.2438 6.875C12.8781 6.24062 12.3313 5.72813 11.675 5.39688C11.8375 5.8375 11.9594 6.34063 12.0438 6.875H13.2438ZM12.1875 8.75C12.1875 8.95625 12.1812 9.16563 12.1687 9.375H13.6938C13.7281 9.17188 13.75 8.9625 13.75 8.75C13.75 8.5375 13.7281 8.32812 13.6938 8.125H12.1687C12.1781 8.33437 12.1875 8.54375 12.1875 8.75ZM16.25 5V15C16.25 16.5437 15.2937 17.5 13.75 17.5H3.75V2.5H13.75C15.2937 2.5 16.25 3.45625 16.25 5ZM11.875 15H8.125V16.25H11.875V15ZM15 8.75C15 5.9875 12.7625 3.75 10 3.75C7.2375 3.75 5 5.9875 5 8.75C5 11.5125 7.2375 13.75 10 13.75C12.7625 13.75 15 11.5125 15 8.75ZM9.08125 8.125C9.07187 8.325 9.0625 8.53125 9.0625 8.75C9.0625 8.96875 9.06875 9.175 9.08125 9.375H10.9219C10.9313 9.175 10.9406 8.96875 10.9406 8.75C10.9406 8.53125 10.9344 8.325 10.9219 8.125H9.08125ZM10.7781 10.625H9.22188C9.68438 13.125 10.3188 13.125 10.7781 10.625ZM11.675 12.1031C12.3313 11.775 12.8781 11.2594 13.2438 10.625H12.0438C11.9594 11.1562 11.8375 11.6594 11.675 12.1031Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var passportIcon = createIcon("passport", iconDefinition566);

// src/noticons/src/paste/default.icon.tsx
import { jsxDEV as jsxDEV569, Fragment as Fragment567 } from "react/jsx-dev-runtime";
var iconDefinition567 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV569(Fragment567, {
    children: /* @__PURE__ */ jsxDEV569("path", {
      d: "M13.75 6.25H6.25V3.75H8.125C8.125 2.71563 8.96562 1.875 10 1.875C11.0344 1.875 11.875 2.71563 11.875 3.75H13.75V6.25ZM15 5V7.5H5V5H3.125V16.875H16.875V5H15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pasteIcon = createIcon("paste", iconDefinition567);

// src/noticons/src/peace/default.icon.tsx
import { jsxDEV as jsxDEV570, Fragment as Fragment568 } from "react/jsx-dev-runtime";
var iconDefinition568 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV570(Fragment568, {
    children: /* @__PURE__ */ jsxDEV570("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM9.0625 15.5406C7.93437 15.35 6.92188 14.8281 6.12813 14.075L9.0625 11.875V15.5406ZM9.0625 9.53125L5.00313 12.575C4.60313 11.8031 4.375 10.9281 4.375 10C4.375 7.2125 6.40312 4.90625 9.0625 4.45938V9.53125ZM10.9375 15.5406V11.875L13.8719 14.075C13.0781 14.8281 12.0656 15.35 10.9375 15.5406ZM14.9969 12.575L10.9375 9.53125V4.45938C13.5969 4.90625 15.625 7.2125 15.625 10C15.625 10.9281 15.3969 11.8031 14.9969 12.575Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var peaceIcon = createIcon("peace", iconDefinition568);

// src/noticons/src/peanut/default.icon.tsx
import { jsxDEV as jsxDEV571, Fragment as Fragment569 } from "react/jsx-dev-runtime";
var iconDefinition569 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV571(Fragment569, {
    children: /* @__PURE__ */ jsxDEV571("path", {
      d: "M16.05 2.5H14.0625C9.45312 2.5 9.56563 6.68437 8.75 7.5C7.61562 8.63438 2.5 8.39062 2.5 13.75V15.4094L4.59062 17.5H6.25C11.6094 17.5 11.3656 12.3844 12.5 11.25C13.325 10.425 17.5 10.5469 17.5 5.9375V3.95L16.05 2.5ZM6.25 12.5L5 11.25L6.25 10L7.5 11.25L6.25 12.5ZM14.6875 8.4375L13.4375 7.1875L14.6875 5.9375L15.9375 7.1875L14.6875 8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var peanutIcon = createIcon("peanut", iconDefinition569);

// src/noticons/src/pear/default.icon.tsx
import { jsxDEV as jsxDEV572, Fragment as Fragment570 } from "react/jsx-dev-runtime";
var iconDefinition570 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV572(Fragment570, {
    children: /* @__PURE__ */ jsxDEV572("path", {
      d: "M15 13.125C15 15.8875 12.7625 18.125 10 18.125C7.2375 18.125 5 15.8875 5 13.125C5 11.5469 5.73438 10.1406 6.875 9.225V7.5C6.875 5.98125 7.95937 4.71562 9.39687 4.43437C9.775 2.49062 10.625 1.25 10.625 1.25L12.5 2.1875C12.5 2.1875 11.6625 3.07187 11.0812 4.57188C12.275 5.0125 13.125 6.15625 13.125 7.5V9.225C14.2656 10.1406 15 11.5469 15 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pearIcon = createIcon("pear", iconDefinition570);

// src/noticons/src/pen/default.icon.tsx
import { jsxDEV as jsxDEV573, Fragment as Fragment571 } from "react/jsx-dev-runtime";
var iconDefinition571 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV573(Fragment571, {
    children: /* @__PURE__ */ jsxDEV573("path", {
      d: "M17.5 3.38437L16.1812 5.4125C15.3312 6.71875 14.6562 7.55313 13.5531 8.65625L10.3344 11.875L8.12499 9.66563L11.3437 6.44687C12.4469 5.34375 13.2781 4.66875 14.5875 3.81875L16.6156 2.5L17.5 3.38437ZM7.37811 10.6875L9.31561 12.625L7.50311 16.2531H6.11561C5.37499 16.2531 4.87186 16.4625 4.34686 16.9844L3.82811 17.5031L2.50311 16.1781L3.02186 15.6594C3.54686 15.1344 3.75311 14.6313 3.75311 13.8906V12.5031L7.38124 10.6906L7.37811 10.6875ZM7.18749 13.75C7.18749 13.2312 6.76874 12.8125 6.24999 12.8125C5.73124 12.8125 5.31249 13.2312 5.31249 13.75C5.31249 14.2688 5.73124 14.6875 6.24999 14.6875C6.76874 14.6875 7.18749 14.2688 7.18749 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var penIcon = createIcon("pen", iconDefinition571);

// src/noticons/src/pencil/default.icon.tsx
import { jsxDEV as jsxDEV574, Fragment as Fragment572 } from "react/jsx-dev-runtime";
var iconDefinition572 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV574(Fragment572, {
    children: /* @__PURE__ */ jsxDEV574("path", {
      d: "M12.2406 5.55L14.45 7.75938L5.95937 16.25L2.94062 17.5L2.5 17.0594L3.75 14.0406L12.2406 5.55ZM15.2906 2.5L13.125 4.66563L15.3344 6.875L17.5 4.70937L15.2906 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pencilIcon = createIcon("pencil", iconDefinition572);

// src/noticons/src/pentagon/default.icon.tsx
import { jsxDEV as jsxDEV575, Fragment as Fragment573 } from "react/jsx-dev-runtime";
var iconDefinition573 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV575(Fragment573, {
    children: /* @__PURE__ */ jsxDEV575("path", {
      d: "M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM13.8594 15.625H6.14061L3.75624 8.28435L10.0031 3.74685L16.25 8.28435L13.8656 15.625H13.8594Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonIcon = createIcon("pentagon", iconDefinition573);

// src/noticons/src/pentagonAlternate/default.icon.tsx
import { jsxDEV as jsxDEV576, Fragment as Fragment574 } from "react/jsx-dev-runtime";
var iconDefinition574 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV576(Fragment574, {
    children: /* @__PURE__ */ jsxDEV576("path", {
      d: "M18.45 7.5656L15.2219 17.5H4.77811L1.54999 7.5656L9.99999 1.4281L18.45 7.5656Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonAlternateIcon = createIcon("pentagonAlternate", iconDefinition574);

// src/noticons/src/pentagonDashed/default.icon.tsx
import { jsxDEV as jsxDEV577, Fragment as Fragment575 } from "react/jsx-dev-runtime";
var iconDefinition575 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV577(Fragment575, {
    children: /* @__PURE__ */ jsxDEV577("path", {
      d: "M6.14061 15.625H9.37499V17.5H4.77811L3.35624 13.1281L5.14061 12.55L6.14061 15.625ZM3.75624 8.28435L6.37186 6.38435L5.26874 4.86873L1.54999 7.57185L2.97186 11.9437L4.75624 11.3656L3.75624 8.2906V8.28435ZM13.8625 15.625H10.6281V17.5H15.225L16.6469 13.1281L14.8625 12.55L13.8625 15.625ZM13.7219 4.13123L10.0031 1.4281L6.28436 4.13123L7.38749 5.64685L10.0031 3.74685L12.6187 5.64685L13.7219 4.13123ZM14.7344 4.8656L13.6312 6.38123L16.2469 8.28123L15.2469 11.3562L17.0312 11.9344L18.4531 7.56248L14.7344 4.85935V4.8656Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonDashedIcon = createIcon("pentagonDashed", iconDefinition575);

// src/noticons/src/pentagonFourFifths/default.icon.tsx
import { jsxDEV as jsxDEV578, Fragment as Fragment576 } from "react/jsx-dev-runtime";
var iconDefinition576 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV578(Fragment576, {
    children: /* @__PURE__ */ jsxDEV578("path", {
      d: "M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM9.99999 10.3125L3.75311 8.28435L9.99999 3.74685V10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonFourFifthsIcon = createIcon("pentagonFourFifths", iconDefinition576);

// src/noticons/src/pentagonOneFifth/default.icon.tsx
import { jsxDEV as jsxDEV579, Fragment as Fragment577 } from "react/jsx-dev-runtime";
var iconDefinition577 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV579(Fragment577, {
    children: /* @__PURE__ */ jsxDEV579("path", {
      d: "M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM13.8594 15.625H6.14061L3.75624 8.28435L10.0031 3.74685V10.3125L16.25 8.28435L13.8656 15.625H13.8594Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonOneFifthIcon = createIcon("pentagonOneFifth", iconDefinition577);

// src/noticons/src/pentagonThreeFifths/default.icon.tsx
import { jsxDEV as jsxDEV580, Fragment as Fragment578 } from "react/jsx-dev-runtime";
var iconDefinition578 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV580(Fragment578, {
    children: /* @__PURE__ */ jsxDEV580("path", {
      d: "M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM9.99999 10.3125L6.14061 15.625L3.75624 8.28435L10.0031 3.74685V10.3125H9.99999Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonThreeFifthsIcon = createIcon("pentagonThreeFifths", iconDefinition578);

// src/noticons/src/pentagonTwoFifths/default.icon.tsx
import { jsxDEV as jsxDEV581, Fragment as Fragment579 } from "react/jsx-dev-runtime";
var iconDefinition579 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV581(Fragment579, {
    children: /* @__PURE__ */ jsxDEV581("path", {
      d: "M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM6.14061 15.625L3.75624 8.28435L10.0031 3.74685V10.3125L13.8625 15.625H6.14374H6.14061Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pentagonTwoFifthsIcon = createIcon("pentagonTwoFifths", iconDefinition579);

// src/noticons/src/people/default.icon.tsx
import { jsxDEV as jsxDEV582, Fragment as Fragment580 } from "react/jsx-dev-runtime";
var iconDefinition580 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV582(Fragment580, {
    children: /* @__PURE__ */ jsxDEV582("path", {
      d: "M3.4375 3.75C3.4375 2.78438 4.03437 2.1875 5 2.1875C5.96562 2.1875 6.5625 2.78438 6.5625 3.75C6.5625 4.71563 5.96562 5.3125 5 5.3125C4.03437 5.3125 3.4375 4.71563 3.4375 3.75ZM15 5.3125C15.9656 5.3125 16.5625 4.71563 16.5625 3.75C16.5625 2.78438 15.9656 2.1875 15 2.1875C14.0344 2.1875 13.4375 2.78438 13.4375 3.75C13.4375 4.71563 14.0344 5.3125 15 5.3125ZM16.4844 9.84375L17.0344 8.74062L18.2875 11.25L19.6844 10.55L18.5687 8.32187C17.8594 6.90312 16.975 6.25 14.9969 6.25C13.0188 6.25 12.1344 6.90312 11.425 8.32187L10.3094 10.55L11.7062 11.25L12.9594 8.74062L13.5094 9.84375L11.5562 13.75H13.7437V17.5H16.2437V13.75H18.4312L16.4781 9.84375H16.4844ZM7.05625 8.78438L8.29063 11.25L9.6875 10.55L8.57187 8.32187C7.8625 6.90312 6.97813 6.25 5 6.25C3.02187 6.25 2.1375 6.90312 1.42813 8.32187L0.3125 10.55L1.70937 11.25L2.94375 8.78438C3.0625 8.54688 3.2 8.4375 3.4375 8.4375V10.9375L1.25 17.5H3.225L5 12.1781L6.775 17.5H8.75L6.5625 10.9375V8.4375C6.8 8.4375 6.9375 8.54688 7.05625 8.78438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var peopleIcon = createIcon("people", iconDefinition580);

// src/noticons/src/perfume/default.icon.tsx
import { jsxDEV as jsxDEV583, Fragment as Fragment581 } from "react/jsx-dev-runtime";
var iconDefinition581 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV583(Fragment581, {
    children: /* @__PURE__ */ jsxDEV583("path", {
      d: "M18.75 10C18.75 11.5437 17.9125 12.5 16.5625 12.5C15.2125 12.5 14.375 11.5437 14.375 10C14.375 9 14.7312 8.24687 15.3469 7.84062C14.3906 5.63125 12.3094 4.375 9.375 4.375H8.4375V5.625H9.6875V8.00937C11.35 8.82187 12.5 10.525 12.5 12.5C12.5 14.0781 11.7656 15.4844 10.625 16.4V17.5H4.375V16.4C3.23438 15.4844 2.5 14.0781 2.5 12.5C2.5 10.525 3.65 8.82187 5.3125 8.00937V5.625H6.5625V2.5H9.375C13.2781 2.5 16.125 4.42187 17.2656 7.59687C18.1969 7.87812 18.75 8.74375 18.75 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var perfumeIcon = createIcon("perfume", iconDefinition581);

// src/noticons/src/personFeminine/default.icon.tsx
import { jsxDEV as jsxDEV584, Fragment as Fragment582 } from "react/jsx-dev-runtime";
var iconDefinition582 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV584(Fragment582, {
    children: /* @__PURE__ */ jsxDEV584("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM14.7594 10.5438L15.625 9.24375L12.0781 6.87813C11.3906 6.41875 10.825 6.25 10 6.25C9.175 6.25 8.60938 6.42188 7.92188 6.87813L4.375 9.24375L5.24063 10.5438L7.95937 8.73125L8.51562 9.84375L6.5625 13.75H8.75V17.5H11.25V13.75H13.4375L11.4844 9.84375L12.0406 8.73125L14.7594 10.5438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var personFeminineIcon = createIcon("personFeminine", iconDefinition582);

// src/noticons/src/personMasculine/default.icon.tsx
import { jsxDEV as jsxDEV585, Fragment as Fragment583 } from "react/jsx-dev-runtime";
var iconDefinition583 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV585(Fragment583, {
    children: /* @__PURE__ */ jsxDEV585("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM14.7594 10.5438L15.625 9.24375L12.0781 6.87813C11.3906 6.41875 10.825 6.25 10 6.25C9.175 6.25 8.60938 6.42188 7.92188 6.87813L4.375 9.24375L5.24063 10.5438L8.4375 8.4125V10.9375L6.25 17.5H8.225L10 12.1781L11.775 17.5H13.75L11.5625 10.9375V8.4125L14.7594 10.5438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var personMasculineIcon = createIcon("personMasculine", iconDefinition583);

// src/noticons/src/phone/default.icon.tsx
import { jsxDEV as jsxDEV586, Fragment as Fragment584 } from "react/jsx-dev-runtime";
var iconDefinition584 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV586(Fragment584, {
    children: /* @__PURE__ */ jsxDEV586("path", {
      d: "M12.5 2.5H7.5C5.95625 2.5 5 3.45625 5 5V15C5 16.5437 5.95625 17.5 7.5 17.5H12.5C14.0437 17.5 15 16.5437 15 15V5C15 3.45625 14.0437 2.5 12.5 2.5ZM11.875 15.625H8.125C7.74062 15.625 7.5 15.3844 7.5 15C7.5 14.6156 7.74062 14.375 8.125 14.375H11.875C12.2594 14.375 12.5 14.6156 12.5 15C12.5 15.3844 12.2594 15.625 11.875 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var phoneIcon = createIcon("phone", iconDefinition584);

// src/noticons/src/phoneCall/default.icon.tsx
import { jsxDEV as jsxDEV587, Fragment as Fragment585 } from "react/jsx-dev-runtime";
var iconDefinition585 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV587(Fragment585, {
    children: /* @__PURE__ */ jsxDEV587("path", {
      d: "M17.5 15L15.8844 16.6156C15.3188 17.1812 14.55 17.5 13.75 17.5C8.75 17.5 2.5 11.25 2.5 6.25C2.5 5.45 2.81875 4.68125 3.38437 4.11563L5 2.5L8.75 6.25L6.25 8.75C6.28125 9.19688 6.69063 10.4406 8.125 11.875C9.55937 13.3094 10.8031 13.7188 11.25 13.75L13.75 11.25L17.5 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var phoneCallIcon = createIcon("phoneCall", iconDefinition585);

// src/noticons/src/phoneEndCall/default.icon.tsx
import { jsxDEV as jsxDEV588, Fragment as Fragment586 } from "react/jsx-dev-runtime";
var iconDefinition586 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV588(Fragment586, {
    children: /* @__PURE__ */ jsxDEV588("path", {
      d: "M18.75 10.5906V12.8125H13.4375V9.375C13.1031 9.09063 12.0063 8.4375 10 8.4375C7.99375 8.4375 6.89687 9.09063 6.5625 9.375V12.8125H1.25V10.5906C1.25 7.81562 5.54688 5.9375 10 5.9375C14.4531 5.9375 18.75 7.79375 18.75 10.5906Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var phoneEndCallIcon = createIcon("phoneEndCall", iconDefinition586);

// src/noticons/src/phoneSpeaker/default.icon.tsx
import { jsxDEV as jsxDEV589, Fragment as Fragment587 } from "react/jsx-dev-runtime";
var iconDefinition587 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV589(Fragment587, {
    children: /* @__PURE__ */ jsxDEV589("path", {
      d: "M10 3.75V1.875C14.4875 1.875 18.125 5.5125 18.125 10H16.25C16.25 6.54688 13.4531 3.75 10 3.75ZM11.25 13.75C10.8031 13.7188 9.55937 13.3094 8.125 11.875C6.69063 10.4406 6.28125 9.19688 6.25 8.75L8.75 6.25L5 2.5L3.38437 4.11562C2.81875 4.68125 2.5 5.45 2.5 6.25C2.5 11.25 8.75 17.5 13.75 17.5C14.55 17.5 15.3188 17.1812 15.8844 16.6156L17.5 15L13.75 11.25L11.25 13.75ZM13.125 10H15C15 7.2375 12.7625 5 10 5V6.875C11.725 6.875 13.125 8.275 13.125 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var phoneSpeakerIcon = createIcon("phoneSpeaker", iconDefinition587);

// src/noticons/src/photoLandscape/default.icon.tsx
import { jsxDEV as jsxDEV590, Fragment as Fragment588 } from "react/jsx-dev-runtime";
var iconDefinition588 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV590(Fragment588, {
    children: /* @__PURE__ */ jsxDEV590("path", {
      d: "M11.875 8.4375C11.875 7.575 12.575 6.875 13.4375 6.875C14.3 6.875 15 7.575 15 8.4375C15 9.3 14.3 10 13.4375 10C12.575 10 11.875 9.3 11.875 8.4375ZM18.125 3.75V16.25H1.875V3.75H18.125ZM16.25 5.625H3.75V13.75L8.125 9.375H9.375L14.375 14.375H16.25V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var photoLandscapeIcon = createIcon("photoLandscape", iconDefinition588);

// src/noticons/src/piano/default.icon.tsx
import { jsxDEV as jsxDEV591, Fragment as Fragment589 } from "react/jsx-dev-runtime";
var iconDefinition589 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV591(Fragment589, {
    children: /* @__PURE__ */ jsxDEV591("path", {
      d: "M13.75 4.21875V2.34375H10.625V4.21875H9.375V2.34375H6.25V4.21875H2.5V14.8438C2.5 16.225 3.61875 17.3438 5 17.3438H15C16.3813 17.3438 17.5 16.225 17.5 14.8438V4.21875H13.75ZM5 15.4688C4.65625 15.4688 4.375 15.1875 4.375 14.8438V6.09375H6.25V11.0938H6.875V15.4688H5ZM8.75 15.4688V11.0938H9.375V6.09375H10.625V11.0938H11.25V15.4688H8.75ZM15.625 14.8438C15.625 15.1875 15.3438 15.4688 15 15.4688H13.125V11.0938H13.75V6.09375H15.625V14.8438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pianoIcon = createIcon("piano", iconDefinition589);

// src/noticons/src/pig/default.icon.tsx
import { jsxDEV as jsxDEV592, Fragment as Fragment590 } from "react/jsx-dev-runtime";
var iconDefinition590 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV592(Fragment590, {
    children: /* @__PURE__ */ jsxDEV592("path", {
      d: "M19.375 10.625L18.75 11.875H15.625L13.75 13.75V16.875H11.875L11.3531 13.75H9.61564C8.74689 13.75 8.15626 13.6094 7.37814 13.2219L5.93439 12.5L4.99689 14.375V16.875H3.12189V13.75C3.12189 13.75 1.24689 12.5 1.24689 10C1.24689 9.01875 1.53751 8.32813 1.88751 7.85C1.10001 7.45313 0.621887 6.65625 0.621887 5.625V5H1.87189V5.625C1.87189 6.43125 2.31564 6.875 3.12189 6.875H14.3719V6.25C14.3719 5.55937 14.9313 5 15.6219 5H16.2469V6.875H17.4969V8.0375C17.4969 8.97187 17.8344 9.6 18.6094 10.1188L19.3719 10.625H19.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pigIcon = createIcon("pig", iconDefinition590);

// src/noticons/src/pill/default.icon.tsx
import { jsxDEV as jsxDEV593, Fragment as Fragment591 } from "react/jsx-dev-runtime";
var iconDefinition591 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV593(Fragment591, {
    children: /* @__PURE__ */ jsxDEV593("path", {
      d: "M13.125 2.5C12.0063 2.5 10.8844 2.92813 10.0312 3.78125L3.78125 10.0312C2.92813 10.8844 2.5 12.0063 2.5 13.125C2.5 15.5406 4.45938 17.5 6.875 17.5C7.99375 17.5 9.11562 17.0719 9.96875 16.2188L16.2188 9.96875C17.0719 9.11562 17.5 7.99375 17.5 6.875C17.5 4.45938 15.5406 2.5 13.125 2.5ZM8.64375 14.8938C8.17188 15.3656 7.54375 15.625 6.875 15.625C5.49688 15.625 4.375 14.5031 4.375 13.125C4.375 12.4563 4.63438 11.8281 5.10625 11.3562L8.23125 8.23125L11.7656 11.7656L8.64062 14.8906L8.64375 14.8938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pillIcon = createIcon("pill", iconDefinition591);

// src/noticons/src/pin/default.icon.tsx
import { jsxDEV as jsxDEV594, Fragment as Fragment592 } from "react/jsx-dev-runtime";
var iconDefinition592 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV594(Fragment592, {
    children: /* @__PURE__ */ jsxDEV594("path", {
      d: "M18.125 8.28125H12.5V10H10.9375V15L10.3125 17.5H9.6875L9.0625 15V10H7.5V8.28125H1.875V6.25C1.875 6.25 4.51875 3.75 10 3.75C15.4813 3.75 18.125 6.25 18.125 6.25V8.28125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pinIcon = createIcon("pin", iconDefinition592);

// src/noticons/src/pisces/default.icon.tsx
import { jsxDEV as jsxDEV595, Fragment as Fragment593 } from "react/jsx-dev-runtime";
var iconDefinition593 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV595(Fragment593, {
    children: /* @__PURE__ */ jsxDEV595("path", {
      d: "M17.5 10.9375H14.0937C14.3094 14.3875 15.625 16.65 15.625 16.65L13.9469 17.5C13.9469 17.5 12.4312 14.8719 12.2125 10.9375H7.78437C7.56562 14.8719 6.05 17.5 6.05 17.5L4.37187 16.65C4.37187 16.65 5.6875 14.3875 5.90312 10.9375H2.49687V9.0625H5.90312C5.6875 5.6125 4.37187 3.35 4.37187 3.35L6.05 2.5C6.05 2.5 7.56562 5.12812 7.78437 9.0625H12.2125C12.4312 5.12812 13.9469 2.5 13.9469 2.5L15.625 3.35C15.625 3.35 14.3094 5.6125 14.0937 9.0625H17.5V10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var piscesIcon = createIcon("pisces", iconDefinition593);

// src/noticons/src/pitcher/default.icon.tsx
import { jsxDEV as jsxDEV596, Fragment as Fragment594 } from "react/jsx-dev-runtime";
var iconDefinition594 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV596(Fragment594, {
    children: /* @__PURE__ */ jsxDEV596("path", {
      d: "M16.875 6.875H16.1469L16.5625 4.375H9.375L7.5 2.5H1.25V3.75L2.61562 5.11563C3.4375 5.9375 3.82188 6.68125 4.0125 7.82812L5.625 17.4969H14.375L15 13.7469H16.875C18.4188 13.7469 19.375 12.7906 19.375 11.2469V9.37187C19.375 7.82812 18.4188 6.87187 16.875 6.87187V6.875ZM6.72188 4.375L8.59688 6.25H14.3469L13.9313 8.75H6.06563L5.8625 7.52187C5.65 6.25 5.23438 5.29063 4.475 4.375H6.72188ZM17.5 11.25C17.5 11.7594 17.3844 11.875 16.875 11.875H15.3125L15.8344 8.75H16.875C17.3844 8.75 17.5 8.86562 17.5 9.375V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pitcherIcon = createIcon("pitcher", iconDefinition594);

// src/noticons/src/pizza/default.icon.tsx
import { jsxDEV as jsxDEV597, Fragment as Fragment595 } from "react/jsx-dev-runtime";
var iconDefinition595 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV597(Fragment595, {
    children: /* @__PURE__ */ jsxDEV597("path", {
      d: "M7.15938 1.875C6.19063 1.875 5.625 2.94063 5.625 3.81562C5.625 4.15625 5.72812 4.45625 5.92812 4.71875L1.875 16.875L3.125 18.125L15.2812 14.0719C15.5438 14.2719 15.8438 14.375 16.1844 14.375C16.9406 14.375 18.125 13.8938 18.125 12.8406C18.125 10.0031 10.7781 1.875 7.15938 1.875ZM5.9375 15.3125C5.24688 15.3125 4.6875 14.7531 4.6875 14.0625C4.6875 13.3719 5.24688 12.8125 5.9375 12.8125C6.62813 12.8125 7.1875 13.3719 7.1875 14.0625C7.1875 14.7531 6.62813 15.3125 5.9375 15.3125ZM8.125 9.375C7.43437 9.375 6.875 8.81563 6.875 8.125C6.875 7.43437 7.43437 6.875 8.125 6.875C8.81563 6.875 9.375 7.43437 9.375 8.125C9.375 8.81563 8.81563 9.375 8.125 9.375ZM10.625 13.75C9.93437 13.75 9.375 13.1906 9.375 12.5C9.375 11.8094 9.93437 11.25 10.625 11.25C11.3156 11.25 11.875 11.8094 11.875 12.5C11.875 13.1906 11.3156 13.75 10.625 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pizzaIcon = createIcon("pizza", iconDefinition595);

// src/noticons/src/plateFood/default.icon.tsx
import { jsxDEV as jsxDEV598, Fragment as Fragment596 } from "react/jsx-dev-runtime";
var iconDefinition596 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV598(Fragment596, {
    children: /* @__PURE__ */ jsxDEV598("path", {
      d: "M18.75 10.625V12.5H16.4062L16.0938 14.375H3.90625L3.59375 12.5H1.25V10.625H18.75ZM12.5 9.375H16.25C16.25 7.44688 15.0531 6.25 13.125 6.25C12.5656 6.25 12.0687 6.35313 11.6437 6.54375C10.8937 5.55625 9.68125 5 8.125 5C5.425 5 3.75 6.675 3.75 9.375H12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var plateFoodIcon = createIcon("plateFood", iconDefinition596);

// src/noticons/src/playbackFastForward/default.icon.tsx
import { jsxDEV as jsxDEV599, Fragment as Fragment597 } from "react/jsx-dev-runtime";
var iconDefinition597 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV599(Fragment597, {
    children: /* @__PURE__ */ jsxDEV599("path", {
      d: "M16.875 9.53125V10.4688L10.7812 14.375H9.6875V10.8687L4.21875 14.375H3.125V5.625H4.21875L9.6875 9.13125V5.625H10.7812L16.875 9.53125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackFastForwardIcon = createIcon("playbackFastForward", iconDefinition597);

// src/noticons/src/playbackNext/default.icon.tsx
import { jsxDEV as jsxDEV600, Fragment as Fragment598 } from "react/jsx-dev-runtime";
var iconDefinition598 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV600(Fragment598, {
    children: /* @__PURE__ */ jsxDEV600("path", {
      d: "M17.5 5.625V14.375H15.625V10.8687L10.1562 14.375H9.0625V10.8687L3.59375 14.375H2.5V5.625H3.59375L9.0625 9.13125V5.625H10.1562L15.625 9.13125V5.625H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackNextIcon = createIcon("playbackNext", iconDefinition598);

// src/noticons/src/playbackPause/default.icon.tsx
import { jsxDEV as jsxDEV601, Fragment as Fragment599 } from "react/jsx-dev-runtime";
var iconDefinition599 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV601(Fragment599, {
    children: /* @__PURE__ */ jsxDEV601("path", {
      d: "M4.375 4.375H8.75V15.625H4.375V4.375ZM11.25 4.375V15.625H15.625V4.375H11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackPauseIcon = createIcon("playbackPause", iconDefinition599);

// src/noticons/src/playbackPlay/default.icon.tsx
import { jsxDEV as jsxDEV602, Fragment as Fragment600 } from "react/jsx-dev-runtime";
var iconDefinition600 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV602(Fragment600, {
    children: /* @__PURE__ */ jsxDEV602("path", {
      d: "M15.625 9.375V10.625L5.625 15.625H4.375V4.375H5.625L15.625 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackPlayIcon = createIcon("playbackPlay", iconDefinition600);

// src/noticons/src/playbackPlayButton/default.icon.tsx
import { jsxDEV as jsxDEV603, Fragment as Fragment601 } from "react/jsx-dev-runtime";
var iconDefinition601 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV603(Fragment601, {
    children: /* @__PURE__ */ jsxDEV603("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.375 10.4688L7.8125 13.75H6.875V6.25H7.8125L14.375 9.53125V10.4688Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackPlayButtonIcon = createIcon("playbackPlayButton", iconDefinition601);

// src/noticons/src/playbackPrevious/default.icon.tsx
import { jsxDEV as jsxDEV604, Fragment as Fragment602 } from "react/jsx-dev-runtime";
var iconDefinition602 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV604(Fragment602, {
    children: /* @__PURE__ */ jsxDEV604("path", {
      d: "M17.5 5.625V14.375H16.4062L10.9375 10.8687V14.375H9.84375L4.375 10.8687V14.375H2.5V5.625H4.375V9.13125L9.84375 5.625H10.9375V9.13125L16.4062 5.625H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackPreviousIcon = createIcon("playbackPrevious", iconDefinition602);

// src/noticons/src/playbackRewind/default.icon.tsx
import { jsxDEV as jsxDEV605, Fragment as Fragment603 } from "react/jsx-dev-runtime";
var iconDefinition603 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV605(Fragment603, {
    children: /* @__PURE__ */ jsxDEV605("path", {
      d: "M16.875 5.625V14.375H15.7812L10.3125 10.8687V14.375H9.21875L3.125 10.4688V9.53125L9.21875 5.625H10.3125V9.13125L15.7812 5.625H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackRewindIcon = createIcon("playbackRewind", iconDefinition603);

// src/noticons/src/playbackStop/default.icon.tsx
import { jsxDEV as jsxDEV606, Fragment as Fragment604 } from "react/jsx-dev-runtime";
var iconDefinition604 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV606(Fragment604, {
    children: /* @__PURE__ */ jsxDEV606("path", {
      d: "M15.625 4.375V15.625H4.375V4.375H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playbackStopIcon = createIcon("playbackStop", iconDefinition604);

// src/noticons/src/playlist/default.icon.tsx
import { jsxDEV as jsxDEV607, Fragment as Fragment605 } from "react/jsx-dev-runtime";
var iconDefinition605 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV607(Fragment605, {
    children: /* @__PURE__ */ jsxDEV607("path", {
      d: "M17.5 4.0625V5.9375H11.875V4.0625H17.5ZM8.75 10.9375H17.5V9.0625H8.75V10.9375ZM8.75 15.9375H17.5V14.0625H8.75V15.9375ZM10.625 6.875V1.875L5 3.28125V11.9844C4.71563 11.9156 4.4 11.875 4.0625 11.875C2.32812 11.875 1.25 12.8313 1.25 14.375C1.25 15.9187 2.32812 16.875 4.0625 16.875C5.79688 16.875 6.875 15.9187 6.875 14.375V7.8125L10.625 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var playlistIcon = createIcon("playlist", iconDefinition605);

// src/noticons/src/plus/default.icon.tsx
import { jsxDEV as jsxDEV608, Fragment as Fragment606 } from "react/jsx-dev-runtime";
var iconDefinition606 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV608(Fragment606, {
    children: /* @__PURE__ */ jsxDEV608("path", {
      d: "M16.875 9.0625V10.9375H10.9375V16.875H9.0625V10.9375H3.125V9.0625H9.0625V3.125H10.9375V9.0625H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var plusIcon = createIcon("plus", iconDefinition606);

// src/noticons/src/poo/default.icon.tsx
import { jsxDEV as jsxDEV609, Fragment as Fragment607 } from "react/jsx-dev-runtime";
var iconDefinition607 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV609(Fragment607, {
    children: /* @__PURE__ */ jsxDEV609("path", {
      d: "M15.625 11.875H15.3125V9.6875C15.3125 8.53125 14.5938 7.8125 13.4375 7.8125H13.125V6.25C13.125 3.9375 11.6875 2.5 9.375 2.5H8.75V5.3125L6.38125 6.49688C5.43438 6.96875 5 7.675 5 8.73438V11.2531L3.88125 11.8125C2.93438 12.2844 2.5 12.9906 2.5 14.05V17.5063H17.5V13.7563C17.5 12.6 16.7812 11.8813 15.625 11.8813V11.875ZM6.875 11.5625V10.3125C6.875 9.73438 7.23438 9.375 7.8125 9.375C8.39062 9.375 8.75 9.73438 8.75 10.3125V11.5625C8.75 12.1406 8.39062 12.5 7.8125 12.5C7.23438 12.5 6.875 12.1406 6.875 11.5625ZM10 15.625C8.96562 15.625 8.125 14.925 8.125 14.0625H11.875C11.875 14.925 11.0344 15.625 10 15.625ZM13.125 11.5625C13.125 12.1406 12.7656 12.5 12.1875 12.5C11.6094 12.5 11.25 12.1406 11.25 11.5625V10.3125C11.25 9.73438 11.6094 9.375 12.1875 9.375C12.7656 9.375 13.125 9.73438 13.125 10.3125V11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pooIcon = createIcon("poo", iconDefinition607);

// src/noticons/src/postageStamp/default.icon.tsx
import { jsxDEV as jsxDEV610, Fragment as Fragment608 } from "react/jsx-dev-runtime";
var iconDefinition608 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV610(Fragment608, {
    children: /* @__PURE__ */ jsxDEV610("path", {
      d: "M15.3125 5.3125C15.3125 4.525 15.9375 4.64062 15.9375 3.75C15.9375 2.97812 15.4594 2.5 14.6875 2.5C13.7844 2.5 13.9219 3.125 13.125 3.125C12.3281 3.125 12.4531 2.5 11.5625 2.5C10.6719 2.5 10.7969 3.125 10 3.125C9.20312 3.125 9.32812 2.5 8.4375 2.5C7.54688 2.5 7.67188 3.125 6.875 3.125C6.07812 3.125 6.20312 2.5 5.3125 2.5C4.54062 2.5 4.0625 2.97812 4.0625 3.75C4.0625 4.65313 4.6875 4.51562 4.6875 5.3125C4.6875 6.10938 4.0625 5.98438 4.0625 6.875C4.0625 7.76562 4.6875 7.64062 4.6875 8.4375C4.6875 9.23438 4.0625 9.10938 4.0625 10C4.0625 10.8906 4.6875 10.7656 4.6875 11.5625C4.6875 12.3594 4.0625 12.2344 4.0625 13.125C4.0625 14.0156 4.6875 13.8906 4.6875 14.6875C4.6875 15.4844 4.0625 15.3594 4.0625 16.25C4.0625 17.0219 4.54062 17.5 5.3125 17.5C6.21563 17.5 6.07812 16.875 6.875 16.875C7.67188 16.875 7.54688 17.5 8.4375 17.5C9.32812 17.5 9.20312 16.875 10 16.875C10.7969 16.875 10.6719 17.5 11.5625 17.5C12.4531 17.5 12.3281 16.875 13.125 16.875C13.9219 16.875 13.7969 17.5 14.6875 17.5C15.4594 17.5 15.9375 17.0219 15.9375 16.25C15.9375 15.3469 15.3125 15.4844 15.3125 14.6875C15.3125 13.8906 15.9375 14.0156 15.9375 13.125C15.9375 12.2344 15.3125 12.3594 15.3125 11.5625C15.3125 10.7656 15.9375 10.8906 15.9375 10C15.9375 9.10938 15.3125 9.23438 15.3125 8.4375C15.3125 7.64062 15.9375 7.76562 15.9375 6.875C15.9375 5.98438 15.3125 6.10938 15.3125 5.3125ZM13.75 15.3125H6.25V4.6875H13.75V15.3125ZM12.5 14.0625H7.5V5.9375H12.5V14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var postageStampIcon = createIcon("postageStamp", iconDefinition608);

// src/noticons/src/postcard/default.icon.tsx
import { jsxDEV as jsxDEV611, Fragment as Fragment609 } from "react/jsx-dev-runtime";
var iconDefinition609 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV611(Fragment609, {
    children: /* @__PURE__ */ jsxDEV611("path", {
      d: "M2.5 4.375V15.625H17.5V4.375H2.5ZM4.375 6.25H8.75V7.5H4.375V6.25ZM7.5 12.5H4.375V11.25H7.5V12.5ZM10 10H4.375V8.75H10V10ZM15.625 10H12.5V6.25H15.625V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var postcardIcon = createIcon("postcard", iconDefinition609);

// src/noticons/src/pot/default.icon.tsx
import { jsxDEV as jsxDEV612, Fragment as Fragment610 } from "react/jsx-dev-runtime";
var iconDefinition610 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV612(Fragment610, {
    children: /* @__PURE__ */ jsxDEV612("path", {
      d: "M13.75 5.88125V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V5.88125C3.73125 6.24687 2.5 6.875 2.5 6.875V8.125H17.5V6.875C17.5 6.875 16.2688 6.24687 13.75 5.88125ZM8.125 5.68438V4.99687C8.125 4.4875 8.24062 4.37187 8.75 4.37187H11.25C11.7594 4.37187 11.875 4.4875 11.875 4.99687V5.68438C11.2937 5.64688 10.6719 5.62187 10 5.62187C9.32812 5.62187 8.70625 5.64375 8.125 5.68438ZM2.5 9.37187H17.5V11.2469H16.25V14.9969C16.25 16.5406 15.2937 17.4969 13.75 17.4969H6.25C4.70625 17.4969 3.75 16.5406 3.75 14.9969V11.2469H2.5V9.37187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var potIcon = createIcon("pot", iconDefinition610);

// src/noticons/src/pottedPlant/default.icon.tsx
import { jsxDEV as jsxDEV613, Fragment as Fragment611 } from "react/jsx-dev-runtime";
var iconDefinition611 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV613(Fragment611, {
    children: /* @__PURE__ */ jsxDEV613("path", {
      d: "M10.625 8.4375V10H15.625V11.875H14.2188L12.8125 17.5H7.1875L5.78125 11.875H4.375V10H9.375V8.4375H4.375V7.225C5.72187 5.87813 7.7375 5.59375 9.375 6.35625V5.44375L5.40313 1.48125L6.25 0.625C8.68125 0.625 10.625 2.56875 10.625 5V5.10625C12.2625 4.34375 14.2781 4.62813 15.625 5.975V7.1875H10.625V8.4375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pottedPlantIcon = createIcon("pottedPlant", iconDefinition611);

// src/noticons/src/poultry/default.icon.tsx
import { jsxDEV as jsxDEV614, Fragment as Fragment612 } from "react/jsx-dev-runtime";
var iconDefinition612 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV614(Fragment612, {
    children: /* @__PURE__ */ jsxDEV614("path", {
      d: "M17.5 7.13442C17.5 8.89067 16.5094 10.4938 14.9375 11.2813L10.6406 13.4313C10.2188 13.6407 9.75625 13.75 9.28437 13.75C8.90625 13.75 8.55 13.6782 8.21563 13.5532L7.60625 14.1625C7.08125 14.6875 6.875 15.1907 6.875 15.9313V16.8782C6.875 17.65 6.39687 18.1282 5.625 18.1282C4.85313 18.1282 4.375 17.65 4.375 16.8782V15.6282H3.125C2.35312 15.6282 1.875 15.15 1.875 14.3782C1.875 13.6063 2.35312 13.1282 3.125 13.1282H4.07187C4.8125 13.1282 5.31563 12.9188 5.84063 12.3969L6.45 11.7875C6.325 11.4532 6.25313 11.0969 6.25313 10.7188C6.25313 10.2469 6.3625 9.78442 6.57188 9.36255L8.72188 5.06567C9.50625 3.4938 11.1125 2.50317 12.8687 2.50317C15.4281 2.50317 17.5031 4.57817 17.5031 7.13755L17.5 7.13442Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var poultryIcon = createIcon("poultry", iconDefinition612);

// src/noticons/src/power/default.icon.tsx
import { jsxDEV as jsxDEV615, Fragment as Fragment613 } from "react/jsx-dev-runtime";
var iconDefinition613 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV615(Fragment613, {
    children: /* @__PURE__ */ jsxDEV615("path", {
      d: "M10.9375 10.625H9.0625V1.875H10.9375V10.625ZM15.3031 4.69687L13.9781 6.02188C15.0406 7.08438 15.625 8.49687 15.625 10C15.625 13.1031 13.1 15.625 10 15.625C6.9 15.625 4.375 13.1031 4.375 10C4.375 8.49687 4.95938 7.08438 6.02188 6.02188L4.69687 4.69687C3.28125 6.1125 2.5 7.99687 2.5 10C2.5 14.1344 5.86563 17.5 10 17.5C14.1344 17.5 17.5 14.1344 17.5 10C17.5 7.99687 16.7188 6.1125 15.3031 4.69687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var powerIcon = createIcon("power", iconDefinition613);

// src/noticons/src/pram/default.icon.tsx
import { jsxDEV as jsxDEV616, Fragment as Fragment614 } from "react/jsx-dev-runtime";
var iconDefinition614 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV616(Fragment614, {
    children: /* @__PURE__ */ jsxDEV616("path", {
      d: "M14.375 12.5V13.8594C15.1031 14.1156 15.625 14.8094 15.625 15.625C15.625 16.6594 14.7844 17.5 13.75 17.5C12.7156 17.5 11.875 16.6594 11.875 15.625C11.875 14.8094 12.3969 14.1156 13.125 13.8594V12.5H5.625V13.8594C6.35313 14.1156 6.875 14.8094 6.875 15.625C6.875 16.6594 6.03437 17.5 5 17.5C3.96563 17.5 3.125 16.6594 3.125 15.625C3.125 14.8094 3.64688 14.1156 4.375 13.8594V12.5H2.5V7.5C2.5 4.41563 4.41563 2.5 7.5 2.5H12.5V3.75L10.625 7.5H14.925L17.425 5L18.75 6.325L16.25 8.825V12.5H14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pramIcon = createIcon("pram", iconDefinition614);

// src/noticons/src/pregnancyTest/default.icon.tsx
import { jsxDEV as jsxDEV617, Fragment as Fragment615 } from "react/jsx-dev-runtime";
var iconDefinition615 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV617(Fragment615, {
    children: /* @__PURE__ */ jsxDEV617("path", {
      d: "M3.31875 13.1469C2.77187 13.6938 2.5 14.3032 2.5 14.9157C2.5 15.5282 2.77187 16.1375 3.31875 16.6844C3.86562 17.2313 4.475 17.5032 5.0875 17.5032C5.7 17.5032 6.30938 17.2313 6.85625 16.6844L13.2031 10.3375L9.66875 6.80317L3.32188 13.15L3.31875 13.1469ZM5.4625 15.4219C5.325 15.5594 5.17188 15.625 5.02187 15.625C4.70312 15.625 4.375 15.2969 4.375 14.9782C4.375 14.825 4.44375 14.6719 4.57812 14.5375L5.36562 13.75L6.25 14.6344L5.4625 15.4219ZM7.91875 12.9657L7.13125 13.7532L6.24687 12.8688L7.03438 12.0813C7.17188 11.9438 7.325 11.8782 7.475 11.8782C7.79375 11.8782 8.12187 12.2063 8.12187 12.525C8.12187 12.6782 8.05312 12.8313 7.91875 12.9657ZM17.4969 4.2688L16.6281 6.3688C16.3469 7.04692 16.0625 7.47192 15.5438 7.99067L14.0813 9.45317L12.7563 8.12817L14.9969 5.88755L14.1125 5.00317L11.8719 7.2438L10.5469 5.9188L12.0094 4.4563C12.5281 3.93755 12.9531 3.65317 13.6312 3.37192L15.7312 2.50317L17.5 4.27192L17.4969 4.2688Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pregnancyTestIcon = createIcon("pregnancyTest", iconDefinition615);

// src/noticons/src/pretzel/default.icon.tsx
import { jsxDEV as jsxDEV618, Fragment as Fragment616 } from "react/jsx-dev-runtime";
var iconDefinition616 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV618(Fragment616, {
    children: /* @__PURE__ */ jsxDEV618("path", {
      d: "M17.1906 12.5031C17.7875 11.3062 18.125 9.95312 18.125 8.66875C18.125 5.40625 16.2125 3.125 13.475 3.125C11.9125 3.125 10.7719 3.875 10 4.77188C9.22813 3.87188 8.0875 3.125 6.525 3.125C3.7875 3.125 1.875 5.40313 1.875 8.66875C1.875 9.95312 2.2125 11.3062 2.80937 12.5031C2.28125 12.8437 2.08125 13.5375 2.36875 14.1125C2.67812 14.7312 3.42812 14.9812 4.04688 14.6719L4.25938 14.5656C5.3875 15.7281 7.20937 16.875 10.0031 16.875C12.7969 16.875 14.6156 15.7281 15.7469 14.5656L15.9594 14.6719C16.575 14.9812 17.3281 14.7312 17.6375 14.1125C17.925 13.5375 17.7281 12.8437 17.1969 12.5031H17.1906ZM4.375 8.66875C4.375 7.26562 4.9375 5.625 6.525 5.625C7.96562 5.625 8.59062 7.075 8.75 7.52812V9.525L5.04062 11.3781C4.57812 10.4594 4.375 9.47813 4.375 8.66875ZM10 14.375C8.60938 14.375 7.51563 13.9719 6.67813 13.3563L10 11.6937L13.3219 13.3563C12.4844 13.975 11.3906 14.375 10 14.375ZM14.9594 11.3781L11.25 9.525V7.53125C11.4125 7.06875 12.0375 5.62813 13.475 5.62813C15.0625 5.62813 15.625 7.26875 15.625 8.67188C15.625 9.48125 15.4187 10.4625 14.9594 11.3812V11.3781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pretzelIcon = createIcon("pretzel", iconDefinition616);

// src/noticons/src/preview/default.icon.tsx
import { jsxDEV as jsxDEV619, Fragment as Fragment617 } from "react/jsx-dev-runtime";
var iconDefinition617 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV619(Fragment617, {
    children: /* @__PURE__ */ jsxDEV619("path", {
      d: "M5.625 15.625H14.375V16.875H5.625V15.625ZM18.125 4.375V14.375H1.875V4.375H18.125ZM13.75 8.90625L8.4375 6.25H7.5V12.5H8.4375L13.75 9.84375V8.90625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var previewIcon = createIcon("preview", iconDefinition617);

// src/noticons/src/print/default.icon.tsx
import { jsxDEV as jsxDEV620, Fragment as Fragment618 } from "react/jsx-dev-runtime";
var iconDefinition618 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV620(Fragment618, {
    children: /* @__PURE__ */ jsxDEV620("path", {
      d: "M14.375 7.5H5.625V1.875H14.375V7.5ZM18.125 11.25V17.5H1.875V11.25C1.875 9.70625 2.83125 8.75 4.375 8.75H15.625C17.1687 8.75 18.125 9.70625 18.125 11.25ZM15.625 15.625L14.375 11.875H5.625L4.375 15.625H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var printIcon = createIcon("print", iconDefinition618);

// src/noticons/src/priorityHigh/default.icon.tsx
import { jsxDEV as jsxDEV621, Fragment as Fragment619 } from "react/jsx-dev-runtime";
var iconDefinition619 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV621(Fragment619, {
    children: /* @__PURE__ */ jsxDEV621("path", {
      d: "M10 8.67505L17.5 16.175L16.175 17.5L10 11.325L3.825 17.5L2.5 16.175L10 8.67505ZM10 5.07817L16.175 11.2532L17.5 9.92817L10 2.42505L2.5 9.92505L3.825 11.25L10 5.07505V5.07817Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var priorityHighIcon = createIcon("priorityHigh", iconDefinition619);

// src/noticons/src/priorityLow/default.icon.tsx
import { jsxDEV as jsxDEV622, Fragment as Fragment620 } from "react/jsx-dev-runtime";
var iconDefinition620 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV622(Fragment620, {
    children: /* @__PURE__ */ jsxDEV622("path", {
      d: "M10 11.325L2.5 3.825L3.825 2.5L10 8.675L16.175 2.5L17.5 3.825L10 11.325ZM10 14.9219L3.825 8.75L2.5 10.075L10 17.575L17.5 10.075L16.175 8.75L10 14.925V14.9219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var priorityLowIcon = createIcon("priorityLow", iconDefinition620);

// src/noticons/src/priorityMid/default.icon.tsx
import { jsxDEV as jsxDEV623, Fragment as Fragment621 } from "react/jsx-dev-runtime";
var iconDefinition621 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV623(Fragment621, {
    children: /* @__PURE__ */ jsxDEV623("path", {
      d: "M2.5 11.875H17.5V13.75H2.5V11.875ZM2.5 6.25V8.125H17.5V6.25H2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var priorityMidIcon = createIcon("priorityMid", iconDefinition621);

// src/noticons/src/private/default.icon.tsx
import { jsxDEV as jsxDEV624, Fragment as Fragment622 } from "react/jsx-dev-runtime";
var iconDefinition622 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV624(Fragment622, {
    children: /* @__PURE__ */ jsxDEV624("path", {
      d: "M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM15.3125 11.5188C15.3125 12.4438 15.0531 13.075 14.3969 13.7281L13.5969 14.5281C12.8125 15.3125 12.0563 15.625 10.9438 15.625H9.05937C6.74687 15.625 5.30937 14.1875 5.30937 11.875V6.875C5.30937 6.49062 5.55 6.25 5.93437 6.25C6.31875 6.25 6.55937 6.49062 6.55937 6.875V9.6875H7.49687V5C7.49687 4.61562 7.7375 4.375 8.12187 4.375C8.50625 4.375 8.74687 4.61562 8.74687 5V9.6875H9.68437V4.375C9.68437 3.99063 9.925 3.75 10.3094 3.75C10.6938 3.75 10.9344 3.99063 10.9344 4.375V9.6875H11.8719V5.625C11.8719 5.24062 12.1125 5 12.4969 5C12.8813 5 13.1219 5.24062 13.1219 5.625V11.875C13.6031 11.875 13.9031 11.575 13.9031 11.0938V10.4688C13.9031 9.375 14.3219 8.75 14.9969 8.75C15.1906 8.75 15.3094 8.86875 15.3094 9.0625V11.5188H15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var privateIcon = createIcon("private", iconDefinition622);

// src/noticons/src/profile/default.icon.tsx
import { jsxDEV as jsxDEV625, Fragment as Fragment623 } from "react/jsx-dev-runtime";
var iconDefinition623 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV625(Fragment623, {
    children: /* @__PURE__ */ jsxDEV625("path", {
      d: "M16.25 9.22808C16.25 9.40308 16.1312 9.5562 15.9156 9.60933L15.1375 9.80308L14.825 11.6812C14.7375 12.1968 14.4 12.4968 13.9344 12.4968C13.8406 12.4968 13.7406 12.4843 13.6375 12.4593L11.8781 12.0187V13.1218L13.475 16.3125C13.6594 16.6812 13.7531 17.0843 13.7531 17.4968H5.00312C5.00312 15.7906 6.25312 14.3718 8.12812 13.4343V11.3281C6.64062 10.5406 5.62812 8.9812 5.62812 7.18433C5.62812 4.59683 7.72812 2.49683 10.3156 2.49683C12.9031 2.49683 15.0031 4.59683 15.0031 7.18433C15.0031 7.2562 14.9969 7.32808 14.9937 7.39995L16.1531 8.94683C16.2219 9.03745 16.2531 9.13433 16.2531 9.22495L16.25 9.22808Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var profileIcon = createIcon("profile", iconDefinition623);

// src/noticons/src/promoted/default.icon.tsx
import { jsxDEV as jsxDEV626, Fragment as Fragment624 } from "react/jsx-dev-runtime";
var iconDefinition624 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV626(Fragment624, {
    children: /* @__PURE__ */ jsxDEV626("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM14.0625 12.8125H12.1875V9.1375L6.95 14.375L5.625 13.05L10.8625 7.8125H7.1875V5.9375H14.0625V12.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var promotedIcon = createIcon("promoted", iconDefinition624);

// src/noticons/src/public/default.icon.tsx
import { jsxDEV as jsxDEV627, Fragment as Fragment625 } from "react/jsx-dev-runtime";
var iconDefinition625 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV627(Fragment625, {
    children: /* @__PURE__ */ jsxDEV627("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.0625C10.7719 4.0625 11.25 4.54063 11.25 5.3125C11.25 6.08437 10.7719 6.5625 10 6.5625C9.22813 6.5625 8.75 6.08437 8.75 5.3125C8.75 4.54063 9.22813 4.0625 10 4.0625ZM14.0625 10.7812C12.3594 10.7812 12.0031 9.725 11.25 9.10625V11.1438C12.0813 12.0375 13.125 13.5625 13.125 15.625H11.7188C11.7188 13.7469 10.5688 12.4062 9.90313 11.7844C9.52188 13.1437 8.65625 14.4312 7.225 15.625L6.25 14.65C7.9 13.275 8.70312 11.7844 8.75 10.2562V8.9125C7.89375 9.2875 7.42188 10.0937 7.42188 11.2531H6.25C6.25 8.975 7.72188 7.50313 10 7.50313C12.5469 7.50313 12.3344 9.6125 14.0625 9.6125V10.7844V10.7812Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var publicIcon = createIcon("public", iconDefinition625);

// src/noticons/src/pullRequest/default.icon.tsx
import { jsxDEV as jsxDEV628, Fragment as Fragment626 } from "react/jsx-dev-runtime";
var iconDefinition626 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV628(Fragment626, {
    children: /* @__PURE__ */ jsxDEV628("path", {
      d: "M15.625 11.25C15.1031 11.25 14.6125 11.3781 14.1813 11.6062L11.95 9.375H14.375V7.5H8.75V13.125H10.625V10.7L12.8562 12.9313C12.6312 13.3625 12.5 13.8531 12.5 14.375C12.5 16.1 13.9 17.5 15.625 17.5C17.35 17.5 18.75 16.1 18.75 14.375C18.75 12.65 17.35 11.25 15.625 11.25ZM15.625 15.625C14.9344 15.625 14.375 15.0656 14.375 14.375C14.375 13.6844 14.9344 13.125 15.625 13.125C16.3156 13.125 16.875 13.6844 16.875 14.375C16.875 15.0656 16.3156 15.625 15.625 15.625ZM8.125 5.625C8.125 3.9 6.725 2.5 5 2.5C3.275 2.5 1.875 3.9 1.875 5.625C1.875 7.025 2.79375 8.20938 4.0625 8.60625V11.3937C2.79375 11.7906 1.875 12.975 1.875 14.375C1.875 16.1 3.275 17.5 5 17.5C6.725 17.5 8.125 16.1 8.125 14.375C8.125 12.975 7.20625 11.7906 5.9375 11.3937V8.60625C7.20625 8.20938 8.125 7.025 8.125 5.625ZM5 4.375C5.69062 4.375 6.25 4.93438 6.25 5.625C6.25 6.31562 5.69062 6.875 5 6.875C4.30938 6.875 3.75 6.31562 3.75 5.625C3.75 4.93438 4.30938 4.375 5 4.375ZM5 15.625C4.30938 15.625 3.75 15.0656 3.75 14.375C3.75 13.6844 4.30938 13.125 5 13.125C5.69062 13.125 6.25 13.6844 6.25 14.375C6.25 15.0656 5.69062 15.625 5 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pullRequestIcon = createIcon("pullRequest", iconDefinition626);

// src/noticons/src/pump/default.icon.tsx
import { jsxDEV as jsxDEV629, Fragment as Fragment627 } from "react/jsx-dev-runtime";
var iconDefinition627 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV629(Fragment627, {
    children: /* @__PURE__ */ jsxDEV629("path", {
      d: "M18.75 14.375C18.75 14.375 17.5 16.25 13.75 16.25C12.15 16.25 10.6156 15.6156 9.48125 14.4812L7.1875 12.1875H5.625V16.25H4.0625L3.09063 10.425C2.47813 9.84688 1.875 8.91875 1.875 7.5C1.875 4.6125 4.375 3.75 4.375 3.75L12.9156 12.2906L15 11.25L18.75 13.125V14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pumpIcon = createIcon("pump", iconDefinition627);

// src/noticons/src/pumpBottle/default.icon.tsx
import { jsxDEV as jsxDEV630, Fragment as Fragment628 } from "react/jsx-dev-runtime";
var iconDefinition628 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV630(Fragment628, {
    children: /* @__PURE__ */ jsxDEV630("path", {
      d: "M16.25 11.875V17.5H3.75V11.875C3.75 9.5625 5.1875 8.125 7.5 8.125V5.625H8.75V1.875H11.3188C12.1875 1.875 12.7781 2.01563 13.5563 2.40313L15 3.125V4.375H11.25V5.625H12.5V8.125C14.8125 8.125 16.25 9.5625 16.25 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pumpBottleIcon = createIcon("pumpBottle", iconDefinition628);

// src/noticons/src/pushPin/default.icon.tsx
import { jsxDEV as jsxDEV631, Fragment as Fragment629 } from "react/jsx-dev-runtime";
var iconDefinition629 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV631(Fragment629, {
    children: /* @__PURE__ */ jsxDEV631("path", {
      d: "M15 13.1249H10.9375V16.2499L10.3125 18.7499H9.6875L9.0625 16.2499V13.1249H5V11.6593C5 10.9187 5.20938 10.4155 5.73125 9.89053L7.5 8.12178V5.62178L6.35625 4.47803C5.83125 3.95303 5.625 3.4499 5.625 2.70928V2.49365H14.375V2.70928C14.375 3.4499 14.1656 3.95303 13.6438 4.47803L12.5 5.62178V8.12178L14.2688 9.89053C14.7937 10.4155 15 10.9187 15 11.6593V13.1249Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var pushPinIcon = createIcon("pushPin", iconDefinition629);

// src/noticons/src/puzzle/default.icon.tsx
import { jsxDEV as jsxDEV632, Fragment as Fragment630 } from "react/jsx-dev-runtime";
var iconDefinition630 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV632(Fragment630, {
    children: /* @__PURE__ */ jsxDEV632("path", {
      d: "M18.7344 10.3125C18.7344 11.4688 18.1375 12.1875 17.1719 12.1875C16.6031 12.1875 16.1656 11.9344 15.9031 11.4906C15.8031 11.325 15.675 11.25 15.4813 11.25C15.175 11.25 14.9844 11.4719 14.9844 11.7469L15 16.875H10.8094C10.5031 16.875 10.3125 16.6844 10.3125 16.3781C10.3125 16.1844 10.3875 16.0563 10.5531 15.9563C10.9969 15.6906 11.25 15.2531 11.25 14.6875C11.25 13.7219 10.5312 13.125 9.375 13.125C8.21875 13.125 7.5 13.7219 7.5 14.6875C7.5 15.2563 7.75312 15.6938 8.19687 15.9563C8.3625 16.0563 8.4375 16.1844 8.4375 16.3781C8.4375 16.6844 8.24687 16.875 7.94063 16.875H1.25L2.5875 11.5312C2.7375 10.9375 3.1375 10.625 3.81562 10.625C4.275 10.625 4.55625 10.7781 4.82812 11.0875C5.09375 11.3906 5.47188 11.5625 5.9375 11.5625C6.90312 11.5625 7.5 10.8438 7.5 9.6875C7.5 8.53125 6.90312 7.8125 5.9375 7.8125C5.40625 7.8125 4.99062 8.03437 4.72187 8.425C4.57187 8.64062 4.40938 8.75 4.14375 8.75C3.65313 8.75 3.37188 8.3875 3.49062 7.9125L4.21875 5H7.94375C8.25 5 8.4375 4.80938 8.4375 4.50312C8.4375 4.30938 8.3625 4.18125 8.19687 4.08125C7.75312 3.81563 7.5 3.37812 7.5 2.8125C7.5 1.84688 8.21875 1.25 9.375 1.25C10.5312 1.25 11.25 1.84688 11.25 2.8125C11.25 3.38125 10.9969 3.81875 10.5531 4.08125C10.3875 4.18125 10.3125 4.30938 10.3125 4.50312C10.3125 4.80938 10.5031 5 10.8094 5H15L14.9844 8.87813C14.9844 9.18437 15.175 9.375 15.4813 9.375C15.675 9.375 15.8031 9.3 15.9031 9.13437C16.1687 8.69062 16.6062 8.4375 17.1719 8.4375C18.1375 8.4375 18.7344 9.15625 18.7344 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var puzzleIcon = createIcon("puzzle", iconDefinition630);

// src/noticons/src/questionMark/default.icon.tsx
import { jsxDEV as jsxDEV633, Fragment as Fragment631 } from "react/jsx-dev-runtime";
var iconDefinition631 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV633(Fragment631, {
    children: /* @__PURE__ */ jsxDEV633("path", {
      d: "M8.125 14.375H11.875V17.5H8.125V14.375ZM10 2.5C6.53125 2.5 4.375 4.4375 4.375 7.5H7.5C7.5 6.0625 8.36875 5.3125 9.92188 5.3125C11.475 5.3125 12.3438 6 12.3438 7.1875C12.3438 9.1625 8.4375 8.53438 8.4375 12.1875V12.5H11.5625C11.5625 10.525 15.625 10.8406 15.625 7.1875C15.625 4.375 13.4688 2.5 10 2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var questionMarkIcon = createIcon("questionMark", iconDefinition631);

// src/noticons/src/radio/default.icon.tsx
import { jsxDEV as jsxDEV634, Fragment as Fragment632 } from "react/jsx-dev-runtime";
var iconDefinition632 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV634(Fragment632, {
    children: /* @__PURE__ */ jsxDEV634("path", {
      d: "M7.5 0L6.6625 1.67812L13.3094 5H2.5V16.25H17.5V5L7.5 0ZM5.625 14.375C4.93438 14.375 4.375 13.8156 4.375 13.125C4.375 12.4344 4.93438 11.875 5.625 11.875C6.31562 11.875 6.875 12.4344 6.875 13.125C6.875 13.8156 6.31562 14.375 5.625 14.375ZM14.375 14.375C13.6844 14.375 13.125 13.8156 13.125 13.125C13.125 12.4344 13.6844 11.875 14.375 11.875C15.0656 11.875 15.625 12.4344 15.625 13.125C15.625 13.8156 15.0656 14.375 14.375 14.375ZM15.625 9.375H4.375V6.875H15.625V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var radioIcon = createIcon("radio", iconDefinition632);

// src/noticons/src/rain/default.icon.tsx
import { jsxDEV as jsxDEV635, Fragment as Fragment633 } from "react/jsx-dev-runtime";
var iconDefinition633 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV635(Fragment633, {
    children: /* @__PURE__ */ jsxDEV635("path", {
      d: "M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM6.09375 12.5L3.59375 17.5H4.84375L7.34375 12.5H6.09375ZM9.84375 12.5L7.34375 17.5H8.59375L11.0938 12.5H9.84375ZM11.0938 17.5H12.3438L14.8438 12.5H13.5938L11.0938 17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rainIcon = createIcon("rain", iconDefinition633);

// src/noticons/src/rainbow/default.icon.tsx
import { jsxDEV as jsxDEV636, Fragment as Fragment634 } from "react/jsx-dev-runtime";
var iconDefinition634 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV636(Fragment634, {
    children: /* @__PURE__ */ jsxDEV636("path", {
      d: "M13.75 13.75H11.875C11.875 12.7156 11.0344 11.875 10 11.875C8.96562 11.875 8.125 12.7156 8.125 13.75H6.25C6.25 11.6781 7.92812 10 10 10C12.0719 10 13.75 11.6781 13.75 13.75ZM10 6.875C6.20312 6.875 3.125 9.95312 3.125 13.75H5C5 10.9875 7.2375 8.75 10 8.75C12.7625 8.75 15 10.9875 15 13.75H16.875C16.875 9.95312 13.7969 6.875 10 6.875ZM10 3.75C4.47813 3.75 0 8.22813 0 13.75H1.875C1.875 9.2625 5.5125 5.625 10 5.625C14.4875 5.625 18.125 9.2625 18.125 13.75H20C20 8.22813 15.5219 3.75 10 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rainbowIcon = createIcon("rainbow", iconDefinition634);

// src/noticons/src/receipt/default.icon.tsx
import { jsxDEV as jsxDEV637, Fragment as Fragment635 } from "react/jsx-dev-runtime";
var iconDefinition635 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV637(Fragment635, {
    children: /* @__PURE__ */ jsxDEV637("path", {
      d: "M14.375 2.5L13.125 3.75L11.875 2.5H11.25L10 3.75L8.75 2.5H8.125L6.875 3.75L5.625 2.5H4.6875V17.5H5.625L6.875 16.25L8.125 17.5H8.75L10 16.25L11.25 17.5H11.875L13.125 16.25L14.375 17.5H15.3125V2.5H14.375ZM9.0625 13.125H6.5625V11.875H9.0625V13.125ZM10.3125 10.625H6.5625V9.375H10.3125V10.625ZM8.125 6.875V5.625H11.875V6.875H8.125ZM13.4375 13.125H11.5625V11.875H13.4375V13.125ZM13.4375 10.625H11.5625V9.375H13.4375V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var receiptIcon = createIcon("receipt", iconDefinition635);

// src/noticons/src/redirect/default.icon.tsx
import { jsxDEV as jsxDEV638, Fragment as Fragment636 } from "react/jsx-dev-runtime";
var iconDefinition636 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV638(Fragment636, {
    children: /* @__PURE__ */ jsxDEV638("path", {
      d: "M18.75 9.375L12.5 15.625H11.25V12.5H7.8125L8.75 14.375V15.625H1.875V12.5H4.375L1.875 7.5V6.25H11.25V3.125H12.5L18.75 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var redirectIcon = createIcon("redirect", iconDefinition636);

// src/noticons/src/redo/default.icon.tsx
import { jsxDEV as jsxDEV639, Fragment as Fragment637 } from "react/jsx-dev-runtime";
var iconDefinition637 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV639(Fragment637, {
    children: /* @__PURE__ */ jsxDEV639("path", {
      d: "M7.8125 13.75H13.75V15.625H7.8125C4.7125 15.625 2.5 13.4125 2.5 10.3125C2.5 7.2125 4.7125 5 7.8125 5H14.1437L12.3438 3.2L13.6688 1.875L17.7313 5.9375L13.6688 10L12.3438 8.675L14.1437 6.875H7.8125C5.80625 6.875 4.375 8.30625 4.375 10.3125C4.375 12.3188 5.80625 13.75 7.8125 13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var redoIcon = createIcon("redo", iconDefinition637);

// src/noticons/src/reference/default.icon.tsx
import { jsxDEV as jsxDEV640, Fragment as Fragment638 } from "react/jsx-dev-runtime";
var iconDefinition638 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV640(Fragment638, {
    children: /* @__PURE__ */ jsxDEV640("path", {
      d: "M4.375 11.875C3.34063 11.875 2.5 11.0344 2.5 10C2.5 8.96562 3.34063 8.125 4.375 8.125C5.40937 8.125 6.25 8.96562 6.25 10C6.25 11.0344 5.40937 11.875 4.375 11.875ZM15.625 8.125C14.5906 8.125 13.75 8.96562 13.75 10C13.75 11.0344 14.5906 11.875 15.625 11.875C16.6594 11.875 17.5 11.0344 17.5 10C17.5 8.96562 16.6594 8.125 15.625 8.125ZM10 6.25C11.0344 6.25 11.875 5.40937 11.875 4.375C11.875 3.34063 11.0344 2.5 10 2.5C8.96562 2.5 8.125 3.34063 8.125 4.375C8.125 5.40937 8.96562 6.25 10 6.25ZM10 13.75C8.96562 13.75 8.125 14.5906 8.125 15.625C8.125 16.6594 8.96562 17.5 10 17.5C11.0344 17.5 11.875 16.6594 11.875 15.625C11.875 14.5906 11.0344 13.75 10 13.75ZM16.25 5.075L14.925 3.75L10 8.675L5.075 3.75L3.75 5.075L8.675 10L3.75 14.925L5.075 16.25L10 11.325L14.925 16.25L16.25 14.925L11.325 10L16.25 5.075Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var referenceIcon = createIcon("reference", iconDefinition638);

// src/noticons/src/refresh/default.icon.tsx
import { jsxDEV as jsxDEV641, Fragment as Fragment639 } from "react/jsx-dev-runtime";
var iconDefinition639 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV641(Fragment639, {
    children: /* @__PURE__ */ jsxDEV641("path", {
      d: "M16.875 10C16.875 13.7969 13.7969 16.875 10 16.875C6.20312 16.875 3.125 13.7969 3.125 10C3.125 6.20312 6.20312 3.125 10 3.125H10.7062L8.90625 1.325L10.2313 0L14.2938 4.0625L10.2313 8.125L8.90625 6.8L10.7062 5H10C7.2375 5 5 7.2375 5 10C5 12.7625 7.2375 15 10 15C12.7625 15 15 12.7625 15 10H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var refreshIcon = createIcon("refresh", iconDefinition639);

// src/noticons/src/refreshReverse/default.icon.tsx
import { jsxDEV as jsxDEV642, Fragment as Fragment640 } from "react/jsx-dev-runtime";
var iconDefinition640 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV642(Fragment640, {
    children: /* @__PURE__ */ jsxDEV642("path", {
      d: "M16.875 10C16.875 13.7969 13.7969 16.875 10 16.875C6.20312 16.875 3.125 13.7969 3.125 10H5C5 12.7625 7.2375 15 10 15C12.7625 15 15 12.7625 15 10C15 7.2375 12.7625 5 10 5H9.29375L11.0938 6.8L9.76875 8.125L5.70625 4.0625L9.76875 0L11.0938 1.325L9.29375 3.125H10C13.7969 3.125 16.875 6.20312 16.875 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var refreshReverseIcon = createIcon("refreshReverse", iconDefinition640);

// src/noticons/src/refrigerator/default.icon.tsx
import { jsxDEV as jsxDEV643, Fragment as Fragment641 } from "react/jsx-dev-runtime";
var iconDefinition641 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV643(Fragment641, {
    children: /* @__PURE__ */ jsxDEV643("path", {
      d: "M5 18.75H15V8.75H5V18.75ZM11.875 10.625H13.125V13.125H11.875V10.625ZM5 1.25V7.5H15V1.25H5ZM13.125 5.625H11.875V3.125H13.125V5.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var refrigeratorIcon = createIcon("refrigerator", iconDefinition641);

// src/noticons/src/remove/default.icon.tsx
import { jsxDEV as jsxDEV644, Fragment as Fragment642 } from "react/jsx-dev-runtime";
var iconDefinition642 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV644(Fragment642, {
    children: /* @__PURE__ */ jsxDEV644("path", {
      d: "M16.875 9.0625V10.9375H3.125V9.0625H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var removeIcon = createIcon("remove", iconDefinition642);

// src/noticons/src/rename/default.icon.tsx
import { jsxDEV as jsxDEV645, Fragment as Fragment643 } from "react/jsx-dev-runtime";
var iconDefinition643 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV645(Fragment643, {
    children: /* @__PURE__ */ jsxDEV645("path", {
      d: "M7.8125 14.375H2.5V5.625H7.8125V7.5H4.375V12.5H7.8125V14.375ZM12.1875 5.625V7.5H15.625V12.5H12.1875V14.375H17.5V5.625H12.1875ZM10.9375 14.375V5.625C10.9375 4.85313 11.4156 4.375 12.1875 4.375H12.8125V2.5H12.1875C11.1625 2.5 10.4 2.925 10 3.65937C9.6 2.925 8.8375 2.5 7.8125 2.5H7.1875V4.375H7.8125C8.58437 4.375 9.0625 4.85313 9.0625 5.625V14.375C9.0625 15.1469 8.58437 15.625 7.8125 15.625H7.1875V17.5H7.8125C8.8375 17.5 9.6 17.075 10 16.3406C10.4 17.075 11.1625 17.5 12.1875 17.5H12.8125V15.625H12.1875C11.4156 15.625 10.9375 15.1469 10.9375 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var renameIcon = createIcon("rename", iconDefinition643);

// src/noticons/src/reorder/default.icon.tsx
import { jsxDEV as jsxDEV646, Fragment as Fragment644 } from "react/jsx-dev-runtime";
var iconDefinition644 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV646(Fragment644, {
    children: /* @__PURE__ */ jsxDEV646("path", {
      d: "M17.5 4.0625V5.9375H2.5V4.0625H17.5ZM2.5 10.9375H17.5V9.0625H2.5V10.9375ZM2.5 15.9375H17.5V14.0625H2.5V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var reorderIcon = createIcon("reorder", iconDefinition644);

// src/noticons/src/repeat/default.icon.tsx
import { jsxDEV as jsxDEV647, Fragment as Fragment645 } from "react/jsx-dev-runtime";
var iconDefinition645 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV647(Fragment645, {
    children: /* @__PURE__ */ jsxDEV647("path", {
      d: "M15.625 10H17.5V10.625C17.5 13.3406 15.5281 15.3125 12.8125 15.3125H5.85625L7.65625 17.1125L6.33125 18.4375L2.26875 14.375L6.33125 10.3125L7.65625 11.6375L5.85625 13.4375H12.8125C14.4937 13.4375 15.625 12.3062 15.625 10.625V10ZM4.375 9.375C4.375 7.69375 5.50625 6.5625 7.1875 6.5625H14.1437L12.3437 8.3625L13.6688 9.6875L17.7313 5.625L13.6688 1.5625L12.3437 2.8875L14.1437 4.6875H7.1875C4.47187 4.6875 2.5 6.65938 2.5 9.375V10H4.375V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var repeatIcon = createIcon("repeat", iconDefinition645);

// src/noticons/src/reply/default.icon.tsx
import { jsxDEV as jsxDEV648, Fragment as Fragment646 } from "react/jsx-dev-runtime";
var iconDefinition646 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV648(Fragment646, {
    children: /* @__PURE__ */ jsxDEV648("path", {
      d: "M17.5 11.25V15.625H15.625C15.625 13.6969 14.4281 12.5 12.5 12.5H9.375V15.625H8.125L1.875 9.375L8.125 3.125H9.375V6.25H12.5C15.5844 6.25 17.5 8.16563 17.5 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var replyIcon = createIcon("reply", iconDefinition646);

// src/noticons/src/replyAll/default.icon.tsx
import { jsxDEV as jsxDEV649, Fragment as Fragment647 } from "react/jsx-dev-runtime";
var iconDefinition647 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV649(Fragment647, {
    children: /* @__PURE__ */ jsxDEV649("path", {
      d: "M19.375 11.25V15.625H17.5C17.5 13.6969 16.3031 12.5 14.375 12.5H13.125V15.625H11.875L7.5 11.25V15.625H6.25L0 9.375L6.25 3.125H7.5V7.5L11.875 3.125H13.125V6.25H14.375C17.4594 6.25 19.375 8.16563 19.375 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var replyAllIcon = createIcon("replyAll", iconDefinition647);

// src/noticons/src/report/default.icon.tsx
import { jsxDEV as jsxDEV650, Fragment as Fragment648 } from "react/jsx-dev-runtime";
var iconDefinition648 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV650(Fragment648, {
    children: /* @__PURE__ */ jsxDEV650("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM11.25 9.0625L10.625 11.5625H9.375L8.75 9.0625V5.3125H11.25V9.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var reportIcon = createIcon("report", iconDefinition648);

// src/noticons/src/ringedPlanet/default.icon.tsx
import { jsxDEV as jsxDEV651, Fragment as Fragment649 } from "react/jsx-dev-runtime";
var iconDefinition649 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV651(Fragment649, {
    children: [
      /* @__PURE__ */ jsxDEV651("g", {
        "clip-path": "url(#clip0_1501_15982)",
        children: /* @__PURE__ */ jsxDEV651("path", {
          d: "M7.66563 15.7969C8.38751 16.0875 9.17188 16.25 10 16.25C13.1594 16.25 15.7656 13.9 16.1844 10.8563C14.9469 11.7781 13.55 12.7 12.0563 13.5656C10.55 14.4375 9.06563 15.1875 7.66876 15.7969H7.66563ZM19.8969 4.26562C19.3688 3.34687 16.9188 3.7 13.7156 4.98125C12.6781 4.20937 11.3938 3.75 10 3.75C6.54688 3.75 3.75001 6.54688 3.75001 10C3.75001 10.2469 3.76876 10.4906 3.79688 10.7312C1.09688 12.8687 -0.424993 14.8187 0.103132 15.7344C0.890632 17.1062 5.96251 15.65 11.4281 12.4844C16.8938 9.31875 20.6844 5.6375 19.8969 4.26875V4.26562ZM3.19688 13.9406C2.96251 13.5344 3.31251 12.8375 4.08438 12C4.35626 12.7969 4.78126 13.5188 5.32813 14.1344C4.21563 14.3875 3.43126 14.3469 3.19688 13.9406ZM15.9156 8C15.6469 7.20313 15.225 6.47813 14.6813 5.8625C15.7906 5.60938 16.5719 5.65312 16.8063 6.05937C17.0406 6.46562 16.6906 7.1625 15.9156 8.00313V8Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV651("defs", {
        children: /* @__PURE__ */ jsxDEV651("clipPath", {
          id: "clip0_1501_15982",
          children: /* @__PURE__ */ jsxDEV651("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var ringedPlanetIcon = createIcon("ringedPlanet", iconDefinition649);

// src/noticons/src/robot/default.icon.tsx
import { jsxDEV as jsxDEV652, Fragment as Fragment650 } from "react/jsx-dev-runtime";
var iconDefinition650 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV652(Fragment650, {
    children: /* @__PURE__ */ jsxDEV652("path", {
      d: "M16.25 8.125V6.25C16.25 4.70625 15.2937 3.75 13.75 3.75H10.9375V0.625H9.0625V3.75H6.25C4.70625 3.75 3.75 4.70625 3.75 6.25V8.125H1.875V13.125H3.75V16.875H16.25V13.125H18.125V8.125H16.25ZM6.875 6.875C7.56563 6.875 8.125 7.43437 8.125 8.125C8.125 8.81563 7.56563 9.375 6.875 9.375C6.18437 9.375 5.625 8.81563 5.625 8.125C5.625 7.43437 6.18437 6.875 6.875 6.875ZM13.125 13.75H6.875C6.18437 13.75 5.625 13.1906 5.625 12.5C5.625 11.8094 6.18437 11.25 6.875 11.25H13.125C13.8156 11.25 14.375 11.8094 14.375 12.5C14.375 13.1906 13.8156 13.75 13.125 13.75ZM13.125 9.375C12.4344 9.375 11.875 8.81563 11.875 8.125C11.875 7.43437 12.4344 6.875 13.125 6.875C13.8156 6.875 14.375 7.43437 14.375 8.125C14.375 8.81563 13.8156 9.375 13.125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var robotIcon = createIcon("robot", iconDefinition650);

// src/noticons/src/rocket/default.icon.tsx
import { jsxDEV as jsxDEV653, Fragment as Fragment651 } from "react/jsx-dev-runtime";
var iconDefinition651 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV653(Fragment651, {
    children: /* @__PURE__ */ jsxDEV653("path", {
      d: "M15 11.25V15H13.75L11.875 13.125V15H8.125V13.125L6.25 15H5V11.25L8.125 8.125V4.375C8.125 2.25625 8.84375 1.25 10 1.25C11.1562 1.25 11.875 2.25625 11.875 4.375V8.125L15 11.25ZM10 15.9375C9.30937 15.9375 8.75 16.4969 8.75 17.1875C8.75 17.8781 9.08125 18.2437 10 19.375C10.9187 18.2437 11.25 17.8781 11.25 17.1875C11.25 16.4969 10.6906 15.9375 10 15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rocketIcon = createIcon("rocket", iconDefinition651);

// src/noticons/src/rollerSkate/default.icon.tsx
import { jsxDEV as jsxDEV654, Fragment as Fragment652 } from "react/jsx-dev-runtime";
var iconDefinition652 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV654(Fragment652, {
    children: /* @__PURE__ */ jsxDEV654("path", {
      d: "M15.4688 13.8813C15.5688 14.1313 15.625 14.4032 15.625 14.6875C15.625 15.8969 14.6469 16.875 13.4375 16.875C12.2281 16.875 11.25 15.8969 11.25 14.6875C11.25 14.5813 11.2594 14.4782 11.275 14.375H9.68751L7.81251 12.5H6.87501V14.6875C6.87501 15.8969 5.89689 16.875 4.68751 16.875C3.47814 16.875 2.50001 15.8969 2.50001 14.6875C2.50001 13.9657 2.85001 13.3282 3.38751 12.9313L2.72189 10.2719C2.55626 9.6063 2.49689 9.13755 2.49689 8.45317C2.49689 7.7688 2.55314 7.30005 2.72189 6.63442L3.12189 5.0313V2.50317H9.37189V5.62817L14.3719 10.0032L17.4969 10.7844V12.5032C17.4969 12.5032 16.9375 13.3313 15.4656 13.8844L15.4688 13.8813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rollerSkateIcon = createIcon("rollerSkate", iconDefinition652);

// src/noticons/src/row/default.icon.tsx
import { jsxDEV as jsxDEV655, Fragment as Fragment653 } from "react/jsx-dev-runtime";
var iconDefinition653 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV655(Fragment653, {
    children: /* @__PURE__ */ jsxDEV655("path", {
      d: "M3.125 13.125H16.875V16.875H3.125V13.125ZM3.125 3.125V6.875H16.875V3.125H3.125ZM3.125 11.875H16.875V8.125H3.125V11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rowIcon = createIcon("row", iconDefinition653);

// src/noticons/src/rubberStamp/default.icon.tsx
import { jsxDEV as jsxDEV656, Fragment as Fragment654 } from "react/jsx-dev-runtime";
var iconDefinition654 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV656(Fragment654, {
    children: /* @__PURE__ */ jsxDEV656("path", {
      d: "M3.75 15.625H16.25V17.5H3.75V15.625ZM15 9.375H11.25V8.125C11.25 6.47188 12.5 5.40312 12.5 3.75C12.5 2.20625 11.5437 1.25 10 1.25C8.45625 1.25 7.5 2.20625 7.5 3.75C7.5 5.40312 8.75 6.47188 8.75 8.125V9.375H5C3.45625 9.375 2.5 10.3313 2.5 11.875V14.375H17.5V11.875C17.5 10.3313 16.5437 9.375 15 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rubberStampIcon = createIcon("rubberStamp", iconDefinition654);

// src/noticons/src/ruler/default.icon.tsx
import { jsxDEV as jsxDEV657, Fragment as Fragment655 } from "react/jsx-dev-runtime";
var iconDefinition655 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV657(Fragment655, {
    children: /* @__PURE__ */ jsxDEV657("path", {
      d: "M13.125 1.25V18.75H6.875V16.875H10.625V15.625H6.875V13.75H9.375V12.5H6.875V10.625H10.625V9.375H6.875V7.5H9.375V6.25H6.875V4.375H10.625V3.125H6.875V1.25H13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var rulerIcon = createIcon("ruler", iconDefinition655);

// src/noticons/src/run/default.icon.tsx
import { jsxDEV as jsxDEV658, Fragment as Fragment656 } from "react/jsx-dev-runtime";
var iconDefinition656 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV658(Fragment656, {
    children: /* @__PURE__ */ jsxDEV658("path", {
      d: "M10.9375 3.75C10.9375 2.78438 11.5344 2.1875 12.5 2.1875C13.4656 2.1875 14.0625 2.78438 14.0625 3.75C14.0625 4.71563 13.4656 5.3125 12.5 5.3125C11.5344 5.3125 10.9375 4.71563 10.9375 3.75ZM12.9719 8.98125C13.5875 9.7125 14.3562 10.625 16.25 10.625V9.0625C15.0813 9.0625 14.7188 8.63125 14.1656 7.975C13.5188 7.20625 12.7125 6.25 10.625 6.25C7.60938 6.25 5.88125 7.85312 4.6875 10.2375L6.08437 10.9375C6.95 9.20625 7.86875 8.33125 9.12812 7.99062L7.58125 11.0844C6.99063 12.2688 6.10938 12.8125 4.7875 12.8125H3.4375V14.6875H4.7875C6.88125 14.6875 8.28438 13.8313 9.22813 11.9812C10.0531 12.6062 12.5219 14.6781 13.2188 17.5L14.9969 16.9062C14.3063 14.1062 12.3281 12.0781 11.05 11.0156L12.3812 8.35625C12.5875 8.53437 12.7688 8.74687 12.9688 8.98438L12.9719 8.98125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var runIcon = createIcon("run", iconDefinition656);

// src/noticons/src/safetyPin/default.icon.tsx
import { jsxDEV as jsxDEV659, Fragment as Fragment657 } from "react/jsx-dev-runtime";
var iconDefinition657 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV659(Fragment657, {
    children: /* @__PURE__ */ jsxDEV659("path", {
      d: "M13.75 2.5C12.7906 2.5 11.8312 2.86563 11.0969 3.59688L3.59688 11.0969C2.86563 11.8281 2.5 12.7875 2.5 13.75C2.5 15.8219 4.17812 17.5 6.25 17.5C7.20937 17.5 8.16875 17.1344 8.90312 16.4031L16.4031 8.90312C17.1344 8.17188 17.5 7.2125 17.5 6.25C17.5 4.17812 15.8219 2.5 13.75 2.5ZM6.25 15.625C5.21563 15.625 4.375 14.7844 4.375 13.75C4.375 12.7156 5.21563 11.875 6.25 11.875C7.28438 11.875 8.125 12.7156 8.125 13.75C8.125 14.7844 7.28438 15.625 6.25 15.625ZM13.6969 7.5H13.1281C12.3 7.5 11.7125 8.13125 11.7125 8.69688C11.7125 8.825 11.7375 8.95937 11.7844 9.10312L12.225 10.4281L9.86875 12.7844C9.52187 11.4937 8.50625 10.4781 7.21562 10.1312L9.57187 7.775C9.71562 7.82187 9.85 7.84688 9.97813 7.84688C10.2562 7.84688 10.5 7.73438 10.7312 7.50313L12.8656 5.36875C13.1094 5.125 13.4281 5.00313 13.75 5.00313C14.4406 5.00313 15 5.5625 15 6.25313C15 7.14687 14.1813 7.50313 13.6969 7.50313V7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var safetyPinIcon = createIcon("safetyPin", iconDefinition657);

// src/noticons/src/sagittarius/default.icon.tsx
import { jsxDEV as jsxDEV660, Fragment as Fragment658 } from "react/jsx-dev-runtime";
var iconDefinition658 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV660(Fragment658, {
    children: /* @__PURE__ */ jsxDEV660("path", {
      d: "M16.875 3.125V11.875H15V6.325L10.075 11.25L14.375 15.55L13.05 16.875L8.75 12.575L3.825 17.5L2.5 16.175L7.425 11.25L3.125 6.95L4.45 5.625L8.75 9.925L13.675 5H8.125V3.125H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sagittariusIcon = createIcon("sagittarius", iconDefinition658);

// src/noticons/src/sailboat/default.icon.tsx
import { jsxDEV as jsxDEV661, Fragment as Fragment659 } from "react/jsx-dev-runtime";
var iconDefinition659 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV661(Fragment659, {
    children: /* @__PURE__ */ jsxDEV661("path", {
      d: "M10.625 10.625C10.625 10.625 11.25 9.33125 11.25 6.875C11.25 4.41875 10.625 3.125 10.625 3.125H10.6438C14.3094 3.125 16.25 6.875 16.25 10.625H10.625ZM10 1.875H8.75L3.75 9.375V10.625H10V1.875ZM13.75 16.25C12.5437 16.25 11.8656 15 10 15C8.13438 15 7.43125 16.25 6.25 16.25C5.06875 16.25 4.36562 15 2.5 15V16.875C3.70625 16.875 4.38438 18.125 6.25 18.125C8.11562 18.125 8.81875 16.875 10 16.875C11.1812 16.875 11.8844 18.125 13.75 18.125C15.6156 18.125 16.3188 16.875 17.5 16.875V15C15.6594 15 14.9312 16.25 13.75 16.25ZM6.25 15C6.44375 15 6.725 14.8406 7.07812 14.6406C7.74062 14.2656 8.64687 13.75 10 13.75C11.3531 13.75 12.2656 14.2656 12.9219 14.6406C13.2156 14.8094 13.4187 14.9219 13.5875 14.9719C15.2437 14.7937 16.2531 13.6438 16.2531 11.875H3.75V13.9094C4.45312 14.0906 4.99063 14.3938 5.42188 14.6438C5.82188 14.8719 6.05625 15.0031 6.25 15.0031V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sailboatIcon = createIcon("sailboat", iconDefinition659);

// src/noticons/src/sandwich/default.icon.tsx
import { jsxDEV as jsxDEV662, Fragment as Fragment660 } from "react/jsx-dev-runtime";
var iconDefinition660 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV662(Fragment660, {
    children: /* @__PURE__ */ jsxDEV662("path", {
      d: "M16.5625 7.1875H3.4375V5.3125C3.4375 4.54062 3.91562 4.0625 4.6875 4.0625H15.3125C16.0844 4.0625 16.5625 4.54062 16.5625 5.3125V7.1875ZM16.5625 8.4375H15.0969C14.3563 8.4375 13.8531 8.64687 13.3281 9.16875L12.1844 10.3125L11.0406 9.16875C10.5156 8.64375 10.0125 8.4375 9.27187 8.4375H3.4375C2.66562 8.4375 2.1875 8.91563 2.1875 9.6875V10.3125C2.1875 11.0844 2.66562 11.5625 3.4375 11.5625H16.5625C17.3344 11.5625 17.8125 11.0844 17.8125 10.3125V9.6875C17.8125 8.91563 17.3344 8.4375 16.5625 8.4375ZM3.4375 14.6875C3.4375 15.4594 3.91562 15.9375 4.6875 15.9375H15.3125C16.0844 15.9375 16.5625 15.4594 16.5625 14.6875V12.8125H3.4375V14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sandwichIcon = createIcon("sandwich", iconDefinition660);

// src/noticons/src/save/default.icon.tsx
import { jsxDEV as jsxDEV663, Fragment as Fragment661 } from "react/jsx-dev-runtime";
var iconDefinition661 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV663(Fragment661, {
    children: /* @__PURE__ */ jsxDEV663("path", {
      d: "M16.875 12.8125V17.5H3.125V12.8125H5V15.625H15V12.8125H16.875ZM15 9.45L13.675 8.125L10.9375 10.8625V1.875H9.0625V10.8625L6.325 8.125L5 9.45L10 14.45L15 9.45Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var saveIcon = createIcon("save", iconDefinition661);

// src/noticons/src/scarf/default.icon.tsx
import { jsxDEV as jsxDEV664, Fragment as Fragment662 } from "react/jsx-dev-runtime";
var iconDefinition662 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV664(Fragment662, {
    children: /* @__PURE__ */ jsxDEV664("path", {
      d: "M15.3656 14.9563L16.25 15.8406L14.925 17.1656L14.0406 16.2812L13.1562 17.1656L14.0406 18.05L12.7156 19.375L11.8313 18.4906C10.5813 17.2406 10 15.8375 10 14.0719V8.75H15V14.0719C15 14.5219 15.0469 14.6375 15.3656 14.9563ZM3.125 3.125V7.5H16.875V3.125H3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scarfIcon = createIcon("scarf", iconDefinition662);

// src/noticons/src/school/default.icon.tsx
import { jsxDEV as jsxDEV665, Fragment as Fragment663 } from "react/jsx-dev-runtime";
var iconDefinition663 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV665(Fragment663, {
    children: /* @__PURE__ */ jsxDEV665("path", {
      d: "M13.75 7.5L10.625 4.375V3.125L13.125 1.875V0.625H9.375V4.375L6.25 7.5H2.5V16.875H8.75V13.75C8.75 12.9781 9.22813 12.5 10 12.5C10.7719 12.5 11.25 12.9781 11.25 13.75V16.875H17.5V7.5H13.75ZM6.875 15H4.375V13.125H6.875V15ZM6.875 11.25H4.375V9.375H6.875V11.25ZM10 10.625C9.30937 10.625 8.75 10.0656 8.75 9.375C8.75 8.68437 9.30937 8.125 10 8.125C10.6906 8.125 11.25 8.68437 11.25 9.375C11.25 10.0656 10.6906 10.625 10 10.625ZM15.625 15H13.125V13.125H15.625V15ZM15.625 11.25H13.125V9.375H15.625V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var schoolIcon = createIcon("school", iconDefinition663);

// src/noticons/src/science/default.icon.tsx
import { jsxDEV as jsxDEV666, Fragment as Fragment664 } from "react/jsx-dev-runtime";
var iconDefinition664 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV666(Fragment664, {
    children: /* @__PURE__ */ jsxDEV666("path", {
      d: "M15.2719 10C16.9656 8.45312 17.9344 6.87187 17.3063 5.78125C16.6781 4.69062 14.8219 4.74062 12.6344 5.43437C12.1438 3.19375 11.2563 1.5625 9.99687 1.5625C8.7375 1.5625 7.85312 3.19375 7.35938 5.43437C5.175 4.74062 3.31875 4.69062 2.6875 5.78125C2.05938 6.87187 3.02813 8.45312 4.72187 10C3.02813 11.5469 2.05938 13.1281 2.6875 14.2188C3.31563 15.3094 5.17187 15.2594 7.35938 14.5656C7.85 16.8063 8.7375 18.4375 9.99687 18.4375C11.2563 18.4375 12.1406 16.8063 12.6344 14.5656C14.8188 15.2594 16.675 15.3094 17.3063 14.2188C17.9344 13.1281 16.9656 11.5469 15.2719 10ZM15.6844 6.71875C15.9656 7.20625 15.275 8.07812 14.1219 9.0375C13.775 8.76875 13.4062 8.50625 13.0312 8.25C13 7.79688 12.9531 7.34688 12.8969 6.9125C14.3063 6.39375 15.4062 6.23125 15.6875 6.71875H15.6844ZM10.7656 11.325C10.5125 11.4719 10.2562 11.6125 10 11.75C9.74375 11.6125 9.4875 11.4719 9.23438 11.325C8.98125 11.1781 8.73125 11.0281 8.48125 10.875C8.47187 10.5844 8.46875 10.2906 8.46875 10C8.46875 9.70938 8.47187 9.41563 8.48125 9.125C8.72812 8.97188 8.98125 8.82188 9.23438 8.675C9.4875 8.52813 9.74375 8.3875 10 8.25C10.2562 8.3875 10.5125 8.52813 10.7656 8.675C11.0188 8.82188 11.2688 8.97188 11.5188 9.125C11.5281 9.41563 11.5312 9.70938 11.5312 10C11.5312 10.2906 11.5281 10.5844 11.5188 10.875C11.2719 11.0281 11.0188 11.1781 10.7656 11.325ZM10 3.4375C10.5625 3.4375 10.9719 4.46875 11.2281 5.95C10.8219 6.11875 10.4125 6.30312 10 6.50312C9.59062 6.30312 9.17812 6.11875 8.77187 5.95C9.025 4.46875 9.4375 3.4375 10 3.4375ZM4.31563 6.71875C4.59688 6.23125 5.69687 6.39375 7.10625 6.9125C7.04688 7.34688 7.00312 7.79688 6.97187 8.25C6.59375 8.50625 6.22812 8.76875 5.88125 9.0375C4.725 8.07812 4.0375 7.20625 4.31875 6.71875H4.31563ZM4.31563 13.2812C4.03438 12.7937 4.725 11.9219 5.87812 10.9625C6.225 11.2313 6.59375 11.4937 6.96875 11.75C7 12.2031 7.04688 12.6531 7.10312 13.0875C5.69375 13.6063 4.59375 13.7688 4.3125 13.2812H4.31563ZM10 16.5625C9.4375 16.5625 9.02812 15.5312 8.77187 14.05C9.17812 13.8812 9.5875 13.6969 10 13.4969C10.4094 13.6969 10.8219 13.8812 11.2281 14.05C10.975 15.5312 10.5625 16.5625 10 16.5625ZM15.6844 13.2812C15.4031 13.7688 14.3031 13.6063 12.8937 13.0875C12.9531 12.6531 12.9969 12.2031 13.0281 11.75C13.4062 11.4937 13.7719 11.2313 14.1187 10.9625C15.275 11.9219 15.9625 12.7937 15.6812 13.2812H15.6844Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scienceIcon = createIcon("science", iconDefinition664);

// src/noticons/src/scooter/default.icon.tsx
import { jsxDEV as jsxDEV667, Fragment as Fragment665 } from "react/jsx-dev-runtime";
var iconDefinition665 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV667(Fragment665, {
    children: /* @__PURE__ */ jsxDEV667("path", {
      d: "M19.375 13.125C19.375 14.85 17.975 16.25 16.25 16.25C14.6281 16.25 13.2969 15.0156 13.1406 13.4375H6.85938C6.70312 15.0156 5.37187 16.25 3.75 16.25C2.025 16.25 0.625 14.85 0.625 13.125C0.625 11.8562 1.38437 10.7656 2.47187 10.275L4.1 5.9375H6.25313C7.79688 5.9375 8.75313 6.89375 8.75313 8.4375V9.0625C7.98125 9.0625 7.50313 9.54063 7.50313 10.3125C7.50313 11.0844 7.98125 11.5625 8.75313 11.5625H11.8781V4.6875H10.0031V3.4375H13.1281L15.0031 2.5H15.6281V4.6875H14.1875L16.1812 10.0031C16.2062 10.0031 16.2312 10 16.2531 10C17.9781 10 19.3781 11.4 19.3781 13.125H19.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scooterIcon = createIcon("scooter", iconDefinition665);

// src/noticons/src/scorpio/default.icon.tsx
import { jsxDEV as jsxDEV668, Fragment as Fragment666 } from "react/jsx-dev-runtime";
var iconDefinition666 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV668(Fragment666, {
    children: /* @__PURE__ */ jsxDEV668("path", {
      d: "M19.45 15.3125L15.3875 19.375L14.0625 18.05L15.8625 16.25H13.75C12.2063 16.25 11.25 15.2937 11.25 13.75V5.625C11.25 4.85625 10.7688 4.375 10 4.375C9.23125 4.375 8.75 4.85625 8.75 5.625V13.75H6.875V5.625C6.875 4.85625 6.39375 4.375 5.625 4.375C4.85625 4.375 4.375 4.85625 4.375 5.625V13.75H2.5V5.625C2.5 4.85625 2.01875 4.375 1.25 4.375V2.5C2.30625 2.5 3.14062 2.8625 3.68438 3.50625C4.14062 2.8625 4.88125 2.5 5.9375 2.5C6.99375 2.5 7.66563 2.83125 8.125 3.41875C8.58437 2.83125 9.30625 2.5 10.3125 2.5C12.2375 2.5 13.125 3.7 13.125 5.625V13.75C13.125 14.1344 13.3656 14.375 13.75 14.375H15.8625L14.0625 12.575L15.3875 11.25L19.45 15.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scorpioIcon = createIcon("scorpio", iconDefinition666);

// src/noticons/src/screwdriver/default.icon.tsx
import { jsxDEV as jsxDEV669, Fragment as Fragment667 } from "react/jsx-dev-runtime";
var iconDefinition667 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV669(Fragment667, {
    children: /* @__PURE__ */ jsxDEV669("path", {
      d: "M12.1125 9.21562L13.4375 10.5406L12.1031 11.875C11.7281 12.25 11.325 12.3438 10.825 12.1781L10.2312 11.9812L9.79062 12.4219L9.98749 13.0156C10.1562 13.5188 10.0594 13.9219 9.68437 14.2938L7.39687 16.5813C6.16874 17.8094 4.64687 17.8094 3.41874 16.5813C2.19062 15.3531 2.19062 13.8313 3.41874 12.6031L5.70624 10.3156C6.08124 9.94062 6.48437 9.84688 6.98437 10.0125L7.57812 10.2094L8.01874 9.76875L7.82187 9.175C7.65312 8.67188 7.74999 8.26875 8.12499 7.89688L9.45937 6.5625L10.7844 7.8875L16.8 1.875L18.125 3.2L12.1125 9.2125V9.21562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var screwdriverIcon = createIcon("screwdriver", iconDefinition667);

// src/noticons/src/script/default.icon.tsx
import { jsxDEV as jsxDEV670, Fragment as Fragment668 } from "react/jsx-dev-runtime";
var iconDefinition668 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV670(Fragment668, {
    children: /* @__PURE__ */ jsxDEV670("path", {
      d: "M4.375 11.3344L3.375 13.75H2.875L1.875 11.3344V2.5H4.375V11.3344ZM10 3.125C7.6875 3.125 6.25 4.5625 6.25 6.875V13.75C6.25 14.9062 5.53125 15.625 4.375 15.625H3.75V17.5H11.875C14.1875 17.5 15.625 16.0625 15.625 13.75V6.875C15.625 5.71875 16.3438 5 17.5 5H18.125V3.125H10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scriptIcon = createIcon("script", iconDefinition668);

// src/noticons/src/scrubBrush/default.icon.tsx
import { jsxDEV as jsxDEV671, Fragment as Fragment669 } from "react/jsx-dev-runtime";
var iconDefinition669 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV671(Fragment669, {
    children: /* @__PURE__ */ jsxDEV671("path", {
      d: "M18.125 9.375C18.125 6.675 16.45 5 13.75 5H1.875V6.875H3.75V9.375H1.875V11.25H3.125L2.5 15H3.75L4.16563 12.5H5.41563L5 15H17.5L16.875 11.25H18.125V9.375ZM5.625 6.875H13.75C15.2937 6.875 16.25 7.83125 16.25 9.375H5.625V6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var scrubBrushIcon = createIcon("scrubBrush", iconDefinition669);

// src/noticons/src/search/default.icon.tsx
import { jsxDEV as jsxDEV672, Fragment as Fragment670 } from "react/jsx-dev-runtime";
var iconDefinition670 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV672(Fragment670, {
    children: /* @__PURE__ */ jsxDEV672("path", {
      d: "M13.9625 12.1938C14.6156 11.2063 15 10.0219 15 8.75C15 5.29688 12.2031 2.5 8.75 2.5C5.29688 2.5 2.5 5.29688 2.5 8.75C2.5 12.2031 5.29688 15 8.75 15C10.025 15 11.2063 14.6156 12.1938 13.9625L15.7312 17.5L17.5 15.7312L13.9625 12.1938ZM8.75 13.125C6.33437 13.125 4.375 11.1656 4.375 8.75C4.375 6.33437 6.33437 4.375 8.75 4.375C11.1656 4.375 13.125 6.33437 13.125 8.75C13.125 11.1656 11.1656 13.125 8.75 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var searchIcon = createIcon("search", iconDefinition670);

// src/noticons/src/seed/default.icon.tsx
import { jsxDEV as jsxDEV673, Fragment as Fragment671 } from "react/jsx-dev-runtime";
var iconDefinition671 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV673(Fragment671, {
    children: /* @__PURE__ */ jsxDEV673("path", {
      d: "M14.9719 2.5C14.5781 2.5 14.1938 2.59063 13.8406 2.76563L6.7375 6.31875C6 6.6875 5.32813 7.17188 4.74375 7.75625C3.30625 9.19375 2.49688 11.1437 2.49688 13.1781V15.4125L4.5875 17.5031H6.82188C8.85625 17.5031 10.8063 16.6969 12.2438 15.2563C12.825 14.675 13.3125 14 13.6813 13.2625L17.2344 6.15937C17.4094 5.80937 17.5 5.42188 17.5 5.02813C17.5 3.46875 16.5312 2.5 14.9719 2.5ZM8.13438 9.11562C7.69688 9.33437 7.3 9.62187 6.95625 9.96562C6.09688 10.8219 5.625 11.9625 5.625 13.1781H4.375C4.375 11.6312 4.97813 10.1781 6.07188 9.08437C6.5125 8.64375 7.01875 8.27813 7.575 8L11.9406 5.81875L12.5 6.9375L8.13438 9.11875V9.11562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var seedIcon = createIcon("seed", iconDefinition671);

// src/noticons/src/send/default.icon.tsx
import { jsxDEV as jsxDEV674, Fragment as Fragment672 } from "react/jsx-dev-runtime";
var iconDefinition672 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV674(Fragment672, {
    children: /* @__PURE__ */ jsxDEV674("path", {
      d: "M16.6156 2.5L3.49063 5.78125L2.5 6.77187L6.38438 10.6562L5 14.1156L5.88438 15L9.34375 13.6156L13.2281 17.5L14.2188 16.5094L17.5 3.38437L16.6156 2.5ZM10.5469 12.1656L9.79688 11.4156L7.77812 12.2219L8.58437 10.2031L7.83437 9.45312L15.2188 4.78125L10.5469 12.1656Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sendIcon = createIcon("send", iconDefinition672);

// src/noticons/src/sendTo/default.icon.tsx
import { jsxDEV as jsxDEV675, Fragment as Fragment673 } from "react/jsx-dev-runtime";
var iconDefinition673 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV675(Fragment673, {
    children: /* @__PURE__ */ jsxDEV675("path", {
      d: "M18.125 9.375L11.875 15.625H10.625V12.5H7.5C5.57188 12.5 4.375 13.6969 4.375 15.625H2.5V11.25C2.5 8.16563 4.41563 6.25 7.5 6.25H10.625V3.125H11.875L18.125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sendToIcon = createIcon("sendTo", iconDefinition673);

// src/noticons/src/server/default.icon.tsx
import { jsxDEV as jsxDEV676, Fragment as Fragment674 } from "react/jsx-dev-runtime";
var iconDefinition674 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV676(Fragment674, {
    children: /* @__PURE__ */ jsxDEV676("path", {
      d: "M3.125 16.875H16.875V13.125H3.125V16.875ZM4.375 14.375H8.125V15.625H4.375V14.375ZM3.125 3.125V6.875H16.875V3.125H3.125ZM8.125 5.625H4.375V4.375H8.125V5.625ZM3.125 11.875H16.875V8.125H3.125V11.875ZM4.375 9.375H8.125V10.625H4.375V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var serverIcon = createIcon("server", iconDefinition674);

// src/noticons/src/serviceCounter/default.icon.tsx
import { jsxDEV as jsxDEV677, Fragment as Fragment675 } from "react/jsx-dev-runtime";
var iconDefinition675 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV677(Fragment675, {
    children: /* @__PURE__ */ jsxDEV677("path", {
      d: "M4.0625 3.75C4.0625 2.78438 4.65938 2.1875 5.625 2.1875C6.59062 2.1875 7.1875 2.78438 7.1875 3.75C7.1875 4.71563 6.59062 5.3125 5.625 5.3125C4.65938 5.3125 4.0625 4.71563 4.0625 3.75ZM15 5.3125C15.9656 5.3125 16.5625 4.71563 16.5625 3.75C16.5625 2.78438 15.9656 2.1875 15 2.1875C14.0344 2.1875 13.4375 2.78438 13.4375 3.75C13.4375 4.71563 14.0344 5.3125 15 5.3125ZM18.4375 13.75H16.25V17.5H13.75V13.75H11.5625L13.5156 9.84375L12.9656 8.74062L11.7125 11.25H0.625V10H1.2125L2.05 8.32187C2.75938 6.90312 3.64375 6.25 5.62187 6.25C7.6 6.25 8.48438 6.90312 9.19375 8.32187L10.0312 10H10.5813L11.4188 8.32187C12.1281 6.90312 13.0125 6.25 14.9906 6.25C16.9688 6.25 17.8531 6.90312 18.5625 8.32187L19.6781 10.55L18.2812 11.25L17.0281 8.74062L16.4781 9.84375L18.4312 13.75H18.4375ZM4.0625 10V8.4375C3.825 8.4375 3.6875 8.54688 3.56875 8.78438L2.95938 10H4.0625ZM8.29063 10L7.68125 8.78438C7.5625 8.54688 7.425 8.4375 7.1875 8.4375V10H8.29063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var serviceCounterIcon = createIcon("serviceCounter", iconDefinition675);

// src/noticons/src/setSquare/default.icon.tsx
import { jsxDEV as jsxDEV678, Fragment as Fragment676 } from "react/jsx-dev-runtime";
var iconDefinition676 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV678(Fragment676, {
    children: /* @__PURE__ */ jsxDEV678("path", {
      d: "M15 2.5L12.9406 4.55938L14.2656 5.88438L13.3813 6.76875L12.0563 5.44375L9.19064 8.30937L10.5156 9.63438L9.63126 10.5188L8.30626 9.19375L5.44064 12.0594L6.76564 13.3844L5.88126 14.2688L4.55626 12.9437L2.49689 15.0031V17.5031H17.4969V2.5H14.9969H15ZM13.75 13.75H9.05314L13.75 9.05312V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var setSquareIcon = createIcon("setSquare", iconDefinition676);

// src/noticons/src/share/default.icon.tsx
import { jsxDEV as jsxDEV679, Fragment as Fragment677 } from "react/jsx-dev-runtime";
var iconDefinition677 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV679(Fragment677, {
    children: /* @__PURE__ */ jsxDEV679("path", {
      d: "M16.875 8.75V17.5H3.125V8.75H7.1875V10.625H5V15.625H15V10.625H12.8125V8.75H16.875ZM9.0625 4.84062V13.8281H10.9375V4.84062L13.675 7.57812L15 6.25313L10 1.25L5 6.25L6.325 7.575L9.0625 4.8375V4.84062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shareIcon = createIcon("share", iconDefinition677);

// src/noticons/src/sharing/default.icon.tsx
import { jsxDEV as jsxDEV680, Fragment as Fragment678 } from "react/jsx-dev-runtime";
var iconDefinition678 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV680(Fragment678, {
    children: /* @__PURE__ */ jsxDEV680("path", {
      d: "M4.375 3.75C4.375 2.78438 4.97188 2.1875 5.9375 2.1875C6.90312 2.1875 7.5 2.78438 7.5 3.75C7.5 4.71563 6.90312 5.3125 5.9375 5.3125C4.97188 5.3125 4.375 4.71563 4.375 3.75ZM19.375 7.8125V6.25H0.625V7.8125H4.375V10.625L2.5 16.25H4.475L5.9375 11.8656L7.4 16.25H9.375L7.5 10.625V7.8125H12.5V10.625L10.625 16.25H12.6L14.0625 11.8656L15.525 16.25H17.5L15.625 10.625V7.8125H19.375ZM14.0625 5.3125C15.0281 5.3125 15.625 4.71563 15.625 3.75C15.625 2.78438 15.0281 2.1875 14.0625 2.1875C13.0969 2.1875 12.5 2.78438 12.5 3.75C12.5 4.71563 13.0969 5.3125 14.0625 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sharingIcon = createIcon("sharing", iconDefinition678);

// src/noticons/src/sheep/default.icon.tsx
import { jsxDEV as jsxDEV681, Fragment as Fragment679 } from "react/jsx-dev-runtime";
var iconDefinition679 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV681(Fragment679, {
    children: /* @__PURE__ */ jsxDEV681("path", {
      d: "M19.375 6.25L18.4969 7.56875C18.2375 7.95625 17.925 8.125 17.4562 8.125H15.9375L14.1813 10.7625C13.6625 11.5406 13.0344 11.875 12.1 11.875H11.875V15.625L12.5 16.875H10.3125L9.6875 15.625V11.875H6.59688C5.94063 12.7937 4.95312 13.4094 3.69375 13.6406L5.30937 16.875H3.12187L1.24687 13.125L1.87187 12.8125V9.375H0.625V8.75C0.625 7.20625 1.58125 6.25 3.125 6.25H12.5L13.4375 5L12.5 3.125V2.5H12.7156C13.4562 2.5 13.9594 2.70938 14.4844 3.23125L15.0031 3.75H15.8156C16.1313 3.75 16.35 3.825 16.5969 4.025L19.3781 6.25H19.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sheepIcon = createIcon("sheep", iconDefinition679);

// src/noticons/src/shell/default.icon.tsx
import { jsxDEV as jsxDEV682, Fragment as Fragment680 } from "react/jsx-dev-runtime";
var iconDefinition680 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV682(Fragment680, {
    children: /* @__PURE__ */ jsxDEV682("path", {
      d: "M18.125 10.625C18.125 6.1375 14.4875 2.5 10 2.5C5.5125 2.5 1.875 6.1375 1.875 10.625V11.4062L5.625 14.2188L4.16563 15.3125L6.25 16.875L7.70937 15.7812L10 17.5L12.2906 15.7812L13.75 16.875L15.8344 15.3125L14.375 14.2188L18.125 11.4062V10.625ZM10 14.375L5.5 11L6.25 10L9.375 12.3438V9.375H10.625V12.3438L13.75 10L14.5 11L10 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shellIcon = createIcon("shell", iconDefinition680);

// src/noticons/src/shield/default.icon.tsx
import { jsxDEV as jsxDEV683, Fragment as Fragment681 } from "react/jsx-dev-runtime";
var iconDefinition681 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV683(Fragment681, {
    children: /* @__PURE__ */ jsxDEV683("path", {
      d: "M16.25 4.375V11.9094C16.25 14.025 15.3781 15.4344 13.4875 16.3812L10 18.125L6.5125 16.3812C4.61875 15.4344 3.75 14.025 3.75 11.9094V4.375H5.675C6.77813 4.375 7.53125 4.14688 8.45 3.53438L10.0031 2.5L11.5562 3.53438C12.475 4.14688 13.2281 4.375 14.3313 4.375H16.2563H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shieldIcon = createIcon("shield", iconDefinition681);

// src/noticons/src/shirt/default.icon.tsx
import { jsxDEV as jsxDEV684, Fragment as Fragment682 } from "react/jsx-dev-runtime";
var iconDefinition682 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV684(Fragment682, {
    children: /* @__PURE__ */ jsxDEV684("path", {
      d: "M15.7406 3.78125C15.4562 2.925 14.8625 2.5 13.9625 2.5H13.125C13.125 2.5 12.4062 1.25 10 1.25C7.59375 1.25 6.875 2.5 6.875 2.5H6.0375C5.13438 2.5 4.54375 2.92813 4.25938 3.78125L0.9375 13.75L3.75 14.6875L5.625 9.0625V17.5H14.375V9.0625L16.25 14.6875L19.0625 13.75L15.7406 3.78125ZM8.4375 6.875L6.5625 4.375L7.5 3.4375L9.375 5.9375L8.4375 6.875ZM11.5625 6.875L10.625 5.9375L12.5 3.4375L13.4375 4.375L11.5625 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shirtIcon = createIcon("shirt", iconDefinition682);

// src/noticons/src/shoe/default.icon.tsx
import { jsxDEV as jsxDEV685, Fragment as Fragment683 } from "react/jsx-dev-runtime";
var iconDefinition683 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV685(Fragment683, {
    children: /* @__PURE__ */ jsxDEV685("path", {
      d: "M18.75 9.375V11.25C18.75 11.25 17.0844 13.75 12.0844 13.75H1.25V12.1719C1.25 11.4875 1.30625 11.0188 1.475 10.3531L2.5 6.25H3.75C3.75 6.25 4.1 8.125 6.25 8.125C8.4 8.125 8.75 6.25 8.75 6.25H10L16.25 9.375H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shoeIcon = createIcon("shoe", iconDefinition683);

// src/noticons/src/shogi/default.icon.tsx
import { jsxDEV as jsxDEV686, Fragment as Fragment684 } from "react/jsx-dev-runtime";
var iconDefinition684 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV686(Fragment684, {
    children: /* @__PURE__ */ jsxDEV686("path", {
      d: "M15.6594 5.32812L10 2.5L4.34063 5.32812L3.125 17.5H16.875L15.6594 5.32812ZM13.75 15H6.25V13.75H9.375V11.875H7.1875V10.625H9.375V8.75H6.875V7.5H13.125V8.75H10.625V10.625H12.8125V11.875H10.625V13.75H13.75V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shogiIcon = createIcon("shogi", iconDefinition684);

// src/noticons/src/shop/default.icon.tsx
import { jsxDEV as jsxDEV687, Fragment as Fragment685 } from "react/jsx-dev-runtime";
var iconDefinition685 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV687(Fragment685, {
    children: /* @__PURE__ */ jsxDEV687("path", {
      d: "M17.5 5V6.5625C17.5 8.11562 16.2406 9.375 14.6875 9.375C13.7094 9.375 12.8469 8.875 12.3438 8.11562C11.8406 8.875 10.9781 9.375 10 9.375C9.02187 9.375 8.15938 8.875 7.65625 8.11562C7.15312 8.875 6.29063 9.375 5.3125 9.375C3.75938 9.375 2.5 8.11562 2.5 6.5625V5L3.75 2.5H16.25L17.5 5ZM14.375 13.75H5.625V10.625H3.75V17.5H16.25V10.625H14.375V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shopIcon = createIcon("shop", iconDefinition685);

// src/noticons/src/shoppingBag/default.icon.tsx
import { jsxDEV as jsxDEV688, Fragment as Fragment686 } from "react/jsx-dev-runtime";
var iconDefinition686 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV688(Fragment686, {
    children: /* @__PURE__ */ jsxDEV688("path", {
      d: "M16.25 12.5V5.625H13.75V3.75C13.75 2.20625 12.7937 1.25 11.25 1.25H8.75C7.20625 1.25 6.25 2.20625 6.25 3.75V5.625H3.75V12.5L2.5 17.5H17.5L16.25 12.5ZM8.125 3.75C8.125 3.24063 8.24062 3.125 8.75 3.125H11.25C11.7594 3.125 11.875 3.24063 11.875 3.75V5.625H8.125V3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shoppingBagIcon = createIcon("shoppingBag", iconDefinition686);

// src/noticons/src/shoppingBasket/default.icon.tsx
import { jsxDEV as jsxDEV689, Fragment as Fragment687 } from "react/jsx-dev-runtime";
var iconDefinition687 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV689(Fragment687, {
    children: /* @__PURE__ */ jsxDEV689("path", {
      d: "M18.125 8.75V10.625H16.875L15.8344 16.875H4.16563L3.125 10.625H1.875V8.75H4.57188L7.69687 2.5L9.375 3.3375L6.66875 8.75H13.3313L10.625 3.3375L12.3031 2.5L15.4281 8.75H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shoppingBasketIcon = createIcon("shoppingBasket", iconDefinition687);

// src/noticons/src/shoppingCart/default.icon.tsx
import { jsxDEV as jsxDEV690, Fragment as Fragment688 } from "react/jsx-dev-runtime";
var iconDefinition688 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV690(Fragment688, {
    children: /* @__PURE__ */ jsxDEV690("path", {
      d: "M6.94062 13.125H17.5V15H15.625V16.25C15.625 16.9406 15.0656 17.5 14.375 17.5C13.6844 17.5 13.125 16.9406 13.125 16.25V15H9.375V16.25C9.375 16.9406 8.81563 17.5 8.125 17.5C7.43437 17.5 6.875 16.9406 6.875 16.25V15H5.35L3.58125 4.375H0.625V2.5H5.16875L5.48125 4.375H18.125L16.5625 10.625L6.70625 11.7188L6.94062 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shoppingCartIcon = createIcon("shoppingCart", iconDefinition688);

// src/noticons/src/shorts/default.icon.tsx
import { jsxDEV as jsxDEV691, Fragment as Fragment689 } from "react/jsx-dev-runtime";
var iconDefinition689 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV691(Fragment689, {
    children: /* @__PURE__ */ jsxDEV691("path", {
      d: "M10.55 10.625H9.45L7.8125 16.875L2.1875 15.9375L4.42812 2.5H15.575L17.8156 15.9375L12.1906 16.875L10.5531 10.625H10.55Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shortsIcon = createIcon("shorts", iconDefinition689);

// src/noticons/src/shovelAndPail/default.icon.tsx
import { jsxDEV as jsxDEV692, Fragment as Fragment690 } from "react/jsx-dev-runtime";
var iconDefinition690 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV692(Fragment690, {
    children: /* @__PURE__ */ jsxDEV692("path", {
      d: "M16.25 4.375V5C16.25 5.575 16.0469 5.59375 15.7687 5.61875L15 5.6875L14.2313 5.61875C13.9531 5.59375 13.75 5.575 13.75 5V4.375H16.25ZM18.125 2.5H11.875V5C11.875 6.43438 12.7031 7.3625 14.0625 7.48438V10.4219C12.6938 10.7531 11.875 11.8469 11.875 13.4375V16.875H18.125V13.4375C18.125 11.8469 17.3062 10.7531 15.9375 10.4219V7.48438C17.2969 7.3625 18.125 6.43438 18.125 5V2.5ZM6.25 2.5C3.9375 2.5 2.5 3.9375 2.5 6.25V8.125H0.625V10H2.5V16.875H10V10H11.875V8.125H10V6.25C10 3.9375 8.5625 2.5 6.25 2.5ZM4.375 8.125V6.25C4.375 4.97187 4.97188 4.375 6.25 4.375C7.52812 4.375 8.125 4.97187 8.125 6.25V8.125H4.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shovelAndPailIcon = createIcon("shovelAndPail", iconDefinition690);

// src/noticons/src/shower/default.icon.tsx
import { jsxDEV as jsxDEV693, Fragment as Fragment691 } from "react/jsx-dev-runtime";
var iconDefinition691 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV693(Fragment691, {
    children: /* @__PURE__ */ jsxDEV693("path", {
      d: "M7.8125 12.4469L4.00938 16.25L3.125 15.3656L6.92812 11.5625L7.8125 12.4469ZM5.05312 9.6875L1.25 13.4906L2.13437 14.375L5.9375 10.5719L5.05312 9.6875ZM5 17.2406L5.88438 18.125L9.6875 14.3219L8.80312 13.4375L5 17.2406ZM16.875 1.875V3.125H16.0344C14.9594 3.125 14.1438 3.4625 13.3813 4.22188L11.9781 5.625H8.89687C8.34062 5.625 7.9625 5.78125 7.57187 6.175L6.90938 6.8375L6.00937 5.9375L4.68437 7.2625L12.1469 14.725L13.4719 13.4L12.5344 12.4625L13.1969 11.8C13.5906 11.4062 13.7469 11.0312 13.7469 10.475V7.39375L15.1469 5.99375C15.4375 5.70312 15.6187 5.62813 16.0312 5.62813H16.8719V6.87813H18.7469V1.875H16.8719H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var showerIcon = createIcon("shower", iconDefinition691);

// src/noticons/src/shuffle/default.icon.tsx
import { jsxDEV as jsxDEV694, Fragment as Fragment692 } from "react/jsx-dev-runtime";
var iconDefinition692 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV694(Fragment692, {
    children: /* @__PURE__ */ jsxDEV694("path", {
      d: "M14.2938 10.3125L18.3563 14.375L14.2938 18.4375L12.9688 17.1125L14.7687 15.3125H12.5375C11.3312 15.3125 10.4406 14.8562 9.74062 13.8719L8.89375 12.6875L10.0469 11.075L11.2656 12.7844C11.6156 13.275 11.9344 13.4375 12.5375 13.4375H14.7687L12.9688 11.6375L14.2938 10.3125ZM12.5375 6.5625H14.7687L12.9688 8.3625L14.2938 9.6875L18.3563 5.625L14.2938 1.5625L12.9688 2.8875L14.7687 4.6875H12.5375C11.3312 4.6875 10.4406 5.14375 9.74062 6.12813L4.9875 12.7844C4.6375 13.275 4.31875 13.4375 3.71563 13.4375H1.87813V15.3125H3.71563C4.92188 15.3125 5.8125 14.8562 6.5125 13.8719L11.2656 7.21562C11.6156 6.725 11.9344 6.5625 12.5375 6.5625ZM4.98438 7.21562L6.20312 8.925L7.35625 7.3125L6.50938 6.12813C5.80625 5.14688 4.91875 4.6875 3.7125 4.6875H1.875V6.5625H3.7125C4.3125 6.5625 4.63437 6.72813 4.98438 7.21562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var shuffleIcon = createIcon("shuffle", iconDefinition692);

// src/noticons/src/signIn/default.icon.tsx
import { jsxDEV as jsxDEV695, Fragment as Fragment693 } from "react/jsx-dev-runtime";
var iconDefinition693 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV695(Fragment693, {
    children: /* @__PURE__ */ jsxDEV695("path", {
      d: "M10.075 10L6.0125 14.0625L4.6875 12.7375L6.4875 10.9375H1.25V9.0625H6.4875L4.6875 7.2625L6.0125 5.9375L10.075 10ZM7.5 2.5V6.25H9.375V4.375H15V15.625H9.375V13.75H7.5V17.5H16.875V2.5H7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var signInIcon = createIcon("signIn", iconDefinition693);

// src/noticons/src/signOut/default.icon.tsx
import { jsxDEV as jsxDEV696, Fragment as Fragment694 } from "react/jsx-dev-runtime";
var iconDefinition694 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV696(Fragment694, {
    children: /* @__PURE__ */ jsxDEV696("path", {
      d: "M10.625 13.75H12.5V17.5H3.125V2.5H12.5V6.25H10.625V4.375H5V15.625H10.625V13.75ZM15.3875 5.9375L14.0625 7.2625L15.8625 9.0625H10.625V10.9375H15.8625L14.0625 12.7375L15.3875 14.0625L19.45 10L15.3875 5.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var signOutIcon = createIcon("signOut", iconDefinition694);

// src/noticons/src/signatureDocument/default.icon.tsx
import { jsxDEV as jsxDEV697, Fragment as Fragment695 } from "react/jsx-dev-runtime";
var iconDefinition695 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV697(Fragment695, {
    children: /* @__PURE__ */ jsxDEV697("path", {
      d: "M9.375 2.5H3.75V17.5H16.25V9.375H9.375V2.5ZM10.625 14.375H15V15.625H10.625V14.375ZM9.375 14.7406L8.49062 15.625L7.1875 14.3219L5.88438 15.625L5 14.7406L6.30312 13.4375L5 12.1344L5.88438 11.25L7.1875 12.5531L8.49062 11.25L9.375 12.1344L8.07188 13.4375L9.375 14.7406ZM16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var signatureDocumentIcon = createIcon("signatureDocument", iconDefinition695);

// src/noticons/src/sink/default.icon.tsx
import { jsxDEV as jsxDEV698, Fragment as Fragment696 } from "react/jsx-dev-runtime";
var iconDefinition696 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV698(Fragment696, {
    children: /* @__PURE__ */ jsxDEV698("path", {
      d: "M18.75 10.625H17.5V11.875C17.5 14.9594 15.5844 16.875 12.5 16.875H7.5C4.41563 16.875 2.5 14.9594 2.5 11.875V10.625H1.25V8.75H5.3125V6.875H7.1875V8.75H9.0625V4.0625C9.0625 2.38125 10.1938 1.25 11.875 1.25C13.5562 1.25 14.6875 2.38125 14.6875 4.0625V5H12.8125V4.0625C12.8125 3.42188 12.5156 3.125 11.875 3.125C11.2344 3.125 10.9375 3.42188 10.9375 4.0625V8.75H12.8125V6.875H14.6875V8.75H18.75V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sinkIcon = createIcon("sink", iconDefinition696);

// src/noticons/src/skateboard/default.icon.tsx
import { jsxDEV as jsxDEV699, Fragment as Fragment697 } from "react/jsx-dev-runtime";
var iconDefinition697 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV699(Fragment697, {
    children: /* @__PURE__ */ jsxDEV699("path", {
      d: "M19.4062 8.79375C18.4187 9.78125 17.4562 10.3219 16.25 10.525V11.5594C16.25 12.4219 15.55 13.1219 14.6875 13.1219C13.825 13.1219 13.125 12.4219 13.125 11.5594V10.6219H6.875V11.5594C6.875 12.4219 6.175 13.1219 5.3125 13.1219C4.45 13.1219 3.75 12.4219 3.75 11.5594V10.525C2.54375 10.3188 1.58125 9.78125 0.59375 8.79375L0 8.2L1.325 6.875L1.91875 7.46875C2.83437 8.38437 3.71563 8.75 5.0125 8.75H14.9875C16.2844 8.75 17.1656 8.38437 18.0812 7.46875L18.6156 6.93438L20 8.20312L19.4062 8.79687V8.79375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skateboardIcon = createIcon("skateboard", iconDefinition697);

// src/noticons/src/skipBackward/default.icon.tsx
import { jsxDEV as jsxDEV700, Fragment as Fragment698 } from "react/jsx-dev-runtime";
var iconDefinition698 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV700(Fragment698, {
    children: /* @__PURE__ */ jsxDEV700("path", {
      d: "M7.09063 5.84063L6.36875 6.5625H9.06563V8.4375H3.125V2.5H5V5.27812L5.7625 4.51562C7.10625 3.17187 8.86562 2.50313 10.625 2.50313C14.4219 2.50313 17.5 5.58125 17.5 9.37813H15.625C15.625 6.61562 13.3875 4.37813 10.625 4.37813C9.34688 4.37813 8.06563 4.86563 7.09063 5.84375V5.84063ZM4.375 11.25C2.65 11.25 1.25 12.65 1.25 14.375C1.25 16.1 2.65 17.5 4.375 17.5C6.1 17.5 7.5 16.1 7.5 14.375C7.5 12.65 6.1 11.25 4.375 11.25ZM18.75 14.375C18.75 16.1 17.35 17.5 15.625 17.5C13.9 17.5 12.5 16.1 12.5 14.375C12.5 12.65 13.9 11.25 15.625 11.25C17.35 11.25 18.75 12.65 18.75 14.375ZM16.875 14.375C16.875 13.6844 16.3156 13.125 15.625 13.125C14.9344 13.125 14.375 13.6844 14.375 14.375C14.375 15.0656 14.9344 15.625 15.625 15.625C16.3156 15.625 16.875 15.0656 16.875 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skipBackwardIcon = createIcon("skipBackward", iconDefinition698);

// src/noticons/src/skipForward/default.icon.tsx
import { jsxDEV as jsxDEV701, Fragment as Fragment699 } from "react/jsx-dev-runtime";
var iconDefinition699 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV701(Fragment699, {
    children: /* @__PURE__ */ jsxDEV701("path", {
      d: "M10.9375 6.56245H13.6344L12.9125 5.84058C11.9375 4.86558 10.6562 4.37495 9.37813 4.37495C6.61562 4.37495 4.37813 6.61245 4.37813 9.37495H2.50313C2.50313 5.57808 5.58125 2.49995 9.37813 2.49995C11.1375 2.49995 12.8969 3.17183 14.2406 4.51245L15.0031 5.27495V2.49683H16.8781V8.43433H10.9406V6.55933L10.9375 6.56245ZM15.625 11.25C13.9 11.25 12.5 12.65 12.5 14.375C12.5 16.1 13.9 17.5 15.625 17.5C17.35 17.5 18.75 16.1 18.75 14.375C18.75 12.65 17.35 11.25 15.625 11.25ZM7.5 14.375C7.5 16.1 6.1 17.5 4.375 17.5C2.65 17.5 1.25 16.1 1.25 14.375C1.25 12.65 2.65 11.25 4.375 11.25C6.1 11.25 7.5 12.65 7.5 14.375ZM5.625 14.375C5.625 13.6843 5.06562 13.125 4.375 13.125C3.68438 13.125 3.125 13.6843 3.125 14.375C3.125 15.0656 3.68438 15.625 4.375 15.625C5.06562 15.625 5.625 15.0656 5.625 14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skipForwardIcon = createIcon("skipForward", iconDefinition699);

// src/noticons/src/skirt/default.icon.tsx
import { jsxDEV as jsxDEV702, Fragment as Fragment700 } from "react/jsx-dev-runtime";
var iconDefinition700 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV702(Fragment700, {
    children: /* @__PURE__ */ jsxDEV702("path", {
      d: "M15.625 5.625H4.375V2.5H15.625V5.625ZM15.625 6.875H4.375L1.875 15.625C1.875 15.625 3.74062 17.5 10 17.5C16.2594 17.5 18.125 15.625 18.125 15.625L15.625 6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skirtIcon = createIcon("skirt", iconDefinition700);

// src/noticons/src/skull/default.icon.tsx
import { jsxDEV as jsxDEV703, Fragment as Fragment701 } from "react/jsx-dev-runtime";
var iconDefinition701 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV703(Fragment701, {
    children: /* @__PURE__ */ jsxDEV703("path", {
      d: "M15.1781 12.9187C16.0719 11.8656 16.5625 10.45 16.5625 8.75C16.5625 4.89375 14.05 2.5 10 2.5C5.95 2.5 3.4375 4.89375 3.4375 8.75C3.4375 10.45 3.92813 11.8656 4.82188 12.9187L4.5375 13.4906C4.42813 13.7094 4.375 13.925 4.375 14.1281C4.375 14.65 4.72187 15.0813 5.3375 15.2344L6.875 15.6187V16.8781H13.125V15.6187L14.6625 15.2344C15.2781 15.0813 15.625 14.65 15.625 14.1281C15.625 13.925 15.5719 13.7094 15.4625 13.4906L15.1781 12.9187ZM5.625 10.7812C5.625 9.9125 6.7875 9.375 7.65625 9.375C8.525 9.375 9.0625 9.9125 9.0625 10.7812C9.0625 11.65 7.9 12.1875 7.03125 12.1875C6.1625 12.1875 5.625 11.65 5.625 10.7812ZM8.75 14.375L10 11.875L11.25 14.375H8.75ZM12.9688 12.1875C12.1 12.1875 10.9375 11.65 10.9375 10.7812C10.9375 9.9125 11.475 9.375 12.3438 9.375C13.2125 9.375 14.375 9.9125 14.375 10.7812C14.375 11.65 13.8375 12.1875 12.9688 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skullIcon = createIcon("skull", iconDefinition701);

// src/noticons/src/skullProfile/default.icon.tsx
import { jsxDEV as jsxDEV704, Fragment as Fragment702 } from "react/jsx-dev-runtime";
var iconDefinition702 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV704(Fragment702, {
    children: /* @__PURE__ */ jsxDEV704("path", {
      d: "M18.75 11.875L17.5 10.2094V8.75C17.5 4.89375 14.6281 2.5 10 2.5C5.37187 2.5 2.5 4.89375 2.5 8.75C2.5 12.2031 4.60938 15 8.75 15H10.625V13.125H11.875L12.5562 15.1656C12.9375 16.3062 13.725 16.875 14.9281 16.875H17.5V13.125L18.75 11.875ZM14.375 11.875C13.6031 11.875 13.125 11.2781 13.125 10.3125C13.125 9.34688 13.6031 8.75 14.375 8.75C15.1469 8.75 15.625 9.34688 15.625 10.3125C15.625 11.2781 15.1469 11.875 14.375 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var skullProfileIcon = createIcon("skullProfile", iconDefinition702);

// src/noticons/src/sleet/default.icon.tsx
import { jsxDEV as jsxDEV705, Fragment as Fragment703 } from "react/jsx-dev-runtime";
var iconDefinition703 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV705(Fragment703, {
    children: /* @__PURE__ */ jsxDEV705("path", {
      d: "M16.875 9.375C16.875 10.5312 16.1562 11.25 15 11.25H5.625C4.08125 11.25 3.125 10.2937 3.125 8.75C3.125 7.42812 3.83125 6.5375 5.00313 6.30938C5.00313 6.29063 5.00313 6.26875 5.00313 6.25C5.00313 3.9375 6.44062 2.5 8.75313 2.5C10.5062 2.5 11.7563 3.325 12.2563 4.73438C12.4313 4.70312 12.6187 4.6875 12.8156 4.6875C14.3594 4.6875 15.3156 5.64375 15.3156 7.1875C15.3156 7.30312 15.3094 7.41563 15.2969 7.525C16.2781 7.64062 16.8781 8.32188 16.8781 9.375H16.875ZM10 12.5C9.42188 12.5 9.0625 12.8594 9.0625 13.4375C9.0625 14.0156 9.42188 14.375 10 14.375C10.5781 14.375 10.9375 14.0156 10.9375 13.4375C10.9375 12.8594 10.5781 12.5 10 12.5ZM4.6875 15.625C4.10938 15.625 3.75 15.9844 3.75 16.5625C3.75 17.1406 4.10938 17.5 4.6875 17.5C5.26562 17.5 5.625 17.1406 5.625 16.5625C5.625 15.9844 5.26562 15.625 4.6875 15.625ZM12.1875 15.625C11.6094 15.625 11.25 15.9844 11.25 16.5625C11.25 17.1406 11.6094 17.5 12.1875 17.5C12.7656 17.5 13.125 17.1406 13.125 16.5625C13.125 15.9844 12.7656 15.625 12.1875 15.625ZM6.09375 12.5L4.84375 15H6.09375L7.34375 12.5H6.09375ZM7.34375 17.5H8.59375L9.84375 15H8.59375L7.34375 17.5ZM12.3438 15H13.5938L14.8438 12.5H13.5938L12.3438 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sleetIcon = createIcon("sleet", iconDefinition703);

// src/noticons/src/slide/default.icon.tsx
import { jsxDEV as jsxDEV706, Fragment as Fragment704 } from "react/jsx-dev-runtime";
var iconDefinition704 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV706(Fragment704, {
    children: /* @__PURE__ */ jsxDEV706("path", {
      d: "M15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V5.625C17.5 4.08125 16.5437 3.125 15 3.125ZM15.625 13.125H4.375V6.875H15.625V13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slideIcon = createIcon("slide", iconDefinition704);

// src/noticons/src/slidersHorizontal/default.icon.tsx
import { jsxDEV as jsxDEV707, Fragment as Fragment705 } from "react/jsx-dev-runtime";
var iconDefinition705 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV707(Fragment705, {
    children: /* @__PURE__ */ jsxDEV707("path", {
      d: "M6.5625 7.1875C5.3375 7.1875 4.3 7.97188 3.9125 9.0625H2.5V10.9375H3.9125C4.3 12.0281 5.3375 12.8125 6.5625 12.8125C7.7875 12.8125 8.825 12.0281 9.2125 10.9375H17.5V9.0625H9.2125C8.825 7.97188 7.7875 7.1875 6.5625 7.1875ZM6.5625 10.9375C6.04375 10.9375 5.625 10.5188 5.625 10C5.625 9.48125 6.04375 9.0625 6.5625 9.0625C7.08125 9.0625 7.5 9.48125 7.5 10C7.5 10.5188 7.08125 10.9375 6.5625 10.9375ZM10.9375 12.8125C9.7125 12.8125 8.675 13.5969 8.2875 14.6875H2.5V16.5625H8.2875C8.675 17.6531 9.7125 18.4375 10.9375 18.4375C12.1625 18.4375 13.2 17.6531 13.5875 16.5625H17.5V14.6875H13.5875C13.2 13.5969 12.1625 12.8125 10.9375 12.8125ZM10.9375 16.5625C10.4187 16.5625 10 16.1438 10 15.625C10 15.1062 10.4187 14.6875 10.9375 14.6875C11.4563 14.6875 11.875 15.1062 11.875 15.625C11.875 16.1438 11.4563 16.5625 10.9375 16.5625ZM16.0875 3.4375C15.7 2.34688 14.6625 1.5625 13.4375 1.5625C12.2125 1.5625 11.175 2.34688 10.7875 3.4375H2.5V5.3125H10.7875C11.175 6.40312 12.2125 7.1875 13.4375 7.1875C14.6625 7.1875 15.7 6.40312 16.0875 5.3125H17.5V3.4375H16.0875ZM13.4375 5.3125C12.9187 5.3125 12.5 4.89375 12.5 4.375C12.5 3.85625 12.9187 3.4375 13.4375 3.4375C13.9563 3.4375 14.375 3.85625 14.375 4.375C14.375 4.89375 13.9563 5.3125 13.4375 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slidersHorizontalIcon = createIcon("slidersHorizontal", iconDefinition705);

// src/noticons/src/slidersVertical/default.icon.tsx
import { jsxDEV as jsxDEV708, Fragment as Fragment706 } from "react/jsx-dev-runtime";
var iconDefinition706 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV708(Fragment706, {
    children: /* @__PURE__ */ jsxDEV708("path", {
      d: "M16.5625 6.4125V2.5H14.6875V6.4125C13.5969 6.8 12.8125 7.8375 12.8125 9.0625C12.8125 10.2875 13.5969 11.325 14.6875 11.7125V17.5H16.5625V11.7125C17.6531 11.325 18.4375 10.2875 18.4375 9.0625C18.4375 7.8375 17.6531 6.8 16.5625 6.4125ZM15.625 10C15.1062 10 14.6875 9.58125 14.6875 9.0625C14.6875 8.54375 15.1062 8.125 15.625 8.125C16.1438 8.125 16.5625 8.54375 16.5625 9.0625C16.5625 9.58125 16.1438 10 15.625 10ZM10.9375 10.7875V2.5H9.0625V10.7875C7.97188 11.175 7.1875 12.2125 7.1875 13.4375C7.1875 14.6625 7.97188 15.7 9.0625 16.0875V17.5H10.9375V16.0875C12.0281 15.7 12.8125 14.6625 12.8125 13.4375C12.8125 12.2125 12.0281 11.175 10.9375 10.7875ZM10 14.375C9.48125 14.375 9.0625 13.9563 9.0625 13.4375C9.0625 12.9187 9.48125 12.5 10 12.5C10.5188 12.5 10.9375 12.9187 10.9375 13.4375C10.9375 13.9563 10.5188 14.375 10 14.375ZM5.3125 3.9125V2.5H3.4375V3.9125C2.34688 4.3 1.5625 5.3375 1.5625 6.5625C1.5625 7.7875 2.34688 8.825 3.4375 9.2125V17.5H5.3125V9.2125C6.40312 8.825 7.1875 7.7875 7.1875 6.5625C7.1875 5.3375 6.40312 4.3 5.3125 3.9125ZM4.375 7.5C3.85625 7.5 3.4375 7.08125 3.4375 6.5625C3.4375 6.04375 3.85625 5.625 4.375 5.625C4.89375 5.625 5.3125 6.04375 5.3125 6.5625C5.3125 7.08125 4.89375 7.5 4.375 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slidersVerticalIcon = createIcon("slidersVertical", iconDefinition706);

// src/noticons/src/slideshow/default.icon.tsx
import { jsxDEV as jsxDEV709, Fragment as Fragment707 } from "react/jsx-dev-runtime";
var iconDefinition707 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV709(Fragment707, {
    children: /* @__PURE__ */ jsxDEV709("path", {
      d: "M16.25 3.75V10H17.5V11.875H10.9375V12.5406L17.5 15.8219L16.6625 17.5L10.9375 14.6375V17.5H9.0625V14.6375L3.3375 17.5L2.5 15.8219L9.0625 12.5406V11.875H2.5V10H3.75V3.75H2.5V1.875H17.5V3.75H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slideshowIcon = createIcon("slideshow", iconDefinition707);

// src/noticons/src/slideshowPlay/default.icon.tsx
import { jsxDEV as jsxDEV710, Fragment as Fragment708 } from "react/jsx-dev-runtime";
var iconDefinition708 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV710(Fragment708, {
    children: /* @__PURE__ */ jsxDEV710("path", {
      d: "M17.5 3.75V1.875H2.5V3.75H3.75V10H2.5V11.875H9.0625V12.5406L2.5 15.8219L3.3375 17.5L9.0625 14.6375V17.5H10.9375V14.6375L16.6625 17.5L17.5 15.8219L10.9375 12.5406V11.875H17.5V10H16.25V3.75H17.5ZM13.75 7.34375L8.4375 10H7.5V3.75H8.4375L13.75 6.40625V7.34375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var slideshowPlayIcon = createIcon("slideshowPlay", iconDefinition708);

// src/noticons/src/smoking/default.icon.tsx
import { jsxDEV as jsxDEV711, Fragment as Fragment709 } from "react/jsx-dev-runtime";
var iconDefinition709 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV711(Fragment709, {
    children: /* @__PURE__ */ jsxDEV711("path", {
      d: "M14.0625 8.75V9.0625H12.8125V8.75C12.8125 8.51562 12.7344 8.4375 12.5 8.4375H11.5625C10.6438 8.4375 10 7.79375 10 6.875C10 6.76562 10.0094 6.6625 10.025 6.5625H8.75V5.3125H10.9375C11.8562 5.3125 12.5 5.95625 12.5 6.875C12.5 6.98438 12.4906 7.0875 12.475 7.1875H12.5C13.4187 7.1875 14.0625 7.83125 14.0625 8.75ZM5.625 12.1875H11.25V10.3125H5.625V12.1875ZM12.8125 12.1875H14.0625V10.3125H12.8125V12.1875ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C6.89375 4.375 4.375 6.89375 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C13.1062 15.625 15.625 13.1062 15.625 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var smokingIcon = createIcon("smoking", iconDefinition709);

// src/noticons/src/smokingNo/default.icon.tsx
import { jsxDEV as jsxDEV712, Fragment as Fragment710 } from "react/jsx-dev-runtime";
var iconDefinition710 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV712(Fragment710, {
    children: /* @__PURE__ */ jsxDEV712("path", {
      d: "M9.97813 12.1875H5.625V10.3125H8.10313L9.97813 12.1875ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM13.2562 14.5813L5.41875 6.74375C4.76562 7.6625 4.375 8.78438 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C11.2156 15.625 12.3375 15.2375 13.2562 14.5813ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C8.78438 4.375 7.6625 4.7625 6.74375 5.41875L14.5813 13.2562C15.2344 12.3375 15.625 11.2156 15.625 10ZM12.8125 10.6031L14.0625 11.8531V10.3125H12.8125V10.6031ZM12.5 7.1875H12.475C12.4937 7.0875 12.5 6.98438 12.5 6.875C12.5 5.95625 11.8562 5.3125 10.9375 5.3125H8.75V6.5625H10.025C10.0063 6.6625 10 6.76562 10 6.875C10 7.79375 10.6438 8.4375 11.5625 8.4375H12.5C12.7344 8.4375 12.8125 8.51562 12.8125 8.75V9.0625H14.0625V8.75C14.0625 7.83125 13.4187 7.1875 12.5 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var smokingNoIcon = createIcon("smokingNo", iconDefinition710);

// src/noticons/src/snake/default.icon.tsx
import { jsxDEV as jsxDEV713, Fragment as Fragment711 } from "react/jsx-dev-runtime";
var iconDefinition711 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV713(Fragment711, {
    children: /* @__PURE__ */ jsxDEV713("path", {
      d: "M18.125 15C18.125 16.1562 17.4063 16.875 16.25 16.875H5.66876C4.55626 16.875 3.80314 16.5625 3.01564 15.7781L1.24689 14.0094L2.13126 13.125L3.38126 14.375H4.99689V13.9188C4.99689 12.9094 5.59376 12.2688 6.55939 12.2V11.4188C6.55939 10.35 7.22189 9.6875 8.29064 9.6875C8.39689 9.6875 8.46876 9.69375 8.57501 9.7125L11.1875 10.1469L9.53126 8.49062C8.74689 7.70625 8.43439 6.95 8.43439 5.84063C8.43439 3.78125 9.30314 2.5 11.15 2.5C11.9094 2.5 12.425 2.6375 13.0844 3.0125L14.3719 3.75V5H10.9344V5.84063C10.9344 6.2125 11.0375 6.4625 11.3 6.725L13.8969 9.32188C14.3563 9.78125 14.6531 10.2344 14.8188 10.7531L15.3031 10.8344C16.3125 11.0031 16.8688 11.6594 16.8688 12.6844V13.2156C17.65 13.4344 18.1188 14.0719 18.1188 15H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snakeIcon = createIcon("snake", iconDefinition711);

// src/noticons/src/snareDrum/default.icon.tsx
import { jsxDEV as jsxDEV714, Fragment as Fragment712 } from "react/jsx-dev-runtime";
var iconDefinition712 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV714(Fragment712, {
    children: /* @__PURE__ */ jsxDEV714("path", {
      d: "M12.8875 7.1875L11.5625 5.8625L16.175 1.25L17.5 2.575L12.8875 7.1875ZM8.4375 5.8625L3.825 1.25L2.5 2.575L7.1125 7.1875L8.4375 5.8625ZM3.125 8.125H16.875V10H15.625V15.625H16.875V17.5H3.125V15.625H4.375V10H3.125V8.125ZM11.875 15.625H13.125V10H11.875V15.625ZM6.875 15.625H8.125V10H6.875V15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snareDrumIcon = createIcon("snareDrum", iconDefinition712);

// src/noticons/src/snippet/default.icon.tsx
import { jsxDEV as jsxDEV715, Fragment as Fragment713 } from "react/jsx-dev-runtime";
var iconDefinition713 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV715(Fragment713, {
    children: /* @__PURE__ */ jsxDEV715("path", {
      d: "M5 15H6.25V16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V12.1875C2.5 11.4156 2.02188 10.9375 1.25 10.9375H0.625V9.0625H1.25C2.02188 9.0625 2.5 8.58437 2.5 7.8125V5.625C2.5 4.08125 3.45625 3.125 5 3.125H6.25V5H5C4.61562 5 4.375 5.24062 4.375 5.625V7.8125C4.375 8.8375 3.95 9.6 3.21563 10C3.95 10.4 4.375 11.1625 4.375 12.1875V14.375C4.375 14.7594 4.61562 15 5 15ZM18.75 9.0625C17.9781 9.0625 17.5 8.58437 17.5 7.8125V5.625C17.5 4.08125 16.5437 3.125 15 3.125H13.75V5H15C15.3844 5 15.625 5.24062 15.625 5.625V7.8125C15.625 8.8375 16.05 9.6 16.7844 10C16.05 10.4 15.625 11.1625 15.625 12.1875V14.375C15.625 14.7594 15.3844 15 15 15H13.75V16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V12.1875C17.5 11.4156 17.9781 10.9375 18.75 10.9375H19.375V9.0625H18.75ZM6.25 8.75C5.55937 8.75 5 9.30937 5 10C5 10.6906 5.55937 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75ZM15 10C15 9.30937 14.4406 8.75 13.75 8.75C13.0594 8.75 12.5 9.30937 12.5 10C12.5 10.6906 13.0594 11.25 13.75 11.25C14.4406 11.25 15 10.6906 15 10ZM10 8.75C9.30937 8.75 8.75 9.30937 8.75 10C8.75 10.6906 9.30937 11.25 10 11.25C10.6906 11.25 11.25 10.6906 11.25 10C11.25 9.30937 10.6906 8.75 10 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snippetIcon = createIcon("snippet", iconDefinition713);

// src/noticons/src/snorkel/default.icon.tsx
import { jsxDEV as jsxDEV716, Fragment as Fragment714 } from "react/jsx-dev-runtime";
var iconDefinition714 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV716(Fragment714, {
    children: /* @__PURE__ */ jsxDEV716("path", {
      d: "M16.25 8.75C16.25 6.4375 14.8125 5 12.5 5H5C2.6875 5 1.25 6.4375 1.25 8.75C1.25 11.8344 3.16563 13.75 6.25 13.75H11.25C14.3344 13.75 16.25 11.8344 16.25 8.75ZM8.125 10L6.25 11.875C4.32188 11.875 3.125 10.6781 3.125 8.75C3.125 7.59375 3.84375 6.875 5 6.875H12.5C13.6562 6.875 14.375 7.59375 14.375 8.75C14.375 10.6781 13.1781 11.875 11.25 11.875L9.375 10H8.125ZM19.375 2.5V8.75C19.375 13.6844 16.1844 16.875 11.25 16.875H8.75V15H11.25C15.1625 15 17.5 12.6625 17.5 8.75V2.5H19.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snorkelIcon = createIcon("snorkel", iconDefinition714);

// src/noticons/src/snowflake/default.icon.tsx
import { jsxDEV as jsxDEV717, Fragment as Fragment715 } from "react/jsx-dev-runtime";
var iconDefinition715 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV717(Fragment715, {
    children: /* @__PURE__ */ jsxDEV717("path", {
      d: "M17.3938 12.1907L14.9375 12.85L15.5969 15.3063L13.7875 15.7907L12.9875 12.8032L10.9406 11.6219V13.9844L13.1281 16.1719L11.8031 17.4969L10.0031 15.6969L8.20313 17.4969L6.87813 16.1719L9.06563 13.9844V11.6219L7.01875 12.8032L6.21875 15.7907L4.40938 15.3063L5.06875 12.85L2.6125 12.1907L3.09688 10.3813L6.08438 11.1813L8.13125 10L6.08438 8.8188L3.09688 9.6188L2.6125 7.80942L5.06875 7.15005L4.40938 4.6938L6.21875 4.20942L7.01875 7.19692L9.06563 8.37817V6.01567L6.87813 3.82817L8.20313 2.50317L10.0031 4.30317L11.8031 2.50317L13.1281 3.82817L10.9406 6.01567V8.37817L12.9875 7.19692L13.7875 4.20942L15.5969 4.6938L14.9375 7.15005L17.3938 7.80942L16.9094 9.6188L13.9219 8.8188L11.875 10L13.9219 11.1813L16.9094 10.3813L17.3938 12.1907Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var snowflakeIcon = createIcon("snowflake", iconDefinition715);

// src/noticons/src/soap/default.icon.tsx
import { jsxDEV as jsxDEV718, Fragment as Fragment716 } from "react/jsx-dev-runtime";
var iconDefinition716 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV718(Fragment716, {
    children: /* @__PURE__ */ jsxDEV718("path", {
      d: "M18.75 6.875C18.75 7.56563 18.1906 8.125 17.5 8.125C16.8094 8.125 16.25 7.56563 16.25 6.875C16.25 6.18437 16.8094 5.625 17.5 5.625C18.1906 5.625 18.75 6.18437 18.75 6.875ZM15.3125 9.375C14.7937 9.375 14.375 9.79375 14.375 10.3125C14.375 10.8313 14.7937 11.25 15.3125 11.25C15.8312 11.25 16.25 10.8313 16.25 10.3125C16.25 9.79375 15.8312 9.375 15.3125 9.375ZM5.30936 8.125C5.14061 8.88438 4.99999 9.91875 4.99999 11.25C4.99999 12.5813 5.14061 13.6156 5.30936 14.375H9.69374C9.86249 13.6156 10.0031 12.5813 10.0031 11.25C10.0031 9.91875 9.86249 8.88438 9.69374 8.125H5.30936ZM12.6 6.85625C12.875 7.875 13.125 9.32812 13.125 11.25C13.125 13.1719 12.875 14.625 12.6 15.6438C12.2687 16.8656 11.45 17.5 10.1844 17.5H4.81874C3.55311 17.5 2.73436 16.8656 2.40311 15.6438C2.12811 14.625 1.87811 13.1719 1.87811 11.25C1.87811 9.32812 2.12811 7.875 2.40311 6.85625C2.73436 5.63438 3.55311 5 4.81874 5H10.1844C11.45 5 12.2687 5.63438 12.6 6.85625ZM11.25 11.25C11.25 9.49687 11.0187 8.20312 10.7844 7.3375C10.7 7.03125 10.4969 6.875 10.1812 6.875H4.81874C4.50311 6.875 4.29686 7.03125 4.21561 7.3375C3.97811 8.20312 3.74999 9.49687 3.74999 11.25C3.74999 13.0031 3.98124 14.2969 4.21561 15.1625C4.29999 15.4688 4.50311 15.625 4.81874 15.625H10.1781C10.4937 15.625 10.7 15.4688 10.7812 15.1625C11.0187 14.2969 11.2469 13.0031 11.2469 11.25H11.25ZM16.25 2.8125C16.25 1.95 15.55 1.25 14.6875 1.25C13.825 1.25 13.125 1.95 13.125 2.8125C13.125 3.675 13.825 4.375 14.6875 4.375C15.55 4.375 16.25 3.675 16.25 2.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var soapIcon = createIcon("soap", iconDefinition716);

// src/noticons/src/soccer/default.icon.tsx
import { jsxDEV as jsxDEV719, Fragment as Fragment717 } from "react/jsx-dev-runtime";
var iconDefinition717 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV719(Fragment717, {
    children: /* @__PURE__ */ jsxDEV719("path", {
      d: "M6.21564 11.8875L9.37501 14.1813V16.0438L7.81564 17.175C6.19064 16.6813 4.80001 15.65 3.85001 14.2907L4.44376 12.4625L6.21564 11.8875ZM5.82814 10.7L7.03439 6.98755L5.94064 5.4813H4.01564C3.06251 6.73755 2.49689 8.3063 2.49689 10.0032C2.49689 10.05 2.49689 10.1 2.50001 10.1469L4.05626 11.2782L5.82814 10.7032V10.7ZM11.95 6.25317L13.0438 4.74692L12.45 2.91567C11.6813 2.65005 10.8563 2.50317 9.99689 2.50317C9.13751 2.50317 8.31251 2.65005 7.54376 2.91567L6.95001 4.74692L8.04376 6.25317H11.9469H11.95ZM15.9813 5.4813H14.0563L12.9625 6.98755L14.1688 10.7L15.9406 11.275L17.4969 10.1438C17.4969 10.0969 17.5 10.0469 17.5 10C17.5 8.30005 16.9344 6.73442 15.9813 5.47817V5.4813ZM13.7813 11.8907L10.6219 14.1844V16.0469L12.1813 17.1782C13.8063 16.6844 15.1969 15.6532 16.1469 14.2938L15.5531 12.4657L13.7813 11.8907ZM11.8156 7.50317H8.18439L7.06251 10.9563L10 13.0907L12.9375 10.9563L11.8156 7.50317Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var soccerIcon = createIcon("soccer", iconDefinition717);

// src/noticons/src/sock/default.icon.tsx
import { jsxDEV as jsxDEV720, Fragment as Fragment718 } from "react/jsx-dev-runtime";
var iconDefinition718 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV720(Fragment718, {
    children: /* @__PURE__ */ jsxDEV720("path", {
      d: "M6.875 5H2.5V2.5H6.875V5ZM18.0344 13.6906L15.3656 11.0219C15.0531 10.7094 15 10.5781 15 10.1375V6.25H10.625V10.1375C10.625 11.7281 11.1469 12.9906 12.2719 14.1156L14.9406 16.7844C15.8969 17.7375 17.0781 17.7375 18.0344 16.7844C18.9875 15.8281 18.9875 14.6438 18.0344 13.6906ZM15 2.5H10.625V5H15V2.5ZM7.24062 11.0219C6.92812 10.7094 6.875 10.5781 6.875 10.1375V6.25H2.5V10.1375C2.5 11.7281 3.02188 12.9906 4.14688 14.1156L6.81562 16.7844C7.77187 17.7375 8.95312 17.7375 9.90937 16.7844C10.8625 15.8281 10.8625 14.6438 9.90937 13.6906L7.24062 11.0219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sockIcon = createIcon("sock", iconDefinition718);

// src/noticons/src/sodaBottle/default.icon.tsx
import { jsxDEV as jsxDEV721, Fragment as Fragment719 } from "react/jsx-dev-runtime";
var iconDefinition719 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV721(Fragment719, {
    children: /* @__PURE__ */ jsxDEV721("path", {
      d: "M7.46562 10.6906C7.25937 11.1 7.1875 11.4156 7.1875 11.875C7.1875 12.3344 7.2625 12.6469 7.46562 13.0594L7.84375 13.8156C8.05 14.225 8.12187 14.5406 8.12187 15C8.12187 15.4594 8.04687 15.7719 7.84375 16.1844L7.18437 17.5H2.80937L2.15 16.1844C1.94375 15.775 1.87187 15.4594 1.87187 15C1.87187 14.5406 1.94687 14.2281 2.15 13.8156L2.52812 13.0594C2.73437 12.65 2.80625 12.3344 2.80625 11.875C2.80625 11.4156 2.73125 11.1031 2.52812 10.6906L2.15 9.93438C1.94375 9.525 1.87187 9.20937 1.87187 8.75V7.34688C1.87187 6.5625 2.09375 6.02813 2.64687 5.475L2.97187 5.15C3.52812 4.59375 3.74687 4.0625 3.74687 3.27812V3.125H3.12187V1.25H6.87187V3.125H6.24687V3.27812C6.24687 4.0625 6.46875 4.59687 7.02187 5.15L7.34687 5.475C7.90312 6.03125 8.12187 6.5625 8.12187 7.34688V8.75C8.12187 9.20937 8.04687 9.52188 7.84375 9.93438L7.46562 10.6906ZM18.75 2.5L17.5 17.5H10.625L9.375 2.5H18.75ZM11.4125 4.375L11.6219 6.875H16.5062L16.7156 4.375H11.4156H11.4125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sodaBottleIcon = createIcon("sodaBottle", iconDefinition719);

// src/noticons/src/softServe/default.icon.tsx
import { jsxDEV as jsxDEV722, Fragment as Fragment720 } from "react/jsx-dev-runtime";
var iconDefinition720 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV722(Fragment720, {
    children: /* @__PURE__ */ jsxDEV722("path", {
      d: "M14.6875 8.75H5.3125V7.07187C5.3125 6.36562 5.60313 5.89688 6.23438 5.58125L6.875 5.25938V3.94688C6.875 3.24063 7.16563 2.77188 7.79688 2.45625L8.75 1.97812V0H9.0625C10.6062 0 11.5625 0.95625 11.5625 2.5V3.4375H11.875C12.6469 3.4375 13.125 3.91563 13.125 4.6875V5.625H13.4375C14.2094 5.625 14.6875 6.10313 14.6875 6.875V8.75ZM4.6875 10V11.875H5.6125C5.925 12.7625 6.47188 13.4688 7.21875 13.95L7.80937 17.5H12.1844L12.775 13.95C13.5219 13.4688 14.0688 12.7625 14.3813 11.875H15.3062V10H4.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var softServeIcon = createIcon("softServe", iconDefinition720);

// src/noticons/src/soy/default.icon.tsx
import { jsxDEV as jsxDEV723, Fragment as Fragment721 } from "react/jsx-dev-runtime";
var iconDefinition721 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV723(Fragment721, {
    children: /* @__PURE__ */ jsxDEV723("path", {
      d: "M18.125 6.875C18.125 6.375 18.0437 5.875 17.8844 5.4L16.5 1.25H14.9969C14.9969 3.70312 3.7 15 1.24687 15V16.5031L5.39687 17.8875C5.87187 18.0469 6.36875 18.1281 6.87187 18.1281C8.48125 18.1281 10.2312 16.5281 10.5625 14.9062C12.8 15.5063 15.5 12.8063 14.9031 10.5656C16.525 10.2344 18.125 8.48438 18.125 6.875ZM6.875 16.25C6.25 16.25 5.625 15.625 5.625 15C5.625 14.0594 6.55937 13.125 7.5 13.125C8.125 13.125 8.75 13.75 8.75 14.375C8.75 15.3156 7.81562 16.25 6.875 16.25ZM11.25 13.125C10.625 13.125 10 12.5 10 11.875C10 10.9344 10.9344 10 11.875 10C12.5 10 13.125 10.625 13.125 11.25C13.125 12.1906 12.1906 13.125 11.25 13.125ZM14.375 8.75C13.75 8.75 13.125 8.125 13.125 7.5C13.125 6.55937 14.0594 5.625 15 5.625C15.625 5.625 16.25 6.25 16.25 6.875C16.25 7.81563 15.3156 8.75 14.375 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var soyIcon = createIcon("soy", iconDefinition721);

// src/noticons/src/spider/default.icon.tsx
import { jsxDEV as jsxDEV724, Fragment as Fragment722 } from "react/jsx-dev-runtime";
var iconDefinition722 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV724(Fragment722, {
    children: /* @__PURE__ */ jsxDEV724("path", {
      d: "M16.5969 12.2875L17.8125 14.7219L16.6937 15.2812L15.4781 12.8469C15.3469 12.5844 15.2125 12.5 14.9187 12.5H13.7094C13.6594 12.8938 13.5656 13.2562 13.4281 13.5812L14.0469 14.8156C14.2844 15.2906 14.3781 15.6813 14.3781 16.2125V18.7469H13.1281V16.2125C13.1281 15.8781 13.0812 15.675 12.9312 15.375L12.6125 14.7375C11.9719 15.3062 11.0843 15.625 10.0031 15.625C8.92185 15.625 8.03748 15.3094 7.39373 14.7375L7.07498 15.375C6.92498 15.675 6.8781 15.8781 6.8781 16.2125V18.7469H5.6281V16.2125C5.6281 15.6813 5.72185 15.2906 5.95935 14.8156L6.5781 13.5812C6.4406 13.2531 6.34685 12.8938 6.29685 12.5H5.08748C4.79373 12.5 4.65935 12.5844 4.5281 12.8469L3.31248 15.2812L2.19373 14.7219L3.40935 12.2875C3.7531 11.6 4.31873 11.25 5.08748 11.25H6.25623C6.25623 10.7969 6.31248 10.3813 6.41873 10H4.97498C4.24998 10 3.72185 9.78125 3.20623 9.26875L1.88123 7.94375L2.7656 7.05937L4.0906 8.38438C4.36873 8.6625 4.58435 8.75 4.97498 8.75H7.04685C7.1281 8.65 7.2156 8.55625 7.30623 8.46875L5.23435 6.65625C4.64373 6.14062 4.38123 5.55937 4.38123 4.775V1.25H5.63123V4.775C5.63123 5.2 5.73748 5.4375 6.05935 5.71563L8.13123 7.52812V6.875C8.13123 5.71875 8.84998 5 10.0062 5C11.1625 5 11.8812 5.71875 11.8812 6.875V7.52812L13.9531 5.71563C14.2719 5.4375 14.3812 5.2 14.3812 4.775V1.25H15.6312V4.775C15.6312 5.55937 15.3687 6.14062 14.7781 6.65625L12.7062 8.46875C12.7969 8.55625 12.8844 8.65 12.9656 8.75H15.0375C15.4281 8.75 15.6437 8.65938 15.9219 8.38438L17.2469 7.05937L18.1312 7.94375L16.8062 9.26875C16.2937 9.78125 15.7656 10 15.0375 10H13.5937C13.7 10.3813 13.7562 10.7969 13.7562 11.25H14.925C15.6937 11.25 16.2594 11.6 16.6031 12.2875H16.5969Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var spiderIcon = createIcon("spider", iconDefinition722);

// src/noticons/src/sponge/default.icon.tsx
import { jsxDEV as jsxDEV725, Fragment as Fragment723 } from "react/jsx-dev-runtime";
var iconDefinition723 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV725(Fragment723, {
    children: /* @__PURE__ */ jsxDEV725("path", {
      d: "M14.6875 4.375C13.825 4.375 13.125 3.675 13.125 2.8125C13.125 1.95 13.825 1.25 14.6875 1.25C15.55 1.25 16.25 1.95 16.25 2.8125C16.25 3.675 15.55 4.375 14.6875 4.375ZM17.5 5.625C16.8094 5.625 16.25 6.18437 16.25 6.875C16.25 7.56563 16.8094 8.125 17.5 8.125C18.1906 8.125 18.75 7.56563 18.75 6.875C18.75 6.18437 18.1906 5.625 17.5 5.625ZM15.3125 9.375C14.7937 9.375 14.375 9.79375 14.375 10.3125C14.375 10.8313 14.7937 11.25 15.3125 11.25C15.8313 11.25 16.25 10.8313 16.25 10.3125C16.25 9.79375 15.8313 9.375 15.3125 9.375ZM10.0594 5H12.5V9.31563C11.9406 9.64062 11.5625 10.2437 11.5625 10.9375C11.5625 11.6313 11.9406 12.2344 12.5 12.5594V17.5H2.5V5H6.81562C7.14062 5.55937 7.74375 5.9375 8.4375 5.9375C9.13125 5.9375 9.73437 5.55937 10.0594 5ZM7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75C5.55938 8.75 5 9.30937 5 10C5 10.6906 5.55938 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10ZM9.375 14.0625C9.375 13.5437 8.95625 13.125 8.4375 13.125C7.91875 13.125 7.5 13.5437 7.5 14.0625C7.5 14.5813 7.91875 15 8.4375 15C8.95625 15 9.375 14.5813 9.375 14.0625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var spongeIcon = createIcon("sponge", iconDefinition723);

// src/noticons/src/spoon/default.icon.tsx
import { jsxDEV as jsxDEV726, Fragment as Fragment724 } from "react/jsx-dev-runtime";
var iconDefinition724 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV726(Fragment724, {
    children: /* @__PURE__ */ jsxDEV726("path", {
      d: "M10.9375 9.84375V17.5H9.0625V9.84375C8.075 9.48125 7.5 8.49062 7.5 6.875C7.5 4.43438 8.44063 2.5 10 2.5C11.5594 2.5 12.5 4.43438 12.5 6.875C12.5 8.4875 11.925 9.48125 10.9375 9.84375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var spoonIcon = createIcon("spoon", iconDefinition724);

// src/noticons/src/sprayBottle/default.icon.tsx
import { jsxDEV as jsxDEV727, Fragment as Fragment725 } from "react/jsx-dev-runtime";
var iconDefinition725 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV727(Fragment725, {
    children: /* @__PURE__ */ jsxDEV727("path", {
      d: "M14.375 14.8594V17.5H5.625V13.5687C5.625 11.9812 6.27812 10.925 7.69687 10.2156L8.75 9.69063V7.50313H11.875L13.3187 10.3906C14.0938 11.9406 14.375 13.1281 14.375 14.8625V14.8594ZM5.625 6.31562L6.74375 6.875L7.99375 4.375H8.75V6.25H11.875V5.77187C11.875 5.24375 12.0937 4.89062 12.5656 4.65313L13.75 4.0625V1.875H5V4.375H6.59688L5.625 6.31562Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sprayBottleIcon = createIcon("sprayBottle", iconDefinition725);

// src/noticons/src/square/default.icon.tsx
import { jsxDEV as jsxDEV728, Fragment as Fragment726 } from "react/jsx-dev-runtime";
var iconDefinition726 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV728(Fragment726, {
    children: /* @__PURE__ */ jsxDEV728("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM15 15H5V5H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareIcon = createIcon("square", iconDefinition726);

// src/noticons/src/squareAlternate/default.icon.tsx
import { jsxDEV as jsxDEV729, Fragment as Fragment727 } from "react/jsx-dev-runtime";
var iconDefinition727 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV729(Fragment727, {
    children: /* @__PURE__ */ jsxDEV729("path", {
      d: "M16.875 3.125V16.875H3.125V3.125H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareAlternateIcon = createIcon("squareAlternate", iconDefinition727);

// src/noticons/src/squareCircle/default.icon.tsx
import { jsxDEV as jsxDEV730, Fragment as Fragment728 } from "react/jsx-dev-runtime";
var iconDefinition728 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV730(Fragment728, {
    children: [
      /* @__PURE__ */ jsxDEV730("path", {
        d: "M18.3125 18.3125H8.3125V8.3125H18.3125V18.3125Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV730("path", {
        d: "M7.3125 1.6875C10.3353 1.6875 12.8008 4.07191 12.9316 7.0625H7.0625V12.9307C4.07193 12.7998 1.6875 10.3353 1.6875 7.3125C1.6875 4.2059 4.2059 1.6875 7.3125 1.6875Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var squareCircleIcon = createIcon("squareCircle", iconDefinition728);

// src/noticons/src/squareDashed/default.icon.tsx
import { jsxDEV as jsxDEV731, Fragment as Fragment729 } from "react/jsx-dev-runtime";
var iconDefinition729 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV731(Fragment729, {
    children: /* @__PURE__ */ jsxDEV731("path", {
      d: "M3.125 3.125H9.375V5H5V9.375H3.125V3.125ZM5 10.625H3.125V16.875H9.375V15H5V10.625ZM10.625 3.125V5H15V9.375H16.875V3.125H10.625ZM15 15H10.625V16.875H16.875V10.625H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareDashedIcon = createIcon("squareDashed", iconDefinition729);

// src/noticons/src/squareOneFourth/default.icon.tsx
import { jsxDEV as jsxDEV732, Fragment as Fragment730 } from "react/jsx-dev-runtime";
var iconDefinition730 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV732(Fragment730, {
    children: /* @__PURE__ */ jsxDEV732("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM15 15H5V5H10V10H15V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareOneFourthIcon = createIcon("squareOneFourth", iconDefinition730);

// src/noticons/src/squareThreeFourths/default.icon.tsx
import { jsxDEV as jsxDEV733, Fragment as Fragment731 } from "react/jsx-dev-runtime";
var iconDefinition731 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV733(Fragment731, {
    children: /* @__PURE__ */ jsxDEV733("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM10 10H5V5H10V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareThreeFourthsIcon = createIcon("squareThreeFourths", iconDefinition731);

// src/noticons/src/squareTwoFourths/default.icon.tsx
import { jsxDEV as jsxDEV734, Fragment as Fragment732 } from "react/jsx-dev-runtime";
var iconDefinition732 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV734(Fragment732, {
    children: /* @__PURE__ */ jsxDEV734("path", {
      d: "M3.125 3.125V16.875H16.875V3.125H3.125ZM10 15H5V5H10V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squareTwoFourthsIcon = createIcon("squareTwoFourths", iconDefinition732);

// src/noticons/src/squeezeTube/default.icon.tsx
import { jsxDEV as jsxDEV735, Fragment as Fragment733 } from "react/jsx-dev-runtime";
var iconDefinition733 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV735(Fragment733, {
    children: /* @__PURE__ */ jsxDEV735("path", {
      d: "M15 2.5V4.00313C15 5.20312 14.8656 6.025 14.4875 7.16563L12.5 13.125H7.5L5.5125 7.16563C5.13125 6.025 5 5.20312 5 4.00313V2.5H15ZM7.5 17.5H12.5V14.375H7.5V17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var squeezeTubeIcon = createIcon("squeezeTube", iconDefinition733);

// src/noticons/src/stairs/default.icon.tsx
import { jsxDEV as jsxDEV736, Fragment as Fragment734 } from "react/jsx-dev-runtime";
var iconDefinition734 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV736(Fragment734, {
    children: /* @__PURE__ */ jsxDEV736("path", {
      d: "M17.5 4.375V15.625H2.5V11.875H6.25V8.125H10V4.375H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stairsIcon = createIcon("stairs", iconDefinition734);

// src/noticons/src/star/default.icon.tsx
import { jsxDEV as jsxDEV737, Fragment as Fragment735 } from "react/jsx-dev-runtime";
var iconDefinition735 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV737(Fragment735, {
    children: /* @__PURE__ */ jsxDEV737("path", {
      d: "M13.675 11.1938L15.375 16.4219L14.45 17.0938L10.0031 13.8625L5.52813 17.1125L4.61875 16.4531L6.32813 11.1938L1.79688 7.90313L2.13125 6.875H7.73125L9.45625 1.5625H10.5438L12.2688 6.875H17.8281L18.1688 7.92813L13.6719 11.1969L13.675 11.1938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var starIcon = createIcon("star", iconDefinition735);

// src/noticons/src/starHalf/default.icon.tsx
import { jsxDEV as jsxDEV738, Fragment as Fragment736 } from "react/jsx-dev-runtime";
var iconDefinition736 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV738(Fragment736, {
    children: /* @__PURE__ */ jsxDEV738("path", {
      d: "M18.3625 8.55937L17.6125 6.25H12.725L11.2031 1.5625H8.80002L7.27815 6.25H2.32502L1.58752 8.525L5.59065 11.4344L4.09377 16.0406L6.08127 17.4844L10 14.6375L13.8781 17.4563L15.8906 15.9937L14.4094 11.4344L18.3625 8.5625V8.55937ZM10 12.3187L6.4344 14.9094L7.7969 10.7156L4.22815 8.125H8.63752L10 3.93125V12.3187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var starHalfIcon = createIcon("starHalf", iconDefinition736);

// src/noticons/src/starOfLife/default.icon.tsx
import { jsxDEV as jsxDEV739, Fragment as Fragment737 } from "react/jsx-dev-runtime";
var iconDefinition737 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV739(Fragment737, {
    children: /* @__PURE__ */ jsxDEV739("path", {
      d: "M13.75 10L17.4312 12.125L15.5562 15.3719L11.875 13.2469V17.5H8.12498V13.2469L4.44373 15.3719L2.56873 12.125L6.24998 10L2.56873 7.875L4.44373 4.62813L8.12498 6.75313V2.5H11.875V6.75313L15.5562 4.62813L17.4312 7.875L13.75 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var starOfLifeIcon = createIcon("starOfLife", iconDefinition737);

// src/noticons/src/starOutline/default.icon.tsx
import { jsxDEV as jsxDEV740, Fragment as Fragment738 } from "react/jsx-dev-runtime";
var iconDefinition738 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV740(Fragment738, {
    children: /* @__PURE__ */ jsxDEV740("path", {
      d: "M18.3625 8.55937L17.6125 6.25H12.725L11.2031 1.5625H8.79999L7.27812 6.25H2.32499L1.58749 8.525L5.59062 11.4344L4.09374 16.0406L6.08124 17.4844L9.99999 14.6375L13.8781 17.4563L15.8906 15.9937L14.4094 11.4344L18.3625 8.5625V8.55937ZM13.5656 14.9094L9.99999 12.3187L6.43437 14.9094L7.79687 10.7156L4.22812 8.125H8.63749L9.99999 3.93125L11.3625 8.125H15.7719L12.2062 10.7156L13.5687 14.9094H13.5656Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var starOutlineIcon = createIcon("starOutline", iconDefinition738);

// src/noticons/src/stars/default.icon.tsx
import { jsxDEV as jsxDEV741, Fragment as Fragment739 } from "react/jsx-dev-runtime";
var iconDefinition739 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV741(Fragment739, {
    children: /* @__PURE__ */ jsxDEV741("path", {
      d: "M18.125 7.1875L14.875 8L14.0625 11.25H13.4375L12.625 8L9.375 7.1875V6.5625L12.625 5.75L13.4375 2.5H14.0625L14.875 5.75L18.125 6.5625V7.1875ZM6.875 9.0625V8.4375L5.125 8L4.6875 6.25H4.0625L3.625 8L1.875 8.4375V9.0625L3.625 9.5L4.0625 11.25H4.6875L5.125 9.5L6.875 9.0625ZM9.6875 11.25H9.0625L8.5 13.5L6.25 14.0625V14.6875L8.5 15.25L9.0625 17.5H9.6875L10.25 15.25L12.5 14.6875V14.0625L10.25 13.5L9.6875 11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var starsIcon = createIcon("stars", iconDefinition739);

// src/noticons/src/steeringWheel/default.icon.tsx
import { jsxDEV as jsxDEV742, Fragment as Fragment740 } from "react/jsx-dev-runtime";
var iconDefinition740 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV742(Fragment740, {
    children: /* @__PURE__ */ jsxDEV742("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 4.375C13.0688 4.375 15.5594 6.83125 15.6187 9.8875L13.6438 8.9C12.9781 8.56875 12.4313 8.4375 11.6875 8.4375H8.30937C7.56563 8.4375 7.01875 8.56562 6.35313 8.9L4.37813 9.8875C4.44063 6.83437 6.92812 4.375 9.99687 4.375H10ZM4.68437 11.8313L7.12812 10.6094C7.48438 11.4406 8.19063 12.0844 9.0625 12.3563V15.5406C7.01562 15.1969 5.34687 13.75 4.68437 11.8313ZM10.9375 15.5406V12.3563C11.8094 12.0813 12.5125 11.4375 12.8719 10.6094L15.3156 11.8313C14.6531 13.75 12.9844 15.1969 10.9375 15.5406Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var steeringWheelIcon = createIcon("steeringWheel", iconDefinition740);

// src/noticons/src/stethoscope/default.icon.tsx
import { jsxDEV as jsxDEV743, Fragment as Fragment741 } from "react/jsx-dev-runtime";
var iconDefinition741 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV743(Fragment741, {
    children: /* @__PURE__ */ jsxDEV743("path", {
      d: "M16.875 12.9125V13.4375C16.875 16.2844 15.0344 18.125 12.1875 18.125C9.34063 18.125 7.5 16.2844 7.5 13.4375V12.9938C6.84375 12.8031 6.30938 12.3969 5.88438 11.7594L3.25 7.80937C2.75312 7.0625 2.5 6.25 2.5 5.4625C2.5 3.67187 3.89062 1.875 6.425 1.875H6.875V3.75H6.425C4.35937 3.75 4.375 5.4125 4.375 5.46562C4.375 5.88438 4.52187 6.33437 4.8125 6.76562L7.44688 10.7156C7.71562 11.1188 7.95625 11.2469 8.44063 11.2469C8.925 11.2469 9.16563 11.1188 9.43438 10.7156L12.0687 6.76562C12.3594 6.33125 12.5063 5.88438 12.5063 5.46562C12.5063 5.4125 12.5187 3.75 10.4562 3.75H10.0063V1.875H10.4562C13 1.875 14.3813 3.675 14.3813 5.4625C14.3813 6.25 14.1281 7.0625 13.6312 7.80937L10.9969 11.7594C10.5719 12.3969 10.0344 12.8031 9.38125 12.9938V13.4375C9.38125 15.225 10.4062 16.25 12.1938 16.25C13.9812 16.25 15.0063 15.225 15.0063 13.4375V12.9125C14.2688 12.5625 13.7563 11.8094 13.7563 10.9375C13.7563 9.72813 14.7344 8.75 15.9438 8.75C17.1531 8.75 18.1313 9.72813 18.1313 10.9375C18.1313 11.8094 17.6188 12.5594 16.8813 12.9125H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stethoscopeIcon = createIcon("stethoscope", iconDefinition741);

// src/noticons/src/sticker/default.icon.tsx
import { jsxDEV as jsxDEV744, Fragment as Fragment742 } from "react/jsx-dev-runtime";
var iconDefinition742 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV744(Fragment742, {
    children: /* @__PURE__ */ jsxDEV744("path", {
      d: "M17.5 9.0625V9.6875L9.6875 17.5H9.0625V16.5625C9.0625 12.4219 12.4219 9.0625 16.5625 9.0625H17.5ZM16.5625 7.8125H17.175C16.2375 4.7375 13.3813 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 13.3813 4.7375 16.2375 7.8125 17.175V16.5625C7.8125 11.7375 11.7375 7.8125 16.5625 7.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stickerIcon = createIcon("sticker", iconDefinition742);

// src/noticons/src/stomach/default.icon.tsx
import { jsxDEV as jsxDEV745, Fragment as Fragment743 } from "react/jsx-dev-runtime";
var iconDefinition743 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV745(Fragment743, {
    children: /* @__PURE__ */ jsxDEV745("path", {
      d: "M17.5 10C17.5 14.6281 14.8656 17.5 10.625 17.5C8.58437 17.5 6.91563 16.8313 5.73438 15.625H5.625C4.85313 15.625 4.375 16.1031 4.375 16.875V17.5H1.875V16.875C1.875 11.4438 7.5 14.5094 7.5 10C7.5 9.1875 7.59062 8.44687 7.75312 7.775L7.075 7.43438C5.65625 6.725 5.00313 5.66875 5.00313 4.08125V2.5H7.50313V4.08125C7.50313 4.60938 7.72187 4.9625 8.19375 5.2L8.79688 5.5C9.6625 4.37813 10.9312 3.75 12.5031 3.75C15.5875 3.75 17.5031 6.14375 17.5031 10H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stomachIcon = createIcon("stomach", iconDefinition743);

// src/noticons/src/stopwatch/default.icon.tsx
import { jsxDEV as jsxDEV746, Fragment as Fragment744 } from "react/jsx-dev-runtime";
var iconDefinition744 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV746(Fragment744, {
    children: /* @__PURE__ */ jsxDEV746("path", {
      d: "M17.425 6.325L18.75 5L15.625 1.875L14.3 3.2L15.2 4.1L14.1531 5.14687C13.4812 4.63437 12.7094 4.24688 11.875 4.0125V2.5H8.125V4.0125C5.24063 4.82812 3.125 7.48125 3.125 10.625C3.125 14.4219 6.20312 17.5 10 17.5C13.7969 17.5 16.875 14.4219 16.875 10.625C16.875 9.06563 16.3531 7.625 15.4781 6.47187L16.525 5.425L17.425 6.325ZM10.625 12.6813V14.375H9.375V12.6813C8.825 12.4406 8.4375 11.8906 8.4375 11.25C8.4375 10.6094 8.825 10.0594 9.375 9.81875V5.625H10.625V9.81875C11.175 10.0594 11.5625 10.6094 11.5625 11.25C11.5625 11.8906 11.175 12.4406 10.625 12.6813Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stopwatchIcon = createIcon("stopwatch", iconDefinition744);

// src/noticons/src/storm/default.icon.tsx
import { jsxDEV as jsxDEV747, Fragment as Fragment745 } from "react/jsx-dev-runtime";
var iconDefinition745 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV747(Fragment745, {
    children: /* @__PURE__ */ jsxDEV747("path", {
      d: "M11.875 12.5H14.375V13.75L11.875 17.5H10.625V14.375H8.125V10H11.875V12.5ZM15.2937 7.525C15.3031 7.41563 15.3125 7.30312 15.3125 7.1875C15.3125 5.64375 14.3562 4.6875 12.8125 4.6875C12.6156 4.6875 12.4312 4.70312 12.2531 4.73438C11.75 3.32812 10.5031 2.5 8.75 2.5C6.4375 2.5 5 3.9375 5 6.25C5 6.27187 5 6.29063 5 6.30938C3.82812 6.5375 3.12187 7.42812 3.12187 8.75C3.12187 10.2937 4.07812 11.25 5.62187 11.25H6.87187V8.75H13.1219V11.25H14.9969C16.1531 11.25 16.8719 10.5312 16.8719 9.375C16.8719 8.32188 16.2719 7.6375 15.2906 7.525H15.2937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stormIcon = createIcon("storm", iconDefinition745);

// src/noticons/src/stovetop/default.icon.tsx
import { jsxDEV as jsxDEV748, Fragment as Fragment746 } from "react/jsx-dev-runtime";
var iconDefinition746 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV748(Fragment746, {
    children: /* @__PURE__ */ jsxDEV748("path", {
      d: "M16.25 1.875V4.375H3.75V1.875H16.25ZM3.75 5.625H16.25V18.125H3.75V5.625ZM8.75 14.6875C8.75 13.825 8.05 13.125 7.1875 13.125C6.325 13.125 5.625 13.825 5.625 14.6875C5.625 15.55 6.325 16.25 7.1875 16.25C8.05 16.25 8.75 15.55 8.75 14.6875ZM11.25 9.0625C11.25 9.925 11.95 10.625 12.8125 10.625C13.675 10.625 14.375 9.925 14.375 9.0625C14.375 8.2 13.675 7.5 12.8125 7.5C11.95 7.5 11.25 8.2 11.25 9.0625ZM10.3125 14.375C10.3125 15.5844 11.2906 16.5625 12.5 16.5625C13.7094 16.5625 14.6875 15.5844 14.6875 14.375C14.6875 13.1656 13.7094 12.1875 12.5 12.1875C11.2906 12.1875 10.3125 13.1656 10.3125 14.375ZM5.3125 9.375C5.3125 10.5844 6.29063 11.5625 7.5 11.5625C8.70937 11.5625 9.6875 10.5844 9.6875 9.375C9.6875 8.16563 8.70937 7.1875 7.5 7.1875C6.29063 7.1875 5.3125 8.16563 5.3125 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var stovetopIcon = createIcon("stovetop", iconDefinition746);

// src/noticons/src/strawberry/default.icon.tsx
import { jsxDEV as jsxDEV749, Fragment as Fragment747 } from "react/jsx-dev-runtime";
var iconDefinition747 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV749(Fragment747, {
    children: /* @__PURE__ */ jsxDEV749("path", {
      d: "M16.25 8.50312C16.25 9.07187 16.0812 9.62812 15.7656 10.1L11.2937 16.8062C11.0062 17.2406 10.5187 17.5 9.99687 17.5C9.47499 17.5 8.99062 17.2406 8.69999 16.8062L4.22812 10.1C3.91249 9.62812 3.74374 9.07187 3.74374 8.50312C3.74374 6.9125 5.03124 5.625 6.62187 5.625H6.86874L6.24374 3.125C8.28124 3.125 8.74374 4.0625 8.74374 4.0625C9.05312 2.54063 9.99374 1.875 9.99374 1.875C9.99374 1.875 10.9344 2.54063 11.2437 4.0625C11.2437 4.0625 11.7062 3.125 13.7437 3.125L13.1187 5.625H13.3656C14.9562 5.625 16.2437 6.9125 16.2437 8.50312H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var strawberryIcon = createIcon("strawberry", iconDefinition747);

// src/noticons/src/stroller/default.icon.tsx
import { jsxDEV as jsxDEV750, Fragment as Fragment748 } from "react/jsx-dev-runtime";
var iconDefinition748 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV750(Fragment748, {
    children: /* @__PURE__ */ jsxDEV750("path", {
      d: "M17.5 15.625C17.5 16.6594 16.6594 17.5 15.625 17.5C14.5906 17.5 13.75 16.6594 13.75 15.625C13.75 14.8094 14.2719 14.1156 15 13.8594V13.125H8.125V13.8594C8.85313 14.1156 9.375 14.8094 9.375 15.625C9.375 16.6594 8.53438 17.5 7.5 17.5C6.46563 17.5 5.625 16.6594 5.625 15.625C5.625 14.8094 6.14687 14.1156 6.875 13.8594V12.8906L5.45625 4.375H2.5V2.5H5.84063C6.58125 2.5 7.08437 2.70938 7.60938 3.23125L15.5188 11.1406C16.0437 11.6656 16.25 12.1688 16.25 12.9094V13.8594C16.9781 14.1156 17.5 14.8094 17.5 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var strollerIcon = createIcon("stroller", iconDefinition748);

// src/noticons/src/subtask/default.icon.tsx
import { jsxDEV as jsxDEV751, Fragment as Fragment749 } from "react/jsx-dev-runtime";
var iconDefinition749 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV751(Fragment749, {
    children: /* @__PURE__ */ jsxDEV751("path", {
      d: "M15.9375 11.875H15.625V8.75H10.9375V7.5H11.25C12.9844 7.5 14.0625 6.42188 14.0625 4.6875C14.0625 2.95312 12.9844 1.875 11.25 1.875H8.75C7.01562 1.875 5.9375 2.95312 5.9375 4.6875C5.9375 6.42188 7.01562 7.5 8.75 7.5H9.0625V8.75H4.375V11.875H4.0625C2.32812 11.875 1.25 12.9531 1.25 14.6875C1.25 16.4219 2.32812 17.5 4.0625 17.5H6.5625C8.29688 17.5 9.375 16.4219 9.375 14.6875C9.375 12.9531 8.29688 11.875 6.5625 11.875H6.25V10.625H13.75V11.875H13.4375C11.7031 11.875 10.625 12.9531 10.625 14.6875C10.625 16.4219 11.7031 17.5 13.4375 17.5H15.9375C17.6719 17.5 18.75 16.4219 18.75 14.6875C18.75 12.9531 17.6719 11.875 15.9375 11.875ZM7.8125 4.6875C7.8125 4.10938 8.17188 3.75 8.75 3.75H11.25C11.8281 3.75 12.1875 4.10938 12.1875 4.6875C12.1875 5.26562 11.8281 5.625 11.25 5.625H8.75C8.17188 5.625 7.8125 5.26562 7.8125 4.6875ZM7.5 14.6875C7.5 15.2656 7.14062 15.625 6.5625 15.625H4.0625C3.48438 15.625 3.125 15.2656 3.125 14.6875C3.125 14.1094 3.48438 13.75 4.0625 13.75H6.5625C7.14062 13.75 7.5 14.1094 7.5 14.6875ZM15.9375 15.625H13.4375C12.8594 15.625 12.5 15.2656 12.5 14.6875C12.5 14.1094 12.8594 13.75 13.4375 13.75H15.9375C16.5156 13.75 16.875 14.1094 16.875 14.6875C16.875 15.2656 16.5156 15.625 15.9375 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var subtaskIcon = createIcon("subtask", iconDefinition749);

// src/noticons/src/subtitles/default.icon.tsx
import { jsxDEV as jsxDEV752, Fragment as Fragment750 } from "react/jsx-dev-runtime";
var iconDefinition750 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV752(Fragment750, {
    children: /* @__PURE__ */ jsxDEV752("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.13438 2.5 9.375C2.5 11.5375 3.25 13.2781 4.59375 14.4688L2.5 16.5625L3.125 17.5C4.81875 17.5 6.38438 16.9375 7.64062 15.9875C8.36563 16.1594 9.15312 16.25 10 16.25C14.6281 16.25 17.5 13.6156 17.5 9.375C17.5 5.13438 14.6281 2.5 10 2.5ZM6.25 10.625C5.55938 10.625 5 10.0656 5 9.375C5 8.68437 5.55938 8.125 6.25 8.125C6.94063 8.125 7.5 8.68437 7.5 9.375C7.5 10.0656 6.94063 10.625 6.25 10.625ZM10 10.625C9.30937 10.625 8.75 10.0656 8.75 9.375C8.75 8.68437 9.30937 8.125 10 8.125C10.6906 8.125 11.25 8.68437 11.25 9.375C11.25 10.0656 10.6906 10.625 10 10.625ZM13.75 10.625C13.0594 10.625 12.5 10.0656 12.5 9.375C12.5 8.68437 13.0594 8.125 13.75 8.125C14.4406 8.125 15 8.68437 15 9.375C15 10.0656 14.4406 10.625 13.75 10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var subtitlesIcon = createIcon("subtitles", iconDefinition750);

// src/noticons/src/suit/default.icon.tsx
import { jsxDEV as jsxDEV753, Fragment as Fragment751 } from "react/jsx-dev-runtime";
var iconDefinition751 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV753(Fragment751, {
    children: /* @__PURE__ */ jsxDEV753("path", {
      d: "M16.25 14.6875L19.0625 13.75L15.7406 3.78125C15.4562 2.925 14.8625 2.5 13.9625 2.5H13.125C13.125 2.5 12.4062 1.25 10 1.25C7.59375 1.25 6.875 2.5 6.875 2.5H6.0375C5.13438 2.5 4.54375 2.92813 4.25938 3.78125L0.9375 13.75L3.75 14.6875L5.625 9.0625L6.06563 12.5781L4.6875 16.7094L6.5625 17.3344C8.025 17.8219 9.2375 17.2156 9.725 15.7531L10 14.9281L10.275 15.7531C10.7625 17.2156 11.975 17.8219 13.4375 17.3344L15.3125 16.7094L13.9344 12.5781L14.375 9.0625L16.25 14.6875ZM10 3.125C10.9844 3.125 11.5625 3.49688 11.875 3.80625V3.96875C11.875 4.26875 11.8406 4.475 11.7469 4.75937L10 10L8.25313 4.75937C8.15937 4.475 8.125 4.26875 8.125 3.96875V3.80625C8.4375 3.49688 9.01562 3.125 10 3.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitIcon = createIcon("suit", iconDefinition751);

// src/noticons/src/suitClub/default.icon.tsx
import { jsxDEV as jsxDEV754, Fragment as Fragment752 } from "react/jsx-dev-runtime";
var iconDefinition752 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV754(Fragment752, {
    children: /* @__PURE__ */ jsxDEV754("path", {
      d: "M17.5 10.9375C17.5 13.0094 15.8219 14.6875 13.75 14.6875C12.6281 14.6875 11.625 14.1937 10.9375 13.4125V13.4563C10.9375 14.4031 11.4719 15.2688 12.3187 15.6938L13.4375 16.2531V17.5031H6.5625V16.2531L7.68125 15.6938C8.52812 15.2688 9.0625 14.4031 9.0625 13.4563V13.4125C8.375 14.1937 7.37187 14.6875 6.25 14.6875C4.17812 14.6875 2.5 13.0094 2.5 10.9375C2.5 8.86562 4.17812 7.1875 6.25 7.1875C6.36875 7.1875 6.4875 7.19375 6.60312 7.20625C6.37812 6.725 6.25 6.19063 6.25 5.625C6.25 3.55312 7.92812 1.875 10 1.875C12.0719 1.875 13.75 3.55312 13.75 5.625C13.75 6.19063 13.6219 6.725 13.3969 7.20625C13.5125 7.19687 13.6313 7.1875 13.75 7.1875C15.8219 7.1875 17.5 8.86562 17.5 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitClubIcon = createIcon("suitClub", iconDefinition752);

// src/noticons/src/suitDiamond/default.icon.tsx
import { jsxDEV as jsxDEV755, Fragment as Fragment753 } from "react/jsx-dev-runtime";
var iconDefinition753 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV755(Fragment753, {
    children: /* @__PURE__ */ jsxDEV755("path", {
      d: "M17.5 9.375V10.625L16.1938 11.4281C14.3844 12.5406 12.8906 14.0969 11.85 15.9469L10.625 18.125H9.375L8.15 15.9469C7.10938 14.0969 5.61563 12.5406 3.80625 11.4281L2.5 10.625V9.375L3.80625 8.57188C5.61563 7.45937 7.10938 5.90313 8.15 4.05313L9.375 1.875H10.625L11.85 4.05313C12.8906 5.90313 14.3844 7.45937 16.1938 8.57188L17.5 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitDiamondIcon = createIcon("suitDiamond", iconDefinition753);

// src/noticons/src/suitHeart/default.icon.tsx
import { jsxDEV as jsxDEV756, Fragment as Fragment754 } from "react/jsx-dev-runtime";
var iconDefinition754 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV756(Fragment754, {
    children: /* @__PURE__ */ jsxDEV756("path", {
      d: "M17.5 6.95312C17.5 10.775 12.8125 15.3125 10.625 17.5H9.375C7.1875 15.3125 2.5 10.775 2.5 6.95312C2.5 4.19688 4.2125 2.5 6.32812 2.5C8.06875 2.5 9.53438 3.6625 10 5.25C10.4656 3.65937 11.9312 2.5 13.6719 2.5C15.7875 2.5 17.5 4.19688 17.5 6.95312Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitHeartIcon = createIcon("suitHeart", iconDefinition754);

// src/noticons/src/suitSpade/default.icon.tsx
import { jsxDEV as jsxDEV757, Fragment as Fragment755 } from "react/jsx-dev-runtime";
var iconDefinition755 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV757(Fragment755, {
    children: /* @__PURE__ */ jsxDEV757("path", {
      d: "M17.5 10.9375C17.5 13.0094 15.8219 14.6875 13.75 14.6875C12.6281 14.6875 11.625 14.1937 10.9375 13.4125V13.4563C10.9375 14.4031 11.4719 15.2688 12.3187 15.6938L13.4375 16.2531V17.5031H6.5625V16.2531L7.68125 15.6938C8.52812 15.2688 9.0625 14.4031 9.0625 13.4563V13.4125C8.375 14.1937 7.37187 14.6875 6.25 14.6875C4.17812 14.6875 2.5 13.0094 2.5 10.9375C2.5 7.11563 7.1875 4.0625 9.375 1.875H10.625C12.8125 4.0625 17.5 7.11563 17.5 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitSpadeIcon = createIcon("suitSpade", iconDefinition755);

// src/noticons/src/suitcase/default.icon.tsx
import { jsxDEV as jsxDEV758, Fragment as Fragment756 } from "react/jsx-dev-runtime";
var iconDefinition756 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV758(Fragment756, {
    children: /* @__PURE__ */ jsxDEV758("path", {
      d: "M5 6.25V16.875C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75C2.5 7.20625 3.45625 6.25 5 6.25ZM15 6.25V16.875C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75C17.5 7.20625 16.5437 6.25 15 6.25ZM13.75 5V16.875H6.25V5C6.25 3.45625 7.20625 2.5 8.75 2.5H11.25C12.7937 2.5 13.75 3.45625 13.75 5ZM11.875 5C11.875 4.49063 11.7594 4.375 11.25 4.375H8.75C8.24062 4.375 8.125 4.49063 8.125 5V6.25H11.875V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suitcaseIcon = createIcon("suitcase", iconDefinition756);

// src/noticons/src/sun/default.icon.tsx
import { jsxDEV as jsxDEV759, Fragment as Fragment757 } from "react/jsx-dev-runtime";
var iconDefinition757 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV759(Fragment757, {
    children: /* @__PURE__ */ jsxDEV759("path", {
      d: "M13.75 10C13.75 12.0719 12.0719 13.75 10 13.75C7.92812 13.75 6.25 12.0719 6.25 10C6.25 7.92812 7.92812 6.25 10 6.25C12.0719 6.25 13.75 7.92812 13.75 10ZM10.625 1.875H9.375V5H10.625V1.875ZM9.375 18.125H10.625V15H9.375V18.125ZM6.90625 6.02188L4.69687 3.8125L3.8125 4.69687L6.02188 6.90625L6.90625 6.02188ZM13.0938 13.9781L15.3031 16.1875L16.1875 15.3031L13.9781 13.0938L13.0938 13.9781ZM5 9.375H1.875V10.625H5V9.375ZM15 9.375V10.625H18.125V9.375H15ZM3.8125 15.3031L4.69687 16.1875L6.90625 13.9781L6.02188 13.0938L3.8125 15.3031ZM16.1875 4.69687L15.3031 3.8125L13.0938 6.02188L13.9781 6.90625L16.1875 4.69687Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunIcon = createIcon("sun", iconDefinition757);

// src/noticons/src/sunglasses/default.icon.tsx
import { jsxDEV as jsxDEV760, Fragment as Fragment758 } from "react/jsx-dev-runtime";
var iconDefinition758 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV760(Fragment758, {
    children: /* @__PURE__ */ jsxDEV760("path", {
      d: "M0.625 7.1875V9.0625H1.875L2.22813 11.1844C2.5375 13.0406 3.74375 14.0625 5.625 14.0625C7.50625 14.0625 8.7125 13.0406 9.02188 11.1844L9.27188 9.67812C9.3375 9.28125 9.59688 9.0625 10 9.0625C10.4031 9.0625 10.6625 9.28125 10.7281 9.67812L10.9781 11.1844C11.2875 13.0406 12.4937 14.0625 14.375 14.0625C16.2563 14.0625 17.4625 13.0406 17.7719 11.1844L18.125 9.0625H19.375V7.1875H0.625ZM5.6 12.1875H4.35L5.9125 9.0625H7.1625L5.6 12.1875ZM14.35 12.1875H13.1L14.6625 9.0625H15.9125L14.35 12.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunglassesIcon = createIcon("sunglasses", iconDefinition758);

// src/noticons/src/sunrise/default.icon.tsx
import { jsxDEV as jsxDEV761, Fragment as Fragment759 } from "react/jsx-dev-runtime";
var iconDefinition759 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV761(Fragment759, {
    children: /* @__PURE__ */ jsxDEV761("path", {
      d: "M6.90625 11.647L6.02188 12.5313L3.8125 10.322L4.69687 9.4376L6.90625 11.647ZM1.875 16.2501H5V15.0001H1.875V16.2501ZM15 15.0001V16.2501H18.125V15.0001H15ZM10 11.8751C7.92812 11.8751 6.25 13.5532 6.25 15.6251V16.2501H13.75V15.6251C13.75 13.5532 12.0719 11.8751 10 11.8751ZM15.3031 9.4376L13.0938 11.647L13.9781 12.5313L16.1875 10.322L15.3031 9.4376ZM9.375 4.94697V10.6251H10.625V4.94697L13.1781 7.5001L14.0625 6.61572L10 2.55322L5.9375 6.61572L6.82188 7.5001L9.375 4.94697Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunriseIcon = createIcon("sunrise", iconDefinition759);

// src/noticons/src/sunscreen/default.icon.tsx
import { jsxDEV as jsxDEV762, Fragment as Fragment760 } from "react/jsx-dev-runtime";
var iconDefinition760 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV762(Fragment760, {
    children: /* @__PURE__ */ jsxDEV762("path", {
      d: "M3.125 11.25H0.625V10H3.125V11.25ZM7.5 4.375H6.25V6.875H7.5V4.375ZM2.0125 14.6031L2.89688 15.4875L4.66563 13.7188L3.78125 12.8344L2.0125 14.6031ZM4.66563 7.53125L2.89688 5.7625L2.0125 6.64688L3.78125 8.41563L4.66563 7.53125ZM11.875 16.875H16.25V14.375H11.875V16.875ZM9.375 3.125V4.00313C9.375 5.20312 9.50937 6.025 9.8875 7.16563L11.875 13.125H16.25L18.2375 7.16563C18.6187 6.025 18.75 5.20312 18.75 4.00313V3.125H9.375ZM6.875 8.125C5.49375 8.125 4.375 9.24375 4.375 10.625C4.375 12.0063 5.49375 13.125 6.875 13.125C8.25625 13.125 9.375 12.0063 9.375 10.625C9.375 9.24375 8.25625 8.125 6.875 8.125ZM6.25 16.875H7.5V14.375H6.25V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunscreenIcon = createIcon("sunscreen", iconDefinition760);

// src/noticons/src/sunset/default.icon.tsx
import { jsxDEV as jsxDEV763, Fragment as Fragment761 } from "react/jsx-dev-runtime";
var iconDefinition761 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV763(Fragment761, {
    children: /* @__PURE__ */ jsxDEV763("path", {
      d: "M6.90625 11.6469L6.02188 12.5312L3.8125 10.3219L4.69687 9.4375L6.90625 11.6469ZM1.875 16.25H5V15H1.875V16.25ZM10 11.875C7.92812 11.875 6.25 13.5531 6.25 15.625V16.25H13.75V15.625C13.75 13.5531 12.0719 11.875 10 11.875ZM15 15V16.25H18.125V15H15ZM15.3031 9.4375L13.0938 11.6469L13.9781 12.5312L16.1875 10.3219L15.3031 9.4375ZM14.0625 6.50938L13.1781 5.625L10.625 8.17812V2.5H9.375V8.17812L6.82188 5.625L5.9375 6.50938L10 10.5719L14.0625 6.50938Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var sunsetIcon = createIcon("sunset", iconDefinition761);

// src/noticons/src/suspensionBridge/default.icon.tsx
import { jsxDEV as jsxDEV764, Fragment as Fragment762 } from "react/jsx-dev-runtime";
var iconDefinition762 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV764(Fragment762, {
    children: /* @__PURE__ */ jsxDEV764("path", {
      d: "M20 11.25C20 11.25 16.875 8.125 15.625 3.125H13.75C12.85 6.725 10.9781 9.35313 10 10.5438C9.02188 9.35313 7.15 6.72812 6.25 3.125H4.375C3.125 8.125 0 11.25 0 11.25V13.125H4.375V16.875H6.25V13.125H13.75V16.875H15.625V13.125H20V11.25ZM2.45625 11.25C3.01562 10.525 3.70625 9.5125 4.375 8.2625V11.25H2.45625ZM6.25 11.25V8.2625C6.91563 9.50938 7.60625 10.5188 8.16875 11.25H6.25ZM11.8313 11.25C12.3906 10.5219 13.0844 9.50938 13.75 8.2625V11.25H11.8313ZM15.625 11.25V8.2625C16.2906 9.5125 16.9844 10.525 17.5438 11.25H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var suspensionBridgeIcon = createIcon("suspensionBridge", iconDefinition762);

// src/noticons/src/swapHorizontally/default.icon.tsx
import { jsxDEV as jsxDEV765, Fragment as Fragment763 } from "react/jsx-dev-runtime";
var iconDefinition763 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV765(Fragment763, {
    children: /* @__PURE__ */ jsxDEV765("path", {
      d: "M13.8312 7.1875H3.12499V5.3125H13.8312L12.0312 3.5125L13.3562 2.1875L17.4187 6.25L13.3562 10.3125L12.0312 8.9875L13.8312 7.1875ZM7.96874 11.0125L6.64374 9.6875L2.58124 13.75L6.64374 17.8125L7.96874 16.4875L6.16874 14.6875H16.875V12.8125H6.16874L7.96874 11.0125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var swapHorizontallyIcon = createIcon("swapHorizontally", iconDefinition763);

// src/noticons/src/swapVertically/default.icon.tsx
import { jsxDEV as jsxDEV766, Fragment as Fragment764 } from "react/jsx-dev-runtime";
var iconDefinition764 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV766(Fragment764, {
    children: /* @__PURE__ */ jsxDEV766("path", {
      d: "M17.8125 13.3563L13.75 17.4188L9.6875 13.3563L11.0125 12.0313L12.8125 13.8313V3.12505H14.6875V13.8313L16.4875 12.0313L17.8125 13.3563ZM10.3125 6.6438L6.25 2.5813L2.1875 6.6438L3.5125 7.9688L5.3125 6.1688V16.875H7.1875V6.1688L8.9875 7.9688L10.3125 6.6438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var swapVerticallyIcon = createIcon("swapVertically", iconDefinition764);

// src/noticons/src/sword/default.icon.tsx
import { jsxDEV as jsxDEV767, Fragment as Fragment765 } from "react/jsx-dev-runtime";
var iconDefinition765 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV767(Fragment765, {
    children: /* @__PURE__ */ jsxDEV767("path", {
      d: "M16.6156 5.59375L9.46563 12.7437C10.0094 12.9875 10.6125 13.125 11.25 13.125V15C9.8625 15 8.58437 14.5437 7.54688 13.7781L5.60313 15.7219C5.6125 15.7938 5.625 15.8625 5.625 15.9375C5.625 16.8 4.925 17.5 4.0625 17.5C3.2 17.5 2.5 16.8 2.5 15.9375C2.5 15.075 3.2 14.375 4.0625 14.375C4.1375 14.375 4.20625 14.3875 4.27812 14.3969L6.22187 12.4531C5.45625 11.4156 5 10.1375 5 8.75H6.875C6.875 9.38438 7.0125 9.9875 7.25625 10.5344L14.4062 3.38437L17.5 2.5L16.6156 5.59375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var swordIcon = createIcon("sword", iconDefinition765);

// src/noticons/src/symbol/default.icon.tsx
import { jsxDEV as jsxDEV768, Fragment as Fragment766 } from "react/jsx-dev-runtime";
var iconDefinition766 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV768(Fragment766, {
    children: /* @__PURE__ */ jsxDEV768("path", {
      d: "M12.5 11.25H15V13.75H12.5V11.25ZM8.75 13.75H11.25V11.25H8.75V13.75ZM10.625 10H13.125V7.5H10.625V10ZM5.625 7.5H3.125V10H5.625V7.5ZM10 1.25C6.5 1.25 3.125 2.4125 3.125 4.59375V6.25H7.5V4.0625C7.7625 3.8375 8.42188 3.4375 10 3.4375C11.5781 3.4375 12.2375 3.8375 12.5 4.0625V6.25H16.875V4.59375C16.875 2.39687 13.475 1.25 10 1.25ZM14.375 10H16.875V7.5H14.375V10ZM3.125 17.5H16.875V15H3.125V17.5ZM6.875 10H9.375V7.5H6.875V10ZM5 13.75H7.5V11.25H5V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var symbolIcon = createIcon("symbol", iconDefinition766);

// src/noticons/src/synagogue/default.icon.tsx
import { jsxDEV as jsxDEV769, Fragment as Fragment767 } from "react/jsx-dev-runtime";
var iconDefinition767 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV769(Fragment767, {
    children: /* @__PURE__ */ jsxDEV769("path", {
      d: "M18.75 5.625V16.875H16.25V5.625C16.25 4.85313 16.7281 4.375 17.5 4.375C18.2719 4.375 18.75 4.85313 18.75 5.625ZM2.5 4.375C1.72812 4.375 1.25 4.85313 1.25 5.625V16.875H3.75V5.625C3.75 4.85313 3.27187 4.375 2.5 4.375ZM10 1.875L15 6.875V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H5V6.875L10 1.875ZM10.7219 6.875L10 5.625L9.27812 6.875H7.83437L8.55625 8.125L7.83437 9.375H9.27812L10 10.625L10.7219 9.375H12.1656L11.4437 8.125L12.1656 6.875H10.7219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var synagogueIcon = createIcon("synagogue", iconDefinition767);

// src/noticons/src/sync/default.icon.tsx
import { jsxDEV as jsxDEV770, Fragment as Fragment768 } from "react/jsx-dev-runtime";
var iconDefinition768 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV770(Fragment768, {
    children: /* @__PURE__ */ jsxDEV770("path", {
      d: "M13.5344 13.5344L14.8594 14.8594C13.5156 16.2031 11.7562 16.8719 9.99687 16.8719C8.2375 16.8719 6.47812 16.2 5.13437 14.8594L4.37187 14.0969V16.875H2.49687V10.9375H8.43437V12.8125H5.7375L6.45937 13.5344C7.43437 14.5094 8.71562 15 9.99375 15C11.2719 15 12.5531 14.5125 13.5281 13.5344H13.5344ZM15.625 3.125V5.90312L14.8625 5.14063C13.5187 3.79688 11.7594 3.12813 10 3.12813C8.24062 3.12813 6.48125 3.8 5.1375 5.14063L6.4625 6.46563C7.4375 5.49063 8.71875 5 9.99687 5C11.275 5 12.5562 5.4875 13.5312 6.46563L14.2531 7.1875H11.5562V9.0625H17.4937V3.125H15.6187H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var syncIcon = createIcon("sync", iconDefinition768);

// src/noticons/src/syncReverse/default.icon.tsx
import { jsxDEV as jsxDEV771, Fragment as Fragment769 } from "react/jsx-dev-runtime";
var iconDefinition769 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV771(Fragment769, {
    children: /* @__PURE__ */ jsxDEV771("path", {
      d: "M8.4375 9.0625H2.5V3.125H4.375V5.90312L5.1375 5.14063C6.48125 3.79688 8.24062 3.12813 10 3.12813C11.7594 3.12813 13.5188 3.8 14.8625 5.14063L13.5375 6.46563C12.5625 5.49063 11.2812 5 10.0031 5C8.725 5 7.44375 5.4875 6.46875 6.46563L5.74687 7.1875H8.44375V9.0625H8.4375ZM11.5625 10.9375V12.8125H14.2594L13.5375 13.5344C12.5625 14.5094 11.2812 15 10.0031 15C8.725 15 7.44375 14.5125 6.46875 13.5344L5.14375 14.8594C6.4875 16.2031 8.24688 16.8719 10.0063 16.8719C11.7656 16.8719 13.525 16.2 14.8688 14.8594L15.6313 14.0969V16.875H17.5063V10.9375H11.5688H11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var syncReverseIcon = createIcon("syncReverse", iconDefinition769);

// src/noticons/src/syringe/default.icon.tsx
import { jsxDEV as jsxDEV772, Fragment as Fragment770 } from "react/jsx-dev-runtime";
var iconDefinition770 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV772(Fragment770, {
    children: /* @__PURE__ */ jsxDEV772("path", {
      d: "M15 8.75L9.4125 14.3375L10.625 15.55L9.3 16.875L7.31875 14.8938L6.14375 16.0687L7.5 17.425L6.175 18.75L1.25 13.825L2.575 12.5L3.93125 13.8562L5.10625 12.6813L3.125 10.7L4.45 9.375L5.6625 10.5875L7.05625 9.19375L8.38125 10.5188L9.26562 9.63438L7.94063 8.30937L9.55625 6.69375L10.8813 8.01875L11.7656 7.13438L10.4406 5.80938L11.25 5H14.1156L16.6156 2.5L17.5 3.38437L15 5.88438V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var syringeIcon = createIcon("syringe", iconDefinition770);

// src/noticons/src/tSquare/default.icon.tsx
import { jsxDEV as jsxDEV773, Fragment as Fragment771 } from "react/jsx-dev-runtime";
var iconDefinition771 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV773(Fragment771, {
    children: /* @__PURE__ */ jsxDEV773("path", {
      d: "M17.5 6.875H12.5V18.125H7.5V15.625H10V14.375H7.5V11.875H10V10.625H7.5V8.125H10V6.875H2.5V5L7.5 2.5H12.5L17.5 5V6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tSquareIcon = createIcon("tSquare", iconDefinition771);

// src/noticons/src/table/default.icon.tsx
import { jsxDEV as jsxDEV774, Fragment as Fragment772 } from "react/jsx-dev-runtime";
var iconDefinition772 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV774(Fragment772, {
    children: /* @__PURE__ */ jsxDEV774("path", {
      d: "M2.5 3.125V16.875H17.5V3.125H2.5ZM9.0625 15H4.375V12.5H9.0625V15ZM9.0625 10.625H4.375V8.125H9.0625V10.625ZM15.625 15H10.9375V12.5H15.625V15ZM15.625 10.625H10.9375V8.125H15.625V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tableIcon = createIcon("table", iconDefinition772);

// src/noticons/src/tablet/default.icon.tsx
import { jsxDEV as jsxDEV775, Fragment as Fragment773 } from "react/jsx-dev-runtime";
var iconDefinition773 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV775(Fragment773, {
    children: /* @__PURE__ */ jsxDEV775("path", {
      d: "M13.75 2.5H6.25C4.70625 2.5 3.75 3.45625 3.75 5V15C3.75 16.5437 4.70625 17.5 6.25 17.5H13.75C15.2937 17.5 16.25 16.5437 16.25 15V5C16.25 3.45625 15.2937 2.5 13.75 2.5ZM11.875 15.625H8.125C7.74062 15.625 7.5 15.3844 7.5 15C7.5 14.6156 7.74062 14.375 8.125 14.375H11.875C12.2594 14.375 12.5 14.6156 12.5 15C12.5 15.3844 12.2594 15.625 11.875 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tabletIcon = createIcon("tablet", iconDefinition773);

// src/noticons/src/tabs/default.icon.tsx
import { jsxDEV as jsxDEV776, Fragment as Fragment774 } from "react/jsx-dev-runtime";
var iconDefinition774 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV776(Fragment774, {
    children: /* @__PURE__ */ jsxDEV776("path", {
      d: "M17.5 2.5V12.5H14.375V5.625H7.5V2.5H17.5ZM3.125 16.875H13.125V6.875H3.125V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tabsIcon = createIcon("tabs", iconDefinition774);

// src/noticons/src/tabsUser/default.icon.tsx
import { jsxDEV as jsxDEV777, Fragment as Fragment775 } from "react/jsx-dev-runtime";
var iconDefinition775 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV777(Fragment775, {
    children: /* @__PURE__ */ jsxDEV777("path", {
      d: "M17.5 2.5V12.5H14.375V5.625H7.5V2.5H17.5ZM3.125 6.875H13.125V16.875H3.125V6.875ZM5.9375 10.3125C5.9375 11.6625 6.775 12.5 8.125 12.5C9.475 12.5 10.3125 11.6625 10.3125 10.3125C10.3125 8.9625 9.475 8.125 8.125 8.125C6.775 8.125 5.9375 8.9625 5.9375 10.3125ZM4.42187 15.625H11.825C11.2312 14.2437 9.925 13.4375 8.12187 13.4375C6.31875 13.4375 5.01563 14.2437 4.41875 15.625H4.42187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tabsUserIcon = createIcon("tabsUser", iconDefinition775);

// src/noticons/src/tag/default.icon.tsx
import { jsxDEV as jsxDEV778, Fragment as Fragment776 } from "react/jsx-dev-runtime";
var iconDefinition776 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV778(Fragment776, {
    children: /* @__PURE__ */ jsxDEV778("path", {
      d: "M10.625 3.125H3.125V10.625L10.625 18.125L18.125 10.625L10.625 3.125ZM6.5625 7.5C6.04375 7.5 5.625 7.08125 5.625 6.5625C5.625 6.04375 6.04375 5.625 6.5625 5.625C7.08125 5.625 7.5 6.04375 7.5 6.5625C7.5 7.08125 7.08125 7.5 6.5625 7.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tagIcon = createIcon("tag", iconDefinition776);

// src/noticons/src/takeoutBox/default.icon.tsx
import { jsxDEV as jsxDEV779, Fragment as Fragment777 } from "react/jsx-dev-runtime";
var iconDefinition777 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV779(Fragment777, {
    children: /* @__PURE__ */ jsxDEV779("path", {
      d: "M16.2875 5L15.35 8.75H13.75V4.6875L11.5625 2.5H8.4375L6.25 4.6875V8.75H4.65L3.7125 5L2.5 5.30312L5.55 17.5H14.4531L17.5031 5.30312L16.2906 5H16.2875ZM12.8781 15.625L11.9 15.1375C11.3094 14.8438 10.6594 14.6875 10 14.6875C9.34062 14.6875 8.69063 14.8406 8.1 15.1375L7.12188 15.625L6.5625 14.5062L7.71875 13.9281C8.26562 13.6531 8.55 13.3 8.7 12.7063L9.37813 10H10.6281L11.3062 12.7063C11.4531 13.3 11.7406 13.6562 12.2875 13.9281L13.4438 14.5062L12.8844 15.625H12.8781Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var takeoutBoxIcon = createIcon("takeoutBox", iconDefinition777);

// src/noticons/src/tampon/default.icon.tsx
import { jsxDEV as jsxDEV780, Fragment as Fragment778 } from "react/jsx-dev-runtime";
var iconDefinition778 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV780(Fragment778, {
    children: /* @__PURE__ */ jsxDEV780("path", {
      d: "M17.5 5.40937C17.5 6.09687 17.1937 6.78438 16.5781 7.39687L10.85 13.125L9.525 11.8L9.00312 12.3219C8.28437 13.0406 7.325 13.4375 6.30938 13.4375C5.29375 13.4375 4.375 14.3062 4.375 15.3719C4.375 15.8812 4.58125 16.3813 4.94063 16.7406L5 16.8L3.675 18.125L3.61562 18.0656C2.89687 17.3469 2.5 16.3906 2.5 15.3719C2.5 13.2719 4.20938 11.5625 6.30938 11.5625C6.825 11.5625 7.3125 11.3625 7.67812 10.9969L8.2 10.475L6.875 9.15L12.6031 3.42187C13.2156 2.80937 13.9031 2.5 14.5906 2.5C15.2781 2.5 15.9656 2.80625 16.5781 3.42187C17.1906 4.03437 17.5 4.72187 17.5 5.40937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tamponIcon = createIcon("tampon", iconDefinition778);

// src/noticons/src/target/default.icon.tsx
import { jsxDEV as jsxDEV781, Fragment as Fragment779 } from "react/jsx-dev-runtime";
var iconDefinition779 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV781(Fragment779, {
    children: /* @__PURE__ */ jsxDEV781("path", {
      d: "M11.25 10C11.25 10.6906 10.6906 11.25 10 11.25C9.30937 11.25 8.75 10.6906 8.75 10C8.75 9.30937 9.30937 8.75 10 8.75C10.6906 8.75 11.25 9.30937 11.25 10ZM17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 5.85938 5.85938 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10ZM15.625 10C15.625 6.89375 13.1062 4.375 10 4.375C6.89375 4.375 4.375 6.89375 4.375 10C4.375 13.1062 6.89375 15.625 10 15.625C13.1062 15.625 15.625 13.1062 15.625 10ZM14.375 10C14.375 12.4156 12.4156 14.375 10 14.375C7.58437 14.375 5.625 12.4156 5.625 10C5.625 7.58437 7.58437 5.625 10 5.625C12.4156 5.625 14.375 7.58437 14.375 10ZM12.5 10C12.5 8.61875 11.3813 7.5 10 7.5C8.61875 7.5 7.5 8.61875 7.5 10C7.5 11.3813 8.61875 12.5 10 12.5C11.3813 12.5 12.5 11.3813 12.5 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var targetIcon = createIcon("target", iconDefinition779);

// src/noticons/src/taurus/default.icon.tsx
import { jsxDEV as jsxDEV782, Fragment as Fragment780 } from "react/jsx-dev-runtime";
var iconDefinition780 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV782(Fragment780, {
    children: /* @__PURE__ */ jsxDEV782("path", {
      d: "M15.7125 2.5C14.5594 2.5 13.4906 3.07187 12.8531 4.03125L11.8375 5.55625C11.5469 5.99063 11.0625 6.25313 10.5375 6.25313H9.4625C8.9375 6.25313 8.45313 5.99375 8.1625 5.55625L7.14688 4.03125C6.50938 3.07187 5.4375 2.5 4.2875 2.5H2.5V4.375H4.2875C4.8125 4.375 5.29687 4.63437 5.5875 5.07187L6.60312 6.59688C6.72812 6.78438 6.875 6.95312 7.03125 7.10938C5.44062 8.10313 4.37813 9.86562 4.37813 11.8781C4.37813 14.9812 6.90312 17.5031 10.0031 17.5031C13.1031 17.5031 15.6281 14.9812 15.6281 11.8781C15.6281 9.86875 14.5656 8.10625 12.975 7.10938C13.1313 6.95312 13.2781 6.78438 13.4031 6.59688L14.4187 5.07187C14.7094 4.6375 15.1937 4.375 15.7188 4.375H17.5063V2.5H15.7188H15.7125ZM10 15.625C7.93125 15.625 6.25 13.9438 6.25 11.875C6.25 9.80625 7.93125 8.125 10 8.125C12.0688 8.125 13.75 9.80625 13.75 11.875C13.75 13.9438 12.0688 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var taurusIcon = createIcon("taurus", iconDefinition780);

// src/noticons/src/taxi/default.icon.tsx
import { jsxDEV as jsxDEV783, Fragment as Fragment781 } from "react/jsx-dev-runtime";
var iconDefinition781 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV783(Fragment781, {
    children: /* @__PURE__ */ jsxDEV783("path", {
      d: "M16.4062 8.125L15.3125 3.75H12.5V1.875H7.5V3.75H4.6875L3.59375 8.125H1.875V10H3.125V15H4.375V16.875H6.875V15H13.125V16.875H15.625V15H16.875V10H18.125V8.125H16.4062ZM6.15 5.625H13.8469L14.6281 8.75H5.36875L6.15 5.625ZM6.25 12.8125C5.73125 12.8125 5.3125 12.3938 5.3125 11.875C5.3125 11.3562 5.73125 10.9375 6.25 10.9375C6.76875 10.9375 7.1875 11.3562 7.1875 11.875C7.1875 12.3938 6.76875 12.8125 6.25 12.8125ZM12.8125 11.875C12.8125 11.3562 13.2312 10.9375 13.75 10.9375C14.2688 10.9375 14.6875 11.3562 14.6875 11.875C14.6875 12.3938 14.2688 12.8125 13.75 12.8125C13.2312 12.8125 12.8125 12.3938 12.8125 11.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var taxiIcon = createIcon("taxi", iconDefinition781);

// src/noticons/src/teapot/default.icon.tsx
import { jsxDEV as jsxDEV784, Fragment as Fragment782 } from "react/jsx-dev-runtime";
var iconDefinition782 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV784(Fragment782, {
    children: /* @__PURE__ */ jsxDEV784("path", {
      d: "M16.3 9.7125L16.0281 10.2531C15.5937 8.64063 14.5344 7.2875 13.1219 6.46875V4.375H10.9344V2.5H9.05937V4.375H6.87187V6.46875C6.54062 6.65938 6.23124 6.87812 5.94062 7.125C5.25624 5.85625 4.18437 5.625 3.58749 5.625C2.39062 5.625 0.618744 6.57188 0.618744 8.36563C0.618744 8.80938 0.731244 9.275 0.962494 9.74062L4.21562 16.25H15.1187L17.9687 10.55C18.2844 9.92187 18.6625 9.6875 19.3656 9.6875V7.8125C17.9562 7.8125 16.9219 8.45312 16.2906 9.7125H16.3ZM3.79062 11.1875L2.64687 8.90312C2.54999 8.70937 2.49999 8.53437 2.49999 8.37812C2.49999 7.82812 3.21249 7.5 3.59374 7.5C3.83749 7.5 4.10312 7.625 4.32187 8.0625L4.63124 8.68125C4.18437 9.43125 3.88749 10.2781 3.78749 11.1844L3.79062 11.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var teapotIcon = createIcon("teapot", iconDefinition782);

// src/noticons/src/telephone/default.icon.tsx
import { jsxDEV as jsxDEV785, Fragment as Fragment783 } from "react/jsx-dev-runtime";
var iconDefinition783 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV785(Fragment783, {
    children: /* @__PURE__ */ jsxDEV785("path", {
      d: "M11.875 12.5C11.875 13.3625 11.0344 14.0625 10 14.0625C8.96562 14.0625 8.125 13.3625 8.125 12.5C8.125 11.6375 8.96562 10.9375 10 10.9375C11.0344 10.9375 11.875 11.6375 11.875 12.5ZM10 2.5C6.09062 2.5 1.875 3.52188 1.875 6.15625V7.5H6.25V5.625C6.60313 5.32188 8.0375 4.6875 10 4.6875C11.9625 4.6875 13.3969 5.32188 13.75 5.625V7.5H18.125V6.15625C18.125 3.50313 13.8813 2.5 10 2.5ZM15 8.75L17.5 16.25V17.5H2.5V16.25L5 8.75H7.5V6.875H12.5V8.75H15ZM13.75 12.5C13.75 10.775 12.0719 9.375 10 9.375C7.92812 9.375 6.25 10.775 6.25 12.5C6.25 14.225 7.92812 15.625 10 15.625C12.0719 15.625 13.75 14.225 13.75 12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var telephoneIcon = createIcon("telephone", iconDefinition783);

// src/noticons/src/telescope/default.icon.tsx
import { jsxDEV as jsxDEV786, Fragment as Fragment784 } from "react/jsx-dev-runtime";
var iconDefinition784 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV786(Fragment784, {
    children: /* @__PURE__ */ jsxDEV786("path", {
      d: "M10.9375 12.5407L17.5 15.8219L16.6625 17.5L10.9375 14.6375V17.5H9.0625V14.6375L3.3375 17.5L2.5 15.8219L9.0625 12.5407V8.82505L6.67813 10.0188L6.25938 9.1813L3.34062 10.6407L2.50313 8.96255L5.42188 7.50317L5.00313 6.66567L11.6719 3.3313L11.2531 2.4938L14.9875 0.628174L17.5031 5.65942L13.7688 7.52505L13.35 6.68755L10.9406 7.89067V12.5438L10.9375 12.5407Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var telescopeIcon = createIcon("telescope", iconDefinition784);

// src/noticons/src/temperatureCool/default.icon.tsx
import { jsxDEV as jsxDEV787, Fragment as Fragment785 } from "react/jsx-dev-runtime";
var iconDefinition785 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV787(Fragment785, {
    children: [
      /* @__PURE__ */ jsxDEV787("g", {
        "clip-path": "url(#clip0_1501_15714)",
        children: /* @__PURE__ */ jsxDEV787("path", {
          d: "M7.8125 11.65V3.4375C7.8125 1.88438 6.55312 0.625 5 0.625C3.44688 0.625 2.1875 1.88438 2.1875 3.4375V11.65C1.23438 12.4531 0.625 13.6531 0.625 15C0.625 17.4156 2.58438 19.375 5 19.375C7.41563 19.375 9.375 17.4156 9.375 15C9.375 13.6562 8.76562 12.4531 7.8125 11.65ZM2.5 15C2.5 13.95 3.14687 13.0531 4.0625 12.6844V3.4375C4.0625 2.91875 4.48125 2.5 5 2.5C5.51875 2.5 5.9375 2.91875 5.9375 3.4375V12.6844C6.85313 13.0562 7.5 13.9531 7.5 15H2.5ZM19.0031 9.34062L17.2219 9.81875L17.7 11.6L16.4937 11.925L15.9219 9.79062L14.3781 8.9V10.6844L15.9406 12.2469L15.0562 13.1313L13.7531 11.8281L12.45 13.1313L11.5656 12.2469L13.1281 10.6844V8.9L11.5844 9.79062L11.0125 11.925L9.80625 11.6L10.2844 9.81875L8.50312 9.34062L8.82812 8.13438L10.9625 8.70625L12.5063 7.81563L10.9625 6.925L8.82812 7.49687L8.50312 6.29062L10.2844 5.8125L9.80625 4.03125L11.0125 3.70625L11.5844 5.84063L13.1281 6.73125V4.94688L11.5656 3.38438L12.45 2.5L13.7531 3.80312L15.0562 2.5L15.9406 3.38438L14.3781 4.94688V6.73125L15.9219 5.84063L16.4937 3.70625L17.7 4.03125L17.2219 5.8125L19.0031 6.29062L18.6781 7.49687L16.5437 6.925L15 7.81563L16.5437 8.70625L18.6781 8.13438L19.0031 9.34062Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV787("defs", {
        children: /* @__PURE__ */ jsxDEV787("clipPath", {
          id: "clip0_1501_15714",
          children: /* @__PURE__ */ jsxDEV787("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var temperatureCoolIcon = createIcon("temperatureCool", iconDefinition785);

// src/noticons/src/temperatureWarm/default.icon.tsx
import { jsxDEV as jsxDEV788, Fragment as Fragment786 } from "react/jsx-dev-runtime";
var iconDefinition786 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV788(Fragment786, {
    children: [
      /* @__PURE__ */ jsxDEV788("g", {
        "clip-path": "url(#clip0_1501_15715)",
        children: /* @__PURE__ */ jsxDEV788("path", {
          d: "M18.1219 4.375L14.8438 6.55937V2.03125C12.2563 2.03125 10.1562 4.13125 10.1562 6.71875C10.1562 7.20937 10.2312 7.68125 10.3719 8.125H8.75C8.75 11.2312 11.2688 13.75 14.375 13.75C17.4813 13.75 20 11.2312 20 8.125C20 6.59062 19.2625 5.23125 18.1219 4.375ZM14.375 12.3438C13.3406 12.3438 12.5 11.5031 12.5 10.4688C12.5 9.43437 13.3406 8.59375 14.375 8.59375V10.4688L15.9344 9.42813C16.1344 9.725 16.25 10.0844 16.25 10.4688C16.25 11.5031 15.4094 12.3438 14.375 12.3438ZM7.8125 11.65V3.4375C7.8125 1.88438 6.55312 0.625 5 0.625C3.44688 0.625 2.1875 1.88438 2.1875 3.4375V11.65C1.23438 12.4531 0.625 13.6531 0.625 15C0.625 17.4156 2.58438 19.375 5 19.375C7.41563 19.375 9.375 17.4156 9.375 15C9.375 13.6562 8.76562 12.4531 7.8125 11.65ZM5.9375 6.875H4.0625V3.4375C4.0625 2.91875 4.48125 2.5 5 2.5C5.51875 2.5 5.9375 2.91875 5.9375 3.4375V6.875Z"
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV788("defs", {
        children: /* @__PURE__ */ jsxDEV788("clipPath", {
          id: "clip0_1501_15715",
          children: /* @__PURE__ */ jsxDEV788("rect", {
            width: "20",
            height: "20"
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var temperatureWarmIcon = createIcon("temperatureWarm", iconDefinition786);

// src/noticons/src/temple/default.icon.tsx
import { jsxDEV as jsxDEV789, Fragment as Fragment787 } from "react/jsx-dev-runtime";
var iconDefinition787 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV789(Fragment787, {
    children: /* @__PURE__ */ jsxDEV789("path", {
      d: "M16.25 10.625H18.125V12.5H16.25V16.875H11.875V12.5H8.125V16.875H3.75V12.5H1.875V10.625H3.75V8.125C2.01875 8.125 0.803125 7.86875 0 7.1875L0.625 5.9375C0.625 5.9375 1.1125 6.25 1.71875 6.25C3.125 6.25 3.75 5.09375 3.75 3.125H16.25C16.25 5.09375 16.875 6.25 18.2812 6.25C18.8875 6.25 19.375 5.9375 19.375 5.9375L20 7.1875C19.1969 7.86875 17.9844 8.125 16.25 8.125V10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var templeIcon = createIcon("temple", iconDefinition787);

// src/noticons/src/theatre/default.icon.tsx
import { jsxDEV as jsxDEV790, Fragment as Fragment788 } from "react/jsx-dev-runtime";
var iconDefinition788 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV790(Fragment788, {
    children: /* @__PURE__ */ jsxDEV790("path", {
      d: "M14.375 2.5C14.375 2.5 13.2375 4.375 10 4.375C6.7625 4.375 5.625 2.5 5.625 2.5H3.75V11.9094C3.75 14.025 4.62187 15.4344 6.5125 16.3812L10 18.125L13.4875 16.3812C15.3813 15.4344 16.25 14.025 16.25 11.9094V2.5H14.375ZM6.25 9.44375V9.0625C6.25 8.09688 6.72813 7.5 7.5 7.5C8.27187 7.5 8.75 8.09688 8.75 9.0625V9.44375H6.25ZM10 14.6875C8.1 14.6875 6.5625 13.5688 6.5625 12.1875H13.4375C13.4375 13.5688 11.9 14.6875 10 14.6875ZM13.75 9.44375H11.25V9.0625C11.25 8.09688 11.7281 7.5 12.5 7.5C13.2719 7.5 13.75 8.09688 13.75 9.0625V9.44375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var theatreIcon = createIcon("theatre", iconDefinition788);

// src/noticons/src/thinking/default.icon.tsx
import { jsxDEV as jsxDEV791, Fragment as Fragment789 } from "react/jsx-dev-runtime";
var iconDefinition789 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV791(Fragment789, {
    children: /* @__PURE__ */ jsxDEV791("path", {
      d: "M5.3125 16.0938C5.3125 16.8719 4.68438 17.5 3.90625 17.5C3.12812 17.5 2.5 16.8719 2.5 16.0938C2.5 15.3156 3.12812 14.6875 3.90625 14.6875C4.68438 14.6875 5.3125 15.3156 5.3125 16.0938ZM18.125 11.25C18.125 13.6656 16.1656 15.625 13.75 15.625C13.4375 15.625 13.1344 15.5906 12.8406 15.5281C12.0437 16.3562 10.9281 16.875 9.6875 16.875C7.70312 16.875 6.03125 15.5531 5.49375 13.7437C3.48438 13.675 1.875 12.0281 1.875 10C1.875 8.48125 2.77813 7.17812 4.07812 6.5875C4.22813 3.95937 6.4 1.875 9.0625 1.875C10.4469 1.875 11.6969 2.4375 12.6031 3.34375C12.9594 3.20312 13.3438 3.125 13.75 3.125C15.475 3.125 16.875 4.525 16.875 6.25C16.875 6.82188 16.7188 7.35313 16.4531 7.8125C17.4688 8.6125 18.125 9.85313 18.125 11.25ZM7.5 9.375C7.5 8.68437 6.94063 8.125 6.25 8.125C5.55938 8.125 5 8.68437 5 9.375C5 10.0656 5.55938 10.625 6.25 10.625C6.94063 10.625 7.5 10.0656 7.5 9.375ZM11.25 9.375C11.25 8.68437 10.6906 8.125 10 8.125C9.30937 8.125 8.75 8.68437 8.75 9.375C8.75 10.0656 9.30937 10.625 10 10.625C10.6906 10.625 11.25 10.0656 11.25 9.375ZM15 9.375C15 8.68437 14.4406 8.125 13.75 8.125C13.0594 8.125 12.5 8.68437 12.5 9.375C12.5 10.0656 13.0594 10.625 13.75 10.625C14.4406 10.625 15 10.0656 15 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thinkingIcon = createIcon("thinking", iconDefinition789);

// src/noticons/src/thought/default.icon.tsx
import { jsxDEV as jsxDEV792, Fragment as Fragment790 } from "react/jsx-dev-runtime";
var iconDefinition790 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV792(Fragment790, {
    children: /* @__PURE__ */ jsxDEV792("path", {
      d: "M18.125 11.25C18.125 13.6656 16.1656 15.625 13.75 15.625C13.4375 15.625 13.1344 15.5906 12.8406 15.5281C12.0437 16.3562 10.9281 16.875 9.6875 16.875C7.70312 16.875 6.03125 15.5531 5.49375 13.7437C3.48438 13.675 1.875 12.0281 1.875 10C1.875 8.48125 2.77813 7.17812 4.07812 6.5875C4.22813 3.95937 6.4 1.875 9.0625 1.875C10.4469 1.875 11.6969 2.4375 12.6031 3.34375C12.9594 3.20312 13.3438 3.125 13.75 3.125C15.475 3.125 16.875 4.525 16.875 6.25C16.875 6.82188 16.7188 7.35313 16.4531 7.8125C17.4688 8.6125 18.125 9.85313 18.125 11.25ZM3.90625 14.6875C3.12812 14.6875 2.5 15.3156 2.5 16.0938C2.5 16.8719 3.12812 17.5 3.90625 17.5C4.68438 17.5 5.3125 16.8719 5.3125 16.0938C5.3125 15.3156 4.68438 14.6875 3.90625 14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thoughtIcon = createIcon("thought", iconDefinition790);

// src/noticons/src/thoughtAlert/default.icon.tsx
import { jsxDEV as jsxDEV793, Fragment as Fragment791 } from "react/jsx-dev-runtime";
var iconDefinition791 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV793(Fragment791, {
    children: /* @__PURE__ */ jsxDEV793("path", {
      d: "M5.3125 16.0938C5.3125 16.8719 4.68438 17.5 3.90625 17.5C3.12812 17.5 2.5 16.8719 2.5 16.0938C2.5 15.3156 3.12812 14.6875 3.90625 14.6875C4.68438 14.6875 5.3125 15.3156 5.3125 16.0938ZM18.125 11.25C18.125 13.6656 16.1656 15.625 13.75 15.625C13.4375 15.625 13.1344 15.5906 12.8406 15.5281C12.0437 16.3562 10.9281 16.875 9.6875 16.875C7.70312 16.875 6.03125 15.5531 5.49375 13.7437C3.48438 13.675 1.875 12.0281 1.875 10C1.875 8.48125 2.77813 7.17812 4.07812 6.5875C4.22813 3.95937 6.4 1.875 9.0625 1.875C10.4469 1.875 11.6969 2.4375 12.6031 3.34375C12.9594 3.20312 13.3438 3.125 13.75 3.125C15.475 3.125 16.875 4.525 16.875 6.25C16.875 6.82188 16.7188 7.35313 16.4531 7.8125C17.4688 8.6125 18.125 9.85313 18.125 11.25ZM11.25 12.1875H8.75V14.0625H11.25V12.1875ZM11.25 4.6875H8.75V8.4375L9.375 10.9375H10.625L11.25 8.4375V4.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thoughtAlertIcon = createIcon("thoughtAlert", iconDefinition791);

// src/noticons/src/thoughtDialogue/default.icon.tsx
import { jsxDEV as jsxDEV794, Fragment as Fragment792 } from "react/jsx-dev-runtime";
var iconDefinition792 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV794(Fragment792, {
    children: /* @__PURE__ */ jsxDEV794("path", {
      d: "M5.3125 16.0938C5.3125 16.8719 4.68438 17.5 3.90625 17.5C3.12812 17.5 2.5 16.8719 2.5 16.0938C2.5 15.3156 3.12812 14.6875 3.90625 14.6875C4.68438 14.6875 5.3125 15.3156 5.3125 16.0938ZM18.125 11.25C18.125 13.6656 16.1656 15.625 13.75 15.625C13.4375 15.625 13.1344 15.5906 12.8406 15.5281C12.0437 16.3562 10.9281 16.875 9.6875 16.875C7.70312 16.875 6.03125 15.5531 5.49375 13.7437C3.48438 13.675 1.875 12.0281 1.875 10C1.875 8.48125 2.77813 7.17812 4.07812 6.5875C4.22813 3.95937 6.4 1.875 9.0625 1.875C10.4469 1.875 11.6969 2.4375 12.6031 3.34375C12.9594 3.20312 13.3438 3.125 13.75 3.125C15.475 3.125 16.875 4.525 16.875 6.25C16.875 6.82188 16.7188 7.35313 16.4531 7.8125C17.4688 8.6125 18.125 9.85313 18.125 11.25ZM11.25 12.1875H8.75V14.0625H11.25V12.1875ZM13.4375 7.65625C13.4375 5.9 12.1219 4.6875 10 4.6875C7.87813 4.6875 6.5625 5.9 6.5625 7.8125H8.4375C8.4375 6.9125 8.97188 6.5625 9.92188 6.5625C10.8719 6.5625 11.4062 6.9125 11.4062 7.65625C11.4062 8.80937 9.0625 8.75 9.0625 10.9375H10.9375C10.9375 9.78438 13.4375 9.84375 13.4375 7.65625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thoughtDialogueIcon = createIcon("thoughtDialogue", iconDefinition792);

// src/noticons/src/throat/default.icon.tsx
import { jsxDEV as jsxDEV795, Fragment as Fragment793 } from "react/jsx-dev-runtime";
var iconDefinition793 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV795(Fragment793, {
    children: /* @__PURE__ */ jsxDEV795("path", {
      d: "M11.0125 10.0625L14.9281 11.0406L14.8219 11.6813C14.7344 12.1969 14.3969 12.4969 13.9313 12.4969C13.8375 12.4969 13.7375 12.4844 13.6344 12.4594L11.875 12.0187V13.1219L13.4719 16.3125C13.6563 16.6813 13.75 17.0844 13.75 17.4969H10.625V10.3625C10.625 10.1594 10.8156 10.0094 11.0125 10.0594V10.0625ZM16.1469 8.95L14.9875 7.40313C14.9906 7.33125 14.9969 7.25938 14.9969 7.1875C14.9969 4.6 12.8969 2.5 10.3094 2.5C7.72189 2.5 5.62189 4.6 5.62189 7.1875C5.62189 8.98438 6.63439 10.5469 8.12189 11.3312V13.4375C6.24689 14.375 4.99689 15.7937 4.99689 17.5H9.37189V10.1188C9.37189 9.3625 9.98439 8.75 10.7406 8.75C10.8531 8.75 10.9625 8.7625 11.0719 8.79062L15.1313 9.80625L15.9094 9.6125C16.125 9.55938 16.2438 9.40625 16.2438 9.23125C16.2438 9.14063 16.2125 9.04375 16.1438 8.95312L16.1469 8.95Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var throatIcon = createIcon("throat", iconDefinition793);

// src/noticons/src/thumbsDown/default.icon.tsx
import { jsxDEV as jsxDEV796, Fragment as Fragment794 } from "react/jsx-dev-runtime";
var iconDefinition794 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV796(Fragment794, {
    children: /* @__PURE__ */ jsxDEV796("path", {
      d: "M16.5469 10.125C16.7563 10.3656 16.875 10.6906 16.875 11.0938C16.875 11.9625 16.3375 12.5 15.4688 12.5H10V16.25C10 17.4062 9.28125 18.125 8.125 18.125H7.5V15L5.3125 10.625H3.125V4.375H5L6.44375 3.65312C7.21875 3.26562 7.8125 3.125 8.68125 3.125H13.75C14.6187 3.125 15.1562 3.6625 15.1562 4.53125C15.1562 4.8375 15.0875 5.09687 14.9625 5.3125H15.1562C16.025 5.3125 16.5625 5.85 16.5625 6.71875C16.5625 7.06562 16.4719 7.35625 16.3156 7.58438C16.8625 7.76562 17.1875 8.23438 17.1875 8.90625C17.1875 9.475 16.9531 9.9 16.5469 10.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thumbsDownIcon = createIcon("thumbsDown", iconDefinition794);

// src/noticons/src/thumbsUp/default.icon.tsx
import { jsxDEV as jsxDEV797, Fragment as Fragment795 } from "react/jsx-dev-runtime";
var iconDefinition795 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV797(Fragment795, {
    children: /* @__PURE__ */ jsxDEV797("path", {
      d: "M16.3156 12.4156C16.475 12.6438 16.5625 12.9344 16.5625 13.2812C16.5625 14.15 16.025 14.6875 15.1562 14.6875H14.9625C15.0875 14.9031 15.1562 15.1625 15.1562 15.4688C15.1562 16.3375 14.6187 16.875 13.75 16.875H8.68125C7.8125 16.875 7.22188 16.7344 6.44375 16.3469L5 15.625H3.125V9.375H5.3125L7.5 5V1.875H8.125C9.28125 1.875 10 2.59375 10 3.75V7.5H15.4688C16.3375 7.5 16.875 8.0375 16.875 8.90625C16.875 9.30625 16.7563 9.63438 16.5469 9.875C16.9531 10.1031 17.1875 10.525 17.1875 11.0938C17.1875 11.7656 16.8625 12.2344 16.3156 12.4156Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var thumbsUpIcon = createIcon("thumbsUp", iconDefinition795);

// src/noticons/src/ticket/default.icon.tsx
import { jsxDEV as jsxDEV798, Fragment as Fragment796 } from "react/jsx-dev-runtime";
var iconDefinition796 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV798(Fragment796, {
    children: /* @__PURE__ */ jsxDEV798("path", {
      d: "M13.75 12.5H6.25V7.5H13.75V12.5ZM16.25 10C16.25 11.1562 16.9688 11.875 18.125 11.875V15.625H1.875V11.875C3.03125 11.875 3.75 11.1562 3.75 10C3.75 8.84375 3.03125 8.125 1.875 8.125V4.375H18.125V8.125C16.9688 8.125 16.25 8.84375 16.25 10ZM15 6.25H5V13.75H15V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ticketIcon = createIcon("ticket", iconDefinition796);

// src/noticons/src/ticketAdmission/default.icon.tsx
import { jsxDEV as jsxDEV799, Fragment as Fragment797 } from "react/jsx-dev-runtime";
var iconDefinition797 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV799(Fragment797, {
    children: /* @__PURE__ */ jsxDEV799("path", {
      d: "M13.75 12.5H6.25V7.5H13.75V12.5ZM18.125 6.25V13.75C16.5813 13.75 15.625 14.7063 15.625 16.25H4.375C4.375 14.7063 3.41875 13.75 1.875 13.75V6.25C3.41875 6.25 4.375 5.29375 4.375 3.75H15.625C15.625 5.29375 16.5813 6.25 18.125 6.25ZM15 6.25H5V13.75H15V6.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var ticketAdmissionIcon = createIcon("ticketAdmission", iconDefinition797);

// src/noticons/src/timeline/default.icon.tsx
import { jsxDEV as jsxDEV800, Fragment as Fragment798 } from "react/jsx-dev-runtime";
var iconDefinition798 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV800(Fragment798, {
    children: /* @__PURE__ */ jsxDEV800("path", {
      d: "M13.125 6.875H5.625V3.125H13.125V6.875ZM15.625 8.125H1.875V11.875H15.625V8.125ZM9.375 13.125V16.875H18.125V13.125H9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var timelineIcon = createIcon("timeline", iconDefinition798);

// src/noticons/src/toaster/default.icon.tsx
import { jsxDEV as jsxDEV801, Fragment as Fragment799 } from "react/jsx-dev-runtime";
var iconDefinition799 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV801(Fragment799, {
    children: /* @__PURE__ */ jsxDEV801("path", {
      d: "M18.125 14.375H16.25V17.5H3.75V11.875C3.75 10.4938 4.86875 9.375 6.25 9.375H13.75C15.1313 9.375 16.25 10.4938 16.25 11.875V12.5H18.125V14.375ZM13.75 6.875C13.75 6.0625 13.125 5.625 13.125 5.625C13.125 5.625 13.75 5.1875 13.75 4.375C13.75 3.5625 12.9406 2.5 10 2.5C7.05938 2.5 6.25 3.5625 6.25 4.375C6.25 5.1875 6.875 5.625 6.875 5.625C6.875 5.625 6.25 6.0625 6.25 6.875V8.125H13.75V6.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var toasterIcon = createIcon("toaster", iconDefinition799);

// src/noticons/src/toilet/default.icon.tsx
import { jsxDEV as jsxDEV802, Fragment as Fragment800 } from "react/jsx-dev-runtime";
var iconDefinition800 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV802(Fragment800, {
    children: /* @__PURE__ */ jsxDEV802("path", {
      d: "M13.3813 14.6313L15 16.25V17.5H6.25V13.125L3.75 10.625V2.5H8.75V8.75H16.25V10C16.25 12.2937 15.1906 13.9375 13.3813 14.6313Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var toiletIcon = createIcon("toilet", iconDefinition800);

// src/noticons/src/toiletPaper/default.icon.tsx
import { jsxDEV as jsxDEV803, Fragment as Fragment801 } from "react/jsx-dev-runtime";
var iconDefinition801 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV803(Fragment801, {
    children: /* @__PURE__ */ jsxDEV803("path", {
      d: "M13.75 3.125H6.25C3.83438 3.125 1.875 5.64375 1.875 8.75C1.875 11.8562 3.83438 14.375 6.25 14.375C7.475 14.375 8.58125 13.725 9.375 12.6844V16.875H18.125V8.75C18.125 5.64375 16.1656 3.125 13.75 3.125ZM6.25 10.9375C5.3875 10.9375 4.6875 9.95937 4.6875 8.75C4.6875 7.54063 5.3875 6.5625 6.25 6.5625C7.1125 6.5625 7.8125 7.54063 7.8125 8.75C7.8125 9.95937 7.1125 10.9375 6.25 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var toiletPaperIcon = createIcon("toiletPaper", iconDefinition801);

// src/noticons/src/token/default.icon.tsx
import { jsxDEV as jsxDEV804, Fragment as Fragment802 } from "react/jsx-dev-runtime";
var iconDefinition802 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV804(Fragment802, {
    children: /* @__PURE__ */ jsxDEV804("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM7.34062 14.25L6.78125 13.8438L7.79688 10.7188L5.1375 8.7875L5.35312 8.12813H8.64062L9.65625 5.00313H10.35L11.3656 8.12813H14.6531L14.8688 8.7875L12.2094 10.7188L13.225 13.8438L12.6656 14.25L10.0063 12.3187L7.34688 14.25H7.34062Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tokenIcon = createIcon("token", iconDefinition802);

// src/noticons/src/tooth/default.icon.tsx
import { jsxDEV as jsxDEV805, Fragment as Fragment803 } from "react/jsx-dev-runtime";
var iconDefinition803 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV805(Fragment803, {
    children: /* @__PURE__ */ jsxDEV805("path", {
      d: "M14.0625 10.275V11.3875C14.0625 13.1219 13.7812 14.3094 13.0062 15.8594L12.1875 17.4969H10.9375V12.8094C10.9375 12.2594 10.6125 11.8969 10.0594 11.8719C9.37187 11.8438 9.0625 12.1406 9.0625 12.8094V17.4969H7.8125L6.99375 15.8594C6.21875 14.3094 5.9375 13.1219 5.9375 11.3875V10.275C4.99375 9.34063 4.375 8.00313 4.375 6.25C4.375 3.85938 5.37812 2.5 7.1875 2.5C8.75 2.5 10 3.75 10 3.75C10 3.75 11.25 2.5 12.8125 2.5C14.6219 2.5 15.625 3.85938 15.625 6.25C15.625 8.00313 15.0063 9.34375 14.0625 10.275Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var toothIcon = createIcon("tooth", iconDefinition803);

// src/noticons/src/torii/default.icon.tsx
import { jsxDEV as jsxDEV806, Fragment as Fragment804 } from "react/jsx-dev-runtime";
var iconDefinition804 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV806(Fragment804, {
    children: /* @__PURE__ */ jsxDEV806("path", {
      d: "M18.125 6.875V3.125C18.125 3.125 15.3656 4.375 10 4.375C4.63438 4.375 1.875 3.125 1.875 3.125V6.875H4.375L4.14062 8.75H2.5V10.625H3.90625L3.125 16.875H5.625L6.40625 10.625H13.5938L14.375 16.875H16.875L16.0938 10.625H17.5V8.75H15.8594L15.625 6.875H18.125ZM6.875 6.875H8.75V8.75H6.64062L6.875 6.875ZM13.3594 8.75H11.25V6.875H13.125L13.3594 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var toriiIcon = createIcon("torii", iconDefinition804);

// src/noticons/src/tornado/default.icon.tsx
import { jsxDEV as jsxDEV807, Fragment as Fragment805 } from "react/jsx-dev-runtime";
var iconDefinition805 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV807(Fragment805, {
    children: /* @__PURE__ */ jsxDEV807("path", {
      d: "M16.25 2.5V6.57188C16.25 7.68438 15.9375 8.4375 15.1531 9.225L10.2219 14.1562C10.0625 14.3156 9.99999 14.4656 9.99999 14.6906C9.99999 14.9156 10.0625 15.0656 10.2219 15.225L10.7031 15.7062C11.0969 16.1 11.2531 16.475 11.2531 17.0312V17.5031H8.75311L5.44374 14.1937C5.12811 13.8781 5.00311 13.575 5.00311 13.1281C5.00311 12.6812 5.12811 12.3781 5.44374 12.0625L7.28124 10.225C7.44061 10.0656 7.50311 9.91563 7.50311 9.69063C7.50311 9.46563 7.44061 9.31562 7.28124 9.15625L4.84999 6.725C4.06561 5.94063 3.75311 5.18437 3.75311 4.07187V2.5H16.2531H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tornadoIcon = createIcon("tornado", iconDefinition805);

// src/noticons/src/tortoise/default.icon.tsx
import { jsxDEV as jsxDEV808, Fragment as Fragment806 } from "react/jsx-dev-runtime";
var iconDefinition806 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV808(Fragment806, {
    children: /* @__PURE__ */ jsxDEV808("path", {
      d: "M18.75 6.25V7.82188C18.75 8.93438 18.4375 9.6875 17.6531 10.475L15.2094 12.9187L15.8563 14.2094C16.1469 14.7906 16.2531 15.2375 16.2531 15.8875V16.2531H13.7531L12.5031 13.7531H6.25313L5.00313 16.2531H2.50313V15.8875C2.50313 15.2375 2.60938 14.7938 2.9 14.2094L3.3375 13.3344L1.25313 11.25V10C1.25313 10 3.12813 5 8.12813 5C12.4875 5 14.3781 8.125 14.3781 8.125L16.2531 6.25H18.7531H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tortoiseIcon = createIcon("tortoise", iconDefinition806);

// src/noticons/src/towel/default.icon.tsx
import { jsxDEV as jsxDEV809, Fragment as Fragment807 } from "react/jsx-dev-runtime";
var iconDefinition807 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV809(Fragment807, {
    children: /* @__PURE__ */ jsxDEV809("path", {
      d: "M4.375 14.375H15.625V16.875H4.375V14.375ZM0.625 6.25H3.125V4.375H0.625V6.25ZM4.375 13.125H15.625V3.125H4.375V13.125ZM16.875 4.375V6.25H19.375V4.375H16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var towelIcon = createIcon("towel", iconDefinition807);

// src/noticons/src/trafficCone/default.icon.tsx
import { jsxDEV as jsxDEV810, Fragment as Fragment808 } from "react/jsx-dev-runtime";
var iconDefinition808 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV810(Fragment808, {
    children: /* @__PURE__ */ jsxDEV810("path", {
      d: "M15.4156 15L11.25 2.5H8.75L4.58437 15H2.5V16.875H4.375H15.625H17.5V15H15.4156ZM7.6 11.875L8.85 8.125H11.1469L12.3969 11.875H7.6Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trafficConeIcon = createIcon("trafficCone", iconDefinition808);

// src/noticons/src/trafficLight/default.icon.tsx
import { jsxDEV as jsxDEV811, Fragment as Fragment809 } from "react/jsx-dev-runtime";
var iconDefinition809 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV811(Fragment809, {
    children: /* @__PURE__ */ jsxDEV811("path", {
      d: "M16.875 5V3.75H13.75V2.5H6.25V3.75H3.125V5L6.25 6.5625V8.125H3.125V9.375L6.25 10.9375V12.5H3.125V13.75L6.25 15.3125V17.5H13.75V15.3125L16.875 13.75V12.5H13.75V10.9375L16.875 9.375V8.125H13.75V6.5625L16.875 5ZM10 15.9375C9.1375 15.9375 8.4375 15.2375 8.4375 14.375C8.4375 13.5125 9.1375 12.8125 10 12.8125C10.8625 12.8125 11.5625 13.5125 11.5625 14.375C11.5625 15.2375 10.8625 15.9375 10 15.9375ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM10 7.1875C9.1375 7.1875 8.4375 6.4875 8.4375 5.625C8.4375 4.7625 9.1375 4.0625 10 4.0625C10.8625 4.0625 11.5625 4.7625 11.5625 5.625C11.5625 6.4875 10.8625 7.1875 10 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trafficLightIcon = createIcon("trafficLight", iconDefinition809);

// src/noticons/src/train/default.icon.tsx
import { jsxDEV as jsxDEV812, Fragment as Fragment810 } from "react/jsx-dev-runtime";
var iconDefinition810 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV812(Fragment810, {
    children: /* @__PURE__ */ jsxDEV812("path", {
      d: "M14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375ZM15.9375 3.75V12.8125L14.375 14.375H5.625L4.0625 12.8125V3.75C4.0625 3.75 5.98437 1.875 10 1.875C14.0156 1.875 15.9375 3.75 15.9375 3.75ZM7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625ZM9.0625 5H5.9375V7.5H9.0625V5ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM14.0625 5H10.9375V7.5H14.0625V5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainIcon = createIcon("train", iconDefinition810);

// src/noticons/src/trainHighSpeed/default.icon.tsx
import { jsxDEV as jsxDEV813, Fragment as Fragment811 } from "react/jsx-dev-runtime";
var iconDefinition811 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV813(Fragment811, {
    children: /* @__PURE__ */ jsxDEV813("path", {
      d: "M5.50625 12.5969L8.225 13.9563C8.775 14.2312 9.38438 14.375 10 14.375C10.6156 14.375 11.225 14.2312 11.775 13.9563L14.4938 12.5969C15.7625 11.9625 16.5625 10.6656 16.5625 9.25C16.5625 9.25 16.5312 8.625 16.4406 8.26562L15 2.5H5L3.55938 8.26562C3.47813 8.5875 3.4375 8.91875 3.4375 9.25C3.4375 10.6687 4.2375 11.9625 5.50625 12.5969ZM6.875 11.875C6.35625 11.875 5.9375 11.4563 5.9375 10.9375C5.9375 10.4187 6.35625 10 6.875 10C7.39375 10 7.8125 10.4187 7.8125 10.9375C7.8125 11.4563 7.39375 11.875 6.875 11.875ZM13.125 11.875C12.6062 11.875 12.1875 11.4563 12.1875 10.9375C12.1875 10.4187 12.6062 10 13.125 10C13.6438 10 14.0625 10.4187 14.0625 10.9375C14.0625 11.4563 13.6438 11.875 13.125 11.875ZM6.4625 4.375H13.5344L14.3906 7.80312L9.99687 10L5.60313 7.80312L6.45937 4.375H6.4625ZM14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainHighSpeedIcon = createIcon("trainHighSpeed", iconDefinition811);

// src/noticons/src/trainLightRail/default.icon.tsx
import { jsxDEV as jsxDEV814, Fragment as Fragment812 } from "react/jsx-dev-runtime";
var iconDefinition812 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV814(Fragment812, {
    children: /* @__PURE__ */ jsxDEV814("path", {
      d: "M14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375ZM16.25 8.75V11.875C16.25 13.4187 15.2937 14.375 13.75 14.375H6.25C4.70625 14.375 3.75 13.4187 3.75 11.875V8.75L5 3.75H9.0625V2.5H6.875V0.625H13.125V2.5H10.9375V3.75H15L16.25 8.75ZM7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM14.3188 8.75L13.5375 5.625H6.46563L5.68438 8.75H14.3188Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainLightRailIcon = createIcon("trainLightRail", iconDefinition812);

// src/noticons/src/trainMagneticLevitation/default.icon.tsx
import { jsxDEV as jsxDEV815, Fragment as Fragment813 } from "react/jsx-dev-runtime";
var iconDefinition813 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV815(Fragment813, {
    children: /* @__PURE__ */ jsxDEV815("path", {
      d: "M11.0875 3.17813H11.1219L10.5969 1.5625H9.40624L8.88124 3.17813H8.91561C5.64374 3.47188 4.06561 5 4.06561 5V15C4.06561 16.3813 5.18436 17.5 6.56561 17.5H8.12811V15.625H6.87811C6.53436 15.625 6.25311 15.3438 6.25311 15V13.75H13.7531V15C13.7531 15.3438 13.4719 15.625 13.1281 15.625H11.8781V17.5H13.4406C14.8219 17.5 15.9406 16.3813 15.9406 15V5C15.9406 5 14.3625 3.47188 11.0906 3.17813H11.0875ZM6.87499 12.5C6.35624 12.5 5.93749 12.0813 5.93749 11.5625C5.93749 11.0437 6.35624 10.625 6.87499 10.625C7.39374 10.625 7.81249 11.0437 7.81249 11.5625C7.81249 12.0813 7.39374 12.5 6.87499 12.5ZM13.125 12.5C12.6062 12.5 12.1875 12.0813 12.1875 11.5625C12.1875 11.0437 12.6062 10.625 13.125 10.625C13.6437 10.625 14.0625 11.0437 14.0625 11.5625C14.0625 12.0813 13.6437 12.5 13.125 12.5ZM14.0625 9.375H5.93749V6.25H14.0625V9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainMagneticLevitationIcon = createIcon("trainMagneticLevitation", iconDefinition813);

// src/noticons/src/trainMetro/default.icon.tsx
import { jsxDEV as jsxDEV816, Fragment as Fragment814 } from "react/jsx-dev-runtime";
var iconDefinition814 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV816(Fragment814, {
    children: /* @__PURE__ */ jsxDEV816("path", {
      d: "M14.375 15.625L15.9375 18.75H13.8281L13.2031 17.5H6.79688L6.17188 18.75H4.0625L5.625 15.625H14.375ZM5.625 14.375C5.625 14.375 3.75 12.4531 3.75 8.4375C3.75 4.42187 5.625 2.5 5.625 2.5H14.375C14.375 2.5 16.25 4.42187 16.25 8.4375C16.25 12.4531 14.375 14.375 14.375 14.375H5.625ZM14.0625 11.5625C14.0625 11.0437 13.6438 10.625 13.125 10.625C12.6062 10.625 12.1875 11.0437 12.1875 11.5625C12.1875 12.0813 12.6062 12.5 13.125 12.5C13.6438 12.5 14.0625 12.0813 14.0625 11.5625ZM8.125 5H11.875V3.75H8.125V5ZM5.9375 8.75H14.0625V6.25H5.9375V8.75ZM5.9375 11.5625C5.9375 12.0813 6.35625 12.5 6.875 12.5C7.39375 12.5 7.8125 12.0813 7.8125 11.5625C7.8125 11.0437 7.39375 10.625 6.875 10.625C6.35625 10.625 5.9375 11.0437 5.9375 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trainMetroIcon = createIcon("trainMetro", iconDefinition814);

// src/noticons/src/transfers/default.icon.tsx
import { jsxDEV as jsxDEV817, Fragment as Fragment815 } from "react/jsx-dev-runtime";
var iconDefinition815 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV817(Fragment815, {
    children: /* @__PURE__ */ jsxDEV817("path", {
      d: "M9.3 15.9375L10.625 14.6125L8.825 12.8125H16.9531C15.8406 15.5594 13.1469 17.5 10 17.5C5.85938 17.5 2.5 14.1406 2.5 10C2.5 9.68125 2.52187 9.36875 2.55937 9.0625H15.7L10.7 4.0625L9.375 5.3875L11.175 7.1875H3.04688C4.15937 4.44062 6.85313 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10C17.5 10.3187 17.4781 10.6313 17.4406 10.9375H4.3L9.3 15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var transfersIcon = createIcon("transfers", iconDefinition815);

// src/noticons/src/translate/default.icon.tsx
import { jsxDEV as jsxDEV818, Fragment as Fragment816 } from "react/jsx-dev-runtime";
var iconDefinition816 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV818(Fragment816, {
    children: /* @__PURE__ */ jsxDEV818("path", {
      d: "M6.6625 2.1875H4.6875L1.875 9.6875H3.85L4.31875 8.4375H7.55312L8.02187 9.6875H9.99687L7.1875 2.1875H6.6625ZM5.02187 6.5625L5.9375 4.125L6.85313 6.5625H5.025H5.02187ZM6.4625 13.5344C7.4375 14.5094 8.71875 15 9.99687 15V16.875C8.2375 16.875 6.47813 16.2031 5.13438 14.8625L4.37187 14.1V16.8781H2.49687V10.9406H8.43437V12.8156H5.7375L6.45937 13.5375L6.4625 13.5344ZM13.5344 6.4625C12.5594 5.4875 11.2781 4.99687 10 4.99687V3.12187C11.7594 3.12187 13.5188 3.79375 14.8625 5.13438L15.625 5.89688V3.11875H17.5V9.05625H11.5625V7.18125H14.2594L13.5375 6.45937L13.5344 6.4625ZM18.75 12.8094V10.9344H15.625V9.99687H13.75V10.9344H10.625V12.8094H11.8687C12.1156 13.6594 12.5625 14.4312 13.1906 15.1C11.8969 15.6844 10.625 15.7406 10.625 15.7406L11.2844 17.4969C12.6156 17.2594 13.7531 16.8438 14.6875 16.2875C15.6219 16.8438 16.7594 17.2594 18.0906 17.4969L18.75 15.7406C18.75 15.7406 17.4813 15.6812 16.1844 15.1C16.8125 14.4312 17.2594 13.6594 17.5063 12.8094H18.75ZM14.6875 14.1062C14.3281 13.7531 14.0156 13.3281 13.8 12.8094H15.5781C15.3594 13.3281 15.05 13.7531 14.6906 14.1062H14.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var translateIcon = createIcon("translate", iconDefinition816);

// src/noticons/src/tree/default.icon.tsx
import { jsxDEV as jsxDEV819, Fragment as Fragment817 } from "react/jsx-dev-runtime";
var iconDefinition817 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV819(Fragment817, {
    children: /* @__PURE__ */ jsxDEV819("path", {
      d: "M10 2.5C5.37187 2.5 2.5 5.6125 2.5 10.625C2.5 12.3594 3.3375 13.4375 4.6875 13.4375C5.54063 13.4375 6.1875 13.0063 6.55 12.25L7.65 13.35C8.43437 14.1344 8.74687 14.8906 8.74687 16.0031V17.5H11.2469V16.0031C11.2469 14.8906 11.5594 14.1375 12.3438 13.35L13.4438 12.25C13.8063 13.0063 14.4531 13.4375 15.3062 13.4375C16.6562 13.4375 17.4937 12.3594 17.4937 10.625C17.4937 5.6125 14.6219 2.5 9.99375 2.5H10ZM10 13.05L8.2 11.25H11.8L10 13.05Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var treeIcon = createIcon("tree", iconDefinition817);

// src/noticons/src/triangle/default.icon.tsx
import { jsxDEV as jsxDEV820, Fragment as Fragment818 } from "react/jsx-dev-runtime";
var iconDefinition818 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV820(Fragment818, {
    children: /* @__PURE__ */ jsxDEV820("path", {
      d: "M10.5406 2.5H9.45939L1.70001 15.9375C1.94064 16.3531 2.00001 16.4594 2.24064 16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L10.5406 2.5ZM4.40626 15L10 5.3125L15.5938 15H4.40626Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var triangleIcon = createIcon("triangle", iconDefinition818);

// src/noticons/src/triangleAlternate/default.icon.tsx
import { jsxDEV as jsxDEV821, Fragment as Fragment819 } from "react/jsx-dev-runtime";
var iconDefinition819 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV821(Fragment819, {
    children: /* @__PURE__ */ jsxDEV821("path", {
      d: "M18.3 15.9375C18.0594 16.3531 18 16.4594 17.7594 16.875H2.24064C2.00001 16.4594 1.94064 16.3531 1.70001 15.9375L9.45939 2.5H10.5406L18.3 15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var triangleAlternateIcon = createIcon("triangleAlternate", iconDefinition819);

// src/noticons/src/triangleDashed/default.icon.tsx
import { jsxDEV as jsxDEV822, Fragment as Fragment820 } from "react/jsx-dev-runtime";
var iconDefinition820 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV822(Fragment820, {
    children: /* @__PURE__ */ jsxDEV822("path", {
      d: "M4.40626 15H9.37501V16.875H2.24064C2.00001 16.4594 1.94064 16.3531 1.70001 15.9375L5.26564 9.75937L6.89064 10.6969L4.40626 15ZM14.7313 9.75937L13.1063 10.6969L15.5906 15H10.6219V16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L14.7313 9.75937ZM14.1063 8.67813L10.5406 2.5H9.45939L5.89376 8.67813L7.51876 9.61563L10.0031 5.3125L12.4875 9.61563L14.1125 8.67813H14.1063Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var triangleDashedIcon = createIcon("triangleDashed", iconDefinition820);

// src/noticons/src/triangleOneThird/default.icon.tsx
import { jsxDEV as jsxDEV823, Fragment as Fragment821 } from "react/jsx-dev-runtime";
var iconDefinition821 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV823(Fragment821, {
    children: /* @__PURE__ */ jsxDEV823("path", {
      d: "M10.5406 2.5H9.45939L1.70001 15.9375C1.94064 16.3531 2.00001 16.4594 2.24064 16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L10.5406 2.5ZM4.40626 15L7.20314 10.1562L10 11.7719L12.7969 10.1562L15.5938 15H4.40626Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var triangleOneThirdIcon = createIcon("triangleOneThird", iconDefinition821);

// src/noticons/src/triangleTwoThirds/default.icon.tsx
import { jsxDEV as jsxDEV824, Fragment as Fragment822 } from "react/jsx-dev-runtime";
var iconDefinition822 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV824(Fragment822, {
    children: /* @__PURE__ */ jsxDEV824("path", {
      d: "M10.5406 2.5H9.45939L1.70001 15.9375C1.94064 16.3531 2.00001 16.4594 2.24064 16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L10.5406 2.5ZM10 15H4.40626L7.20314 10.1562L10 11.7719V15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var triangleTwoThirdsIcon = createIcon("triangleTwoThirds", iconDefinition822);

// src/noticons/src/trophy/default.icon.tsx
import { jsxDEV as jsxDEV825, Fragment as Fragment823 } from "react/jsx-dev-runtime";
var iconDefinition823 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV825(Fragment823, {
    children: /* @__PURE__ */ jsxDEV825("path", {
      d: "M15.625 5H15V2.5H5V5H4.375C2.44687 5 1.25 6.19688 1.25 8.125C1.25 10.0531 2.44687 11.25 4.375 11.25H5.52813C6.17813 12.5906 7.40938 13.45 9.0625 13.6812V14.375C9.0625 15.1469 8.58437 15.625 7.8125 15.625H7.1875V17.5H12.8125V15.625H12.1875C11.4156 15.625 10.9375 15.1469 10.9375 14.375V13.6812C12.5938 13.45 13.8219 12.5906 14.4719 11.25H15.625C17.5531 11.25 18.75 10.0531 18.75 8.125C18.75 6.19688 17.5531 5 15.625 5ZM4.375 9.375C3.4875 9.375 3.125 9.0125 3.125 8.125C3.125 7.2375 3.4875 6.875 4.375 6.875H5V8.75C5 8.96562 5.0125 9.17188 5.03125 9.375H4.375ZM15.625 9.375H14.9688C14.9875 9.17188 15 8.96562 15 8.75V6.875H15.625C16.5125 6.875 16.875 7.2375 16.875 8.125C16.875 9.0125 16.5125 9.375 15.625 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var trophyIcon = createIcon("trophy", iconDefinition823);

// src/noticons/src/tropicalCocktail/default.icon.tsx
import { jsxDEV as jsxDEV826, Fragment as Fragment824 } from "react/jsx-dev-runtime";
var iconDefinition824 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV826(Fragment824, {
    children: /* @__PURE__ */ jsxDEV826("path", {
      d: "M14.375 4.375V2.5H5.625V4.375C5.625 4.375 6.875 5.06562 6.875 6.25C6.875 7.43437 5.625 8.56875 5.625 10.625C5.625 12.6812 6.97812 13.9844 9.0625 14.3062V15.625H6.5625V17.5H13.4375V15.625H10.9375V14.3062C13.0219 13.9844 14.375 12.5813 14.375 10.625C14.375 8.56875 13.125 7.43437 13.125 6.25C13.125 5.06562 14.375 4.375 14.375 4.375ZM11.775 4.375C11.5594 4.73125 11.3875 5.15 11.3063 5.625H8.69375C8.60938 5.15 8.4375 4.73125 8.225 4.375H11.7781H11.775Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tropicalCocktailIcon = createIcon("tropicalCocktail", iconDefinition824);

// src/noticons/src/truck/default.icon.tsx
import { jsxDEV as jsxDEV827, Fragment as Fragment825 } from "react/jsx-dev-runtime";
var iconDefinition825 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV827(Fragment825, {
    children: /* @__PURE__ */ jsxDEV827("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M17.5 8.75V10.625H16.25V15.625H15V17.5H12.5V15.625H7.5V17.5H5V15.625H3.75V10.625H2.5V8.75H4.21875L5 5.625H15L15.7812 8.75H17.5ZM14.3156 10.625H5.68125L6.4625 7.5H13.5344L14.3156 10.625ZM6.875 12.1875C7.39375 12.1875 7.8125 12.6062 7.8125 13.125C7.8125 13.6438 7.39375 14.0625 6.875 14.0625C6.35625 14.0625 5.9375 13.6438 5.9375 13.125C5.9375 12.6062 6.35625 12.1875 6.875 12.1875ZM14.0625 13.125C14.0625 13.6438 13.6438 14.0625 13.125 14.0625C12.6062 14.0625 12.1875 13.6438 12.1875 13.125C12.1875 12.6062 12.6062 12.1875 13.125 12.1875C13.6438 12.1875 14.0625 12.6062 14.0625 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var truckIcon = createIcon("truck", iconDefinition825);

// src/noticons/src/trumpet/default.icon.tsx
import { jsxDEV as jsxDEV828, Fragment as Fragment826 } from "react/jsx-dev-runtime";
var iconDefinition826 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV828(Fragment826, {
    children: [
      /* @__PURE__ */ jsxDEV828("path", {
        d: "M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H10V5.625H6.25V6.875H0V8.75H2.50937C2.1 9.42812 1.875 10.2719 1.875 11.25C1.875 13.95 3.55 15.625 6.25 15.625H10C12.7 15.625 14.375 13.95 14.375 11.25C14.375 10.2719 14.1531 9.42812 13.7406 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM8.75 8.75V13.75H7.5V8.75H8.75ZM3.75 11.25C3.75 9.70625 4.70625 8.75 6.25 8.75V13.75C4.70625 13.75 3.75 12.7937 3.75 11.25ZM12.5 11.25C12.5 12.7937 11.5437 13.75 10 13.75V8.75C11.5437 8.75 12.5 9.70625 12.5 11.25Z"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ jsxDEV828("path", {
        d: "M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H10V5.625H6.25V6.875H0V8.75H2.50937C2.1 9.42812 1.875 10.2719 1.875 11.25C1.875 13.95 3.55 15.625 6.25 15.625H10C12.7 15.625 14.375 13.95 14.375 11.25C14.375 10.2719 14.1531 9.42812 13.7406 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM8.75 8.75V13.75H7.5V8.75H8.75ZM3.75 11.25C3.75 9.70625 4.70625 8.75 6.25 8.75V13.75C4.70625 13.75 3.75 12.7937 3.75 11.25ZM12.5 11.25C12.5 12.7937 11.5437 13.75 10 13.75V8.75C11.5437 8.75 12.5 9.70625 12.5 11.25Z"
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this)
};
var trumpetIcon = createIcon("trumpet", iconDefinition826);

// src/noticons/src/tshirt/default.icon.tsx
import { jsxDEV as jsxDEV829, Fragment as Fragment827 } from "react/jsx-dev-runtime";
var iconDefinition827 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV829(Fragment827, {
    children: /* @__PURE__ */ jsxDEV829("path", {
      d: "M18.75 6.875L16.25 9.375L14.375 7.5V17.5H5.625V7.5L3.75 9.375L1.25 6.875L4.52812 3.59688C5.3125 2.8125 6.06875 2.5 7.18125 2.5H7.50313C7.50313 2.5 7.85312 4.375 10.0031 4.375C12.1531 4.375 12.5031 2.5 12.5031 2.5H12.825C13.9375 2.5 14.6906 2.8125 15.4781 3.59688L18.7563 6.875H18.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tshirtIcon = createIcon("tshirt", iconDefinition827);

// src/noticons/src/tulip/default.icon.tsx
import { jsxDEV as jsxDEV830, Fragment as Fragment828 } from "react/jsx-dev-runtime";
var iconDefinition828 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV830(Fragment828, {
    children: /* @__PURE__ */ jsxDEV830("path", {
      d: "M15.625 13.1938L11.3188 17.5H8.67812L4.37187 13.1938L5.06562 12.5C6.92187 12.5 8.43125 13.5625 9.05937 15.1406V11.175C6.91562 10.825 5.62187 9.24687 5.62187 6.875V2.5H6.87187L8.12187 5L9.37187 2.5H10.6219L11.8719 5L13.1219 2.5H14.3719V6.875C14.3719 9.24687 13.0781 10.825 10.9344 11.175V15.1406C11.5594 13.5625 13.0719 12.5 14.9281 12.5L15.6219 13.1938H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tulipIcon = createIcon("tulip", iconDefinition828);

// src/noticons/src/tulipNameTag/default.icon.tsx
import { jsxDEV as jsxDEV831, Fragment as Fragment829 } from "react/jsx-dev-runtime";
var iconDefinition829 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV831(Fragment829, {
    children: /* @__PURE__ */ jsxDEV831("path", {
      d: "M15 3.125H13.75L12.7094 6.25H11.6688L10.6281 3.125H9.37813L8.33751 6.25H7.29688L6.25626 3.125H5.00626C3.70626 7.02812 2.50626 8.85313 2.50626 11.25C2.50626 15.1062 5.37813 17.5 10.0063 17.5C14.6344 17.5 17.5063 15.1062 17.5063 11.25C17.5063 8.85313 16.3063 7.02812 15.0063 3.125H15ZM13.75 13.75H6.25001V8.75H13.75V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tulipNameTagIcon = createIcon("tulipNameTag", iconDefinition829);

// src/noticons/src/tumbler/default.icon.tsx
import { jsxDEV as jsxDEV832, Fragment as Fragment830 } from "react/jsx-dev-runtime";
var iconDefinition830 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV832(Fragment830, {
    children: /* @__PURE__ */ jsxDEV832("path", {
      d: "M3.125 3.75L5.20937 16.25H14.7937L16.8781 3.75H3.125ZM13.8281 10.625H6.17188L5.3375 5.625H14.6594L13.825 10.625H13.8281Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tumblerIcon = createIcon("tumbler", iconDefinition830);

// src/noticons/src/tv/default.icon.tsx
import { jsxDEV as jsxDEV833, Fragment as Fragment831 } from "react/jsx-dev-runtime";
var iconDefinition831 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV833(Fragment831, {
    children: /* @__PURE__ */ jsxDEV833("path", {
      d: "M18.125 4.375V14.375H1.875V4.375H18.125ZM5.625 16.875H14.375V15.625H5.625V16.875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var tvIcon = createIcon("tv", iconDefinition831);

// src/noticons/src/umbrella/default.icon.tsx
import { jsxDEV as jsxDEV834, Fragment as Fragment832 } from "react/jsx-dev-runtime";
var iconDefinition832 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV834(Fragment832, {
    children: /* @__PURE__ */ jsxDEV834("path", {
      d: "M10.9375 10.625V15.3125C10.9375 17.0469 9.85938 18.125 8.125 18.125C6.39062 18.125 5.3125 17.0469 5.3125 15.3125V14.375H7.1875V15.3125C7.1875 15.8906 7.54688 16.25 8.125 16.25C8.70312 16.25 9.0625 15.8906 9.0625 15.3125V10.625H2.5C2.5 6.3875 4.91562 3.62813 8.875 3.19375L9.40625 1.5625H10.5969L11.1281 3.19375C15.0875 3.62813 17.5031 6.3875 17.5031 10.625H10.9406H10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var umbrellaIcon = createIcon("umbrella", iconDefinition832);

// src/noticons/src/underwear/default.icon.tsx
import { jsxDEV as jsxDEV835, Fragment as Fragment833 } from "react/jsx-dev-runtime";
var iconDefinition833 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV835(Fragment833, {
    children: /* @__PURE__ */ jsxDEV835("path", {
      d: "M18.125 5V9.375C14.85 10.1094 12.6094 12.35 11.875 15.625H8.125C7.39062 12.35 5.15 10.1094 1.875 9.375V5H18.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var underwearIcon = createIcon("underwear", iconDefinition833);

// src/noticons/src/undo/default.icon.tsx
import { jsxDEV as jsxDEV836, Fragment as Fragment834 } from "react/jsx-dev-runtime";
var iconDefinition834 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV836(Fragment834, {
    children: /* @__PURE__ */ jsxDEV836("path", {
      d: "M17.5 10.3125C17.5 13.4125 15.2875 15.625 12.1875 15.625H6.24999V13.75H12.1875C14.1937 13.75 15.625 12.3188 15.625 10.3125C15.625 8.30625 14.1937 6.875 12.1875 6.875H5.85624L7.65624 8.675L6.33124 10L2.26874 5.9375L6.33124 1.875L7.65624 3.2L5.85624 5H12.1875C15.2875 5 17.5 7.2125 17.5 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var undoIcon = createIcon("undo", iconDefinition834);

// src/noticons/src/unfollow/default.icon.tsx
import { jsxDEV as jsxDEV837, Fragment as Fragment835 } from "react/jsx-dev-runtime";
var iconDefinition835 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV837(Fragment835, {
    children: /* @__PURE__ */ jsxDEV837("path", {
      d: "M3.125 6.25C3.125 4.70625 4.08125 3.75 5.625 3.75C7.16875 3.75 8.125 4.70625 8.125 6.25C8.125 7.79375 7.16875 8.75 5.625 8.75C4.08125 8.75 3.125 7.79375 3.125 6.25ZM5.625 10C2.54063 10 0.625 11.9156 0.625 15H10.625C10.625 11.9156 8.70938 10 5.625 10ZM18.75 7.575L17.425 6.25L15 8.675L12.575 6.25L11.25 7.575L13.675 10L11.25 12.425L12.575 13.75L15 11.325L17.425 13.75L18.75 12.425L16.325 10L18.75 7.575Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var unfollowIcon = createIcon("unfollow", iconDefinition835);

// src/noticons/src/unlock/default.icon.tsx
import { jsxDEV as jsxDEV838, Fragment as Fragment836 } from "react/jsx-dev-runtime";
var iconDefinition836 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV838(Fragment836, {
    children: /* @__PURE__ */ jsxDEV838("path", {
      d: "M16.25 8.125V17.5H3.75V8.125H11.875V4.375C11.875 3.09687 11.2781 2.5 10 2.5C8.72188 2.5 8.125 3.09687 8.125 4.375V6.25H6.25V4.375C6.25 2.0625 7.6875 0.625 10 0.625C12.3125 0.625 13.75 2.0625 13.75 4.375V8.125H16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var unlockIcon = createIcon("unlock", iconDefinition836);

// src/noticons/src/unlockKeyhole/default.icon.tsx
import { jsxDEV as jsxDEV839, Fragment as Fragment837 } from "react/jsx-dev-runtime";
var iconDefinition837 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV839(Fragment837, {
    children: /* @__PURE__ */ jsxDEV839("path", {
      d: "M13.75 8.125V4.375C13.75 2.0625 12.3125 0.625 10 0.625C7.6875 0.625 6.25 2.0625 6.25 4.375V6.25H8.125V4.375C8.125 3.09687 8.72188 2.5 10 2.5C11.2781 2.5 11.875 3.09687 11.875 4.375V8.125H3.75V17.5H16.25V8.125H13.75ZM11.5625 15V15.625H8.4375V15L9.22188 12.9094C8.75625 12.6406 8.4375 12.1406 8.4375 11.5625C8.4375 10.7 9.1375 10 10 10C10.8625 10 11.5625 10.7 11.5625 11.5625C11.5625 12.1406 11.2438 12.6406 10.7781 12.9094L11.5625 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var unlockKeyholeIcon = createIcon("unlockKeyhole", iconDefinition837);

// src/noticons/src/upload/default.icon.tsx
import { jsxDEV as jsxDEV840, Fragment as Fragment838 } from "react/jsx-dev-runtime";
var iconDefinition838 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV840(Fragment838, {
    children: /* @__PURE__ */ jsxDEV840("path", {
      d: "M18.125 9.375C18.125 11.3031 16.9281 12.5 15 12.5H13.75V10.625H15C15.8875 10.625 16.25 10.2625 16.25 9.375C16.25 8.4875 15.8875 8.125 15 8.125H13.75V6.25C13.75 4.20625 12.6687 3.125 10.625 3.125C8.58125 3.125 7.5 4.20625 7.5 6.25V6.875H5.625C4.34687 6.875 3.75 7.47188 3.75 8.75C3.75 10.0281 4.34687 10.625 5.625 10.625H6.25V12.5H5.625C3.3125 12.5 1.875 11.0625 1.875 8.75C1.875 6.4375 3.3125 5 5.625 5C5.66563 5 5.70312 5.00313 5.74375 5.00625C6.2 2.6625 7.98125 1.25 10.625 1.25C13.7094 1.25 15.625 3.16563 15.625 6.25C15.625 6.26562 15.625 6.28125 15.625 6.29688C17.1844 6.53125 18.1281 7.66563 18.1281 9.375H18.125ZM5.9375 13.9875L7.2625 15.3125L9.0625 13.5125V18.75H10.9375V13.5125L12.7375 15.3125L14.0625 13.9875L10 9.925L5.9375 13.9875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var uploadIcon = createIcon("upload", iconDefinition838);

// src/noticons/src/uploadDocument/default.icon.tsx
import { jsxDEV as jsxDEV841, Fragment as Fragment839 } from "react/jsx-dev-runtime";
var iconDefinition839 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV841(Fragment839, {
    children: /* @__PURE__ */ jsxDEV841("path", {
      d: "M16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875ZM9.375 2.5H3.75V17.5H9.375V13.3844L7.75938 15L6.875 14.1156L10 10.9906L13.125 14.1156L12.2406 15L10.625 13.3844V17.5H16.25V9.375H9.375V2.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var uploadDocumentIcon = createIcon("uploadDocument", iconDefinition839);

// src/noticons/src/uploadFolder/default.icon.tsx
import { jsxDEV as jsxDEV842, Fragment as Fragment840 } from "react/jsx-dev-runtime";
var iconDefinition840 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV842(Fragment840, {
    children: /* @__PURE__ */ jsxDEV842("path", {
      d: "M2.5 8.75H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H10.625V12.7594L12.2406 14.375L13.125 13.4906L10 10.3656L6.875 13.4906L7.75938 14.375L9.375 12.7594V16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75ZM11.0125 5C10.0625 5 9.41875 4.73438 8.75 4.0625C8.07812 3.39062 7.43438 3.125 6.4875 3.125H2.5V7.5H17.5V5H11.0125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var uploadFolderIcon = createIcon("uploadFolder", iconDefinition840);

// src/noticons/src/upward/default.icon.tsx
import { jsxDEV as jsxDEV843, Fragment as Fragment841 } from "react/jsx-dev-runtime";
var iconDefinition841 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV843(Fragment841, {
    children: /* @__PURE__ */ jsxDEV843("path", {
      d: "M16.875 10.55H12.5V17.5H7.5V10.55H3.125V9.375L10 2.5L16.875 9.375V10.55Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var upwardIcon = createIcon("upward", iconDefinition841);

// src/noticons/src/user/default.icon.tsx
import { jsxDEV as jsxDEV844, Fragment as Fragment842 } from "react/jsx-dev-runtime";
var iconDefinition842 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV844(Fragment842, {
    children: /* @__PURE__ */ jsxDEV844("path", {
      d: "M6.5625 5.9375C6.5625 3.81562 7.87813 2.5 10 2.5C12.1219 2.5 13.4375 3.81562 13.4375 5.9375C13.4375 8.05937 12.1219 9.375 10 9.375C7.87813 9.375 6.5625 8.05937 6.5625 5.9375ZM10 10.625C5.75938 10.625 3.125 13.2594 3.125 17.5H16.875C16.875 13.2594 14.2406 10.625 10 10.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var userIcon = createIcon("user", iconDefinition842);

// src/noticons/src/userCircle/default.icon.tsx
import { jsxDEV as jsxDEV845, Fragment as Fragment843 } from "react/jsx-dev-runtime";
var iconDefinition843 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV845(Fragment843, {
    children: /* @__PURE__ */ jsxDEV845("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM14.1406 13.8C13.2937 12.5719 11.8625 11.875 10 11.875C8.1375 11.875 6.70625 12.5719 5.85938 13.8C4.94062 12.8 4.375 11.4688 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.4656 15.0594 12.7969 14.1406 13.8ZM12.5 8.125C12.5 9.66875 11.5437 10.625 10 10.625C8.45625 10.625 7.5 9.66875 7.5 8.125C7.5 6.58125 8.45625 5.625 10 5.625C11.5437 5.625 12.5 6.58125 12.5 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var userCircleIcon = createIcon("userCircle", iconDefinition843);

// src/noticons/src/userCircleDashed/default.icon.tsx
import { jsxDEV as jsxDEV846, Fragment as Fragment844 } from "react/jsx-dev-runtime";
var iconDefinition844 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV846(Fragment844, {
    children: /* @__PURE__ */ jsxDEV846("path", {
      d: "M9.99999 10C8.64999 10 7.81249 9.1625 7.81249 7.8125C7.81249 6.4625 8.64999 5.625 9.99999 5.625C11.35 5.625 12.1875 6.4625 12.1875 7.8125C12.1875 9.1625 11.35 10 9.99999 10ZM9.99999 4.375C10.5406 4.375 11.0656 4.45625 11.5594 4.6L12.2812 2.85625C11.5625 2.625 10.7937 2.5 9.99686 2.5C9.19999 2.5 8.43436 2.625 7.71249 2.85625L8.43436 4.6C8.93124 4.45625 9.45311 4.375 9.99374 4.375H9.99999ZM14.925 7.28437L16.6656 6.5625C15.95 5.18125 14.8187 4.05 13.4375 3.33438L12.7156 5.075C13.6437 5.5875 14.4125 6.35625 14.925 7.28437ZM6.55936 12.6969C7.35936 13.7188 8.60311 14.375 9.99999 14.375C11.3969 14.375 12.6406 13.7156 13.4406 12.6969C12.6844 11.7719 11.5 11.25 9.99999 11.25C8.49999 11.25 7.31561 11.7688 6.55936 12.6969ZM7.28436 5.07812L6.56249 3.3375C5.18124 4.05313 4.04999 5.18438 3.33436 6.56563L5.07499 7.2875C5.58749 6.35938 6.35624 5.59375 7.28436 5.07812ZM17.1469 7.71875L15.4031 8.44063C15.5469 8.9375 15.6281 9.45937 15.6281 10C15.6281 10.5406 15.5469 11.0656 15.4031 11.5594L17.1469 12.2812C17.3781 11.5625 17.5031 10.7937 17.5031 9.99687C17.5031 9.2 17.3781 8.43438 17.1469 7.7125V7.71875ZM12.7187 14.925L13.4406 16.6656C14.8219 15.95 15.9531 14.8188 16.6687 13.4375L14.9281 12.7156C14.4156 13.6437 13.6469 14.4125 12.7187 14.925ZM10.0031 15.625C9.46249 15.625 8.93749 15.5437 8.44374 15.4L7.72186 17.1438C8.44061 17.375 9.20936 17.5 10.0062 17.5C10.8031 17.5 11.5687 17.375 12.2906 17.1438L11.5687 15.4C11.0719 15.5437 10.55 15.625 10.0094 15.625H10.0031ZM5.07811 12.7156L3.33749 13.4375C4.05311 14.8188 5.18436 15.95 6.56561 16.6656L7.28749 14.925C6.35936 14.4125 5.59061 13.6437 5.07811 12.7156ZM4.37811 10C4.37811 9.45937 4.45936 8.93438 4.60311 8.44063L2.85936 7.71875C2.62811 8.4375 2.50311 9.20625 2.50311 10.0031C2.50311 10.8 2.62811 11.5656 2.85936 12.2875L4.60311 11.5656C4.45936 11.0687 4.37811 10.5469 4.37811 10.0063V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var userCircleDashedIcon = createIcon("userCircleDashed", iconDefinition844);

// src/noticons/src/userCircleFilled/default.icon.tsx
import { jsxDEV as jsxDEV847, Fragment as Fragment845 } from "react/jsx-dev-runtime";
var iconDefinition845 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV847(Fragment845, {
    children: /* @__PURE__ */ jsxDEV847("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 5.625C11.5437 5.625 12.5 6.58125 12.5 8.125C12.5 9.66875 11.5437 10.625 10 10.625C8.45625 10.625 7.5 9.66875 7.5 8.125C7.5 6.58125 8.45625 5.625 10 5.625ZM10 15.625C8.3625 15.625 6.89062 14.9219 5.8625 13.8031C6.70937 12.575 8.1375 11.875 10 11.875C11.8625 11.875 13.2906 12.575 14.1375 13.8031C13.1094 14.9219 11.6406 15.625 10 15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var userCircleFilledIcon = createIcon("userCircleFilled", iconDefinition845);

// src/noticons/src/username/default.icon.tsx
import { jsxDEV as jsxDEV848, Fragment as Fragment846 } from "react/jsx-dev-runtime";
var iconDefinition846 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV848(Fragment846, {
    children: /* @__PURE__ */ jsxDEV848("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C11.5406 17.5 12.9688 17.0344 14.1594 16.2406L13.1187 14.6812C12.225 15.2781 11.1531 15.6281 10 15.6281C6.89375 15.6281 4.375 13.1094 4.375 10.0031C4.375 6.89687 6.89375 4.37813 10 4.37813C13.1062 4.37813 15.625 6.89687 15.625 10.0031C15.625 10.9344 15.2937 11.5656 14.5312 11.5656C13.8656 11.5656 13.4375 11.1375 13.4375 10.4719V6.87813H11.5625V7.31875C11.0281 6.84062 10.3313 6.56563 9.53125 6.56563C7.70625 6.56563 6.25 7.99687 6.25 10.0031C6.25 12.0094 7.70625 13.4406 9.53125 13.4406C10.6031 13.4406 11.4906 12.9437 12.0438 12.1313C12.5656 12.9312 13.4656 13.4406 14.5312 13.4406C16.2969 13.4406 17.5 12.3469 17.5 10.0031C17.5 5.8625 14.1406 2.50313 10 2.50313V2.5ZM9.6875 11.5625C8.775 11.5625 8.125 10.9125 8.125 10C8.125 9.0875 8.775 8.4375 9.6875 8.4375C10.6 8.4375 11.25 9.0875 11.25 10C11.25 10.9125 10.6 11.5625 9.6875 11.5625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var usernameIcon = createIcon("username", iconDefinition846);

// src/noticons/src/vacuumCleaner/default.icon.tsx
import { jsxDEV as jsxDEV849, Fragment as Fragment847 } from "react/jsx-dev-runtime";
var iconDefinition847 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV849(Fragment847, {
    children: /* @__PURE__ */ jsxDEV849("path", {
      d: "M17.5 16.25V17.5H8.125V15.4093C8.125 14.6687 8.33437 14.1656 8.85625 13.6406L10.2375 12.2593L9.91562 11.6125L6.89687 13.1218L4.67813 8.6812C4.47813 8.27808 4.375 7.87183 4.375 7.47495C4.375 6.93433 4.58437 5.93433 5.79687 5.32808L6.57812 4.93745L6.46875 4.7187C6.33125 4.4437 6.21563 4.37183 5.90937 4.37183H3.125V2.49683H5.90937C6.91875 2.49683 7.69375 2.97495 8.14687 3.87808L13.275 14.1312L17.5031 16.2437L17.5 16.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var vacuumCleanerIcon = createIcon("vacuumCleaner", iconDefinition847);

// src/noticons/src/verified/default.icon.tsx
import { jsxDEV as jsxDEV850, Fragment as Fragment848 } from "react/jsx-dev-runtime";
var iconDefinition848 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV850(Fragment848, {
    children: /* @__PURE__ */ jsxDEV850("path", {
      d: "M18.125 10C18.125 8.73755 17.1875 7.69692 15.9719 7.52817C16.2875 7.10942 16.4781 6.59067 16.4781 6.02505C16.4781 4.6438 15.3594 3.52505 13.9781 3.52505C13.4125 3.52505 12.8938 3.71567 12.475 4.0313C12.3063 2.81567 11.2656 1.87817 10.0031 1.87817C8.74063 1.87817 7.70001 2.81567 7.53126 4.0313C7.11251 3.71567 6.59376 3.52505 6.02813 3.52505C4.64688 3.52505 3.52813 4.6438 3.52813 6.02505C3.52813 6.59067 3.71876 7.10942 4.03438 7.52817C2.81876 7.69692 1.88126 8.73755 1.88126 10C1.88126 11.2625 2.81876 12.3032 4.03438 12.4719C3.71876 12.8907 3.52813 13.4094 3.52813 13.975C3.52813 15.3563 4.64688 16.475 6.02813 16.475C6.59376 16.475 7.11251 16.2844 7.53126 15.9688C7.70001 17.1844 8.74063 18.1219 10.0031 18.1219C11.2656 18.1219 12.3063 17.1844 12.475 15.9688C12.8938 16.2844 13.4125 16.475 13.9781 16.475C15.3594 16.475 16.4781 15.3563 16.4781 13.975C16.4781 13.4094 16.2875 12.8907 15.9719 12.4719C17.1875 12.3032 18.125 11.2625 18.125 10ZM9.06251 13.8251L5.62501 10.3875L6.95001 9.06255L9.06251 11.175L13.3625 6.87505L14.6875 8.20005L9.06251 13.8251Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var verifiedIcon = createIcon("verified", iconDefinition848);

// src/noticons/src/videoCamera/default.icon.tsx
import { jsxDEV as jsxDEV851, Fragment as Fragment849 } from "react/jsx-dev-runtime";
var iconDefinition849 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV851(Fragment849, {
    children: /* @__PURE__ */ jsxDEV851("path", {
      d: "M13.125 7.1875V12.8125C13.125 14.35 12.1625 15.3125 10.625 15.3125H3.75C2.2125 15.3125 1.25 14.35 1.25 12.8125V7.1875C1.25 5.65 2.2125 4.6875 3.75 4.6875H10.625C12.1625 4.6875 13.125 5.65 13.125 7.1875ZM17.5 5.625L14.375 8.75V11.25L17.5 14.375H18.75V5.625H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoCameraIcon = createIcon("videoCamera", iconDefinition849);

// src/noticons/src/videoCameraOff/default.icon.tsx
import { jsxDEV as jsxDEV852, Fragment as Fragment850 } from "react/jsx-dev-runtime";
var iconDefinition850 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV852(Fragment850, {
    children: /* @__PURE__ */ jsxDEV852("path", {
      d: "M2.37188 5.025L12.1969 14.85C11.7875 15.1469 11.2531 15.3125 10.625 15.3125H3.75C2.2125 15.3125 1.25 14.35 1.25 12.8125V7.1875C1.25 6.1875 1.6625 5.43125 2.37188 5.025ZM13.125 7.1875C13.125 5.65 12.1625 4.6875 10.625 4.6875H7.34062L13.125 10.4719V7.1875ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937ZM17.5 5.625L14.375 8.75V11.25L17.5 14.375H18.75V5.625H17.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoCameraOffIcon = createIcon("videoCameraOff", iconDefinition850);

// src/noticons/src/videoGame/default.icon.tsx
import { jsxDEV as jsxDEV853, Fragment as Fragment851 } from "react/jsx-dev-runtime";
var iconDefinition851 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV853(Fragment851, {
    children: /* @__PURE__ */ jsxDEV853("path", {
      d: "M13.75 5H6.25C3.9375 5 2.5 6.4375 2.5 8.75V14.2156C2.5 15.4719 3.27813 16.25 4.53438 16.25C5.29375 16.25 5.80625 15.975 6.22813 15.3438L8.125 12.5H11.875L13.7719 15.3438C14.1938 15.975 14.7063 16.25 15.4656 16.25C16.7219 16.25 17.5 15.4719 17.5 14.2156V8.75C17.5 6.4375 16.0625 5 13.75 5ZM8.125 9.375H6.875V10.625H5.625V9.375H4.375V8.125H5.625V6.875H6.875V8.125H8.125V9.375ZM12.5 10.625C11.9812 10.625 11.5625 10.2063 11.5625 9.6875C11.5625 9.16875 11.9812 8.75 12.5 8.75C13.0188 8.75 13.4375 9.16875 13.4375 9.6875C13.4375 10.2063 13.0188 10.625 12.5 10.625ZM15 8.75C14.4812 8.75 14.0625 8.33125 14.0625 7.8125C14.0625 7.29375 14.4812 6.875 15 6.875C15.5188 6.875 15.9375 7.29375 15.9375 7.8125C15.9375 8.33125 15.5188 8.75 15 8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoGameIcon = createIcon("videoGame", iconDefinition851);

// src/noticons/src/videoGameClassic/default.icon.tsx
import { jsxDEV as jsxDEV854, Fragment as Fragment852 } from "react/jsx-dev-runtime";
var iconDefinition852 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV854(Fragment852, {
    children: /* @__PURE__ */ jsxDEV854("path", {
      d: "M14.0625 6.875H10.625C10.625 5.37812 9.62187 4.375 8.125 4.375H6.875C6.06875 4.375 5.625 3.93125 5.625 3.125V2.5H4.375V3.125C4.375 4.62188 5.37812 5.625 6.875 5.625H8.125C8.93125 5.625 9.375 6.06875 9.375 6.875H5.9375C3.69375 6.875 1.875 8.69375 1.875 10.9375C1.875 13.1812 3.69375 15 5.9375 15C7.0875 15 8.125 14.5188 8.86563 13.75H11.1375C11.8781 14.5188 12.9125 15 14.0656 15C16.3094 15 18.1281 13.1812 18.1281 10.9375C18.1281 8.69375 16.3094 6.875 14.0656 6.875H14.0625ZM7.8125 11.5625H6.5625V12.8125H5.3125V11.5625H4.0625V10.3125H5.3125V9.0625H6.5625V10.3125H7.8125V11.5625ZM12.8125 12.8125C12.2937 12.8125 11.875 12.3938 11.875 11.875C11.875 11.3562 12.2937 10.9375 12.8125 10.9375C13.3313 10.9375 13.75 11.3562 13.75 11.875C13.75 12.3938 13.3313 12.8125 12.8125 12.8125ZM15.3125 10.9375C14.7937 10.9375 14.375 10.5188 14.375 10C14.375 9.48125 14.7937 9.0625 15.3125 9.0625C15.8313 9.0625 16.25 9.48125 16.25 10C16.25 10.5188 15.8313 10.9375 15.3125 10.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoGameClassicIcon = createIcon("videoGameClassic", iconDefinition852);

// src/noticons/src/videoGameJoystick/default.icon.tsx
import { jsxDEV as jsxDEV855, Fragment as Fragment853 } from "react/jsx-dev-runtime";
var iconDefinition853 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV855(Fragment853, {
    children: /* @__PURE__ */ jsxDEV855("path", {
      d: "M17.5 15V16.875H2.5V15C2.5 13.4563 3.45625 12.5 5 12.5H9.0625V7.98125C7.79375 7.58438 6.875 6.4 6.875 5C6.875 3.275 8.275 1.875 10 1.875C11.725 1.875 13.125 3.275 13.125 5C13.125 6.4 12.2063 7.58438 10.9375 7.98125V12.5H12.1875V11.25H14.6875V12.5H15C16.5437 12.5 17.5 13.4563 17.5 15Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videoGameJoystickIcon = createIcon("videoGameJoystick", iconDefinition853);

// src/noticons/src/videotape/default.icon.tsx
import { jsxDEV as jsxDEV856, Fragment as Fragment854 } from "react/jsx-dev-runtime";
var iconDefinition854 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV856(Fragment854, {
    children: /* @__PURE__ */ jsxDEV856("path", {
      d: "M1.25 4.375V15.625H18.75V4.375H1.25ZM7.1875 9.375C6.49687 9.375 5.9375 9.93437 5.9375 10.625C5.9375 11.3156 6.49687 11.875 7.1875 11.875V13.125H4.375C4.375 13.125 3.4375 12.3562 3.4375 10.625C3.4375 8.89375 4.375 8.125 4.375 8.125H7.1875V9.375ZM11.5625 13.125H8.4375V8.125H11.5625V13.125ZM15.625 13.125H12.8125V11.875C13.5031 11.875 14.0625 11.3156 14.0625 10.625C14.0625 9.93437 13.5031 9.375 12.8125 9.375V8.125H15.625C15.625 8.125 16.5625 8.89375 16.5625 10.625C16.5625 12.3562 15.625 13.125 15.625 13.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var videotapeIcon = createIcon("videotape", iconDefinition854);

// src/noticons/src/view/default.icon.tsx
import { jsxDEV as jsxDEV857, Fragment as Fragment855 } from "react/jsx-dev-runtime";
var iconDefinition855 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV857(Fragment855, {
    children: /* @__PURE__ */ jsxDEV857("path", {
      d: "M12.5 10C12.5 11.3812 11.3813 12.5 10 12.5C8.61875 12.5 7.5 11.3812 7.5 10C7.5 8.61875 8.61875 7.5 10 7.5C11.3813 7.5 12.5 8.61875 12.5 10ZM18.75 10C18.75 10 15.3344 16.25 10 16.25C4.66563 16.25 1.25 10 1.25 10C1.25 10 4.66563 3.75 10 3.75C15.3344 3.75 18.75 10 18.75 10ZM14.375 10C14.375 7.58437 12.4156 5.625 10 5.625C7.58437 5.625 5.625 7.58437 5.625 10C5.625 12.4156 7.58437 14.375 10 14.375C12.4156 14.375 14.375 12.4156 14.375 10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var viewIcon = createIcon("view", iconDefinition855);

// src/noticons/src/viewOff/default.icon.tsx
import { jsxDEV as jsxDEV858, Fragment as Fragment856 } from "react/jsx-dev-runtime";
var iconDefinition856 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV858(Fragment856, {
    children: /* @__PURE__ */ jsxDEV858("path", {
      d: "M8.53437 5.88125L7.05312 4.4C7.95312 4.00312 8.9375 3.75 10.0031 3.75C15.3375 3.75 18.7531 10 18.7531 10C18.7531 10 17.7875 11.7687 16.0781 13.425L14.1219 11.4688C14.2844 11.0094 14.3781 10.5187 14.3781 10.0031C14.3781 7.5875 12.4187 5.62813 10.0031 5.62813C9.4875 5.62813 8.99687 5.72187 8.5375 5.88438L8.53437 5.88125ZM10 14.375C7.58437 14.375 5.625 12.4156 5.625 10C5.625 9.48438 5.71875 8.99375 5.88125 8.53437L3.925 6.57812C2.21875 8.23438 1.25 10.0031 1.25 10.0031C1.25 10.0031 4.66563 16.2531 10 16.2531C11.0625 16.2531 12.05 16.0031 12.95 15.6031L11.4688 14.1219C11.0094 14.2844 10.5187 14.3781 10.0031 14.3781L10 14.375ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var viewOffIcon = createIcon("viewOff", iconDefinition856);

// src/noticons/src/vinylRecord/default.icon.tsx
import { jsxDEV as jsxDEV859, Fragment as Fragment857 } from "react/jsx-dev-runtime";
var iconDefinition857 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV859(Fragment857, {
    children: /* @__PURE__ */ jsxDEV859("path", {
      d: "M8.125 3.125C4.32812 3.125 1.25 6.20312 1.25 10C1.25 13.7969 4.32812 16.875 8.125 16.875C11.9219 16.875 15 13.7969 15 10C15 6.20312 11.9219 3.125 8.125 3.125ZM8.125 12.1875C6.91563 12.1875 5.9375 11.2094 5.9375 10C5.9375 8.79063 6.91563 7.8125 8.125 7.8125C9.33438 7.8125 10.3125 8.79063 10.3125 10C10.3125 11.2094 9.33438 12.1875 8.125 12.1875ZM9.0625 10C9.0625 10.5188 8.64375 10.9375 8.125 10.9375C7.60625 10.9375 7.1875 10.5188 7.1875 10C7.1875 9.48125 7.60625 9.0625 8.125 9.0625C8.64375 9.0625 9.0625 9.48125 9.0625 10ZM18.125 5.3125V12.0656C18.125 12.5563 18.0344 12.8906 17.7906 13.3156L15.375 17.5L13.75 16.5625L16.1656 12.3781C16.2281 12.2719 16.25 12.1875 16.25 12.0656V5.3125C16.25 4.73438 16.6094 4.375 17.1875 4.375C17.7656 4.375 18.125 4.73438 18.125 5.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var vinylRecordIcon = createIcon("vinylRecord", iconDefinition857);

// src/noticons/src/violin/default.icon.tsx
import { jsxDEV as jsxDEV860, Fragment as Fragment858 } from "react/jsx-dev-runtime";
var iconDefinition858 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV860(Fragment858, {
    children: /* @__PURE__ */ jsxDEV860("path", {
      d: "M16.25 2.02187V19.375H14.375V0.625H15L15.5594 0.903125C16.0313 1.14062 16.25 1.49375 16.25 2.02187ZM12.1344 13.7188C12.3719 14.275 12.5 14.9125 12.5 15.6219C12.5 18.0156 11.0875 19.6 8.75 19.9312V16.2469H6.875V19.9312C4.5375 19.6031 3.125 18.0156 3.125 15.6219C3.125 14.9125 3.25313 14.275 3.49063 13.7188C4.43125 13.5813 5 12.9031 5 11.8719C5 10.9781 4.56562 10.35 3.8375 10.1094C3.78125 9.87813 3.75 9.63125 3.75 9.37187C3.75 7.69687 4.925 6.575 6.875 6.30938V2.49687H5.9375V0H9.6875V2.5H8.75V6.3125C10.7 6.57812 11.875 7.7 11.875 9.375C11.875 9.63437 11.8438 9.88125 11.7875 10.1125C11.0594 10.3531 10.625 10.9812 10.625 11.875C10.625 12.9031 11.1938 13.5813 12.1344 13.7219V13.7188ZM9.375 13.1219H6.25V14.3719H9.375V13.1219Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var violinIcon = createIcon("violin", iconDefinition858);

// src/noticons/src/virgo/default.icon.tsx
import { jsxDEV as jsxDEV861, Fragment as Fragment859 } from "react/jsx-dev-runtime";
var iconDefinition859 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV861(Fragment859, {
    children: /* @__PURE__ */ jsxDEV861("path", {
      d: "M18.125 9.0625C18.125 7.275 17.1313 5.625 15.3125 5.625C14.6812 5.625 14.1625 5.75625 13.75 5.99688V5.625C13.75 3.7 12.8625 2.5 10.9375 2.5C9.93125 2.5 9.20937 2.83125 8.75 3.41875C8.29063 2.83125 7.56875 2.5 6.5625 2.5C5.50625 2.5 4.76562 2.8625 4.30938 3.50625C3.76875 2.8625 2.93125 2.5 1.875 2.5V4.375C2.64375 4.375 3.125 4.85625 3.125 5.625V13.75H5V5.625C5 4.85625 5.48125 4.375 6.25 4.375C7.01875 4.375 7.5 4.85625 7.5 5.625V13.75H9.375V5.625C9.375 4.85625 9.85625 4.375 10.625 4.375C11.3938 4.375 11.875 4.85625 11.875 5.625V11.875H10.625V13.75H11.875V15C11.875 16.5437 12.8313 17.5 14.375 17.5H16.4875V15.625H14.375C13.9906 15.625 13.75 15.3844 13.75 15V13.7219C16.7656 13.4438 18.125 11.15 18.125 9.0625ZM13.75 11.825V8.75C13.75 7.98125 14.2312 7.5 15 7.5C15.8219 7.5 16.25 8.20937 16.25 9.0625C16.25 10.1875 15.4844 11.5562 13.75 11.825Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var virgoIcon = createIcon("virgo", iconDefinition859);

// src/noticons/src/vitruvianMan/default.icon.tsx
import { jsxDEV as jsxDEV862, Fragment as Fragment860 } from "react/jsx-dev-runtime";
var iconDefinition860 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV862(Fragment860, {
    children: /* @__PURE__ */ jsxDEV862("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM15.625 7.8125V6.25H4.375V7.8125H8.4375V10.9375L6.25 17.5H8.225L10 12.1781L11.775 17.5H13.75L11.5625 10.9375V7.8125H15.625Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var vitruvianManIcon = createIcon("vitruvianMan", iconDefinition860);

// src/noticons/src/voicemail/default.icon.tsx
import { jsxDEV as jsxDEV863, Fragment as Fragment861 } from "react/jsx-dev-runtime";
var iconDefinition861 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV863(Fragment861, {
    children: /* @__PURE__ */ jsxDEV863("path", {
      d: "M7.8125 10C7.8125 11.0344 6.97188 11.875 5.9375 11.875C4.90313 11.875 4.0625 11.0344 4.0625 10C4.0625 8.96562 4.90313 8.125 5.9375 8.125C6.97188 8.125 7.8125 8.96562 7.8125 10ZM18.75 4.375V15.625H1.25V4.375H18.75ZM17.1875 10C17.1875 8.27812 15.7844 6.875 14.0625 6.875C12.3406 6.875 10.9375 8.27812 10.9375 10C10.9375 10.7031 11.175 11.3531 11.5688 11.875H8.43125C8.825 11.3531 9.0625 10.7031 9.0625 10C9.0625 8.27812 7.65938 6.875 5.9375 6.875C4.21562 6.875 2.8125 8.27812 2.8125 10C2.8125 11.7219 4.21562 13.125 5.9375 13.125H14.0625C15.7844 13.125 17.1875 11.7219 17.1875 10ZM14.0625 8.125C13.0281 8.125 12.1875 8.96562 12.1875 10C12.1875 11.0344 13.0281 11.875 14.0625 11.875C15.0969 11.875 15.9375 11.0344 15.9375 10C15.9375 8.96562 15.0969 8.125 14.0625 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var voicemailIcon = createIcon("voicemail", iconDefinition861);

// src/noticons/src/volcano/default.icon.tsx
import { jsxDEV as jsxDEV864, Fragment as Fragment862 } from "react/jsx-dev-runtime";
var iconDefinition862 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV864(Fragment862, {
    children: /* @__PURE__ */ jsxDEV864("path", {
      d: "M18.125 16.25V17.5H1.875V16.25L8.75 9.375H11.25L18.125 16.25ZM8.75 8.125H11.25C11.25 6.96875 11.9688 6.25 13.125 6.25H15C15 4.9 14.0437 4.0625 12.5 4.0625C12.3938 4.0625 12.2875 4.06875 12.1875 4.075C12.1875 4.07188 12.1875 4.06562 12.1875 4.0625C12.1875 2.7125 11.35 1.875 10 1.875C8.65 1.875 7.8125 2.7125 7.8125 4.0625C7.8125 4.06562 7.8125 4.07188 7.8125 4.075C7.70937 4.06562 7.60625 4.0625 7.5 4.0625C5.95625 4.0625 5 4.9 5 6.25H6.875C8.03125 6.25 8.75 6.96875 8.75 8.125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var volcanoIcon = createIcon("volcano", iconDefinition862);

// src/noticons/src/volumeHigh/default.icon.tsx
import { jsxDEV as jsxDEV865, Fragment as Fragment863 } from "react/jsx-dev-runtime";
var iconDefinition863 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV865(Fragment863, {
    children: /* @__PURE__ */ jsxDEV865("path", {
      d: "M8.75 4.0625H10V15.9375H8.75L5.3125 12.5H2.5V7.5H5.3125L8.75 4.0625ZM12.7281 6.02188L11.4031 7.34688C12.1344 8.07812 12.5 9.0375 12.5 10C12.5 10.9625 12.1344 11.9188 11.4031 12.6531L12.7281 13.9781C13.825 12.8812 14.375 11.4406 14.375 10C14.375 8.55937 13.825 7.12188 12.7281 6.02188ZM14.9375 3.8125L13.6125 5.1375C14.9563 6.48125 15.625 8.24062 15.625 10C15.625 11.7594 14.9531 13.5188 13.6125 14.8625L14.9375 16.1875C16.6469 14.4781 17.5 12.2406 17.5 10C17.5 7.75937 16.6469 5.52187 14.9375 3.8125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var volumeHighIcon = createIcon("volumeHigh", iconDefinition863);

// src/noticons/src/volumeOff/default.icon.tsx
import { jsxDEV as jsxDEV866, Fragment as Fragment864 } from "react/jsx-dev-runtime";
var iconDefinition864 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV866(Fragment864, {
    children: /* @__PURE__ */ jsxDEV866("path", {
      d: "M12.5 9.84688L8.98125 6.32812L11.25 4.05937H12.5V9.84375V9.84688ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM5 12.5H7.8125L11.25 15.9375H12.5V15.1531L5 7.65312V12.5Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var volumeOffIcon = createIcon("volumeOff", iconDefinition864);

// src/noticons/src/walk/default.icon.tsx
import { jsxDEV as jsxDEV867, Fragment as Fragment865 } from "react/jsx-dev-runtime";
var iconDefinition865 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV867(Fragment865, {
    children: /* @__PURE__ */ jsxDEV867("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM12.3469 8.98125C12.9625 9.7125 13.7312 10.625 15.625 10.625V9.0625C14.4563 9.0625 14.0938 8.63125 13.5406 7.975C12.8938 7.20625 12.0875 6.25 10 6.25C6.9625 6.25 5 8.2125 5 11.25H6.5625C6.5625 9.65938 7.23125 8.5625 8.4375 8.08438V10C8.4375 12.15 7.3125 14.2437 5 16.1719L6.32812 17.5C8.26875 15.8844 9.45937 14.1406 9.99062 12.2969C10.8562 13.0812 12.5 14.9125 12.5 17.5H14.375C14.375 14.4875 12.7031 12.325 11.5625 11.2031V8.20312C11.8594 8.40625 12.0875 8.675 12.3469 8.98125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var walkIcon = createIcon("walk", iconDefinition865);

// src/noticons/src/wall/default.icon.tsx
import { jsxDEV as jsxDEV868, Fragment as Fragment866 } from "react/jsx-dev-runtime";
var iconDefinition866 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV868(Fragment866, {
    children: /* @__PURE__ */ jsxDEV868("path", {
      d: "M1.875 12.8125H5V15.9375H1.875V12.8125ZM5 4.0625H1.875V7.1875H5V4.0625ZM9.375 8.4375H1.875V11.5625H9.375V8.4375ZM13.75 4.0625H6.25V7.1875H13.75V4.0625ZM15 4.0625V7.1875H18.125V4.0625H15ZM10.625 11.5625H18.125V8.4375H10.625V11.5625ZM15 15.9375H18.125V12.8125H15V15.9375ZM6.25 15.9375H13.75V12.8125H6.25V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wallIcon = createIcon("wall", iconDefinition866);

// src/noticons/src/warning/default.icon.tsx
import { jsxDEV as jsxDEV869, Fragment as Fragment867 } from "react/jsx-dev-runtime";
var iconDefinition867 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV869(Fragment867, {
    children: /* @__PURE__ */ jsxDEV869("path", {
      d: "M10.5406 2.5H9.45937L1.7 15.9375C1.94063 16.3531 2 16.4594 2.24063 16.875H17.7563C17.9969 16.4594 18.0562 16.3531 18.2969 15.9375L10.5406 2.5ZM11.25 15.625H8.75V13.75H11.25V15.625ZM11.25 10L10.625 12.5H9.375L8.75 10V6.25H11.25V10Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var warningIcon = createIcon("warning", iconDefinition867);

// src/noticons/src/watchAnalog/default.icon.tsx
import { jsxDEV as jsxDEV870, Fragment as Fragment868 } from "react/jsx-dev-runtime";
var iconDefinition868 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV870(Fragment868, {
    children: /* @__PURE__ */ jsxDEV870("path", {
      d: "M10 3.75C9.10938 3.75 8.26562 3.9375 7.5 4.275V1.25H12.5V4.275C11.7344 3.94063 10.8906 3.75 10 3.75ZM15 10C15 12.7625 12.7625 15 10 15C7.2375 15 5 12.7625 5 10C5 7.2375 7.2375 5 10 5C12.7625 5 15 7.2375 15 10ZM13.125 9.58438H10.625V6.25H9.375V10.8344H13.125V9.58438ZM7.5 15.7281V18.7531H12.5V15.7281C11.7344 16.0625 10.8906 16.2531 10 16.2531C9.10938 16.2531 8.26562 16.0656 7.5 15.7281Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var watchAnalogIcon = createIcon("watchAnalog", iconDefinition868);

// src/noticons/src/water/default.icon.tsx
import { jsxDEV as jsxDEV871, Fragment as Fragment869 } from "react/jsx-dev-runtime";
var iconDefinition869 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV871(Fragment869, {
    children: /* @__PURE__ */ jsxDEV871("path", {
      d: "M14.5125 7.2875L10.725 2.2375C10.5531 2.00937 10.2844 1.875 10 1.875C9.71562 1.875 9.44688 2.00937 9.275 2.2375L5.4875 7.2875C4.5625 8.52187 4.0625 10.0219 4.0625 11.5625C4.0625 14.8406 6.72188 17.5 10 17.5C13.2781 17.5 15.9375 14.8406 15.9375 11.5625C15.9375 10.0219 15.4375 8.52187 14.5125 7.2875ZM9.375 11.25H5.95C6.0125 10.2281 6.37188 9.23125 6.9875 8.4125L8.60938 6.25H9.375V11.25Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var waterIcon = createIcon("water", iconDefinition869);

// src/noticons/src/whale/default.icon.tsx
import { jsxDEV as jsxDEV872, Fragment as Fragment870 } from "react/jsx-dev-runtime";
var iconDefinition870 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV872(Fragment870, {
    children: /* @__PURE__ */ jsxDEV872("path", {
      d: "M13.125 3.125H11.875V1.875H13.125C14.2469 1.875 15 2.62813 15 3.75V3.8375C15.1906 3.78125 15.4 3.75 15.625 3.75H16.875V5H15.625C15.2 5 15 5.2 15 5.625V6.25H13.75V3.75C13.75 3.325 13.55 3.125 13.125 3.125ZM18.75 7.5V10C18.75 12.8906 17.0688 14.7531 14.3219 14.9781C14.05 16.55 12.6875 17.5 10.625 17.5V16.25L11.5969 15H7.5C4.41563 15 2.5 13.0844 2.5 10V6.00937C1.31875 5.5125 0.625 4.25938 0.625 2.5H1.875L3.775 3.97812L5.625 2.5H6.875C6.875 4.25938 6.18125 5.50937 5 6.00937V6.25C5 7.02187 5.47813 7.5 6.25 7.5H18.75ZM14.375 10.3125C14.375 9.79375 13.9563 9.375 13.4375 9.375C12.9187 9.375 12.5 9.79375 12.5 10.3125C12.5 10.8313 12.9187 11.25 13.4375 11.25C13.9563 11.25 14.375 10.8313 14.375 10.3125Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var whaleIcon = createIcon("whale", iconDefinition870);

// src/noticons/src/wheat/default.icon.tsx
import { jsxDEV as jsxDEV873, Fragment as Fragment871 } from "react/jsx-dev-runtime";
var iconDefinition871 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV873(Fragment871, {
    children: /* @__PURE__ */ jsxDEV873("path", {
      d: "M14.4531 6.24692L12.575 8.12505H16.5625C16.5625 9.2813 15.8438 10 14.6875 10H10.7L8.825 11.875H12.8125C12.8125 13.0313 12.0938 13.75 10.9375 13.75H6.95L3.2 17.5L1.875 16.175L3.75 14.3V10.3125C3.75 9.1563 4.46875 8.43755 5.625 8.43755V12.425L7.5 10.55V6.56255C7.5 5.4063 8.21875 4.68755 9.375 4.68755V8.67505L14.45 3.60005C15.2344 2.81567 15.9906 2.50317 17.1031 2.50317H18.125C18.125 4.79067 16.7219 6.21567 14.4531 6.25005V6.24692Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheatIcon = createIcon("wheat", iconDefinition871);

// src/noticons/src/wheelchair/default.icon.tsx
import { jsxDEV as jsxDEV874, Fragment as Fragment872 } from "react/jsx-dev-runtime";
var iconDefinition872 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV874(Fragment872, {
    children: /* @__PURE__ */ jsxDEV874("path", {
      d: "M14.6875 12.8125L16.3531 15.3125L18.7469 13.7156L18.0531 12.675L16.6969 13.5781L15.3531 11.5625H13.7469V8.125C13.7469 6.96875 13.0281 6.25 11.8719 6.25H6.55939V5C6.55939 3.84375 5.84064 3.125 4.68439 3.125H3.12189V4.375H4.68439C5.06876 4.375 5.30939 4.61563 5.30939 5V9.42812C3.36251 9.72813 1.87189 11.4062 1.87189 13.4375C1.87189 15.6812 3.69064 17.5 5.93439 17.5C8.17814 17.5 9.99689 15.6812 9.99689 13.4375C9.99689 13.225 9.97501 13.0156 9.94376 12.8125H12.4969V13.8594C11.7688 14.1156 11.2469 14.8094 11.2469 15.625C11.2469 16.6594 12.0875 17.5 13.1219 17.5C14.1563 17.5 14.9969 16.6594 14.9969 15.625C14.9969 14.8094 14.475 14.1156 13.7469 13.8594V12.8125H14.6844H14.6875ZM5.93751 16.25C4.38751 16.25 3.12501 14.9875 3.12501 13.4375C3.12501 12.1031 4.06251 10.9812 5.31251 10.6969V10.9375C5.31251 12.0938 6.03126 12.8125 7.18751 12.8125H8.67814C8.72501 13.0125 8.75001 13.2219 8.75001 13.4375C8.75001 14.9875 7.48751 16.25 5.93751 16.25ZM12.5 8.75H6.56251V7.5H11.875C12.2594 7.5 12.5 7.74062 12.5 8.125V8.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairIcon = createIcon("wheelchair", iconDefinition872);

// src/noticons/src/wheelchairAccess/default.icon.tsx
import { jsxDEV as jsxDEV875, Fragment as Fragment873 } from "react/jsx-dev-runtime";
var iconDefinition873 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV875(Fragment873, {
    children: /* @__PURE__ */ jsxDEV875("path", {
      d: "M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM15.5656 11.6937C15.3281 10.9812 14.8344 10.625 14.0844 10.625H11.5656V7.8125C11.5656 6.84688 10.9687 6.25 10.0031 6.25C6.96562 6.25 5.00313 8.2125 5.00313 11.25H6.56563C6.56563 9.65938 7.23438 8.5625 8.44063 8.08438V10.9375C8.44063 11.9031 9.0375 12.5 10.0031 12.5H13.8594L14.9 15.625H16.875L15.5656 11.6937ZM10 15.9375C8.1 15.9375 6.5625 14.4 6.5625 12.5H5C5 15.2625 7.2375 17.5 10 17.5C11.4531 17.5 12.7563 16.8781 13.6688 15.8875L13.1187 14.2313C13.1187 14.2313 11.9688 15.9344 10 15.9344V15.9375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairAccessIcon = createIcon("wheelchairAccess", iconDefinition873);

// src/noticons/src/wheelchairMotorized/default.icon.tsx
import { jsxDEV as jsxDEV876, Fragment as Fragment874 } from "react/jsx-dev-runtime";
var iconDefinition874 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV876(Fragment874, {
    children: /* @__PURE__ */ jsxDEV876("path", {
      d: "M16.2469 14.9656C16.2469 14.9656 16.2469 14.9875 16.2469 15C16.2469 16.3813 15.1281 17.5 13.7469 17.5C12.3656 17.5 11.2469 16.3813 11.2469 15H8.27814L7.07814 13.8L6.06251 14.8156C6.17814 15.0594 6.24689 15.3344 6.24689 15.6219C6.24689 16.6563 5.40626 17.4969 4.37189 17.4969C3.33751 17.4969 2.49689 16.6563 2.49689 15.6219C2.49689 14.5875 3.33751 13.7469 4.37189 13.7469C4.66251 13.7469 4.93439 13.8156 5.17814 13.9313L6.24689 12.8625V11.2469H5.30939L2.81251 2.5L3.53439 2.1375C3.92189 1.94375 4.21876 1.875 4.65314 1.875H4.86251C5.48751 1.875 5.89376 2.18125 6.06564 2.78125L6.36876 3.84063C6.50939 4.32812 6.40939 4.70937 6.05001 5.06875L5.62189 5.49688L5.74689 5.9375H6.02501C6.65001 5.9375 7.05626 6.24375 7.22814 6.84375L7.23751 6.875H11.8813V8.125H7.59689L7.95314 9.375H13.7563C14.5281 9.375 15.0063 9.85313 15.0063 10.625C15.0063 11.3969 14.5281 11.875 13.7563 11.875V12.5C14.6625 12.5 15.4531 12.9844 15.8938 13.7063L17.4406 12.675L18.1344 13.7156L16.2563 14.9656H16.2469Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wheelchairMotorizedIcon = createIcon("wheelchairMotorized", iconDefinition874);

// src/noticons/src/whistle/default.icon.tsx
import { jsxDEV as jsxDEV877, Fragment as Fragment875 } from "react/jsx-dev-runtime";
var iconDefinition875 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV877(Fragment875, {
    children: /* @__PURE__ */ jsxDEV877("path", {
      d: "M20 4.37495V8.12495H18.4375C16.5812 8.12495 14.85 9.05308 13.8219 10.5937L12.1156 13.1531C11.0875 14.6968 9.35625 15.6218 7.5 15.6218C4.825 15.6218 2.5875 13.75 2.01875 11.2468H0V8.74683H2.01875C2.5875 6.2437 4.82188 4.37183 7.5 4.37183H9.375V6.24683H11.25V4.37183H20V4.37495Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var whistleIcon = createIcon("whistle", iconDefinition875);

// src/noticons/src/wifi/default.icon.tsx
import { jsxDEV as jsxDEV878, Fragment as Fragment876 } from "react/jsx-dev-runtime";
var iconDefinition876 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV878(Fragment876, {
    children: /* @__PURE__ */ jsxDEV878("path", {
      d: "M10 12.5C11 12.5 11.9062 12.9063 12.5625 13.5625L10 16.125L7.4375 13.5625C8.09375 12.9063 9 12.5 10 12.5ZM4.34375 10.4688L6.1125 12.2375C7.10625 11.2438 8.48125 10.6281 10 10.6281C11.5188 10.6281 12.8937 11.2438 13.8875 12.2375L15.6562 10.4688C14.2094 9.02187 12.2094 8.125 10 8.125C7.79063 8.125 5.79063 9.02187 4.34375 10.4688ZM10 3.75C6.58437 3.75 3.49062 5.13438 1.25 7.375L3.01875 9.14375C4.80625 7.35625 7.275 6.25313 10 6.25313C12.725 6.25313 15.1938 7.35938 16.9812 9.14375L18.75 7.375C16.5094 5.13438 13.4156 3.75 10 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wifiIcon = createIcon("wifi", iconDefinition876);

// src/noticons/src/wind/default.icon.tsx
import { jsxDEV as jsxDEV879, Fragment as Fragment877 } from "react/jsx-dev-runtime";
var iconDefinition877 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV879(Fragment877, {
    children: /* @__PURE__ */ jsxDEV879("path", {
      d: "M6.40625 7.5H3.125V5.625H6.40625C7.62813 5.625 8.125 5.12812 8.125 3.90625V2.5H10V3.90625C10 6.15625 8.65625 7.5 6.40625 7.5ZM12.1875 11.875H3.125V13.75H12.1875C12.8875 13.75 13.125 13.9875 13.125 14.6875C13.125 15.3875 12.8875 15.625 12.1875 15.625H10.625V17.5H12.1875C13.9219 17.5 15 16.4219 15 14.6875C15 12.9531 13.9219 11.875 12.1875 11.875ZM14.0625 3.75C12.0063 3.75 10.625 5.13125 10.625 7.1875V7.5H12.5V7.1875C12.5 6.16563 13.0406 5.625 14.0625 5.625C15.0844 5.625 15.625 6.16563 15.625 7.1875C15.625 8.20937 15.0844 8.75 14.0625 8.75H3.125V10.625H14.0625C16.1187 10.625 17.5 9.24375 17.5 7.1875C17.5 5.13125 16.1187 3.75 14.0625 3.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var windIcon = createIcon("wind", iconDefinition877);

// src/noticons/src/window/default.icon.tsx
import { jsxDEV as jsxDEV880, Fragment as Fragment878 } from "react/jsx-dev-runtime";
var iconDefinition878 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV880(Fragment878, {
    children: /* @__PURE__ */ jsxDEV880("path", {
      d: "M15.625 3.75H4.375C2.83125 3.75 1.875 4.70625 1.875 6.25V13.75C1.875 15.2937 2.83125 16.25 4.375 16.25H15.625C17.1687 16.25 18.125 15.2937 18.125 13.75V6.25C18.125 4.70625 17.1687 3.75 15.625 3.75ZM10.9375 5.625C11.4563 5.625 11.875 6.04375 11.875 6.5625C11.875 7.08125 11.4563 7.5 10.9375 7.5C10.4187 7.5 10 7.08125 10 6.5625C10 6.04375 10.4187 5.625 10.9375 5.625ZM7.8125 5.625C8.33125 5.625 8.75 6.04375 8.75 6.5625C8.75 7.08125 8.33125 7.5 7.8125 7.5C7.29375 7.5 6.875 7.08125 6.875 6.5625C6.875 6.04375 7.29375 5.625 7.8125 5.625ZM4.6875 5.625C5.20625 5.625 5.625 6.04375 5.625 6.5625C5.625 7.08125 5.20625 7.5 4.6875 7.5C4.16875 7.5 3.75 7.08125 3.75 6.5625C3.75 6.04375 4.16875 5.625 4.6875 5.625ZM16.25 13.75C16.25 14.1344 16.0094 14.375 15.625 14.375H4.375C3.99062 14.375 3.75 14.1344 3.75 13.75V10C3.75 9.61562 3.99062 9.375 4.375 9.375H15.625C16.0094 9.375 16.25 9.61562 16.25 10V13.75Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var windowIcon = createIcon("window", iconDefinition878);

// src/noticons/src/wine/default.icon.tsx
import { jsxDEV as jsxDEV881, Fragment as Fragment879 } from "react/jsx-dev-runtime";
var iconDefinition879 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV881(Fragment879, {
    children: /* @__PURE__ */ jsxDEV881("path", {
      d: "M15.5062 7.79688L14.1812 2.5H5.81562L4.49062 7.79688C4.4125 8.10938 4.37187 8.42812 4.37187 8.75C4.37187 11.2125 5.9375 12.8188 9.05937 13.0813V15.625H6.55937V17.5H13.4344V15.625H10.9344V13.0813C14.0562 12.8188 15.6219 11.2125 15.6219 8.75C15.6219 8.42812 15.5812 8.10938 15.5031 7.79688H15.5062ZM12.7187 4.375L13.6562 8.125H6.34375L7.28125 4.375H12.7219H12.7187Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wineIcon = createIcon("wine", iconDefinition879);

// src/noticons/src/wineBottle/default.icon.tsx
import { jsxDEV as jsxDEV882, Fragment as Fragment880 } from "react/jsx-dev-runtime";
var iconDefinition880 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV882(Fragment880, {
    children: /* @__PURE__ */ jsxDEV882("path", {
      d: "M6.875 5.825V1.25H4.375V5.825C3.19375 6.24062 2.5 7.28125 2.5 8.75V16.25C2.5 17.0219 2.97812 17.5 3.75 17.5H7.5C8.27187 17.5 8.75 17.0219 8.75 16.25V8.75C8.75 7.28438 8.05625 6.24062 6.875 5.825ZM6.875 13.75H4.375V10.625C4.375 9.85312 4.85313 9.375 5.625 9.375C6.39687 9.375 6.875 9.85312 6.875 10.625V13.75ZM18.75 8.75C18.75 8.42812 18.7094 8.10938 18.6313 7.79688L17.3063 2.5H11.4406L10.1156 7.79688C10.0375 8.10938 9.99687 8.42812 9.99687 8.75C9.99687 11.1469 11.1031 12.7344 13.4344 13.0594V15.625H10.9344V17.5H17.8094V15.625H15.3094V13.0594C17.6406 12.7344 18.7469 11.1469 18.7469 8.75H18.75ZM15.8438 4.375L16.7812 8.125H11.9688L12.9062 4.375H15.8469H15.8438Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wineBottleIcon = createIcon("wineBottle", iconDefinition880);

// src/noticons/src/wrappingPaper/default.icon.tsx
import { jsxDEV as jsxDEV883, Fragment as Fragment881 } from "react/jsx-dev-runtime";
var iconDefinition881 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV883(Fragment881, {
    children: /* @__PURE__ */ jsxDEV883("path", {
      d: "M15 11.25H15.625C17.0063 11.25 18.125 9.85 18.125 8.125C18.125 6.4 17.0063 5 15.625 5H3.75C2.36875 5 1.25 6.4 1.25 8.125C1.25 9.125 1.64687 10.0844 2.35625 10.7938L7.8125 16.25H20L15 11.25ZM3.75 9.375C3.23125 9.375 2.8125 8.81562 2.8125 8.125C2.8125 7.43438 3.23125 6.875 3.75 6.875C4.26875 6.875 4.6875 7.43438 4.6875 8.125C4.6875 8.81562 4.26875 9.375 3.75 9.375Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wrappingPaperIcon = createIcon("wrappingPaper", iconDefinition881);

// src/noticons/src/wrench/default.icon.tsx
import { jsxDEV as jsxDEV884, Fragment as Fragment882 } from "react/jsx-dev-runtime";
var iconDefinition882 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV884(Fragment882, {
    children: /* @__PURE__ */ jsxDEV884("path", {
      d: "M17.5 7.49995C17.5 10.2625 15.2625 12.5 12.5 12.5C11.8063 12.5 11.1469 12.3593 10.5469 12.1031L5.76563 16.8843C4.94688 17.7031 3.93126 17.7031 3.11251 16.8843C2.29376 16.0656 2.29376 15.05 3.11251 14.2312L7.89376 9.44995C7.63751 8.84995 7.49688 8.19058 7.49688 7.49683C7.49688 4.73433 9.73438 2.49683 12.4969 2.49683C12.9281 2.49683 13.3469 2.5562 13.7469 2.66245V3.59683L11.2469 6.09683L11.8063 8.18745L13.8969 8.74683L16.3969 6.24683H17.3313C17.4344 6.64683 17.4969 7.06558 17.4969 7.49683L17.5 7.49995Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var wrenchIcon = createIcon("wrench", iconDefinition882);

// src/noticons/src/yinYang/default.icon.tsx
import { jsxDEV as jsxDEV885, Fragment as Fragment883 } from "react/jsx-dev-runtime";
var iconDefinition883 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV885(Fragment883, {
    children: /* @__PURE__ */ jsxDEV885("path", {
      d: "M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 13.75C9.48125 13.75 9.0625 13.3313 9.0625 12.8125C9.0625 12.2937 9.48125 11.875 10 11.875C10.5188 11.875 10.9375 12.2937 10.9375 12.8125C10.9375 13.3313 10.5188 13.75 10 13.75ZM10 10C8.44688 10 7.1875 11.2594 7.1875 12.8125C7.1875 13.4438 7.4 14.0281 7.75 14.4969L7.48438 15.0312C5.64063 14.1062 4.375 12.2031 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C11.5531 4.375 12.8125 5.63438 12.8125 7.1875C12.8125 8.74062 11.5531 10 10 10ZM10.9375 7.1875C10.9375 7.70625 10.5188 8.125 10 8.125C9.48125 8.125 9.0625 7.70625 9.0625 7.1875C9.0625 6.66875 9.48125 6.25 10 6.25C10.5188 6.25 10.9375 6.66875 10.9375 7.1875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var yinYangIcon = createIcon("yinYang", iconDefinition883);

// src/noticons/src/zoomIn/default.icon.tsx
import { jsxDEV as jsxDEV886, Fragment as Fragment884 } from "react/jsx-dev-runtime";
var iconDefinition884 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV886(Fragment884, {
    children: /* @__PURE__ */ jsxDEV886("path", {
      d: "M13.9625 12.1938C14.6156 11.2063 15 10.0219 15 8.75C15 5.29688 12.2031 2.5 8.75 2.5C5.29688 2.5 2.5 5.29688 2.5 8.75C2.5 12.2031 5.29688 15 8.75 15C10.025 15 11.2063 14.6156 12.1938 13.9625L15.7312 17.5L17.5 15.7312L13.9625 12.1938ZM12.8125 9.6875H9.6875V12.8125H7.8125V9.6875H4.6875V7.8125H7.8125V4.6875H9.6875V7.8125H12.8125V9.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var zoomInIcon = createIcon("zoomIn", iconDefinition884);

// src/noticons/src/zoomOut/default.icon.tsx
import { jsxDEV as jsxDEV887, Fragment as Fragment885 } from "react/jsx-dev-runtime";
var iconDefinition885 = {
  viewBox: "0 0 20 20",
  svg: /* @__PURE__ */ jsxDEV887(Fragment885, {
    children: /* @__PURE__ */ jsxDEV887("path", {
      d: "M13.9625 12.1938C14.6156 11.2063 15 10.0219 15 8.75C15 5.29688 12.2031 2.5 8.75 2.5C5.29688 2.5 2.5 5.29688 2.5 8.75C2.5 12.2031 5.29688 15 8.75 15C10.025 15 11.2063 14.6156 12.1938 13.9625L15.7312 17.5L17.5 15.7312L13.9625 12.1938ZM12.8125 9.6875H4.6875V7.8125H12.8125V9.6875Z"
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this)
};
var zoomOutIcon = createIcon("zoomOut", iconDefinition885);

// src/noticons/icon-import-map.ts
var noticonImportMap = {
  _123: {
    default: _123Icon
  },
  accessibility: {
    default: accessibilityIcon
  },
  activity: {
    default: activityIcon
  },
  add: {
    default: addIcon
  },
  airplane: {
    default: airplaneIcon
  },
  alarm: {
    default: alarmIcon
  },
  alert: {
    default: alertIcon
  },
  alien: {
    default: alienIcon
  },
  alienPixel: {
    default: alienPixelIcon
  },
  ambulance: {
    default: ambulanceIcon
  },
  anchor: {
    default: anchorIcon
  },
  apple: {
    default: appleIcon
  },
  apron: {
    default: apronIcon
  },
  aquarius: {
    default: aquariusIcon
  },
  archBridge: {
    default: archBridgeIcon
  },
  archery: {
    default: archeryIcon
  },
  archive: {
    default: archiveIcon
  },
  aries: {
    default: ariesIcon
  },
  arrivals: {
    default: arrivalsIcon
  },
  arrowCircleDown: {
    default: arrowCircleDownIcon
  },
  arrowDown: {
    default: arrowDownIcon
  },
  arrowDownBasic: {
    default: arrowDownBasicIcon
  },
  arrowDownLine: {
    default: arrowDownLineIcon
  },
  arrowLeft: {
    default: arrowLeftIcon
  },
  arrowLeftBasic: {
    default: arrowLeftBasicIcon
  },
  arrowLeftLine: {
    default: arrowLeftLineIcon
  },
  arrowNortheast: {
    default: arrowNortheastIcon
  },
  arrowNorthwest: {
    default: arrowNorthwestIcon
  },
  arrowRight: {
    default: arrowRightIcon
  },
  arrowRightBasic: {
    default: arrowRightBasicIcon
  },
  arrowRightLine: {
    default: arrowRightLineIcon
  },
  arrowSoutheast: {
    default: arrowSoutheastIcon
  },
  arrowSouthwest: {
    default: arrowSouthwestIcon
  },
  arrowTurnLeft: {
    default: arrowTurnLeftIcon
  },
  arrowTurnRight: {
    default: arrowTurnRightIcon
  },
  arrowUp: {
    default: arrowUpIcon
  },
  arrowUpBasic: {
    default: arrowUpBasicIcon
  },
  arrowUpLine: {
    default: arrowUpLineIcon
  },
  arrowsHorizontal: {
    default: arrowsHorizontalIcon
  },
  arrowsSwapHorizontally: {
    default: arrowsSwapHorizontallyIcon
  },
  arrowsSwapVertically: {
    default: arrowsSwapVerticallyIcon
  },
  arrowsVertical: {
    default: arrowsVerticalIcon
  },
  art: {
    default: artIcon
  },
  asterisk: {
    default: asteriskIcon
  },
  atm: {
    default: atmIcon
  },
  attachment: {
    default: attachmentIcon
  },
  avocado: {
    default: avocadoIcon
  },
  baby: {
    default: babyIcon
  },
  babyBottle: {
    default: babyBottleIcon
  },
  backpack: {
    default: backpackIcon
  },
  backward: {
    default: backwardIcon
  },
  badge: {
    default: badgeIcon
  },
  bag: {
    default: bagIcon
  },
  baggageClaim: {
    default: baggageClaimIcon
  },
  balloon: {
    default: balloonIcon
  },
  banana: {
    default: bananaIcon
  },
  barcode: {
    default: barcodeIcon
  },
  barricade: {
    default: barricadeIcon
  },
  baseball: {
    default: baseballIcon
  },
  baseballCap: {
    default: baseballCapIcon
  },
  basketball: {
    default: basketballIcon
  },
  bathtub: {
    default: bathtubIcon
  },
  bathtubShower: {
    default: bathtubShowerIcon
  },
  battery: {
    default: batteryIcon
  },
  batteryCharged: {
    default: batteryChargedIcon
  },
  batteryCharging: {
    default: batteryChargingIcon
  },
  bed: {
    default: bedIcon
  },
  bee: {
    default: beeIcon
  },
  beer: {
    default: beerIcon
  },
  beerBottle: {
    default: beerBottleIcon
  },
  bell: {
    default: bellIcon
  },
  bellNotification: {
    default: bellNotificationIcon
  },
  bellOff: {
    default: bellOffIcon
  },
  belt: {
    default: beltIcon
  },
  bicycle: {
    default: bicycleIcon
  },
  bikini: {
    default: bikiniIcon
  },
  binoculars: {
    default: binocularsIcon
  },
  bloodPressure: {
    default: bloodPressureIcon
  },
  bluetooth: {
    default: bluetoothIcon
  },
  boardingPass: {
    default: boardingPassIcon
  },
  boat: {
    default: boatIcon
  },
  bomb: {
    default: bombIcon
  },
  bone: {
    default: boneIcon
  },
  book: {
    default: bookIcon
  },
  bookClosed: {
    default: bookClosedIcon
  },
  bookmark: {
    default: bookmarkIcon
  },
  bookmarkOutline: {
    default: bookmarkOutlineIcon
  },
  boombox: {
    default: boomboxIcon
  },
  boot: {
    default: bootIcon
  },
  bounce: {
    default: bounceIcon
  },
  bowl: {
    default: bowlIcon
  },
  bowlFood: {
    default: bowlFoodIcon
  },
  bowling: {
    default: bowlingIcon
  },
  bra: {
    default: braIcon
  },
  brain: {
    default: brainIcon
  },
  branch: {
    default: branchIcon
  },
  branchCreate: {
    default: branchCreateIcon
  },
  branchFork: {
    default: branchForkIcon
  },
  branchMerge: {
    default: branchMergeIcon
  },
  bread: {
    default: breadIcon
  },
  briefcase: {
    default: briefcaseIcon
  },
  brightnessHigh: {
    default: brightnessHighIcon
  },
  broccoli: {
    default: broccoliIcon
  },
  broom: {
    default: broomIcon
  },
  broomAndDustpan: {
    default: broomAndDustpanIcon
  },
  browserStop: {
    default: browserStopIcon
  },
  bug: {
    default: bugIcon
  },
  bugle: {
    default: bugleIcon
  },
  bullseye: {
    default: bullseyeIcon
  },
  bunkBed: {
    default: bunkBedIcon
  },
  burger: {
    default: burgerIcon
  },
  burst: {
    default: burstIcon
  },
  bus: {
    default: busIcon
  },
  busDoubleDecker: {
    default: busDoubleDeckerIcon
  },
  busMetro: {
    default: busMetroIcon
  },
  butterfly: {
    default: butterflyIcon
  },
  button: {
    default: buttonIcon
  },
  cactus: {
    default: cactusIcon
  },
  cafe: {
    default: cafeIcon
  },
  cake: {
    default: cakeIcon
  },
  calculator: {
    default: calculatorIcon
  },
  calendar: {
    default: calendarIcon
  },
  calendarDay: {
    default: calendarDayIcon
  },
  calendarMonth: {
    default: calendarMonthIcon
  },
  calendarWeek: {
    default: calendarWeekIcon
  },
  camera: {
    default: cameraIcon
  },
  cameraOff: {
    default: cameraOffIcon
  },
  cameraRoll: {
    default: cameraRollIcon
  },
  cameraRollPortrait: {
    default: cameraRollPortraitIcon
  },
  campingTent: {
    default: campingTentIcon
  },
  campingTrailer: {
    default: campingTrailerIcon
  },
  cancer: {
    default: cancerIcon
  },
  candy: {
    default: candyIcon
  },
  capricorn: {
    default: capricornIcon
  },
  car: {
    default: carIcon
  },
  card: {
    default: cardIcon
  },
  cardClub: {
    default: cardClubIcon
  },
  cardDiamond: {
    default: cardDiamondIcon
  },
  cardHeart: {
    default: cardHeartIcon
  },
  cardSpade: {
    default: cardSpadeIcon
  },
  cards: {
    default: cardsIcon
  },
  carrot: {
    default: carrotIcon
  },
  cash: {
    default: cashIcon
  },
  cashRegister: {
    default: cashRegisterIcon
  },
  cassette: {
    default: cassetteIcon
  },
  castle: {
    default: castleIcon
  },
  castleJapanese: {
    default: castleJapaneseIcon
  },
  cat: {
    default: catIcon
  },
  categories: {
    default: categoriesIcon
  },
  cd: {
    default: cdIcon
  },
  cellular: {
    default: cellularIcon
  },
  chair: {
    default: chairIcon
  },
  champagne: {
    default: champagneIcon
  },
  champagneBottle: {
    default: champagneBottleIcon
  },
  chart: {
    default: chartIcon
  },
  chartAlternate: {
    default: chartAlternateIcon
  },
  chartArea: {
    default: chartAreaIcon
  },
  chartDonut: {
    default: chartDonutIcon
  },
  chartLine: {
    default: chartLineIcon
  },
  chartMixed: {
    default: chartMixedIcon
  },
  chartPie: {
    default: chartPieIcon
  },
  chat: {
    default: chatIcon
  },
  chatUser: {
    default: chatUserIcon
  },
  check: {
    default: checkIcon
  },
  checklist: {
    default: checklistIcon
  },
  checkmark: {
    default: checkmarkIcon
  },
  checkmarkLine: {
    default: checkmarkLineIcon
  },
  checkmarkSquare: {
    default: checkmarkSquareIcon
  },
  chemistry: {
    default: chemistryIcon
  },
  cherries: {
    default: cherriesIcon
  },
  chessBishop: {
    default: chessBishopIcon
  },
  chessKing: {
    default: chessKingIcon
  },
  chessKnight: {
    default: chessKnightIcon
  },
  chessPawn: {
    default: chessPawnIcon
  },
  chessQueen: {
    default: chessQueenIcon
  },
  chessRook: {
    default: chessRookIcon
  },
  chevronsVertical: {
    default: chevronsVerticalIcon
  },
  chicken: {
    default: chickenIcon
  },
  child: {
    default: childIcon
  },
  chiliPepper: {
    default: chiliPepperIcon
  },
  christmasTree: {
    default: christmasTreeIcon
  },
  church: {
    default: churchIcon
  },
  cigarette: {
    default: cigaretteIcon
  },
  circle: {
    default: circleIcon
  },
  circleAlternate: {
    default: circleAlternateIcon
  },
  circleArrowsHorizontal: {
    default: circleArrowsHorizontalIcon
  },
  circleArrowsVertical: {
    default: circleArrowsVerticalIcon
  },
  circleDashed: {
    default: circleDashedIcon
  },
  circleDot: {
    default: circleDotIcon
  },
  circleFiveEighths: {
    default: circleFiveEighthsIcon
  },
  circleFourEighths: {
    default: circleFourEighthsIcon
  },
  circleOneEighth: {
    default: circleOneEighthIcon
  },
  circleRemove: {
    default: circleRemoveIcon
  },
  circleSevenEighths: {
    default: circleSevenEighthsIcon
  },
  circleSixEighths: {
    default: circleSixEighthsIcon
  },
  circleThreeEighths: {
    default: circleThreeEighthsIcon
  },
  circleTwoEighths: {
    default: circleTwoEighthsIcon
  },
  city: {
    default: cityIcon
  },
  clarinet: {
    default: clarinetIcon
  },
  clear: {
    default: clearIcon
  },
  clipping: {
    default: clippingIcon
  },
  clock: {
    default: clockIcon
  },
  clockAlternate: {
    default: clockAlternateIcon
  },
  close: {
    default: closeIcon
  },
  clothesButton: {
    default: clothesButtonIcon
  },
  clothesIron: {
    default: clothesIronIcon
  },
  cloud: {
    default: cloudIcon
  },
  cloudNo: {
    default: cloudNoIcon
  },
  cloudOff: {
    default: cloudOffIcon
  },
  cloudYes: {
    default: cloudYesIcon
  },
  cloudy: {
    default: cloudyIcon
  },
  clover: {
    default: cloverIcon
  },
  cloverFourLeaf: {
    default: cloverFourLeafIcon
  },
  coaster: {
    default: coasterIcon
  },
  coat: {
    default: coatIcon
  },
  cocktail: {
    default: cocktailIcon
  },
  code: {
    default: codeIcon
  },
  codeScan: {
    default: codeScanIcon
  },
  coffee: {
    default: coffeeIcon
  },
  coffeeMaker: {
    default: coffeeMakerIcon
  },
  colorPalette: {
    default: colorPaletteIcon
  },
  colorPicker: {
    default: colorPickerIcon
  },
  colorSwatch: {
    default: colorSwatchIcon
  },
  column: {
    default: columnIcon
  },
  comb: {
    default: combIcon
  },
  commandLine: {
    default: commandLineIcon
  },
  comment: {
    default: commentIcon
  },
  compass: {
    default: compassIcon
  },
  compose: {
    default: composeIcon
  },
  compressedDocument: {
    default: compressedDocumentIcon
  },
  computer: {
    default: computerIcon
  },
  computerChip: {
    default: computerChipIcon
  },
  conceal: {
    default: concealIcon
  },
  condense: {
    default: condenseIcon
  },
  confettiBall: {
    default: confettiBallIcon
  },
  confettiPartyPopper: {
    default: confettiPartyPopperIcon
  },
  coniferTree: {
    default: coniferTreeIcon
  },
  connectingFlight: {
    default: connectingFlightIcon
  },
  constructionCrane: {
    default: constructionCraneIcon
  },
  contrast: {
    default: contrastIcon
  },
  conversation: {
    default: conversationIcon
  },
  copy: {
    default: copyIcon
  },
  corn: {
    default: cornIcon
  },
  couch: {
    default: couchIcon
  },
  cow: {
    default: cowIcon
  },
  crab: {
    default: crabIcon
  },
  crayon: {
    default: crayonIcon
  },
  create: {
    default: createIcon2
  },
  creditCard: {
    default: creditCardIcon
  },
  crop: {
    default: cropIcon
  },
  crutch: {
    default: crutchIcon
  },
  cupcake: {
    default: cupcakeIcon
  },
  currency: {
    default: currencyIcon
  },
  currencyCoin: {
    default: currencyCoinIcon
  },
  cursor: {
    default: cursorIcon
  },
  cursorButton: {
    default: cursorButtonIcon
  },
  cursorClick: {
    default: cursorClickIcon
  },
  customs: {
    default: customsIcon
  },
  cut: {
    default: cutIcon
  },
  dairy: {
    default: dairyIcon
  },
  daisy: {
    default: daisyIcon
  },
  dance: {
    default: danceIcon
  },
  darks: {
    default: darksIcon
  },
  dashboard: {
    default: dashboardIcon
  },
  database: {
    default: databaseIcon
  },
  defibrillator: {
    default: defibrillatorIcon
  },
  delete: {
    default: deleteIcon
  },
  deliveryTruck: {
    default: deliveryTruckIcon
  },
  dental: {
    default: dentalIcon
  },
  departures: {
    default: departuresIcon
  },
  dependency: {
    default: dependencyIcon
  },
  description: {
    default: descriptionIcon
  },
  dialogue: {
    default: dialogueIcon
  },
  die1: {
    default: die1Icon
  },
  die2: {
    default: die2Icon
  },
  die3: {
    default: die3Icon
  },
  die4: {
    default: die4Icon
  },
  die5: {
    default: die5Icon
  },
  die6: {
    default: die6Icon
  },
  dining: {
    default: diningIcon
  },
  directionalSign: {
    default: directionalSignIcon
  },
  directionalSignLeft: {
    default: directionalSignLeftIcon
  },
  directionalSignRight: {
    default: directionalSignRightIcon
  },
  directions: {
    default: directionsIcon
  },
  dishSoap: {
    default: dishSoapIcon
  },
  dna: {
    default: dnaIcon
  },
  doNotDisturb: {
    default: doNotDisturbIcon
  },
  document: {
    default: documentIcon
  },
  dog: {
    default: dogIcon
  },
  donkey: {
    default: donkeyIcon
  },
  download: {
    default: downloadIcon
  },
  downward: {
    default: downwardIcon
  },
  drafts: {
    default: draftsIcon
  },
  dress: {
    default: dressIcon
  },
  drink: {
    default: drinkIcon
  },
  duck: {
    default: duckIcon
  },
  duster: {
    default: dusterIcon
  },
  ear: {
    default: earIcon
  },
  earHearingAid: {
    default: earHearingAidIcon
  },
  earthquake: {
    default: earthquakeIcon
  },
  egg: {
    default: eggIcon
  },
  eject: {
    default: ejectIcon
  },
  electricGuitar: {
    default: electricGuitarIcon
  },
  electricPlug: {
    default: electricPlugIcon
  },
  elephant: {
    default: elephantIcon
  },
  elevator: {
    default: elevatorIcon
  },
  emoji: {
    default: emojiIcon
  },
  emojiAngry: {
    default: emojiAngryIcon
  },
  emojiBigSad: {
    default: emojiBigSadIcon
  },
  emojiDisappointed: {
    default: emojiDisappointedIcon
  },
  emojiGrinning: {
    default: emojiGrinningIcon
  },
  emojiGrinningSmilingEyes: {
    default: emojiGrinningSmilingEyesIcon
  },
  emojiHeartEyes: {
    default: emojiHeartEyesIcon
  },
  emojiNeutral: {
    default: emojiNeutralIcon
  },
  emojiSad: {
    default: emojiSadIcon
  },
  emojiSmilingEyes: {
    default: emojiSmilingEyesIcon
  },
  emojiSunglasses: {
    default: emojiSunglassesIcon
  },
  emojiSurprised: {
    default: emojiSurprisedIcon
  },
  emojiWinking: {
    default: emojiWinkingIcon
  },
  error: {
    default: errorIcon
  },
  escalator: {
    default: escalatorIcon
  },
  exclamationMark: {
    default: exclamationMarkIcon
  },
  exclamationMarkDouble: {
    default: exclamationMarkDoubleIcon
  },
  exit: {
    default: exitIcon
  },
  expand: {
    default: expandIcon
  },
  extension: {
    default: extensionIcon
  },
  fabricSwatch: {
    default: fabricSwatchIcon
  },
  facialTissues: {
    default: facialTissuesIcon
  },
  factory: {
    default: factoryIcon
  },
  fanDeck: {
    default: fanDeckIcon
  },
  feather: {
    default: featherIcon
  },
  feed: {
    default: feedIcon
  },
  filtered: {
    default: filteredIcon
  },
  fire: {
    default: fireIcon
  },
  fireExtinguisher: {
    default: fireExtinguisherIcon
  },
  fireTruck: {
    default: fireTruckIcon
  },
  fireworks: {
    default: fireworksIcon
  },
  firstAid: {
    default: firstAidIcon
  },
  firstAidKit: {
    default: firstAidKitIcon
  },
  fish: {
    default: fishIcon
  },
  flag: {
    default: flagIcon
  },
  flagCheckered: {
    default: flagCheckeredIcon
  },
  flagPennant: {
    default: flagPennantIcon
  },
  flagSwallowtail: {
    default: flagSwallowtailIcon
  },
  flash: {
    default: flashIcon
  },
  flashlight: {
    default: flashlightIcon
  },
  flatware: {
    default: flatwareIcon
  },
  fleurDeLis: {
    default: fleurDeLisIcon
  },
  flood: {
    default: floodIcon
  },
  fog: {
    default: fogIcon
  },
  folder: {
    default: folderIcon
  },
  follow: {
    default: followIcon
  },
  following: {
    default: followingIcon
  },
  font: {
    default: fontIcon
  },
  foodAndDrink: {
    default: foodAndDrinkIcon
  },
  football: {
    default: footballIcon
  },
  forestFire: {
    default: forestFireIcon
  },
  fork: {
    default: forkIcon
  },
  forkAndKnife: {
    default: forkAndKnifeIcon
  },
  formula: {
    default: formulaIcon
  },
  forward: {
    default: forwardIcon
  },
  fragile: {
    default: fragileIcon
  },
  friends: {
    default: friendsIcon
  },
  fryingPan: {
    default: fryingPanIcon
  },
  fuel: {
    default: fuelIcon
  },
  gamePawn: {
    default: gamePawnIcon
  },
  garlic: {
    default: garlicIcon
  },
  gavel: {
    default: gavelIcon
  },
  gear: {
    default: gearIcon
  },
  gears: {
    default: gearsIcon
  },
  gem: {
    default: gemIcon
  },
  gemini: {
    default: geminiIcon
  },
  geography: {
    default: geographyIcon
  },
  ghost: {
    default: ghostIcon
  },
  gift: {
    default: giftIcon
  },
  git: {
    default: gitIcon
  },
  glasses: {
    default: glassesIcon
  },
  globe: {
    default: globeIcon
  },
  golf: {
    default: golfIcon
  },
  government: {
    default: governmentIcon
  },
  gradebook: {
    default: gradebookIcon
  },
  graduate: {
    default: graduateIcon
  },
  grapes: {
    default: grapesIcon
  },
  grave: {
    default: graveIcon
  },
  grid: {
    default: gridIcon
  },
  gridDense: {
    default: gridDenseIcon
  },
  gridWide: {
    default: gridWideIcon
  },
  gridWideSix: {
    default: gridWideSixIcon
  },
  grocery: {
    default: groceryIcon
  },
  groups: {
    default: groupsIcon
  },
  guitar: {
    default: guitarIcon
  },
  gym: {
    default: gymIcon
  },
  hail: {
    default: hailIcon
  },
  hairCare: {
    default: hairCareIcon
  },
  hairdryer: {
    default: hairdryerIcon
  },
  hammer: {
    default: hammerIcon
  },
  hanafuda: {
    default: hanafudaIcon
  },
  hand: {
    default: handIcon
  },
  handbag: {
    default: handbagIcon
  },
  hanger: {
    default: hangerIcon
  },
  hare: {
    default: hareIcon
  },
  hashtag: {
    default: hashtagIcon
  },
  headphones: {
    default: headphonesIcon
  },
  headset: {
    default: headsetIcon
  },
  heart: {
    default: heartIcon
  },
  heartBoxBow: {
    default: heartBoxBowIcon
  },
  heartOutline: {
    default: heartOutlineIcon
  },
  heartRate: {
    default: heartRateIcon
  },
  heartRateMonitor: {
    default: heartRateMonitorIcon
  },
  heartbroken: {
    default: heartbrokenIcon
  },
  helicopter: {
    default: helicopterIcon
  },
  helm: {
    default: helmIcon
  },
  helpAlternate: {
    default: helpAlternateIcon
  },
  hexagon: {
    default: hexagonIcon
  },
  hexagonAlternate: {
    default: hexagonAlternateIcon
  },
  hexagonDashed: {
    default: hexagonDashedIcon
  },
  hexagonFiveSixths: {
    default: hexagonFiveSixthsIcon
  },
  hexagonFourSixths: {
    default: hexagonFourSixthsIcon
  },
  hexagonOneSixth: {
    default: hexagonOneSixthIcon
  },
  hexagonThreeSixths: {
    default: hexagonThreeSixthsIcon
  },
  hexagonTwoSixths: {
    default: hexagonTwoSixthsIcon
  },
  highball: {
    default: highballIcon
  },
  history: {
    default: historyIcon
  },
  home: {
    default: homeIcon
  },
  hotAirBalloon: {
    default: hotAirBalloonIcon
  },
  hourglass: {
    default: hourglassIcon
  },
  hurricane: {
    default: hurricaneIcon
  },
  iceSkate: {
    default: iceSkateIcon
  },
  immigration: {
    default: immigrationIcon
  },
  inbox: {
    default: inboxIcon
  },
  infinity: {
    default: infinityIcon
  },
  infoAlternate: {
    default: infoAlternateIcon
  },
  inlineSkate: {
    default: inlineSkateIcon
  },
  invitation: {
    default: invitationIcon
  },
  iterate: {
    default: iterateIcon
  },
  jackOLantern: {
    default: jackOLanternIcon
  },
  jar: {
    default: jarIcon
  },
  judicialScales: {
    default: judicialScalesIcon
  },
  junk: {
    default: junkIcon
  },
  key: {
    default: keyIcon
  },
  keyAntique: {
    default: keyAntiqueIcon
  },
  keyboard: {
    default: keyboardIcon
  },
  keyboardAlternate: {
    default: keyboardAlternateIcon
  },
  keypad: {
    default: keypadIcon
  },
  kind: {
    default: kindIcon
  },
  kite: {
    default: kiteIcon
  },
  knife: {
    default: knifeIcon
  },
  knifeKitchen: {
    default: knifeKitchenIcon
  },
  language: {
    default: languageIcon
  },
  laptop: {
    default: laptopIcon
  },
  laundryBasket: {
    default: laundryBasketIcon
  },
  laundryDetergent: {
    default: laundryDetergentIcon
  },
  laundryDryer: {
    default: laundryDryerIcon
  },
  laundryWasher: {
    default: laundryWasherIcon
  },
  layers: {
    default: layersIcon
  },
  leaf: {
    default: leafIcon
  },
  leafMonstera: {
    default: leafMonsteraIcon
  },
  lemon: {
    default: lemonIcon
  },
  leo: {
    default: leoIcon
  },
  libra: {
    default: libraIcon
  },
  library: {
    default: libraryIcon
  },
  lightBulb: {
    default: lightBulbIcon
  },
  lights: {
    default: lightsIcon
  },
  link: {
    default: linkIcon
  },
  lipstick: {
    default: lipstickIcon
  },
  list: {
    default: listIcon
  },
  listIndent: {
    default: listIndentIcon
  },
  litterDisposal: {
    default: litterDisposalIcon
  },
  location: {
    default: locationIcon
  },
  lock: {
    default: lockIcon
  },
  lockKeyhole: {
    default: lockKeyholeIcon
  },
  logIn: {
    default: logInIcon
  },
  logOut: {
    default: logOutIcon
  },
  longBone: {
    default: longBoneIcon
  },
  longSleeveShirt: {
    default: longSleeveShirtIcon
  },
  loopedSquare: {
    default: loopedSquareIcon
  },
  lostAndFound: {
    default: lostAndFoundIcon
  },
  lounge: {
    default: loungeIcon
  },
  luggage: {
    default: luggageIcon
  },
  luggageCart: {
    default: luggageCartIcon
  },
  lungs: {
    default: lungsIcon
  },
  magicWand: {
    default: magicWandIcon
  },
  magnet: {
    default: magnetIcon
  },
  mahjong: {
    default: mahjongIcon
  },
  mail: {
    default: mailIcon
  },
  makeupBrush: {
    default: makeupBrushIcon
  },
  mandir: {
    default: mandirIcon
  },
  map: {
    default: mapIcon
  },
  mapPin: {
    default: mapPinIcon
  },
  mapPinAlternate: {
    default: mapPinAlternateIcon
  },
  mathematics: {
    default: mathematicsIcon
  },
  meat: {
    default: meatIcon
  },
  medication: {
    default: medicationIcon
  },
  meeting: {
    default: meetingIcon
  },
  megaphone: {
    default: megaphoneIcon
  },
  menorah: {
    default: menorahIcon
  },
  menstrualPad: {
    default: menstrualPadIcon
  },
  merge: {
    default: mergeIcon
  },
  metronome: {
    default: metronomeIcon
  },
  microphone: {
    default: microphoneIcon
  },
  microphoneOff: {
    default: microphoneOffIcon
  },
  microscope: {
    default: microscopeIcon
  },
  microwave: {
    default: microwaveIcon
  },
  midtones: {
    default: midtonesIcon
  },
  mirror: {
    default: mirrorIcon
  },
  mobile: {
    default: mobileIcon
  },
  monorail: {
    default: monorailIcon
  },
  moon: {
    default: moonIcon
  },
  mop: {
    default: mopIcon
  },
  mopAndBucket: {
    default: mopAndBucketIcon
  },
  more: {
    default: moreIcon
  },
  mosque: {
    default: mosqueIcon
  },
  motorcycle: {
    default: motorcycleIcon
  },
  mountains: {
    default: mountainsIcon
  },
  mouth: {
    default: mouthIcon
  },
  move: {
    default: moveIcon
  },
  moveDocument: {
    default: moveDocumentIcon
  },
  movie: {
    default: movieIcon
  },
  movieCamera: {
    default: movieCameraIcon
  },
  movieClapboard: {
    default: movieClapboardIcon
  },
  movieClapboardPlay: {
    default: movieClapboardPlayIcon
  },
  mushroom: {
    default: mushroomIcon
  },
  music: {
    default: musicIcon
  },
  musicAlbum: {
    default: musicAlbumIcon
  },
  musicArtist: {
    default: musicArtistIcon
  },
  navigation: {
    default: navigationIcon
  },
  necktie: {
    default: necktieIcon
  },
  network: {
    default: networkIcon
  },
  newAlert: {
    default: newAlertIcon
  },
  newBadge: {
    default: newBadgeIcon
  },
  newDocument: {
    default: newDocumentIcon
  },
  newFolder: {
    default: newFolderIcon
  },
  news: {
    default: newsIcon
  },
  no: {
    default: noIcon
  },
  noEntry: {
    default: noEntryIcon
  },
  noteEighth: {
    default: noteEighthIcon
  },
  noteHalf: {
    default: noteHalfIcon
  },
  noteQuarter: {
    default: noteQuarterIcon
  },
  noteSixteenth: {
    default: noteSixteenthIcon
  },
  noteSixteenthBeamed: {
    default: noteSixteenthBeamedIcon
  },
  noteWhole: {
    default: noteWholeIcon
  },
  notification: {
    default: notificationIcon
  },
  notion: {
    default: notionIcon
  },
  numero: {
    default: numeroIcon
  },
  nut: {
    default: nutIcon
  },
  octagon: {
    default: octagonIcon
  },
  officialDocument: {
    default: officialDocumentIcon
  },
  onion: {
    default: onionIcon
  },
  orange: {
    default: orangeIcon
  },
  orbit: {
    default: orbitIcon
  },
  ornament: {
    default: ornamentIcon
  },
  oven: {
    default: ovenIcon
  },
  package: {
    default: packageIcon
  },
  paifang: {
    default: paifangIcon
  },
  paintBrush: {
    default: paintBrushIcon
  },
  paintBrushWide: {
    default: paintBrushWideIcon
  },
  paintBucket: {
    default: paintBucketIcon
  },
  paintRoller: {
    default: paintRollerIcon
  },
  palmTree: {
    default: palmTreeIcon
  },
  pants: {
    default: pantsIcon
  },
  paperTowels: {
    default: paperTowelsIcon
  },
  parking: {
    default: parkingIcon
  },
  parkingNo: {
    default: parkingNoIcon
  },
  partlyCloudyDay: {
    default: partlyCloudyDayIcon
  },
  partlyCloudyNight: {
    default: partlyCloudyNightIcon
  },
  passport: {
    default: passportIcon
  },
  paste: {
    default: pasteIcon
  },
  peace: {
    default: peaceIcon
  },
  peanut: {
    default: peanutIcon
  },
  pear: {
    default: pearIcon
  },
  pen: {
    default: penIcon
  },
  pencil: {
    default: pencilIcon
  },
  pentagon: {
    default: pentagonIcon
  },
  pentagonAlternate: {
    default: pentagonAlternateIcon
  },
  pentagonDashed: {
    default: pentagonDashedIcon
  },
  pentagonFourFifths: {
    default: pentagonFourFifthsIcon
  },
  pentagonOneFifth: {
    default: pentagonOneFifthIcon
  },
  pentagonThreeFifths: {
    default: pentagonThreeFifthsIcon
  },
  pentagonTwoFifths: {
    default: pentagonTwoFifthsIcon
  },
  people: {
    default: peopleIcon
  },
  perfume: {
    default: perfumeIcon
  },
  personFeminine: {
    default: personFeminineIcon
  },
  personMasculine: {
    default: personMasculineIcon
  },
  phone: {
    default: phoneIcon
  },
  phoneCall: {
    default: phoneCallIcon
  },
  phoneEndCall: {
    default: phoneEndCallIcon
  },
  phoneSpeaker: {
    default: phoneSpeakerIcon
  },
  photoLandscape: {
    default: photoLandscapeIcon
  },
  piano: {
    default: pianoIcon
  },
  pig: {
    default: pigIcon
  },
  pill: {
    default: pillIcon
  },
  pin: {
    default: pinIcon
  },
  pisces: {
    default: piscesIcon
  },
  pitcher: {
    default: pitcherIcon
  },
  pizza: {
    default: pizzaIcon
  },
  plateFood: {
    default: plateFoodIcon
  },
  playbackFastForward: {
    default: playbackFastForwardIcon
  },
  playbackNext: {
    default: playbackNextIcon
  },
  playbackPause: {
    default: playbackPauseIcon
  },
  playbackPlay: {
    default: playbackPlayIcon
  },
  playbackPlayButton: {
    default: playbackPlayButtonIcon
  },
  playbackPrevious: {
    default: playbackPreviousIcon
  },
  playbackRewind: {
    default: playbackRewindIcon
  },
  playbackStop: {
    default: playbackStopIcon
  },
  playlist: {
    default: playlistIcon
  },
  plus: {
    default: plusIcon
  },
  poo: {
    default: pooIcon
  },
  postageStamp: {
    default: postageStampIcon
  },
  postcard: {
    default: postcardIcon
  },
  pot: {
    default: potIcon
  },
  pottedPlant: {
    default: pottedPlantIcon
  },
  poultry: {
    default: poultryIcon
  },
  power: {
    default: powerIcon
  },
  pram: {
    default: pramIcon
  },
  pregnancyTest: {
    default: pregnancyTestIcon
  },
  pretzel: {
    default: pretzelIcon
  },
  preview: {
    default: previewIcon
  },
  print: {
    default: printIcon
  },
  priorityHigh: {
    default: priorityHighIcon
  },
  priorityLow: {
    default: priorityLowIcon
  },
  priorityMid: {
    default: priorityMidIcon
  },
  private: {
    default: privateIcon
  },
  profile: {
    default: profileIcon
  },
  promoted: {
    default: promotedIcon
  },
  public: {
    default: publicIcon
  },
  pullRequest: {
    default: pullRequestIcon
  },
  pump: {
    default: pumpIcon
  },
  pumpBottle: {
    default: pumpBottleIcon
  },
  pushPin: {
    default: pushPinIcon
  },
  puzzle: {
    default: puzzleIcon
  },
  questionMark: {
    default: questionMarkIcon
  },
  radio: {
    default: radioIcon
  },
  rain: {
    default: rainIcon
  },
  rainbow: {
    default: rainbowIcon
  },
  receipt: {
    default: receiptIcon
  },
  redirect: {
    default: redirectIcon
  },
  redo: {
    default: redoIcon
  },
  reference: {
    default: referenceIcon
  },
  refresh: {
    default: refreshIcon
  },
  refreshReverse: {
    default: refreshReverseIcon
  },
  refrigerator: {
    default: refrigeratorIcon
  },
  remove: {
    default: removeIcon
  },
  rename: {
    default: renameIcon
  },
  reorder: {
    default: reorderIcon
  },
  repeat: {
    default: repeatIcon
  },
  reply: {
    default: replyIcon
  },
  replyAll: {
    default: replyAllIcon
  },
  report: {
    default: reportIcon
  },
  ringedPlanet: {
    default: ringedPlanetIcon
  },
  robot: {
    default: robotIcon
  },
  rocket: {
    default: rocketIcon
  },
  rollerSkate: {
    default: rollerSkateIcon
  },
  row: {
    default: rowIcon
  },
  rubberStamp: {
    default: rubberStampIcon
  },
  ruler: {
    default: rulerIcon
  },
  run: {
    default: runIcon
  },
  safetyPin: {
    default: safetyPinIcon
  },
  sagittarius: {
    default: sagittariusIcon
  },
  sailboat: {
    default: sailboatIcon
  },
  sandwich: {
    default: sandwichIcon
  },
  save: {
    default: saveIcon
  },
  scarf: {
    default: scarfIcon
  },
  school: {
    default: schoolIcon
  },
  science: {
    default: scienceIcon
  },
  scooter: {
    default: scooterIcon
  },
  scorpio: {
    default: scorpioIcon
  },
  screwdriver: {
    default: screwdriverIcon
  },
  script: {
    default: scriptIcon
  },
  scrubBrush: {
    default: scrubBrushIcon
  },
  search: {
    default: searchIcon
  },
  seed: {
    default: seedIcon
  },
  send: {
    default: sendIcon
  },
  sendTo: {
    default: sendToIcon
  },
  server: {
    default: serverIcon
  },
  serviceCounter: {
    default: serviceCounterIcon
  },
  setSquare: {
    default: setSquareIcon
  },
  share: {
    default: shareIcon
  },
  sharing: {
    default: sharingIcon
  },
  sheep: {
    default: sheepIcon
  },
  shell: {
    default: shellIcon
  },
  shield: {
    default: shieldIcon
  },
  shirt: {
    default: shirtIcon
  },
  shoe: {
    default: shoeIcon
  },
  shogi: {
    default: shogiIcon
  },
  shop: {
    default: shopIcon
  },
  shoppingBag: {
    default: shoppingBagIcon
  },
  shoppingBasket: {
    default: shoppingBasketIcon
  },
  shoppingCart: {
    default: shoppingCartIcon
  },
  shorts: {
    default: shortsIcon
  },
  shovelAndPail: {
    default: shovelAndPailIcon
  },
  shower: {
    default: showerIcon
  },
  shuffle: {
    default: shuffleIcon
  },
  signIn: {
    default: signInIcon
  },
  signOut: {
    default: signOutIcon
  },
  signatureDocument: {
    default: signatureDocumentIcon
  },
  sink: {
    default: sinkIcon
  },
  skateboard: {
    default: skateboardIcon
  },
  skipBackward: {
    default: skipBackwardIcon
  },
  skipForward: {
    default: skipForwardIcon
  },
  skirt: {
    default: skirtIcon
  },
  skull: {
    default: skullIcon
  },
  skullProfile: {
    default: skullProfileIcon
  },
  sleet: {
    default: sleetIcon
  },
  slide: {
    default: slideIcon
  },
  slidersHorizontal: {
    default: slidersHorizontalIcon
  },
  slidersVertical: {
    default: slidersVerticalIcon
  },
  slideshow: {
    default: slideshowIcon
  },
  slideshowPlay: {
    default: slideshowPlayIcon
  },
  smoking: {
    default: smokingIcon
  },
  smokingNo: {
    default: smokingNoIcon
  },
  snake: {
    default: snakeIcon
  },
  snareDrum: {
    default: snareDrumIcon
  },
  snippet: {
    default: snippetIcon
  },
  snorkel: {
    default: snorkelIcon
  },
  snowflake: {
    default: snowflakeIcon
  },
  soap: {
    default: soapIcon
  },
  soccer: {
    default: soccerIcon
  },
  sock: {
    default: sockIcon
  },
  sodaBottle: {
    default: sodaBottleIcon
  },
  softServe: {
    default: softServeIcon
  },
  soy: {
    default: soyIcon
  },
  spider: {
    default: spiderIcon
  },
  sponge: {
    default: spongeIcon
  },
  spoon: {
    default: spoonIcon
  },
  sprayBottle: {
    default: sprayBottleIcon
  },
  square: {
    default: squareIcon
  },
  squareAlternate: {
    default: squareAlternateIcon
  },
  squareCircle: {
    default: squareCircleIcon
  },
  squareDashed: {
    default: squareDashedIcon
  },
  squareOneFourth: {
    default: squareOneFourthIcon
  },
  squareThreeFourths: {
    default: squareThreeFourthsIcon
  },
  squareTwoFourths: {
    default: squareTwoFourthsIcon
  },
  squeezeTube: {
    default: squeezeTubeIcon
  },
  stairs: {
    default: stairsIcon
  },
  star: {
    default: starIcon
  },
  starHalf: {
    default: starHalfIcon
  },
  starOfLife: {
    default: starOfLifeIcon
  },
  starOutline: {
    default: starOutlineIcon
  },
  stars: {
    default: starsIcon
  },
  steeringWheel: {
    default: steeringWheelIcon
  },
  stethoscope: {
    default: stethoscopeIcon
  },
  sticker: {
    default: stickerIcon
  },
  stomach: {
    default: stomachIcon
  },
  stopwatch: {
    default: stopwatchIcon
  },
  storm: {
    default: stormIcon
  },
  stovetop: {
    default: stovetopIcon
  },
  strawberry: {
    default: strawberryIcon
  },
  stroller: {
    default: strollerIcon
  },
  subtask: {
    default: subtaskIcon
  },
  subtitles: {
    default: subtitlesIcon
  },
  suit: {
    default: suitIcon
  },
  suitClub: {
    default: suitClubIcon
  },
  suitDiamond: {
    default: suitDiamondIcon
  },
  suitHeart: {
    default: suitHeartIcon
  },
  suitSpade: {
    default: suitSpadeIcon
  },
  suitcase: {
    default: suitcaseIcon
  },
  sun: {
    default: sunIcon
  },
  sunglasses: {
    default: sunglassesIcon
  },
  sunrise: {
    default: sunriseIcon
  },
  sunscreen: {
    default: sunscreenIcon
  },
  sunset: {
    default: sunsetIcon
  },
  suspensionBridge: {
    default: suspensionBridgeIcon
  },
  swapHorizontally: {
    default: swapHorizontallyIcon
  },
  swapVertically: {
    default: swapVerticallyIcon
  },
  sword: {
    default: swordIcon
  },
  symbol: {
    default: symbolIcon
  },
  synagogue: {
    default: synagogueIcon
  },
  sync: {
    default: syncIcon
  },
  syncReverse: {
    default: syncReverseIcon
  },
  syringe: {
    default: syringeIcon
  },
  tSquare: {
    default: tSquareIcon
  },
  table: {
    default: tableIcon
  },
  tablet: {
    default: tabletIcon
  },
  tabs: {
    default: tabsIcon
  },
  tabsUser: {
    default: tabsUserIcon
  },
  tag: {
    default: tagIcon
  },
  takeoutBox: {
    default: takeoutBoxIcon
  },
  tampon: {
    default: tamponIcon
  },
  target: {
    default: targetIcon
  },
  taurus: {
    default: taurusIcon
  },
  taxi: {
    default: taxiIcon
  },
  teapot: {
    default: teapotIcon
  },
  telephone: {
    default: telephoneIcon
  },
  telescope: {
    default: telescopeIcon
  },
  temperatureCool: {
    default: temperatureCoolIcon
  },
  temperatureWarm: {
    default: temperatureWarmIcon
  },
  temple: {
    default: templeIcon
  },
  theatre: {
    default: theatreIcon
  },
  thinking: {
    default: thinkingIcon
  },
  thought: {
    default: thoughtIcon
  },
  thoughtAlert: {
    default: thoughtAlertIcon
  },
  thoughtDialogue: {
    default: thoughtDialogueIcon
  },
  throat: {
    default: throatIcon
  },
  thumbsDown: {
    default: thumbsDownIcon
  },
  thumbsUp: {
    default: thumbsUpIcon
  },
  ticket: {
    default: ticketIcon
  },
  ticketAdmission: {
    default: ticketAdmissionIcon
  },
  timeline: {
    default: timelineIcon
  },
  toaster: {
    default: toasterIcon
  },
  toilet: {
    default: toiletIcon
  },
  toiletPaper: {
    default: toiletPaperIcon
  },
  token: {
    default: tokenIcon
  },
  tooth: {
    default: toothIcon
  },
  torii: {
    default: toriiIcon
  },
  tornado: {
    default: tornadoIcon
  },
  tortoise: {
    default: tortoiseIcon
  },
  towel: {
    default: towelIcon
  },
  trafficCone: {
    default: trafficConeIcon
  },
  trafficLight: {
    default: trafficLightIcon
  },
  train: {
    default: trainIcon
  },
  trainHighSpeed: {
    default: trainHighSpeedIcon
  },
  trainLightRail: {
    default: trainLightRailIcon
  },
  trainMagneticLevitation: {
    default: trainMagneticLevitationIcon
  },
  trainMetro: {
    default: trainMetroIcon
  },
  transfers: {
    default: transfersIcon
  },
  translate: {
    default: translateIcon
  },
  tree: {
    default: treeIcon
  },
  triangle: {
    default: triangleIcon
  },
  triangleAlternate: {
    default: triangleAlternateIcon
  },
  triangleDashed: {
    default: triangleDashedIcon
  },
  triangleOneThird: {
    default: triangleOneThirdIcon
  },
  triangleTwoThirds: {
    default: triangleTwoThirdsIcon
  },
  trophy: {
    default: trophyIcon
  },
  tropicalCocktail: {
    default: tropicalCocktailIcon
  },
  truck: {
    default: truckIcon
  },
  trumpet: {
    default: trumpetIcon
  },
  tshirt: {
    default: tshirtIcon
  },
  tulip: {
    default: tulipIcon
  },
  tulipNameTag: {
    default: tulipNameTagIcon
  },
  tumbler: {
    default: tumblerIcon
  },
  tv: {
    default: tvIcon
  },
  umbrella: {
    default: umbrellaIcon
  },
  underwear: {
    default: underwearIcon
  },
  undo: {
    default: undoIcon
  },
  unfollow: {
    default: unfollowIcon
  },
  unlock: {
    default: unlockIcon
  },
  unlockKeyhole: {
    default: unlockKeyholeIcon
  },
  upload: {
    default: uploadIcon
  },
  uploadDocument: {
    default: uploadDocumentIcon
  },
  uploadFolder: {
    default: uploadFolderIcon
  },
  upward: {
    default: upwardIcon
  },
  user: {
    default: userIcon
  },
  userCircle: {
    default: userCircleIcon
  },
  userCircleDashed: {
    default: userCircleDashedIcon
  },
  userCircleFilled: {
    default: userCircleFilledIcon
  },
  username: {
    default: usernameIcon
  },
  vacuumCleaner: {
    default: vacuumCleanerIcon
  },
  verified: {
    default: verifiedIcon
  },
  videoCamera: {
    default: videoCameraIcon
  },
  videoCameraOff: {
    default: videoCameraOffIcon
  },
  videoGame: {
    default: videoGameIcon
  },
  videoGameClassic: {
    default: videoGameClassicIcon
  },
  videoGameJoystick: {
    default: videoGameJoystickIcon
  },
  videotape: {
    default: videotapeIcon
  },
  view: {
    default: viewIcon
  },
  viewOff: {
    default: viewOffIcon
  },
  vinylRecord: {
    default: vinylRecordIcon
  },
  violin: {
    default: violinIcon
  },
  virgo: {
    default: virgoIcon
  },
  vitruvianMan: {
    default: vitruvianManIcon
  },
  voicemail: {
    default: voicemailIcon
  },
  volcano: {
    default: volcanoIcon
  },
  volumeHigh: {
    default: volumeHighIcon
  },
  volumeOff: {
    default: volumeOffIcon
  },
  walk: {
    default: walkIcon
  },
  wall: {
    default: wallIcon
  },
  warning: {
    default: warningIcon
  },
  watchAnalog: {
    default: watchAnalogIcon
  },
  water: {
    default: waterIcon
  },
  whale: {
    default: whaleIcon
  },
  wheat: {
    default: wheatIcon
  },
  wheelchair: {
    default: wheelchairIcon
  },
  wheelchairAccess: {
    default: wheelchairAccessIcon
  },
  wheelchairMotorized: {
    default: wheelchairMotorizedIcon
  },
  whistle: {
    default: whistleIcon
  },
  wifi: {
    default: wifiIcon
  },
  wind: {
    default: windIcon
  },
  window: {
    default: windowIcon
  },
  wine: {
    default: wineIcon
  },
  wineBottle: {
    default: wineBottleIcon
  },
  wrappingPaper: {
    default: wrappingPaperIcon
  },
  wrench: {
    default: wrenchIcon
  },
  yinYang: {
    default: yinYangIcon
  },
  zoomIn: {
    default: zoomInIcon
  },
  zoomOut: {
    default: zoomOutIcon
  }
};
export {
  noticonImportMap
};
