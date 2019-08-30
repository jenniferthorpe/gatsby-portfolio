import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./myLineGraph.module.css";

export default class barGraph extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["Cups of coffee"],
                datasets: [
                    {
                        label: "Cups of coffee I had today",
                        data: [8],
                        backgroundColor: "#ff0066",
                        hoverBackgroundColor: "#e6005c"
                    },
                    {
                        label: "Swedish avarage",
                        data: [14],
                        backgroundColor: "#cc3399",
                        hoverBackgroundColor: "#b30086"
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 20
                        }
                    }]
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