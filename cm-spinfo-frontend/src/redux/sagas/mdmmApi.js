import axios from 'axios'

const baseUrlMdmms = 'http://localhost:8340/api/v1/cm_mdmms'
export async function getMdmmsFactory(cdcstm) {
  try {
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function deleteMdmmsFactory(cdcstm, nommrb) {
  try {
    await axios.delete(`${baseUrlMdmms}/${cdcstm}/${nommrb}`)
    return
  } catch (error) {
    throw error
  }
}

export async function editMdmmsFactory(cdcstm, nommrb, mdmm) {
  try {
    await axios.put(`${baseUrlMdmms}/${cdcstm}/${nommrb}`, mdmm)
    const res = await axios.get(`${baseUrlMdmms}/${cdcstm}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export async function addMdmmsFactory(mdmm) {
  try {
    await axios.post(`${baseUrlMdmms}`, mdmm)
    const res = await axios.get(`${baseUrlMdmms}/${mdmm.md_cdcstm}`)
    return res.data
  } catch (error) {
    throw error
  }
}