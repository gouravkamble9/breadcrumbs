import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
    const {pathname}=useLocation()
    const pathnames=pathname.split('/').filter((x)=>x)
    let breadcrumbPath=""
    return (
    <div className='breadcrumbs'>
        {pathnames.length > 0 && <Link to='/'>Home</Link>}
        {
            pathnames.map((name,id)=>{
                breadcrumbPath+=`/${name}`

                const isLast=id===pathnames.length-1;

                return isLast? <span>{">"}{name}</span> :(
                    <span>
                      {">"} <Link to={breadcrumbPath}>{name}</Link>
                    </span>
                )
            })
        }
    </div>
  )
}

export default BreadCrumbs