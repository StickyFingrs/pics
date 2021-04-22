import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1HPbE6NMioA_EPdmZ3DT96cCRp7a3Ghc5gXKYu95hSw'
    }
});