"use strict";

// HOMEWORK
// console.log(elResult);  
//  var elH1 = document.getElementsByTagName('h1')
//  console.log(elH1);
//  var elTitle = document.getElementById('title')
//  console.log(elTitle);
//  var elRes = document.getElementsByClassName('result')
//  console.log(elResult);
// var elResult = document.querySelectorAll('.result')
// console.log(elResult);
// Homwork2
// var elResult = document.querySelector('.result')
// var a = prompt('enter number')
//   if( a%3==0 && a%7 ==0){
//    elResult.textContent='3 and 7 divident'
//   }else if(a%7==0){
//   elResult.textContent='7ga'
//   }else if(a%3 ==0){
//    elResult.textContent='3ga'
//   }else{
//     elResult.textConten='other condition'
//   }
//  var elTitle = document.querySelector('.title')
//  var elInp1 = document.querySelector('.inp1')
//  function fn1(){
//   if(elInp1.value>0){
//     elTitle.textContent ='positiv '
//   }else if(elInp1.value<0){
//     elTitle.textContent='negative'
//   }else{
//     elTitle.textContent= '0'
//   }
//  }
//  var elInp2 = document.querySelector('.inp2')
//  var elInp3 = document.querySelector('.inp3')
// function fn1(){
//  if(elInp3.value =='*'){
//   elTitle.textContent = elInp1.value*elInp2.value
//  } 
//  if(elInp3.value =='/'){
//   elTitle.textContent = elInp1.value/elInp2.value
//  } 
//  if(elInp3.value =='-'){
//   elTitle.textContent = elInp1.value-elInp2.value
//  } 
//  if(elInp3.value =='+'){
//   elTitle.textContent = elInp1.value *1+elInp2.value*1
//  } 
//    if(elInp1.value%2==0){
//     elTitle.textContent = 'even number'
//    } else if( elInp1.value%2==1){
//     elTitle.textContent ='odd number'
//    }
// }
//  var elTitle = document.querySelector('.title')
// function fn1(){
//   elTitle.textContent = elInp.value*10
//   console.log(elInp.value*10);
//   elInp.value =''
// }
//  function fn1(){
//   if(elTitle.textContent == 'goodby'){
//     elTitle.textContent = 'hello'
//   }else{
//     elTitle.textContent = 'goodby'
//   }
//   console.log('working');
// }
// function fn2(){
//   elTitle.textContent = 'goodby'
//   console.log('working');
// }
// Uyga vazifa
var elTitle = document.querySelector('.title');
var elInp1 = document.querySelector('.inp1');

function fn1() {
  if (elInp1.value > 900) {
    elTitle.textContent = 'plan amalga oshdi ';
  } else if (elInp1.value < 200) {
    elTitle.textContent = 'plan amalga oshmadi';
  } else if (elInp1.value < 50) {
    elTitle.textContent = 'plan ozgardi';
  }
}