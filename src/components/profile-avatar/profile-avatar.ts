import Block from '../../core/block/block';
import noPhoto from '../../images/profile-no-photo.svg';
import { TProps } from '../../utils/types';
import ProfileController from '../../controllers/profileController';
import { API_URL } from '../../utils/constant';

export default class ProfileAvatar extends Block {
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

        ProfileController.avatarUpdate(formData);
    }

    render(): string {
        const { avatar } = this.props;
        return `
           <form enctype="multipart/form-data">
               <label class="photo-wrapper mb-5">
                    <img 
                        src="${avatar ? `${API_URL}/resources/${avatar}` : noPhoto}" 
                        alt="" 
                        class="profile__photo"
                    >
                    <span class="photo-wrapper__hover">Поменять аватар</span>
                    <input 
                        type="file" 
                        name="avatar"       
                        id="avatar"   
                        accept="image/*"          
                        style="display: none"    
                    >
                </label>
                {{{ AvatarSaveBtn 
                    id='save-avatar' 
                    mixin='btn--prime' 
                    name='Сохранить' 
                    type='submit' 
                }}} 
           </form>
        `;
    }
}
