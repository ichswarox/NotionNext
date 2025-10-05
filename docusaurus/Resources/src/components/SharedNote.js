import React from 'react';

const AlertNote = ({ title, style, children }) => (
  <div className="alert alert--info" style={style}>
    <h5>{title}</h5>
    <p>{children}</p>
  </div>
);

export default function SharedNote() {
  return (
    <AlertNote title="Get Premium Download Speed">
      This is a shared note that appears across all documentation pages.
    </AlertNote>
  );
}

export function PremiumDownload() {
  return (
    <AlertNote 
      title="Get Premium Download Speed" 
      style={{ textAlign: 'center' }}
    >
      This is a shared note that appears across all documentation pages.
      <br />
      <a href="/about-us">Learn more about our premium features.</a>
    </AlertNote>
  );
}
