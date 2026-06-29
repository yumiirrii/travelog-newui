import { CATEGORY_OPTIONS } from "./consts";

/**
 * 開始日から終了日までの日数を計算する
 */
export const calcDates = (date_start: string, date_end: string) => {
    const dateS = new Date(date_start);
    const dateE = new Date(date_end);
    const diffTime = dateE.getTime() - dateS.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dates: string[] = [];
    for (let x = 0; x <= diffDays; x++) {
        const startDate = new Date(dateS);
        startDate.setDate(startDate.getDate() + x);
        dates.push(startDate.toISOString().split("T")[0]);
    }
    return dates;
};

/**
 * カテゴリオプションからラベルを取得する
 */
export const convertToLabel = (value: number) => {
    return CATEGORY_OPTIONS.find((option) => option.value === value)?.label;
};
