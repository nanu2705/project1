import React, { useContext, useState } from 'react';
import './Socket.scss';
import MyContext from '../../Common/Context/MyContext';

const Socket = () => {
  const { sockets, socketC } = useContext(MyContext);
  const [visibleAnswer, setVisibleAnswer] = useState(null);
  const [relatedAnswer, setRelatedAnswer] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What documents are required for a tourist visa?",
      answer: "You need a valid passport, application form, photos, travel itinerary, and proof of financial means.",
      related: [
        {
          id: 1,
          question: "What is the application form for a tourist visa?",
          answer: "The application form is available on the official government website or at the embassy.",
        },
       
      ],
    },
    {
      id: 2,
      question: "How long does it take to process a student visa?",
      answer: "Student visa processing times vary by country but usually take 2-4 weeks.",
      related: [
        {
          id: 1,
          question: "What are the prerequisites for applying to university abroad?",
          answer: "You need academic transcripts, test scores, letters of recommendation, and proof of English proficiency.",
        },
       
      ],
    },
    {
      id: 3,
      question: "What is the cost of a work visa?",
      answer: "The cost depends on the destination country, ranging from $100 to $500 or more.",
      related: [
        {
          id: 1,
          question: "What are the steps to apply for a work visa?",
          answer: "You need an offer letter, passport, application form, and supporting documentation for the application process.",
        },
       
      ],
    },
  ];

  const toggleAnswer = (id, isRelated = false) => {
    if (isRelated) {
      if (relatedAnswer === id) {
        setRelatedAnswer(null);
      } else {
        setRelatedAnswer(id);
      }
    } else {
      if (visibleAnswer === id) {
        setVisibleAnswer(null);
        setRelatedAnswer(null);
      } else {
        setVisibleAnswer(id);
        setRelatedAnswer(null);
      }
    }
  };

  const currentQuestion = questions.find((item) => item.id === visibleAnswer);
  const currentRelated = currentQuestion?.related.find((item) => item.id === relatedAnswer);

  return (
    <div className="socket-main">
      {sockets && (
        <>
          <h2>Frequently Asked Questions</h2>
          <span>Everything you need to know about visas.</span>

          <div className="socket-overlay">
            <div className="socket-content">
              <div className="socket-head">
                <span className="cancel-icon" onClick={socketC}>
                  &times;
                </span>
                <h5>What do you want to know?</h5>
              </div>

              <div className="message">
                <div className="socket-message">
                  {questions.map((item) => (
                    <div
                      key={item.id}
                      className="question"
                      onClick={() => toggleAnswer(item.id)}
                      style={{
                        display: visibleAnswer === null || visibleAnswer === item.id ? 'block' : 'none',
                      pointerEvents: visibleAnswer !== null ? 'none' : 'auto',

                      }}
                    >
                      {item.question}
                    </div>
                  ))}
                </div>

                {visibleAnswer && (
                 <>                    <div className="answer">{currentQuestion?.answer}</div>

                   
                     
                      {currentQuestion.related.map((related) => (
                        <div key={related.id} className="questions">
                          <div
                            className="related-question"
                            onClick={() => toggleAnswer(related.id, true)}
                            style={{
                              display: relatedAnswer === null || relatedAnswer === related.id ? 'block' : 'none',
                              pointerEvents: relatedAnswer !== null ? 'none' : 'auto',
                            }}
                          >
                            {related.question}
                          </div>
                          {relatedAnswer === related.id && (
                            <div className="related-answer">{currentRelated?.answer}</div>
                          )}
                        </div>
                      ))}
                   

                    {/* Show Thank You message after all related questions are answered */}
                    {currentQuestion?.related.length > 0 && relatedAnswer === currentQuestion?.related[currentQuestion.related.length - 1].id && (
                      <div className="thanks-message">
                        <h5>Thank you for chatting with us!</h5>
                      </div>
                    )}
             
             </>
 )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Socket;
