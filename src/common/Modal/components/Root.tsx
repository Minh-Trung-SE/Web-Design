import React, {FC, PropsWithChildren, useCallback, useState} from 'react';
import ModalContext from "@src/common/Modal/context/ModalContext";

type RootProps = PropsWithChildren & {
    closeOutside?: boolean
    defaultOpen?: boolean
}
const Root: FC<RootProps> = ({children, closeOutside = false, defaultOpen = false}) => {
    const [open, setOpen] = useState(defaultOpen)
     const toggle = useCallback(() => setOpen(open => !open), [])
    
    return (
        <ModalContext.Provider
            value={
                {
                    open,
                    closeOutside,
                    setOpen,
                    toggle
                }
            }
        >
            {children}
        </ModalContext.Provider>
    )
}

export default Root;