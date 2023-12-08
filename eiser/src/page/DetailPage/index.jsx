import React from 'react'
import Navbar from '../../layout/Navbar'
import CardDetail from '../../components/CardDetail'
import { useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();

  return (
    <div>
        <Navbar/>
        <CardDetail id={id}/>
        
    </div>
  )
}

export default DetailPage