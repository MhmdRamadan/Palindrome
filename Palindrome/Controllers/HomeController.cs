using Palindrome.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Palindrome.Controllers
{
    public class HomeController : Controller
    {
       
        public ActionResult Index()
        {
            return View();
        }
       
        public JsonResult CheckPalindrome(string word)
        {
            bool result = word.SequenceEqual(word.Reverse());
            return Json(result);
        }  

        public JsonResult CheckPalindromeSqlServer(string word)
        {
            using (PalindromeEntities palindromeEntities = new PalindromeEntities())
            {
                var check = palindromeEntities.Database.SqlQuery<string>("SELECT dbo.CheckPalindrome('"+ word + "')");
                string result = "";
                foreach(var item in check)
                {
                    result += item;
                }
                return Json(result);
            }  
        }
    }




}