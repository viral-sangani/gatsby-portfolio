import React from 'react'
import '../../static/style.css'
import '../../static/custom.css'
import Navigation from './Navigation'
import Footer from './Footer'
import { ThemeProvider } from './Context'

export default ({ children }) => {
    return (
        <ThemeProvider>
            <Navigation />
            {children}
            <Footer />
        </ThemeProvider>
    )
}
