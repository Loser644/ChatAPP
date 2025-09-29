# 🌐 CodeCove — An Anonymous Developer Social Media Platform

**CodeCove** is a modern, anonymous social media platform **built by developers, for developers**.  
Here, you can connect with people **without revealing your real identity**. Share code snippets, post images of your work, comment on posts, follow other devs, chat, and stay updated with the latest **tech, AI, and software revolutions**.

---

## 🧑‍💻 Live Demo

🔗 [CodeCove (Demo Link Coming Soon)](#)

---

## ✨ Features

### 👩‍💻 For Users:
- ✅ **Anonymous Authentication** (no real identity needed)  
- 📸 **Post Code Images** and snippets  
- 💬 **Comment & Discuss** with other devs  
- 👥 **Follow & Connect** with like-minded developers  
- 📰 **News Section** for global tech & AI updates  
- 📨 **One-on-One Chat** for deeper conversations  

### 🛡️ For Admins:
- 🕵️ **Moderate Posts & Comments**  
- 🚫 **Report & Handle** harmful/inappropriate content  
- 🔒 **Secure Environment** for safe anonymous interaction  

---

## 🔧 Tech Stack

| Technology           | Description                              |
|----------------------|------------------------------------------|
| React                | Frontend framework                       |
| Vite                 | Dev tooling for React                    |
| Tailwind             | Styling for modern UI/UX                 |
| Node.js              | Backend services (Auth, gateway, APIs)   |
| **Python**           | FastAPI for chat/message service         |
| MongoDB              | Messages & feed storage                  |
| MySQL                | User accounts (auth)                     |
| Socket.IO            | Realtime messaging gateway               |
| Netlify / Hostinger  | Hosting & Deployment                     |

---

---
## 📂 Project Structure

```bash
client/                   # Vite + React frontend
├── index.html
├── vite.config.js
└── src/

server/                   # Node.js auth + gateway (Express, Socket.IO)

python-chat/              # FastAPI chat service (MongoDB)

mysql/                    # SQL schema / migrations
└── init.sql

.env                      # Environment variables (local)
package.json              # Root scripts & deps
README.md


## ⚙️ Environment Variables

Create a `.env` file in the root and add your secrets (example keys):
 mySQL_host=YOUR_HOST(localhost)
 mySQL_user=YOUR_SQL-USERNAME
 mySQL_password=YOUR PASSWORD
 mySQL_limit=10 **(OPTIONAL)**
 mySQL_DB=YOUR_DATABASENAME
 mail_user=YOUR EMAIL **(FROM WHICH YOU WANT TO SEND THE EMAIL)**
 mail_pass=YOUR PASSWORD **(NOT THE GOOGLE ACCOUNT PASSWORD)**

 ---