namespace EmployeeRegistry.DAL.Models
{
    public class Employee : Entity
    {
        public string Position { get; set; }
        public string PhoneNumber { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string? Supervisor { get; set; }
        public long? OrganizationalUnitId { get; set; }
        public OrganizationalUnit? OrganizationalUnit { get; set; }
        
    }
}