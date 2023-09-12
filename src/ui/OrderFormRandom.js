import {flavor, kindDrink, typeDrink} from "../config/constants";

export default class OrderFormRandom
{
    #parentForm;
    #numberEmployees;
    #numberIdDigits;
    #minSalary;
    #maxSalary;

    constructor({selector})
    {
        this.#parentForm = document.querySelector(selector);
        if(!this.#parentForm)
            throw `Wrong parent form id ${selector}`;
        this.#parentForm.innerHTML =
            `<div class="form-group">
                <label>Number of Employees</label>
                <input class="form-control" type="number" name="numberEmployees"
                       placeholder="Enter Number of Employees" min="1" step="1" required>
            </div>
            <div class="form-group">
                <label>Number of ID digits</label>
                <input class="form-control" type="number" name="numberIdDigits"
                       placeholder="Enter Number of ID digits" min="1" step="1" required>
            </div>
            <div class="form-group">
                <label>Minimal Salary</label>
                <input class="form-control" type="number" name="minimalSalary"
                       placeholder="Enter Minimal Salary" min="1" step="1" required>
            </div>
            <div class="form-group">
                <label>Maximal Salary</label>
                <input class="form-control" type="number" name="maximalSalary"
                       placeholder="Enter Maximal Salary" min="1" step="1" required>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-primary">Reset</button>`;

        this.#numberEmployees = document.querySelector('input[name="number-employees"]');
        this.#numberIdDigits = document.querySelector('input[name="number-id-digits"]');
        this.#minSalary = document.querySelector('input[name="minimal-salary"]');
        this.#maxSalary = document.querySelector('input[name="maximal-salary"]');
    }

}