import React, { useCallback, useEffect, useState } from 'react';
import './Form.css'
import {useTelegram} from '../../hooks/useTelegram'

export default function Form() {

  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [subject, setSubject] = useState('physical');
  const {tg} = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
        text: 'Отправить данные'
    })
  }, [])

  // useEffect(() => {
  //   if(!country||!street){
  //     tg.MainButton.hide()
  //   } else {
  //     tg.MainButton.show()
  //   }
  // }, [country, street])


  const onChangeCountry = (e) => {
      setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
      setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
      setSubject(e.target.value)
  }


  return (
    
    <div className={'form'}>
     
      <h3> Вкажіть ваші дані</h3>
      <input 
        className = {'input'} 
        type='text' 
        placeholder= {'Країна'} 
        value={country}
        onChange={onChangeCountry}
      />
      <input 
        className = {'input'} 
        type='text' 
        placeholder= {'Вулиця'} 
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className={'select'}>
        <option value={'physical'}>Фіз. особа</option>
        <option value={'legal'}>Юр. особа</option>
      </select>
        
    </div>
  )
}
