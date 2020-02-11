let test = document.querySelectorAll('div');
let btn = document.querySelector('#btn');
let section = document.querySelector('.section');
let index = 0;

console.log(test);

btn.addEventListener('click', function() {

    test[index].style.display = 'block';
  
    if (index < test.length - 1){
        index++
        console.log(test[index]);
        console.log(index);
    } else {
        index = 0;
        console.log(test[index]);   
        console.log(index);
    }
    
})
console.log(test[0]);