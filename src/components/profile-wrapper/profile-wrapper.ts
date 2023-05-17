import Block from '../../utils/block.ts';
import { TProfileWrapper } from './type.ts';

export default class ProfileWrapper extends Block {
    constructor(props: TProfileWrapper) {
        super(props);
    }

    render(): string {
        const {
            email, login, firstName, secondName, displayName, phone, image,
        } = this.props;

        return `
            <section class="profile">
                <aside class="profile__return">
                    {{{ ArrowButton id='profile-return' prev='true' type='button' }}}                    
                </aside>
                {{{ Children 
                    email='${email}' 
                    login='${login}' 
                    firstName='${firstName}' 
                    secondName='${secondName}'
                    displayName='${displayName}'
                    phone='${phone}'
                    image='${image}'               
                }}}
            </section>
        `;
    }
}
