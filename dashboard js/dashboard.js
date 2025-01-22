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
// ------------------------chart--------------------



//   const ctx = document.getElementById('chart');

//   new Chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });
 
  const ctx2 = document.getElementById('mySecondPieChart').getContext('2d');
  const myPieChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
  const ctx3 = document.getElementById('mythirdPieChart').getContext('2d');
  const myPieChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
  const ctz = document.getElementById('gh-2').getContext('2d');
  const myLineChart = new Chart(ctz, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });