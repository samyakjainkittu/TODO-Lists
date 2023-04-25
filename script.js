function getandupdate(){
  
  console.log("Updating List......");
  tit = document.getElementById('title').value;
  desc = document.getElementById('description').value;
  date = document.getElementById('date').value;
  
  
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc, date]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }
  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, desc, date]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }

  update();

}  








function update(){

//populate the table

  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  }

  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }

  let tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `
      <tr>
      <th scope="row">${index + 1}</th>
      <td>${element[0]}</td>
      <td>${element[1]}</td> 
      <td>${element[2]}</td> 
      <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})"  >Delete</button></td> 
      </tr>`;

  });
  tableBody.innerHTML = str;
}

add = document.getElementById("add");
add.addEventListener("click", getandupdate);
update();


function deleted(itemIndex){
  console.log("Delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem('itemsJson');
  itemJsonArray = JSON.parse(itemJsonArrayStr);

  itemJsonArray.splice(itemIndex,1)
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
  update();

}


function clearStorage() {
  if(confirm("Do You Really want to clear ? ")){
    console.log("clearing ");
    localStorage.clear();
    update();
  }
}
