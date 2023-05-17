import Block from '../../utils/block.ts';
import noPhoto from '../../images/profile-no-photo.svg';
import { TProfile } from './type.ts';

export default class Profile extends Block {
    constructor(props: TProfile) {
        super(props);
    }

    render(): string {
        const {
            email, login, firstName, secondName, displayName, phone,
        } = this.props;

        return `            
            <main class="container profile__content">
                <div class="profile__photo-wrapper mb-5">
                    <img src="${noPhoto}" alt="" class="profile__photo">
                </div>                    
                <div class="profile__name mb-14">{{ displayName }}</div>
                <div class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ ProfileSetting property="Почта" value="${email}" }}}
                        {{{ ProfileSetting property="Логин" value="${login}" }}}
                        {{{ ProfileSetting property="Имя" value="${firstName}" }}}
                        {{{ ProfileSetting property="Фамилия" value="${secondName}" }}}
                        {{{ ProfileSetting property="Имя в чате" value="${displayName}" }}}
                        {{{ ProfileSetting property="Телефон" value="${phone}" }}}
                    </div>
                    <div class="profile__buttons">
                        <a href="../../pages/profile/profile-edit/profile-edit.html" class="profile__link">Изменить данные</a>
                        <a href="../../pages/profile/profile-change-pass/profile-change-pass.html" class="profile__link">Изменить пароль</a>
                        <form action="">
                            <button class="profile__link profile__link--logout" type="submit">Выйти</button>
                        </form>
                    </div>
                </div>                    
            </main>            
        `;
    }
}
