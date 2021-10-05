const encoder = (input) => {
    const buff = Buffer.from(input, 'utf8');
    return buff.toString('base64');
};

const decoder = (input) => {
    const buff = Buffer.from(input, 'base64');
    return buff.toString('utf8');
};

module.exports = {
    encoder, decoder
}