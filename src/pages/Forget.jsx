import { Link } from 'react-router'

const Forget = () => {

  return (
   <>
     <div>
      <div className='max-w-[520px] shadow-md p-5 mx-auto my-20 rounded-md'>
        <h2 className='text-black text-center font-poppins font-semibold text-[32px] py-[15px]'>Forget</h2>
           <input type="email" placeholder='Email' className='w-full rounded-md mb-[12px] py-[14px] px-4 border border-[#ccc8c8]' />
         <div className='relative'>
       </div>
        <div className='flex justify-between items-center'> 
        <div className='my-[8px]'>
         <label className='flex items-center font-poppins font-md text-sm text-[#666666]'><input type="checkbox" className='mr-2' />Remember me</label>
        </div>
        <p className='font-poppins hover:text-primary font-md text-sm text-[#666666]'><Link to="/reset">Reset Password</Link></p>
        </div>
       <Link to="/reset">
        <button className='bg-primary w-full cursor-pointer py-[10px] my-[12px] rounded-full text-white font-poppins font-semibold text-sm'>Submit</button>
       </Link>
        <p className='font-poppins font-sm text-sm text-[#666666] text-center py-[10px]'>Don’t have account?
          <Link to="/login" className='font-poppins font-semibold hover:font-bold hover:text-primary  font-sm text-black'>    Login</Link>
        </p>
        
          
        </div>
    
    </div>
   </>
  )
}

export default Forget