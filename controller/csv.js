import cron from "node-cron"
import {createObjectCsvWriter} from "csv-writer"
import db from "../models/index.js"

export const process = async (req, res) => {
    try {
      cron.schedule("* * * * * *", () => {
          processCSV();
      });
        res.status(200).json({ message: "CSV processing scheduled every 15 minutes" });
    } catch (err) {
       res
         .status(500)
         .json({ message: "An error occurred", error: err.message }); 
  }
};


const processCSV = async () => {
  try {
    
    const users = await db.user.findAll();

    
    console.log('Users fetched:', users);

 
    const csvWriter = createObjectCsvWriter({
      path: `users_${Date.now()}.csv`,
      header: [
        { id: 'id', title: 'ID' },
        { id: 'name', title: 'Name' },
        { id: 'email', title: 'Email' },
        { id: 'password', title: 'Password' }
      ]
    });

    // Write records to CSV file
    await csvWriter.writeRecords(users.map(user => user.toJSON()));
    console.log('CSV file written successfully');
  } catch (err) {
    console.error('Error fetching or writing CSV file:', err);
  }
};

export { processCSV };
