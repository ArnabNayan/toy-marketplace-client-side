import React from 'react';

const ShopbyAge = () => {
    return (
        <div className='mt-3 bg-blue-100 p-5'>
            <h2 className='text-4xl text-indigo-950 font-bold text-center'>Shop By Age</h2>
            <h2 className='text-center text-xl font-bold text-indigo-400'>Our Collections</h2> 
            <div className=' grid grid-cols-1 lg:grid-cols-6 mt-10'>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://images.hellomagazine.com/horizon/43/262d6cdcfd28-baby-girl-blanket.jpg" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>For Baby</h1>
              </div>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://static.vecteezy.com/system/resources/thumbnails/000/831/282/small/little-baby-eating-apple.jpg" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>1 to 2 years</h1>
              </div>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://t3.ftcdn.net/jpg/03/76/08/04/360_F_376080466_MTM9Y1EKuBc4j9TdRemcgmNmuU6KJelV.jpg" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>2 to 4 years</h1>
              </div>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://img.freepik.com/premium-photo/little-girl-with-curly-hair-red-dress-is-very-surprised-pink-background_222185-2004.jpg" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>5 to 7 years</h1>
              </div>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://us.123rf.com/450wm/maximkabb/maximkabb1506/maximkabb150605524/41695573-adorable-little-girl-on-warm-and-sunny-summer-day.jpg?ver=6" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>8 to 11 years</h1>
              </div>
              <div>
              <img className='w-44 h-44 rounded-full hover:scale-110 mx-auto' src="https://thumbs.dreamstime.com/b/drawing-little-boy-red-haired-boy-green-t-shirt-drawing-little-boy-paper-colored-pencils-process-self-223384055.jpg" alt="" />
                <h1 className='text-xl text-black font-semibold text-center mt-3'>12 years & up</h1>
              </div>
                
            </div>
        </div>
    );
};

export default ShopbyAge;