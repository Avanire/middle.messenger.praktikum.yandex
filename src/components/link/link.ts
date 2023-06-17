import Block from '../../core/block/block.ts';
import router from '../../core/router.ts';
import { TLink } from './type.ts';

export default class Link extends Block {
    constructor(props: TLink) {
        super({
            ...props,
            events: {
                click: (e: MouseEvent) => {
                    e.preventDefault();

                    router.go(props.to);
                },
            },
        });
    }

    render(): string {
        const { text, mixin, to } = this.props;

        return `<a class="link ${mixin}" href="${to}">${text}</a>`;
    }
}
