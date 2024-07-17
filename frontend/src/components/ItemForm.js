import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [first_name, setFirst_name] = useState('');
    const [middle_name, setMiddle_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date_of_birth, setDate_of_birth] = useState('');
    const [place_of_birth, setPlace_of_birth] = useState('');
    const [sex, setSex] = useState('');
    const [civil_status, setCivil_status] = useState('');
    const [spouse_surname, setSpouse_surname] = useState('');
    const [spouse_first_name, setSpouse_first_name] = useState('');
    const [spouse_middle_name, setSpouse_middle_name] = useState('');
    const [spouse_name_ext, setSpouse_name_ext] = useState('');
    const [spouse_occupation, setSpouse_occupation] = useState('');
    const [spouse_employer, setSpouse_employer] = useState('');
    const [spouse_business_address, setSpouse_business_address] = useState('');
    const [spouse_telephone, setSpouse_telephone] = useState('');
    const [father_last_name, setFather_last_name] = useState('');
    const [father_first_name, setFather_first_name] = useState('');
    const [father_middle_name, setFather_middle_name] = useState('');
    const [mother_maiden_name, setMother_maiden_name] = useState('');
    const [mother_last_name, setMother_last_name] = useState('');
    const [mother_first_name, setMother_first_name] = useState('');
    const [mother_middle_name, setMother_middle_name] = useState('');
    const [child1, setChild1] = useState('');
    const [child2, setChild2] = useState('');
    const [child3, setChild3] = useState('');
    const [child4, setChild4] = useState('');
    const [elementary_school_name, setElementary_school_name] = useState('');
    const [secondary_school_name, setSecondary_school_name] = useState('');
    const [college_school_name, setCollege_school_name] = useState('');



    
    useEffect(() => {
        if (item) {
            setFirst_name(item.first_name || '');
            setMiddle_name(item.middle_name || '');
            setLast_name(item.last_name|| '');
            setAddress(item.address || '');
            setPhone(item.phone || '');
            setEmail(item.email || '');
            setDate_of_birth(item.date_of_birth || '');
            setPlace_of_birth(item.place_of_birth || '');
            setSex(item.sex || '');
            setCivil_status(item.civil_status || '');
            setSpouse_surname(item.spouse_surname || '');
            setSpouse_first_name(item.spouse_first_name || '');
            setSpouse_middle_name(item.spouse_middle_name || '');
            setSpouse_name_ext(item.spouse_name_ext || '');
            setSpouse_occupation(item.spouse_occupation || '');
            setSpouse_employer(item.spouse_employer || '');
            setSpouse_business_address(item.spouse_business_address || '');
            setSpouse_telephone(item.spouse_telephone || '');
            setFather_last_name(item.father_last_name || '');
            setFather_first_name(item.father_first_name || '');
            setFather_middle_name(item.father_middle_name || '');
            setMother_maiden_name(item.mother_maiden_name || '');
            setMother_last_name(item.mother_last_name || '');
            setMother_first_name(item.mother_first_name || '');
            setMother_middle_name(item.mother_middle_name || '');
            setChild1(item.child1 || '');
            setChild2(item.child2 || '');
            setChild3(item.child3 || '');
            setChild4(item.child4 || '');
            setElementary_school_name(item.elementary_school_name || '');
            setSecondary_school_name(item.secondary_school_name || '');
            setCollege_school_name(item.college_school_name || '');




            
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name,
            middle_name,
            last_name,
            address,
            phone,
            email,
            date_of_birth,
            place_of_birth,
            sex,
            civil_status,
            spouse_surname,
            spouse_first_name,
            spouse_middle_name,
            spouse_name_ext,
            spouse_occupation,
            spouse_employer,
            spouse_business_address,
            spouse_telephone,
            father_last_name,
            father_first_name,
            father_middle_name,
            mother_maiden_name,
            mother_last_name,
            mother_first_name,
            mother_middle_name,
            child1,
            child2,
            child3,
            child4,
            elementary_school_name,
            secondary_school_name,
            college_school_name,

        };
        try {
            if (item) {
                await axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                await axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type='text' value={first_name} onChange={(e) => setFirst_name(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type='text' value={middle_name} onChange={(e) => setMiddle_name(e.target.value)} />
            </div>
            <div>
                <label>Last_name:</label>
                <input type='text' value={last_name} onChange={(e) => setLast_name(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Date of Birth:</label>
                <input type='date' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Place of Birth:</label>
                <input type='text' value={place_of_birth} onChange={(e) => setPlace_of_birth(e.target.value)} />
            </div>
            <div>
                <label>Sex:</label>
                <input type='text' value={sex} onChange={(e) => setSex(e.target.value)} />
            </div>
            <div>
                <label>Civil Status:</label>
                <input type='text' value={civil_status} onChange={(e) => setCivil_status(e.target.value)} />
            </div>
            <div>
                <label>Spouse Surname:</label>
                <input type='text' value={spouse_surname} onChange={(e) => setSpouse_surname(e.target.value)} />
            </div>
            <div>
                <label>Spouse First Name:</label>
                <input type='text' value={spouse_first_name} onChange={(e) => setSpouse_first_name(e.target.value)} />
            </div>
            <div>
                <label>Spouse Middle Name:</label>
                <input type='text' value={spouse_middle_name} onChange={(e) => setSpouse_middle_name(e.target.value)} />
            </div>
            <div>
                <label>Spouse Name Ext:</label>
                <input type='text' value={spouse_name_ext} onChange={(e) => setSpouse_name_ext(e.target.value)} />
            </div>
            <div>
                <label>Spouse Occupation:</label>
                <input type='text' value={spouse_occupation} onChange={(e) => setSpouse_occupation(e.target.value)} />
            </div>
            <div>
                <label>Spouse Employer:</label>
                <input type='text' value={spouse_employer} onChange={(e) => setSpouse_employer(e.target.value)} />
            </div>
            <div>
                <label>Spouse Business Address:</label>
                <input type='text' value={spouse_business_address} onChange={(e) => setSpouse_business_address(e.target.value)} />
            </div>
            <div>
                <label>Spouse Telephone:</label>
                <input type='text' value={spouse_telephone} onChange={(e) => setSpouse_telephone(e.target.value)} />
            </div>
            <div>
                <label>Father Last Name:</label>
                <input type='text' value={father_last_name} onChange={(e) => setFather_last_name(e.target.value)} />
            </div>
            <div>
                <label>Father First Name:</label>
                <input type='text' value={father_first_name} onChange={(e) => setFather_first_name(e.target.value)} />
            </div>
            <div>
                <label>Father Middle Name:</label>
                <input type='text' value={father_middle_name} onChange={(e) => setFather_middle_name(e.target.value)} />
            </div>
            <div>
                <label>Mother Maiden Name:</label>
                <input type='text' value={mother_maiden_name} onChange={(e) => setMother_maiden_name(e.target.value)} />
            </div>
            <div>
                <label>Mother Last Name:</label>
                <input type='text' value={mother_last_name} onChange={(e) => setMother_last_name(e.target.value)} />
            </div>
            <div>
                <label>Mother First Name:</label>
                <input type='text' value={mother_first_name} onChange={(e) => setMother_first_name(e.target.value)} />
            </div>
            <div>
                <label>Mother Middle Name:</label>
                <input type='text' value={mother_middle_name} onChange={(e) => setMother_middle_name(e.target.value)} />
            </div>          
            <div>
                <label>Child 1:</label>
                <input type='text' value={child1} onChange={(e) => setChild1(e.target.value)} />
            </div>
            <div>
                <label>Child 2:</label>
                <input type='text' value={child2} onChange={(e) => setChild2(e.target.value)} />
            </div>
            <div>
                <label>Child 3:</label>
                <input type='text' value={child3} onChange={(e) => setChild3(e.target.value)} />
            </div>
            <div>
                <label>Child 4:</label>
                <input type='text' value={child4} onChange={(e) => setChild4(e.target.value)} />
            </div>
            <div>
                <label>Elementary School Name:</label>
                <input type='text' value={elementary_school_name} onChange={(e) => setElementary_school_name(e.target.value)} />
            </div>
            <div>
                <label>Secondary School Name:</label>
                <input type='text' value={secondary_school_name} onChange={(e) => setSecondary_school_name(e.target.value)} />
            </div>
            <div>
                <label>College School Name:</label>
                <input type='text' value={college_school_name} onChange={(e) => setCollege_school_name(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default ItemForm;
