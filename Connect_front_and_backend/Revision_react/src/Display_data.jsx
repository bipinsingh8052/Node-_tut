import React from 'react'

export default function Display_data(props) {
  return (
    <>

        <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.fe}</td>
                <td>{props.co}</td>
                <td>{props.sal}</td>
                <td>{props.frd}</td>
            </tr>

      
    </>
  )
}
