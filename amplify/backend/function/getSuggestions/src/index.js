/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');
const s3 = new aws.S3(); // Pass in opts to S3 if necessary

exports.handler = async (event) => {
    var params = { 
        Bucket: 'weatherycitylist',
        Key: 'SmallCityList.json',
    };
    const data = await s3.getObject(params).promise();
    const response = {
        statusCode: 200,
        body: JSON.parse(data.Body)
    };
    return response;
};
