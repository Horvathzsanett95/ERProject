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
        public async Task<IActionResult> AddAsync(Employee entity)
        {
            try
            {
                var addedEntity = await _employeeService.AddAsync(entity);

                // Return a success response with the added entity
                return Ok(addedEntity);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while adding the employee: {ex}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(long id)
        {
            // Implement the logic to delete an employee entity
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(long id)
        {
            // Implement the logic to get an employee entity by ID
            throw new NotImplementedException();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(Employee entity)
        {
            // Implement the logic to update an employee entity
            throw new NotImplementedException();
        }
    }

}
