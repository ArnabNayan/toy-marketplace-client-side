


const Customer = () => {

    return (
        <div className='bg-blue-100 min-h-screen md:h-[100vh]'>
          <h2 className=' p-5 text-4xl text-indigo-950 font-bold text-center'>Our Happy Customers</h2>
          <div className="flex flex-col md:flex-row gap-5 p-8">
          <div className="hero h-96 bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Sunny Ghosh</h1>
      <p className="py-6">Nice and Well toy managing site.They provide good sevrvice,well behaviour,quick delivery and their toys quality is also upto the mark.</p>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" checked/>
</div>
    </div>
  </div>
</div>
          <div className="hero h-96 bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Biki Das</h1>
      <p className="py-6">I order toy from many shops before but among them this site was far better then them.They are well behavioured and their product quality is also good</p>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
</div>
    </div>
  </div>
</div>
          <div className="hero h-96 bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Ayan Barua</h1>
      <p className="py-6">I was astonished to see the quality of the product of this site.Their delivery was good and they are honest to their customer</p>
      <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-blue-500" />
  <input type="radio" name="rating-4.5" className="mask mask-star-2 bg-blue-500" checked />
</div>
    </div>
  </div>
</div>
         </div> 
</div>


    )
}
export default Customer;