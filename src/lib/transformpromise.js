/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
exports.transformPromise = (promise, errorExt) => {
    if (!promise || !Promise.prototype.isPrototypeOf(promise)) {
        return new Promise((resolve, reject) => {
            reject(new Error("requires promises as the param"));
        }).catch((err) => {
            return [err, null];
        });
    }
    return promise
        .then(function (data) { return [null, data]; })
        .catch(function (err) {
            if (errorExt) {
                Object.assign(err, errorExt);
            }
            return [err, undefined];
        });
};
