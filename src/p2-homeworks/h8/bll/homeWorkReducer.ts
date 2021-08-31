import {UserType} from '../HW8';


const initialState: Array<UserType> = []

export const homeWorkReducer = (state: Array<UserType> = initialState, action: ActionsType): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return state.slice().sort((a, b) => {
                    if (a.age < b.age) return 1
                    if (a.age > b.age) return -1
                    return 0
                })
            } else if (action.payload === 'down') {
                return state.slice().sort((a, b) => {
                    if (a.age > b.age) return 1
                    if (a.age < b.age) return -1
                    return 0
                })
            } else {
                return state
            }
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}


export const sortPeopleAC = (direction: SortingDirectionType) => ({type: 'sort', payload: direction} as const)
export const checkPeopleAC = (age: number) => ({type: 'check', payload: age} as const)


type ActionsType = ReturnType<typeof sortPeopleAC> | ReturnType<typeof checkPeopleAC>
type SortingDirectionType = 'up' | 'down'


