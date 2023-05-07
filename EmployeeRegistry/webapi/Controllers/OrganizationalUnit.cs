using Microsoft.AspNetCore.Mvc;

namespace EmployeeRegistry.BAL.Controllers
{
    public class OrganizationalUnit : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
