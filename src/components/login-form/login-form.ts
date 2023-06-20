import Block from '../../core/block/block.ts';
import { LoginData, TGeneralProps } from '../../utils/types.ts';
import { LOGIN_REGEXP, PASSWORD_REGEXP, ROUTES } from '../../utils/constant.ts';
import { convertFormDataToObject } from '../../utils/utils.ts';
import AuthController from '../../controllers/authController.ts';

class LoginForm extends Block {
    constructor(props: TGeneralProps) {
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

        const data = convertFormDataToObject(formData);

        AuthController.login(data as LoginData);
    }

    render(): string {
        return `
            <form action="" method="post" class="login-form">
                <div class="login-form__inputs">        
                    {{{ InputWrapper 
                        id='login' 
                        name='login' 
                        type='text' 
                        title='Имя' 
                        required='true' 
                        pattern='${LOGIN_REGEXP}' 
                    }}}    
                      
                    {{{ InputWrapper 
                        id='password' 
                        name='password' 
                        type='password' 
                        title='Пароль' 
                        required='true' 
                        pattern='${PASSWORD_REGEXP}' 
                    }}}
                </div>
                <div class="login-form__buttons">        
                    {{{ Button mixin='btn--prime' id='login-wrapper-btn' name='Вход' type='submit' }}}
                    {{{ NoAccLink to='${ROUTES.Signup}' text='Нет аккаунта?' mixin='link__center' }}}                    
                </div>
            </form>
        `;
    }
}

export default LoginForm;
