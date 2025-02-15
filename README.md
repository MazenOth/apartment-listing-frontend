
# 🏠 Apartment Listing Frontend  

## 📥 Installation & Deployment Guide  

### 🚀 Getting Started  

#### 1️⃣ Clone the Repository  

To set up the frontend separately, clone this repository:  

```sh
# Clone the frontend repository
git clone https://github.com/MazenOth/apartment-listing-frontend.git

# Navigate into the frontend directory
cd apartment-listing-frontend
```

Alternatively, if you want to use **Docker Compose for full deployment**, clone the deployment repository instead:  

```sh
git clone https://github.com/MazenOth/apartment-listing-deployment.git
cd apartment-listing-deployment
```

📌 _For Docker deployment, follow the instructions in the **apartment-listing-deployment** README._

---

### 🛠 Local Development Setup  

#### 2️⃣ Install Dependencies  

```sh
# Install all required dependencies
npm install
```

#### 3️⃣ Setup Environment Variables  

Create a `.env.local` file inside the frontend project and add:  

```sh
NEXT_PUBLIC_API_BASE_URL=http://localhost:3333
```

---

#### 4️⃣ Start the Frontend Locally  

```sh
npm run dev
```

By default, the frontend will be available at:  

🟢 **Frontend URL:** [http://localhost:3000](http://localhost:3000)

---

### 🛠 Troubleshooting  

#### 1️⃣ Backend API Not Accessible  

Ensure the backend is running locally at `http://localhost:3333`.  

```sh
# Check if backend is running
curl http://localhost:3333/health
```

#### 2️⃣ API Not Found in Frontend  

Ensure **NEXT_PUBLIC_API_BASE_URL** is correctly set:  

```sh
type .env.local
```

---

### 🔗 Full Deployment with Docker  

To deploy both frontend and backend using **Docker Compose**, follow the instructions in the [`apartment-listing-deployment`](https://github.com/MazenOth/apartment-listing-deployment) repository.

---

💡 _You're now ready to run the frontend locally or via Docker! 🚀_
