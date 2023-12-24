import { useState, useEffect } from 'react'
import './index.css'

const SuccessToast = ({ message = 'The operation was a success' }) => {
  const duration = 5 //in seconds
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(false)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div
      className={`top-8 right-6 w-[28.125rem] flex p-1 rounded-lg min-h-[5rem] bg-white z-[100]
            ${mounted ? 'fixed shadow-[0_0_8px_rgba(0,0,0,.25)]' : 'hidden'}`}
    >
      <div className='rounded-[4px] bg-mainGreen mr-[10px] w-[5px]'></div>
      <div className='rounded-[100%] bg-mainGreen mr-[18px] aspect-square w-6 self-center'></div>
      <div className='text-fs-300 py-2 self-center grow'>
        <p className='text-mainGreen font-medium'>Successful Operation</p>
        <p className='text-thirdColor capitalize'>{message}</p>
      </div>
    </div>
  )
}

export default SuccessToast
