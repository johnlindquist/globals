import * as all from "execa"

export let execa = all.execa
global.execa = execa

export let execaSync = all.execaSync
global.execaSync = execaSync

export let execaCommand = all.execaCommand
global.execaCommand = execaCommand
global.exec = (command, options = { shell: true, cwd: process.cwd() }) => {
  return execaCommand(command, options)
}

export let execaCommandSync = all.execaCommandSync
global.execaCommandSync = execaCommandSync

export let execaNode = all.execaNode
global.execaNode = execaNode
