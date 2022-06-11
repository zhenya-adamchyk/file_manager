import fs from 'fs';

export const cp = (data) => {
    const path = data[2]
    try {
        fs.copyFile(`${path}/${data[1][0]}`, `${path}/${data[1][1]}`, (err) => {});
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}