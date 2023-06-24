import Block from '../../core/block/block';
import { TErrorPage } from './type';
import { ROUTES } from '../../utils/constant';

export default class ErrorPage extends Block {
    constructor(props: TErrorPage) {
        super(props);
    }

    render(): string {
        const { errorCode, errorText } = this.props;

        return `
            <section class="container error">
                <div class="error__title mb-5">${errorCode}</div>
                <div class="error__text mb-16">${errorText}</div>
                <a href="${ROUTES.Chat}">Назад к чатам</a>
            </section>
        `;
    }
}
