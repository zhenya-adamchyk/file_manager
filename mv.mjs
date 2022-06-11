import fs from 'fs';

export const mv = (data) => {
    const path = data[2]
    try {
        fs.copyFile(`${path}/${data[1][0]}`, `${path}/${data[1][1]}`, (err) => {})
        fs.unlinkSync(`${path}/${data[1][0]}`)
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}