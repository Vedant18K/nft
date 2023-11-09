import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function MapComponent() {
  const params = new URLSearchParams({
    q: 'India', // Specify the location by name
    hl: 'en', // Specify English as the language
  });

  return (
    <MDBRow className='w-100'>
      <MDBCol className='my-2'>
        <iframe
          src={`https://www.google.com/maps/embed?${params.toString()}`}
          className='w-full'
          height='400'
          loading='lazy'
          title='Google Map of Berlin, Germany'
          allowFullScreen=''
          frameBorder='0'
          style={{ border: '0',  }} // Adjust styling here
        ></iframe>
      </MDBCol>
    </MDBRow>
  );
}
