import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"

export default ({ children }) => (
  <div>
    <div className={styles.menu}>
      <Link to="/" className={styles.menuBtn}>
        Home
      </Link>
      <Link to="/portfolio/" className={styles.menuBtn}>
        My work
      </Link>
      <Link to="/about/" className={styles.menuBtn}>
        About
      </Link>
      <Link to="/statistics/" className={styles.menuBtn}>
        Statistics
      </Link>
    </div>
    <div className={styles.children}>{children}</div>
  </div>
)
