﻿using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using PlatformFramework.EFCore.Identity.Abstrations;
using PlatformFramework.EFCore.Identity.Entities;
using PlatformFramework.EFCore.Identity.Models;
using PlatformFramework.Eventing;
using PlatformFramework.Eventing.Decorators.DatabaseRetry;
using PlatformFramework.Eventing.Decorators.Validation;
using System;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace PlatformFramework.EFCore.Identity.Features.Account
{
    public class LoginRequest : IRequest<LoginResponse>
    {
        public string UserName { get; set; }

        public string Password { get; set; }

        public bool RememberMe { get; set; }
    }
}
