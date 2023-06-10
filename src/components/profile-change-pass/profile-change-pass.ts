import Block from '../../utils/block.ts';
import noPhoto from '../../images/profile-no-photo.svg';
import { PASSWORD_REGEXP } from '../../utils/constant.ts';
import { TProfileChangePass } from './type.ts';

export default class ProfileChangePass extends Block {
    constructor(props: TProfileChangePass) {
        super({
            ...props,
            events: {
                submit: (e: FormDataEvent) => this.handler(e),
            },
        });
    }

    handler(e: Event) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        // eslint-disable-next-line no-console
        console.log(formData);
    }

    render(): string {
        const { image } = this.props;

        return `            
            <main class="container profile__content">
                <div class="profile__photo-wrapper mb-5">
                    <img src="${image || noPhoto}" alt="" class="profile__photo">
                </div>
                
                <form action="" class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ InputWrapper id='oldPassword' name='oldPassword' type='password' title='Старый пароль' required='true' pattern='${PASSWORD_REGEXP}' }}}
                        
                        {{{ InputWrapper id='newPassword' name='newPassword' type='password' title='Новый пароль' required='true' pattern='${PASSWORD_REGEXP}' }}}                       
                    </div>
                    {{{ Button id='save-pass' mixin='btn--prime' name='Сохранить' type='submit' }}}                        
                </form>                    
            </main>            
        `;
    }
}
