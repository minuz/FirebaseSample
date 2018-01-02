export class TableHeader {
    key: string;
    label: string;

    constructor(options: {
        key?: string,
        label?: string
    }) {
        this.key = options.key;
        this.label = options.label;
    }
}
