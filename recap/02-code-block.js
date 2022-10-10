// if you write any variable directly into file then it is global scope
// Ex:
let name = "harsh"; // this name can be used anywhere in file

// but if i use any variable or code in any function or class then that variable or code is limited to that function or code
// EX:
function func() {
  // this name will can be only use in this func scope
  let name = "Jay";
}
