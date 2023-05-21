import { Button, message } from 'antd'
import { useCallback } from 'react'
import style from './MessageExample.module.css'

const MessageExample = () => {
  const handleClick = useCallback(() => {
    message.info('Test')
  }, [])

  return (
    <div className={style.MessageExample}>
      <p>Message Example</p>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  )
}

export default MessageExample
