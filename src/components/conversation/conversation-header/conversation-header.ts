import Block from '../../../utils/block.ts';
import noPhoto from '../../../images/no-photo.svg';
import addIcon from '../../../images/add-icon.svg';
import removeIcon from '../../../images/remove-icon.svg';
import { TConversationHeader } from './type.ts';

export default class ConversationHeader extends Block {
    constructor(props: TConversationHeader) {
        super(props);
    }

    render(): string {
        const { name, image } = this.props;

        return `
            <div class="conversation__header conversation-header">
                <img src="${image || noPhoto}" alt="" width="34" class="conversation-header__photo" />
                <span class="conversation-header__name">${name}</span>
                <div class="conversation-header__additional-menu-wrapper">
                    <div class="conversation-header__additional-menu-btn">
                        <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                            <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                            <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
                        </svg>
                    </div>
                    <div class="conversation-header__additional-menu additional-menu">
                        {{{ Button name='Добавить пользователя' image='${addIcon}' type='addUser' }}}
                        {{{ Button name='Удалить пользователя' image='${removeIcon}' type='removeUser' }}}
                    </div>
                </div>
            </div>
        `;
    }
}
