export interface CartStore {
    // TODO change this to declared type for products
    // tslint:disable-next-line: no-any
    readonly items: ReadonlyArray<any>;
    readonly cost: number;
}

export const buildDefaultStore = (): CartStore => ({
    items: [],
    cost: 0,
});

export const reducer = (store: CartStore = buildDefaultStore()): CartStore => (
    store
);