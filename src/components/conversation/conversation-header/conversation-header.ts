import Block from '../../../core/block/block.ts';
import noPhoto from '../../../images/no-photo.svg';
import { TConversationHeader } from './type.ts';

export default class ConversationHeader extends Block {
    constructor(props: TConversationHeader) {
        super(props);
    }

    render(): string {
        const { title, avatar } = this.props;

        return `
            <div class="conversation__header conversation-header">
                <img src="${avatar || noPhoto}" alt="" width="34" class="conversation-header__photo" />
                <span class="conversation-header__name">${title}</span>                
            </div>
        `;
    }
}
