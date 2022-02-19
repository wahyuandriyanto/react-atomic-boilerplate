import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color       : #006EC3;
        --secondary-color     : #8E8E93;
    }
    * {
        box-sizing: border-box;
    }

`

export default GlobalStyle