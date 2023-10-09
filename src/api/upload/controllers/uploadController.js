import sftp, { sftpDir } from '../../../config/Sftp';
import fs from 'fs';

exports.uploadFile = async (req, res) => {
    try {
        let localFile = req.file.path;
        let remoteFile = `${sftpDir.files}/${req.file.filename}`;

        await sftp.fastPut(localFile, remoteFile);
        fs.unlinkSync(req.file.path);
        
        res.status(200).json({
            status: 200,
            message: 'success',
            result: []
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error',
            result: 'internal server error'
        })
    }
}