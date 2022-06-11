import fs from 'fs';
const {createHash} = await import('node:crypto');

export const hash = (data) => {
    const path = data[2]
    try {
        const fileContent = fs.readFileSync(`${path}/${data[1][0]}`, 'utf8', () => {});
        process.stdout.write(createHash('sha256').update(fileContent).digest('hex') + '\n')
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}
