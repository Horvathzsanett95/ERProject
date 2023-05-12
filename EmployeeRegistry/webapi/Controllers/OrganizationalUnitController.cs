using EmployeeRegistry.BAL.Services;
using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL.Models;
using EmployeeRegistry.DAL.Models.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeRegistry.BAL.Controllers
{
    [ApiController]
    [Route("api/OrganizationalUnitController")]
    public class OrganizationalUnitController : ControllerBase
    {
        private readonly ILogicService<OrganizationalUnit> _organizationalUnitService;

        public OrganizationalUnitController(ILogicService<OrganizationalUnit> organizationalUnitService)
        {
            _organizationalUnitService = organizationalUnitService;
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(OrganizationalUnit entity)
        {
            try
            {
                TEntity addedEntity = await _organizationalUnitService.AddAsync(entity);

                // Return a success response with the added entity
                return Ok(addedEntity);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while adding the organizational unit: {ex}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync([FromBody]long id)
        {
            try
            {
                OrganizationalUnit entity = await _organizationalUnitService.GetByIdAsync(id);
                await _organizationalUnitService.DeleteAsync(entity);

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
        public async Task<IActionResult> GetActiveOrganizationalUnitAsync()
        {
            try
            {
                IQueryable<TEntity> organizationalUnitsQuery = await _organizationalUnitService.Query(x => x.Active == true);
                return Ok(organizationalUnitsQuery);
            }
            catch (Exception ex)
            {
                // Handle the exception and return an error response
                return StatusCode(StatusCodes.Status500InternalServerError, $"An error occurred while querying the organizational units: {ex}");
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(OrganizationalUnit entity)
        {
            try
            {
                TEntity updatedEntity = await _organizationalUnitService.UpdateAsync(entity);

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
