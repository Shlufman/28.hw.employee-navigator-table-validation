export default class Table {
    #headers;
    #body;
    #counter = 1;

    #callBackDelete;
    #totalDiv;
    #totalSalary=0;


    constructor({headers, selector, callBackDelete}) {
        this.#callBackDelete = callBackDelete;
        this.#headers = headers;
        let $table = $(selector);
        let $thead = $('<thead>');
        $table.append($thead);
        this.#fillThead($thead);
        this.#body = $('<tbody>');
        $table.css('height', '100px');
        $table.css('overflow-y', 'auto');
        $table.css('overflow-x', 'hidden');
        // style="height:120px;width:120px;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;"
        $table.append(this.#body);
        this.#totalDiv = $('#total');
        this.#totalDiv.html(`<div>total salary: ${this.#totalSalary}</div>`);
    }


// "id":"1","email":"shlufman@mail.ru","gender":"female","name":"Konstantin","title":"cleaner","salary":"100","country":"usa","city":"allentown"}
    #fillThead = thead => {
        let $tr = $('<tr>');
        $tr.append($('<th>', {text: '№'}));
        this.#headers.map(header => $('<th>', {text: header})).forEach(th => $tr.append(th));
        $tr.append($('<th>', {text: 'remove'}))
        thead.append($tr);
    }


    delete = id => {
        if(confirm("Are you sure")) {
            $('tbody tr').remove();
            this.#counter = 1;
            this.#totalSalary=0;
            this.#totalDiv.html(`<div>total salary: ${this.#totalSalary}</div>`);
            let res = this.#callBackDelete(id);
            console.log(res)
            if (res) {
                this.addRows(res);
            }
        }
    }
    addRow = data => {
        this.#body.append(this.#createRow(data));
        this.#counter++;
        this.#setTotal(data)
    }

    #setTotal=({salary})=>{
        this.#totalSalary+=+salary;
        this.#totalDiv.html(`<div>total salary: ${this.#totalSalary}</div>`);
    }
    addRows = data => {

        data.forEach(this.addRow);
    }

    #createRow = data => {
        let $tr = $('<tr>');
        // $tr.attr('id', data.id);
        $tr.append($('<td>', {text: this.#counter}))
        this.#headers.map(header => $('<td>', {text: data[header]}))
            .forEach(td => $tr.append(td));
        let $trBtnRemove = $('<button>', {text: 'remove'});
        $trBtnRemove.attr('id', data.id);
        $trBtnRemove.on('click', (event) => {
            console.log(event.target.getAttribute('id'));
            let id = event.target.getAttribute('id');
            this.delete(id)
        })
        $tr.append($trBtnRemove);
        return $tr;

    }


}

// <table>
//     <thead>
//         <tr>
//             <th></th>
//             <th></th>
//             <th></th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//         </tr>
//     </tbody>
// </table>