import React from 'react'
import {Link,Outlet} from  'react-router-dom'
export default function Layout() {
  return (
    <>
    <Link to=""> home</Link>||
    <Link to='insert'> insert</Link>||
    <Link to="display"> display</Link>||
    <Link> insert</Link>||
    
    <main>
        <Outlet/>
    </main>
</>
  )
}
