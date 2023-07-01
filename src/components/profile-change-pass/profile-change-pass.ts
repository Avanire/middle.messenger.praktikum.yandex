import Block from '../../core/block/block';
import noPhoto from '../../images/profile-no-photo.svg';
import { API_URL, PASSWORD_REGEXP } from '../../utils/constant';
import { TProfileChangePass } from './type';
import { convertFormDataToObject } from '../../utils/utils';
import ProfileController from '../../controllers/profileController';
import { TChangeProfilePass } from '../../utils/types';
import withStore from '../../hocs/withStore';

class ProfileChangePass extends Block {
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

        const data = convertFormDataToObject(formData);

        ProfileController.passwordUpdate(data as TChangeProfilePass);
    }

    render(): string {
        const { avatar } = this.props;

        return `            
            <main class="container profile__content">
                <div class="profile__photo-wrapper mb-5">
                    <img 
                        src="${avatar ? `${API_URL}/resources/${avatar}` : noPhoto}" 
                        alt="" 
                        class="profile__photo"
                    >
                </div>
                
                <form action="" class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ InputWrapper 
                            id='oldPassword' 
                            name='oldPassword' 
                            type='password' 
                            title='Старый пароль' 
                            required='true' 
                            pattern='${PASSWORD_REGEXP}' 
                        }}}
                        
                        {{{ InputWrapper 
                            id='newPassword' 
                            name='newPassword' 
                            type='password' 
                            title='Новый пароль' 
                            required='true' 
                            pattern='${PASSWORD_REGEXP}' 
                        }}}                       
                    </div>
                    {{{ PassBtn 
                        id='save-pass' 
                        mixin='btn--prime' 
                        name='Сохранить' 
                        type='submit' 
                    }}}                        
                </form>                    
            </main>            
        `;
    }
}

const withUser = withStore(state => ({ ...state.user }));

export default withUser(ProfileChangePass);
