import React from 'react'

export default function TopData(props) {
  return (
    <>
      <h3>This is topdata page</h3>
      <h1>my college name :{props.clg}</h1>
      <h1>my college fees:{props.fees}</h1>
      <h1>my college story :{[props.alldata]}</h1>
    </>
  )
}
