import { TInput } from '../input/type';

export type TInputWrapperProps = {
    id: string,
    title: string,
    errorMessage?: string
} & TInput;
