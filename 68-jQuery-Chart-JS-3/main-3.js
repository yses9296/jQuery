$(function(){
    
    var ctx = $('#line-chart');

    var data2021 = {
        label: '2021',
        backgroundColor: 'rgb(39,79,76)',
        borderColor: 'rgba(39,79,76,.5)',
        data: [10, 5, 8, 4, 10, 5, 20, 16, 14, 17, 11, 6],
    };//data2021

    var data2022 = {
        label: '2022',
        backgroundColor: 'rgb(40,161,130)',
        borderColor: 'rgba(40,161,130,.5)',
        data: [6, 10, 9, 17, 20, 30, 45, 41, 37, 39, 14, 19]      
    };//data2022
       

    var lineChart = new Chart(ctx, {
        type: 'bar',
        data: {
			labels : [
				'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'
			],
			datasets: [
                data2021, data2022
            ]
        },//data
        options: {
            maintainAspectRatio: false, //container의 width,height에 알맞게 사이즈 조절
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    beginAtZero: true,
                    stacked: true
                }
            }
        }//options

    });//new Chart 


})//document ready()