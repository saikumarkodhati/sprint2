using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DigitalBook.Models;
using System.IO;
using System.Net.Http.Headers;

namespace DigitalBook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreateBookController : ControllerBase
    {
        BooksDBContext db = new BooksDBContext();
        [HttpGet]
        public IEnumerable<CreateBook> Get()
        {

            List<CreateBook> createBooks = db.CreateBooks.ToList();

            return createBooks.ToList();
        }
        [HttpPost, DisableRequestSizeLimit]
        [Route("Insert")]
        public IActionResult Post([FromForm] createbookmodel Cbook)
        {
            var file = Request.Form.Files[0];
            var foldername = "Images";
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(),foldername);

            if(file.Length>0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave,fileName);
                var dbPath = Path.Combine(foldername,fileName);
                using (var stream = new FileStream(fullPath,FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                CreateBook createBook = new CreateBook();

                createBook.Title = Cbook.Title;
                createBook.Category = Cbook.Category;
                // createbook.Image = createbook.Title;
                createBook.Price = Cbook.Price;
                createBook.Publisher = Cbook.Publisher;
                createBook.Active = Cbook.Active;
                createBook.Content = Cbook.Content;
                createBook.Author = Cbook.Author;
                createBook.ReleasedDate = Cbook.ReleasedDate;
                createBook.Image = dbPath;

                db.CreateBooks.Add(createBook);
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPut, DisableRequestSizeLimit]
        public IActionResult Put([FromForm] createbookmodel Cbook)
        {

            var file = Request.Form.Files[0];
            var foldername = "Images";
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), foldername);

            if (file.Length > 0)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(foldername, fileName);
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }
                CreateBook createBook = new CreateBook();

                createBook.Title = Cbook.Title;
                createBook.Category = Cbook.Category;
                // createbook.Image = createbook.Title;
                createBook.Price = Cbook.Price;
                createBook.Publisher = Cbook.Publisher;
                createBook.Active = Cbook.Active;
                createBook.Content = Cbook.Content;
                createBook.Author = Cbook.Author;
                createBook.ReleasedDate = Cbook.ReleasedDate;
                createBook.Image = dbPath;

                db.CreateBooks.Add(createBook);
                db.Entry(createBook).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                var response = new { Status = "Success" };
                return Ok(response);
            }
            else
            {
                return BadRequest();
            }
          
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var data = db.CreateBooks.Where(x=>x.Id == id).FirstOrDefault();
            db.CreateBooks.Remove(data);
            db.SaveChanges();
            var response = new { Status = "Success" };
            return Ok(response);
        }

        //[HttpPost]
        //[Route("Search")]
        //public IActionResult Post(string author)
        //{
        //    if (author == null)
        //    {
        //        return BadRequest("Invalid search options");
        //    }

        //    var searchResult = db.SearchBooks.Where(x => x.Author == author).FirstOrDefault();

        //    return Ok(searchResult);
        //}
    }
}
