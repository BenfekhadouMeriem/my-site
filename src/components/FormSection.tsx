import React, { useState, useEffect, useRef } from 'react';

const FormSection = ({ label, children, error, id }) => (
    <div className="mb-10">
        <label className="flex items-center text-lg font-semibold text-indigo-900 mb-4">
            <span className="mr-3 text-2xl">✨</span>
            {label}
        </label>
        {children}
        {error && (
            <p id={`${id}Error`} className="text-red-500 text-sm mt-2">
                {error}
            </p>
        )}
    </div>
);

export default FormSection; 