# Project 3: Real-time Chat Application

## Overview
Build a real-time chat application that allows users to communicate instantly. This project focuses on WebSocket implementation, real-time data handling, and user authentication.

## Learning Objectives
- WebSocket communication
- User authentication
- Real-time data handling
- Online presence management
- Message persistence
- Security best practices

## Requirements

### Core Features
1. User registration and authentication
2. Real-time messaging
3. Online/offline status
4. Message history
5. User typing indicators
6. Read receipts
7. User profiles

### Technical Requirements
1. Use WebSocket (Socket.io) for real-time communication
2. Implement JWT authentication
3. Store messages in localStorage temporarily
4. Handle connection states
5. Implement error handling
6. Responsive design for mobile use

### Bonus Features
- File sharing
- Emoji support
- Message reactions
- Group chats
- Message search
- Message editing/deletion
- Voice messages

## Project Structure
```
chat-app/
├── index.html
├── css/
│   ├── style.css
│   ├── chat.css
│   └── auth.css
├── js/
│   ├── app.js
│   ├── socket.js
│   ├── auth.js
│   ├── chat.js
│   └── utils.js
├── assets/
│   ├── sounds/
│   └── icons/
└── README.md
```

## Assessment Criteria
1. Code Quality (30%)
   - WebSocket implementation
   - Authentication security
   - Error handling
   - Code organization

2. Functionality (40%)
   - Real-time capabilities
   - Message delivery
   - User experience
   - Connection handling

3. Design & UX (30%)
   - Chat interface
   - Message presentation
   - Responsive design
   - Interactive elements

## Timeline
- Week 1: Authentication and basic UI
- Week 2: WebSocket integration
- Week 3: Chat features and real-time updates
- Week 4: Polish and advanced features

## Resources
- [Socket.io Documentation](https://socket.io/docs/v4/)
- [JWT Authentication](https://jwt.io/introduction/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Chat UI Patterns](https://material.io/components/dialogs)

## Submission Guidelines
1. Create a GitHub repository
2. Deploy to a hosting service
3. Submit:
   - Repository URL
   - Live demo link
   - Test account credentials
4. Include README with:
   - Setup instructions
   - WebSocket server setup
   - Features list
   - Screenshots

## Notes
- Implement proper error handling
- Consider message queuing
- Handle offline scenarios
- Implement rate limiting
- Consider scalability
- Follow security best practices 