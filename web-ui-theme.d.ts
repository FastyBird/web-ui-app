import Vue, { PluginFunction, VueConstructor } from 'vue';

import FbLayoutContentComponent from './src/components/layout/FbContent/index.vue';
import FbLayoutFooterComponent from './src/components/layout/FbFooter/index.vue';
import FbLayoutHeaderComponent from './src/components/layout/FbHeader/index.vue';
import FbLayoutHeaderButtonComponent from './src/components/layout/FbHeader/Button/index.vue';
import FbLayoutHeaderContentComponent from './src/components/layout/FbHeader/Content/index.vue';
import FbLayoutHeaderHeadingComponent from './src/components/layout/FbHeader/Heading/index.vue';
import FbLayoutHeaderIconComponent from './src/components/layout/FbHeader/Icon/index.vue';
import FbLayoutHeaderMenuButtonComponent from './src/components/layout/FbHeader/MenuButton/index.vue';
import FbLayoutHeaderSpacerComponent from './src/components/layout/FbHeader/Spacer/index.vue';
import FbLayoutNavigationComponent from './src/components/layout/FbNavigation/index.vue';
import FbLayoutNavigationDividerComponent from './src/components/layout/FbNavigation/Divider/index.vue';
import FbLayoutNavigationItemComponent from './src/components/layout/FbNavigation/Item/index.vue';
import FbLayoutPhoneMenuComponent from './src/components/layout/FbPhoneMenu/index.vue';
import FbLayoutPhoneMenuButtonComponent from './src/components/layout/FbPhoneMenu/Button/index.vue';
import FbLayoutPhoneMenuContentComponent from './src/components/layout/FbPhoneMenu/Content/index.vue';
import FbLayoutPhoneMenuHeadingComponent from './src/components/layout/FbPhoneMenu/Heading/index.vue';
import FbLayoutSidebarComponent from './src/components/layout/FbSidebar/index.vue';
import FbLayoutSignBoxComponent from './src/components/layout/FbSignBox/index.vue';
import FbLayoutSignFooterComponent from './src/components/layout/FbSignFooter/index.vue';
import FbLayoutSignFooterItemComponent from './src/components/layout/FbSignFooter/Item/index.vue';
import FbLayoutTabsComponent from './src/components/layout/FbTabs/index.vue';
import FbLayoutTabsItemComponent from './src/components/layout/FbTabs/Item/index.vue';
import FbLayoutUserMenuComponent from './src/components/layout/FbUserMenu/index.vue';
import FbLayoutUserMenuDividerComponent from './src/components/layout/FbUserMenu/Divider/index.vue';
import FbLayoutUserMenuItemComponent from './src/components/layout/FbUserMenu/Item/index.vue';

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

export const FbLayoutContent: InstanceType<typeof FbLayoutContentComponent>;
export const FbLayoutFooter: InstanceType<typeof FbLayoutFooterComponent>;
export const FbLayoutHeader: InstanceType<typeof FbLayoutHeaderComponent>;
export const FbLayoutHeaderButton: InstanceType<typeof FbLayoutHeaderButtonComponent>;
export const FbLayoutHeaderContent: InstanceType<typeof FbLayoutHeaderContentComponent>;
export const FbLayoutHeaderIcon: InstanceType<typeof FbLayoutHeaderIconComponent>;
export const FbLayoutHeaderHeading: InstanceType<typeof FbLayoutHeaderHeadingComponent>;
export const FbLayoutHeaderMenuButton: InstanceType<typeof FbLayoutHeaderMenuButtonComponent>;
export const FbLayoutHeaderSpacer: InstanceType<typeof FbLayoutHeaderSpacerComponent>;
export const FbLayoutNavigation: InstanceType<typeof FbLayoutNavigationComponent>;
export const FbLayoutNavigationDivider: InstanceType<typeof FbLayoutNavigationDividerComponent>;
export const FbLayoutNavigationItem: InstanceType<typeof FbLayoutNavigationItemComponent>;
export const FbLayoutPhoneMenu: InstanceType<typeof FbLayoutPhoneMenuComponent>;
export const FbLayoutPhoneMenuButton: InstanceType<typeof FbLayoutPhoneMenuButtonComponent>;
export const FbLayoutPhoneMenuContent: InstanceType<typeof FbLayoutPhoneMenuContentComponent>;
export const FbLayoutPhoneMenuHeading: InstanceType<typeof FbLayoutPhoneMenuHeadingComponent>;
export const FbLayoutSidebar: InstanceType<typeof FbLayoutSidebarComponent>;
export const FbLayoutSignBox: InstanceType<typeof FbLayoutSignBoxComponent>;
export const FbLayoutSignFooter: InstanceType<typeof FbLayoutSignFooterComponent>;
export const FbLayoutSignFooterItem: InstanceType<typeof FbLayoutSignFooterItemComponent>;
export const FbLayoutTabs: InstanceType<typeof FbLayoutTabsComponent>;
export const FbLayoutTabsItem: InstanceType<typeof FbLayoutTabsItemComponent>;
export const FbLayoutUserMenu: InstanceType<typeof FbLayoutUserMenuComponent>;
export const FbLayoutUserMenuDivider: InstanceType<typeof FbLayoutUserMenuDividerComponent>;
export const FbLayoutUserMenuItem: InstanceType<typeof FbLayoutUserMenuItemComponent>;

export { FbMenuItemType as FbMenuItemType } from './src/components/types'
export { FbSizeTypes as FbSizeTypes } from './src/components/types'
export { FbFormInputTypeTypes as FbFormInputTypeTypes } from './src/components/types'
export { FbFormOrientationTypes as FbFormOrientationTypes } from './src/components/types'
export { FbFormResultType as FbFormResultType } from './src/components/types'
export { FbUiModalVariantType as FbUiModalVariantType } from './src/components/types'
export { FbUiButtonButtonTypes as FbUiButtonButtonTypes } from './src/components/types'
export { FbUiButtonVariantTypes as FbUiButtonVariantTypes } from './src/components/types'
export { FbUiAlertVariantTypes as FbUiAlertVariantTypes } from './src/components/types'
export { FbUiConfirmationWindowVariantTypes as FbUiConfirmationWindowVariantTypes } from './src/components/types'
export { FbUiConfirmationWindowPrimaryButtonTypes as FbUiConfirmationWindowPrimaryButtonTypes } from './src/components/types'
export { FbUiDividerVariantTypes as FbUiDividerVariantTypes } from './src/components/types'
export { FbUiSpinnerVariantTypes as FbUiSpinnerVariantTypes } from './src/components/types'
export { FbUiSwitchElementVariantTypes as FbUiSwitchElementVariantTypes } from './src/components/types'
export { FbLayoutHeaderHeadingAlign as FbLayoutHeaderHeadingAlign } from './src/components/types'

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
