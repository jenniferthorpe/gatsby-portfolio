import React from "react"
import Layout from "../components/layout.js"
import Linegraph from "../components/linegraph"
import Bargraph from "../components/bargraph"
import Doughnut from "../components/doughnutchart"


export default () => (
    <div>
        <Layout></Layout>
        <Linegraph></Linegraph>
        <Bargraph></Bargraph>
        <Doughnut></Doughnut>
    </div>
)