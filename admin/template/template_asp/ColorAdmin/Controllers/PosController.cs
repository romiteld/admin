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
    public class PosController : Controller
    {

        public IActionResult CustomerOrder()
        {
            return View();
        }
        
        public IActionResult KitchenOrder()
        {
            return View();
        }
        
        public IActionResult CounterCheckout()
        {
            return View();
        }
        
        public IActionResult TableBooking()
        {
            return View();
        }
        
        public IActionResult MenuStock()
        {
            return View();
        }
    }
}
