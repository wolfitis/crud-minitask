# Mini-task


### Run the app in terminal

Install packages 
```
$ npm install
```
Note: You will need to install MongoDB and start its local server, otherwise you can use cloud version of mongo i.e. Atlas (you will need to modify MONGO_URI accordingly)

Start the application server in development mode
```
$ npm run dev
```

Start the application server in production mode
```
$ npm start
```

### How to use
*Below examples assume you are using postman to interact with backend*

1. Fetch all records from database
> GET [http://localhost:3001/data](http://localhost:3001/data)

2. Create a new record
> POST [http://localhost:3001/data](http://localhost:3001/data)

Payload:
```
{
    "user": {
        "uname": "user-3",
        "project": [
            {
                "projectTitle": "project-1",
                "realData": {
                    "dataName": "real-datasets",
                    "dataPath": [
                        {
                            "dptitle": "real-data-1",
                            "dppath": "path/data.csv"
                        },
                        {
                            "dptitle": "real-data-2",
                            "dppath": "path/data2.csv"
                        }
                    ]
                },
                "models": [
                    {
                        "modelName": "model-1",
                        "parameters": "paremeters",
                        "parameterValues": {
                            "batchSize": 32,
                            "trainingCycles": 32
                        },
                        "syntheticData": "synthetic-data",
                        "syntheticDataValues": [
                            {
                                "sdtitle": "synthetic-data-1",
                                "sdpath": "path/synth.csv"
                            },
                            {
                                "sdtitle": "synthetic-data-2",
                                "sdpath": "path/synth2.csv"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

```

3. Update a record using ID, also used for adding/removing any sub fields 
> PUT [http://localhost:3001/data](http://localhost:3001/data)

Payload:
```
{
    "id": "616ba47eeb54a00b7984c4cd",
    "user": {
        "uname": "user-2",
        "project": [
            {
                "projectTitle": "project-1",
                "realData": {
                    "dataName": "real-datasets",
                    "dataPath": [
                        {
                            "dptitle": "real-data-1",
                            "dppath": "path/data.csv"
                        },
                        {
                            "dptitle": "real-data-2",
                            "dppath": "path/data2.csv"
                        }
                    ]
                },
                "models": [
                    {
                        "modelName": "model-1",
                        "parameters": "paremeters",
                        "parameterValues": {
                            "batchSize": 32,
                            "trainingCycles": 32
                        },
                        "syntheticData": "synthetic-data",
                        "syntheticDataValues": [
                            {
                                "sdtitle": "synthetic-data-1",
                                "sdpath": "path/synth.csv"
                            },
                            {
                                "sdtitle": "synthetic-data-2",
                                "sdpath": "path/synth2.csv"
                            }
                        ]
                    },
                    {
                        "modelName": "model-2",
                        "parameters": "paremeters",
                        "parameterValues": {
                            "batchSize": 16,
                            "trainingCycles": 16
                        },
                        "syntheticData": "synthetic-data",
                        "syntheticDataValues": [
                            {
                                "sdtitle": "synthetic-data-1",
                                "sdpath": "path/synth.csv"
                            },
                            {
                                "sdtitle": "synthetic-data-2",
                                "sdpath": "path/synth2.csv"
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```
4. Delete a record using ID
> DELETE [http://localhost:3001/data](http://localhost:3001/data)

Payload:
```
{
    "id":"616ba5118627e5f84f2a4064"
}
```

### Lint your code

Format the code
```
$ npm format
```