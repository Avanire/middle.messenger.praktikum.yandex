import Block from '../../utils/block.ts';
import {
    EMAIL_REGEXP, LOGIN_REGEXP, NAME_REGEXP, PHONE_REGEXP,
} from '../../utils/constant.ts';
import { TProfileEditForm } from './type.ts';
import noPhoto from '../../images/profile-no-photo.svg';

export default class ProfileEditForm extends Block {
    constructor(props: TProfileEditForm) {
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
        const {
            email, login, firstName, secondName, displayName, phone,
        } = this.props;

        return `                
            <form class="container profile__content" enctype="multipart/form-data">
                <label class="profile__photo-wrapper photo-wrapper mb-5">
                    <img src="${noPhoto}" alt="" class="profile__photo">
                    <span class="photo-wrapper__hover">Поменять аватар</span>
                    <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none;">
                </label>
                <div class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ InputWrapper id='email' name='email' type='email' title='Почта' required='true' pattern='${EMAIL_REGEXP}' value='${email}' }}}
                    
                        {{{ InputWrapper id='login' name='login' type='text' title='Логин' required='true' pattern='${LOGIN_REGEXP}' value='${login}' }}}
                        
                        {{{ InputWrapper id='first_name' name='first_name' type='text' title='Имя' required='true' pattern='${NAME_REGEXP}' value='${firstName}' }}}
                        
                        {{{ InputWrapper id='second_name' name='second_name' type='text' title='Фамилия' required='true' pattern='${NAME_REGEXP}' value='${secondName}' }}}  
                        
                        {{{ InputWrapper id='display_name' name='display_name' type='text' title='Имя в чате' required='true' value='${displayName}' pattern='${NAME_REGEXP}' }}}   
                                               
                        {{{ InputWrapper id='phone' name='phone' type='tel' title='Телефон' required='true' pattern='${PHONE_REGEXP}' value='${phone}' }}}                            
                    </div>
                    {{{ Button id='save-profile' mixin='btn--prime' name='Сохранить' type='submit' }}}                        
                </div>
            </form>            
        `;
    }
}
