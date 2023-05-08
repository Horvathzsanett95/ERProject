using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL;
using EmployeeRegistry.DAL.Models;
using EmployeeRegistry.DAL.Models.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EmployeeRegistry.BAL.Services
{
    public class OrganizationalUnitService : IOrganizationalUnitService
    {
        private readonly ApplicationDbContext _context;

        public OrganizationalUnitService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<TEntity> AddAsync(TEntity entity)
        {
            try
            {
                _context.OrganizationalUnits.Add((OrganizationalUnit)entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while adding an Employee: {ex.Message}");
                throw;
            }
        }

        public async Task DeleteAsync(TEntity entity)
        {
            try
            {
                _context.OrganizationalUnits.Remove((OrganizationalUnit)entity);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while deleting an Employee: {ex.Message}");
                throw;
            }
        }

        public async Task<TEntity> GetByIdAsync(long id)
        {
            try
            {
                var employee = await _context.OrganizationalUnits.FindAsync(id);

                if (employee == null)
                {
                    throw new InvalidOperationException($"Employee with id {id} not found");
                }

                return employee;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while getting an Employee by id: {ex.Message}");
                throw;
            }
        }

        public async Task<IQueryable<TEntity>> Query(Expression<Func<TEntity, bool>> predicate)
        {
            try
            {
                return _context.OrganizationalUnits.Where(predicate);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while querying Employees: {ex.Message}");
                throw;
            }
        }

        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            try
            {
                _context.Entry(entity).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return (OrganizationalUnit)entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while updating an Employee: {ex.Message}");
                throw;
            }
        }
    }
}
