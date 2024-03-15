export function removeProperties(obj, propertiesToRemove) {
    for (const property of propertiesToRemove) {
        if (obj.hasOwnProperty(property)) {
            delete obj[property];
        }
    }
}