import React, {useState} from 'react'
import './button.styles.css'
import {link} from 'react-router-dom'

import Thing from '../thing.component'

const Button = () => {
        const [color, setColor] =  useState("Red")
        const message = "Tor"

        return (
            <div className='button'>
                    <div>
                        <p className={color} onClick={() => {
                            if (color == "Red") {
                                setColor("Blue")
                            } else {
                                setColor("Red")
                            }
                        }
                          }>
                            {color}
                        </p>
                    </div>
                    <p className='paragraph'>
                        <Thing color={color} message={message}/>
                    </p>
            </div>
            )
}

export default Button