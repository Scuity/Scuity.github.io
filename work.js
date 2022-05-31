function liandong(){
    window.location.href="new-liandong.html";
}

function jianmo(){
    window.location.href="new-3d.html";
}

function stickers(){
    window.location.href="new-stickers.html";
}

function live61(){
    window.location.href="new-61live.html";
}

function backtonews(){
    window.location.href="news.html";
}

//回到顶部
window.addEventListener("scroll",handle)
            function handle(){
                var oTop = document.body.scrollTop||document.documentElement.scrollTop
                if(oTop>=200){
                    gotop.style.display = "block";
                }else{
                    gotop.style.display = "none";
                }

                gotop.onclick = function(){
                    window.scrollTo({
                        top:0,
                        behavior:"smooth"
                    })
                }
            }
    
