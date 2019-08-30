import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./myLineGraph.module.css";

export default class myDoughnut extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                datasets: [
                    {
                        data: [3000, 2300, 4400],
                        backgroundColor: [
                            '#cc99ff',
                            '#cc33ff',
                            '#9900cc'
                        ],
                        hoverBackgroundColor: [
                            '#bf80ff',
                            '#ac00e6',
                            '#730099'
                        ]
                    }
                ],
                labels: [
                    "Home", "Fun", "Coffee"
                ]
            },
            options:
            {
                title: {
                    display: true,
                    text: "Money spent on stuff",
                    fontSize: 20
                }
            }


        });
    }
    render() {
        return (
            <div>
                <div className={classes.graphContainer}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>
            </div>
        )
    }
}