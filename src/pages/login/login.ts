import FormWrapper from '../../components/form-wrapper/form-wrapper';
import regNestedComponent from '../../core/regNestedComponent';
import Button from '../../components/button/button';
import LoginForm from '../../components/login-form/login-form';
import Input from '../../components/input/input';
import InputWrapper from '../../components/input-wrapper/input-wrapper';
import Link from '../../components/link/link';

regNestedComponent('Input', Input);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Button', Button);
regNestedComponent('Form', LoginForm);
regNestedComponent('NoAccLink', Link);

export default new FormWrapper({ name: 'Вход' });
