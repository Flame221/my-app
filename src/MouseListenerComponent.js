import React, {useState, useEffect} from "react";

function MouseListener() {
    let [pos = {x: 0, y: 0}, setPos] = useState()

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX, y: event.clientY
            })
    }

    useEffect(() => {
        window.addEventListener("mousemove", mouseMoveHandler)
        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler)
        }
    }, []);
    return (
        <div>
            <h3>Mouse Coordinates: x = {pos.x},     y = {pos.y}</h3>
        </div>
    )
}

export default MouseListener