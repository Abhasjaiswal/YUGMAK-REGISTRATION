import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import logo from '../bg.png';
const Page1 = () => {
    const [teamName, setTeamName] = useState('');
    const [email, setEmail] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [degree, setDegree] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [altPhoneNumber, setAltPhoneNumber] = useState('');
    const [strength, setStrength] = useState('');
    const navigate = useNavigate();

    const handleNext = () => {
        // Validate all fields
        if (!teamName || !email || !rollNo || !degree || !phoneNumber || !altPhoneNumber || !strength) {
            alert("Please fill out all the fields before proceeding.");
        } else {
            navigate('/page2', { state: { strength: parseInt(strength) } });
        }
    };

    return (
        <div className="container">
            <header>
                <a href="/" className="back-link">Back to homepage</a>
                <img src={logo} alt="Logo" className="logo" />
                <img src="" alt="Logo Right" className="logo-right" />
            </header>
            <div className="form-container">
                <div className="form-steps">
                    <div className="step active">1. Team details</div>
                    <div className="step">2. Start-up details</div>
                    <div className="step">3. Submit</div>
                </div>
                <form>
                    <div className="form-row">
                        <label htmlFor="teamName">Name</label>
                        <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            placeholder="Of the Team Leader"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Personal E-Mail of the Team Leader"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="rollNo">Roll no.</label>
                        <input
                            type="text"
                            id="rollNo"
                            name="rollNo"
                            placeholder="Of the Team Leader"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="degree">Degree</label>
                        <select
                            id="degree"
                            name="degree"
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}
                        >
                            <option value="">Select Degree</option>
                            <option value="btech">B.Tech</option>
                            <option value="mtech">M.Tech</option>
                            <option value="phd">PhD</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Of the Team Leader"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="altPhoneNumber">Alternate Phone number</label>
                        <input
                            type="text"
                            id="altPhoneNumber"
                            name="altPhoneNumber"
                            placeholder="Of the Team Leader"
                            value={altPhoneNumber}
                            onChange={(e) => setAltPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label htmlFor="strength">Strength of the team</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="strength"
                                    value="2"
                                    onChange={() => setStrength("2")}
                                    checked={strength === "2"}
                                />
                                2
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="strength"
                                    value="3"
                                    onChange={() => setStrength("3")}
                                    checked={strength === "3"}
                                />
                                3
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="strength"
                                    value="4"
                                    onChange={() => setStrength("4")}
                                    checked={strength === "4"}
                                />
                                4
                            </label>
                        </div>
                    </div>
                    
                    <button type="button" className="next-btn" onClick={handleNext}>Next</button>
                </form>
            </div>
            <footer>©️Developed by UPES-CSI | E-Cell | IIT Madras. All Rights Reserved.</footer>
        </div>
    );
};

export default Page1;
