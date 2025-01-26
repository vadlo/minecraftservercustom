Elerion: Blood and Steel v0.9.5.1
Инструкция по запуску Minecraft Fabric Server с Elerion: Blood and Steel v0.9.5.1
1. Клонирование репозитория
Для начала клонируйте репозиторий на вашу локальную машину:

```
git clone https://github.com/vadlo/minecraftservercustom.git
```

Создайте папку для тома и перейдите в директорию проекта:

mkdir minecraftservercustom  # создание папки для тома
cd minecraftservercustom     # перейдите в директорию

2. Настройка Docker Compose
Убедитесь, что на вашей машине установлен Docker и Docker Compose. Если они ещё не установлены, следуйте инструкциям по установке.

В корне вашего репозитория должен быть файл docker-compose.yml. Он будет выглядеть так:
```
version: '3.8'

services:
  mc:
    image: itzg/minecraft-server
    ports:
      # expose the Minecraft server port outside of container
      - "25565:25565" // server server
      - "25577:25575" // rcon port
    environment:
      # REQUIRED for all types
      EULA: "TRUE"
      MEMORY: 8G      // объем выделенной памяти
      # Set server type (vs the default of vanilla)
      TYPE: "fabric"
      VERSION: "1.19.2"
      DEBUG: "true"
    volumes:
      - ./data:/data
      - ./mods:/mods:ro

volumes:
  # declared the named volume, but use default/local storage engine
  data: {}
```
3. Конфигурация серверных файлов
В директории репозитория создайте две папки:

data — для хранения данных Minecraft сервера.
mods — для модов Minecraft, включая Elerion: Blood and Steel.
Поместите все моды и настройки вашего мира Minecraft в соответствующие папки:

mods: Убедитесь, что все нужные моды, включая Elerion: Blood and Steel v0.9.5.1, находятся в этой папке.
data: Эта папка будет содержать все игровые данные, включая миры, конфигурации и другие файлы, создаваемые сервером.
4. Запуск сервера
После того как все настроено, вы можете запустить Minecraft сервер с помощью Docker Compose:

```
docker-compose up -d
```

Команда запустит сервер в фоновом режиме. Вы можете отслеживать логи с помощью команды:

```
docker-compose logs -f
```

5. Настройка модов и серверных настроек
Если вы хотите установить дополнительные моды или изменить конфигурацию сервера, сделайте это в папках mods и data, а затем перезапустите сервер:

```
docker-compose restart
```

7. Остановка сервера
Чтобы остановить сервер, выполните команду:

```
docker-compose down
```

Эта команда остановит все контейнеры и очистит ресурсы, но оставит данные в томах.

Примечания
EULA: В файле docker-compose.yml установлено EULA: "TRUE", что означает, что вы согласились с лицензионным соглашением Minecraft. Если вы ещё не согласились, откройте EULA и примите его.

Тип сервера: В конфигурации указано TYPE: "fabric", что означает использование модификации Fabric. Убедитесь, что у вас установлены соответствующие моды для Fabric.

Порты: Minecraft сервер будет доступен на порту 25565. Вы можете изменить порты в секции ports файла docker-compose.yml.


