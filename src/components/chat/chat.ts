import Block from '../../core/block/block';
import withStore from '../../hocs/withStore';
import { TProps } from '../../utils/types';
import { ROUTES } from '../../utils/constant';

class Chat extends Block {
    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        const { currentChatId } = this.props;

        return `
            <main class="main-chat">
                <aside class="main-chat__sidebar">
                    {{{ ProfileLink to='${ROUTES.Profile}' mixin='main-chat__link mb-6' text='Профиль' }}}                    
                    {{{ ChatList }}}
                </aside>
                <section class="main-chat__conversation">
                    ${currentChatId ? '{{{ Conversation }}}' : '{{{ EmptyConversation }}}'}
                </section>     
                {{{ ModalAddUser }}}
                {{{ ModalDeleteUser }}}
                {{{ ModalAddChatAvatar }}}
            </main>            
        `;
    }
}

const whitChats = withStore(state => ({ ...state }));

export default whitChats(Chat);
