import { createInterface } from 'readline'
import fs from 'fs'
import os from 'os'
import { normalize, isAbsolute, join } from 'path'
import { cat } from './cat.mjs'
import { add } from './add.mjs'
import { compress } from './compress.mjs'
import { cp } from './cp.mjs'
import { decompress } from './decompress.mjs'
import { hash } from './hash.mjs'
import { mv } from './mv.mjs'
import { osInfo } from './os.mjs'
import { rm } from './rm.mjs'
import { rn } from './rn.mjs'

let path = os.homedir()
console.log(path, 'PATH')
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
const userName = process.argv.slice(2).toString().split('=').pop()
console.log(`Welcome to the File Manager, ${userName}!`)

rl
.on('SIGINT', () => {
    close(rl)
})
.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}!`)
})
.on('line', line => {
    if (line === '.exit') {
        close(rl)
    } else if (line === 'ls') {
        getList()
    } else if (line === 'up') {
        upInPath()
    } else {
        doAction(getACtion(line))
    }
})

const doAction = data => {
    switch(data[0]) {
        case 'cat': cat(data)
        break
        case 'add': add(data)
        break
        case 'cp': cp(data)
        break
        case 'compress': compress(data)
        break
        case 'decompress': decompress(data)
        break
        case 'hash': hash(data)
        break
        case 'mv': mv(data)
        break
        case 'rm': rm(data)
        break
        case 'rn': rn(data)
        break
        case 'os': osInfo(data)
        break
        case 'cd': changeDir(data[1])
        break
        default : console.log('Invalid input')
    }
}

const getACtion = line => {
    let action
    let args
    if (line.indexOf('cat') === 0) {
        action = 'cat'
    } else if (line.indexOf('add') === 0) {
        action = 'add'
    } else if (line.indexOf('rn') === 0) {
        action = 'rn'
    } else if (line.indexOf('cp') === 0) {
        action = 'cp'
    } else if (line.indexOf('mv') === 0) {
        action = 'mv'
    } else if (line.indexOf('rm') === 0) {
        action = 'rm'
    } else if (line.indexOf('os') === 0) {
        action = 'os'
    } else if (line.indexOf('hash') === 0) {
        action = 'hash'
    } else if (line.indexOf('compress') === 0) {
        action = 'compress'
    } else if (line.indexOf('decompress') === 0) {
        action = 'decompress'
    } else if (line.indexOf('cd') === 0) {
        action = 'cd'
    }
    args = line.split(' ').slice(1)
    return [action ? action : 0, args, path]
}

const close = (stream) => {
    stream.question('Are you sure you want to exit? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.close()
          };
      });
    //   rl.close()
}

const getList = () => {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.log('operation failed')
        } else {
            files.forEach(file => console.log(file))
            console.log(`You are currently in ${path}`)
        }
    })
}

const upInPath = () => {
    if (path.indexOf('/') !== path.lastIndexOf('/')) {
        path = path.split('/').slice(0,-1).join('/');
    }
    console.log(`You are currently in ${path}`)
}

const changeDir = (args) => {
    try {
        path = isAbsolute(args[0]) ? normalize(args[0]) : join(path, normalize(args[0]))
        console.log(`You are currently in ${path}`)
    } catch (error) {
        console.log('operation failed')
    }
}