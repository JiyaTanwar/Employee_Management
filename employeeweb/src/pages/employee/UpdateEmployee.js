import { useEffect, useState } from "react";
import "./UpdateEmployee.css";
import Form from "react-bootstrap/Form";
import { Button, FormGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


const UpdateEmployee= ()=>{
    const {id}= useParams();
    const navigate = useNavigate();
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
        useEffect(()=>{
            const fetchEmployee = async()=>{
                try{
                    const response = await fetch(`http://localhost:8080/api/employees/${id}`);
                    const data = await response.json();
                    setFormData(data);
                }catch(error){
                    console.log("Error fetching User : ", error.message);
                }
            }
        fetchEmployee();
        },[id])

        const handleSubmit= async (e)=>{
            e.preventDefault();
            try{
                const response = await fetch(`http://localhost:8080/api/employees/${id}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body:JSON.stringify(formData),
                });
                const data = await response.json();
                console.log("User updated",data);

                navigate("/")
            }catch(error ){

                console.error("Error updating user : ", error.message);
            }
        }

    return(
   
        <div className="center-form">
    
    <h1>Edit Employee</h1>
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
      <Button variant="primary" type="submit" className="w-100">Edit Employee</Button>
    </Form>

</div>
       
    );
}
export default UpdateEmployee;