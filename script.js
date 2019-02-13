$(document).ready(function(){
    $('.title').click(function(){
      $('.container').addClass('open');
    });
    $('.close').click(function(){
      $('.container').removeClass('open');
      setTimeout(function(){
      $(".wrapper").css("display","block");
      $(".ico").css("display","none");
      $("body").css("display", "flex");
      $("body").css("justify-content", "center");
      $("body").css("align-item", "center");
    },1400);
    });
  });
  var myhol = document.getElementById("hol");
  function randVal(myVal, other){ 
      if(Array.isArray(myVal)){
          var ranInArray = Math.floor(Math.random() * myVal.length);
      return myVal[ranInArray];    
      }else{
          var randnum = Math.floor(Math.random() * myVal);
          return randnum;
      }
  }
  var color =['#cc3673','#273522','#7c001b','#3a0003','#dbd000','#824275','#eba2a3','#d1003b'],
      sizebox = [10,15,20,5,12,30,22,34,16],
      myh = document.getElementById("hol"),
      lV = document.getElementById("h");
  for(i = 0 ; i < 100 ; i++){
      for(x = 0 ; x < myh.children.length ; x++){
          
              var mypub = document.createElement("div");
          
              var size = randVal(sizebox) + "px";
          
              mypub.style.backgroundColor = randVal(color) ; 
          
              mypub.style.borderColor =  randVal(color) ;
          
              mypub.style.width = size  ;
          
              mypub.style.height = size  ;
          
              mypub.style.left = randVal(100) + "%";
          
              mypub.style.top = randVal(100) + "%";
          
              myh.children[x].appendChild(mypub);
          
      } 
  }
  var ct = document.getElementById("center");
  setInterval(function(){
      lV.style.backgroundColor = randVal(color) ;
      lV.nextElementSibling.style.backgroundColor = randVal(color) ;    
      for(i = 0 ; i < ct.children.length ; i++){
          ct.children[i].style.backgroundColor = randVal(color);
      }    
  },1000);

  