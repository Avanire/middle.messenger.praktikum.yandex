import FormWrapper from '../../components/form-wrapper/form-wrapper.ts';
import renderDOM from '../../utils/renderDOM.ts';
import regNestedComponent from '../../utils/regNestedComponent.ts';
import Button from '../../components/button/button.ts';
import LoginForm from '../../components/login-form/login-form.ts';
import Input from '../../components/input/input.ts';
import InputWrapper from '../../components/input-wrapper/input-wrapper.ts';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', LoginForm);

const login = new FormWrapper({ name: 'Вход' });

renderDOM('root', login);
