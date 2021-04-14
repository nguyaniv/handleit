import { Link } from 'react-router-dom'
const NavModal = ({ menu, setIsmodal }) => {
  const { links, header, context,linksUrl } = menu
  return (
    <section className="nav-modal" onMouseLeave={() => { setIsmodal(false) }}>
      <div onMouseEnter={() => { setIsmodal(true) }} className="context">
        <h1 onMouseEnter={() => { setIsmodal(true) }}>{header}</h1>
        <p onMouseEnter={() => { setIsmodal(true) }}>{context}</p>
      </div>
      <div onMouseEnter={() => { setIsmodal(true) }} className="modal-links">
        {links.map((link, idx) => {


          return <Link to={linksUrl[idx]} onMouseEnter={() => { setIsmodal(true) }}  >{link}</Link>
        }
        )}


      </div>
    </section>
  )

}

export default NavModal
