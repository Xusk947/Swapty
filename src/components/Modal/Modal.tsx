import { ReactElement } from "react";
import { Button, Dialog } from "react-aria-components";
import "./Modal.css"

export interface ModalProps {
    children: ReactElement;
    opened: boolean;
    enableAndroidBackHandler: boolean;
    onClose: () => void;
    onClickQuestion?: () => void;
}

export function ModalFrame(props: ModalProps & { onClickQuestion?: () => void; onClose: () => void} ) {

    if (!props.opened) {
        return null
    }

    return (
        <>
        <Dialog>
        <Button> Swap</Button>
        <Button> Swap</Button>
        <Button> Swap</Button>
        </Dialog>
        </>

    )
}