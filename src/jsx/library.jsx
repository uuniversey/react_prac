
import React from "react"
import Book from "./book"

function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} wj='신'/>    
            <Book name="처음 만난 vue" numOfPage={400} />    
            <Book name="처음 만난 react" numOfPage={500} />    
        </div>
    )
}

export default Library