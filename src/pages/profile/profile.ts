import Profile from '../../components/profile/profile';
import regNestedComponent from '../../core/regNestedComponent';
import ArrowButton from '../../components/arrow-button/arrow-button';
import ProfileSetting from '../../components/profile-setting/profile-setting';
import ProfileWrapper from '../../components/profile-wrapper/profile-wrapper';
import Link from '../../components/link/link';

regNestedComponent('ArrowButton', ArrowButton);
regNestedComponent('ProfileSetting', ProfileSetting);
regNestedComponent('Children', Profile);
regNestedComponent('EditPass', Link);
regNestedComponent('EditLink', Link);

export default new ProfileWrapper({});
