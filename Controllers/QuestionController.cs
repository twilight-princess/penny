using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Penny.Models;
using System.Collections.Concurrent;

namespace Penny.Controllers
{
  [Route("api/[controller]")]
  public class QuestionController : Controller
  {
    public static ConcurrentBag<Question> questions = new ConcurrentBag<Question>{};
    
    [HttpGet()]
    public IEnumerable<Question> GetQuestions()
    {
      return questions;
    }

    [HttpPost()]
    public Question AddQuestion([FromBody]Question question) 
    {
      question.Id = Guid.NewGuid();
      question.createdAt = DateTime.Now;
      questions.Add(question);
      return question;
    }
  }
}