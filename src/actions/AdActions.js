export const adTypes = {
    ADMOB_ERROR: 'ADMOB_ERROR'
}

export const adError = (error) => {
    return {
        type: ADMOB_ERROR,
        payload: error
    }
}
