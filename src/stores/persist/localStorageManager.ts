import StateSerializer from './stateSerializer';

class LocalStorageManager {
    static saveState<T>(key: string, state: T): void {
        localStorage.setItem(key, StateSerializer.serialize(state));
    }

    static loadState<T>(key: string): T | undefined {
        const serializedState = localStorage.getItem(key);
        return serializedState ? StateSerializer.deserialize<T>(serializedState) : undefined;
    }
}

export default LocalStorageManager;
