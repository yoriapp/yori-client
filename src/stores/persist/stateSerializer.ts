class StateSerializer {
    static serialize<T>(state: T): string {
        return JSON.stringify(state);
    }

    static deserialize<T>(serializedState: string): T | undefined {
        try {
            return JSON.parse(serializedState) as T;
        } catch (error) {
            return undefined;
        }
    }
}

export default StateSerializer;
