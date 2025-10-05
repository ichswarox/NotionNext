import React from 'react';

const AlertNote = ({ title, style, children }) => (
  <div className="alert alert--info" style={style}>
    <h5>{title}</h5>
    <p>{children}</p>
  </div>
);

export default function Download() {
  return (
    <AlertNote title="Get Premium Download Speed Without any Limitations!" style={{ margin: '20px 0' }}>
      Contact us on <a href="https://wa.me/+8613237610083" target="_blank" rel="noopener noreferrer">WhatsApp</a> for premium access and support.
    </AlertNote>
  );
}