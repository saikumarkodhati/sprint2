using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DigitalBook.Models;
using Microsoft.AspNetCore.Authorization;

namespace DigitalBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        BooksDBContext db = new BooksDBContext();

        [HttpGet]
        public IEnumerable<CreateBook> Get()
        {
            List<CreateBook> createBooks = db.CreateBooks.ToList();

            return createBooks.ToList();
        }
        [HttpPost]
        public IActionResult Post([FromBody] SearchBook searchbook)
        {
            db.SearchBooks.Add(searchbook);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpPut]
        public IActionResult Put(SearchBook searchbook)
        {
            db.SearchBooks.Add(searchbook);
            db.Entry(searchbook).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.SearchBooks.Where(x => x.Id == id).FirstOrDefault();
            db.SearchBooks.Remove(data);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        [HttpPost]
        [Route("Search")]
        public IEnumerable<CreateBook> Post(string author,string title,string publisher,string releasedate)
        {
            List<CreateBook> searchResult = db.CreateBooks.Where(x => x.Author == author || x.Title ==title || x.Publisher == publisher || x.ReleasedDate == releasedate).ToList();
            //
            //var balance1 = (from a in db.SearchBooks
            //                join c in db.CreateBooks on a.Id equals c.Id into lg
            //                from x in lg.DefaultIfEmpty()
            //                select new
            //                {
            //                    a.Title,
            //                    a.Author,
            //                    a.Publisher,
            //                    a.ReleasedDate,
            //                    x.Category,
            //                    x.Price,
            //                    x.Active,
            //                    x.Content,
            //                    x.Image
            //                }).Where(x => x.Author == author || x.Title == title || x.Publisher == publisher || x.ReleasedDate == releasedate).ToList();



            return searchResult;
        }

        // Create Book API
    }
}
