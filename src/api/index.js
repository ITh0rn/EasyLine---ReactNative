import axios from 'axios';

export const getAreaList = () => {
    const formdata = new FormData();
    formdata.append('id', 1);
    const URL = 'http://test.easyline.univaq.it/api/v1/providers';
    return axios.post(URL, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((response => response.data))
    .catch((err) => {
        console.log(err);
    });
};

export const getCourseList = (id) => {
    const formdata = new FormData();
    formdata.append('provid', id);
    formdata.append('id', '');
    const URL = 'http://test.easyline.univaq.it/api/v1/services';
    return axios.post(URL, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((response =>
        response.data
    ))
    .catch((err) => {
        console.log(err);
     });
};

export const getServicesList = (courseid, currProvider) => {
    const formdata = new FormData();
    formdata.append('id', courseid);
    formdata.append('provid', currProvider); //Questo andrà passato ma presso dallo store
    const URL = 'http://test.easyline.univaq.it/api/v1/services';
    return axios.post(URL, formdata, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((response => response))
    .catch((err) => {
        console.log(err);
    });
};

