import { ThemeProvider } from "styled-components";
import Header from "./components/header"
import GlobalStyled from "./styles"
import { useState } from "react";
import Dark from "./themes/Dark";
import Light from "./themes/Light";
import Hero from "./components/Hero"


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
        <Hero />
      </div>
    </ThemeProvider>
  )
}

export default App
