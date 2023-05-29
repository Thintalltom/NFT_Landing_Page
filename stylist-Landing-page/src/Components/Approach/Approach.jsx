import React from 'react'

const Approach = () => {
  return (
    <div className=' approach bg-[#fff] w-full min-h-[50vh]'>
      <div className='mt-[20px]'>
        <h1 className='text-center font-extrabold 2xl:text-2xl   bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>About Us</h1>
     
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ad nihil aspernatur?</p>
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis veniam ad </p>
     <p className='text-center font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='2xl:flex 2xl:justify-around xs:flex 2xl:flex-row xs:flex-col'>
     <div className='flex flex-col text-center'>
     <img src="https://img.freepik.com/free-psd/3d-nft-icon-digital-wallet_629802-10.jpg?size=626&ext=jpg&ga=GA1.1.1034348580.1658549494&semt=ais" className='max-w-[300px]' alt="" />
    <p>Create cryptocurrency wallet</p>
     </div>
     <div className='flex flex-col text-center p-2'>
     <img src="https://img.freepik.com/free-psd/3d-nft-icon-metaverse-illustration_629802-14.jpg?size=626&ext=jpg&ga=GA1.1.1034348580.1658549494&semt=sph" className='max-w-[300px]' alt="" />
     <p>Look into the diverse world of cryptocurrency coins</p>
     </div>
     
     <div className='flex flex-col text-center font-mediumm'>
     <img src="https://img.freepik.com/free-psd/3d-nft-icon-nft-art_629802-16.jpg?size=626&ext=jpg&ga=GA1.1.1034348580.1658549494&semt=ais" className='max-w-[300px]' alt="" />
     <p>Create and Trade NFT's</p>
     </div>
     
     
     
      </div>
    </div>
  )
}

export default Approach