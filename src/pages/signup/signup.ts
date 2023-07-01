import FormWrapper from '../../components/form-wrapper/form-wrapper';
import regNestedComponent from '../../core/regNestedComponent';
import Input from '../../components/input/input';
import InputWrapper from '../../components/input-wrapper/input-wrapper';
import Button from '../../components/button/button';
import SignupForm from '../../components/signup-form/signup-form';
import Link from '../../components/link/link';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', SignupForm);
regNestedComponent('EnterLink', Link);

export default new FormWrapper({ name: 'Регистрация' });
