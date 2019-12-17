export type Mdmm = {
  md_idmdmm: number; // 'ID'
  md_cdcstm: string; // '顧客コード'
  md_nommrb: number; // '窓口メモ連番'
  md_nmmmbr: string; // '窓口メモ分類名'
  md_txmdmm: string; // '顧客メモ'
  md_fganch: number | null; // 'アンカーフラグ'
  md_clmdmm: string | null; // '窓口メモカラー'
  md_ccadip: string; // '更新IPアドレス'
  md_ccmodu: string; // '更新モジュール'
  createdAt: string; // '作成日'
  updatedAt: string; // '更新日'
};

export type Mdmms = Mdmm[];

export type Aclg = { 
  al_idactv: string; // 'ID' 
  al_nmactv: string; // 'アクティビティ区分名'
  al_noactv: number; // 'アクティビティ番号'
  al_dtactv: string; // 'アクティビティ日付'
  al_cdsqsk: string; // '請求先読者番号'
  al_nmsqsk: string; // '請求先顧客名'
  al_nmsqbu: string; // '請求先部署名'
  al_nmsqtn: string; // '請求先担当名'
  al_txactv: string; // 'アクティビティ内容'
  al_susury: number; // '数量'
  al_kgtnka: number; // '単価'
  al_kggoke: number; // '合計金額'
  al_txbiko: string; // '備考'
  al_cdcstm: string; // '読者番号'
  al_nmcstm: string; // '顧客名'
  al_nmtnbu: string; // '部署名'
  al_nmtnto: string; // '担当者名'
  createdAt: string; // '作成日'
  updatedAt: string; // '更新日'
};

export type Aclgs = Aclg[];

export type Urnk  = { 
  vun_cdsqsk: number; // '顧客ナンバー'
  vun_nmsqsk: string; // '顧客名'
  vun_nosqsy: number; // '請求ナンバー'
  vun_dtsyri: string; // '処理日'
  vun_tmsyri: string; // '処理時間'
  vun_nmsyri: string; // '処理名'
  vun_kbsrsy: string; // '処理詳細'
  vun_nosyri: string; // '処理ナンバー'
  vun_kgkiyk: number; // '契約金額'
  vun_kgkykj: number; // '解除金額'
  vun_kgnykn: number; // '入金金額'
  vun_kgzndk: number; // '残高'
};

export type Urnks = Urnk[];
