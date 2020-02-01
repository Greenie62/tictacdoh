var burger=document.querySelector(".burger");
var linklist=document.querySelector(".link-list")
var moneyDOM=document.querySelector("#money")

burger.onclick=toggleLinks;


function toggleLinks(){
    linklist.classList.toggle('show-linklist')
}

var html=""
for(let i=25;i<200;i+=10){
    html += `<option value=${i}>$${i}</option>`
}

moneyDOM.innerHTML=html;


var enterBtn=document.querySelector(".enterBtn")

enterBtn.onclick=printEl

class PostData{
    constructor(name,info){
        this.name=name
        this.info=info
    }

    postItem(el){
        var parent=document.createElement("div");
        parent.className='user-div'
        var button;
        if(el === ".items"){
        var parent=document.createElement("li")
        parent.className='list-item'
        button=document.createElement("button");
        button.className='buyBtn'
        button.setAttribute('data-name',this.name)
        button.setAttribute('data-price',this.info.money)
        button.appendChild(document.createTextNode("Buy"))
        }
        
        var h3=document.createElement("h3");
        h3.appendChild(document.createTextNode("Name: " + this.name))
        parent.appendChild(h3)
        for(let i in this.info){
            if(i === "price"){
                var h4=document.createElement("h4");
                h4.appendChild(document.createTextNode(`${i}:$${this.info[i]}`))
            }
            else{
            var h4=document.createElement("h4");
            h4.appendChild(document.createTextNode(`${i}:${this.info[i]}`))
            }
            parent.appendChild(h4)
        }
        if(button){
            parent.appendChild(button)
        }

        document.querySelector(el).appendChild(parent)
        document.querySelectorAll('.buyBtn').forEach(btn=>{
            btn.onclick=buyShit;
        })
      
       
    }
}

function printEl(){
    var object={
        name:document.querySelector("input[name='name']").value,
        money:document.querySelector("#money").value,
        type:document.querySelector("input[name='question']:checked").value
    }

    console.log(object)

    let item=new PostData(object.name,{money:object.money,type:object.type})
    console.log(item)
    switch(object.type){

        case "item":
        item.postItem('.items')
        break;

        case "shopper":
        item.postItem('.shopper')
        break;
    }
   
}


function buyShit(e){
    console.log('yo')
    console.log(e.target.getAttribute("data-name"))
    console.log(e.target.getAttribute("data-price"))

    var itemAdd={
        name:e.target.getAttribute("data-name"),
        price:e.target.getAttribute("data-price"),
    }

    document.querySelectorAll(".card-body")[2].innerHTML += `<li>${itemAdd.name}</li>`
}