import FormWrapper from '../../components/form-wrapper/form-wrapper.ts';
import regNestedComponent from '../../core/regNestedComponent.ts';
import Input from '../../components/input/input.ts';
import InputWrapper from '../../components/input-wrapper/input-wrapper.ts';
import Button from '../../components/button/button.ts';
import SignupForm from '../../components/signup-form/signup-form.ts';
import Link from '../../components/link/link.ts';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', SignupForm);
regNestedComponent('EnterLink', Link);

export default new FormWrapper({ name: 'Регистрация' });
