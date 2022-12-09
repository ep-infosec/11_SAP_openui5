sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/asset-registries/Themes", "sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css", "./sap_fiori_3/parameters-bundle.css"], function (_exports, _Themes, _parametersBundle, _parametersBundle2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _parametersBundle = _interopRequireDefault(_parametersBundle);
  _parametersBundle2 = _interopRequireDefault(_parametersBundle2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents-theming", "sap_fiori_3", () => _parametersBundle.default);
  (0, _Themes.registerThemePropertiesLoader)("@ui5/webcomponents", "sap_fiori_3", () => _parametersBundle2.default);
  var _default = {
    packageName: "@ui5/webcomponents",
    fileName: "themes/Avatar.css",
    content: ":host(:not([hidden])){display:inline-block;box-sizing:border-box}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([focused]){outline:var(--_ui5_avatar_outline);outline-offset:var(--_ui5_avatar_focus_offset)}:host([interactive]){cursor:pointer}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-avatar-initials-border);outline:none;color:var(--ui5-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%}:host([_size=XS]),:host([size=XS]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5_avatar_fontsize_XS)}:host([_size=S]),:host([size=S]){min-height:3rem;min-width:3rem;font-size:var(--_ui5_avatar_fontsize_S)}:host([_size=M]),:host([size=M]){min-height:4rem;min-width:4rem;font-size:var(--_ui5_avatar_fontsize_M)}:host([_size=L]),:host([size=L]){min-height:5rem;min-width:5rem;font-size:var(--_ui5_avatar_fontsize_L)}:host([_size=XL]),:host([size=XL]){min-height:7rem;min-width:7rem;font-size:var(--_ui5_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5_avatar_fontsize_S);width:var(--_ui5_avatar_fontsize_S);color:inherit}:host([_size=XS]) .ui5-avatar-icon,:host([size=XS]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XS);width:var(--_ui5_avatar_icon_XS)}:host([_size=S]) .ui5-avatar-icon,:host([size=S]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_S);width:var(--_ui5_avatar_icon_S)}:host([_size=M]) .ui5-avatar-icon,:host([size=M]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_M);width:var(--_ui5_avatar_icon_M)}:host([_size=L]) .ui5-avatar-icon,:host([size=L]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_L);width:var(--_ui5_avatar_icon_L)}:host([_size=XL]) .ui5-avatar-icon,:host([size=XL]) .ui5-avatar-icon{height:var(--_ui5_avatar_icon_XL);width:var(--_ui5_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape=Square]),:host([shape=Square]) ::slotted(*){border-radius:var(--ui5-avatar-border-radius)}:host(:not([_has-image])),:host(:not([color-scheme])),:host([_color-scheme=Accent6]),:host([color-scheme=Accent6]){background-color:var(--ui5-avatar-accent6);color:var(--ui5-avatar-accent6-color);border-color:var(--ui5-avatar-accent6-border-color)}:host([_color-scheme=Accent1]),:host([color-scheme=Accent1]){background-color:var(--ui5-avatar-accent1);color:var(--ui5-avatar-accent1-color);border-color:var(--ui5-avatar-accent1-border-color)}:host([_color-scheme=Accent2]),:host([color-scheme=Accent2]){background-color:var(--ui5-avatar-accent2);color:var(--ui5-avatar-accent2-color);border-color:var(--ui5-avatar-accent2-border-color)}:host([_color-scheme=Accent3]),:host([color-scheme=Accent3]){background-color:var(--ui5-avatar-accent3);color:var(--ui5-avatar-accent3-color);border-color:var(--ui5-avatar-accent3-border-color)}:host([_color-scheme=Accent4]),:host([color-scheme=Accent4]){background-color:var(--ui5-avatar-accent4);color:var(--ui5-avatar-accent4-color);border-color:var(--ui5-avatar-accent4-border-color)}:host([_color-scheme=Accent5]),:host([color-scheme=Accent5]){background-color:var(--ui5-avatar-accent5);color:var(--ui5-avatar-accent5-color);border-color:var(--ui5-avatar-accent5-border-color)}:host([_color-scheme=Accent7]),:host([color-scheme=Accent7]){background-color:var(--ui5-avatar-accent7);color:var(--ui5-avatar-accent7-color);border-color:var(--ui5-avatar-accent7-border-color)}:host([_color-scheme=Accent8]),:host([color-scheme=Accent8]){background-color:var(--ui5-avatar-accent8);color:var(--ui5-avatar-accent8-color);border-color:var(--ui5-avatar-accent8-border-color)}:host([_color-scheme=Accent9]),:host([color-scheme=Accent9]){background-color:var(--ui5-avatar-accent9);color:var(--ui5-avatar-accent9-color);border-color:var(--ui5-avatar-accent9-border-color)}:host([_color-scheme=Accent10]),:host([color-scheme=Accent10]){background-color:var(--ui5-avatar-accent10);color:var(--ui5-avatar-accent10-color);border-color:var(--ui5-avatar-accent10-border-color)}:host([_color-scheme=Placeholder]),:host([color-scheme=Placeholder]){background-color:var(--ui5-avatar-placeholder);color:var(--ui5-avatar-placeholder-color);border-color:var(--ui5-avatar-placeholder-border-color)}:host([_has-image]){background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}"
  };
  _exports.default = _default;
});