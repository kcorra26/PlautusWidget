import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import '../App.css';
import axios from 'axios'


export default function Home() {
    const [act, setAct] = useState('')
    const [scene, setScene] = useState('')
    const [line, setLine] = useState('')
    const [play, setPlay] = useState('')
    const [lineNum, setLineNum] = useState(null)
    const [isOpen, setIsOpen] = useState(false)

    const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:8000";

    const plays = [
        {value:"Amphitryon", text:"Amphitryon"}, {value:"Asinaria", text:"Asinaria"}, 
        {value:"Aulularia", text:"Aulularia"}, {value:"Bacchides", text:"Bacchides"}, 
        {value:"Captivi", text:"Captivi"}, {value:"Casina", text:"Casina"}, 
        {value:"Cistellaria", text:"Cistellaria"}, {value:"Curculio", text:"Curculio"}, 
        {value:"Epidicus", text:"Epidicus"}, {value:"Menaechmi", text:"Menaechmi"}, 
        {value:"Mercator", text:"Mercator"}, {value:"Miles Gloriosus", text:"Miles Gloriosus"},
        {value:"Mostellaria", text:"Mostellaria"}, {value:"Persa", text:"Persa"},
        {value:"Poenulus", text:"Poenulus"}, {value:"Pseudolus", text:"Pseudolus"}, 
        {value:"Rudens", text:"Rudens"}, {value:"Stichus", text:"Stichus"}, 
        {value:"Trinummus", text:"Trinummus"}, {value:"Truculentus", text:"Truculentus"}
    ]

    function handleSubmit(event) {
        event.preventDefault();
        axios.post(`${baseUrl}/login`, {act, scene, line, play})
        .then(res => setLineNum(res.data))
        .catch(err => console.log(err))
    }
    
    const handleSelect = (value) => {
        setPlay(value);
        setIsOpen(false);
    }
    return (
        <div className="m-5 d-flex vh-100 justify-content-center align-items-start">
            <div className= 'p-4 w-25'>
                <h3 className="mb-3 text-center">Enter Your Citation</h3>
                <small className="text-body-secondary">Convert your Plautus line references here. </small>
                <form className="mt-4 row gy-2 gx-3" onSubmit={handleSubmit}>
                    <div className='mb-3 row'>
                        <label htmlFor="act" className="col-sm-2 col-form-label">Act</label>
                        <input placeholder='Enter Act Number' className='form-control'
                        onChange={e => setAct(e.target.value)}></input>
                    </div>
                    <div className='mb-3 row'>
                        <label htmlFor="scene" className="col-sm-2 col-form-label negative-mb-2">Scene</label>
                        <input placeholder='Enter Scene Number' className='form-control'
                        onChange={e => setScene(e.target.value)}></input>
                    </div>
                    <div className='mb-3 row'>
                        <label htmlFor="line" className="col-sm-2 col-form-label">Line</label>
                        <input placeholder='Enter Line Number' className='form-control'
                        onChange={e => setLine(e.target.value)}></input>
                    </div>
                    <div className="button-container mb-3" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" 
                            aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                            {play ? plays.find(p => p.value === play).text : 'Select Play'}
                            </button>

                            <div className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                                {plays.map((play) => (
                                    <button key={play.value} className="dropdown-item" type="button" onClick={() => handleSelect(play.value)}>
                                        {play.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button className='btn btn-success'>Convert</button>
                    </div>
                </form>
                <div className='mb-5 lead col-sm-8'>
                    {lineNum && <div>Line Number: {lineNum}</div>}
                </div>
            </div>
        </div>
    )
}