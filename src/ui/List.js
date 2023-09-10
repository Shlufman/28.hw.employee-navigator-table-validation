export default class List
{
    #listElement;
    constructor(selector)
    {
        this.#listElement = document.querySelector(selector);
    }

    addItem = string =>
    {
        let element = document.createElement('li');
        element.textContent = string;
        this.#listElement.append(element);
    }
}
