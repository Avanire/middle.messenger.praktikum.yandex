import Block from '../../utils/block.ts';
import { TProps } from '../../utils/types.ts';

export default class Chat extends Block {
    constructor(props: TProps) {
        super(props);
    }

    render(): string {
        return `
            <main class="main-chat">
                <aside class="main-chat__sidebar">
                    <a href="../../pages/profile/profile.html" class="main-chat__link mb-6">Профиль</a>
                    <label for="chat-search">
                        <input type="text" name="chat-search" id="chat-search" placeholder="Поиск" class="main-chat__search-input mb-4">
                    </label>
                    <div class="main-chat__list">
                        {{{ PersonChat 
                                name='Андрей' 
                                datetime='10:49' 
                                message='Сообщение не особо длинное' 
                        }}}
                        {{{ PersonChat 
                                name='Антон' 
                                datetime='Ср' 
                                message='Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас' 
                                counter='4' 
                        }}}
                        {{{ PersonChat 
                                name='Вероника' 
                                datetime='Вс' 
                                message='Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для вас' 
                        }}}
                    </div>
                </aside>
                <section class="main-chat__conversation">
                    {{{ Conversation }}}
                </section>     
                {{{ ModalAddUser head='Добавить пользователя' }}}
                {{{ ModalDeleteUser head='Удалить пользователя' }}}
            </main>            
        `;
    }
}
