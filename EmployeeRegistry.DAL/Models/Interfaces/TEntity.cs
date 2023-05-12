using System.ComponentModel.DataAnnotations;

namespace EmployeeRegistry.DAL.Models.Interfaces
{
    public interface TEntity
    {
        long Id { get; set; }
        [Required]
        string Name { get; set; }
        [Required]
        bool Active { get; set; }
    }
}
