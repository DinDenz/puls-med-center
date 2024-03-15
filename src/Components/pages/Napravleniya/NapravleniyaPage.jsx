import React from 'react';
import { useParams } from 'react-router-dom';
import napravleniya from "./DataForNapraleniya";
import NotFound from '../../common/NotFound';


export default function NapravleniyaPage() {
  const { type } = useParams();
  //console.log(useParams());
  const currentNapravl = napravleniya.find(napr => napr.type === type);
  return (
    <>
      <div className='main'>
        <div className='container' >
          <div className="main__content">
            {currentNapravl ? (
              <div className="doc-page" key={currentNapravl.id}>
                {currentNapravl.title}
                {currentNapravl.text}
              </div>
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
