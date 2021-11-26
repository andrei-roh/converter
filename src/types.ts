export interface Currency {
    Cur_Abbreviation: string;
    Cur_ID: number;
    Cur_Name: string;
    Cur_OfficialRate: number;
    Cur_Scale: number;
}

export interface State {
    loading: boolean;
    error: string;
    defaultValue: Array<number>;
    belarusRuble: Currency;
    belarusianRubleRate: any,
    belarusRubleToOther: number;
    theme: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export interface IMain extends State {
    onfetchBelarusRubleRate: any,
}