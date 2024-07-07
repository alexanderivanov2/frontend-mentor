import { ref, onBeforeMount, onBeforeUnmount } from 'vue'


interface devicesTypes {
    desktop: {
        minWidth: number,
    },
    tablet: {
        minWidth: number,
    },
}

const defaultDevicesParams:devicesTypes = {
    desktop: {
        minWidth: 1440,
    },
    tablet: {
        minWidth: 768,
    },
}


export const useDeviceTypeHandler = (deviceParams=defaultDevicesParams) => {
    const isMobile = ref(false)
    const isTablet = ref(false)
    const isDesktop = ref(false)
    
    
    const handleResize = () => {
        const screenWidth = document?.documentElement?.clientWidth
        
        if (deviceParams.tablet.minWidth > screenWidth) {
            isMobile.value = true
            isTablet.value = false
            isDesktop.value = false

        } else if (deviceParams.desktop.minWidth > screenWidth) {
            isMobile.value = false
            isTablet.value = true
            isDesktop.value = false
        } else {
            isMobile.value = false
            isTablet.value = false
            isDesktop.value = true

        }
    }


    onBeforeMount(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
    })

    return {
        isMobile,
        isTablet,
        isDesktop,
    }
}