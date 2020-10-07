/* eslint-disable */
import {useState} from 'react';
const useModal = (view = false) => {
    const [viewModal, setModal] = useState(view);
    const modal = () => {
        setModal(m => !m)
    }
    let display = viewModal ? 'block' : 'none';
    return [viewModal,display,modal];
}

export default useModal;