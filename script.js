console.log("check 01");
const myAssignment = document.getElementById('myAssignment');
let Answer = document.getElementById('myAnswer');
let rightAnswer;

function makeSum() {
  let left = Math.floor(Math.random()*10)+1;
  let right = Math.floor(Math.random()*10)+1;
  Answer = left * right;
  myAssignment.innerHTML = left + " X " + right + " = " + Answer;
  console.log("boi");
}

myAnswer.addEventListener('keydown', (evt)=>{
  console.log(evt.keyCode);
  if(evt.keyCode == 13){
    alert(myAnswer.value);
  }
})

function keyPressed() {

}

function waiting() {
console.log('wachten');
myAnswer.value = "";
makeSum();
}

makeSum();
