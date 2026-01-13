import { ThemeProvider } from "styled-components"
import Header from "./components/header"
import GlobalStyled from "./styles"
import { useState } from "react"
import Dark from "./themes/Dark"
import Light from "./themes/Light"
import Slider from "./components/slider"
import Hero from "./components/Hero"
import { SectionDepoimentos } from "./components/cards"

function App() {

  const [theme, setTheme] = useState(false);

  function Theme() {
    setTheme(!theme)
  }

  return (
    <ThemeProvider theme={theme ? Dark : Light}>
      <GlobalStyled />
      <div className="container">
        <Header Theme={Theme} />
        <Slider />
        <Hero />
        <SectionDepoimentos />
      </div>
    </ThemeProvider>
  )
}

export default App
