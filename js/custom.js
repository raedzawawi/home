var ctx = document.getElementById("myChart");
            var data = {
                labels: [
                    "HTML/CSS/JS/JQuery"
                ],
                datasets: [
                    {
                        data: [90, 10],
                        backgroundColor: [
                            "#3498db",
                            "#bdc3c7",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#3498db",
                            "#bdc3c7",
                            "#FFCE56"
                        ]
                    }]
            };
            var myDoughnutChart = new Chart(ctx, {
                type: 'doughnut',
                data: data
            });

            var ctx2 = document.getElementById("myChart2");
            var data2 = {
                labels: [
                    "Java"
                ],
                datasets: [
                    {
                        data: [80, 20],
                        backgroundColor: [
                            "#e74c3c",
                            "#bdc3c7",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#e74c3c",
                            "#bdc3c7",
                            "#FFCE56"
                        ]
                    }]
            };
            var myDoughnutChart2 = new Chart(ctx2, {
                type: 'doughnut',
                data: data2
            });

            var ctx3 = document.getElementById("myChart3");
            var data3 = {
                labels: [
                    "AngularJS, Bower, Node"
                ],
                datasets: [
                    {
                        data: [50, 50],
                        backgroundColor: [
                            "#2ecc71",
                            "#bdc3c7",
                            "#FFCE56"
                        ],
                        hoverBackgroundColor: [
                            "#2ecc71",
                            "#bdc3c7",
                            "#FFCE56"
                        ]
                    }]
            };
            var myDoughnutChart3 = new Chart(ctx3, {
                type: 'doughnut',
                data: data3
            });