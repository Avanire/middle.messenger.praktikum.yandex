import Block from '../../core/block/block';
import noPhoto from '../../images/profile-no-photo.svg';
import { TProfile } from './type';
import AuthController from '../../controllers/authController';
import withStore from '../../hocs/withStore';
import { API_URL, ROUTES } from '../../utils/constant';

class Profile extends Block {
    constructor(props: TProfile) {
        super({
            ...props,
            events: {
                submit: (e: FormDataEvent) => this.handler(e),
            },
        });
    }

    componentDidMount(): boolean {
        AuthController.fetchUser();
        return true;
    }

    handler(e: Event) {
        e.preventDefault();

        AuthController.logout();
    }

    render(): string {
        const {
            email, login, phone, avatar,
        } = this.props;
        const firstName = this.props.first_name;
        const displayName = this.props.display_name;
        const secondName = this.props.second_name;

        return `
            <main class="container profile__content">
                <div class="profile__photo-wrapper mb-5">
                    <img 
                        src="${avatar ? `${API_URL}/resources/${avatar}` : noPhoto}" 
                        alt="" 
                        class="profile__photo"
                    >
                </div>                    
                <div class="profile__name mb-14">${displayName ?? 'Не указано'}</div>
                <div class="profile__info-wrapper">
                    <div class="profile__settings">
                        {{{ ProfileSetting property="Почта" value="${email}" }}}
                        {{{ ProfileSetting property="Логин" value="${login}" }}}
                        {{{ ProfileSetting property="Имя" value="${firstName}" }}}
                        {{{ ProfileSetting property="Фамилия" value="${secondName}" }}}
                        {{{ ProfileSetting property="Имя в чате" value="${displayName ?? 'Не указано'}" }}}
                        {{{ ProfileSetting property="Телефон" value="${phone}" }}}
                    </div>
                    <div class="profile__buttons">
                        {{{ EditLink to='${ROUTES.Edit}' text='Изменить данные' }}}
                        {{{ EditPass to='${ROUTES.ChangePass}' text='Изменить пароль' }}}
                        <form action="">                            
                            <button class="profile__link profile__link--logout" type="submit">Выйти</button>
                        </form>
                    </div>
                </div>                    
            </main>            
        `;
    }
}

const withUser = withStore(state => ({ ...state.user }));

export default withUser(Profile);
