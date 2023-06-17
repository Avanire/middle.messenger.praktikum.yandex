import Block from '../../../core/block/block.ts';
import img from '../../../images/chat-img.jpg';

export default class EmptyConversation extends Block {
    constructor() {
        super();
    }

    render(): string {
        return `
            <section class="empty-conversation">
                <img src="${img}" alt="" class="empty-conversation__img" width="600">
                <h2 class="empty-conversation__title">Выберите чат</h2>
                <div class="empty-conversation__text">Отправляйте и получайте сообщения с помощью чата</div>
            </section>
        `;
    }
}
