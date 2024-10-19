package com.codewithjiya.employeedemo.Controller;

import com.codewithjiya.employeedemo.mypractice.Employee;
import com.codewithjiya.employeedemo.service.EmployeeService;
import jakarta.persistence.EntityNotFoundException;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@RestController
@RequestMapping("/api")
@CrossOrigin("*")
//@RequiredArgsConstructor
public class EmployeeController {
    @Autowired
    private final EmployeeService employeeService;

    @PostMapping("/employee")
    public Employee postEmployee(@RequestBody Employee employee) {
        return employeeService.postEmployee(employee);
    }
    @GetMapping("/employees")
    public List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        try{
            employeeService.deleteEmployees(id);
            return new ResponseEntity<>("Employee with ID " + id + "deletes successfully", HttpStatus.OK);
        }catch(EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
        if(employee==null)return ResponseEntity.notFound().build();
        return ResponseEntity.ok(employee);
    }
    @PatchMapping("/employees/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id, @RequestBody Employee employee){
        Employee updateEmployee= employeeService.updateEmployee(id,employee);
        if(updateEmployee==null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updateEmployee);
    }
}
