import ProfileChangePass from '../../../components/profile-change-pass/profile-change-pass.ts';
import regNestedComponent from '../../../core/regNestedComponent.ts';
import ArrowButton from '../../../components/arrow-button/arrow-button.ts';
import InputWrapper from '../../../components/input-wrapper/input-wrapper.ts';
import Input from '../../../components/input/input.ts';
import Button from '../../../components/button/button.ts';
import ProfileWrapper from '../../../components/profile-wrapper/profile-wrapper.ts';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('PassBtn', Button);
regNestedComponent('Children', ProfileChangePass);

export default new ProfileWrapper({});
