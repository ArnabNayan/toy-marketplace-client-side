import React from 'react';
import Contdown from './Contdown';



const Flashsell = () => {
    return (
        <div className=' mt-3 min-h-screen bg-blue-100 md:h-[110vh]'>
        <div className='text-center'>
        <h2 className=' p-5 text-4xl text-indigo-950 font-bold border-blue-300 border-b'>Flash Sale</h2>
         
        <h2 className='mx-auto p-4'>
          <Contdown></Contdown>
       </h2>
  
        </div>
        <div className='flex flex-col md:flex-row p-2 gap-3'>
       
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://www.toysrus.com.sg/dw/image/v2/BDGJ_PRD/on/demandware.static/-/Sites-master-catalog-toysrus/default/dw838af62c/e/4/b/8/e4b84ec9cce8b60d7bc667fd8dbb19a615c33968_69135_i5.jpg?sw=500&sh=500&q=75" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Captain America
      <div className="badge badge-info">NEW</div>
    </h2>
    <p>Dont Miss the opportunity to buy this product with offer</p>
    <div className="card-actions justify-end">
      <div className="badge badge-info">40% offer</div> 
      <div className="badge badge-info">300tk</div>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/417167275019-2?fmt=jpeg&qlt=90&wid=652&hei=652" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Ant-man
      <div className="badge badge-info">NEW</div>
    </h2>
    <p>Dont Miss the opportunity to buy this product with offer</p>
    <div className="card-actions justify-end">
    <div className="badge badge-info">30% offer</div> 
      <div className="badge badge-info">350tk</div>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://www.bricktastic.nl/wp-content/uploads/2023/02/LEGO-Marvel-76256-Ant-Man-Construction-Figure-4.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Ant-man
      <div className="badge badge-info">NEW</div>
    </h2>
    <p>Dont Miss the opportunity to buy this product with offer</p>
    <div className="card-actions justify-end">
    <div className="badge badge-info">40% offer</div> 
      <div className="badge badge-info">400tk</div>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://ironmannews.files.wordpress.com/2015/06/18451188635_7e3dab359d_o.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     Iron Man
      <div className="badge badge-info">NEW</div>
    </h2>
    <p>Dont Miss the opportunity to buy this product with offer</p>
    <div className="card-actions justify-end">
    <div className="badge badge-info">20% offer</div> 
      <div className="badge badge-info">200tk</div>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr64tixEqWa6deoPJawQUeONaAesHTD5y9D3HjJw8N4HYmhHLj9bhzdkqhtdGPuaIJ_Ro&usqp=CAU" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Power Ranger
      <div className="badge badge-info">NEW</div>
    </h2>
    <p>Dont Miss the opportunity to buy this product with offer</p>
    <div className="card-actions justify-end">
    <div className="badge badge-info">40% offer</div> 
      <div className="badge badge-info">500tk</div>
    </div>
  </div>
</div>

        </div>

        </div>
    );
};

export default Flashsell;