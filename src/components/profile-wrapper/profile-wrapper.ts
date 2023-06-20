import Block from '../../core/block/block.ts';
import { TProps } from '../../utils/types.ts';
import Router from '../../core/router.ts';
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
