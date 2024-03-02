import React, { useState } from 'react';
import Panel from './Panel';
import questions from './dataForQuestions';


export default function Questions() {
    const [openId, setOpenId] = useState(null);

    function panelClick(question) {
        (question.id == openId) ? setOpenId(null) : setOpenId(question.id)
    }

    return (
        <div className="accordeon-2">
            {questions.map((question) => (
                <Panel key={question.id}
                    panelClick={panelClick}
                    isOpen={question.id == openId}
                    quest={question} />
            ))}
        </div>
    )
}
