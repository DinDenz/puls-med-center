import React from 'react';
import Questions from './Questions';

export default function SectionDifferents() {
  return (
    <div className='section-diffrents'>
      <div className="section-diffrents__content">
        <div className="diff-head">
          <div className="diff-head__title">
            Часто задаваемые вопросы
          </div>
        </div>
        <div className="diff-body">
          <div className="diff-body__items">
            <Questions />
          </div>
        </div>
      </div>
    </div>
  )
}