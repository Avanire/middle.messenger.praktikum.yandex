import Block from '../../../core/block/block.ts';
import { TProps } from '../../../utils/types.ts';
import photoIcon from '../../../images/photo-video-icon.svg';
import clipImg from '../../../images/clip.svg';

export default class AttachedFile extends Block {
    constructor(props: TProps) {
        super({
            ...props,
            onOpenFileModal: (e: MouseEvent) => this.openFileModal(e),
            events: {
                change: props.onChange,
            },
        });
    }

    openFileModal(e: MouseEvent) {
        e.stopPropagation();
        const menu = document.querySelector('.attach-menu');
        menu?.classList.toggle('attach-menu--active');
    }

    render(): string {
        return `
            <div class="conversation-footer__attach-wrapper">
                <div class="conversation-footer__attach">                        
                    {{{ OpenFileModal 
                        id='open-file-modal' 
                        type='button' 
                        onClick=onOpenFileModal 
                        image='${clipImg}'                            
                    }}}
                </div>
                <div class="conversation-footer__attach-menu attach-menu">
                    <form action="" enctype="multipart/form-data">
                        <label for="photo">
                            <span class="attach-menu__item">
                                <img src="${photoIcon}" alt="">
                                <span class="attach-menu__text">Фото</span>
                            </span>
                            <input 
                                accept="image/gif,image/jpeg,image/jpg,image/png"  
                                multiple="" 
                                type="file" 
                                style="display: none;"
                                id="photo" 
                                name="photo"
                            >
                        </label>
                    </form>                    
                </div>
            </div> 
        `;
    }
}
