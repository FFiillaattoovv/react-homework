import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {dispatch(loadingAC(false))}, 3000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
        </div>
    )
}

export default HW10
