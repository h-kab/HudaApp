import React, { useState } from "react";
import HudaAppContext from './hudaAppContext'
const HudaAppProvider = (props) => {

    const [scree1_c, setOpen_c] = useState(0)
    const [scree2_c, setregister_c] = useState(0)

    const providerValue = {
        scree1_c,
        setOpen_c,
        scree2_c,
        setregister_c
    }

    return (
        <HudaAppContext.Provider value={providerValue}>
            {props.children}
        </HudaAppContext.Provider>
    )

}

export default HudaAppProvider;