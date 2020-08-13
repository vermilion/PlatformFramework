﻿using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PlatformFramework.EFCore.Abstractions;
using PlatformFramework.EFCore.Context;
using PlatformFramework.EFCore.Eventing.Requests;
using PlatformFramework.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PlatformFramework.EFCore.Eventing.Handlers
{
    /// <summary>
    /// Base class implementing Entity get paged collection scenario
    /// </summary>
    /// <typeparam name="TEntity">Entity type</typeparam>
    /// <typeparam name="TReadModel">Model type</typeparam>
    /// <typeparam name="TRequest">Unique request type</typeparam>
    public abstract class EntitySelectPagedHandlerBase<TEntity, TReadModel, TRequest> : EntityHandlerBase<TRequest, PagedModel<TReadModel>>
        where TEntity : class, IEntity, new()
        where TRequest : EntityPagedSelectRequest<TReadModel>
        where TReadModel : class
    {
        protected EntitySelectPagedHandlerBase(ILoggerFactory loggerFactory, IUnitOfWork unitOfWork, IMapper mapper)
            : base(loggerFactory, unitOfWork, mapper)
        {
        }

        public override async Task<PagedModel<TReadModel>> Handle(TRequest request, CancellationToken cancellationToken)
        {
            var query = UnitOfWork
                .Set<TEntity>()
                .AsNoTracking();

            // build query from filter
            query = BuildQuery(request, query);

            // get total for query
            var total = await QueryTotal(request, query, cancellationToken)
                .ConfigureAwait(false);

            // short circuit if total is zero
            if (total == 0)
                return new PagedModel<TReadModel>(new List<TReadModel>(), total);

            // page the query and convert to read model
            var result = await QueryPaged(request, query, cancellationToken)
                .ConfigureAwait(false);

            return new PagedModel<TReadModel>(result, total);
        }

        /// <summary>
        /// Override this for additional hook into entity query process
        /// </summary>
        /// <param name="request">Request instance</param>
        /// <param name="query">Query</param>
        /// <returns>Query</returns>
        protected virtual IQueryable<TEntity> BuildQuery(TRequest request, IQueryable<TEntity> query)
        {
            // build query from filter

            return query;
        }

        /// <summary>
        /// Override this for additional hook into entity total calculation process
        /// </summary>
        /// <param name="request">Request instance</param>
        /// <param name="query">Query</param>
        /// <param name="cancellationToken"><see cref="CancellationToken"/></param>
        /// <returns>Total count</returns>
        protected virtual async Task<int> QueryTotal(TRequest request, IQueryable<TEntity> query, CancellationToken cancellationToken)
        {
            return await query
                .CountAsync(cancellationToken)
                .ConfigureAwait(false);
        }

        /// <summary>
        /// Override this for custom projection logic
        /// </summary>
        /// <param name="request">Request instance</param>
        /// <param name="query">Query</param>
        /// <param name="cancellationToken"><see cref="CancellationToken"/></param>
        /// <returns>Projected collection</returns>
        protected virtual async Task<IEnumerable<TReadModel>> QueryPaged(TRequest request, IQueryable<TEntity> query, CancellationToken cancellationToken)
        {
            if (request.Offset.HasValue)
                query = query.Skip(request.Offset.Value);

            if (request.Limit.HasValue)
                query = query.Take(request.Limit.Value);

            return await query
                .ProjectTo<TReadModel>(Mapper.ConfigurationProvider)
                .ToListAsync(cancellationToken)
                .ConfigureAwait(false);
        }
    }

}