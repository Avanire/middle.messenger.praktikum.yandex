import { TInput } from '../input/type.ts';

export type TInputWrapperProps = {
    id: string,
    title: string,
    errorMessage?: string
} & TInput;
