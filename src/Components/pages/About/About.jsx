import React from 'react';
import SectionForm from '../../Main/SectionForm/SectionForm';
import SectionTabs from '../../Main/SectionTabs/SectionTabs';
import dataForAbout from './dataForAbout'

export default function About() {

  return (
    <div className='main'>
      <div className='container' >
        <div className="main__content">
          <div className='about-title-section'>
            <div className="back">
              <div className="back-background"></div>
            </div>
            <h1>О нас</h1>
          </div>
          {dataForAbout.map((item) => (
            <div className='about-info' key={item.id}>
              <div className="about-text-1">{item.text_1}</div>
              <div className='box-about-text-2'><div className="about-text-2">{item.text_2}</div></div>
              <div className="about-text-flex-section">
                <div className="about-text-3">{item.text_3}</div>
                <div className="about_img-cont">
                  <img src={item.img} alt="about-img" />
                </div>
              </div>
              <div className="about-text-bottom-section">
                <h2>Наши принципы и девизы в работе:</h2>
                {item.ul && (
                  <ul>
                    {Object.entries(item.ul).map(([keyLi, liText]) => (
                      <li key={keyLi}>
                        {liText}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="about-text-sub-bottom">
                {item.text_4}
              </div>
            </div>

          ))}
          <SectionTabs />
          <SectionForm />
        </div>
      </div>
    </div>
  )
}
