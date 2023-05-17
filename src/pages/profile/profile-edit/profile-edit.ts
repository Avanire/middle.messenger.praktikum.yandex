import ProfileEditForm from '../../../components/profile-edit-form/profile-edit-form.ts';
import regNestedComponent from '../../../utils/regNestedComponent.ts';
import renderDOM from '../../../utils/renderDOM.ts';
import ArrowButton from '../../../components/arrow-button/arrow-button.ts';
import InputWrapper from '../../../components/input-wrapper/input-wrapper.ts';
import Input from '../../../components/input/input.ts';
import Button from '../../../components/button/button.ts';
import ProfileWrapper from '../../../components/profile-wrapper/profile-wrapper.ts';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('Button', Button);
regNestedComponent('Children', ProfileEditForm);

const profileEdit = new ProfileWrapper({
    email: 'pochta@yandex.ru',
    displayName: 'Иван',
    firstName: 'Иван',
    secondName: 'Иванов',
    login: 'ivanivanov',
    phone: '+79099673030',
});

renderDOM('root', profileEdit);

const arrowBack = document.querySelector('.profile__return');
arrowBack?.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
});
