export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modalType, property) => ({
    type: OPEN_MODAL,
    modalType: modalType, 
    property: property 
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});

