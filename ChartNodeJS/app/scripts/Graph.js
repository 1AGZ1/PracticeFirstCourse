
//Connect chart as HTML element
const ctx = document.getElementById('myChart').getContext('2d');

//Chart object
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: []
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

//Reset Variables
function Reset_Variables(){
    myChart.data.datasets = [];
    myChart.type = "line";

    ArrChart =[];
    arrVerify = [];
}