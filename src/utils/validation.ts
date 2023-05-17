const validate = (elem: HTMLInputElement, regexp) => {
    const errorContainer = elem.parentElement?.querySelector('.input-field__error');
    const pattern = new RegExp(regexp);
    const validatedInput = pattern.test(elem.value);

    if (!validatedInput) {
        errorContainer?.classList.add('input-field__error-visible');
    } else {
        errorContainer?.classList.remove('input-field__error-visible');
    }
};

export default validate;
