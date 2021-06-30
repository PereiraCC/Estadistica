using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estadistica.Controllers
{
    public class RecorridoController : Controller
    {
        public IActionResult Recorrido()
        {
            return View();
        }

        public IActionResult InformacionRecorrido()
        {
            return View();
        }
    }
}
