import React from 'react'
import { ThemeContext } from '../..';
import { useContext } from 'react';

export default function Paragraph() {
    const theme = useContext(ThemeContext)
    return (
        <div className={theme}>
            <p> content </p>
        </div>
    )
}
