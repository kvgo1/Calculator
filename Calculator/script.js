let input= document.getElementById("input"); //the number clicked will be shown here
let button=document.querySelectorAll("button"); //button will store the number pressed

button.forEach(element=> {
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent);

        if(e.target.textContent.trim() === "C")
        {
            input.innerText="";
        }
        else if(e.target.textContent.trim() === "<"){
            input.innerText= input.innerText.slice(0,-1);
        }
        else if(e.target.textContent.trim()=== "=")
        {
           input.innerText=eval(input.innerText);
        }
        else{
            input.innerText += e.target.textContent;
        }
       input.scrolleft=input.scrollWidth;

    });
    
});