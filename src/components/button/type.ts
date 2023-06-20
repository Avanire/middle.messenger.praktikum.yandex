import { TGeneralProps } from '../../utils/types.ts';

export type TButtonProps = {
    mixin?: string,
    id: string,
    type: string,
    name: string
    onClick: () => void
} & TGeneralProps;
