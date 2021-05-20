import {ScopeObject} from './ScopeObject';

export class Scope {
    public childs: Scope[] = [];

    constructor(private raws: string, private obj: any, private config = {start: '{%', end: '%}'}) {
        this.run();
    }

    execResult(): string {
        let result = this.raws;
        this.childs.forEach(it => {
            const scopeObject = it.exec();
            result = result.replace(this.config.start + it.raws + this.config.end, scopeObject.writes)
        })
        return result;
    }

    exec(): ScopeObject {
        const scopeObject = new ScopeObject();
        const target = Object.assign(scopeObject, this.obj) as ScopeObject
        target.eval(this.raws);
        return target;
    }

    private run(): Scope {
        // const targetRaws = this.raws.substring(this.config.start.length, this.raws.length - this.config.end.length);
        const targetRaws = this.raws;
        let i = this.indexOf(targetRaws, this.config.start);
        while (i !== -1) {
            const startIdx = i;
            let endIdex = this.tailIndexOf(targetRaws, this.config.end, i);
            while (endIdex !== -1) {
                const sub = targetRaws.substring(startIdx, endIdex);
                const matchStart = sub.match(RegExp(this.config.start, 'gm')) || [];
                const matchEnd = sub.match(RegExp(this.config.end, 'gm')) || [];
                if (matchStart.length === matchEnd.length) {
                    this.childs.push(new Scope(sub.substring(this.config.start.length, sub.length - this.config.end.length), this.obj, this.config));
                    // this.childs.push(new Scope(sub, this.config));
                    break;
                }
                // console.log(matchStart, matchEnd)
                // console.log(sub)
                endIdex = this.tailIndexOf(targetRaws, this.config.end, endIdex);
            }

            if (endIdex !== -1) {
                i = this.indexOf(targetRaws, this.config.start, endIdex)
            } else {
                break;
            }
        }
        return this;
    }

    public indexOf(data: string, searchString: string, position?: number): number {
        return data.indexOf(searchString, position);
    }

    public tailIndexOf(data: string, searchString: string, position?: number): number {
        const number = data.indexOf(searchString, position);
        return number !== -1 ? number + searchString.length : number;
    }
}
