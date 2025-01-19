let btn=document.getElementById("view-profile")
let profile=document.getElementById("profile-logout")

function toggle() {

    if(profile.style.display==="block"){
        profile.style.display="none"
    }
    else{
        profile.style.display="block";
    }
}


let filter_img=document.getElementById("filter-img")
let main_filter=document.getElementById("left-filter")
function filter_toggle() {
if (main_filter.style.display==="block") {
    main_filter.style.display="none"
} else {
    main_filter.style.display="block"
} 
}


let hamburger=document.getElementById("hamburger");
let left_side=document.getElementById("left-side")


function left_toggle() {

    
    if (left_side.style.display==="none") {
        left_side.style.display="block";
    } else {
        left_side.style.display="none";
    }
}
let cut=document.getElementById("cut");
let again_left=document.getElementById("left-side")
function again_cut() {
    if (again_left.style.display==="none") {
        again_left.style.display="block";
    } else {
       again_left.style.display="none";
    }
    
}

// let info= document.getElementById("info")
// let option=document.getElementById("options")
// function info_toggle() {
//     if (option.style.display==="none") {
//         option.style.display="block";
//     } else {
//        option.style.display="none";
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    // Get all the "info" buttons
    const infoButtons = document.querySelectorAll("#info");
  
    infoButtons.forEach(function (infoButton) {
      infoButton.addEventListener("click", function () {
        // Hide all options menus
        document.querySelectorAll("#options").forEach(function (option) {
          option.style.display = "none";
        });
  
        // Find the specific "options" for the clicked "info" button
        const optionsMenu = this.closest(".tickets-container-heading").querySelector("#options");
  
        // Toggle the display of the clicked button's options menu
        if (optionsMenu) {
          optionsMenu.style.display =
            optionsMenu.style.display === "block" ? "none" : "block";
        }
      });
    });
  });
  
  