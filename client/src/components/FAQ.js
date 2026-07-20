import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "Who can attend this event?",
      answer:
        "Anyone interested in technology, innovation, software development, or networking is welcome to attend.",
    },
    {
      question: "Is registration free?",
      answer:
        "Yes! Registration is completely free, but seats are limited, so reserve your spot early.",
    },
    {
      question: "Will I receive a certificate?",
      answer:
        "Yes, every participant who attends the event will receive a digital participation certificate.",
    },
    {
      question: "Can I cancel my RSVP later?",
      answer:
        "Yes, you can contact the organizers anytime to update or cancel your registration.",
    },
    {
      question: "How can I contact the organizers?",
      answer:
        "You can use the Contact section below or email us at eventease@gmail.com.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq" data-aos="fade-up">
      <h2>❓ Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-card" key={index}>
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{faq.question}</h3>

              <span>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;