/** ヘッダーナビゲーション用のページリンク */
export const NAV_LINKS = [
    { page: "> TOP", path: "/" },
    { page: "> CREATE", path: "/create" },
    { page: "> SEARCH", path: "/search" },
] as const;

/** フォーム用のカテゴリオプション */
export const CATEGORY_OPTIONS = [
    { label: "SIGHTSEEING", value: 1 },
    { label: "MEAL", value: 2 },
    { label: "ACCOMMODATION", value: 3 },
    { label: "ENTERTAINMENT", value: 4 },
    { label: "SHOPPING", value: 5 },
    { label: "OTHER", value: 6 },
];

export type Log = {
    date: string;
    category: string;
    spot: string;
    note: string;
    expense: string;
};

export type Travel = {
    dateStart: string;
    dateEnd: string;
    destination: string;
};
