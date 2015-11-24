module Utils {
    export class path {
        prefix: string;
        constructor(prefix: string = 'js/') {
            this.prefix = prefix;
        }
        viewToString(path: string = '') {
            return this.prefix + path;
        }
    }
}