import ProfileEditForm from '../../../components/profile-edit-form/profile-edit-form';
import regNestedComponent from '../../../core/regNestedComponent';
import ArrowButton from '../../../components/arrow-button/arrow-button';
import InputWrapper from '../../../components/input-wrapper/input-wrapper';
import Input from '../../../components/input/input';
import Button from '../../../components/button/button';
import ProfileWrapper from '../../../components/profile-wrapper/profile-wrapper';
import ProfileAvatar from '../../../components/profile-avatar/profile-avatar';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('InputWrapper', InputWrapper);
regNestedComponent('Input', Input);
regNestedComponent('SaveButton', Button);
regNestedComponent('AvatarSaveBtn', Button);
regNestedComponent('ProfileAvatar', ProfileAvatar);
regNestedComponent('Children', ProfileEditForm);

export default new ProfileWrapper({});
