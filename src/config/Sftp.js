import Client from 'ssh2-sftp-client'

const config = {
    host: '',
    port: '',
    username: '',
    password: '',
    forceIPv4: false,
    forceIPv6: false,
    readyTimeout: 60000
}

export const sftpDir = {
    files: '/home/promediaftp/ftp/files'
}

const sftp = new Client();

sftp.connect(config)
    .then(() => {
        console.log('Connected to the SFTP server')
    })
    .catch(err => {
        console.log('\n\nError when connecting to SFTP server', err)
    })

export default sftp