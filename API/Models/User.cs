using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MessageAPI.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Username { get; set; }

        public ICollection<Thread>? Threads { get; set; }
        public ICollection<Message>? Messages { get; set; }
    }
}
