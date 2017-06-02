var ctx = document.getElementById("united-nations");

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Lighting Savings 84%", "Maintenance Savings 16%"],
        datasets: [{
            data: [84, 16],
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




