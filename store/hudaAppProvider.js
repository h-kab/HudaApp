import React, { useEffect, useState } from "react";
import HudaAppContext from './hudaAppContext'



const HudaAppProvider = props => {

    const [Cart, SetCart] = useState([]);


    const providerValue = {
        Cart,
        SetCart,
        // scree1_c,
        // setOpen_c,
        // scree2_c,
        // setregister_c,


    }

    return (
        <HudaAppContext.Provider
            value={providerValue}
        >
            {props.children}
        </HudaAppContext.Provider>

    )

}

export default HudaAppProvider;

