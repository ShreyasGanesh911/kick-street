import TableChild from '../../components/TableChild'
import OrderSummary from '../../components/OrderSummary'
import { useSelector} from 'react-redux'
import {RootState} from '../../Redux/Store'
import CartMobile from '../../components/CartMobile'
export default function Cart() {
  let sum = 0
  const cart = useSelector((state: RootState) => state.cart.cart)
  return (
    <>
      <section className='page flex sm:flex-row flex-col sm:justify-center items-start p-5 text-black'>
        <div className='sm:w-1/2 w-full bg-neutral-50 rounded-lg '>
        {
          cart.length===0 ? <div className='w-full h-96  flex items-center justify-center  flex-col' >
            <h1 className='sm:text-3xl text-xl text-center '>Oh no, your cart looks empty!</h1>
            
          </div>:
          <div>
              <div className='hidden sm:flex'>
              <table className='w-full my-14 py-5  '>
          <tr className='sm:visible invisible'>
            <th className=' w-2/5'>PRODUCT</th>
            <th className='w-1/5'>PRICE</th>
            <th className='w-1/5'>QUANTITY</th>
            <th className='w-1/5'>TOTAL</th>
          </tr>
          {cart.map((e)=>{
            sum += e.price * e.qty
            
            return <TableChild name={e.name} price={e.price} qty={e.qty} key={e.pId} pId={e.pId} size={e.size}/>
          })}
        </table>
              </div>
        <div className='sm:hidden'>
        {cart.map((e)=>{
            sum += e.price * e.qty
            
            return <CartMobile name={e.name} price={e.price} qty={e.qty} key={e.pId} pId={e.pId} size={e.size}/>
          })}
        </div>

          </div>
        }
        </div>
          {cart.length ? <OrderSummary sum={sum/2}/> : <></>}
      </section>
    </>
  )
}
