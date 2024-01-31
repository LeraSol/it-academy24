const fs = require('fs-extra')

const file = '\\Users\\USER\\it-academy24\\homework_02\\one\\file.txt'
fs.ensureFileSync(file)

fs.ensureDirSync('two')

fs.moveSync('\\Users\\USER\\it-academy24\\homework_02\\one\\file.txt', '\\Users\\USER\\it-academy24\\homework_02\\two\\file.txt')

fs.ensureDirSync('three')

fs.copySync('\\Users\\USER\\it-academy24\\homework_02\\two\\file.txt', '\\Users\\USER\\it-academy24\\homework_02\\three\\new_file.txt')

fs.removeSync('\\Users\\USER\\it-academy24\\homework_02\\two\\file.txt')
fs.removeSync('\\Users\\USER\\it-academy24\\homework_02\\three\\new_file.txt')

fs.removeSync('\\Users\\USER\\it-academy24\\homework_02\\one')
fs.removeSync('\\Users\\USER\\it-academy24\\homework_02\\two')
fs.removeSync('\\Users\\USER\\it-academy24\\homework_02\\three')