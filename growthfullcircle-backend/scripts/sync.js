import sequelize from "../config/database.js";
import Contact from "../models/Contact.js";
import Subscription from "../models/Subscription.js";

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Database synced");
        process.exit(0);
    } catch (err) {
        console.error("Database sync failed:", err);
        process.exit(1);
    }
})();