window.addEventListener("load",function(){
    console.log("hello")
    var card1 = this.document.querySelector("#a1");
    var card2 = this.document.querySelector("#b1");
    var card3 = this.document.querySelector("#c1");
    var inf_card1 = this.document.querySelector("#a2");
    var inf_card2 = this.document.querySelector("#b2");
    var inf_card3 = this.document.querySelector("#c2");
    card1.addEventListener('click', function(){
        inf_card1.style.display = "block";
    });
    card2.addEventListener('click', function(){
        inf_card2.style.display = "block";
    });
    card3.addEventListener('click', function(){
        inf_card3.style.display = "block";
    });
   var w_choice = this.document.querySelector("#ch1")
   var corr_choice = this.document.querySelector("#ch2");
   var W_choice = this.document.querySelector("#ch3");
   var c_val = 0;
   var wage1 = this.document.querySelector("#hwage");
   var wage2 = this.document.querySelector("#wage");
   w_choice.addEventListener('click', function(){
    c_val=1;
    if(c_val===2)
   {
    wage1.style.display="block";
    wage2.style.display="block";
   }
   else{
    wage1.style.display="none";
    wage2.style.display="none";
   }
   });
   corr_choice.addEventListener('click', function(){
    c_val=2;
    if(c_val===2)
   {
    wage1.style.display="block";
    wage2.style.display="block";
   }
   else{
    wage1.style.display="none";
    wage2.style.display="none";
   }
   });
   W_choice.addEventListener('click', function(){
    c_val=3;
    if(c_val===2)
   {
    wage1.style.display="block";
    wage2.style.display="block";
   }
   else{
    wage1.style.display="none";
    wage2.style.display="none";
   }
   });

   
   
})