//require('dotenv').config();

const imgPreview = document.getElementById('img-preview');
const fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "elx1lxk9")
    
//process.env.CLOUDINARY_UPLOAD_PRESET
//process.env.CLOUDINARY_URL

    axios({
        url: "https://api.cloudinary.com/v1_1/ethyl0022/upload",
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    })
        .then(res => {
            console.log(res);
            imgPreview.src = res.data.secure_url;

        })
        .catch(err => {
            console.log(err);
        })

});