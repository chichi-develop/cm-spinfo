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
  createdAt: Date; // '作成日'
  updatedAt: Date; // '更新日'
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
  createdAt: Date; // '作成日'
  updatedAt: Date; // '更新日'
};

export type Aclgs = Aclg[];
