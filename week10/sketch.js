let slider;
let label;
let fn = fib;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 12, 1);
  label = createDiv();
  label.position(10, 420);

  sel = createSelect();
  sel.position(10, 10);
  sel.option('FIB');
  sel.option('POWER OF 2');
  sel.selected('FIB');
  sel.changed(mySelectEvent);
  
}

function draw() {
  background(220);
  
  
  let n = slider.value();
  label.elt.innerText = `${fn.name}(${n}) = ${fn(n)}`;
  
  // draw a plot of the fib function
  for (let i = 0; i < 15; i++) {
    rect(i * 26, height, 20, -fn(i));
  }
}

function fib(n) {
  // fill this in
  if (n == 0){
      return 0;
  }else if(n == 1){
      return 1;
  }else{
      return fib(n-1)+fib(n-2);
  }
}

function powerOf2(n) {
  return 2 ** (n-1);
}

function mySelectEvent(){
    check = sel.value();
    if (check == "FIB"){
        fn = fib;
    }else{
        fn = powerOf2;
    }
    
}