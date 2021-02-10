import React from 'react'
import {ZoriZavodServiceConsumer} from "../zoriZavod-service-context";

const withZoriZavodService = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <ZoriZavodServiceConsumer>
                {
                    (zoriZavodService) => {
                        const serviceProps = mapMethodsToProps(zoriZavodService)
                        return (
                            <Wrapped {...props} {...serviceProps}/>
                        )
                    }
                }
            </ZoriZavodServiceConsumer>
        )
    }
}

export default withZoriZavodService