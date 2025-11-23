import React, { useState } from 'react';
import './AddDiscount.css';

const AddDiscount = () => {
    const [discountType, setDiscountType] = useState('category');
    const [amountType, setAmountType] = useState('percentage');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle form submission, e.g., send data to a server
        alert('Form Submitted! (This is a placeholder)');
    };

    return (
        <div className="add-discount-page-wrapper">
            <div className="add-discount-container">
                <header className="header">
                    <h1 className="title">Add New Discount</h1>
                    <button className="settings-button">⚙️</button>
                </header>

                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label className="section-label">Discount type *</label>
                        <div className="radio-group">
                            <label className={`radio-button ${discountType === 'category' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="discountType"
                                    value="category"
                                    checked={discountType === 'category'}
                                    onChange={(e) => setDiscountType(e.target.value)}
                                />
                                Category Wise
                            </label>
                            <label className={`radio-button ${discountType === 'service' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="discountType"
                                    value="service"
                                    checked={discountType === 'service'}
                                    onChange={(e) => setDiscountType(e.target.value)}
                                />
                                Service Wise
                            </label>
                            <label className={`radio-button ${discountType === 'mixed' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="discountType"
                                    value="mixed"
                                    checked={discountType === 'mixed'}
                                    onChange={(e) => setDiscountType(e.target.value)}
                                />
                                Mixed
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="input-label" htmlFor="discountTitle">Discount Title *</label>
                        <input
                            className="form-input"
                            id="discountTitle"
                            type="text"
                            placeholder="Discount Title *"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="input-label" htmlFor="selectCategory">Select Category</label>
                        <select className="form-input" id="selectCategory">
                            <option value="">Select Category</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="food">Food</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className="input-label" htmlFor="selectZone">Select Zone</label>
                        <select className="form-input" id="selectZone">
                            <option value="">Select Zone</option>
                            <option value="world">World</option>
                            <option value="country">Country</option>
                            <option value="state">State</option>
                        </select>
                    </div>

                    <div className="form-section">
                        <label className="section-label">Discount amount type *</label>
                        <div className="radio-group">
                            <label className={`radio-button ${amountType === 'percentage' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="amountType"
                                    value="percentage"
                                    checked={amountType === 'percentage'}
                                    onChange={(e) => setAmountType(e.target.value)}
                                />
                                Percentage
                            </label>
                            <label className={`radio-button ${amountType === 'fixed' ? 'active' : ''}`}>
                                <input
                                    type="radio"
                                    name="amountType"
                                    value="fixed"
                                    checked={amountType === 'fixed'}
                                    onChange={(e) => setAmountType(e.target.value)}
                                />
                                Fixed Amount
                            </label>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="input-label" htmlFor="amount">Amount (%) *</label>
                            <input
                                className="form-input"
                                id="amount"
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="input-label" htmlFor="startDate">Start Date *</label>
                            <input className="form-input" id="startDate" type="date" required />
                        </div>
                        <div className="form-group">
                            <label className="input-label" htmlFor="endDate">End Date *</label>
                            <input className="form-input" id="endDate" type="date" required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label className="input-label" htmlFor="minPurchase">Min Purchase Amount (₹) *</label>
                            <input
                                className="form-input"
                                id="minPurchase"
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label className="input-label" htmlFor="maxDiscount">Max Discount (₹) *</label>
                            <input
                                className="form-input"
                                id="maxDiscount"
                                type="number"
                                placeholder="0"
                                required
                            />
                        </div>
                    </div>

                    <div className="submit-button-container">
                        <button type="submit" className="submit-button">SUBMIT</button>
                    </div>
                </form>
            </div>
            {/* Floating gear icon */}
            <div className="floating-gear">
                <button className="gear-button">⚙️</button>
            </div>
        </div>
    );
};

export default AddDiscount;