import React from 'react'

const Navbar = (props) => {

    const changeTheme = () => {
        props.setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={changeTheme}>Change Theme</button>
    )
}

export default Navbar