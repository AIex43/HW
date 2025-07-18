# Домашнє завдання до Теми Поведінкові патерни: Ланцюжок відповідальностей та Посередник

### Опис завдання

Мета домашнього завдання — закріпити знання поведінкових патернів, **Ланцюжок відповідальностей** та **Посередник**, у сценарії обробки даних наближеному до реальності.

Ви реалізуєте систему, яка приймає масив записів у форматі `JSON`, проводить їхню валідацію, обробку та зберігає результати у відповідні файли залежно від формату.

Ваша задача — реалізувати обробник вхідних записів у форматі `.json`, кожен з яких має поле `type` та специфічну структуру. Дані необхідно передати через ланцюг обробників, який виконує валідацію та підготовку до збереження. Залежно від типу, результат зберігається у відповідний файл через централізованого посередника. У разі помилки — запис фіксується у файл відхилених `rejected.jsonl`.

Тож весь процес організовано у два рівні:

- Ланцюжки відповідальності відповідають за обробку даних різних типів: `access_log`, `transaction`, `system_error`;
- Посередник централізує процес збереження та маршрутизації результатів: успішні та помилкові записи.

Це завдання моделює практичну утиліту, яка аналізує структуровані дані, фільтрує помилки та зберігає звіти у форматі `.json`, `.csv` та `.jsonl`.

## Завдання

Структура проєкту

```
/
├── data/
│   └── records.json                  # Вхідний файл з необробленими записами
├── chain/
│   ├── AbstractHandler.ts           # Базовий клас для ланцюга відповідальностей
│   ├── handlers/
│   │   ├── TimestampParser.ts       # Парсинг timestamp у формат ISO
│   │   ├── UserIdValidator.ts       # Перевірка коректності userId
│   │   ├── IpValidator.ts           # Перевірка валідності IP-адреси (IPv4)
│   │   ├── AmountParser.ts          # Парсинг числових значень amount
│   │   ├── CurrencyNormalizer.ts    # Нормалізація валютного поля (ISO-формат)
│   │   ├── LevelValidator.ts        # Валідація рівня помилки (error, warning, info)
│   │   └── MessageTrimmer.ts        # Обрізання пробілів у повідомленні
│   └── chains/
│       ├── AccessLogChain.ts        # Ланцюг обробки access_log
│       ├── TransactionChain.ts      # Ланцюг обробки transaction
│       └── SystemErrorChain.ts      # Ланцюг обробки system_error
├── mediator/
│   ├── ProcessingMediator.ts        # Центральний посередник для збереження результатів
│   └── writers/
│       ├── AccessLogWriter.ts       # Збереження access_log у CSV
│       ├── TransactionWriter.ts     # Збереження transaction у JSON
│       ├── ErrorLogWriter.ts        # Збереження system_error у JSONL
│       └── RejectedWriter.ts        # Відхилені записи з помилками у JSONL
├── output/                          # Директорія для вихідних файлів
├── models/
│   └── DataRecord.ts                # Структура одного запису
└── main.ts                          # Точка входу для запуску
```

Вхідні дані — файл `records.json` містить масив записів.
