import Block from '../../core/block/block.ts';
import withStore from '../../hocs/withStore.ts';
import { TProps } from '../../utils/types.ts';

class Chat extends Block {
    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        const { currentChatId } = this.props;

        return `
            <main class="main-chat">
                <aside class="main-chat__sidebar">
                    {{{ ProfileLink to='/profile' mixin='main-chat__link mb-6' text='Профиль' }}}                    
                    {{{ ChatList }}}
                </aside>
                <section class="main-chat__conversation">
                    ${currentChatId ? '{{{ Conversation }}}' : '{{{ EmptyConversation }}}'}
                </section>     
                {{{ ModalAddUser head='Добавить пользователя' }}}
                {{{ ModalDeleteUser head='Удалить пользователя' }}}
            </main>            
        `;
    }
}

const whitChats = withStore((state) => ({ ...state }));

export default whitChats(Chat);
