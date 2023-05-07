namespace EmployeeRegistry.DAL.Models
{
    public sealed class Employee : Entity
    {
        public string Position { get; set; }
        public string PhoneNumber { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Supervisor { get; set; }
        public OrganizationalUnit OrganizationalUnit { get; set; }
        
    }
}