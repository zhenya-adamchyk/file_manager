import fs from 'fs';

export const add = (data) => {
    const path = data[2]

    try {
        fs.writeFile(`${path}/${data[1][0]}`,'', () => {});
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}