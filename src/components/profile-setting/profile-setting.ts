import Block from '../../utils/block.ts';
import { TProfileSetting } from './type.ts';

export default class ProfileSetting extends Block {
    constructor(props: TProfileSetting) {
        super(props);
    }

    render(): string {
        const { property, value } = this.props;

        return `
            <div class="profile-setting">
                <span class="profile-setting__property">${property}</span>
                <span class="profile-setting__value">${value}</span>
            </div>
        `;
    }
}
