import React from 'react';
import { useSelector } from 'react-redux';

export default function SectionRewList() {
  const feedbacks = useSelector(state => state.rev.reviews);
  return (
    <div className='section-rev-list'>
      <div className="feedback-main">
        <div className="feedback-main__row">
          {feedbacks.map((feedback) => (
            <div className='feedback-main-content' key={feedback.id}>
              <div className="feedback-main__name font-roboto-bold">{feedback.name}</div>
              <div className="feedback-main__text">{feedback.text}</div>
              <div className="feedback-main__rating">{`Рейтинг: ${feedback.theme}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
