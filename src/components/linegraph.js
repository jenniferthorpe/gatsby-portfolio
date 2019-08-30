import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./myLineGraph.module.css";

export default class myLineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug"],
                datasets: [
                    {
                        label: "Site visitors I wish I had",
                        data: [52, 78, 104, 208, 299, 390, 558, 790],
                        backgroundColor: 'rgba(255, 102, 204, 0.2)',

                    }
                ]
            },
            options: {
                //Customize chart options
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