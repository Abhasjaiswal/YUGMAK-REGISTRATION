import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style.css';

const Page2 = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { strength } = location.state || { strength: 0 };

    const [formData, setFormData] = useState(
        Array.from({ length: strength }, () => ({
            name: '',
            sapid: '',
            rollNo: '',
            year: '',
            degree: '',
            field: '',
            email: '',
        }))
    );

    const handleChange = (index, field, value) => {
        const newFormData = [...formData];
        newFormData[index][field] = value;
        setFormData(newFormData);
    };

    const handleNext = () => {
        const allFieldsFilled = formData.every(member =>
            Object.values(member).every(value => value !== '')
        );
        if (allFieldsFilled) {
            navigate('/page3');
        } else {
            alert('Please fill out all fields.');
        }
    };

    const handlePrevious = () => {
        navigate('/page1');
    };

    return (
        <div className="container">
            <header>
                <a href="/" className="back-link">Back to homepage</a>
                <img src="random_logo.png" alt="Logo" className="logo" />
                <img src="random_logo_right.png" alt="Logo Right" className="logo-right" />
            </header>
            <div className="form-container">
                <div className="form-steps">
                    <div className="step clickable" onClick={handlePrevious}>1. Team details</div>
                    <div className="step active">2. Start-up details</div>
                    <div className="step">3. Submit</div>
                </div>
                <form>
                    {formData.map((member, index) => (
                        <div key={index} className="form-row">
                            <h3>Member {index + 1} Details</h3>
                            <label htmlFor={`name_${index}`}>Name</label>
                            <input
                                type="text"
                                id={`name_${index}`}
                                name={`name_${index}`}
                                placeholder="Name of Member"
                                value={member.name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                                required
                            />
                            <label htmlFor={`sapid_${index}`}>SAP ID</label>
                            <input
                                type="text"
                                id={`sapid_${index}`}
                                name={`sapid_${index}`}
                                placeholder="SAP ID"
                                value={member.sapid}
                                onChange={(e) => handleChange(index, 'sapid', e.target.value)}
                                required
                            />
                            <label htmlFor={`rollNo_${index}`}>Roll no.</label>
                            <input
                                type="text"
                                id={`rollNo_${index}`}
                                name={`rollNo_${index}`}
                                placeholder="Roll No."
                                value={member.rollNo}
                                onChange={(e) => handleChange(index, 'rollNo', e.target.value)}
                                required
                            />
                            <label htmlFor={`year_${index}`}>Year of study</label>
                            <input
                                type="text"
                                id={`year_${index}`}
                                name={`year_${index}`}
                                placeholder="Year of Study"
                                value={member.year}
                                onChange={(e) => handleChange(index, 'year', e.target.value)}
                                required
                            />
                            <label htmlFor={`degree_${index}`}>Degree</label>
                            <input
                                type="text"
                                id={`degree_${index}`}
                                name={`degree_${index}`}
                                placeholder="Degree"
                                value={member.degree}
                                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                                required
                            />
                            <label htmlFor={`field_${index}`}>Field</label>
                            <input
                                type="text"
                                id={`field_${index}`}
                                name={`field_${index}`}
                                placeholder="Field of Study"
                                value={member.field}
                                onChange={(e) => handleChange(index, 'field', e.target.value)}
                                required
                            />
                            <label htmlFor={`email_${index}`}>Email ID</label>
                            <input
                                type="email"
                                id={`email_${index}`}
                                name={`email_${index}`}
                                placeholder="Email ID"
                                value={member.email}
                                onChange={(e) => handleChange(index, 'email', e.target.value)}
                                required
                            />
                        </div>
                    ))}
                    {/* Use the same CSS class for both buttons */}
                    <button type="button" className="next-btn" onClick={handlePrevious}>Previous</button>
                    <button type="button" className="next-btn" onClick={handleNext}>Next</button>
                </form>
            </div>
            <footer>©️Developed by Web Operations | E-Cell | IIT Madras. All Rights Reserved.</footer>
        </div>
    );
};

export default Page2;
