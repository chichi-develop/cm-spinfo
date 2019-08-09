import React, { useState } from 'react'
import moment from 'moment'

import './MdmmAdd.css'

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  };
};


// 13   form: {
//   14   "md_idmdmm": "",
//   15   // "md_cdcstm": casual.integer(from = 20900001, to = 20999999) ,
//   16   "md_cdcstm": 33333333,
//   17   "md_nommrb": casual.integer(from = 1, to = 9),
//   18   "md_nmmmbr": casual.random_element(['問い合わせ', '要望', 'その他メモ']) ,
//   19   "md_txmdmm": casual.random_element(['セミナーメモ', '大会メモ', '物販メモ']) ,
//   20   "md_fganch": casual.integer(from = 1, to = 9),
//   21   "md_clmdmm": casual.random_element(['Red', 'Blue', 'Green']) ,
//   22   "md_ccdate": moment().format("YYYY-MM-DD"),
//   23   "md_ccadip": "127.0.0.1",
//   24   "md_ccmodu": "post-test",
//   25   //"createdAt": 2019-04-24,
//   26   //"createdAt": casual.date(format = 'YYYY-MM-DD'),
//   27   "createdAt": moment().format("YYYY-MM-DD"),
//   28   "updatedAt": moment().format("YYYY-MM-DD")
//   29   //"updatedAt": ""
//   30   }

