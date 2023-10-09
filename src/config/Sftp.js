import Client from 'ssh2-sftp-client'

const config = {
    host: '101.50.0.227',
    port: '22',
    username: 'promediaftp',
    password: 'promediaftp*123#',
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