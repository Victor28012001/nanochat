import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <main className="w-full overflow-hidden">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
