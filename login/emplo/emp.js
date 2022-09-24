function addemp(){
    employee={empname:ename.value,emploid:eid.value,adress:adrs.value,salary:desig.value,post:sal.value}
    if(employee.emploid in localStorage){
        alert("Already exist")
    }
    else{
    localStorage.setItem(employee.empid,JSON.stringify(employee))
alert("employee added suscessfully")
    }
}
function searchemp(){
  key=search.value
  if(key in localStorage){
emp=JSON.parse(localStorage.getItem(key))
result.innerHTML=`<p>employee name is${emp.empname}</p>`

}
  else{
    result.innerHTML=""
    alert("employee not exist")
  }
}