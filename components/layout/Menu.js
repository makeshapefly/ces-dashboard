"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Menu() {
    const router = usePathname()

    const [activeAccordion, setActiveAccordion] = useState(null)

    useEffect(() => {
        const accordionRoutes = {
            '/': 1,
            '/add-product': 2,
            '/product-list': 2,
            '/product-detail-1': 2,
            '/product-detail-2': 2,
            '/product-detail-3': 2,
            '/category-list': 3,
            '/new-category': 3,
            '/attributes': 4,
            '/add-attributes': 4,
            '/oder-list': 5,
            '/oder-detail': 5,
            '/oder-tracking': 5,
            '/all-user': 6,
            '/add-new-user': 6,
            '/login': 6,
            '/sign-up': 6,
            '/all-roles': 7,
            '/create-role': 7,
            '/gallery': 0,
            '/report': 0,
            '/countries': 8,
            '/states': 8,
            '/cities': 8,
            '/setting': 0,
            '/list-page': 9,
            '/new-page': 9,
            '/edit-page': 9,
            '/components': 0,
            '/faq': 10,
            '/privacy-policy': 10,
        }

        // Check if the current path is in the object of accordion routes and set the activeAccordion state accordingly
        if (accordionRoutes.hasOwnProperty(router)) {
            setActiveAccordion(accordionRoutes[router])
        } else {
            setActiveAccordion(null)
        }
    }, [router])

    const handleAccordion = (key) => {
        setActiveAccordion(prevState => prevState === key ? null : key)
    }

    const isSubMenuItemActive = (path) => {
        return router === path
    }

    return (
        <div className="center">
            <div className="center-item">
                <div className="center-heading">Main Home</div>
                <ul className="menu-list">
                    <li className={`menu-item ${router === '/' ? 'active' : ''}`}>
                        <Link href="/" className={isSubMenuItemActive('/') ? 'active' : ''}>
                            <div className="icon"><i className="icon-image" /></div>
                            <div className="text">Home</div>
                        </Link>
                    </li>
                </ul>
                <ul className="menu-list">
                    <li className={`menu-item has-children ${activeAccordion === 6 ? 'active' : ''}`}>
                        <a className="menu-item-button" onClick={() => handleAccordion(6)}>
                            <div className="icon"><i className="icon-user" /></div>
                            <div className="text">User</div>
                        </a>
                        <ul className="sub-menu" style={{ display: `${activeAccordion === 6 ? "block" : "none"}` }}>
                            <li className="sub-menu-item">
                                <Link href="/all-user" className={isSubMenuItemActive('/all-user') ? 'active' : ''}>
                                    <div className="text">All users</div>
                                </Link>
                            </li>
                            <li className="sub-menu-item">
                                <Link href="/add-new-user" className={isSubMenuItemActive('/add-new-user') ? 'active' : ''}>
                                    <div className="text">Add new user</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
