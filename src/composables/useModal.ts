import { onUnmounted, ref } from 'vue'

const showModalState = ref(false)

export function useModal() {
    const showModal = () => { 
        document.body.classList.add('open-modal')
        showModalState.value = true
    
    }
    const closeModal = () => {
        document.body.classList.remove('open-modal')
        showModalState.value = false

    }

    onUnmounted(() => {
        closeModal()
    })
    return {
        showModalState,
        showModal,
        closeModal,
    }
}