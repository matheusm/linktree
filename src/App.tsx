import styles from './App.module.css'
import { Link } from './components/Link'

import { linkList } from './listLinks'

export function App() {
  return (
    <main className={styles.container}>
      <h1>Linktree</h1>
      <h2>by @martinscode &lt;3</h2>

      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <Link {...item} />
          </li>
        ))}
      </ul>
    </main>
  )
}
