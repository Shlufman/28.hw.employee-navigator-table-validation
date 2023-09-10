import Orders from "./service/Orders";
import List from "./ui/List";
import FormHandler from "./ui/FormHandler";
import OrderForm from "./ui/OrderForm";
import OrderFormRandom from "./ui/OrderFormRandom";
import RandomGeneratorEmployee from "./utils/RandomGeneratorEmployee";
import Navigator from "./ui/Navigator";
import Table from "./ui/Table";
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

const orders = new Orders();
const formHandler = new FormHandler('#manual_form');
const formRandomHandler = new FormHandler('#random_form');
const list = new List('#list');
new OrderForm('#manual_form');
new OrderFormRandom('#random_form');
new Navigator('#nav', 0);
const genratorEmployee = new RandomGeneratorEmployee();

const table = new Table(['id','email', 'gender', 'name', 'title', 'salary', 'country', 'city'],
    '#table_employees');
formHandler.addHandler(employee =>
{
    let res = orders.add(employee);
    if(!res)
        table.addRow(employee);
    return res;
})

formRandomHandler.addHandler(statistic =>
{
    let maxID = 10**statistic.numberIdDigits;
    for(let i=0;i<statistic.numberEmployees;i++){
        let employee =genratorEmployee.getEmployee(1, maxID, statistic.minimalSalary,statistic.maximalSalary);
        if(!orders.add(employee)){
            table.addRow(employee);
       } else {
            i--;
        };
    }
    return false;
})


