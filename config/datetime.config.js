module.exports = {

    getDateUnixTimestamp() {
        return Math.floor(Date.now() / 1000);
    },

    convertTimestampToIsoDate(timestamp) {
        return new Date(timestamp * 1000).toISOString();
    }
}