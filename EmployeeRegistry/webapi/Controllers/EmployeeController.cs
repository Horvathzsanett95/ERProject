using Microsoft.AspNetCore.Mvc;

namespace EmployeeRegistry.BAL.Controllers
{
    [ApiController]
    [Route("api/EmployeeController")]
    public class EmployeeController : Controller
    {
        [HttpGet(Name = "GetWeatherForecast")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
