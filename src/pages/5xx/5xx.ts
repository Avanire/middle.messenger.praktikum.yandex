import ErrorPage from '../../components/error-page/error-page.ts';
import renderDOM from '../../utils/renderDOM.ts';

const page5xx = new ErrorPage({ errorCode: '500', errorText: 'Мы уже фиксим' });

renderDOM('root', page5xx);
