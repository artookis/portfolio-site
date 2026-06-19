namespace csharp_site.Controllers;

using Microsoft.AspNetCore.Mvc;

public class HomeController : Controller
{
    public IActionResult Index() => View();
    public IActionResult About() => View();
    public IActionResult Projects() => View();
    public IActionResult Skills() => View();
    public IActionResult TicTacToe() => View();
    public IActionResult Contact() => View();
}
