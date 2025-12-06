import React from 'react';
import './slide.css';

export default function Slide({ title, desc, img, index }) {
  return (
    <div className="slide">
      <div className="slide-header">
        <h2>{index}. {title}</h2>
      </div>
      <div className="slide-body">
        <div className="slide-image">
          <img src={img} alt={title} onError={(e)=>{ e.target.style.opacity=0.3; e.target.alt='Image not found'; }} />
        </div>
        <div className="slide-text">
          <p>{desc}</p>
          <ul>
            <li><strong>Focus:</strong> Visual clarity & brand recall</li>
            <li><strong>CTA:</strong> Primary action clearly visible</li>
            <li><strong>Notes:</strong> Use consistent spacing, typography & color</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
