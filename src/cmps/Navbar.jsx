import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavModal from './NavModal';
import { menu } from '../service/navbarService';
const Navbar = () => {

    const [isModal, setIsmodal] = useState(false)
    const [ModalIdx, setModalIdx] = useState(null)
    const modal = menu[ModalIdx]
    return (
        <nav >
            <header >
                <div>
                    <li>LOGO HERE</li>
                </div>
                <div className="links">
                    <Link onMouseEnter={() => {
                        setIsmodal(true)
                        setModalIdx(0)
                    }} >Disorders</Link>
                    <Link onMouseEnter={() => {
                        setIsmodal(true)
                        setModalIdx(1)
                    }
                    }>
                        Donate Us</Link>
                    <Link onMouseEnter={() => {
                        setIsmodal(true)
                        setModalIdx(2)
                    }}
                    >Who are we</Link>
                </div>
            </header>
            {isModal && menu && <NavModal menu={modal} setIsmodal={setIsmodal} ></NavModal>}
        </nav>
    )
}

export default Navbar
