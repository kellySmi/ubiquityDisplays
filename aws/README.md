# AWS implementation
### This is an AWS implementation of ubiquity displays
This high level architecture consists of an Amazon API gateway, AWS Lambda, Amazon S3, and Amazon DynamoDB.
Our static content (React Web App) is stored in an S3 bucket served up to the client when called from the API gateway.
The client app calls the API gateway which call the Lambdas and retrieve, and respond with the display data stored in S3.


