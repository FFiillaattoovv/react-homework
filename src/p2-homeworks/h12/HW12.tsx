import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {changeThemeAC} from './bll/themeReducer';

const themes: Array<ThemesType> = ['dark', 'red', 'some'];

function HW12() {
    const dispatch = useDispatch()
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme)

    const onChangeCallback = (theme: ThemesType) => {
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperRadio
                name={'radio2'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;


export type ThemesType = 'dark' | 'red' | 'some'
