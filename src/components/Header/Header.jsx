import React from 'react'

export default function Header() {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
      }
  return (
    <div className='header'>
        <Button onClick = {onClose}>Закрити</Button>
        <span className='{username}'></span>
    </div>
  )
}
