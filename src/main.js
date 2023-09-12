import Employees from "./service/Employees";
import List from "./ui/List";
import FormHandler from "./ui/FormHandler";
import OrderForm from "./ui/OrderForm";
import OrderFormRandom from "./ui/OrderFormRandom";
import RandomGeneratorEmployee from "./utils/RandomGeneratorEmployee";
import Navigator from "./ui/Navigator";
import Table from "./ui/Table";
import Validator from "./utils/Validator";

const $manualCard = $('#manual-card');
const $randomCard = $('#random-card');
//
// const $btnManualForm = $('#btnManualForm');
// const $btnRandomForm = $('#btnRandomForm');


// $btnManualForm.on('click',(event)=>{
//
//     if($manualCard.hasClass('display-none')){
//         $('.card').addClass('display-none');
//         $manualCard.removeClass('display-none');
//         return;
//     }
//     $manualCard.addClass('display-none');
// })
//
// $btnRandomForm.on('click',(event)=>{
//     if($randomCard.hasClass('display-none')) {
//         $('.card').addClass('display-none');
//         $randomCard.removeClass('display-none');
//         return;
//     }
//     $randomCard.addClass('display-none');
// })

const employees = new Employees();
const formHandler = new FormHandler({selector: '#manual_form'});
const formRandomHandler = new FormHandler({selector: '#random_form'});
const list = new List({selector: '#list'});
new OrderForm({selector: '#manual_form'});
new OrderFormRandom({selector: '#random_form'});
new Navigator({parentSelector: '#nav', index: 0});
const genratorEmployee = new RandomGeneratorEmployee();

let headers = ['id', 'email', 'gender', 'name', 'title', 'salary', 'country', 'city'];


const validatorManualForm = new Validator({selector: '#manual_form'});

const validatorRandomForm = new Validator({selector: '#random_form'});


validatorManualForm.addValidator('input[name="id"]', value => {
    return value<1 ? 'This is not correct id' : '';
})


//validatorManualForm
validatorRandomForm.addValidator('input[name="numberEmployees"]', value => {
    return (+value) < 0 ? 'This is not correct number of employees' : '';
})
validatorRandomForm.addValidator('input[name="numberIdDigits"]', value => {
    return ((+value) < 3) || ((+value) > 5) ? 'This is not correct number digits of id employees' : '';
})

validatorRandomForm.addValidator('input[name="minimalSalary"]', value => {
    return (+value) < 0 ? 'This is not correct Minimal Salary of employees' : '';
})

validatorRandomForm.addValidator('input[name="maximalSalary"]', value => {
    let $minSalary = $('#random_form input[name="minimalSalary"]');
    console.log(+$minSalary.val());
    return (+value) < +$minSalary.val() ? 'This is not correct Maximal Salary of employees' : '';
})

const table = new Table({headers, selector: '#table_employees', callBackDelete});
formHandler.addHandler(employee => {
    let res = employees.add(employee);
    if (!res)
        table.addRow(employee);
    return res;
})

function callBackDelete(employeeID) {
    let res = employees.remove(employeeID);
    if (res)
        return employees.getAll();
    return false;
}

formRandomHandler.addHandler(statistic => {
    let maxID = 10 ** statistic.numberIdDigits;
    for (let i = 0; i < statistic.numberEmployees; i++) {
        let employee = genratorEmployee.getEmployee(1, maxID, statistic.minimalSalary, statistic.maximalSalary);
        if (!employees.add(employee)) {
            table.addRow(employee);
        } else {
            i--;
        }
        ;
    }
    return false;
})


