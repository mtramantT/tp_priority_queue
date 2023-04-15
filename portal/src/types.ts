export const isObject = <T extends object>(val: any): val is T => {
    if (val === null || typeof val !== 'object' || typeof val === 'function' || typeof val === 'undefined') {
        return false;
    }
    const reqKeyList: (keyof T)[] = Object.keys({} as Required<T>) as (keyof T)[];
    for (const key of reqKeyList) {
        if (!(key in val)) {
            return false;
        }
    }
    return true;
};

export type RequireOne<T, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, undefined>> }[K];
