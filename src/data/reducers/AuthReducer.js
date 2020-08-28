const initialState = {
    authResponse: null,
    user: {}
}

export default (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case 'RESTART_AUTH_RESPONSE':
            return {
                ...state,
                authResponse: null
            }
        case 'LOADING':
            return {
                ...state,
                authResponse: 'Loading...'
            }
        case 'SHORT_PASSWORD':
            return {
                ...state,
                authResponse: 'Password is too short.'
            }
        case 'SIGNUP_SUCCESS':
            console.log('vennery')
            return {
                ...state,
                authResponse: 'Register successful!',
            }

        case 'SIGNUP_ERROR':
            return {
                ...state,
                authResponse: action.res.data.message,
            }
        case 'CODE_ERROR':
            return {
                ...state,
                authResponse: 'There seems to be a problem, please try again later.',
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authResponse: 'Redirecting you to dashboard...',
                user: { ...action.payload }
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authResponse: action.res.data.message,
            }
        default:
            return state
    }
}