
document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.divdau');
    var menu = menu[0];
        
    
    var chu = document.querySelectorAll('span')



        var trangthai="duoi300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 128){
            if(trangthai == "duoi300")
            {
                trangthai="tren300";
                menu.classList.add('daudoi');
                chu[0].classList.toggle('nhohon');
            }
        }
        else{
            if(trangthai=="tren300"){
            menu.classList.remove('daudoi');
            chu[0].classList.remove('nhohon');
            trangthai="duoi300";}
        }
    
    })
})