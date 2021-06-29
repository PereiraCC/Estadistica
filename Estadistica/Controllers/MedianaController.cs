using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estadistica.Controllers
{
    public class MedianaController : Controller
    {
        public IActionResult Mediana()
        {
            return View();
        }

        public IActionResult InformacionMediana()
        {
            return View();
        }
    }
}
