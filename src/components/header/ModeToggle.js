import React from 'react'
import { RiLightbulbFlashFill, RiLightbulbFlashLine } from "react-icons/ri";


const ModeToggle = () => {
    return (
        <div>
            {(props) => props.theme.bgSide == '#1B1B1B' ? (
            <RiLightbulbFlashFill />
            ) : (
            <RiLightbulbFlashLine />
            )}
        </div>
    )
}

// onClick={() => toggleTheme()}
export default ModeToggle
