using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL.Models;
using EmployeeRegistry.DAL.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeRegistry.BAL.Controllers
{
    [ApiController]
    [Route("api/EmployeeController")]
    public class EmployeeController : Controller
    {
        private ILogicService<Employee> _employeeService { get; set; }

        public EmployeeController(ILogicService<Employee> employeeService) 
        { 
            _employeeService = employeeService;
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(Employee entity)
        {
            try
            {
                TEntity addedEntity = await _employeeService.AddAsync(entity);

                // Return a success response with the added entity
                return Ok(addedEntity);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while adding the employee: {ex}");
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAsync([FromBody]long id)
        {
            try
            {
                Employee entity = await _employeeService.GetByIdAsync(id);
                await _employeeService.DeleteAsync(entity);

                // Return a success response with the added entity
                return Ok();
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while adding the employee: {ex}");
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetActiveEmployeesAsync()
        {
            try
            {
                IQueryable<TEntity> employeesQuery = await _employeeService.Query(x => x.Active == true);
                return Ok(employeesQuery);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while querying the employees: {ex}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(Employee entity)
        {
            try
            {
                TEntity updatedEntity = await _employeeService.UpdateAsync(entity);

                // Return a success response with the added entity
                return Ok(updatedEntity);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while updating the employee: {ex}");
            }
        }
    }

}
