import React, { useState } from 'react'
import Toolbar from './Toolbar'

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <p>소플과 함께하는 리액트 공부!</p>
        </div>
    )
}

export default LandingPage