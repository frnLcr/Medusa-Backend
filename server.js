const { exec } = require("child_process");

const PORT = process.env.PORT || 9000; // 🔥 Usa el puerto de Render o el default 9000
console.log(`🚀 Starting Medusa backend on port ${PORT}`);

exec(`medusa start -p ${PORT}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error starting Medusa: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ stderr: ${stderr}`);
    return;
  }
  console.log(stdout);
});