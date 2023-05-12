using System.ComponentModel.DataAnnotations;

namespace EmployeeRegistry.DAL.Models
{
    public class Employee : Entity
    {
        [Required]
        public string Position { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        public string? Supervisor { get; set; }
        public long? OrganizationalUnitId { get; set; }
        public OrganizationalUnit? OrganizationalUnit { get; set; }
        
    }
}