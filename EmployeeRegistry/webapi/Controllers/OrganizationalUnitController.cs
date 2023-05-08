using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;

namespace EmployeeRegistry.BAL.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class OrganizationalUnitController : ControllerBase
    {
        private readonly IOrganizationalUnitService _organizationalUnitService;

        public OrganizationalUnitController(IOrganizationalUnitService organizationalUnitService)
        {
            _organizationalUnitService = organizationalUnitService;
        }

        [HttpPost]
        [ProducesResponseType(typeof(OrganizationalUnit), 200)]
        public async Task<IActionResult> Add(OrganizationalUnit entity)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        public async Task<IActionResult> Delete(long id)
        {
            throw new NotImplementedException();
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(OrganizationalUnit), 200)]
        public async Task<IActionResult> GetById(long id)
        {
            throw new NotImplementedException();
        }

        [HttpPut]
        [ProducesResponseType(typeof(OrganizationalUnit), 200)]
        public async Task<IActionResult> Update(OrganizationalUnit entity)
        {
            throw new NotImplementedException();
        }
    }
}
