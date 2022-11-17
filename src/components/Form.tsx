import React, {FC, useState} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import s from "./Form.module.css"
import { IAction } from "../types/types"
import {useNavigate} from "react-router-dom";


export const Form: FC<{setTicket(action: IAction, state?: object ): void}> = ({setTicket}) => {
    const [isActiv, addIsActiv] = useState('date__input_ap')
    const navigate = useNavigate()
    
    interface IData {
        departurePoint: string;
        arrivalPoint: string;
        date: string;
        returnTicket?: null | string;
    }
    const {
        register,
        formState: {isValid},
        handleSubmit,
    } = useForm<IData>({
        mode: "onBlur"
    })



const onSubmit: SubmitHandler<IData> = (data) => {
        setTicket(
            {route: {
                departurePoint: data.departurePoint,
                arrivalPoint: data.arrivalPoint,
            },
            date: data.date,
            returnTicket: data.returnTicket}
        )  
        navigate('/avia/info')     
    }



const addRequired = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value
    ?        addIsActiv('')
            :addIsActiv('date__input_ap')
 
}

    return (
        <div className={s.form__wrapper}>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                
                <label className={s.input__wrapper_departure}>
                    <input
                        className={s.input}
                        {...register('departurePoint',
                        {required: true}
                        )}
                        placeholder='Город вылета'
                        required
                    />
                </label>

                <label className={s.input__wrapper_arrival}>
                    <input
                        className={s.input}
                        {...register('arrivalPoint',
                        {required: true}
                        )}
                        placeholder='Город прилёта'
                        required
                    />
                </label>
                    
                <label className={`${s.date__input_wrapper} ${s.input__wrapper}`}>
                    <input
                        className={`${s.date__input}  ${s.input}`}
                        {...register('date',
                        {required: true}
                        )}
                        type="date"
                        data-placeholder='ДД.ММ.ГГ'
                        required
                    />
                </label>

                    <label className={`${s.input__wrapper_return}`}>
                        <input
                                className={`${s.date__input} ${s[isActiv]} ${s.input}`}
                                {...register('returnTicket',
                                )}
                                type="date"
                                data-placeholder='ДД.ММ.ГГ'
                                onChange={addRequired}
                           
                            />
                    </label>

                    <input disabled={!isValid} className={`${!isValid && s.disabled_btn} ${s.form__btn} ${s.input}`} type="submit" value='Найти билеты'/>

            </form>
        </div>
    )
}