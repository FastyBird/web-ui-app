import { buildProps, definePropType } from '@fastybird/web-ui-utils';

import type { ExtractPropTypes } from 'vue';
import type Popper from './popper.vue';

const effects = ['light', 'dark'] as const;
const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const;

export const roleTypes = ['dialog', 'grid', 'group', 'listbox', 'menu', 'navigation', 'tooltip', 'tree'] as const;

export type PopperEffect = (typeof effects)[number];

export type PopperTrigger = (typeof triggers)[number];

export const popperProps = buildProps({
	/**
	 * @description
	 */
	role: {
		type: definePropType<string>(String),
		values: roleTypes,
		default: 'tooltip',
	},
} as const);

export type PopperProps = ExtractPropTypes<typeof popperProps>;

export type PopperInstance = InstanceType<typeof Popper>;
