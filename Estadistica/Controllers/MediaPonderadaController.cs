using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Estadistica.Controllers
{
    public class MediaPonderadaController : Controller
    {
        public IActionResult MediaPonderada()
        {
            return View();
        }

        public IActionResult InformacionMediaPonderada()
        {
            return View();
        }
    }
}
