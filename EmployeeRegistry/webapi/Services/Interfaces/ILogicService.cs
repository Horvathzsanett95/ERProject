using EmployeeRegistry.DAL.Models;
using EmployeeRegistry.DAL.Models.Interfaces;
using System.Linq.Expressions;

namespace EmployeeRegistry.BAL.Services.Interfaces
{
    public interface ILogicService
    {
        Task<TEntity> GetByIdAsync(long id);
        Task<IQueryable<TEntity>> Query(Expression<Func<TEntity, bool>> predicate);
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> UpdateAsync(TEntity entity);
        Task DeleteAsync(TEntity entity);
    }
}
