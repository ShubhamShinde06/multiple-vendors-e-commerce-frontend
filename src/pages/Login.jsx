import React from 'react'

const Login = () => {
  return (
    <div className=' w-full h-full flex items-center justify-center text-black py-20'>
      <form className=' flex flex-col gap-12'>
        <div className=' flex flex-col  items-center text-[#071C1F]'>
          <h1 className='text-[40px] font-bold'>Register</h1>
          <h1 className=' text-[40px] font-bold'>Your Account</h1>
          <p className=' text-center  w-[70%] mt-3'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sit aliquid, Non distinctio vel iste.
          </p>
        </div>

        <div className='w-full flex flex-col items-center gap-8'>
          <input 
            type="text"
            placeholder='First name'
            className='w-[70%] h-[60px] border-2 border-[#E4ECF2] rounded-md p-2'
          />
          <input 
            type="text"
            placeholder='Last name'
            className='w-[70%] h-[60px] border-2 border-[#E4ECF2] rounded-md p-2'
          />
          <input 
            type="text"
            placeholder='Email'
            className='w-[70%] h-[60px] border-2 border-[#E4ECF2] rounded-md p-2'
          />
          <input 
            type="text"
            placeholder='Password'
            className='w-[70%] h-[60px] border-2 border-[#E4ECF2] rounded-md p-2'
          />
          <button
            className='w-[70%] h-[60px] bg-[#87B005] text-white font-bold rounded-md p-2 mt-4'
          >
            CREATE ACCOUNT
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login