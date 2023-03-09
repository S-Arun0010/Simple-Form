let arr=[];
Submit = ()=>
{   
    collectdata();
    storedata();
}
storedata=()=>
{
    let tbody = document.getElementById("tbody");
    //  tbody.innerHTML +=
    //   `<tr>
    //    <td>${name}</td>
    //    <td>${type}</td>
    //    <td>${episode}</td>
    //    <td>${rate}</td>
    //    <td><button onclick =  "editelement(this)"> Edit </button>    <button  onclick = "removeelement(this)"> Delete </button></td>
    //   </tr>` 
    let x;
    tbody.innerHTML += 
    arr.forEach(element => {
        x=element;
        tbody.innerHTML += `<td></td>`
        console.log(x);
      });
     
     // console.log(arr);
    // `<tr>`
    // array.forEach(element => {
    //     tbody.innerHTML += <td>${element.value}</td>
    
    //   });
    //   <td><button onclick =  "editelement(this)"> Edit </button>    <button  onclick = "removeelement(this)"> Delete </button></td>`

}
collectdata = () =>
{   
    arr=[];
    // let arr=[];
    let name=document.getElementById('name').value;
    arr.push(name);
    let type=document.getElementById('typ').value;
    arr.push(type);
    let episode=document.getElementById('epi').value;
    arr.push(episode);
    let rate=document.getElementById('ra').value;
    arr.push(rate);
    //array.push(arr); 
    

}
editelement = (element) =>
{
    row = element.parentElement.parentElement;
    arr.forEach((value,index) => {
       value = row.cells[index].innerHTML;
    });

}