import { createStore } from 'redux';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // storage - браузерное локальное хранилище


const persistConfig = { // этот конфиг (наши настройки) может содержать больше ключей, чем есть по умолчанию (добавим whitelist и blacklist)
    key: 'root', // в локалке ключ будет называться persist:root (можем придумать любое название)
    storage,
    // whitelist: ['filters', 'positions'], // whitelist - инструмент, где мы перечисляем набор ключей, которые должны храниться в локальном хранилище (всё остальное бы в хранилище не попало)
    // blacklist: ['positions'], // blacklist - обратная операция, перечисляем ключи, которые не хотим хранить в локалке (всё, что тут не перечислено - будет сохраняться в локалке)
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // некая обёртка над нашим редьюсером, нужная для логики и работы библиотеки redux-persist


export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);