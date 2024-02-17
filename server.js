const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const sequelize = require("./db");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const cors = require('cors');
app.use(cors());

app.get('/api/drawings/latest', async (req, res) => {
  try {
    // Assuming you have a Drawing model set up with Sequelize
    const latestDrawing = await Drawing.findOne({ order: [['createdAt', 'DESC']] });
    if (latestDrawing) {
      res.json(latestDrawing);
    } else {
      res.status(404).send('No drawings found');
    }
  } catch (error) {
    console.error('Failed to fetch latest drawing:', error);
    res.status(500).send('Error fetching latest drawing');
  }
});


app.use(express.json());
app.use("/api/users", userRoutes);


io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("draw", (data) => {
    // Emit drawing data to all users except the one who drew it
    socket.broadcast.emit("draw", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
