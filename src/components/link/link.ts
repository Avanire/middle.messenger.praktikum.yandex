import Block from '../../core/block/block';
import router from '../../core/router';
import { TLink } from './type';

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
