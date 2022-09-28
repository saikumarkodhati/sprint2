using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DigitalBook.Models
{
    public class createbookmodel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Category { get; set; }
        public IFormFile Image { get; set; }
        public string Price { get; set; }
        public string Publisher { get; set; }
        public string Active { get; set; }
        public string Content { get; set; }
        public string Author { get; set; }
        public string ReleasedDate { get; set; }
    }
}
