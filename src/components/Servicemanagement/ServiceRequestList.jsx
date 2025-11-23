import React from 'react';
import './ServiceRequestList.css';

const serviceRequests = [
    {
        sl: 1,
        category: 'Not available',
        user: 'Christopher Alexis',
        userType: 'Customer',
        serviceName: 'air conditioning and refrigeration',
        serviceDescription: 'AC Servicing, AC Repairs & AC Installation Refrigerator Repairs etc.',
        feedback: null,
    },
    {
        sl: 2,
        category: 'Not available',
        user: 'Provide administrative services',
        userType: '',
        serviceName: 'Administrative Virtual Assistance',
        serviceDescription: 'Data Entry : DS/GO US Visa Application: eTA Canada Application, Accounting Software : QuickBooks, Manager, etc.',
        feedback: null,
    },
    {
        sl: 3,
        category: 'Not available',
        user: 'Assist clients to acquire',
        userType: '',
        serviceName: 'Birth, Marriage Certificate (Online)',
        serviceDescription: 'Polymer TT Birth, Marriage Certificate.',
        feedback: null,
    },
    {
        sl: 4,
        category: 'Not available',
        user: 'Thea’s Tips and Toes',
        userType: '',
        serviceName: 'Providing acrylic and hard gel services!',
        serviceDescription: 'Providing acrylic and hard gel services.',
        feedback: null,
    },
    {
        sl: 5,
        category: 'Not available',
        user: 'Nail Technician',
        userType: '',
        serviceName: 'Providing acrylic and hard gel services.',
        serviceDescription: 'Providing acrylic and hard gel services.',
        feedback: null,
    },
    {
        sl: 6,
        category: 'Not available',
        user: 'Fold cloths',
        userType: '',
        serviceName: 'Fold neatly.',
        serviceDescription: 'Fold neatly.',
        feedback: null,
    },
];

const ServiceRequestList = () => {
    return (
        <div className="service-request-container">
            <header className="header">
                <h1 className="title">Service Request List</h1>
                <span className="total-requests">Total Service Requests</span>
            </header>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Category"
                    className="search-input"
                />
                <button className="search-button">SEARCH</button>
            </div>

            <table className="request-table">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Category</th>
                        <th>User</th>
                        <th>Service Name</th>
                        <th>Service Description</th>
                        <th>Given feedback</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceRequests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.sl}</td>
                            <td>{request.category}</td>
                            <td>
                                {request.user}
                                {request.userType && (
                                    <span className="user-badge">{request.userType}</span>
                                )}
                            </td>
                            <td>{request.serviceName}</td>
                            <td>{request.serviceDescription}</td>
                            <td>{request.feedback || 'Not available'}</td>
                            <td>
                                <button className="feedback-button">GIVE FEEDBACK</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceRequestList;