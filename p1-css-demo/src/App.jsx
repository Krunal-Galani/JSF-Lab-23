import './App.css'
import styles from './StyleModule.module.css'

function App() {

  const inlineStyle = {
    color: 'red',
    fontSize: '24px',
    textAlign: 'center'
  }

  return (
    <div>

      <h1 className="cssStyle">
        Traditional CSS
      </h1>

      <h1 style={inlineStyle}>
        Inline CSS
      </h1>

      <h1 style={{
        color: 'brown',
        fontSize: '24px',
        textAlign: 'center'
      }}>
        Inline CSS(direct)
      </h1>

      <h1 className={styles.moduleStyle}>
        CSS Module
      </h1>

    </div>
  )
}

export default App