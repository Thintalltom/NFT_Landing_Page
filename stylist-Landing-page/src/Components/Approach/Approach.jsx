import React from 'react'

const Approach = () => {
  return (
    <div className=' approach bg-[#fff] w-full min-h-[50vh]'>
      <div className='mt-[20px] p-4'>
        <h1 className='text-center font-extrabold 2xl:text-2xl   bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>About Us</h1>
     
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ad nihil aspernatur?</p>
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ad </p>
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='2xl:flex 2xl:justify-around xs:flex 2xl:flex-row xs:flex-col max-w-screen'>
     <div className='flex flex-col text-center items-center'>
     <img src="https://img.freepik.com/free-vector/transfer-money-concept-illustration_114360-3064.jpg?size=626&ext=jpg&ga=GA1.2.1034348580.1658549494" className='max-w-[300px]' alt="wallet" />
    <p className='text-[16px]'>Create cryptocurrency wallet</p>
     </div>
     <div className='flex flex-col text-center items-center p-2 max-w-screen'>
     <img src="https://img.freepik.com/free-vector/crypto-portfolio-concept-illustration_114360-4954.jpg?size=626&ext=jpg&ga=GA1.1.1034348580.1658549494" className='max-w-[300px]' alt="register" />
     <p className='text-[16px]'>Look into the diverse world of cryptocurrency coins</p>
     </div>
     
     <div className='flex flex-col text-center items-center font-medium max-w-screen'>
     <img src="https://img.freepik.com/free-vector/nft-concept-illustration_114360-8370.jpg?size=626&ext=jpg&ga=GA1.2.1034348580.1658549494" className='max-w-[300px]' alt="NFT" />
     <p className='text-[16px]'>Create and Trade NFT's</p>
     </div>
     
     
     
      </div>
    </div>
  )
}

export default Approach