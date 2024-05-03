import { defineComponent, renderSlot, watch } from 'vue';
import { provideGlobalConfig } from './hooks';
import { configProviderProps } from './config-provider-props';

import type { RendererElement, RendererNode, VNode } from 'vue';
import type { MessageConfigContext } from '../../message';

export const messageConfig: MessageConfigContext = {};

const ConfigProvider = defineComponent({
	name: 'FbConfigProvider',

	props: configProviderProps,

	setup(props, { slots }) {
		watch(
			() => props.message,
			(val) => {
				Object.assign(messageConfig, val ?? {});
			},
			{ immediate: true, deep: true }
		);

		const config = provideGlobalConfig(props);

		return (): VNode<RendererNode, RendererElement, { [key: string]: any }> => renderSlot(slots, 'default', { config: config?.value });
	},
});

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;

export default ConfigProvider;
