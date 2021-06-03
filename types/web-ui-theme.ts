import Vue, { PluginFunction, VueConstructor } from 'vue'

export interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

export enum FbMenuItemTypes {
  LINK = 'link',
  NUXT_LINK = 'nuxt_link',
  BUTTON = 'button',
  TEXT = 'text',
}

export enum FbSizeTypes {
  EXTRA_SMALL = 'xs',
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
  NONE = 'none',
}

export enum FbFormInputTypeTypes {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  NUMBER = 'number',
  TEL = 'tel',
  URL = 'url',
}

export enum FbFormOrientationTypes {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  INLINE = 'inline',
}

export enum FbFormResultTypes {
  NONE = 'none',
  WORKING = 'working',
  ERROR = 'error',
  OK = 'ok',
}

export enum FbUiModalVariantTypes {
  DEFAULT = 'default',
  PHONE = 'phone',
  TABLET = 'tablet',
}

export enum FbUiButtonButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export enum FbUiButtonVariantTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  OUTLINE_DEFAULT = 'outline-default',
  OUTLINE_PRIMARY = 'outline-primary',
  OUTLINE_SUCCESS = 'outline-success',
  OUTLINE_DANGER = 'outline-danger',
  OUTLINE_WARNING = 'outline-warning',
  OUTLINE_INFO = 'outline-info',
  LINK = 'link',
  LINK_DEFAULT = 'link-default',
}

export enum FbUiAlertVariantTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum FbUiConfirmationWindowVariantTypes {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum FbUiConfirmationWindowPrimaryButtonTypes {
  YES = 'yes',
  NO = 'no',
}

export enum FbUiDividerVariantTypes {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export enum FbUiSpinnerVariantTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum FbUiSwitchElementVariantTypes {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
}

export enum FbLayoutHeaderHeadingAlign {
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
}

export const FbFormCheckbox: VueConstructor<Vue>;
export const FbFormCheckboxesGroup: VueConstructor<Vue>;
export const FbFormInput: VueConstructor<Vue>;
export const FbFormRadioButton: VueConstructor<Vue>;
export const FbFormRadioButtonsGroup: VueConstructor<Vue>;
export const FbFormSelect: VueConstructor<Vue>;
export const FbFormTextArea: VueConstructor<Vue>;

export const FbUiAlert: VueConstructor<Vue>;
export const FbUiButton: VueConstructor<Vue>;
export const FbUiCardBox: VueConstructor<Vue>;
export const FbUiComponentLoading: VueConstructor<Vue>;
export const FbUiComponentLoadingError: VueConstructor<Vue>;
export const FbUiConfirmationWindow: VueConstructor<Vue>;
export const FbUiContent: VueConstructor<Vue>;
export const FbUiDivider: VueConstructor<Vue>;
export const FbUiIconWithChild: VueConstructor<Vue>;
export const FbUiItemsContainer: VueConstructor<Vue>;
export const FbUiLoadingBox: VueConstructor<Vue>;
export const FbUiMediaItem: VueConstructor<Vue>;
export const FbUiModalForm: VueConstructor<Vue>;
export const FbUiModalHeader: VueConstructor<Vue>;
export const FbUiModalHeaderIcon: VueConstructor<Vue>;
export const FbUiModalInfo: VueConstructor<Vue>;
export const FbUiModalWindow: VueConstructor<Vue>;
export const FbUiNoResults: VueConstructor<Vue>;
export const FbUiPageLoading: VueConstructor<Vue>;
export const FbUiResultErr: VueConstructor<Vue>;
export const FbUiResultOk: VueConstructor<Vue>;
export const FbUiSpinner: VueConstructor<Vue>;
export const FbUiSwitchElement: VueConstructor<Vue>;
export const FbUiTransitionExpand: VueConstructor<Vue>;

export const FbLayoutContent: VueConstructor<Vue>;
export const FbLayoutFooter: VueConstructor<Vue>;
export const FbLayoutHeader: VueConstructor<Vue>;
export const FbLayoutHeaderButton: VueConstructor<Vue>;
export const FbLayoutHeaderContent: VueConstructor<Vue>;
export const FbLayoutHeaderIcon: VueConstructor<Vue>;
export const FbLayoutHeaderHeading: VueConstructor<Vue>;
export const FbLayoutHeaderMenuButton: VueConstructor<Vue>;
export const FbLayoutHeaderSpacer: VueConstructor<Vue>;
export const FbLayoutNavigation: VueConstructor<Vue>;
export const FbLayoutNavigationDivider: VueConstructor<Vue>;
export const FbLayoutNavigationItem: VueConstructor<Vue>;
export const FbLayoutPhoneMenu: VueConstructor<Vue>;
export const FbLayoutPhoneMenuButton: VueConstructor<Vue>;
export const FbLayoutPhoneMenuContent: VueConstructor<Vue>;
export const FbLayoutPhoneMenuHeading: VueConstructor<Vue>;
export const FbLayoutSidebar: VueConstructor<Vue>;
export const FbLayoutSignBox: VueConstructor<Vue>;
export const FbLayoutSignFooter: VueConstructor<Vue>;
export const FbLayoutSignFooterItem: VueConstructor<Vue>;
export const FbLayoutTabs: VueConstructor<Vue>;
export const FbLayoutTabsItem: VueConstructor<Vue>;
export const FbLayoutUserMenu: VueConstructor<Vue>;
export const FbLayoutUserMenuDivider: VueConstructor<Vue>;
export const FbLayoutUserMenuItem: VueConstructor<Vue>;

declare const WebUiTheme: { install: InstallFunction };

// Theme mixins
declare module 'vue/types/vue' {
  interface Vue {
    getEventElementsPath(event: UIEvent): Array<EventTarget | Element>
    slotExists(name: string): boolean
  }

  interface VueConstructor {
    getEventElementsPath(event: UIEvent): Array<EventTarget | Element>
    slotExists(name: string): boolean
  }
}
