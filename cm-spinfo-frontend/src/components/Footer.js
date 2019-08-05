import React, { useEffect } from 'react'
import './Footer.css'

const Footer = (props) => {

  useEffect(() => {
    // 初期状態では、レンダリングごとに呼ばれる
    // （初回とその後の毎回）
    console.log('Footer render!');

    // componentWillUnmountを実装したければ
    // ここから関数を返すと
    // Reactはアンマウントの直前にそれを呼び出す
    return () => console.log('unmounting...');
  })

  return (
    <div className="footerBar">
      <div className="footerBar-container">
          <p className="footerBar-container-copyright">{props.footer}</p>
      </div>
    </div>
  )
}

export default Footer
