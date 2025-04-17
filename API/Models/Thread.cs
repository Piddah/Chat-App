using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MessageAPI.Models
{
    public class Thread
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Title { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [ForeignKey("User")]
        public int UserId { get; set; }
        public User? User { get; set; }

        public ICollection<Message>? Messages { get; set; }
    }
}
