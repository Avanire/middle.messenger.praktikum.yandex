import ErrorPage from '../../components/error-page/error-page.ts';
import renderDOM from '../../utils/renderDOM.ts';

const page404 = new ErrorPage({ errorCode: '404', errorText: 'Не туда попали' });

renderDOM('root', page404);
