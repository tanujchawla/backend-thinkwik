const DateTime = require('./datetime.config');

module.exports = {
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
        currentTime: () => DateTime.getDateUnixTimestamp()
    },
    toJSON : {
        transform : function(doc, ret) {
            const id = ret._id;
            delete ret._id;
            return {
                id,
                ...ret,
                created_at : ret.created_at ? DateTime.convertTimestampToIsoDate(ret.created_at) : undefined,
                updated_at : ret.updated_at ? DateTime.convertTimestampToIsoDate(ret.updated_at) : undefined
            }
        }
    }
};