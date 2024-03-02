import React from 'react'

export default function IndDocInfo({ currentDoc }) {
    return (
        <div className="doc-page__text">
            <div className='doc-page__text-ownway'>{currentDoc.text.ownway}</div>
            <div className='doc-page__text-point-title'> <span>Образование</span>
                {currentDoc.text.education && (
                    <ul>
                        {Object.entries(currentDoc.text.education).map(([keyLi, liText]) => (
                            <li key={keyLi}>
                                {liText}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className='doc-page__text-point-title'> <span>Повышение квалификации</span>
                {currentDoc.text.interns && (
                    <ul>
                        {Object.entries(currentDoc.text.interns).map(([keyLi, liText]) => (
                            <li key={keyLi}>
                                {liText}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
