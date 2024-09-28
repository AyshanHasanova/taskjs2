var laptops = [{
    model: "Asus",
    qiymet : 2000,
    yaddas : "256 GB",
    stokMiqdari: 10,
    stokVeziyyeti : true
},
{
    model: "Hp",
    qiymet : 3000,
    yaddas : "128 GB",
    stokMiqdari: 0,
    stokVeziyyeti : false

},
{ 
    model: "HuaWei",
    qiymet : 2300,
    yaddas : "250 GB",
    stokMiqdari : 30,
    stokVeziyyeti : true
}

] 
// 1 ci laptop
// var ModelTeqi = document.getElementById ("model")
// var QiymetTeqi = document.getElementById ("price")
// var YaddasTeqi = document.getElementById( "storage")
// var StokveziyyetiTeqi = document.getElementById ("stock")

// ModelTeqi.innerText = "Asus"


//  QiymetTeqi.innerText = "2000 Azn"
//  YaddasTeqi.innerText = "256 GB"
//  StokveziyyetiTeqi.innerText = true
// // 2-ci laptop

//  var ModelTeqi = document.getElementById ("model1")
// var QiymetTeqi = document.getElementById ("price1")
// var YaddasTeqi = document.getElementById( "storage1")
// var StokveziyyetiTeqi = document.getElementById ("stock1")

// ModelTeqi.innerText = "Hp"


//  QiymetTeqi.innerText = "3000 Azn"
//  YaddasTeqi.innerText = "128 GB"
//  StokveziyyetiTeqi.innerText = true

// //  3-cu laptop
// var ModelTeqi = document.getElementById ("model2")
// var QiymetTeqi = document.getElementById ("price2")
// var YaddasTeqi = document.getElementById( "storage2")
// var StokveziyyetiTeqi = document.getElementById ("stock2")

// ModelTeqi.innerText = "Huawei"


//  QiymetTeqi.innerText = "2300 Azn"
//  YaddasTeqi.innerText = "256 GB"
//  StokveziyyetiTeqi.innerText = false



// Medium task

// 1 ci laptop
// var ModelTeqi = document.getElementById ("model")
// var QiymetTeqi = document.getElementById ("price")
// var YaddasTeqi = document.getElementById( "storage")
// var StokveziyyetiTeqi = document.getElementById ("stock")
// var stokMiqdari= 10

// ModelTeqi.innerText = "Asus"


//  QiymetTeqi.innerText = "2000 Azn"
//  YaddasTeqi.innerText = "256 GB"
//  if (stokMiqdari>0) {
//     StokveziyyetiTeqi.innerText ='stokda movcuddur'
    
//  }else{
//     StokveziyyetiTeqi.innerText ='stokda movcuddur'
//  }
// // 2ci laptop
//  var ModelTeqi = document.getElementById ("model1")
// var QiymetTeqi = document.getElementById ("price1")
// var YaddasTeqi = document.getElementById( "storage1")
// var StokveziyyetiTeqi = document.getElementById ("stock1")
// var stokMiqdari= 0

// ModelTeqi.innerText = "Hp"


//  QiymetTeqi.innerText = "3000 Azn"
//  YaddasTeqi.innerText = "128 GB"
//  if (stokMiqdari>0) {
//     StokveziyyetiTeqi.innerText ='stokda movcuddur'
    
//  }else{
//     StokveziyyetiTeqi.innerText ='stokda movcud deyil'
//  }

// //  3-cu laptop
// var ModelTeqi = document.getElementById ("model2")
// var QiymetTeqi = document.getElementById ("price2")
// var YaddasTeqi = document.getElementById( "storage2")
// var StokveziyyetiTeqi = document.getElementById ("stock2")
// var stokMiqdari= 30

// ModelTeqi.innerText = "Hp"


//  QiymetTeqi.innerText = "3000 Azn"
//  YaddasTeqi.innerText = "128 GB"
//  if (stokMiqdari>0) {
//     StokveziyyetiTeqi.innerText ='stokda movcuddur'
    
//  }else{
//     StokveziyyetiTeqi.innerText ='stokda movcud deyil'
//  }


// Hard Task

var tableBody = document.querySelector ("#laptopTable tbody");

var tableData = '';
for (var i = 0; i < laptops.length; i++) {
  tableData +=
  `
  <tr>
  <td >${laptops[i].model}</td>
  <td >${laptops[i].qiymet}</td>
  <td >${laptops[i].yaddas}</td>
  <td >${laptops[i].stokVeziyyeti}</td>
  </tr>
  
  
  
  `
  
    
}
tableBody.innerHTML = tableData;




 






 


