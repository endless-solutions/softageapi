/**
 * SoftageController
 *
 * @description :: Server-side logic for managing softages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ocr:function(req,res){
		req.file('origImage').upload({
			maxBytes: 10000000
		},function whenDone(err,uploadedFiles){
			if (err) {
     	 			return res.negotiate(err);
    			}

    			// If no files were uploaded, respond with an error.
    			if (uploadedFiles.length === 0){
      				return res.badRequest('No file was uploaded');
			}
			var path = require('path');
			var file_ext = path.extname(uploadedFiles[0].fd);
			var file_basename = path.basename(uploadedFiles[0].fd,file_ext);
			//res.json({"name":file_basename,"ext":file_ext});
			res.send("<xml></xml>");
		});
		//res.json({"Name":"HarshaIdiotNahi Hai, warna mera katal ho jaayega, bachao mujhe"})
	}	
};

