
import TopData from './TopData'
import MiddleData from './MiddleData'
import BottomData from './BottomData'
import { Link, Outlet } from 'react-router-dom'

export default function Data() {
  return (
    <>
    <hr />
    <TopData/>
    <MiddleData/>
    <BottomData/>


    <table style={{height:"300px",width:"100%"}}>
        <tr>
            <th><Link to="aboutservice">About service</Link></th>
            <br /><br />
            <th><Link to="aboutcompany">About company</Link></th>
            <br /><br />
            <th><Link to="aboutcomputer">About computer</Link></th>

            <br /><br /><br /><br /><br /><br />

            <main>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque laboriosam tempora omnis inventore illo asperiores provident quis labore odio voluptatibus laudantium, iusto modi voluptate beatae enim corrupti perferendis quidem possimus!
           <Outlet/>
            </main>
               
            
        </tr>
    </table>



      
    </>
  )
}
