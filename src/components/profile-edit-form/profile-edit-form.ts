import Block from '../../core/block/block.ts';
import {
    EMAIL_REGEXP, LOGIN_REGEXP, NAME_REGEXP, PHONE_REGEXP,
} from '../../utils/constant.ts';
import { TProfileEditForm } from './type.ts';
import withStore from '../../hocs/withStore.ts';
import { convertFormDataToObject } from '../../utils/utils.ts';
import ProfileController from '../../controllers/profileController.ts';
import { TChangeProfileData } from '../../utils/types.ts';

class ProfileEditForm extends Block {
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

        const data = convertFormDataToObject(formData);

        ProfileController.profileUpdate(data as TChangeProfileData);
    }

    render(): string {
        const {
            email, login, phone, avatar,
        } = this.props;
        const firstName = this.props.first_name;
        const displayName = this.props.display_name;
        const secondName = this.props.second_name;

        return `                
            <form class="container profile__content" enctype="multipart/form-data">
                {{{ ProfileAvatar avatar='${avatar}' }}}
                <div class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ InputWrapper 
                            id='email' 
                            name='email' 
                            type='email' 
                            title='Почта' 
                            required='true' 
                            pattern='${EMAIL_REGEXP}' 
                            value='${email}' 
                        }}}
                    
                        {{{ InputWrapper 
                            id='login' 
                            name='login' 
                            type='text' 
                            title='Логин' 
                            required='true' 
                            pattern='${LOGIN_REGEXP}' 
                            value='${login}' 
                        }}}
                        
                        {{{ InputWrapper 
                            id='first_name' 
                            name='first_name' 
                            type='text' 
                            title='Имя' 
                            required='true' 
                            pattern='${NAME_REGEXP}' 
                            value='${firstName}' 
                        }}}
                        
                        {{{ InputWrapper 
                            id='second_name' 
                            name='second_name' 
                            type='text' 
                            title='Фамилия' 
                            required='true' 
                            pattern='${NAME_REGEXP}' 
                            value='${secondName}' 
                        }}}  
                        
                        {{{ InputWrapper 
                            id='display_name' 
                            name='display_name' 
                            type='text' 
                            title='Имя в чате' 
                            required='true' 
                            value='${displayName ?? ''}' 
                            pattern='${NAME_REGEXP}' 
                        }}}   
                                               
                        {{{ InputWrapper 
                            id='phone' 
                            name='phone' 
                            type='tel' 
                            title='Телефон' 
                            required='true' 
                            pattern='${PHONE_REGEXP}' 
                            value='${phone}' 
                        }}}                            
                    </div>
                    {{{ SaveButton 
                        id='save-profile' 
                        mixin='btn--prime' 
                        name='Сохранить' 
                        type='submit' 
                    }}}                        
                </div>
            </form>            
        `;
    }
}

const withUser = withStore((state) => ({ ...state.user }));

export default withUser(ProfileEditForm);
