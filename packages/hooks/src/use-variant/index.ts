import { computed, inject, unref } from 'vue';

import { buildProp } from '@fastybird/web-ui-utils';
import { VARIANTS } from '@fastybird/web-ui-constants';

import type { ComputedRef, InjectionKey, Ref } from 'vue';
import type { Variant } from '@fastybird/web-ui-constants';

export const useVariantProp = buildProp({
	type: String,
	values: VARIANTS,
	required: false,
});

export const useVariantProps = {
	variant: useVariantProp,
};

export interface VariantContext {
	variant: Ref<Variant>;
}

export const VARIANT_INJECTION_KEY: InjectionKey<VariantContext> = Symbol('variant');

export const useGlobalVariant = (): ComputedRef<Variant> => {
	const injectedVariant = inject(VARIANT_INJECTION_KEY, {} as VariantContext);

	return computed<Variant>(() => {
		return unref(injectedVariant.variant) || '';
	});
};
