import Block from '../../../core/block/block';
import noPhoto from '../../../images/no-photo.svg';
import { TConversationHeader } from './type';
import { API_URL } from '../../../utils/constant';

export default class ConversationHeader extends Block {
    constructor(props: TConversationHeader) {
        super(props);
    }

    render(): string {
        const { title, avatar } = this.props;

        return `
            <div class="conversation__header conversation-header">
                <img src="${avatar ? `${API_URL}/resources/${avatar}` : noPhoto}" alt="">
                <span class="conversation-header__name">${title}</span>                
            </div>
        `;
    }
}
