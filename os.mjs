import * as os from 'os'

export const osInfo = (data) => {
    const path = data[2]
    try {
        if (data[1].find(operation => operation === '--EOL')) {
            console.log(JSON.stringify(os.EOL))
            console.log(`You are currently in ${path}`)
        } else if (data[1].find(operation => operation === '--cpus')) {
            console.log(`${os.cpus().length} amount`)
            os.cpus().forEach(cpu => console.log(`Model ${cpu.model} Speed ${cpu.speed}`))
            console.log(`You are currently in ${path}`)
        } else if (data[1].find(operation => operation === '--homedir')) {
            console.log(os.homedir())
            console.log(`You are currently in ${path}`)
        } else if (data[1].find(operation => operation === '--username')) {
            console.log(os.userInfo().username)
            console.log(`You are currently in ${path}`)
        } else if (data[1].find(operation => operation === '--architecture')) {
            console.log(os.arch())
            console.log(`You are currently in ${path}`)
        } else {
            throw new Error()
        }
    } catch (error) {
        console.log('operation failed')
    }
}