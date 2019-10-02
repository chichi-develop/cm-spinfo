import axios from 'axios';

// const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_mdmms';
const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_aclgs';
export async function getAclgsFactory(cdcstm: string) {
  try {
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}
