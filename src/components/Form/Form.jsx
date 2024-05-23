import React from 'react';
import './Form.css'

export default function Form() {
  return (
    <div className={'form'}>
      <h3> Вкажіть ваші дані</h3>
      <input 
        className = {'input'} 
        type='text' 
        placeholder= {'Країна'} 
      />
      <input 
        className = {'input'} 
        type='text' 
        placeholder= {'Вулиця'} 
      />
      <select className={'select'}>
        <option value={'physical'}>Фіз. особа</option>
        <option value={'legal'}>Юр. особа</option>
      </select>
        
    </div>
  )
}
