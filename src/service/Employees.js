export default class Employees
{
    #data;

    constructor()
    {
        this.#data = {};
    }

    add = item =>
    {
        // if(this.#data[item.email])
        if(this.#data[item.id])
            return `Order with email ${item.id} is already exists`;
        this.#data[item.id] = item;
        return '';
    }
    remove = id =>
    {
        if(!this.#data[id])
            return false;
        delete this.#data[id];
        return  true;
    }

    getAll = () => Object.values(this.#data);

    get = id => this.#data[id];
}
