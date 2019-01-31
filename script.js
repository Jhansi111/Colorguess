
 var squaresNum=6;	    
 var colors=[];
 var pickedCol;
 

 var squares= document.getElementsByClassName("square");
 var colDisplay=document.getElementById("colDisplay");
 var msg= document.getElementById("msg");
 var head=document.querySelector("h1");
 var newCol= document.querySelector("#reset");
 var selectButtons= document.querySelectorAll(".mode");
 //var score= document.querySelector("#score");

 init();

 function init(){
 	setUpSelectButtond();
    setUpSquares();
    //assigning colors to squares
	refresh(); 
}
// function for selecting b/w easy and hard buttons
function setUpSelectButtond(){
	for(var i = 0; i < selectButtons.length; i++) {
		   selectButtons[i].addEventListener("click", function() {
			selectButtons[0].classList.remove("selected");
			selectButtons[1].classList.remove("selected");
			this.classList.add("selected");	
			this.textContent === "EASY" ?	squaresNum = 3 : squaresNum = 6;
			refresh();
		  });
	   }
}

   //assigning fuctionality to squares
function setUpSquares(){
	for( var i=0; i< squares.length; i++){
	   	//add event listeners to squares            
	  	 squares[i].addEventListener("click", function(){
	  	 var clickedCol=this.style.backgroundColor;
	  	// comparision b/w clicked color and picked color
	     if(clickedCol === pickedCol){
	     	msg.textContent= "Correct";
	     	changeColor(clickedCol);
	     	head.style.backgroundColor= clickedCol;
	     	newCol.textContent="PLAY AGAIN?";
	     	} else{
	     	this.style.backgroundColor="#232323";
	     	msg.textContent= "Try Again";
	     	}
	   	});
	 } 
}

 function refresh(){
    colors=generateRandomColor(squaresNum);
    newCol.textContent="NEW COLORS";   
	msg.textContent= " "; 	
	//picking a color
	pickedCol=pickColor();
	colDisplay.textContent=pickedCol;
	//changing squares color
	for(var i=0;i<squares.length;i++){
	 if(colors[i]){
	squares[i].style.display="block";
	squares[i].style.backgroundColor=colors[i];
	} else{
		squares[i].style.display="none";
	}
   } 
        //changing h1 background color if present

    	head.style.backgroundColor= "#9ACD32";
     
   }

//selecting clickedCol
  function changeColor(Col){
   for(var i=0;i<squares.length;i++){
     	squares[i].style.backgroundColor= Col;
     }
     	
  }
//selecting pickedCol
  function pickColor(){
  	var random= Math.floor(Math.random() *colors.length);
    return colors[random];
  }
//Random colors generation in the array
  function generateRandomColor(num){
  	var arr=[];
  	for(var i=0;i<num;i++){
     arr.push(randomColor());
   }
     return arr;
    }
  //random rgb() generation to display that in the heading
  function randomColor(){
  	//generating random red,green,blue
  	var r= Math.floor(Math.random()*256);
  	var g=  Math.floor(Math.random()*256);
  	var b=  Math.floor(Math.random()*256);
  	return "rgb(" + r+ ", "+g+", "+b+")";
  }
     //when "New colors" button is clicked 
    newCol.addEventListener("click", function(){    	
    	refresh();
    });  
	   
	