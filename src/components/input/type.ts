import { TGeneralProps } from '../../utils/types.ts';

export type TInput = {
    type: string,
    value?: string,
    name: string,
    pattern?: string,
    placeholder?: string,
    required?: boolean,
} & TGeneralProps;
