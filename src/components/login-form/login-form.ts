import Block from '../../utils/block.ts';
import { TGeneralProps } from '../../utils/types.ts';
import { LOGIN_REGEXP, PASSWORD_REGEXP } from '../../utils/constant.ts';

export default class LoginForm extends Block {
    constructor(props: TGeneralProps) {
        super({
            ...props,
            events: {
                submit: (e: FormDataEvent) => this.handler(e),
            },
        });
    }

    handler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        // eslint-disable-next-line no-console
        console.log(formData);
    }

    render(): string {
        return `
            <form action="" method="post" class="login-form">
                <div class="login-form__inputs">        
                    {{{ InputWrapper id='login' name='login' type='text' title='Имя' required='true' pattern='${LOGIN_REGEXP}' }}}      
                    {{{ InputWrapper id='password' name='password' type='password' title='Пароль' required='true' pattern='${PASSWORD_REGEXP}' }}}
                </div>
                <div class="login-form__buttons">        
                    {{{ Button mixin='btn--prime' id='login-wrapper-btn' name='Вход' type='submit' }}}
                    <a href="../../pages/signin/signin.html" class="login-form__link">Нет аккаунта?</a>
                </div>
            </form>
        `;
    }
}
