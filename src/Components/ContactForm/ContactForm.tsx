import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA5NzUwODk1NDM3NjAwMTA2MTYyIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJnaGRldW5lckBtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJDcGdhVXh6REMxTm94MzdNOHpKQVBRIiwibmJmIjoxNzMyMTU5MDA1LCJpYXQiOjE3MzIxNTkzMDUsImV4cCI6MTczMjE2MjkwNSwianRpIjoiYmIxMTViNWM1NDVjMWE3Mjc4MzI5MzdiNjIyZThmYWU3NDQxNjBlZCJ9.FFughpIu_HXKvLYsoS0MjAlwZ_-NQDJSeoCQHeeJBH7xibIRBaMYa72MSPyKbBDgAOj08wdbepStijPt7IEMyX7dusWz7aX7XjXZPnOWDzDLLW9PKqSzNreZdX96Jvb7yuCmTSZYDjr9Eq8OkdRWeAieewb3IjzYeDZon65eHSXcWcZ-iteEqe4WG875EXQQt4RdTs_JCpUM_25P4iQ6tsgB4oyi5WhNUAYpfaehZMKZXF-zlyw0WKe81D4Kbx1bxflTc8KmMZdlWXSc-NEPKBIfbqjDWSTKjywlpr86oHutIFUeSubsHCWUl5FvrAdaTkLMfOrXvNshcSnakow9cA`,
        },
        body: JSON.stringify({
          ToMail: email,
          Content: content,
        }),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        // Limpar o formulário se necessário
        setEmail('');
        
        setContent('');
      } else {
        const errorData = await response.json();
        alert(`Erro ao enviar a mensagem: ${errorData.error || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      alert('Não foi possível enviar a mensagem.');
    }
  };

  return (
    <section className="contact-form">
      <h3 className="contact-form__subtitle">Envie sua dúvida</h3>
      <h2 className="contact-form__title">Entre em contato</h2>
      <p className="contact-form__description">
        Entre em contato, estou disposto a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica etc... Estamos à disposição para responder.
      </p>
      <form className="contact-form__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor E-mail"
          className="contact-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Motivo do contato"
          className="contact-form__textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="contact-form__button">
          Enviar
        </button>
      </form>
    </section>
  );
}