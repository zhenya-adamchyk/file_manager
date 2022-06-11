import fs from 'fs'

export const cat = (data) => {
    const path = data[2]
    try {
        fs.createReadStream(`${path}/${data[1][0]}`, 'utf8').on("data", (data) => {
            process.stdout.write(data + '\n')
            console.log(`You are currently in ${path}`)
        }).on('error', () => {
            console.log('operation failed')
        })
    } catch (error) {
        console.log('operation failed')
    }
}