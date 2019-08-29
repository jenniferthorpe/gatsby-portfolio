import React from "react"
import Layout from "../components/layout.js"
import formStyle from "../components/form.module.css"

export default () => (
    <Layout>
        <h2>About me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet porta pretium. Pellentesque quam nisl, iaculis eget facilisis eu, euismod nec mauris. Proin tristique bibendum nisl nec venenatis. Maecenas vitae aliquet urna. Donec id interdum erat, sed commodo mi. Sed risus ipsum, commodo eu dignissim nec, aliquam id enim. Praesent porta, erat a pretium vehicula, mauris mauris porta arcu, id ultrices nunc nisl at felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec cursus nibh dolor. Maecenas vel rhoncus lorem. Suspendisse a nisl et leo posuere condimentum. Vestibulum a purus in urna feugiat scelerisque eu vehicula lectus. Donec rhoncus luctus nulla, vestibulum viverra arcu congue nec. Aenean mollis nulla ultrices ante tincidunt, nec viverra odio pellentesque. Aenean posuere nisl eu erat placerat blandit.</p>

        <p>Vestibulum hendrerit ac risus dapibus tincidunt. Vivamus et elit tortor. Donec eu lacinia ante. Aliquam tincidunt, velit non lacinia iaculis, justo tellus pulvinar orci, vitae ultrices nisi erat quis metus. Integer semper non quam eu volutpat. Nulla diam ligula, porttitor eu ultrices nec, imperdiet sed diam. Quisque molestie, velit non fringilla facilisis, dui diam dapibus lacus, sed lacinia urna magna a lacus. Mauris iaculis placerat quam, ac ultrices leo lobortis nec. Curabitur mauris magna, tristique sed rhoncus nec, ultrices eget ipsum. Quisque condimentum dolor a ligula viverra auctor. Proin in nibh eu sem dapibus ullamcorper. Proin gravida sem vitae libero commodo sodales. Ut vestibulum scelerisque rutrum. Ut condimentum condimentum risus ut efficitur. Suspendisse sed ultrices tellus. Ut sagittis tortor vel sem porttitor lacinia vel ullamcorper tellus.</p>
        <form method="post" action="#">
            <h2>Contact</h2>
            <label>
                Name
        <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
        <input type="email" name="email" id="email" />
            </label>
            <label>
                Subject
        <input type="text" name="subject" id="subject" />
            </label>
            <label>
                Message
        <br />
                <textarea name="message" id="message" rows="8" />
            </label>
            <br />
            <button type="submit">Send</button>
        </form>
    </Layout>
)
