import ProfileChangePass from '../../../components/profile-change-pass/profile-change-pass';
import regNestedComponent from '../../../core/regNestedComponent';
import ArrowButton from '../../../components/arrow-button/arrow-button';
import InputWrapper from '../../../components/input-wrapper/input-wrapper';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';
import ProfileWrapper from '../../../components/profile-wrapper/profile-wrapper';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('PassBtn', Button);
regNestedComponent('Children', ProfileChangePass);

export default new ProfileWrapper({});
