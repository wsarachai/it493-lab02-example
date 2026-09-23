import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './features/products/productsSlice'
import './App.css'

export default function App() {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.products)

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts())
  }, [status, dispatch])

  return (
    <main className="shop">
      <h1>ร้านค้าของฉัน — ลดราคา 10%</h1>
      {status === 'loading' && <p>กำลังโหลด…</p>}
      {status === 'failed' && <p className="error">โหลดสินค้าไม่สำเร็จ: {error}</p>}
      <ul className="products">
        {items.map((p) => (
          <li key={p.id}>
            <span>{p.name}</span>
            <strong>{p.price.toLocaleString('th-TH')} บาท</strong>
          </li>
        ))}
      </ul>
    </main>
  )
}
