var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

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
var init_SvgIcon = () => {};

// src/nds-icons/iconUtils.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
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
function createIconGroup(iconGroupName, variants, searchTerms) {
  return {
    name: iconGroupName,
    variants,
    searchTerms
  };
}
var iconGroupVariantNames, logoVariantNames, deprecatedIconGroupVariantNames, iconVariantNames, ICON_SIZE, ICON_SIZE_FOR_VARIANT;
var init_iconUtils = __esm(() => {
  init_SvgIcon();
  iconGroupVariantNames = [
    "fillSmall",
    "small",
    "fill",
    "default"
  ];
  logoVariantNames = ["default", "darkMode"];
  deprecatedIconGroupVariantNames = [
    "micro",
    "mini",
    "small",
    "default",
    "large",
    "extraLarge",
    "max"
  ];
  iconVariantNames = [
    ...iconGroupVariantNames,
    ...deprecatedIconGroupVariantNames,
    ...logoVariantNames
  ];
  ICON_SIZE = {
    xxs: 12,
    xs: 14,
    sm: 16,
    default: 20,
    lg: 22,
    xl: 32
  };
  ICON_SIZE_FOR_VARIANT = {
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
});

// src/nds-icons/src/peekBottom/default.icon.tsx
var exports_default_icon = {};
__export(exports_default_icon, {
  peekBottomIcon: () => peekBottomIcon,
  iconDefinition: () => iconDefinition
});
import { jsxDEV as jsxDEV3, Fragment } from "react/jsx-dev-runtime";
var iconDefinition, peekBottomIcon;
var init_default_icon = __esm(() => {
  init_iconUtils();
  iconDefinition = {
    viewBox: "0 0 20 20",
    svg: /* @__PURE__ */ jsxDEV3(Fragment, {
      children: [
        /* @__PURE__ */ jsxDEV3("path", {
          d: "M6.93 11.625a.5.5 0 0 0-.5.5v1.25a.5.5 0 0 0 .5.5h6.145a.5.5 0 0 0 .5-.5v-1.25a.5.5 0 0 0-.5-.5z"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV3("path", {
          d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 15.5 4.125zM3.625 6.25c0-.483.392-.875.875-.875h11c.483 0 .875.392.875.875v7.5a.875.875 0 0 1-.875.875h-11a.875.875 0 0 1-.875-.875z"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  };
  peekBottomIcon = createIcon("peekBottom", iconDefinition);
});

// src/nds-icons/src/peekBottom/small.icon.tsx
var exports_small_icon = {};
__export(exports_small_icon, {
  peekBottomSmallIcon: () => peekBottomSmallIcon,
  iconDefinition: () => iconDefinition2
});
import { jsxDEV as jsxDEV4, Fragment as Fragment2 } from "react/jsx-dev-runtime";
var iconDefinition2, peekBottomSmallIcon;
var init_small_icon = __esm(() => {
  init_iconUtils();
  iconDefinition2 = {
    viewBox: "0 0 16 16",
    svg: /* @__PURE__ */ jsxDEV4(Fragment2, {
      children: [
        /* @__PURE__ */ jsxDEV4("path", {
          d: "M5.55 9.55a.25.25 0 0 1 .25-.25h4.4a.25.25 0 0 1 .25.25v.9a.25.25 0 0 1-.25.25H5.8a.25.25 0 0 1-.25-.25z"
        }, undefined, false, undefined, this),
        /* @__PURE__ */ jsxDEV4("path", {
          d: "M2.2 5.25A1.8 1.8 0 0 1 4 3.45h8a1.8 1.8 0 0 1 1.8 1.8v5.5a1.8 1.8 0 0 1-1.8 1.8H4a1.8 1.8 0 0 1-1.8-1.8zm1.8-.7a.7.7 0 0 0-.7.7v5.5a.7.7 0 0 0 .7.7h8a.7.7 0 0 0 .7-.7v-5.5a.7.7 0 0 0-.7-.7z"
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  };
  peekBottomSmallIcon = createIcon("peekBottomSmall", iconDefinition2);
});

// src/nds-icons/src/peekBottom/fill.icon.tsx
var exports_fill_icon = {};
__export(exports_fill_icon, {
  peekBottomFillIcon: () => peekBottomFillIcon,
  iconDefinition: () => iconDefinition3
});
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var iconDefinition3, peekBottomFillIcon;
var init_fill_icon = __esm(() => {
  init_iconUtils();
  iconDefinition3 = {
    viewBox: "0 0 20 20",
    svg: /* @__PURE__ */ jsxDEV5("path", {
      d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125h-11a2.125 2.125 0 0 1-2.125-2.125zm4.555 5.375a.5.5 0 0 0-.5.5v1.25a.5.5 0 0 0 .5.5h6.145a.5.5 0 0 0 .5-.5v-1.25a.5.5 0 0 0-.5-.5z"
    }, undefined, false, undefined, this)
  };
  peekBottomFillIcon = createIcon("peekBottomFill", iconDefinition3);
});

// src/nds-icons/src/peekBottom/fillSmall.icon.tsx
var exports_fillSmall_icon = {};
__export(exports_fillSmall_icon, {
  peekCornerFillSmallIcon: () => peekCornerFillSmallIcon,
  iconDefinition: () => iconDefinition4
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var iconDefinition4, peekCornerFillSmallIcon;
var init_fillSmall_icon = __esm(() => {
  init_iconUtils();
  iconDefinition4 = {
    viewBox: "0 0 16 16",
    svg: /* @__PURE__ */ jsxDEV6("path", {
      d: "M2.2 5.25A1.8 1.8 0 0 1 4 3.45h8a1.8 1.8 0 0 1 1.8 1.8v5.5a1.8 1.8 0 0 1-1.8 1.8H4a1.8 1.8 0 0 1-1.8-1.8zM9.3 7.3a.25.25 0 0 0-.25.25v2.9c0 .138.112.25.25.25h2.4a.25.25 0 0 0 .25-.25v-2.9a.25.25 0 0 0-.25-.25z"
    }, undefined, false, undefined, this)
  };
  peekCornerFillSmallIcon = createIcon("peekCornerFillSmall", iconDefinition4);
});

// src/nds-icons/src/peekBottom/index.tsx
init_iconUtils();
var peekCornerIconGroup = createIconGroup("peekCorner", {
  default: {
    loader: () => Promise.resolve().then(() => (init_default_icon(), exports_default_icon))
  },
  small: {
    loader: () => Promise.resolve().then(() => (init_small_icon(), exports_small_icon))
  },
  fill: {
    loader: () => Promise.resolve().then(() => (init_fill_icon(), exports_fill_icon))
  },
  fillSmall: {
    loader: () => Promise.resolve().then(() => (init_fillSmall_icon(), exports_fillSmall_icon))
  }
}, ["view", "center", "peek", "modal", "switch"]);
export {
  peekCornerIconGroup
};
