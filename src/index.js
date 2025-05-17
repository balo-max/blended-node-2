import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";


const bootstart = async () => {
    await initMongoConnection();
    setupServer();
};

bootstart();