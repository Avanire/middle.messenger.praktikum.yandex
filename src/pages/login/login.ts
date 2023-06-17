import FormWrapper from '../../components/form-wrapper/form-wrapper.ts';
import regNestedComponent from '../../core/regNestedComponent.ts';
import Button from '../../components/button/button.ts';
import LoginForm from '../../components/login-form/login-form.ts';
import Input from '../../components/input/input.ts';
import InputWrapper from '../../components/input-wrapper/input-wrapper.ts';
import Link from '../../components/link/link.ts';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', LoginForm);
regNestedComponent('NoAccLink', Link);

export default new FormWrapper({ name: 'Вход' });
