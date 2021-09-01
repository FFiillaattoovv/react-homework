import {ThemesType} from '../HW12';

const initState = {
    theme: 'some' as ThemesType
}

export const themeReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

export const changeThemeAC = (theme: ThemesType) => ({type: 'CHANGE-THEME', theme} as const)

type InitStateType = {
    theme: ThemesType
}

type ChangeThemeActionType = ReturnType<typeof changeThemeAC>

type ActionsType = ChangeThemeActionType
