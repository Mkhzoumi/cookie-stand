'use strict';
//these variables are used inside all objects.
let container=document.getElementById('cont');
let locationName=document.createElement('h1');
let unorderedList=document.createElement('ul');
let amPm='';
let list='';
let total=0;
let clock=5;

//seattle
const seatle = {
  minCust:23,
  maxCust:65,
  avgCookie:6.3,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },


  render: function(){

    container.appendChild(locationName);

    container.appendChild(unorderedList);
    locationName.textContent='Seattle';

    let amPm='';
    let list='';
    let total=0;
    let clock=5;


    for(let i =0 ; i<15 ; i++){
      list=document.createElement('li');
      unorderedList.appendChild(list);
      if (clock < 12 ){
        clock++;
      }else{
        clock=1;
      }if(clock < 12 && i<6){
        amPm='am';
      }
      if(i>=6){
        amPm='pm';
      }
      if(i<14){
        list.textContent=`${clock} ${amPm}: ${seatle.cookPurchEachHr[i]}`;
        total=total+seatle.cookPurchEachHr[i];
      }else{
        list.textContent=`total: ${total}`;
      }

    }

  }

};

seatle.avgCust();
seatle.render();



//tokyo
const tokyo = {
  minCust:3,
  maxCust:24,
  avgCookie:1.2,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },


  render: function(){
    container=document.getElementById('cont');
    locationName=document.createElement('h1');
    container.appendChild(locationName);
    locationName.textContent='Tokyo';


    unorderedList=document.createElement('ul');
    container.appendChild(unorderedList);




    for(let i =0 ; i<15 ; i++){
      list=document.createElement('li');
      unorderedList.appendChild(list);
      if (clock < 12 ){
        clock++;
      }else{
        clock=1;
      }if(clock < 12 && i<6){
        amPm='am';
      }
      if(i>=6){
        amPm='pm';
      }
      if(i<14){
        list.textContent=`${clock} ${amPm}: ${tokyo.cookPurchEachHr[i]}`;
        total=total+tokyo.cookPurchEachHr[i];
      }else{
        list.textContent=`total: ${total}`;
      }
    }


  }
};

tokyo.avgCust();
tokyo.render();



//Dubai
const dubai = {
  minCust:11,
  maxCust:38,
  avgCookie:3.7,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },

  render: function(){
    container=document.getElementById('cont');
    locationName=document.createElement('h1');
    container.appendChild(locationName);
    locationName.textContent='Dubai';


    unorderedList=document.createElement('ul');
    container.appendChild(unorderedList);

    amPm='';
    list='';
    total=0;
    clock=5;

    for(let i =0 ; i<15 ; i++){
      list=document.createElement('li');
      unorderedList.appendChild(list);
      if (clock < 12 ){
        clock++;
      }else{
        clock=1;
      }if(clock < 12 && i<6){
        amPm='am';
      }
      if(i>=6){
        amPm='pm';
      }
      if(i<14){
        list.textContent=`${clock} ${amPm}: ${dubai.cookPurchEachHr[i]}`;
        total=total+dubai.cookPurchEachHr[i];
      }else{
        list.textContent=`total: ${total}`;
      }
    }

  }

};

dubai.avgCust();
dubai.render();





//paris
const paris = {
  minCust:20,
  maxCust:38,
  avgCookie:2.3,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },
  render: function(){
    container=document.getElementById('cont');
    locationName=document.createElement('h1');
    container.appendChild(locationName);
    locationName.textContent='Paris';


    unorderedList=document.createElement('ul');
    container.appendChild(unorderedList);

    amPm='';
    list='';
    total=0;
    clock=5;

    for(let i =0 ; i<15 ; i++){
      list=document.createElement('li');
      unorderedList.appendChild(list);
      if (clock < 12 ){
        clock++;
      }else{
        clock=1;
      }if(clock < 12 && i<6){
        amPm='am';
      }
      if(i>=6){
        amPm='pm';
      }
      if(i<14){
        list.textContent=`${clock} ${amPm}: ${paris.cookPurchEachHr[i]}`;
        total=total+paris.cookPurchEachHr[i];
      }else{
        list.textContent=`total: ${total}`;
      }
    }

  }

};

paris.avgCust();
paris.render();


//lima
const lima = {
  minCust:11,
  maxCust:38,
  avgCookie:3.7,
  avgCustPerHr:[],
  cookPurchEachHr:[],
  rand:function () {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  avgCust: function(){
    for(let i=0 ; i < 14 ; i++){
      this.avgCustPerHr[i]=this.rand();
      this.cookPurchEachHr[i]=Math.floor(this.avgCustPerHr[i]*this.avgCookie);
    }
  },
  render: function(){
    container=document.getElementById('cont');
    locationName=document.createElement('h1');
    container.appendChild(locationName);
    locationName.textContent='Lima';


    unorderedList=document.createElement('ul');
    container.appendChild(unorderedList);

    amPm='';
    list='';
    total=0;
    clock=5;

    for(let i =0 ; i<15 ; i++){
      list=document.createElement('li');
      unorderedList.appendChild(list);
      if (clock < 12 ){
        clock++;
      }else{
        clock=1;
      }if(clock < 12 && i<6){
        amPm='am';
      }
      if(i>=6){
        amPm='pm';
      }
      if(i<14){
        list.textContent=`${clock} ${amPm}: ${lima.cookPurchEachHr[i]}`;
        total=total+lima.cookPurchEachHr[i];
      }else{
        list.textContent=`total: ${total}`;
      }
    }

  }
};

lima.avgCust();
lima.render();
