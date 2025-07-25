import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
      <p>Email: <a href="mailto:saransh@example.com" className="text-blue-500">saransh@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/saransh" className="text-blue-500">linkedin.com/in/saransh</a></p>
      <p>GitHub: <a href="https://github.com/saransh" className="text-blue-500">github.com/saransh</a></p>
    </section>
  );
}
