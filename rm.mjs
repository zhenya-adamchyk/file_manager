import fs from 'fs';

export const rm = (data) => {
    const path = data[2]
    try {
        fs.unlinkSync(`${path}/${data[1][0]}`)
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}