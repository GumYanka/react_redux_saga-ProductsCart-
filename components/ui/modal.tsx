import { Fragment } from 'react';

export interface ModalProps {
    onClose?: () => void;
    children?: React.ReactNode;
}

const Backdrop = (props: ModalProps) => {
    return (
        <div
            className='fixed top-0 left-0 w-[100%] h-[100vh] z-20 bg-[#000000BF]'
            onClick={props.onClose}
        />
    );
};

const ModalOverlay = (props: ModalProps) => {
    return (
        <div className='fixed top-[20vh] left-[5%] w-[90%] bg-white p-12 rounded-2xl shadow-2xl z-30'>
            <div>{props.children}</div>
        </div>
    );
};

const Modal = (props: ModalProps) => {
    return (
        <Fragment>
            <Backdrop onClose={props.onClose} />
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    );
};

export default Modal;
