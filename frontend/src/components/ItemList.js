import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete, refresh }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [refresh]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
            <h1>Items</h1>
            {items.length > 0 ? (
                <div>
                    {items.map((item) => (
                        <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                            <p><strong>First Name:</strong> {item.first_name}</p>
                            <p><strong>Middle Name:</strong> {item.middle_name}</p>
                            <p><strong>Last Name:</strong> {item.last_name}</p>
                            <p><strong>Address:</strong> {item.address}</p>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p><strong>Phone:</strong> {item.phone}</p>
                            <p><strong>Date of Birth:</strong> {item.date_of_birth}</p>
                            <p><strong>Place of Birth:</strong> {item.place_of_birth}</p>
                            <p><strong>Sex:</strong> {item.sex}</p>
                            <p><strong>Civil Status:</strong> {item.civil_status}</p>
                            <p><strong>Spouse Surname:</strong> {item.spouse_surname}</p>
                            <p><strong>Spouse First Name:</strong> {item.spouse_first_name}</p>
                            <p><strong>Spouse Middle Name:</strong> {item.spouse_middle_name}</p>
                            <p><strong>Spouse Name Ext:</strong> {item.spouse_name_ext}</p>
                            <p><strong>Spouse Occupation:</strong> {item.spouse_occupation}</p>
                            <p><strong>Spouse Employer:</strong> {item.spouse_employer}</p>
                            <p><strong>Spouse Business Address:</strong> {item.spouse_business_address}</p>
                            <p><strong>Spouse Telephone:</strong> {item.spouse_telephone}</p>
                            <p><strong>Father Last Name:</strong> {item.father_last_name}</p>
                            <p><strong>Father First Name:</strong> {item.father_first_name}</p>
                            <p><strong>Father Middle Name:</strong> {item.father_middle_name}</p>
                            <p><strong>Mother Maiden Name:</strong> {item.mother_maiden_name}</p>
                            <p><strong>Mother Last Name:</strong> {item.mother_last_name}</p>
                            <p><strong>Mother First Name:</strong> {item.mother_first_name}</p>
                            <p><strong>Mother Middle Name:</strong> {item.mother_middle_name}</p>                   
                            <p><strong>Child 1:</strong> {item.child1}</p>
                            <p><strong>Child 2:</strong> {item.child2}</p>
                            <p><strong>Child 3:</strong> {item.child3}</p>
                            <p><strong>Child 4:</strong> {item.child4}</p>
                            <p><strong>Elementary School Name:</strong> {item.elementary_school_name}</p>
                            <p><strong>Secondary School Name:</strong> {item.secondary_school_name}</p>
                            <p><strong>College School Name:</strong> {item.college_school_name}</p>      
                            <div>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => onDelete(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
};

export default ItemList;
