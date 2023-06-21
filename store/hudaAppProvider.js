import React, { useState } from "react";
import HudaAppContext from './hudaAppContext'
const HudaAppProvider = (props) => {

    const [scree1_c, setScreen1_c] = useState(0)
    const [scree2_c, setScreen2_c] = useState(0)

    const providerValue = {
        scree1_c,
        setScreen1_c,
        scree2_c,
        setScreen2_c
    }

    return (
        <HudaAppContext.Provider value={providerValue}>
            {props.children}
        </HudaAppContext.Provider>
    )

}

export default HudaAppProvider;