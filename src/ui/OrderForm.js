import {countries, cities, titles, salaries} from "../config/constants";

export default class OrderForm {
    #parentForm;
    #titles;
    #countries;
    #cities;
    #salary;

    constructor({selector}) {
        this.#parentForm = document.querySelector(selector);
        if (!this.#parentForm) throw `Wrong parent form id ${selector}`;
        this.#parentForm.innerHTML = `<div class="form-group">
                <label>Employee Identifier</label>
                <input class="form-control" type="number" name="id" placeholder="Enter ID" min="0" step="1" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" type="email" name="email" placeholder="Enter name@co.il" required>
            </div>
            <div class="form-group">
                <p>Gender</p>
                <div class="form-check">
                    <input class="form-check-input" name="gender" type="radio" value="female"checked >
                    <label>Female</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" name="gender" type="radio" value="male" >
                    <label>Male</label>
                </div>
            </div>
            <div class="form-group">
                <label>Employee's Name</label>
                <input class="form-control" type="text" name="name" placeholder="Enter name" required>
            </div>
            <div class="form-group">
                <label>Title</label>
                <select class="form-control" name="title" required>
                </select>
            </div>
            <div class="form-group">
                <label>Salary</label>
                <div name="salary">
<!--                <input class="form-control" type="number" name="salary" placeholder="Enter from 0 to 100" min="0" max="100" step="100">-->
</div>
                
            </div>
            <div class="form-group">
                <label>Country</label>
                <select class="form-control" name="country" required>
                </select>
            </div>
            <div class="form-group">
                <label>City</label>
                <select class="form-control" name="city" required>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <button type="reset" class="btn btn-primary">Reset</button>`;


        this.#titles = document.querySelector('select[name="title"]');
        this.#countries = document.querySelector('select[name="country"]');
        this.#cities = document.querySelector('select[name="city"]');
        this.#salary = document.querySelector('div[name="salary"]');
        this.setTitle();
        this.#titles.onchange = () => {
            this.setSalary();
        }
        this.setCounty();
        this.#countries.onchange = () => {
            this.setCity();
        }
    }


    setTitle() {
        this.#titles.innerHTML = `<option value="" disabled selected>Select title</option>
                                ${titles.map(title => `<option value=${title.id}>${title.name}</option>`)}`
    }

    setCounty() {
        this.#countries.innerHTML = `<option value="" disabled selected>Select country</option>
                                ${countries.map(country => `<option value=${country.id}>${country.name}</option>`)}`
    }

    setSalary() {
        this.#salary.innerHTML = `<input class="form-control" type="number" name="salary"
                        placeholder="Enter from '${salaries[this.#titles.value].min}' to '${salaries[this.#titles.value].max}'" 
                        min=${salaries[this.#titles.value].min} max=${salaries[this.#titles.value].max} step="10">
                         )}`
    }

    setCity() {
        this.#cities.innerHTML = `<option value="" disabled selected>Select city</option>
                         ${cities[this.#countries.value].map(city => `<option value=${city.id}>${city.name}</option>`)}`
    }

}