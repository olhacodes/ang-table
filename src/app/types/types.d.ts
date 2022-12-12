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

interface INotifications {
    id: string;
    status: string;
    number: number;
    instalDate: string;
    description: string;
    progress: number;
    total: number;
}

interface IOrders {
    id: string;
    status: string;
    number: number;
    date: string;
    title: string;
    custNumber: number;
    progress: number;
    total: number;
}

interface IServiceTikets {
    id: string;
    status: string;
    number: number;
    date: string;
    title: string;
    custNumber: number;
    progress: number;
    total: number;
}