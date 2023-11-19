import Image from 'next/image'
import Category from './components/home/Category'
import Products from './components/home/Products'
import Banner from './components/home/Banner'

export default function Home() {
 

  return (
    <div>
      <Category/>
      <Banner/>
      <Products/>
    </div>
  )
}
