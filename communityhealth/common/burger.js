var element=document.getElementById("burger"),getNavElement=document.getElementById("burger-menu"),main=document.querySelector("body");main.addEventListener("click",(e=>{null!=(e.target.closest(".general-nav")||e.target.closest("#burger"))?e.target.closest(".general-nav")||getNavElement.classList.toggle("hide-mobile-header"):getNavElement.classList.add("hide-mobile-header")}));