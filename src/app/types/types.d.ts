interface ITable {
    id: string;
    status: string;
    image: string;
    number: number;
    description: string;
    instalDate: string;
    lastService: string;
    nbComponents: number;
}

interface IState {
    sortStatus: string;
    sortDescription: string;
}

interface IFilterResult {
	tableData: ITable[];
}