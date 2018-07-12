var tdindex = 1;
var dnindex = 1;
function apperPopup() {
  swal("Add your Task :", {
    content: "input",
  })
  .then((value) => {
    var current = document.getElementById('todo-list').innerHTML;
    var update = '<li id="t' + tdindex + '">' + value + '<button onclick="crdone('+ tdindex +')" class="btn"><font class="act"><i class="fa fa-check" aria-hidden="true"></i></font></button></li>';
    var renew = current+update;
    document.getElementById('todo-list').innerHTML = renew;
    tdindex++;
  }).then(()=>{
    swal("Task added!", "One new task added", "success");
  });
}

function crdone(doneId) {
  var data = document.getElementById('t'+doneId).innerHTML;
  var ar = data.split('<b');
  var nd = ar[0];
  document.getElementById('t'+doneId).remove();
  //alert(nd);
  var current = document.getElementById('done-list').innerHTML;
  var update = '<li id="d' + dnindex + '">' + nd + '<button onclick="undone('+ dnindex +')" class="btn"><font class="dont"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i></font> </button><button onclick="delfl('+ dnindex +')"  class="btn"><font class="remov"><i class="fa fa-trash-o" aria-hidden="true"></i> </font></button></li>';
  var renew = current+update;
  document.getElementById('done-list').innerHTML = renew;
  dnindex++;
}

function delfl(indx){
  document.getElementById('d'+indx).remove();
}

function undone(indx) {
  var data = document.getElementById('d'+indx).innerHTML;
  var ar = data.split('<b');
  var nd = ar[0];
  document.getElementById('d'+indx).remove();
  var current = document.getElementById('todo-list').innerHTML;
  var update = '<li id="t' + tdindex + '">' + nd + '<button onclick="crdone('+ tdindex +')" class="btn"><font class="act"><i class="fa fa-check" aria-hidden="true"></i></font></button></li>';
  var renew = current+update;
  document.getElementById('todo-list').innerHTML = renew;
  tdindex++;
}
