const teslaStockData = {
            dates: ['2020-01', '2020-04', '2020-07', '2020-10', '2021-01', '2021-04', '2021-07', '2021-10', '2022-01', '2022-04', '2022-07', '2022-10', '2023-01', '2023-04', '2023-07', '2023-10', '2024-01'],
            prices: [29.53, 21.31, 60.23, 53.98, 157.37, 67.75, 68.85, 104.97, 99.27, 97.26, 73.20, 68.78, 40.64, 53.98, 85.16, 78.29, 88.22],
            volumes: [1.2, 1.8, 2.1, 1.9, 2.3, 2.0, 1.7, 1.5, 1.8, 2.2, 1.9, 1.6, 1.4, 1.8, 2.0, 1.7, 1.9]
        };

        const teslaRevenueData = {
            dates: ['2020-Q1', '2020-Q2', '2020-Q3', '2020-Q4', '2021-Q1', '2021-Q2', '2021-Q3', '2021-Q4', '2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1'],
            revenue: [5985, 6036, 8771, 10744, 10389, 11958, 13757, 17719, 18756, 16934, 21454, 24318, 23329, 24927, 23350, 25167, 21301]
        };

        const gamestopStockData = {
            dates: ['2020-01', '2020-04', '2020-07', '2020-10', '2021-01', '2021-04', '2021-07', '2021-10', '2022-01', '2022-04', '2022-07', '2022-10', '2023-01', '2023-04', '2023-07', '2023-10', '2024-01'],
            prices: [17.69, 5.31, 4.18, 10.56, 325.00, 15.60, 40.52, 44.38, 21.52, 32.34, 9.42, 7.04, 4.13, 5.20, 4.81, 3.68, 4.23],
            volumes: [0.8, 1.2, 0.9, 1.5, 4.2, 2.1, 1.8, 1.3, 1.0, 1.4, 1.1, 0.9, 0.7, 1.0, 0.8, 0.9, 1.1]
        };

        const gamestopRevenueData = {
            dates: ['2020-Q1', '2020-Q2', '2020-Q3', '2020-Q4', '2021-Q1', '2021-Q2', '2021-Q3', '2021-Q4', '2022-Q1', '2022-Q2', '2022-Q3', '2022-Q4', '2023-Q1', '2023-Q2', '2023-Q3', '2023-Q4', '2024-Q1'],
            revenue: [1021, 942, 1277, 2194, 1277, 1183, 1297, 2254, 1378, 1169, 1186, 1299, 1237, 1164, 1073, 1794, 881]
        };

        let teslaChart, gamestopChart;

        function initializeOutputs() {
            // Tesla Stock Output
            document.getElementById('tesla-stock-output').innerHTML = `
                Tesla Stock Data Shape: (${teslaStockData.dates.length}, 7)
                <br><br>First 5 rows of Tesla stock data:
                <table style="width:100%; margin-top:10px;">
                    <tr><th>Date</th><th>Open</th><th>High</th><th>Low</th><th>Close</th><th>Volume</th></tr>
                    ${teslaStockData.dates.slice(0, 5).map((date, i) => `
                        <tr>
                            <td>${date}</td>
                            <td>$${(teslaStockData.prices[i] * 0.98).toFixed(2)}</td>
                            <td>$${(teslaStockData.prices[i] * 1.05).toFixed(2)}</td>
                            <td>$${(teslaStockData.prices[i] * 0.95).toFixed(2)}</td>
                            <td>$${teslaStockData.prices[i]}</td>
                            <td>${(teslaStockData.volumes[i] * 1000000).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            // Tesla Revenue Output
            document.getElementById('tesla-revenue-output').innerHTML = `
                Tesla Revenue Data Shape: (${teslaRevenueData.dates.length}, 2)
                <br><br>First 5 rows of Tesla revenue data:
                <table style="width:100%; margin-top:10px;">
                    <tr><th>Date</th><th>Revenue (millions)</th></tr>
                    ${teslaRevenueData.dates.slice(0, 5).map((date, i) => `
                        <tr>
                            <td>${date}</td>
                            <td>$${teslaRevenueData.revenue[i]}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            // GameStop Stock Output
            document.getElementById('gamestop-stock-output').innerHTML = `
                GameStop Stock Data Shape: (${gamestopStockData.dates.length}, 7)
                <br><br>First 5 rows of GameStop stock data:
                <table style="width:100%; margin-top:10px;">
                    <tr><th>Date</th><th>Open</th><th>High</th><th>Low</th><th>Close</th><th>Volume</th></tr>
                    ${gamestopStockData.dates.slice(0, 5).map((date, i) => `
                        <tr>
                            <td>${date}</td>
                            <td>$${(gamestopStockData.prices[i] * 0.98).toFixed(2)}</td>
                            <td>$${(gamestopStockData.prices[i] * 1.05).toFixed(2)}</td>
                            <td>$${(gamestopStockData.prices[i] * 0.95).toFixed(2)}</td>
                            <td>$${gamestopStockData.prices[i]}</td>
                            <td>${(gamestopStockData.volumes[i] * 1000000).toLocaleString()}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            // GameStop Revenue Output
            document.getElementById('gamestop-revenue-output').innerHTML = `
                GameStop Revenue Data Shape: (${gamestopRevenueData.dates.length}, 2)
                <br><br>First 5 rows of GameStop revenue data:
                <table style="width:100%; margin-top:10px;">
                    <tr><th>Date</th><th>Revenue (millions)</th></tr>
                    ${gamestopRevenueData.dates.slice(0, 5).map((date, i) => `
                        <tr>
                            <td>${date}</td>
                            <td>$${gamestopRevenueData.revenue[i]}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            // Populate tables
            populateTables();
        }

        function populateTables() {
            // Tesla table
            const teslaTbody = document.getElementById('tesla-tbody');
            teslaStockData.dates.slice(-5).forEach((date, i) => {
                const index = teslaStockData.dates.length - 5 + i;
                const row = teslaTbody.insertRow();
                row.insertCell(0).textContent = date;
                row.insertCell(1).textContent = `$${teslaStockData.prices[index]}`;
                row.insertCell(2).textContent = `${(teslaStockData.volumes[index] * 1000000).toLocaleString()}`;
            });

            // GameStop table
            const gamestopTbody = document.getElementById('gamestop-tbody');
            gamestopStockData.dates.slice(-5).forEach((date, i) => {
                const index = gamestopStockData.dates.length - 5 + i;
                const row = gamestopTbody.insertRow();
                row.insertCell(0).textContent = date;
                row.insertCell(1).textContent = `$${gamestopStockData.prices[index]}`;
                row.insertCell(2).textContent = `${(gamestopStockData.volumes[index] * 1000000).toLocaleString()}`;
            });
        }

        function generateDashboards() {
            generateTeslaChart();
            generateGameStopChart();
        }

        function generateTeslaChart() {
            const ctx = document.getElementById('teslaChart').getContext('2d');
            
            if (teslaChart) {
                teslaChart.destroy();
            }
            
            teslaChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: teslaStockData.dates,
                    datasets: [{
                        label: 'Stock Price ($)',
                        data: teslaStockData.prices,
                        borderColor: '#ff6b6b',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    }, {
                        label: 'Revenue (millions $)',
                        data: teslaRevenueData.revenue,
                        borderColor: '#4ecdc4',
                        backgroundColor: 'rgba(78, 205, 196, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            ticks: {
                                color: '#ff6b6b'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            ticks: {
                                color: '#4ecdc4'
                            },
                            grid: {
                                drawOnChartArea: false,
                            }
                        }
                    }
                }
            });
        }

        function generateGameStopChart() {
            const ctx = document.getElementById('gamestopChart').getContext('2d');
            
            if (gamestopChart) {
                gamestopChart.destroy();
            }
            
            gamestopChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: gamestopStockData.dates,
                    datasets: [{
                        label: 'Stock Price ($)',
                        data: gamestopStockData.prices,
                        borderColor: '#ff6b6b',
                        backgroundColor: 'rgba(255, 107, 107, 0.1)',
                        yAxisID: 'y',
                        tension: 0.4
                    }, {
                        label: 'Revenue (millions $)',
                        data: gamestopRevenueData.revenue,
                        borderColor: '#4ecdc4',
                        backgroundColor: 'rgba(78, 205, 196, 0.1)',
                        yAxisID: 'y1',
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            ticks: {
                                color: '#ff6b6b'
                            },
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            }
                        },
                        y1: {
                            type: 'linear',
                            display: true,
                            position: 'right',
                            ticks: {
                                color: '#4ecdc4'
                            },
                            grid: {
                                drawOnChartArea: false,
                            }
                        }
                    }
                }
            });
        }

        function exportData() {
            const data = {
                tesla: {
                    stock: teslaStockData,
                    revenue: teslaRevenueData
                },
                gamestop: {
                    stock: gamestopStockData,
                    revenue: gamestopRevenueData
                }
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'tesla_gamestop_data.json';
            a.click();
            URL.revokeObjectURL(url);
        }

        // Initialize when page loads
        window.addEventListener('load', function() {
            initializeOutputs();
            setTimeout(generateDashboards, 1000);
        });