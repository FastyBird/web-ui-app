import Vue, { PluginFunction, VueConstructor } from 'vue';

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const WebUiTheme: { install: InstallFunction };
export default WebUiTheme;

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
export const FbLayoutHeaderHeading: VueConstructor<Vue>;
export const FbLayoutHeaderSpacer: VueConstructor<Vue>;
export const FbLayoutNavigation: VueConstructor<Vue>;
export const FbLayoutNavigationDivider: VueConstructor<Vue>;
export const FbLayoutNavigationItem: VueConstructor<Vue>;
export const FbLayoutLayoutPhoneMenu: VueConstructor<Vue>;
export const FbLayoutSidebar: VueConstructor<Vue>;
export const FbLayoutSignBox: VueConstructor<Vue>;
export const FbLayoutSignFooter: VueConstructor<Vue>;
export const FbLayoutSignFooterItem: VueConstructor<Vue>;
export const FbLayoutTabs: VueConstructor<Vue>;
export const FbLayoutTabsItem: VueConstructor<Vue>;
export const FbLayoutUserMenu: VueConstructor<Vue>;
export const FbLayoutUserMenuDivider: VueConstructor<Vue>;
export const FbLayoutUserMenuItem: VueConstructor<Vue>;

export { FbMenuItemType as FbMenuItemType } from './src/components/types'
export { FbSizeTypes as FbSizeTypes } from './src/components/types'
export { FbFormOrientationTypes as FbFormOrientationTypes } from './src/components/types'
export { FbFormResultType as FbFormResultType } from './src/components/types'

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
