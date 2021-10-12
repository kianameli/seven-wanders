import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div className='layout'>
      <Navbar user={true} />
      <div className="layout-children">
        {null}
      </div>
      <Footer />
    </div>
  )
}
