import axios from 'axios';
import { Aclgs } from '../actions/models';

// const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_mdmms';
const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_aclgs' as const;
export async function getAclgsFactory(cdcstm: string) {
  try {
    const res = await axios.get<Aclgs>(`${baseUrlMdmms}/${cdcstm}`);

    return res.data;
  } catch (res) {
    const error = res.response;
    throw error;
  }
}
