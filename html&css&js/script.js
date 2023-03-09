let  row = null;
let array = [];
Submit = () =>
{   
    let dataentered = collectdata();

     if(dataentered == false)
     {
        msg.innerHTML ="Enter all details!";
     }
     else
     {
      if(array.includes("mismatch"))
      {
        msg.innerHTML ="Enter Type as Series or Movie!";
      }
      else
      {
       if(row == null)
       {
         insert(dataentered);
         msg.innerHTML ="Details inserted";
       }
       else
       {     
        update();
        msg.innerHTML ="Details updated";
        row=null;
       }
       document.getElementById("form").reset();
    }
  }

}
// function collectdata()
// {
//     var name1 = document.getElementById("name").value;
//     var type = document.getElementById("typ").value;
//     var epi = document.getElementById("epi").value;
//     var ra = document.getElementById("ra").value;
//     var arr = [name1,type,epi,ra];
//     return arr;
// }
 collectdata = () => 
 {
    let arr=[];
    var name1 = document.getElementById("name").value;
    arr.push(name1);
    var type = document.getElementById("typ").value;
    if(type == "Series" || type == "Movies" || type == "series" || type == "movies")
    {
      arr.push(type);
    }
    else
    {
      arr.push("mismatch");
    } 
    var epi = document.getElementById("epi").value;
    arr.push(epi);
    var da = document.getElementById("date").value;
    arr.push(da);
    var ra = document.getElementById("ra").value;
    arr.push(ra);
    if(arr.includes(""))
    { 
        return false;
    }
    else
    {
        array.push(arr);
       return arr;
    }
 }

insert = (dataentered) =>
{
   var row = table.insertRow();
   dataentered.forEach(element => {
     row.insertCell().innerHTML = element;
   });
   row.insertCell(dataentered.length).innerHTML = `<button onclick =  "editelement(this)"> Edit </button> 
     <button  onclick = "removeelement(this)"> Delete </button>`   
}

 editelement = (element) =>
{
    row = element.parentElement.parentElement;
   
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("typ").value = row.cells[1].innerHTML;
    document.getElementById("epi").value = row.cells[2].innerHTML;
    document.getElementById("date").value = row.cells[3].innerHTML;
    document.getElementById("ra").value = row.cells[4].innerHTML;
    update();
    // arr.forEach((value,index) => {
    //    value = row.cells[index].innerHTML;
    // });

}

// function update()
// {
//     row.cells[0].innerHTML = document.getElementById("name").value;
//     row.cells[1].innerHTML = document.getElementById("typ").value;
//     row.cells[2].innerHTML = document.getElementById("epi").value; 
//     row.cells[3].innerHTML = document.getElementById("ra").value; 
//     row = null;
// }

update = () =>
{
    
    arr.forEach((value,index) => {
         row.cells[index].innerHTML = value;
    });
    arr = []; 
}

// function removeelement(element)
// {
//     var res = confirm("The deatils will deleted permanently");
//     if(res)
//     {
//    row = element.parentElement.parentElement;
//    document.getElementById("table").deleteRow(row.rowIndex); 
//     } 
// }
 
removeelement = (element) =>
{
    var res = confirm("The deatils will deleted permanently");
    if(res)
    {
   row = element.parentElement.parentElement;
   document.getElementById("table").deleteRow(row.rowIndex); 
    }  
}


 