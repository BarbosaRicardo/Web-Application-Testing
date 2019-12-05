import React from 'react'
import styled from 'styled-components'

export default function Dashboard (props) {
    const Button = styled.button`
        width: 20%;
        height: 100px;
        background-color: green;
        font-size: 2rem;
        color: black;
    `

    const Buttons = styled.div`
        width: 100%;
        background-color: black;
        display:flex;
        justify-content: space-around;
    `

return (
    <Buttons>
        <Button className="button" onClick={props.hit}>Hit</Button>
        <Button className="button" onClick={props.strike}>Strike</Button>
        <Button className="button" onClick={props.ball}>Ball</Button>
        <Button className="button" onClick={props.foul}>Foul</Button>

    </Buttons>
)

}
