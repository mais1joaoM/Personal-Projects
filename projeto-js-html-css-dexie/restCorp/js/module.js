

const restCorpDb = (dbname, table) =>{

    const db = new Dexie(dbname);
    db.version(1).stores(table);
    db.open();

    //criar banco de dados
    /*const db = new Dexie("myDb");
    db.version(1).stores({
        friends: 'name, age'
    })*/
    return db;
    

}

//inserir funcoes
const bulkcreate = (dbtable, data) =>{
    let flag = empty(data);
    if(flag){
        dbtable.bulkAdd([data]);
        console.log("Pedido cadastrado com sucesso");
    }else{
        console.log("Erro ao cadastrar pedido...");
    }
    return flag;
    
}


//pegar dados do db
const getData = (dbtable, fn) =>{
    let index = 0;
    let obj ={};

    dbtable.count((count)=>{
        if(count){
            dbtable.each(table => {
                //console.log(table);

                obj = Sortobj(table);

                fn(obj, index++);

                //console.log(obj);
            })
        }else{
            fn(0);
        }
    })
}

//sort obj
const Sortobj = sortobj =>{
    let obj ={};
    obj = {
        pratoid : sortobj.pratoid,
        seunome : sortobj.seunome,
        prato : sortobj.prato,
        numeromesa : sortobj.numeromesa 
    }

    return obj;
}




const empty = object =>{
    let flag = false;

    for(const value in object){
        if(object[value] != "" && object.hasOwnProperty(value)){
            flag = true;
        }else{
            flag = false;
        }
    }

    return flag;
}

const createEle = (tagname, appendTo, fn) =>{
    const element = document.createElement(tagname);
    if(appendTo) appendTo.appendChild(element);
    if(fn) fn(element);
}

export default restCorpDb;
export{
    bulkcreate,
    getData,
    createEle
}