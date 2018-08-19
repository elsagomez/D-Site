var ctx = document.getElementById("brigham-park");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Lighting Savings 89%", "Maintenance Savings 11%"],
        datasets: [{
            data: [89, 11],
            backgroundColor: [
                'rgba(66, 114, 155,1)',
                'rgba(136, 136, 136, 1)'                
            ],
            hoverBackgroundColor: [
                'rgba(66, 114, 155,.5)',
                'rgba(136, 136, 136,.5)'
            ],
            
        }]
    },
   options: {


        animation:{
            animateScale:true
        }
    }
});
