export default class Table
{
    #headers;
    #body;
    #counter = 1;

    constructor(headers, selector)
    {
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
    }


// "id":"1","email":"shlufman@mail.ru","gender":"female","name":"Konstantin","title":"cleaner","salary":"100","country":"usa","city":"allentown"}
    #fillThead = thead =>
    {
        let $tr = $('<tr>');
        $tr.append($('<th>', {text: '№'}));
        this.#headers.map(header => $('<th>', {text: header})).forEach(th => $tr.append(th));
        $tr.append($('<th>', {text: 'remove'}))
        thead.append($tr);
    }

    addRow = data =>
    {
        this.#body.append(this.#createRow(data));
        this.#counter++;
    }

    #createRow = data =>
    {
        let $tr = $('<tr>');
        $tr.attr('dataIndex',this.#counter);
        $tr.append($('<td>', {text:this.#counter}))
        this.#headers.map(header => $('<td>', {text: data[header]}))
            .forEach(td => $tr.append(td));
        let $trBtnRemove = $('<button>', {text:'remove'});
        $trBtnRemove.attr('dataIndex',this.#counter);
        $trBtnRemove.on('click',(event)=>{
            console.log(event.target.getAttribute('dataIndex'));
            let index =event.target.getAttribute('dataIndex');

            $("tr[dataIndex="+`${index}`+"]").remove();
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