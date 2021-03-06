using System;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Ardalis.GuardClauses;
using Microsoft.Extensions.Caching.Distributed;
using PlatformFramework.Abstractions;

namespace PlatformFramework.Caching
{
    /// <summary>
    /// Encapsulates <see cref="IDistributedCache"/> functionality.
    /// </summary>
    internal sealed class MemoryCacheService : ICacheService
    {
        private readonly IDistributedCache _distributedCache;

        /// <summary>
        ///  Encapsulates <see cref="IDistributedCache"/> functionality.
        /// </summary>
        public MemoryCacheService(IDistributedCache distributedCache)
        {
            _distributedCache = Guard.Against.Null(distributedCache, nameof(distributedCache));
        }

        /// <summary>
        /// Gets the key's value from the cache.
        /// </summary>
        public async Task<T?> Get<T>(string cacheKey, CancellationToken cancellationToken = default)
            where T : class
        {
            var bytes = await _distributedCache.GetAsync(cacheKey, cancellationToken);
            var result = default(T);

            if (bytes == null)
                return result;

            return JsonSerializer.Deserialize<T>(Encoding.UTF8.GetString(bytes));
        }

        /// <summary>
        /// Adds a key-value to the cache.
        /// </summary>
        public Task Add<T>(string cacheKey, T value, TimeSpan slidingExpiration, CancellationToken cancellationToken = default)
            where T : class
        {
            var bytes = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(value));

            var options = new DistributedCacheEntryOptions
            {
                SlidingExpiration = slidingExpiration
            };

            return _distributedCache.SetAsync(cacheKey, bytes, options, cancellationToken);
        }

        /// <summary>
        /// A thread-safe way of working with memory cache. First tries to get the key's value from the cache.
        /// Otherwise it will use the factory method to get the value and then inserts it.
        /// </summary>
        public async Task<T> GetOrAdd<T>(string cacheKey, Func<Task<T>> factory, TimeSpan slidingExpiration, CancellationToken cancellationToken = default)
            where T : class
        {
            // locks get and set internally
            var result = await Get<T>(cacheKey, cancellationToken);

            if (result != null)
                return result;

            result = await factory();
            await Add(cacheKey, result, slidingExpiration, cancellationToken);

            return result;
        }

        /// <summary>
        /// Removes the object associated with the given key.
        /// </summary>
        public Task Remove(string cacheKey)
        {
            return _distributedCache.RemoveAsync(cacheKey);
        }
    }
}