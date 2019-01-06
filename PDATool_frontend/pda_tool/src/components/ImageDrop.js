import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import CloudKey from '../helpers/keys.js';

//
const CLOUDINARY_UPLOAD_PRESET = CloudKey;
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/genocw/image/upload';

export default class ImageDrop extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
  };
}

onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

      upload.end((err, response) => {
        if (err) {
          console.error(err);
        }

        if (response.body.secure_url !== '') {
          const url = response.body.secure_url;
          console.log(url);
          this.props.handleUploadSuccess(url)

          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
      });
    }


  render() {
    return(
      <form>
        <div className="FileUpLoad">
            <Dropzone onDrop={this.onImageDrop.bind(this)} maxSize={8000000}   accept="image/*" multiple={false}>
            {({ getRootProps, getInputProps }) => (
                <div className="Dropper" {...getRootProps()}><input {...getInputProps()} /><p>Drop an image or click to select a file to upload.</p></div>
                  )}

                  </Dropzone>
        </div>
        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null:
        <div>
          <p>Your original file name: {this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} alt="" height="50%" width="50%"/>
        </div>}
    </div>
  </form>

  )
  }

}