export const MdmmAdd = (props) => {

  // 更新日付	メモ連番	メモ分類	内容	編集	削除
  console.log('here!!!!!!!!!!')
  console.log(props.mdmm)

  // TODO: 日付が正しく表示されない
  // const { value:mdIdmdmm, bind:bindMdIdmdmm, reset:resetMdIdmdmm } = useInput(props.mdmm.md_idmdmm)
  const { value:mdCdcstm, bind:bindMdCdcstm, reset:resetMdCdcstm } = useInput('44444444')
  // const { value:mdNommrb, bind:bindMdNommrb, reset:resetMdNommrb } = useInput(props.mdmm.md_nommrb)
  const { value:mdNmmmbr, bind:bindMdNmmmbr, reset:resetMdNmmmbr } = useInput('テスト')
  const { value:mdTxmdmm, bind:bindMdTxmdmm, reset:resetMdTxmdmm } = useInput('登録のテスト')
  const { value:mdFganch, bind:bindMdFganch, reset:resetMdFganch } = useInput('7')
  const { value:mdClmdmm, bind:bindMdClmdmm, reset:resetMdClmdmm } = useInput('Blue')
  const { value:mdCcdate, bind:bindMdCcdate, reset:resetMdCcdate } = useInput('2019/08/08')
  const { value:mdCcadip, bind:bindMdCcadip, reset:resetMdCcadip } = useInput('2019/08/08')
  const { value:mdCcmodu, bind:bindMdCcmodu, reset:resetMdCcmodu } = useInput('2019/08/08')
  // const { value:mdCreateAt, bind:bindCreateAt, reset:resetCreatedAt } = useInput(moment(props.mdmm.createAt).format('YYYY/MM/DD'))
  // const { value:mdUpdateAt, bind:bindUpdateAt, reset:resetUpdatedAt } = useInput(moment(props.mdmm.updateAt).format('YYYY/MM/DD'))

  const handleSubmit = (evt) => {
      evt.preventDefault();
      // alert(`Submitting Name ${mdIdmdmm} ${mdCdcstm} ${mdNommrb} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu} ${mdCreateAt} ${mdUpdateAt}`)
      alert(`Submitting Name ${mdCdcstm} ${mdNmmmbr} ${mdTxmdmm} ${mdFganch} ${mdClmdmm} ${mdCcdate} ${mdCcadip} ${mdCcmodu}`)
      // props.mdmmAdd({
      //   mdmm: {
      //     md_idmdmm: "0",
      //     md_cdcstm: mdCdcstm,
      //     // md_nommrb: mdNommrb,
      //     md_nommrb: "0",
      //     md_nmmmbr: mdNmmmbr,
      //     md_txmdmm: mdTxmdmm,
      //     md_fganch: mdFganch,
      //     md_clmdmm: mdClmdmm,
      //     // md_ccdate: moment().format("YYYY-MM-DD"),
      //     md_ccadip: mdCcadip,
      //     md_ccmodu: mdCcmodu,
      //     createdAt: "2019-05-24",
      //     updatedAt: "2019-05-24"
      //     // createdAt: moment().format("YYYY-MM-DD"),
      //     // updatedAt: moment().format("YYYY-MM-DD")
      //   }
      // })

      props.mdmmAdd({
        "md_idmdmm": "0",
        "md_cdcstm": mdCdcstm,
        "md_nommrb": "0",
        "md_nmmmbr": mdNmmmbr,
        "md_txmdmm": mdTxmdmm,
        "md_fganch": mdFganch,
        "md_clmdmm": mdClmdmm,
        "md_ccadip": mdCcadip,
        "md_ccmodu": mdCcmodu,
        "createdAt": "2019-05-24",
        "updatedAt": "2019-05-24"
    })

      // 動いたやつ
      // props.mdmmAdd({
      //     "md_idmdmm": "0",
      //     "md_cdcstm": "55555555",
      //     "md_nommrb": "0",
      //     "md_nmmmbr": "0",
      //     "md_txmdmm": "Api test",
      //     "md_fganch": "1",
      //     "md_clmdmm": "Green",
      //     "md_ccadip": "192.168.100.100",
      //     "md_ccmodu": "dredd",
      //     "createdAt": "2019-05-24",
      //     "updatedAt": "2019-05-24"
      // })

      // resetMdIdmdmm()
      resetMdCdcstm()
      // resetMdNommrb()
      resetMdNmmmbr()
      resetMdTxmdmm()
      resetMdFganch()
      resetMdClmdmm()
      resetMdCcdate()
      resetMdCcadip()
      resetMdCcmodu()
      // resetCreatedAt()
      // resetUpdatedAt()
  }
  return (
    // TODO: CSSちゃんと当てる
    // TODO: 更新前に確認メッセージ
    // TODO: 更新後に閉じる
    <div className="mdmmAdd-formContainer">
      <div className="mdmmAdd-form-close">
        {props.children}
      </div>
      <div className="mdmmAdd-form-header">
        新規メモ登録画面
      </div>
      <form className="mdmmAdd-form" onSubmit={handleSubmit}>
        <div className="mdmmAdd-form-data">
          {/* 更新日付	メモ連番	メモ分類	内容	編集	削除 */}
          {/* <label className="mdmmAdd-form-label">
            md_idmdmm:
            <input className="mdmmAdd-form-input" type="text" {...bindMdIdmdmm} />
          </label> */}
          <label className="mdmmAdd-form-label">
            md_cdcstm:
            <input className="mdmmAdd-form-input" type="text" {...bindMdCdcstm} />
          </label>
          {/* <label className="mdmmAdd-form-label">
            md_nommrb:
            <input className="mdmmAdd-form-input" type="text" {...bindMdNommrb} />
          </label> */}
          <label className="mdmmAdd-form-label">
            md_nmmmbr:
            <input className="mdmmAdd-form-input" type="text" {...bindMdNmmmbr} />
          </label>



          <label className="mdmmAdd-form-label">
            md_txmdmm:
            <input className="mdmmAdd-form-input" type="text" {...bindMdTxmdmm} />
          </label>

          <label className="mdmmAdd-form-label">
            md_fganch:
            <input className="mdmmAdd-form-input" type="text" {...bindMdFganch} />
          </label>

          <label className="mdmmAdd-form-label">
            md_clmdmm:
            <input className="mdmmAdd-form-input" type="text" {...bindMdClmdmm} />
          </label>

          <label className="mdmmAdd-form-label">
            md_ccdate:
            <input className="mdmmAdd-form-input" type="text" {...bindMdCcdate} />
          </label>

          <label className="mdmmAdd-form-label">
            md_ccadip:
            <input className="mdmmAdd-form-input" type="text" {...bindMdCcadip} />
          </label>

          <label className="mdmmAdd-form-label">
            md_ccmodu:
            <input className="mdmmAdd-form-input" type="text" {...bindMdCcmodu} />
          </label>

          {/* <label className="mdmmAdd-form-label">
            createAt:
            <input className="mdmmAdd-form-input" type="text" {...bindCreateAt} />
          </label>

          <label className="mdmmAdd-form-label">
            updateAt:
            <input className="mdmmAdd-form-input" type="text" {...bindUpdateAt} />
          </label> */}


        </div>
        {/* TODO: 更新後にモーダルを閉じる */}
        <div className="mdmmAdd-form-submit">
          <input className="mdmmAdd-form-submit" type="submit" value="登録する" />
        </div>
      </form>
    </div>
  )
}

export default MdmmAdd