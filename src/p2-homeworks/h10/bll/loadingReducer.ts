const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.value}
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean) => ({type: 'SET-LOADING', value} as const)

type InitStateType = {
    isLoading: boolean
}

type LoadingActionType= ReturnType<typeof loadingAC>

type ActionsType = LoadingActionType
