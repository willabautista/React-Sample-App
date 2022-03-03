import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>HOME</h1>
            <p>description</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Button 1</Button>
                <div className='space'></div>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Button 2</Button>
            </div>
        </div>
    )
}

export default HeroSection