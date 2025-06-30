import React, { useState, useEffect, useRef } from 'react';

const Bubble = ({ text, selected, onClick, className = '' }) => (
    <div
        className={`bubble ${selected ? 'selected' : ''} ${className}`}
        onClick={onClick}
    >
        {text}
    </div>
);

export default Bubble; 