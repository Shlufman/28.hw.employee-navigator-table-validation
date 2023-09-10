export const navItems = [{id:'manual_nav', ariaControls : 'manual_card', innerHTML: 'Employee Data Form' },
    {id:'random_nav', ariaControls : 'random_card', innerHTML: 'Employee Random Generation Form' },
    {id: 'table_nav', ariaControls: 'table_card', innerHTML: 'Employees'}];
export const countries = [{id: 'usa', name: 'USA'}, {id: 'canada', name: 'Canada'}, {id: 'israel', name: 'Israel'}];
export const titles =[{id: 'cleaner', name: 'Cleaner'}, {id: 'manager', name: 'Manager'}, {id: 'salesman', name: 'Salesman'},{id: 'programmer', name: 'Programmer'}];
export const salaries = {
    cleaner: {
        min: 100,
        max: 500,
    },
    manager:{
        min: 80,
        max: 450,
    },
    salesman:{
        min:50,
        max: 350,
    },
    programmer:{
        min:150,
        max: 1350,
    },
};
export const domains = ['gmail.com', 'yahoo.com', 'mac.com', 'co.il'];

export const cities={
    usa:[{id:'allentown', name:'Allentown'},{id:'anchorage', name:'Anchorage'},{id:'arvada', name:'Arvada'}],
    canada:[{id:'ottawa', name:'Ottawa'},{id:'montreal', name:'Montreal'},{id:'toronto', name:'Toronto'}],
    israel:[{id:'haifa', name:'Haifa'},{id:'tiberias', name:'Tiberias'},{id:'nazareth', name:'Nazareth'}],
}