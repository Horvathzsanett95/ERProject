namespace EmployeeRegistry.DAL.Models.Interfaces
{
    public interface TEntity
    {
        long Id { get; set; }
        string Name { get; set; }
        bool Active { get; set; }
    }
}
