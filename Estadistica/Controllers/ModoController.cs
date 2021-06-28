using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estadistica.Controllers
{
    public class ModoController : Controller
    {
        public IActionResult Modo()
        {
            return View();
        }

        public IActionResult InformacionModo()
        {
            return View();
        }
    }
}
