using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estadistica.Controllers
{
    public class MediaController : Controller
    {
        public IActionResult Media()
        {
            return View();
        }

        public IActionResult InformacionMedia()
        {
            return View();
        }
    }
}
