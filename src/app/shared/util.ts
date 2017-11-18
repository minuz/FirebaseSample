export class ApiUrl {
    public static car = '/collections/cars';
    public static bike = '/collections/bikes';
    public static motorcycle = '/collections/motorcycles';
    public static truck = '/collections/trucks';
}

export class Guid {

    public static Empty() {
        return '00000000-0000-0000-0000-000000000000';
    }

    public static NewGuid() {
        const S4 = () => (Guid.GenerateRandom()).toString(16).substring(1);

        // then to call it, plus stitch in '4' in the third group
        return (S4() + S4() + '-' + S4() + '-4' + S4().substr(0, 3) + '-' + S4() + '-' + S4() + S4() + S4()).toLowerCase();
    }

    private static GenerateRandom() {
        // tslint:disable-next-line:no-bitwise
        return ((1 + Math.random()) * 0x10000) | 0;
    }
}