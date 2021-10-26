


var body = 
    (document.querySelector("body").style.cssText=
    "margin: 0; margin-top: 100px ; padding :0; box-sizing : border-box;");

for(var i=0;i<10;i++){

var div =document.createElement("div");
    div.style.cssText =
    " width: 80%; margin: auto; margin-bottom: 100px; display: flex; flex-direction: row; justify-content: space-between;";
    document.body.appendChild(div);

// var div2 =document.createElement("div");
//     div.style.cssText =
//     " width: 20%; margin-left: 10%; display: flex; flex-direction: colum; justify-content: space-between;";
//     div.appendChild(div2);

var oImg = document.createElement("img");
    oImg.setAttribute('src', 'xp1.webp');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height', '70%');
    div.appendChild(oImg);

// let h3= document.createElement("h3");
//     h3.innerHTML="MINIMAL DESIGN" ;
//     h3.style.cssText=
//     " font-size: 20px; font-family: Roboto,sans-serif;";
//     div2.appendChild(h3);   

// var p= document.createElement("p");
//     p.innerHTML= "Animated, portfolio";
//     p.style.cssText=
//     "color: #777; font-size: 15px; font-family: Roboto,sans-serif;";
//     div2.appendChild(p);

// var div2 =document.createElement("div");
//     div.style.cssText =
//     " width: 20%; margin-left: 10%; display: flex; flex-direction: colum; justify-content: space-between;";
//     div.appendChild(div2);

var oImg = document.createElement("img");
    oImg.setAttribute('src', 'xp2.webp');
    oImg.setAttribute('alt', 'na');
    div.appendChild(oImg);
    
    

    
// var div2 =document.createElement("div");
//     div.style.cssText =
//     " width: 20%; margin-left: 10%; display: flex; flex-direction: colum; justify-content: space-between;";
//     div.appendChild(div2);

var oImg = document.createElement("img");
    oImg.setAttribute('src', 'xp3.webp');
    oImg.setAttribute('alt', 'na');
    oImg.setAttribute('height' ,'70%');
    div.appendChild(oImg);
}

