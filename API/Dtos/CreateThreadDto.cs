using System.ComponentModel.DataAnnotations;

namespace MessageAPI.Dtos
{
    public class CreateThreadDto
    {
        [Required]
        public string Title { get; set; } = string.Empty;
        public int UserId { get; set; }
    }
}
