export default class Validator
{
    #formElement;
    #validators;
    #submitButton;

    constructor({selector})
    {
        this.#formElement = $(selector);
        this.#validators = [];
        this.#submitButton = this.#formElement.find('button[type="submit"]');
    }

    addValidator = (selector, validFn) =>
    {
        this.#submitButton.attr('disabled', true);
        this.#validators.push({selector, flag:false});
        let element = $(selector);
        element.blur((event) =>
        {
            let res = validFn(event.target.value);
            if(res)
            {
                alert(res);
                return;
            }
            else
                this.#enablingSubmit(selector);
        })
    }

    #enablingSubmit = selector =>
    {
        let validator = this.#validators.find(val => val.selector === selector);
        validator.flag = true;
        if(!this.#validators.some(val => val.flag === false))
            this.#submitButton.attr('disabled', false);
    }
}