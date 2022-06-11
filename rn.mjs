import fs from 'fs';

export const rn = (data) => {
    const path = data[2]
    try {
        fs.rename(`${path}/${data[1][0]}`, `${path}/${data[1][1]}`, () => {})
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}