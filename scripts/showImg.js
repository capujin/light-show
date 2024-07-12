const btns = document.querySelectorAll(".textiles__option");
const btn_group = document.querySelectorAll(".textiles");
for(let i = 0; i<btn_group.length; i++){
    btn_group[i].addEventListener("click", function(e){
        if(e.target.tagName == 'IMG'){
            for(let j = 0; j<btns.length; j++){
                btns[j].classList.remove("active");
            }
            e.target.parentNode.classList.add("active");
            document.querySelector(".shirt__overlay").style.display = "flex";
            let heibai = document.querySelector("#black");
            let caise = document.querySelector("#color");
            let str = e.target.getAttribute("src");
            caise.setAttribute("src",str);
            str = str.split("彩色")[0] + "黑白" + str.split("彩色")[1];
            heibai.setAttribute("src",str);
        }
        
    })
}
const nextPage = document.querySelector("#textiles--2");
let index = 0;
nextPage.addEventListener("click", function(){
    for(let i = 0; i<btn_group.length; i++){
        btn_group[i].setAttribute("style","display: none");
    }
    if(index+1 >= btn_group.length){
        index = 0;  
        btn_group[0].removeAttribute("style");
    }
    else{
        btn_group[++index].removeAttribute("style");
    }
    
    
})