import FormWrapper from '../../components/form-wrapper/form-wrapper.ts';
import renderDOM from '../../utils/renderDOM.ts';
import regNestedComponent from '../../utils/regNestedComponent.ts';
import Input from '../../components/input/input.ts';
import InputWrapper from '../../components/input-wrapper/input-wrapper.ts';
import Button from '../../components/button/button.ts';
import SigninForm from '../../components/signin-form/signin-form.ts';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', SigninForm);

const signin = new FormWrapper({ name: 'Регистрация' });

renderDOM('root', signin);
