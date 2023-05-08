using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeRegistry.BAL.Controllers
{
    [ApiController]
    [Route("api/EmployeeController")]
    public class EmployeeController : Controller
    {
        private IEmployeeService _employeeService { get; set; }

        public EmployeeController(IEmployeeService employeeService) { 
            _employeeService = employeeService;
        }

        [HttpPost]
        public async Task<IActionResult> Add(Employee entity)
        {
            // Implement the logic to add an employee entity
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(long id)
        {
            // Implement the logic to delete an employee entity
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(long id)
        {
            // Implement the logic to get an employee entity by ID
            throw new NotImplementedException();
        }

        [HttpPut]
        public async Task<IActionResult> Update(Employee entity)
        {
            // Implement the logic to update an employee entity
            throw new NotImplementedException();
        }
    }

}
