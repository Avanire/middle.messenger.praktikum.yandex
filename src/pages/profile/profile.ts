import Profile from '../../components/profile/profile.ts';
import renderDOM from '../../utils/renderDOM.ts';
import regNestedComponent from '../../utils/regNestedComponent.ts';
import ArrowButton from '../../components/arrow-button/arrow-button.ts';
import ProfileSetting from '../../components/profile-setting/profile-setting.ts';
import ProfileWrapper from '../../components/profile-wrapper/profile-wrapper.ts';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('ProfileSetting', ProfileSetting);
regNestedComponent('Children', Profile);

const profile = new ProfileWrapper({
    email: 'pochta@yandex.ru',
    displayName: 'Иван',
    firstName: 'Иван',
    secondName: 'Иванов',
    login: 'ivanivanov',
    phone: '+79099673030',
});

renderDOM('root', profile);

const arrowBack = document.querySelector('.profile__return');
arrowBack?.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});
