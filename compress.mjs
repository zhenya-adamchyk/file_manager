import zlib from 'zlib'
import fs from 'fs'
import { pipeline } from 'stream'

export const compress = (data) => {
    const path = data[2]
    try {
        const gzip = zlib.createBrotliCompress()
        const inp = fs.createReadStream(`${path}/${data[1][0]}`)
        const out = fs.createWriteStream(`${path}/${data[1][1]}.br`)
        pipeline(
            inp,
            gzip,
            out,
            err => err ? console.log('operation failed'): console.log(`You are currently in ${path}`)
        )
    } catch (error) {
        console.log('operation failed')
    }
}