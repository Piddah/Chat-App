using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MessageAPI.Models;
using MessageAPI.Data;

namespace MessageAPI.Controllers
{
    [Route("api/messages")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MessagesController(AppDbContext context)
        {
            _context = context;
        }

     
        [HttpGet("thread/{threadId}")]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages(int threadId)
        {
            var messages = await _context.Messages
                .Where(m => m.ThreadId == threadId)
                .Include(m => m.User)
                .ToListAsync();

            return Ok(messages);
        }


        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(Message message)
        {
         
            if (message.ThreadId == 0)
            {
                return BadRequest(new { error = "ThreadId is required" });
            }

            var thread = await _context.Threads.FindAsync(message.ThreadId);
            if (thread == null)
            {
                return BadRequest(new { error = "Thread not found" });
            }

            
            var user = await _context.Users.FindAsync(message.UserId);
            if (user == null)
            {
                return BadRequest(new { error = "User not found" });
            }

       
            _context.Messages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetMessages), new { id = message.Id }, message);
        }

    }
}
