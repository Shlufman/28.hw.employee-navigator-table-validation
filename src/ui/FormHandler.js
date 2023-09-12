export default class FormHandler
{
    constructor({selector})
    {
        this.$formElement = $(selector);
    }

    addHandler = fn => this.$formElement.on('submit', event =>
    {
        event.preventDefault();
        let obj = {};//name: value,name: value,name: value,name: value
        this.$formElement.serializeArray().forEach(elem => obj[elem.name] = elem.value);
        let res = fn(obj);
        if(res)
        {
            alert(res);
            return;
        }
        event.target.reset();
    })
}