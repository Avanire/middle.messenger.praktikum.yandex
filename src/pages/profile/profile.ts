import Profile from '../../components/profile/profile.ts';
import regNestedComponent from '../../core/regNestedComponent.ts';
import ArrowButton from '../../components/arrow-button/arrow-button.ts';
import ProfileSetting from '../../components/profile-setting/profile-setting.ts';
import ProfileWrapper from '../../components/profile-wrapper/profile-wrapper.ts';
import Link from '../../components/link/link.ts';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('ProfileSetting', ProfileSetting);
regNestedComponent('Children', Profile);
regNestedComponent('EditPass', Link);
regNestedComponent('EditLink', Link);

export default new ProfileWrapper({});
