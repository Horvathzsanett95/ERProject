using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL;
using EmployeeRegistry.DAL.Models;
using EmployeeRegistry.DAL.Models.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Linq.Expressions;

namespace EmployeeRegistry.BAL.Services
{
    public class OrganizationalUnitService : ILogicService<OrganizationalUnit> 
    {
        private readonly ApplicationDbContext _context;

        public OrganizationalUnitService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<OrganizationalUnit> AddAsync(OrganizationalUnit entity)
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

        public async Task DeleteAsync(OrganizationalUnit entity)
        {
            try
            {
                OrganizationalUnit organizationalUnit = await _context.OrganizationalUnits.FindAsync(entity.Id);

                if (organizationalUnit != null)
                {
                    organizationalUnit.Active = false;
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while deleting an Employee: {ex.Message}");
                throw;
            }
        }

        public async Task<OrganizationalUnit> GetByIdAsync(long id)
        {
            try
            {
                var organizationalUnit = await _context.OrganizationalUnits.FindAsync(id);

                if (organizationalUnit == null)
                {
                    throw new InvalidOperationException($"Employee with id {id} not found");
                }

                return organizationalUnit;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while getting an Employee by id: {ex.Message}");
                throw;
            }
        }

        public async Task<IQueryable<OrganizationalUnit>> Query(Expression<Func<OrganizationalUnit, bool>> predicate)
        {
            try
            {
                return await Task.FromResult(_context.OrganizationalUnits.Where(predicate).AsQueryable());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while querying Employees: {ex.Message}");
                throw;
            }
        }

        public async Task<OrganizationalUnit> UpdateAsync(OrganizationalUnit entity)
        {
            try
            {
                _context.Entry(entity).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while updating an Employee: {ex.Message}");
                throw;
            }
        }
    }
}
