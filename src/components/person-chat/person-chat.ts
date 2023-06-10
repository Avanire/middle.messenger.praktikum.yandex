import Block from '../../utils/block.ts';
import noPhoto from '../../images/no-photo.svg';
import { TPersonChat } from './type.ts';

export default class PersonChat extends Block {
    constructor(props: TPersonChat) {
        super(props);
    }

    render(): string {
        const {
            name, datetime, message, counter, image,
        } = this.props;

        return `
            <section class="person-chat">
                <div class="person-chat__img">
                    <img src="${image || noPhoto}" alt="">
                </div>
                <div class="person-chat__info">
                    <div class="person-chat__row mb-1">
                        <span class="person-chat__author">${name}</span>
                        <span class="person-chat__time">${datetime}</span>
                    </div>
                    <div class="person-chat__row">
                        <span class="person-chat__message">${message}</span>
                        ${counter ? `<span class="person-chat__counter">${counter}</span>` : ''}
                    </div>
                </div>
            </section>
        `;
    }
}
