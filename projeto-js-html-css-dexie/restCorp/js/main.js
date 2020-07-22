import restCorpDb, {
    bulkcreate,
    getData,
    createEle
} from './module.js';

let db = restCorpDb("restCorpDb",{
    pedidos: '++pratoid, seunome, prato, numeromesa'
});

//tags de entrada

const pratoid = document.getElementById("pratoid");
const seunome = document.getElementById("seunome");
const prato = document.getElementById("prato");
const numeromesa = document.getElementById("numeromesa");

//botoes
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btnupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");

//inserir valores botao criar

btncreate.onclick = (event) =>{
    let flag = bulkcreate(db.pedidos, {
        seunome : seunome.value,
        prato : prato.value,
        numeromesa : numeromesa.value
    })
    //console.log(flag);

    /*seunome.value = "";
    prato.value = "";
    numeromesa = "";*/

    seunome.value = prato.value = numeromesa.value = "";
    getData(db.pedidos, (data)=>{
        //console.log(data);
        pratoid.value = data.pratoid + 1 || 1;
    });

}

//criar evento para botão read
btnread.onclick = table;

//botao atualizar
btnupdate.onclick = () =>{
    const id = parseInt(pratoid.value || 0);
    if(id){
        db.pedidos.update(id,{
            seunome : seunome.value,
            prato : prato.value,
            numeromesa : numeromesa.value
        }).then((updated)=>{
            let get = updated ? 'Pedido atualizado' : 'Não foi possivel atualizar o pedido';
        })
    }
}


//botao deletar tudo

btndelete.onclick = () =>{
    db.delete();
    db = restCorpDb("restCorpDb",{
        pedidos: '++pratoid, seunome, prato, numeromesa'
    });
    db.open();
    table();
}

//window.onload = () =>{

//}

function table(){
    const tbody = document.getElementById("tbody");

    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }

    getData(db.pedidos, (data)=>{
        if(data){
            createEle("tr",tbody, tr => {
                for (const value in data){
                    createEle("td",tr, td => {
                        td.textContent = data[value];
                        
                    })
                }
                createEle("td", tr, td =>{
                    createEle("i", td, i =>{
                        i.className += "fas fa-edit btnedit"
                        i.setAttribute('data-pratoid', data.pratoid);
                        i.onclick = editbtn;
                    })
                })
                createEle("td", tr, td =>{
                    createEle("i", td, i =>{
                        i.className += "fas fa-trash-alt btndelete"
                        i.setAttribute('data-pratoid', data.pratoid);
                        i.onclick = deletebtn;
                    })
                })
            })
        }
    })
   //createEle("td",tbody, (td)=>{
        //console.log(td);
        //console.log(tbody);
    //})
    //let td = document.createElement("td");
    //tbody.appendChild(td);
    
}

function editbtn(event){
    let id = parseInt(event.target.dataset.pratoid);
    
    db.pedidos.get(id, data =>{
        pratoid.value = data.pratoid || 0;
        seunome.value = data.seunome || "";
        prato.value = data.prato || "";
        numeromesa.value = data.numeromesa || "";
    })
}

function deletebtn(event){
    let id = parseInt(event.target.dataset.pratoid);
    db.pedidos.delete(id);
    table();
}
