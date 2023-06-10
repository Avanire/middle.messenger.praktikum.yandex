import Block from '../../utils/block.ts';
import {
    EMAIL_REGEXP, LOGIN_REGEXP, NAME_REGEXP, PASSWORD_REGEXP, PHONE_REGEXP,
} from '../../utils/constant.ts';
import { TProps } from '../../utils/types.ts';

export default class SigninForm extends Block {
    constructor(props: TProps) {
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
        return `
            <form action="" method="post" class="signin-form">
                <div class="signin-form__inputs">        
                    {{{ InputWrapper id='email' name='email' type='email' title='Почта' required='true' pattern='${EMAIL_REGEXP}' }}}
                    
                    {{{ InputWrapper id='login' name='login' type='text' title='Логин' required='true' pattern='${LOGIN_REGEXP}' }}}
                    
                    {{{ InputWrapper id='first_name' name='first_name' type='text' title='Имя' required='true' pattern='${NAME_REGEXP}' }}}
                    
                    {{{ InputWrapper id='second_name' name='second_name' type='text' title='Фамилия' required='true' pattern='${NAME_REGEXP}' }}}    
                                           
                    {{{ InputWrapper id='phone' name='phone' type='tel' title='Телефон' required='true' pattern='${PHONE_REGEXP}' }}}
                    
                    {{{ InputWrapper id='password' name='password' type='password' title='Пароль' required='true' pattern='${PASSWORD_REGEXP}' }}}                    
                </div>
                <div class="signin-form__buttons">        
                    {{{ Button name='Зарегистрироваться' id='registration-btn' mixin='btn--prime' type='submit' }}}
                    <a href="../../pages/login/login.html" class="signin-form__link">Войти</a>
                </div>
            </form>
        `;
    }
}
