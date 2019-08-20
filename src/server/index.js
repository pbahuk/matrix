const path = require("path");
const express = require("express");
const routes = require("./routes");

const app = express();
const DIST_DIR = path.join(__dirname, "../../dist");

if (process.env.NODE_ENV === "development") {
  require("./utils/devSetup")(app);
} else {
  app.use(express.static(DIST_DIR));
}

// TODO: Once testing on Production Server.
app.use("/<prod_path_for_assets>", express.static(DIST_DIR));

app.use(routes);

/**
 * Starting the server: DEFAULT: 8000
 */
const PORT = process.env.NODE_PORT || 8000;
let server = app.listen(PORT, () => {
  console.log("Node Server started on PORT:", PORT);
  console.log("Press Ctrl + C to quit");
});

/**
 * Error handling for the process suddenly termination.
 */
server.on("error", function(err) {
  console.error(
    "Server start failed: %s port: %s, env: %s, version: %s",
    err,
    nodePort,
    app.get("env"),
    process.version
  );
  process.exit(1);
});

process.on("uncaughtException", function(err) {
  console.error("[ERROR] Caught exception: " + err);
});

process.on("SIGTERM", function() {
  console.error(
    "Process termination request received. Stoping taking new requests."
  );
  server.close(function(err) {
    console.log("Finished all pending requests. Terminating now.");
    process.exit(0);
  });
});
