#!/usr/bin/env node

import "zx/globals"
import { quotePowerShell } from "zx"
import ReadLineSync from "readline-sync"
import os from "os"

if (os.platform() === "win32") {
    $.quote = quotePowerShell
}

const projectName = ReadLineSync.question("> Project name: ").trim()
if (!projectName) {
    console.error("Please provide a project name.")
    process.exit()
}

await $`git clone --depth=1 https://github.com/mohiwalla/php-template ${projectName}`
cd(projectName)

await $`npm install`
await $`npm run dev`
