import Random from "./Random";
import {countries, cities, titles, domains} from "../config/constants";

export default class RandomGeneratorEmployee {

    constructor() {
        this.random = new Random();
    }

    getEmployee = (minID, maxID, minSalary, maxSalary) => {
        if (minID >= maxID)
            throw new Error('MaxID should be more than minID');
        if (minSalary >= maxSalary)
            throw new Error('maxSalary should be more than minSalary');

        let result = {
            id: this.getId(minID, maxID),
            email: this.getEmail(),
            gender: this.getGender(),
            title: this.getTitle(),
            salary: this.getSalary(minSalary, maxSalary),
            country: this.getCountry(),
        };
        result['city'] = this.getCity(result.country);
        return result;
    }

    getId(minID, maxID) {
        return this.random.getRandomNumber(minID, maxID);
    }

    getEmail() {
        let numberletters = this.random.getRandomNumber(3, 10);
        let name = '';
        for (let i = 0; i < numberletters; i++) {
            name += String.fromCharCode(this.random.getRandomNumber(97, 123));
        }
        let domain = domains[this.random.getRandomNumber(0, domains.length - 1)];
        return name + '@' + domain;
    }

    getGender() {
        if (this.random.getRandomNumber(0, 10) > 5) return 'female';
        return 'male';
    }

    getTitle() {
        return titles[this.random.getRandomNumber(0, titles.length - 1)].id;
    }

    getSalary(minSalary, maxSalary) {
        return this.random.getRandomNumber(minSalary, maxSalary);
    }

    getCountry() {
        return countries[this.random.getRandomNumber(0, countries.length - 1)].id;
    }

    getCity(country) {
        return cities[country][this.random.getRandomNumber(0, cities[country].length - 1)].id;
    }
}

