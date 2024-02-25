using System;
using ColorAdmin.Areas.Identity.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(ColorAdmin.Areas.Identity.IdentityHostingStartup))]
namespace ColorAdmin.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
            		services.AddDbContext<ColorAdminIdentityDbContext>(options =>
										options.UseSqlite(
												context.Configuration.GetConnectionString("DefaultConnection")));
                //services.AddDbContext<ColorAdminIdentityDbContext>(options =>
                //    options.UseSqlServer(
                //        context.Configuration.GetConnectionString("ColorAdminIdentityDbContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<ColorAdminIdentityDbContext>();
            });
        }
    }
}