import type { InjectionKey } from 'vue';
import type { RadioGroupProps } from './radio-group';

export interface RadioGroupContext extends RadioGroupProps {
	changeEvent: (val: RadioGroupProps['modelValue']) => void;
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContextKey');
