import { Name } from "ajv";
import "./PostEmployee.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const PostEmployee = ()=>{
    const[formData, setFormData]= useState({
        name: "",
        email : "",
        department: ""
    });
    const handleInputChange =(event)=>{
        const{name, value}=event.target;
        setFormData(
            {
                ...formData,
                [name]:value,
            }
        )
        };
const navigate = useNavigate();
        const handleSubmit=async (e)=>{
            e.preventDefault();
            console.log(formData);
            try {
                const response = await fetch("http://localhost:8080/api/employee",{
                    method:"POST",
                    headers:{"Content-type" : "application/json"},
                    body: JSON.stringify(formData)
                })

                const data = await response.json();
                console.log("Employee created", data);
                navigate("/")

            } catch (error) {
                console.log("Error creating employee : ", error.message);  
                
            }
        }
    return(
        <div className="center-form">
    
              <h1>Post New Employee</h1>
              <Form onSubmit={handleSubmit}>
                <FormGroup controlId="formBasicName">
                    <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name :"
                    value={formData.name}
                    onChange={handleInputChange}
                    />

                </FormGroup>
                <FormGroup controlId="formBasicName">
                    <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email :"
                    value={formData.email}
                    onChange={handleInputChange}
                    />

                </FormGroup>
                <FormGroup controlId="formBasicName">
                    <Form.Control
                    type="text"
                    name="department"
                    placeholder="Enter department :"
                    value={formData.department}
                    onChange={handleInputChange}
                    />

                </FormGroup>
                <Button variant="primary" type="submit" className="w-100">Post Employee</Button>
              </Form>
        
        </div>
    );
}
export default PostEmployee;