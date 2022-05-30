$(function(){
	    
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        type: 'bar',
        data: {
			labels : [
				'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'
			],
			datasets: [
				{
					label: '2022',
					data: [10, 5, 5, 4, 10, 5, 20, 16, 14, 17, 11, 6],
					backgroundColor: [          
						"rgba(242,166,54,.5)",
						"rgba(39,79,76,.5)",
						"rgba(40,161,130,.5)",
						"rgba(206,29,22,.5)",
						"rgba(242,166,54,.5)",
						"rgba(39,79,76,.5)",
						"rgba(40,161,130,.5)",
						"rgba(206,29,22,.5)",
						"rgba(242,166,54,.5)",
						"rgba(39,79,76,.5)",
						"rgba(40,161,130,.5)",
						"rgba(206,29,22,.5)"
					],
					borderColor: [
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",
						"rgb(206,29,22)",
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",  
						"rgb(206,29,22)",
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",
						"rgb(206,29,22)"
			  
					],
					borderWidth: 1,
					hoverBackgroundColor: [
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",
						"rgb(206,29,22)",
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",  
						"rgb(206,29,22)",
						"rgb(242,166,54)",
						"rgb(39,79,76)",
						"rgb(40,161,130)",
						"rgb(206,29,22)"
					]
				}
			]
		}, //data
		options: {
            maintainAspectRatio: false, //container의 width,height에 알맞게 사이즈 조절
            scales: {
                y: {
                    beginAtZero: true
                }
            },//scales
			legned: {
				display: false
			},//legend
			indexAxis: 'y' //Horizontal Bar Chart

			
        }//options

	});//lineChart

})//document ready()