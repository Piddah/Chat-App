﻿using Microsoft.AspNetCore.SignalR;

namespace MessageAPI.Hubs
{
    public class MessageHub : Hub
    {
        public async Task SendMessage(string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
 
}
