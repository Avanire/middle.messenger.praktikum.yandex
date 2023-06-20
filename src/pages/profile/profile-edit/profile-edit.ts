import ProfileEditForm from '../../../components/profile-edit-form/profile-edit-form.ts';
import regNestedComponent from '../../../core/regNestedComponent.ts';
import ArrowButton from '../../../components/arrow-button/arrow-button.ts';
import InputWrapper from '../../../components/input-wrapper/input-wrapper.ts';
import Input from '../../../components/input/input.ts';
import Button from '../../../components/button/button.ts';
import ProfileWrapper from '../../../components/profile-wrapper/profile-wrapper.ts';
import ProfileAvatar from '../../../components/profile-avatar/profile-avatar.ts';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('SaveButton', Button);
regNestedComponent('AvatarSaveBtn', Button);
regNestedComponent('ProfileAvatar', ProfileAvatar);
regNestedComponent('Children', ProfileEditForm);

export default new ProfileWrapper({});
