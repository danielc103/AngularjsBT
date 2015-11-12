using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularBT.Startup))]
namespace AngularBT
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
