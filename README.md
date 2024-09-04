<h1 style="text-align: center;">Basic Blog CARD App</h1>
<p style="font-size: 16px;">This Basic Blog app is built using Node.js, Express, Mongoose, and EJS. It provides a simple platform for creating, reading, updating, and deleting blog posts. Please note that this version does not include login authentication, so all users can access and modify content without restrictions.</p>

## Install Node Modules

Run the following command in your terminal to install the required modules:

```bash
npm install express mongoose ejs dotenv
```

## Install Nodemon

Install Nodemon either locally or globally to automatically restart the server on file changes:

1. Run
   `npm install -g nodemon` to install globally.
2. Alternatively, run `npm install nodemon` to install locally.

## Mongoose Configuration

1. Create a new `.env` file in your project root directory.
2. Replace `your.connection.string` with your MongoDB connection string in the following line:

   ```bash
   MONGO_URI=your.connection.string
   ```

3. Save this code in your `.env` file.

## Connect to the Database and Run the Server

Run the server with Nodemon:

```bash
nodemon app
```

## Access the Application

Open your web browser and navigate to:

localhost:3000
