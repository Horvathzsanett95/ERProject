using EmployeeRegistry.BAL.Services.Interfaces;
using EmployeeRegistry.DAL;
using EmployeeRegistry.DAL.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace EmployeeRegistry.BAL.Services
{
    public class EmployeeService : ILogicService<Employee>
    { 
        private readonly ApplicationDbContext _context;

        public EmployeeService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Employee> AddAsync(Employee entity)
        {
            try
            {
                _context.Employees.Add(entity);
                await _context.SaveChangesAsync();
                return entity;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while adding an Employee: {ex.Message}");
                throw;
            }
        }

        public async Task DeleteAsync(Employee entity)
        {
            try
            {
                _context.Employees.Remove((Employee)entity);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while deleting an Employee: {ex.Message}");
                throw;
            }
        }

        public async Task<Employee> GetByIdAsync(long id)
        {
            try
            {
                var employee = await _context.Employees.FindAsync(id);

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

        public async Task<IQueryable<Employee>> Query(Expression<Func<Employee, bool>> predicate)
        {
            try
            {
                return await Task.FromResult(_context.Employees.Where(predicate).AsQueryable());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while querying Employees: {ex.Message}");
                throw;
            }
        }

        public async Task<Employee> UpdateAsync(Employee entity)
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
