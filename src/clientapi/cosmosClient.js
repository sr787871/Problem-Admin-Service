const {CosmosClient} = require('@azure/cosmos');

// connecting our code to connect the cosmos db
const endpoint = "" //url
const key = "" //primary key
const databaseId = "" // database id in which we want to store these logs - basically database name
const containerId = "" // container id (Table) in which we want to store these logs - basically container name

const client = CosmosClient({endpoint,key});
const database = client.database(databaseId);
const container = database.container(containerId);

//add function
async function logToCosmosDB(level,message){
    try {
        //structure of the document we want to store in the cosmos DB
        await container.item.create({
            timeStamp : new Date().toISOString(),
            level:level,
            message : message,
        });
        console.log("Log entry is created in cosmos DB")
    } catch (error) {
        console.log("Error logging to cosmos DB")
    }
}

module.exports = {logToCosmosDB};