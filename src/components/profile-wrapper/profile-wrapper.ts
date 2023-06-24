import Block from '../../core/block/block';
import { TProps } from '../../utils/types';
import Router from '../../core/router';
import arrowLeft from '../../images/arrow-left.svg';

class ProfileWrapper extends Block {
    constructor(props: TProps) {
        super({
            ...props,
            onClick: () => this.handleClick(),
        });
    }

    handleClick() {
        Router.back();
    }

    render(): string {
        return `
            <section class="profile">
                <aside class="profile__return">
                    {{{ ArrowButton 
                        id='profile-return' 
                        image='${arrowLeft}' 
                        type='button' 
                        onClick=onClick 
                        mixin='main-color'
                    }}}                    
                </aside>
                {{{ Children }}}
            </section>
        `;
    }
}

export default ProfileWrapper;
