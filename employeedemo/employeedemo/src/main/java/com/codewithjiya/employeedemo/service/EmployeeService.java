package com.codewithjiya.employeedemo.service;

import com.codewithjiya.employeedemo.mypractice.Employee;
import com.codewithjiya.employeedemo.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Data
@Service
//@RequiredArgsConstructor
public class EmployeeService {
@Autowired
private final EmployeeRepository employeeRepository;
    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    public void deleteEmployees(Long id) {
        if (!employeeRepository.existsById(id)) {
            throw new EntityNotFoundException("Employee with id " + id + "not found.");
        }
        employeeRepository.deleteById(id);
    }
    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElse(null);
    }
    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee existingEmployee = optionalEmployee.get();

            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setName(employee.getName());
            existingEmployee.setDepartment(employee.getDepartment());

            return employeeRepository.save(existingEmployee);  // Added missing semicolon
        }
        throw new EntityNotFoundException("Employee with ID " + id + " not found");  // Throwing exception instead of returning null
    }

}
