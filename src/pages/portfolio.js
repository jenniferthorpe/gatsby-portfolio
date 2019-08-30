import React from "react"
import Layout from "../components/layout.js"
import portfolioStyle from "../components/portfolio.module.css"

const Project = props => (
    <div className={portfolioStyle.project}>
        <img src={props.image} className={portfolioStyle.image} alt="" />
        <div className={portfolioStyle.infoBox}>
            <h2 className={portfolioStyle.name}>{props.name}</h2>
            <p className={portfolioStyle.info}>{props.info}</p>
        </div>
    </div>
)


export default () => (
    <Layout>
        <h1>My Portfolio</h1>
        <a href="https://picsum.photos/200">
            <Project
                image="https://picsum.photos/200"
                name="Project 1"
                info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet porta pretium. Pellentesque quam nisl, iaculis eget facilisis eu, euismod nec mauris. Proin tristique bibendum nisl nec venenatis. Maecenas vitae aliquet urna. Donec id interdum erat, sed commodo mi. Sed risus ipsum, commodo eu dignissim nec, aliquam id enim. Praesent porta, erat a pretium vehicula, mauris mauris porta arcu, id ultrices nunc nisl at felis."
            />
        </a>
        <a href="https://picsum.photos/200">
            <Project
                image="https://picsum.photos/200"
                name="Project 2"
                info="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec cursus nibh dolor. Maecenas vel rhoncus lorem. Suspendisse a nisl et leo posuere condimentum. Vestibulum a purus in urna feugiat scelerisque eu vehicula lectus. Donec rhoncus luctus nulla, vestibulum viverra arcu congue nec. Aenean mollis nulla ultrices ante tincidunt, nec viverra odio pellentesque. Aenean posuere nisl eu erat placerat blandit."
            />
        </a>
    </Layout >
)
