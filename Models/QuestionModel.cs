using System;

namespace Penny.Models 
{
  public class Question 
  {
    public Guid Id { set; get; }
    public string title { set; get; }
    public string body { set; get; }
    public int userId { set; get; }
    public DateTime createdAt { set; get; }
  }
}
