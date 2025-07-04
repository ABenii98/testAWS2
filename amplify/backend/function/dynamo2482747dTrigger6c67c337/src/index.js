exports.handler = async (event) => {
    const { name, type, maker, price, year, condition, photoKey } = JSON.parse(event.body);

    // Validate required fields
    if (!name || !type || !maker || !price || !year || !condition || !photoKey) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Missing required fields' }),
        };
    }

    const params = {
        TableName: process.env.TABLE_NAME, // Set this in Lambda environment variables
        Item: {
            collectibleId: Date.now().toString(), // Use timestamp as a simple ID
            name,
            type,
            maker,
            price: parseFloat(price),
            year: parseInt(year),
            condition,
            photoKey,
            createdAt: new Date().toISOString(),
        },
    };

    try {
        await dynamodb.put(params).promise();
        console.log('Collectible metadata saved to DynamoDB:', params.Item);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Collectible saved successfully', collectibleId: params.Item.collectibleId }),
        };
    } catch (error) {
        console.error('Error saving to DynamoDB:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Failed to save collectible', error: error.message }),
        };
    }
};