using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ColorAdmin.Models;

namespace ColorAdmin.Controllers
{
    public class GalleryController : Controller
    {

        public IActionResult GalleryV1()
        {
            return View();
        }
        
        public IActionResult GalleryV2()
        {
            return View();
        }
    }
}
