using Microsoft.AspNetCore.Mvc;
using MessageAPI.Data;
using MessageAPI.Models;
using Microsoft.EntityFrameworkCore;
using MessageAPI.Dtos;

namespace MessageAPI.Controllers
{
    [Route("api/threads")]
    [ApiController]
    public class ThreadsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ThreadsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Thread>>> GetThreads()
        {
            return await _context.Threads.Include(t => t.Messages).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Models.Thread>> CreateThread(CreateThreadDto createThreadDto)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Id == createThreadDto.UserId);
            if (!userExists)
            {
                return BadRequest(new { error = "User not found" });
            }

            var threadExists = await _context.Threads.AnyAsync(t => t.Title == createThreadDto.Title);
            if (threadExists)
            {
                return BadRequest(new { error = "Thread with this title already exists" });
            }

            var thread = new Models.Thread
            {
                Title = createThreadDto.Title,
                UserId = createThreadDto.UserId,
                CreatedAt = DateTime.UtcNow
            };

            _context.Threads.Add(thread);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetThreads), new { id = thread.Id }, thread);
        }
    }
}

